"""회차별 한국어 자동 자막(ASR)을 받아 work/transcripts/ 에 저장한다.

    python tools/fetch_transcript.py 21 22 23      # 특정 회차
    python tools/fetch_transcript.py 24-34 40-60   # 구간
    python tools/fetch_transcript.py               # 이미 만든 회차 데이터가 있는 것들

회차 번호 → videoId 는 data/episodes_index.json 에서 찾는다.
그 파일은 tools/crawl_youtube.py 로 만든다.

수동 자막은 없고 자동 생성(ASR) 트랙만 있으므로 품질이 완벽하지 않다.
줄거리 파악의 보조 자료로 쓴다 — 사람 이름과 사물 이름이 자주 틀린다.
"""
from __future__ import annotations

import json
import re
import sys

from _common import DATA, WORK


def fetch(video_id: str) -> list[dict]:
    from youtube_transcript_api import YouTubeTranscriptApi

    api = YouTubeTranscriptApi()
    listing = api.list(video_id)
    try:
        track = listing.find_manually_created_transcript(["ko"])
    except Exception:
        track = listing.find_generated_transcript(["ko"])
    return [
        {"start": round(s["start"], 2), "dur": round(s["duration"], 2), "text": s["text"]}
        for s in track.fetch().to_raw_data()
    ]


def mmss(seconds: float) -> str:
    return f"{int(seconds) // 60:02d}:{int(seconds) % 60:02d}"


def parse_range(args: list[str]) -> list[int]:
    """'21' '24-34' 를 회차 번호 목록으로."""
    out: list[int] = []
    for a in args:
        m = re.fullmatch(r"(\d+)-(\d+)", a)
        if m:
            out.extend(range(int(m.group(1)), int(m.group(2)) + 1))
        elif a.isdigit():
            out.append(int(a))
    return sorted(set(out))


def load_episodes(numbers: list[int] | None) -> list[dict]:
    """회차 번호 → {ep, word, video_id}. 인덱스 파일에서 찾는다."""
    path = DATA / "episodes_index.json"
    if not path.exists():
        print("data/episodes_index.json 이 없습니다. 먼저 tools/crawl_youtube.py 를 실행하세요.")
        return []

    index = json.loads(path.read_text(encoding="utf-8"))
    by_num = {r["episode"]: r for r in index["season1"] if r.get("episode")}

    if numbers is None:
        numbers = sorted(
            int(p.stem[2:]) for p in (DATA / "episodes").glob("ep*.js")
        )

    episodes = []
    for n in numbers:
        r = by_num.get(n)
        if not r:
            print(f"[{n}화] 인덱스에 없습니다")
            continue
        m = re.search(r"(?:제)?\s*\d+\s*화\s*[-—]?\s*(.+)$", r["title"])
        word = (m.group(1) if m else r["title"]).strip(" -—_")
        episodes.append({"ep": n, "word": word, "video_id": r["videoId"]})
    return episodes


def main(argv: list[str]) -> int:
    numbers = parse_range(argv) if argv else None
    episodes = load_episodes(numbers)
    if not episodes:
        print("받을 회차가 없습니다.")
        return 1

    outdir = WORK / "transcripts"
    outdir.mkdir(parents=True, exist_ok=True)

    for e in episodes:
        try:
            segments = fetch(e["video_id"])
        except Exception as exc:  # noqa: BLE001 - 어떤 실패든 회차 단위로 넘어간다
            print(f"[{e['ep']:03d}화] 실패: {type(exc).__name__}: {exc}")
            continue

        stem = outdir / f"ep{e['ep']:03d}"
        stem.with_suffix(".json").write_text(
            json.dumps({"episode": e["ep"], "videoId": e["video_id"], "segments": segments},
                       ensure_ascii=False, indent=1),
            encoding="utf-8",
        )
        # 사람이 읽기 좋은 형태 — 줄거리 파악용
        lines = [f"[{mmss(s['start'])}] {s['text']}" for s in segments if s["text"].strip()]
        stem.with_suffix(".txt").write_text("\n".join(lines), encoding="utf-8")
        print(f"[{e['ep']:03d}화 {e['word']}] 세그먼트 {len(segments)}개 → {stem.name}.txt")

    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
