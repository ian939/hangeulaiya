"""시즌2 회차 명세(s2_specs.py) → data/episodes/s2epNNN.js 생성.

    python tools/gen_s2.py            # 전체
    python tools/gen_s2.py 32 37      # 특정 회차
    python tools/gen_s2.py --dry      # 만들 내용만 요약

시즌1 과 왜 생성기가 다른가
---------------------------
시즌1 은 '글자' 를 배워서 활동이 목표 자모와 혼동표에서 기계적으로 나왔다.
시즌2 는 '낱말의 뜻' 을 배운다. 뜻을 가르는 문장은 기계가 만들 수 없다 —
그게 이 단원의 학습 내용 자체다. 그래서 문장은 명세에 손으로 쓰고,
생성기는 **활동 껍데기를 일관되게 조립**하는 일만 한다.
(코스 배정·문항 수·쓰기 관용 오차·보상 낱말을 회차마다 손으로 맞추면 어긋난다.)
"""
from __future__ import annotations

import argparse
import json
import sys

from _common import DATA
from s2_specs import S2_SPECS

HEADER = """/* 시즌2 {ep}화 「{title}」 — {kindLabel}
 *
 * {why}
 *
 * 이 파일은 tools/gen_s2.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/s2_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리 컷(이야기 퀴즈·이야기 순서)은 자막을 받은 뒤 채웁니다.
 * 낱말과 문장이 이 단원의 본 내용이라, 그것부터 넣었습니다.
 */
"""

KIND_LABEL = {
    "antonym": "반대말",
    "nearPair": "형태가 비슷한 낱말",
    "polysemy": "한 낱말의 여러 뜻",
    "compound": "낱말이 합쳐진 말",
    "trio": "서로 관련 있는 세 낱말",
    "related": "짝을 이루는 낱말",
}


def gen_wordpair(s):
    """낱말 고르기 — 문장을 읽고 뜻으로 낱말을 고른다. 소리를 내지 않는 활동이다."""
    items = []
    for c in s["choose"]:
        opts = [{"word": c["ok"], "correct": True}]
        for word, why in c.get("no", []):
            opts.append({"word": word, "why": why})
        it = {"sentence": c["s"], "options": opts}
        if c.get("prompt"):
            it["prompt"] = c["prompt"]
        if c.get("hint"):
            it["hint"] = c["hint"]
        if c.get("after"):
            it["after"] = c["after"]
        items.append(it)

    return {
        "type": "wordpair", "id": "W",
        "title": s.get("chooseTitle", "낱말 고르기"),
        "courses": ["short", "full"], "shortCount": 3,
        "items": items,
    }


def gen_sentence(s):
    items = []
    for m in s.get("make", []):
        items.append({
            "words": m["w"],
            "say": " ".join(m["w"]),
            "decoys": m.get("no", []),
            "hint": m.get("hint", "누가? 무엇을? 어떻게 해요?"),
        })
    if not items:
        return None
    return {
        "type": "sentence", "id": "S", "title": "문장 만들기",
        "courses": ["full"], "items": items,
    }


def gen_match(s):
    pairs = [{"word": w, "pic": p} for w, p in s.get("pics", [])]
    if len(pairs) < 3:
        return None
    return {
        "type": "match", "id": "G", "title": "낱말과 그림",
        "courses": ["full"],
        "prompt": s.get("matchPrompt", "낱말과 그림을 이어 보세요"),
        "pairs": pairs,
    }


def gen_writing(s):
    items = []
    for w, note in s.get("write", []):
        items.append({
            "target": w,
            "kind": "word" if len(w) > 1 else "syllable",
            "prompt": "'" + w + "' 를 따라 써 보세요",
            "note": note,
        })
    if not items:
        return None
    return {
        "type": "writing", "id": "E", "title": "한글 쓰기",
        "courses": ["short", "full"], "shortCount": 1,
        # 시즌2 는 글자를 다 배운 뒤라 시즌1 마지막 단원과 같은 기준으로 본다
        "toleranceEm": 0.15, "passScore": 0.57,
        "items": items,
    }


def build(s):
    acts = [gen_wordpair(s)]
    for fn in (gen_sentence, gen_match, gen_writing):
        a = fn(s)
        if a:
            acts.append(a)

    return {
        "episode": s["ep"],
        "season": 2,
        "title": s["title"],
        "videoId": s["video"],
        "focus": s["focus"],
        "objective": s.get("objective", KIND_LABEL[s["kind"]] + "로 이야기를 통해 한글을 익힌다"),
        "jamo": {"new": [], "seen": []},
        "targetWords": s["words"],
        "wordFocus": {"kind": s["kind"], "words": s["words"]},
        "rewards": {"cards": [], "words": s["words"]},
        "activities": acts,
    }


def write_js(data, s):
    head = HEADER.format(ep=data["episode"], title=data["title"],
                         kindLabel=KIND_LABEL[s["kind"]], why=s["why"])
    body = json.dumps(data, ensure_ascii=False, indent=2)
    js = (head + "(function (AIYA) {\n  'use strict';\n  AIYA.registerEpisode(\n"
          + body + "\n  );\n})(window.AIYA);\n")
    path = DATA / "episodes" / f"s2ep{data['episode']:03d}.js"
    path.write_text(js, encoding="utf-8")
    return path


def main(argv) -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("eps", nargs="*", type=int)
    ap.add_argument("--dry", action="store_true")
    args = ap.parse_args(argv)

    specs = [s for s in S2_SPECS if not args.eps or s["ep"] in args.eps]
    print(f"시즌2 회차 {len(specs)}편\n")

    made = 0
    for s in specs:
        data = build(s)
        counts = " ".join(
            f"{a['id']}:{len(a.get('items') or a.get('pairs'))}" for a in data["activities"])
        print(f"  {s['ep']:>3}화 {s['title']:<16} {KIND_LABEL[s['kind']]:<12} {counts}")
        if not args.dry:
            write_js(data, s)
            made += 1

    if args.dry:
        print("\n(--dry: 파일을 쓰지 않았습니다)")
        return 0
    print(f"\n{made}개 파일 생성 → data/episodes/")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
