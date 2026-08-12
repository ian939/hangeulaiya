"""회차 명세(episode_specs.py) → data/episodes/epNNN.js 생성.

    python tools/gen_episodes.py            # 전체 생성
    python tools/gen_episodes.py 24 25      # 특정 회차만
    python tools/gen_episodes.py --dry      # 만들 내용만 요약해 보기

왜 생성기를 쓰는가
------------------
활동 8종 중 5종(소리·글자찾기·자판기·사라진받침·쓰기)은 목표 자모와 혼동표에서
기계적으로 파생된다. 32편을 손으로 쓰면 같은 판단을 32번 반복하면서 실수가 섞인다.
손으로 쓸 것은 회차별 사실(줄거리·장소·퀴즈)뿐이고, 그건 episode_specs.py 에 있다.

누적 자모 규칙(N화 시점에 안 배운 글자를 정답·오답으로 쓰지 않는다)도 여기서
지킨다. 생성 후 tools/lint_content.mjs 가 다시 검사한다.
"""
from __future__ import annotations

import argparse
import json
import sys

import hangul as H
import wordbank as WB
from _common import DATA
from episode_specs import ALL_SPECS, PLACE_EMOJI

# ── 커리큘럼 (data/common/cards.js 와 같아야 한다) ─────────────
CURRICULUM: dict[int, list[str]] = {
    1: ["ㅏ", "ㅣ", "ㅑ", "ㅇ"], 2: ["ㅗ"], 3: ["ㅓ"], 4: ["ㅕ", "ㅜ"], 5: ["ㅠ"],
    6: ["ㅛ"], 7: ["ㅡ"],
    8: ["ㄱ"], 9: ["ㄴ"], 10: ["ㄷ"], 11: ["ㄹ"], 12: ["ㅁ"], 13: ["ㅂ"],
    14: ["ㅅ"], 15: ["ㅈ"], 16: ["ㅊ"], 17: ["ㅋ"], 18: ["ㅌ"], 19: ["ㅍ"], 20: ["ㅎ"],
    21: ["받침 ㄱ"], 22: ["받침 ㄴ"], 23: ["받침 ㄷ"], 24: ["받침 ㄹ"], 25: ["받침 ㅁ"],
    26: ["받침 ㅂ"], 27: ["받침 ㅅ"], 28: ["받침 ㅇ"], 29: ["받침 ㅈ"], 30: ["받침 ㅊ"],
    31: ["받침 ㅋ"], 32: ["받침 ㅌ"], 33: ["받침 ㅍ"], 34: ["받침 ㅎ"],
    35: ["ㄲ"], 36: ["ㄸ"], 37: ["ㅃ"], 38: ["ㅆ"], 39: ["ㅉ"],
    40: ["ㅐ"], 41: ["ㅒ"], 42: ["ㅔ"], 43: ["ㅖ"], 44: ["ㅘ"], 45: ["ㅙ"],
    46: ["ㅚ"], 47: ["ㅝ"], 48: ["ㅞ"], 49: ["ㅟ"], 50: ["ㅢ"],
    51: ["받침 ㄲ"], 52: ["받침 ㅆ"], 53: ["받침 ㄵ"], 54: ["받침 ㄶ"], 55: ["받침 ㄺ"],
    56: ["받침 ㄻ"], 57: ["받침 ㄼ"], 58: ["받침 ㄾ"], 59: ["받침 ㅀ"], 60: ["받침 ㅄ"],
}


def introduced_by_ep() -> dict[int, set[str]]:
    """회차마다 **함께 소개되는** 자모.

    방송은 오늘의 자모만 다루지 않는다. 목표 낱말을 만들려면 다른 자모도
    필요하고, 그건 용사가 그 회차에서 찾아오며 이름을 불러 소개한다.
      3화 「어디」 — 오늘은 모음 ㅓ 인데 ㄷ 을 '다리' 에서 찾아온다
      8화 「가수」 — 오늘은 자음 ㄱ 인데 ㅅ 을 '산' 에서 찾아온다
    그래서 '아직 안 배운 글자를 쓰지 않는다' 규칙의 기준은 카드 배정표가
    아니라 여기까지 합친 것이어야 한다. 카드(앨범)는 여전히 CURRICULUM 만 따른다.

    data/common/cards.js 의 introduced 와 같은 내용이어야 한다.
    """
    out: dict[int, set[str]] = {}
    for s in ALL_SPECS:
        seen = set()
        for j, pos, _place, _at in s["hunts"]:
            if pos == "jong":
                seen.add("받침 " + j)          # 받침 자리는 카드 이름이 다르다
            elif pos in ("cho", "jung"):
                seen.update(H.parts(j))
        # 목표 낱말에 실제로 쓰인 자모도 그 회차에서 소개된다
        for ch in s["word"]:
            d = H.decompose(ch)
            if d:
                seen.update(H.parts(d[0]))
                seen.update(H.parts(d[1]))
                if d[2]:
                    seen.add("받침 " + d[2])
        out[s["ep"]] = seen
    return out


INTRODUCED = introduced_by_ep()


def allowed_cards(ep: int) -> set[str]:
    """그 회차 시점에 쓸 수 있는 자모 (카드 + 그때까지 소개된 것)."""
    out: set[str] = set()
    for n, cards in CURRICULUM.items():
        if n <= ep:
            out.update(cards)
    for n, seen in INTRODUCED.items():
        if n <= ep:
            out.update(seen)
    return out


def word_ok(word: str, ep: int) -> bool:
    """그 회차 시점에 쓸 수 있는 낱말인지 (누적 자모 규칙)."""
    allow = allowed_cards(ep)
    for ch in word:
        d = H.decompose(ch)
        if not d:
            return False
        cho, jung, jong = d
        for j in H.parts(cho) + H.parts(jung):
            if j not in allow:
                return False
        if jong:
            for j in H.parts(jong):
                if ("받침 " + j) not in allow:
                    return False
    return True


# ── 혼동표 ────────────────────────────────────────────────────
# 받침 소리의 혼동. 조음 위치가 같거나 비음끼리 헷갈린다.
JONG_CONFUSION = {
    "ㄱ": [("ㅇ", "nasalSwap"), ("ㄴ", "stopSwap"), ("ㅁ", "nasalSwap")],
    "ㄴ": [("ㅁ", "nasalSwap"), ("ㅇ", "nasalSwap"), ("ㄹ", "stopSwap")],
    "ㄷ": [("ㅅ", "soundSpellMismatch"), ("ㄴ", "nasalSwap"), ("ㄹ", "stopSwap")],
    "ㄹ": [("ㄴ", "stopSwap"), ("ㅁ", "nasalSwap"), ("ㄱ", "stopSwap")],
    "ㅁ": [("ㄴ", "nasalSwap"), ("ㅇ", "nasalSwap"), ("ㅂ", "stopSwap")],
    "ㅂ": [("ㅁ", "nasalSwap"), ("ㄱ", "stopSwap"), ("ㅅ", "stopSwap")],
    "ㅅ": [("ㄷ", "soundSpellMismatch"), ("ㅈ", "soundSpellMismatch"), ("ㄴ", "nasalSwap")],
    "ㅇ": [("ㄴ", "nasalSwap"), ("ㅁ", "nasalSwap"), ("ㄱ", "stopSwap")],
    "ㅈ": [("ㄷ", "soundSpellMismatch"), ("ㅅ", "soundSpellMismatch"), ("ㅊ", "soundSpellMismatch")],
    "ㅊ": [("ㅈ", "soundSpellMismatch"), ("ㅅ", "soundSpellMismatch"), ("ㄷ", "soundSpellMismatch")],
    "ㅋ": [("ㄱ", "soundSpellMismatch"), ("ㅇ", "nasalSwap")],
    "ㅌ": [("ㄷ", "soundSpellMismatch"), ("ㅅ", "soundSpellMismatch")],
    "ㅍ": [("ㅂ", "soundSpellMismatch"), ("ㅁ", "nasalSwap")],
    "ㅎ": [("ㅇ", "nasalSwap"), ("ㄱ", "stopSwap")],
}

# 모양이 헷갈리는 자모 (글자 찾기 오답 후보)
VISUAL = {
    "ㄱ": [("ㅋ", "strokeAdd"), ("ㄴ", "rotation"), ("ㄷ", "shape")],
    "ㄴ": [("ㄱ", "rotation"), ("ㄷ", "strokeAdd"), ("ㄹ", "shape")],
    "ㄷ": [("ㄴ", "strokeAdd"), ("ㅌ", "strokeAdd"), ("ㄹ", "shape")],
    "ㄹ": [("ㄷ", "shape"), ("ㄴ", "shape"), ("ㅌ", "shape")],
    "ㅁ": [("ㅇ", "shape"), ("ㅂ", "strokeAdd"), ("ㄷ", "shape")],
    "ㅂ": [("ㅁ", "strokeAdd"), ("ㅍ", "rotation"), ("ㅇ", "shape")],
    "ㅅ": [("ㅈ", "strokeAdd"), ("ㅊ", "strokeAdd"), ("ㅁ", "shape")],
    "ㅇ": [("ㅁ", "shape"), ("ㅎ", "strokeAdd"), ("ㅅ", "shape")],
    "ㅈ": [("ㅅ", "strokeAdd"), ("ㅊ", "strokeAdd"), ("ㅇ", "shape")],
    "ㅊ": [("ㅈ", "strokeAdd"), ("ㅅ", "strokeAdd"), ("ㅋ", "shape")],
    "ㅋ": [("ㄱ", "strokeAdd"), ("ㅌ", "shape"), ("ㅊ", "shape")],
    "ㅌ": [("ㄷ", "strokeAdd"), ("ㅋ", "shape"), ("ㄹ", "shape")],
    "ㅍ": [("ㅂ", "rotation"), ("ㅁ", "shape"), ("ㅌ", "shape")],
    "ㅎ": [("ㅇ", "strokeAdd"), ("ㅊ", "shape"), ("ㅁ", "shape")],
    # 된소리 — 홀자음과의 대비가 이 단원의 학습 내용이다
    "ㄲ": [("ㄱ", "tensePair"), ("ㅋ", "strokeAdd")],
    "ㄸ": [("ㄷ", "tensePair"), ("ㅌ", "strokeAdd")],
    "ㅃ": [("ㅂ", "tensePair"), ("ㅍ", "rotation")],
    "ㅆ": [("ㅅ", "tensePair"), ("ㅈ", "strokeAdd")],
    "ㅉ": [("ㅈ", "tensePair"), ("ㅊ", "strokeAdd")],
    "ㅏ": [("ㅓ", "mirrorPair"), ("ㅑ", "strokePair"), ("ㅣ", "containment")],
    "ㅓ": [("ㅏ", "mirrorPair"), ("ㅕ", "strokePair"), ("ㅗ", "axisRotation")],
    "ㅗ": [("ㅜ", "mirrorPair"), ("ㅛ", "strokePair"), ("ㅏ", "axisRotation")],
    "ㅜ": [("ㅗ", "mirrorPair"), ("ㅠ", "strokePair"), ("ㅡ", "containment")],
    "ㅡ": [("ㅣ", "axisRotation"), ("ㅗ", "containment"), ("ㅜ", "containment")],
    "ㅣ": [("ㅡ", "axisRotation"), ("ㅏ", "containment"), ("ㅓ", "containment")],
    "ㅑ": [("ㅏ", "strokePair"), ("ㅕ", "mirrorPair"), ("ㅒ", "strokeAdd")],
    "ㅕ": [("ㅓ", "strokePair"), ("ㅑ", "mirrorPair"), ("ㅖ", "strokeAdd")],
    "ㅛ": [("ㅗ", "strokePair"), ("ㅠ", "mirrorPair")],
    "ㅠ": [("ㅜ", "strokePair"), ("ㅛ", "mirrorPair")],
    # 복잡한 모음 — 부품과 사촌 모음이 헷갈린다
    "ㅐ": [("ㅔ", "mirrorPair"), ("ㅏ", "containment"), ("ㅒ", "strokePair")],
    "ㅒ": [("ㅐ", "strokePair"), ("ㅖ", "mirrorPair"), ("ㅑ", "containment")],
    "ㅔ": [("ㅐ", "mirrorPair"), ("ㅓ", "containment"), ("ㅖ", "strokePair")],
    "ㅖ": [("ㅔ", "strokePair"), ("ㅒ", "mirrorPair"), ("ㅕ", "containment")],
    "ㅘ": [("ㅝ", "mirrorPair"), ("ㅙ", "strokeAdd"), ("ㅗ", "containment")],
    "ㅙ": [("ㅘ", "strokeAdd"), ("ㅞ", "mirrorPair"), ("ㅚ", "shape")],
    "ㅚ": [("ㅟ", "mirrorPair"), ("ㅙ", "shape"), ("ㅗ", "containment")],
    "ㅝ": [("ㅘ", "mirrorPair"), ("ㅞ", "strokeAdd"), ("ㅜ", "containment")],
    "ㅞ": [("ㅝ", "strokeAdd"), ("ㅙ", "mirrorPair"), ("ㅟ", "shape")],
    "ㅟ": [("ㅚ", "mirrorPair"), ("ㅞ", "shape"), ("ㅜ", "containment")],
    "ㅢ": [("ㅡ", "containment"), ("ㅣ", "containment"), ("ㅟ", "shape")],
}



# ── 조사 붙이기 ──────────────────────────────────────────────
# 생성한 문구를 아이가 소리로 듣는다. "'자다' 과 '짜다'" 처럼 조사가 어긋나면
# 그대로 읽혀서 이상하게 들린다. 앞말의 끝소리를 보고 골라 붙인다.

def with_eun(w):
    return w + H.eun(w)


def with_eul(w):
    return w + H.eul(w)


def with_ee(w):
    return w + H.ee(w)


def with_wa(w):
    return w + H.wa(w)


def jamo_in(word: str) -> set[str]:
    """낱말에 실제로 쓰인 자모. 디코이가 이것과 겹치면 안 된다."""
    out: set[str] = set()
    for ch in word:
        d = H.decompose(ch)
        if not d:
            continue
        for j in d:
            if j:
                out.add(j)
    return out


def visual_distractors(j: str, ep: int, want: int = 4, exclude: set[str] | None = None):
    """모양이 헷갈리는 오답 후보.

    두 가지를 걸러낸다.
      - 아직 안 배운 글자
      - **정답 낱말에 쓰인 자모** — 똑같은 타일이 둘 생겨 하나는 정답이고
        하나는 오답이 되면 문항 자체가 말이 안 된다
    """
    allow = allowed_cards(ep)
    skip = set(exclude or ()) | {j}
    out = []
    for other, rel in VISUAL.get(j, []):
        ok = (other in allow) or (("받침 " + other) in allow)
        if ok and other not in skip:
            out.append({"jamo": other, "relation": rel})
        if len(out) >= want:
            break
    # 겹받침은 자기 부품을 오답으로 쓰면 최고의 문항이 된다
    if j in H.CLUSTER:
        for p in H.CLUSTER[j]:
            if len(out) < want + 1 and all(o["jamo"] != p for o in out):
                out.append({"jamo": p, "relation": "clusterPart"})
    return out


# ── 장면 카드 ─────────────────────────────────────────────────
def scene(place, jamo=None, position=None, kind="place"):
    """이야기 순서 컷의 그림. 장소 이모지 + 찾은 자모 배지."""
    ref = {"kind": "scene", "sceneKind": kind}
    if place:
        ref["place"] = place
        emoji = PLACE_EMOJI.get(place)
        if emoji:
            ref["emoji"] = emoji
    if jamo:
        ref["jamo"] = jamo
        if position:
            ref["position"] = position
    return ref


# ── 활동 생성 ─────────────────────────────────────────────────
def gen_story_quiz(s):
    """줄거리에서 이야기 퀴즈. 장소를 물어보는 문항이 가장 잘 먹는다."""
    items = []
    hunts = [h for h in s["hunts"] if h[1] != "merge" and h[2]]

    if len(hunts) >= 1:
        j, pos, place, at = hunts[0]
        others = [h[2] for h in hunts[1:]] or ["자판기", "냉장고"]
        opts = [{"label": place, "pic": scene(place), "correct": True}]
        for o in others[:2]:
            opts.append({"label": o, "pic": scene(o)})
        while len(opts) < 3:
            filler = "모자" if "모자" not in [x["label"] for x in opts] else "가방"
            opts.append({"label": filler, "pic": scene(filler)})
        items.append({
            "q": with_eun(H.label(j, pos)) + " 어디에서 찾았나요?",
            "at": at, "options": opts,
        })

    if len(hunts) >= 2:
        j, pos, place, at = hunts[-1]
        wrong = [h[2] for h in hunts[:-1]]
        opts = [{"label": place, "pic": scene(place), "correct": True}]
        for o in wrong[:2]:
            opts.append({"label": o, "pic": scene(o)})
        items.append({
            "q": with_eun(H.label(j, pos)) + " 어디에서 찾았나요?",
            "at": at, "options": opts,
        })

    if s.get("vending"):
        v = s["vending"]
        opts = [{"label": v, "pic": WB.pic(v) or scene(v), "correct": True},
                {"label": "모자", "pic": "👒"},
                {"label": "가방", "pic": "🎒"}]
        items.append({
            "q": "자판기에서 무엇이 나왔나요?", "at": s["vending_at"], "options": opts,
        })

    return {
        "type": "story_quiz", "id": "A", "title": "이야기 퀴즈",
        "courses": ["short", "full"], "shortCount": 2, "items": items,
    }


def gen_sound_batchim(s, ep, jong):
    """받침 회차의 소리 활동. 받침 유무 → 혼동 받침 → 방송 퀴즈 순."""
    word = s["word"]
    idx = H.jong_index(word)
    syl = word[idx]
    bare = H.with_jong(syl, "")
    items = []

    items.append({
        "say": syl, "prompt": "잘 듣고 같은 글자를 골라요",
        "hint": "끝에서 입이 닫히는 소리가 있나요?",
        "options": [{"label": syl, "correct": True},
                    {"label": bare, "relation": "noBatchim",
                     "why": "받침이 없는 소리예요. 다시 들어볼까?"}],
    })
    # 반대 방향도 낸다. 한쪽만 내면 늘 같은 자리를 눌러 통과할 수 있다.
    items.append({
        "say": bare, "prompt": "잘 듣고 같은 글자를 골라요",
        "options": [{"label": bare, "correct": True},
                    {"label": syl, "relation": "noBatchim"}],
    })

    conf = [(o, r) for o, r in JONG_CONFUSION.get(jong, [])
            if ("받침 " + o) in allowed_cards(ep) or o == jong]
    if conf:
        opts = [{"label": syl, "correct": True}]
        for other, rel in conf[:2]:
            alt = H.with_jong(syl, other)
            if alt and alt != syl:
                opts.append({"label": alt, "relation": rel})
        if len(opts) >= 2:
            items.append({
                "say": syl, "prompt": "받침 소리를 잘 듣고 골라요",
                "hint": "받침마다 입과 혀가 다른 자리에서 막혀요",
                "options": opts,
            })

    # 소리는 같고 글자가 다른 받침 (ㄷ ㅅ ㅈ ㅊ ㅌ 계열)
    if jong in ("ㄷ", "ㅅ", "ㅈ", "ㅊ", "ㅌ"):
        opts = [{"label": syl, "correct": True}]
        for other in ("ㄷ", "ㅅ", "ㅈ"):
            if other == jong:
                continue
            alt = H.with_jong(syl, other)
            if alt:
                opts.append({"label": alt, "relation": "soundSpellMismatch"})
            if len(opts) >= 3:
                break
        items.append({
            "say": syl, "prompt": "소리가 같아요. 어떤 글자일까요?",
            "hint": "받침 ㄷ ㅅ ㅈ 은 소리가 똑같아요. 낱말을 떠올려 보세요!",
            "options": opts,
            "after": "소리가 같아도 낱말마다 쓰는 글자가 달라요.",
        })

    if s.get("quiz"):
        kind, words, answer, at = s["quiz"]
        items.append({
            "say": ", ".join(words) + ". " + kind + "가 다른 낱말은 무엇인가요?",
            "prompt": kind + "가 다른 낱말은 무엇인가요?",
            "at": at,
            "options": [{"label": w, "correct": w == answer,
                         **({} if w == answer else {"relation": "stopSwap"})}
                        for w in words],
        })

    return {"type": "sound", "id": "B", "title": "소리 듣고 고르기",
            "courses": ["short", "full"], "shortCount": 3, "items": items}


def is_minimal_tense_pair(weak: str, tense: str, tense_cho: str, plain_cho: str) -> bool:
    """두 낱말이 첫소리(홀자음/된소리)만 다른 진짜 최소대립쌍인가.

    방송 퀴즈에는 굼벵이/꿈나라처럼 첫소리만 다른 게 아닌 쌍도 섞여 있다.
    그걸 "첫소리 하나로 뜻이 달라져요" 라고 설명하면 거짓을 가르친다.
    """
    if len(weak) != len(tense) or not weak:
        return False
    dw, dt = H.decompose(weak[0]), H.decompose(tense[0])
    if not dw or not dt:
        return False
    # 첫 글자는 초성만 다르고, 그 초성이 홀자음↔된소리 관계여야 한다
    if dw[1:] != dt[1:] or dw[0] != plain_cho or dt[0] != tense_cho:
        return False
    return weak[1:] == tense[1:]      # 나머지 글자는 같아야 한다


def gen_sound_cho(s, ep, cho):
    """기초·쌍자음 회차. 첫소리를 가려 듣는 것이 핵심이다.

    받침 회차와 겨냥이 다르다. 받침은 '끝에서 막히는 소리' 를 듣는 것이고,
    여기는 '첫소리가 무엇인가' 다. 그래서 같은 모음에 첫 자음만 바꿔 대비시킨다.
    """
    word = s["word"]
    syl = next((c for c in word if H.decompose(c) and H.decompose(c)[0] == cho), word[0])
    d = H.decompose(syl)
    items = []

    # 첫소리가 있는지부터 가린다.
    # 8화 시점에는 배운 자음이 ㄱ 하나뿐이라 자음끼리 대비시킬 수가 없다.
    # 그때 쓸 수 있는 대비는 '첫소리가 있는 글자 vs 모음만 있는 글자'(가 / 아) 이고,
    # 첫 자음을 배우는 첫 문항으로는 이게 오히려 맞다.
    if cho != "ㅇ":
        bare = H.compose("ㅇ", d[1], d[2])
        if bare and bare != syl:
            items.append({
                "say": syl, "prompt": "잘 듣고 같은 글자를 골라요",
                "hint": "첫소리가 들리나요?",
                "options": [{"label": syl, "correct": True},
                            {"label": bare, "relation": "noOnset",
                             "why": "첫소리가 없는 글자예요. 다시 들어볼까?"}],
            })
            items.append({
                "say": bare, "prompt": "잘 듣고 같은 글자를 골라요",
                "options": [{"label": bare, "correct": True},
                            {"label": syl, "relation": "noOnset"}],
            })

    # 첫소리 대비 — 모음을 고정하고 첫 자음만 바꾼다
    conf = [(o, r) for o, r in VISUAL.get(cho, [])
            if o in allowed_cards(ep) and o != cho]
    opts = [{"label": syl, "correct": True}]
    for other, rel in conf[:2]:
        alt = H.compose(other, H.decompose(syl)[1], H.decompose(syl)[2])
        if alt and alt != syl:
            opts.append({"label": alt, "relation": rel})
    if len(opts) >= 2:
        items.append({
            "say": syl, "prompt": "잘 듣고 같은 글자를 골라요",
            "hint": "첫소리가 무엇인지 들어 보세요",
            "options": opts,
        })

    # 자모 이름으로도 한 번 (카드 이름을 익힌다)
    name_opts = [{"label": cho, "correct": True}]
    for other, rel in conf[:2]:
        name_opts.append({"label": other, "relation": rel})
    if len(name_opts) >= 2:
        items.append({
            "say": H.name(cho), "prompt": "이 소리는 어떤 글자일까요?",
            "options": name_opts,
        })

    # 쌍자음이면 홀자음과의 대비가 이 단원의 학습 내용이다
    if cho in H.CLUSTER:
        single = H.CLUSTER[cho][0]
        alt = H.compose(single, d[1], d[2])
        if alt and alt != syl:
            items.append({
                "say": syl,
                "prompt": "된소리를 잘 듣고 골라요",
                "hint": "목에 힘을 주고 세게 내는 소리예요",
                "options": [{"label": syl, "correct": True},
                            {"label": alt, "relation": "tensePair",
                             "why": "이건 약한 소리예요. 더 세게 내는 소리를 찾아요."}],
                "after": with_eun(H.name(cho)) + " " + H.name(single) + " 보다 세게 내는 소리예요.",
            })

        # 방송이 보여준 최소대립쌍이 있으면 그게 가장 좋은 문항이다.
        # 낱말 하나로 뜻이 완전히 달라지는 걸 보여주기 때문이다 (자다 / 짜다).
        #
        # 다만 **진짜 최소대립쌍인지 검사한다.** 방송 퀴즈에는 굼벵이/꿈나라처럼
        # 첫소리만 다른 게 아닌 쌍도 섞여 있고, 그걸 "첫소리 하나로 뜻이 달라져요"
        # 라고 설명하면 거짓을 가르치게 된다.
        for pair in s.get("tense_pairs", []):
            weak, tense = pair
            if not is_minimal_tense_pair(weak, tense, cho, single):
                continue
            if not (word_ok(weak, ep) and word_ok(tense, ep)):
                continue
            items.append({
                "say": tense,
                "prompt": "잘 듣고 같은 낱말을 골라요",
                "hint": "첫소리를 세게 내면 다른 낱말이 돼요",
                "options": [{"label": tense, "correct": True},
                            {"label": weak, "relation": "tensePair",
                             "why": "약한 소리로 읽으면 다른 낱말이에요."}],
                "after": "'" + weak + "'" + H.wa(weak) + " '" + tense + "'" + H.eun(tense)
                         + " 첫소리 하나로 뜻이 달라져요.",
            })
            break

    if s.get("quiz"):
        kind, words, answer, at = s["quiz"]
        items.append({
            "say": ", ".join(words) + ". " + kind + "가 다른 낱말은 무엇인가요?",
            "prompt": kind + "가 다른 낱말은 무엇인가요?",
            "at": at,
            "options": [{"label": w, "correct": w == answer,
                         **({} if w == answer else {"relation": "stopSwap"})}
                        for w in words],
        })

    return {"type": "sound", "id": "B", "title": "소리 듣고 고르기",
            "courses": ["short", "full"], "shortCount": 3, "items": items}


def gen_sound_vowel_basic(s, ep, vowel):
    """기초 모음 회차. 모음끼리 가려 듣는 것이 핵심이다."""
    word = s["word"]
    syl = next((c for c in word if H.decompose(c) and H.decompose(c)[1] == vowel), word[0])
    items = []

    conf = [(o, r) for o, r in VISUAL.get(vowel, [])
            if o in allowed_cards(ep) and o != vowel]

    items.append({
        "say": H.name(vowel), "prompt": "잘 듣고 같은 글자를 골라요",
        "hint": "입 모양을 따라 해 보세요",
        "options": [{"label": vowel, "correct": True}] +
                   [{"label": o, "relation": r} for o, r in conf[:2]],
    })

    opts = [{"label": syl, "correct": True}]
    for other, rel in conf[:2]:
        alt = H.with_jung(syl, other)
        if alt and alt != syl:
            opts.append({"label": alt, "relation": rel})
    if len(opts) >= 2:
        items.append({
            "say": syl, "prompt": "잘 듣고 같은 글자를 골라요", "options": opts,
        })

    if s.get("quiz"):
        kind, words, answer, at = s["quiz"]
        items.append({
            "say": ", ".join(words) + ". " + kind + "가 다른 낱말은 무엇인가요?",
            "prompt": kind + "가 다른 낱말은 무엇인가요?",
            "at": at,
            "options": [{"label": w, "correct": w == answer,
                         **({} if w == answer else {"relation": "oneVowelDiff"})}
                        for w in words],
        })

    return {"type": "sound", "id": "B", "title": "소리 듣고 고르기",
            "courses": ["short", "full"], "shortCount": 3, "items": items}


def gen_sound_vowel(s, ep, vowel):
    """복합 모음 회차. 합치기(ㅏ+ㅣ=ㅐ)가 학습의 핵심이다."""
    word = s["word"]
    left, right = s["merge"]
    # 목표 모음이 든 음절
    syl = next((c for c in word if H.decompose(c) and H.decompose(c)[1] == vowel), word[0])
    items = []

    items.append({
        "say": H.name(vowel),
        "prompt": "잘 듣고 같은 글자를 골라요",
        "hint": with_wa(H.name(left)) + " " + with_ee(H.name(right)) + " 만나면 "
                + with_ee(H.name(vowel)) + " 돼요",
        "options": [{"label": vowel, "correct": True},
                    {"label": left, "relation": "containment",
                     "why": H.name(left) + " 하나만 있는 소리예요."}],
    })

    alt_syl = H.with_jung(syl, left)
    if alt_syl and alt_syl != syl:
        items.append({
            "say": syl, "prompt": "잘 듣고 같은 글자를 골라요",
            "options": [{"label": syl, "correct": True},
                        {"label": alt_syl, "relation": "containment"}],
        })

    conf = [(o, r) for o, r in VISUAL.get(vowel, [])
            if o in allowed_cards(ep) and o != vowel]
    if conf:
        opts = [{"label": vowel, "correct": True}]
        for other, rel in conf[:2]:
            opts.append({"label": other, "relation": rel})
        items.append({
            "say": H.name(vowel), "prompt": "비슷한 모음이 있어요. 잘 듣고 골라요",
            "options": opts,
        })

    if s.get("quiz"):
        kind, words, answer, at = s["quiz"]
        items.append({
            "say": ", ".join(words) + ". " + kind + "가 다른 낱말은 무엇인가요?",
            "prompt": kind + "가 다른 낱말은 무엇인가요?",
            "at": at,
            "options": [{"label": w, "correct": w == answer,
                         **({} if w == answer else {"relation": "oneVowelDiff"})}
                        for w in words],
        })

    return {"type": "sound", "id": "B", "title": "소리 듣고 고르기",
            "courses": ["short", "full"], "shortCount": 3, "items": items}


def gen_sound_cluster(s, ep, cluster):
    """겹받침 회차. **쓰는 것과 소리가 다르다**가 학습의 핵심이다.
    방송은 이 규칙을 설명하지 않으므로 여기서 직접 가르친다."""
    word = s["word"]
    keep = s["keep"]
    say = s["say"]
    idx = H.jong_index(word)
    syl = word[idx]
    single = H.with_jong(syl, keep)
    parts_ = H.CLUSTER.get(cluster, [cluster])
    items = []

    # 핵심 문항: 소리는 하나인데 글자는 둘이다
    opts = [{"label": syl, "correct": True}]
    if single and single != syl:
        opts.append({"label": single, "relation": "clusterPart",
                     "why": "소리는 같지만 받침이 하나뿐이에요. 두 글자를 써야 해요!"})
    items.append({
        "say": word,
        "prompt": "[" + say + "] 이라고 들렸어요. 어떻게 쓸까요?",
        "hint": "받침이 두 글자인데 소리는 " + H.name(keep) + " 하나만 나요",
        "options": opts,
        "after": "받침 두 글자 중 " + H.name(keep) + " 만 소리가 나요. 그래도 두 글자를 써요!",
    })

    # 두 부품 중 어느 것이 소리 나는가
    if len(parts_) == 2:
        items.append({
            "say": word,
            "prompt": "받침 두 글자 중 어느 소리가 들리나요?",
            "options": [{"label": keep, "correct": True}] +
                       [{"label": p, "relation": "clusterPart"}
                        for p in parts_ if p != keep],
            "after": H.name(keep) + " 소리가 나요.",
        })

    # 받침 유무
    bare = H.with_jong(syl, "")
    items.append({
        "say": syl, "prompt": "잘 듣고 같은 글자를 골라요",
        "options": [{"label": syl, "correct": True},
                    {"label": bare, "relation": "noBatchim"}],
    })

    return {"type": "sound", "id": "B", "title": "소리 듣고 고르기",
            "courses": ["short", "full"], "shortCount": 3, "items": items}


def gen_letterhunt(s, ep, target, position):
    word = s["word"]
    boards = [{
        "target": target, "position": position, "cols": 4, "targetCount": 4,
        "prompt": with_eul(H.label(target, position)) + " 모두 찾아 눌러 보세요",
        "distractors": [dict(d, count=3) for d in visual_distractors(target, ep, 4)],
        "missHint": "이건 " + with_ee(H.name(target)) + " 아니에요. 모양을 다시 보세요.",
    }]

    # 첫 자리 자음 회차 — 그 자음으로 시작하는 글자 골라내기
    if position == "cho":
        hits, seen = [], set()
        for w in [word] + s.get("extra", []) + WB.words_for_cho(target):
            if not word_ok(w, ep):
                continue
            for ch in w:
                d = H.decompose(ch)
                if d and d[0] == target and ch not in seen:
                    seen.add(ch)
                    hits.append(ch)
        if len(hits) >= 2:
            cells = [{"ch": c, "hit": True} for c in hits[:4]]
            for other, rel in VISUAL.get(target, [])[:3]:
                if other not in allowed_cards(ep):
                    continue
                for c in hits[:2]:
                    d = H.decompose(c)
                    alt = H.compose(other, d[1], d[2])
                    if alt and alt != c:
                        cells.append({"ch": alt, "relation": rel})
            boards.append({
                "cols": 4, "showTarget": False, "target": target, "position": "cho",
                "prompt": H.name(target) + H.euro(H.name(target)) + " 시작하는 글자를 모두 찾아 눌러 보세요",
                "cells": cells[:12],
                "missHint": "첫소리가 " + H.name(target) + " 인 글자를 찾아요.",
            })

    # 음절 모드 — 그 받침이 있는 글자만 고르기
    if position == "jong":
        idx = H.jong_index(word)
        syl = word[idx]
        hits = [syl]
        for w in WB.words_for_jong(target):
            if not word_ok(w, ep):
                continue
            i = H.jong_index(w)
            if i is not None and w[i] not in hits:
                hits.append(w[i])
            if len(hits) >= 4:
                break
        cells = [{"ch": c, "hit": True} for c in hits[:4]]
        # 오답: 받침 없음 + 혼동 받침
        bare = H.with_jong(syl, "")
        cells.append({"ch": bare, "relation": "noBatchim"})
        for other, rel in JONG_CONFUSION.get(target, [])[:3]:
            alt = H.with_jong(syl, other)
            if alt and alt != syl:
                cells.append({"ch": alt, "relation": rel})
        for h in hits[1:3]:
            b = H.with_jong(h, "")
            if b:
                cells.append({"ch": b, "relation": "noBatchim"})
        boards.append({
            "cols": 4, "showTarget": False, "target": target, "position": "jong",
            "prompt": with_ee("받침 " + H.name(target)) + " 있는 글자를 모두 찾아 눌러 보세요",
            "cells": cells[:12],
            "missHint": "받침이 " + H.name(target) + " 인 글자를 찾아요.",
        })

    return {"type": "letterhunt", "id": "C", "title": "글자 찾기",
            "courses": ["full"], "boards": boards}


def gen_jamobuild(s, ep, target, position):
    word = s["word"]
    items = []

    # 목표 자모가 든 음절을 찾는다
    if position == "jong":
        syl = word[H.jong_index(word)]
    elif position == "cho":
        syl = next((c for c in word if H.decompose(c) and H.decompose(c)[0] == target), word[0])
    else:
        syl = next((c for c in word if H.decompose(c) and H.decompose(c)[1] == target), word[0])

    # 낱말에 쓰인 자모는 디코이로 쓰면 안 된다 (같은 타일이 정답과 오답으로 겹친다)
    used = jamo_in(word)
    decoys = [{"jamo": d["jamo"], "relation": d["relation"]}
              for d in visual_distractors(target, ep, 3, exclude=used)]

    # 목표가 첫 자음이면 그 칸을 잠그면 안 된다 — 그게 배울 자리다.
    if position == "cho":
        first = {"target": syl, "at": s.get("vending_at"),
                 "prompt": "첫 자음을 찾아 넣어 보세요!", "decoys": decoys}
    else:
        first = {"target": syl, "locked": ["cho"], "at": s.get("vending_at"),
                 "prompt": "첫 자음은 넣어 두었어요. 나머지를 채워 주세요!",
                 "decoys": decoys}
    items.append(first)

    # 낱말 전체
    if len(word) > 1 and position != "cho":
        locked = [f"{i}:cho" for i in range(len(word))]
        items.append({
            "target": word, "locked": locked,
            "prompt": "'" + word + "' 전체를 만들어 보세요. 첫 자음은 넣어 두었어요.",
            "decoys": decoys[:2],
        })
    elif len(word) > 1:
        items.append({
            "target": word,
            "prompt": "'" + word + "' 전체를 만들어 보세요.",
            "decoys": decoys[:2],
        })
    else:
        items.append({
            "target": word,
            "prompt": "'" + word + "' 을 처음부터 만들어 보세요.",
            "decoys": decoys[:2],
        })

    return {"type": "jamobuild", "id": "D", "title": "뭐든지 자판기",
            "courses": ["short", "full"], "shortCount": 1, "items": items}


def gen_chunji(s, ep, target, position):
    """사라진 받침 / 바뀐 글자. 조립의 역과제."""
    word = s["word"]
    items = []

    if position == "jong":
        idx = H.jong_index(word)
        broken_syl = H.with_jong(word[idx], "")
        broken = word[:idx] + broken_syl + word[idx + 1:]
        tray = [{"jamo": o, "relation": r}
                for o, r in JONG_CONFUSION.get(target, [])[:3]]
        items.append({
            "target": word, "broken": broken,
            "prompt": "받침이 사라졌어요! 소리 내어 읽어 보고 고쳐 주세요.",
            "tray": tray,
        })

        conf = JONG_CONFUSION.get(target, [])
        if conf:
            other, rel = conf[0]
            swapped_syl = H.with_jong(word[idx], other)
            if swapped_syl and swapped_syl != word[idx]:
                swapped = word[:idx] + swapped_syl + word[idx + 1:]
                items.append({
                    "target": word, "broken": swapped,
                    "prompt": swapped + "? 소리가 이상해요! 어디가 잘못됐을까요?",
                    "tray": [{"jamo": o, "relation": r} for o, r in conf[:3]],
                })

        # 겹받침이면 "하나만 쓴 글자" 가 아이가 실제로 하는 실수다
        if target in H.CLUSTER and s.get("keep"):
            half = H.with_jong(word[idx], s["keep"])
            if half and half != word[idx]:
                items.append({
                    "target": word, "broken": word[:idx] + half + word[idx + 1:],
                    "prompt": "소리는 맞는데 받침을 하나만 썼어요. 두 글자로 고쳐 주세요!",
                    "tray": [{"jamo": p, "relation": "clusterPart"}
                             for p in H.CLUSTER[target]],
                })
    elif position == "cho":
        # 첫 자리 자음 회차 — 첫소리를 닮은 다른 자음으로 바꿔 놓는다.
        # 아직 배운 자음이 적은 초반에는 ㅇ(첫소리 없음)으로 바꾸는 것이
        # 유일하게 가능한 대비이고, 실제로도 좋은 문항이 된다.
        syl = next((c for c in word if H.decompose(c) and H.decompose(c)[0] == target), word[0])
        i = word.index(syl)
        conf = [(o, r) for o, r in VISUAL.get(target, []) if o in allowed_cards(ep)]
        if target != "ㅇ":
            conf = [("ㅇ", "noOnset")] + conf
        for other, rel in conf[:2]:
            d = H.decompose(syl)
            alt = H.compose(other, d[1], d[2])
            if not alt or alt == syl:
                continue
            items.append({
                "target": word, "broken": word[:i] + alt + word[i + 1:],
                "prompt": alt + word[i + 1:] + "? 소리 내어 읽어 보고 첫소리를 고쳐 주세요.",
                "tray": [{"jamo": o, "relation": r} for o, r in conf[:3]],
            })
            if len(items) >= 2:
                break

    elif not s.get("merge"):
        # 기초 모음 회차 — 모음을 닮은 다른 모음으로 바꿔 놓는다
        syl = next((c for c in word if H.decompose(c) and H.decompose(c)[1] == target), word[0])
        i = word.index(syl)
        conf = [(o, r) for o, r in VISUAL.get(target, []) if o in allowed_cards(ep)]
        for other, rel in conf[:2]:
            alt = H.with_jung(syl, other)
            if not alt or alt == syl:
                continue
            items.append({
                "target": word, "broken": word[:i] + alt + word[i + 1:],
                "prompt": alt + word[i + 1:] + "? 모음이 바뀌었어요. 고쳐 주세요.",
                "tray": [{"jamo": o, "relation": r} for o, r in conf[:3]],
            })
            if len(items) >= 2:
                break

    else:
        # 복합 모음 회차 — 목표 모음을 부품 모음으로 바꿔 놓는다
        left = s["merge"][0]
        syl = next((c for c in word if H.decompose(c) and H.decompose(c)[1] == target), word[0])
        i = word.index(syl)
        broken_syl = H.with_jung(syl, left)
        if broken_syl and broken_syl != syl:
            items.append({
                "target": word, "broken": word[:i] + broken_syl + word[i + 1:],
                "prompt": "모음이 반쪽만 남았어요! " + H.name(target) + H.euro(H.name(target))
                          + " 고쳐 주세요.",
                "tray": [{"jamo": left, "relation": "containment"},
                         {"jamo": s["merge"][1], "relation": "containment"}],
            })
        conf = [o for o, r in VISUAL.get(target, []) if o in allowed_cards(ep)]
        if conf:
            other = conf[0]
            alt = H.with_jung(syl, other)
            if alt and alt != syl:
                items.append({
                    "target": word, "broken": word[:i] + alt + word[i + 1:],
                    "prompt": alt + "? 비슷하지만 다른 글자예요. 고쳐 주세요.",
                    "tray": [{"jamo": other, "relation": "mirrorPair"}],
                })

    return {"type": "chunji", "id": "I", "title": "사라진 글자",
            "courses": ["full"], "items": items}


def gen_match(s, ep, target, position):
    word = s["word"]
    pool = [word] + [w for w in s.get("extra", []) if w != word]
    pool += {"jong": WB.words_for_jong,
             "cho": WB.words_for_cho,
             "jung": WB.words_for_jung}[position](target)

    seen, pairs = set(), []
    for w in pool:
        if w in seen or not word_ok(w, ep) or not all(H.is_syllable(c) for c in w):
            continue
        seen.add(w)
        pairs.append({"word": w, "pic": WB.pic(w) or {"kind": "text", "value": w}})
        if len(pairs) >= 4:
            break

    # 4쌍이 안 차면 앞 단원 낱말로 채운다 (분산 복습이 된다)
    if len(pairs) < 4:
        for w in WB.all_words():
            if w in seen or not word_ok(w, ep):
                continue
            p = WB.pic(w)
            if not p:
                continue
            seen.add(w)
            pairs.append({"word": w, "pic": p})
            if len(pairs) >= 4:
                break

    label = H.label(target, position)
    return {"type": "match", "id": "G", "title": "낱말과 그림",
            "courses": ["full"],
            "prompt": label + " 낱말과 그림을 이어 보세요",
            "pairs": pairs}


def gen_writing(s, ep, target, position):
    word = s["word"]
    items = [{
        "target": target, "kind": "jamo", "position": position,
        "prompt": with_eul(H.label(target, position)) + " 따라 써 보세요",
    }]

    if position == "jong":
        idx = H.jong_index(word)
        syl = word[idx]
        bare = H.with_jong(syl, "")
        items.append({"target": bare, "kind": "syllable",
                      "prompt": "먼저 '" + bare + "' 를 따라 써 보세요",
                      "note": "받침이 없는 글자예요."})
        items.append({"target": syl, "kind": "syllable",
                      "prompt": "이제 '" + syl + "' 을 따라 써 보세요",
                      "note": "받침이 들어가면서 위의 글자가 조금 눌려요. 방금 쓴 것과 비교해 보세요!"})
    elif position == "cho":
        syl = next((c for c in word if H.decompose(c) and H.decompose(c)[0] == target), word[0])
        items.append({"target": syl, "kind": "syllable",
                      "prompt": "'" + syl + "' 을 따라 써 보세요",
                      "note": "첫 자음을 먼저 쓰고 모음을 붙여요."})
    elif s.get("merge"):
        syl = next((c for c in word if H.decompose(c) and H.decompose(c)[1] == target), word[0])
        items.append({"target": syl, "kind": "syllable",
                      "prompt": "'" + syl + "' 을 따라 써 보세요",
                      "note": with_wa(H.name(s["merge"][0])) + " " + with_ee(H.name(s["merge"][1])) +
                              " 만나 " + with_ee(H.name(target)) + " 돼요."})
    else:
        syl = next((c for c in word if H.decompose(c) and H.decompose(c)[1] == target), word[0])
        items.append({"target": syl, "kind": "syllable",
                      "prompt": "'" + syl + "' 을 따라 써 보세요",
                      "note": "ㅇ 을 먼저 쓰고 모음을 붙여요."})

    if len(word) > 1:
        items.append({"target": word, "kind": "word",
                      "prompt": "'" + word + "' 을 따라 써 보세요",
                      "note": "글자 크기를 같게 써 보세요."})

    # 처음 배우는 아이에게는 너그럽게, 뒤로 갈수록 조금씩 엄격하게
    if ep <= 20:
        tol = 0.20          # 기초 모음·자음 — 획을 처음 그어 보는 단계
    elif ep < 35:
        tol = 0.17
    elif ep < 51:
        tol = 0.16
    else:
        tol = 0.15
    return {"type": "writing", "id": "E", "title": "한글 쓰기",
            "courses": ["short", "full"], "shortCount": 1,
            "toleranceEm": tol, "passScore": 0.57, "items": items}


def gen_sequence(s):
    """이야기 순서 — 상황 → 문제 → 소환 → 자모 찾기 → 자판기 → 발음."""
    cuts = []

    def add(at, caption, pic):
        cuts.append({"order": len(cuts) + 1, "at": at, "caption": caption, "pic": pic})

    add(s["situation_at"], s["situation"], scene(None, kind="situation"))
    add(s["problem_at"], s["problem"], scene(None, kind="problem"))
    # 1화는 소환 장면이 없다 — 용사들이 스스로 나타나 자기소개를 한다
    add(s["problem_at"] + 30,
        "한글용사들이 나타났어요!" if s.get("intro") else "'한글용사 아이야!' 하고 불렀어요.",
        scene(None, kind="summon"))

    for j, pos, place, at in s["hunts"]:
        if pos == "merge":
            left, right = s["merge"]
            add(at, with_wa(H.name(left)) + " " + with_ee(H.name(right)) + " 만나 " +
                with_ee(H.name(j)) + " 되었어요.",
                scene(None, jamo=j, kind="merge"))
        elif place:
            add(at, place + " 에서 " + with_eul(H.label(j, pos)) + " 찾았어요.",
                scene(place, jamo=j, position=pos))
        elif pos == "jung":
            # 기초 단원에서는 모음을 장소에서 찾지 않는다 — 용사가 붙여 준다
            add(at, H.name(j) + " 용사가 " + with_eul(H.name(j)) + " 붙여 주었어요.",
                scene(None, jamo=j, kind="merge"))
        else:
            add(at, with_eul(H.label(j, pos)) + " 찾았어요.",
                scene(None, jamo=j, kind="place"))

    result = s.get("vending") or "선물"
    add(s["vending_at"], "자판기에 넣으니 " + with_ee(result) + " 나왔어요!",
        scene(None, kind="vending"))
    add(s["grandpa_at"], "할아버지와 '" + s["word"] + "' 을 소리 내어 읽었어요.",
        scene(None, kind="grandpa"))

    for i, c in enumerate(cuts):
        c["order"] = i + 1
    return {"type": "sequence", "id": "F", "title": "이야기 순서",
            "courses": ["full"], "at": max(0, s["situation_at"] - 20),
            "prompt": "이야기 순서대로 눌러 보세요",
            "firstCutGiven": True, "cuts": cuts}


# ── 회차 파일 만들기 ──────────────────────────────────────────
def build(s, index_by_ep):
    ep = s["ep"]
    card = s["jamo"]
    target = card.replace("받침 ", "")
    # 목표 자모가 글자의 어느 자리를 배우는 것인지. 명세가 지정하면 그걸 쓴다.
    position = s.get("position") or ("jong" if card.startswith("받침") else "jung")
    meta = index_by_ep.get(ep, {})

    if position == "jong" and target in H.CLUSTER and s.get("keep"):
        sound = gen_sound_cluster(s, ep, target)
        focus = "겹받침 " + target + " — 쓰는 것과 소리가 달라요 [" + s["say"] + "]"
    elif position == "jong":
        sound = gen_sound_batchim(s, ep, target)
        focus = "받침 " + target
    elif position == "cho":
        sound = gen_sound_cho(s, ep, target)
        focus = ("쌍자음 " if target in H.CLUSTER else "자음 ") + target
    elif s.get("merge"):
        sound = gen_sound_vowel(s, ep, target)
        focus = "모음 " + target + " — " + s["merge"][0] + " + " + s["merge"][1]
    else:
        sound = gen_sound_vowel_basic(s, ep, target)
        focus = "모음 " + target

    activities = [
        gen_story_quiz(s), sound,
        gen_letterhunt(s, ep, target, position),
        gen_jamobuild(s, ep, target, position),
        gen_chunji(s, ep, target, position),
        gen_match(s, ep, target, position),
        gen_writing(s, ep, target, position),
        gen_sequence(s),
    ]
    activities = [a for a in activities if a.get("items") or a.get("boards")
                  or a.get("pairs") or a.get("cuts")]

    # 1화처럼 한 회차에서 여러 자모를 배우는 경우가 있다
    cards = s.get("cards") or [card]
    data = {
        "episode": ep, "title": s["word"],
        "videoId": meta.get("videoId", ""),
        "objective": meta.get("objectiveText", "").strip()[:60],
        "focus": focus,
        # new = 카드로 주는 자모, seen = 이 회차에서 함께 소개된 자모
        "jamo": {"new": cards,
                 "seen": sorted(INTRODUCED.get(ep, set()) - set(cards))},
        "targetWords": [s["word"]],
        "rewards": {"cards": cards},
        "activities": activities,
    }
    if s.get("say"):
        data["pronunciation"] = s["say"]
    if s.get("uncertain"):
        data["verify"] = s["uncertain"]
    return data


HEADER = """/* {ep}화 「{word}」 — {focus}
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep{ep3}.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.{verify}
 */
"""


def write_js(data, spec):
    ep = data["episode"]
    verify = ""
    if data.get("verify"):
        verify = "\n *\n * 영상으로 확인이 필요한 항목: " + ", ".join(data["verify"])
    head = HEADER.format(ep=ep, word=data["title"], focus=data["focus"],
                         ep3=f"{ep:03d}", verify=verify)
    body = json.dumps({k: v for k, v in data.items() if k != "verify"},
                      ensure_ascii=False, indent=2)
    js = head + "(function (AIYA) {\n  'use strict';\n  AIYA.registerEpisode(\n" + body + "\n  );\n})(window.AIYA);\n"
    path = DATA / "episodes" / f"ep{ep:03d}.js"
    path.write_text(js, encoding="utf-8")
    return path


def main(argv) -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("eps", nargs="*", type=int)
    ap.add_argument("--dry", action="store_true")
    args = ap.parse_args(argv)

    idx_path = DATA / "episodes_index.json"
    index_by_ep = {}
    if idx_path.exists():
        idx = json.loads(idx_path.read_text(encoding="utf-8"))
        index_by_ep = {r["episode"]: r for r in idx["season1"] if r.get("episode")}

    specs = [s for s in ALL_SPECS if not args.eps or s["ep"] in args.eps]
    print(f"회차 {len(specs)}편 생성\n")

    made = []
    for s in specs:
        data = build(s, index_by_ep)
        counts = " ".join(
            f"{a['id']}:{len(a.get('items') or a.get('boards') or a.get('pairs') or a.get('cuts'))}"
            for a in data["activities"])
        flag = "  ⚠ " + ",".join(data["verify"]) if data.get("verify") else ""
        print(f"  {s['ep']:>3}화 {data['title']:<5} {data['focus'][:34]:<36} {counts}{flag}")
        if not args.dry:
            made.append(write_js(data, s))

    if args.dry:
        print("\n(--dry: 파일을 쓰지 않았습니다)")
        return 0

    print(f"\n{len(made)}개 파일 생성 → data/episodes/")
    print("index.html 의 script 태그를 갱신하세요: python tools/gen_episodes.py --dry 후 확인")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
