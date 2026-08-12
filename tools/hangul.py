"""한글 조립·분해 (파이썬). app/js/hangul/jamo.js 와 같은 규칙."""
from __future__ import annotations

BASE = 0xAC00
CHO = list("ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ")
JUNG = list("ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ")
JONG = [""] + list("ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ")

CLUSTER = {
    "ㄲ": ["ㄱ", "ㄱ"], "ㄳ": ["ㄱ", "ㅅ"], "ㄵ": ["ㄴ", "ㅈ"], "ㄶ": ["ㄴ", "ㅎ"],
    "ㄺ": ["ㄹ", "ㄱ"], "ㄻ": ["ㄹ", "ㅁ"], "ㄼ": ["ㄹ", "ㅂ"], "ㄽ": ["ㄹ", "ㅅ"],
    "ㄾ": ["ㄹ", "ㅌ"], "ㄿ": ["ㄹ", "ㅍ"], "ㅀ": ["ㄹ", "ㅎ"], "ㅄ": ["ㅂ", "ㅅ"],
    "ㄸ": ["ㄷ", "ㄷ"], "ㅃ": ["ㅂ", "ㅂ"], "ㅆ": ["ㅅ", "ㅅ"], "ㅉ": ["ㅈ", "ㅈ"],
}

VOWEL_PARTS = {
    "ㅐ": ["ㅏ", "ㅣ"], "ㅒ": ["ㅑ", "ㅣ"], "ㅔ": ["ㅓ", "ㅣ"], "ㅖ": ["ㅕ", "ㅣ"],
    "ㅘ": ["ㅗ", "ㅏ"], "ㅙ": ["ㅗ", "ㅏ", "ㅣ"], "ㅚ": ["ㅗ", "ㅣ"],
    "ㅝ": ["ㅜ", "ㅓ"], "ㅞ": ["ㅜ", "ㅓ", "ㅣ"], "ㅟ": ["ㅜ", "ㅣ"], "ㅢ": ["ㅡ", "ㅣ"],
}

NAMES = {
    "ㄱ": "기역", "ㄲ": "쌍기역", "ㄴ": "니은", "ㄷ": "디귿", "ㄸ": "쌍디귿",
    "ㄹ": "리을", "ㅁ": "미음", "ㅂ": "비읍", "ㅃ": "쌍비읍", "ㅅ": "시옷",
    "ㅆ": "쌍시옷", "ㅇ": "이응", "ㅈ": "지읒", "ㅉ": "쌍지읒", "ㅊ": "치읓",
    "ㅋ": "키읔", "ㅌ": "티읕", "ㅍ": "피읖", "ㅎ": "히읗",
    "ㄳ": "기역시옷", "ㄵ": "니은지읒", "ㄶ": "니은히읗", "ㄺ": "리을기역",
    "ㄻ": "리을미음", "ㄼ": "리을비읍", "ㄽ": "리을시옷", "ㄾ": "리을티읕",
    "ㄿ": "리을피읖", "ㅀ": "리을히읗", "ㅄ": "비읍시옷",
    "ㅏ": "아", "ㅐ": "애", "ㅑ": "야", "ㅒ": "얘", "ㅓ": "어", "ㅔ": "에",
    "ㅕ": "여", "ㅖ": "예", "ㅗ": "오", "ㅘ": "와", "ㅙ": "왜", "ㅚ": "외",
    "ㅛ": "요", "ㅜ": "우", "ㅝ": "워", "ㅞ": "웨", "ㅟ": "위", "ㅠ": "유",
    "ㅡ": "으", "ㅢ": "의", "ㅣ": "이",
}


def is_syllable(ch: str) -> bool:
    return len(ch) == 1 and BASE <= ord(ch) <= 0xD7A3


def decompose(ch: str):
    if not is_syllable(ch):
        return None
    i = ord(ch) - BASE
    return (CHO[i // (21 * 28)], JUNG[(i // 28) % 21], JONG[i % 28])


def compose(cho: str, jung: str, jong: str = "") -> str | None:
    try:
        return chr(BASE + (CHO.index(cho) * 21 + JUNG.index(jung)) * 28 + JONG.index(jong))
    except ValueError:
        return None


def with_jong(ch: str, jong: str) -> str | None:
    d = decompose(ch)
    return compose(d[0], d[1], jong) if d else None


def with_jung(ch: str, jung: str) -> str | None:
    d = decompose(ch)
    return compose(d[0], jung, d[2]) if d else None


def parts(j: str) -> list[str]:
    return list(CLUSTER.get(j) or VOWEL_PARTS.get(j) or [j])


def name(j: str) -> str:
    return NAMES.get(j, j)


def label(j: str, position: str = "") -> str:
    return ("받침 " + name(j)) if position == "jong" else name(j)


# ── 조사 고르기 ──────────────────────────────────────────────
# 생성한 문구를 아이가 소리로 듣는다. "'자다' 과 '짜다'" 처럼 조사가 어긋나면
# 그대로 읽혀서 이상하게 들린다. 앞말의 끝소리를 보고 골라 준다.
# 자모 이름으로 끝나는 경우도 있어(쌍지읒, 아) 이름을 먼저 풀어 본다.

def _ends_with_consonant(word: str) -> bool:
    w = (word or "").strip().strip("'\"”’」』 ")
    if not w:
        return False
    ch = w[-1]
    if is_syllable(ch):
        return bool(decompose(ch)[2])
    # 낱자 자체로 끝나면 그 이름의 끝소리를 본다 (ㅈ → 지읒 → 받침 있음)
    if ch in NAMES:
        nm = NAMES[ch]
        return bool(decompose(nm[-1])[2]) if is_syllable(nm[-1]) else False
    return False


def eun(word: str) -> str:
    """은 / 는"""
    return "은" if _ends_with_consonant(word) else "는"


def eul(word: str) -> str:
    """을 / 를"""
    return "을" if _ends_with_consonant(word) else "를"


def ee(word: str) -> str:
    """이 / 가"""
    return "이" if _ends_with_consonant(word) else "가"


def wa(word: str) -> str:
    """와 / 과"""
    return "과" if _ends_with_consonant(word) else "와"


def euro(word: str) -> str:
    """으로 / 로"""
    return "으로" if _ends_with_consonant(word) else "로"


def jong_index(word: str) -> int | None:
    """받침이 있는 첫 음절의 위치."""
    for i, ch in enumerate(word):
        d = decompose(ch)
        if d and d[2]:
            return i
    return None
