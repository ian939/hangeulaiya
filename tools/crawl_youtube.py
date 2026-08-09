"""EBS 키즈 채널에서 「한글용사 아이야」 전 회차를 긁어 인덱스를 만든다.

    python tools/crawl_youtube.py            # 전체 크롤 (몇 분 걸림)
    python tools/crawl_youtube.py --cached   # 이미 받아둔 결과만 분류

결과: data/episodes_index.json

왜 search.list 를 쓰지 않는가
----------------------------
search.list 는 호출당 100유닛이고 한 질의로 500개까지만 닿으며, 색인이
최선 노력 방식이라 회차가 빠질 수 있다. 채널의 uploads 재생목록을 페이징하면
호출당 1유닛이고 전수라서, 26,000개 영상이라도 약 525유닛으로 끝난다.
(무료 일일 할당량 10,000유닛)

이 스크립트의 진짜 목적은 **지금 앱 프레임으로 만들 수 있는 회차를 세는 것**이다.
회차 설명란에 학습 목표가 그대로 적혀 있어서 기계적으로 분류할 수 있다.
  "모음 'ㅗ' 의 소리를 인식한다"  → 모음 회차
  "자음 'ㄱ' 을 인식한다"        → 자음 회차
  "받침 'ㄱ' 을 인식한다"        → 받침 회차   ← 지금 만든 3편이 여기
그 밖(문장·어휘·특집)은 프레임이 그대로 맞지 않는다.
"""
from __future__ import annotations

import argparse
import json
import re
import sys
import urllib.parse
import urllib.request

from _common import DATA, WORK, load_env

API = "https://www.googleapis.com/youtube/v3/"
RAW = WORK / "channel_videos.json"


def get(endpoint: str, **params) -> dict:
    params["key"] = KEY
    url = API + endpoint + "?" + urllib.parse.urlencode(params)
    with urllib.request.urlopen(url, timeout=30) as r:
        return json.loads(r.read().decode("utf-8"))


def crawl_uploads(uploads_id: str) -> list[dict]:
    """uploads 재생목록 전체를 페이징한다. 호출당 1유닛."""
    out: list[dict] = []
    token = None
    page = 0
    while True:
        page += 1
        kw = dict(part="snippet,contentDetails", playlistId=uploads_id, maxResults=50)
        if token:
            kw["pageToken"] = token
        r = get("playlistItems", **kw)
        for it in r.get("items", []):
            out.append({
                "videoId": it["contentDetails"]["videoId"],
                "title": it["snippet"]["title"],
                "publishedAt": it["contentDetails"].get("videoPublishedAt"),
            })
        token = r.get("nextPageToken")
        if page % 25 == 0:
            print(f"  {page}페이지 / 누적 {len(out)}개")
        if not token:
            break
    return out


def hydrate(video_ids: list[str]) -> dict[str, dict]:
    """설명란·길이를 채운다. 50개 묶음당 1유닛."""
    info: dict[str, dict] = {}
    for i in range(0, len(video_ids), 50):
        chunk = video_ids[i:i + 50]
        r = get("videos", part="snippet,contentDetails", id=",".join(chunk))
        for it in r.get("items", []):
            info[it["id"]] = {
                "description": it["snippet"].get("description", ""),
                "duration": it["contentDetails"].get("duration", ""),
            }
    return info


# ── 제목에서 회차 번호와 계열 뽑기 ────────────────────────────────
# 제목 형식이 회차마다 다르다. 관찰된 형태를 모두 받는다.
TITLE_PATTERNS = [
    # 약속 편 / 어휘 편 / 형용사 편 …
    (re.compile(r"(약속|어휘|형용사|부사|동사)\s*편\s*(\d+)\s*화"), "spinoff"),
    # ...ㅣ한글용사 아이야ㅣ64화  제목      (시즌2)
    (re.compile(r"ㅣ\s*한글용사\s*아이야\s*ㅣ\s*(\d+)\s*화"), "s2"),
    # 한글용사 아이야 - 제21화 - 약  /  한글용사_아이야_제87화 - ...
    (re.compile(r"한글용사[\s_]*아이야[\s_]*[-—]?\s*제\s*(\d+)\s*화"), "s1"),
    # 한글용사 아이야 - 1화 아이야  /  - 7화 - 으
    (re.compile(r"한글용사[\s_]*아이야[\s_]*[-—]\s*(\d+)\s*화"), "s1"),
]

# 설명란의 학습 목표 → 지금 프레임과의 궁합
OBJ_PATTERNS = [
    (re.compile(r"받침\s*['\"]?(.+?)['\"]?\s*(?:을|를)\s*인식"), "받침"),
    (re.compile(r"자음\s*['\"]?(.+?)['\"]?\s*(?:을|를)\s*인식"), "자음"),
    (re.compile(r"모음\s*['\"]?(.+?)['\"]?\s*(?:의|을|를)\s*소리"), "모음"),
    (re.compile(r"모음\s*['\"]?(.+?)['\"]?\s*(?:을|를)\s*인식"), "모음"),
]


def parse_title(title: str):
    for rx, kind in TITLE_PATTERNS:
        m = rx.search(title)
        if m:
            num = int(m.group(m.lastindex))
            return kind, num
    return None, None


def parse_objective(desc: str):
    first = (desc or "").strip().split("\n")[0][:120]
    for rx, kind in OBJ_PATTERNS:
        m = rx.search(first)
        if m:
            return kind, m.group(1).strip().strip("'\" "), first
    return None, None, first


def main(argv) -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--cached", action="store_true", help="이미 받아둔 목록만 다시 분류")
    args = ap.parse_args(argv)

    global KEY
    env = load_env()
    KEY = env.get("YOUTUBE_API_KEY")
    channel = env.get("YOUTUBE_CHANNEL_ID")
    if not KEY:
        print(".env 에 YOUTUBE_API_KEY 가 없습니다.")
        return 1

    WORK.mkdir(parents=True, exist_ok=True)

    if args.cached and RAW.exists():
        payload = json.loads(RAW.read_text(encoding="utf-8"))
        videos, info = payload["videos"], payload["info"]
        print(f"저장된 목록 사용: 영상 {len(videos)}개")
    else:
        ch = get("channels", part="contentDetails,statistics", id=channel)
        uploads = ch["items"][0]["contentDetails"]["relatedPlaylists"]["uploads"]
        total = ch["items"][0]["statistics"]["videoCount"]
        print(f"채널 영상 {total}개 — uploads 재생목록 {uploads} 페이징")

        allv = crawl_uploads(uploads)
        print(f"전체 {len(allv)}개 수집")

        videos = [v for v in allv if "한글용사" in v["title"] or "아이야" in v["title"]]
        print(f"'한글용사/아이야' 제목 {len(videos)}개")

        print("설명란 채우는 중…")
        info = hydrate([v["videoId"] for v in videos])
        RAW.write_text(json.dumps({"videos": videos, "info": info}, ensure_ascii=False),
                       encoding="utf-8")

    # ── 분류 ──────────────────────────────────────────────────
    rows = []
    for v in videos:
        kind, num = parse_title(v["title"])
        desc = info.get(v["videoId"], {}).get("description", "")
        obj_kind, obj_target, obj_text = parse_objective(desc)
        rows.append({
            "videoId": v["videoId"],
            "title": v["title"],
            "publishedAt": v["publishedAt"],
            "duration": info.get(v["videoId"], {}).get("duration", ""),
            "series": kind,
            "episode": num,
            "objectiveKind": obj_kind,     # 모음 | 자음 | 받침 | None
            "objectiveTarget": obj_target,
            "objectiveText": obj_text,
        })

    # 시즌1 본편만 회차 번호로 정리 (중복은 설명란이 있는 쪽을 남긴다)
    s1: dict[int, dict] = {}
    for r in rows:
        if r["series"] != "s1" or not r["episode"]:
            continue
        cur = s1.get(r["episode"])
        if cur is None or (not cur["objectiveKind"] and r["objectiveKind"]):
            s1[r["episode"]] = r

    DATA.mkdir(parents=True, exist_ok=True)
    (DATA / "episodes_index.json").write_text(
        json.dumps({"all": rows, "season1": [s1[k] for k in sorted(s1)]},
                   ensure_ascii=False, indent=1),
        encoding="utf-8")

    # ── 보고 ──────────────────────────────────────────────────
    def count(kind):
        return sorted(k for k in s1 if s1[k]["objectiveKind"] == kind)

    print("\n" + "=" * 62)
    print("  지금 앱 프레임으로 만들 수 있는 회차")
    print("=" * 62)
    for kind in ("모음", "자음", "받침"):
        eps = count(kind)
        if not eps:
            continue
        span = f"{eps[0]}~{eps[-1]}화" if len(eps) > 1 else f"{eps[0]}화"
        print(f"\n  {kind} 회차 — {len(eps)}편 ({span})")
        for e in eps:
            r = s1[e]
            print(f"     {e:>3}화  {r['objectiveTarget']:<6} {r['videoId']}  {r['title'][:44]}")

    unknown = sorted(k for k in s1 if not s1[k]["objectiveKind"])
    print(f"\n  프레임이 그대로 맞지 않는 시즌1 회차 — {len(unknown)}편")
    for e in unknown[:60]:
        print(f"     {e:>3}화  {s1[e]['objectiveText'][:56]}")

    others = {}
    for r in rows:
        if r["series"] in (None, "s1"):
            continue
        others.setdefault(r["series"], []).append(r)
    print("\n  본편 밖 계열")
    for k, v in sorted(others.items()):
        nums = [x["episode"] for x in v if x["episode"]]
        print(f"     {k:<8} {len(v):>4}개" + (f"  (최대 {max(nums)}화)" if nums else ""))

    print(f"\n  시즌1 본편으로 찾은 회차: {len(s1)}편")
    print(f"  → data/episodes_index.json 저장")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
