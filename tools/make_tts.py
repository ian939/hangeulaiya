"""회차 데이터에 있는 모든 발화 문구를 모아 MP3 로 만든다.

    python tools/make_tts.py            # 없는 것만 만든다
    python tools/make_tts.py --force    # 전부 다시 만든다
    python tools/make_tts.py --engine sapi   # 오프라인(Windows 음성) 사용

왜 미리 만들어 두는가
--------------------
브라우저의 Web Speech 는 믿을 수 없다. 안드로이드 Chrome 은 한국어 음성팩이
없어도 getVoices() 에 ko-KR 을 넣어 보고하고, 그 상태에서 영어 음성으로 읽는다.
발음을 가르치는 앱에서 영어 음성이 '약'을 읽는 것은 침묵보다 나쁘다.
그래서 음성은 이 PC 에서 미리 만들어 파일로 넣고, 기기에서는 그 파일만 재생한다.

파일 이름은 문구의 해시다. 회차 간에 겹치는 문구는 자동으로 한 번만 저장된다.
"""
from __future__ import annotations

import argparse
import asyncio
import json
import re
import subprocess
import sys
from pathlib import Path

from _common import ASSETS, DATA, ROOT, ffmpeg_exe

OUT_DIR = ASSETS / "audio" / "tts"
BANK_JS = DATA / "common" / "voicebank.js"

# 안내는 여성, 할아버지 발음 시범은 남성.
VOICES = {
    "narrator": "ko-KR-SunHiNeural",
    "grandpa": "ko-KR-InJoonNeural",
}


"""app/js/audio/speak.js 의 spokenText() 와 같은 규칙으로 이모지를 지운다.
TTS 가 👏 를 "박수", ⭐ 를 "별" 이라고 읽어 버리기 때문이다."""
EMOJI_RE = re.compile(
    "[\U0001F000-\U0001FAFF☀-➿⬀-⯿️‍]"
    "|[\U000E0020-\U000E007F]"
)


def spoken_text(text: str) -> str:
    return re.sub(r"\s+", " ", EMOJI_RE.sub("", str(text))).strip()


def voice_key(text: str) -> str:
    """app/js/audio/speak.js 의 key() 와 반드시 같은 결과여야 한다 (FNV-1a 32비트)."""
    data = text.strip().encode("utf-8")
    h = 0x811C9DC5
    for b in data:
        h ^= b
        h = (h + ((h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24))) & 0xFFFFFFFF
    return f"{h:08x}"


# ── 회차 데이터에서 발화 문구 뽑기 ──────────────────────────────────
# 회차 파일은 JS 라서 파싱하지 않고, 발화로 쓰이는 키의 문자열만 정규식으로 모은다.
#
# 키가 따옴표에 싸인 경우와 그렇지 않은 경우를 **둘 다** 받아야 한다.
#   손으로 쓴 회차            prompt: '...'
#   gen_episodes.py 가 만든 회차  "prompt": "..."   (JSON 출력)
# 처음엔 따옴표 없는 쪽만 찾아서 생성된 회차의 문구를 전부 놓쳤다.
SPEECH_KEYS = ("q", "say", "prompt", "hint", "after", "why", "caption", "note", "label")
KEY_RE = re.compile(
    r"[\"']?\b(" + "|".join(SPEECH_KEYS) + r")\b[\"']?\s*:\s*([\"'])((?:\\.|(?!\2).)*)\2"
)
# 낱말 자체도 읽어준다 (자판기·사라진 글자 활동)
WORD_RE = re.compile(r"[\"']?\b(target|broken)\b[\"']?\s*:\s*([\"'])([^\"']+)\2")

# 활동 엔진이 직접 말하는 고정 문구들 (회차 데이터에 없다)
FIXED_LINES = [
    "잘했어! 👏", "맞았어! 🎉", "좋아! ⭐", "멋지다! 💪",
    "다시 한 번 들어볼까?", "음… 다른 걸 눌러 볼까?", "천천히 다시 볼까?",
    "맞았어요", "다시 들어볼까?", "다시 찾아볼까?", "다 찾았어! 👏",
    "완성! 잘했어 👏", "좋아! 다음 획이야.", "이렇게 그어 보자!",
    "조금 더 길게 그어 볼까?", "여기 점에서 시작해 봐!",
    "화살표 방향으로 그어 볼까?", "끝까지 쭉 이어 볼까?",
    "선 안쪽으로 천천히 지나가 볼까?", "다시 한 번 해 볼까?",
    "글씨 쓰기 끝! 잘했어 👏", "다 맞췄어! 👏",
    "이야기 완성! 👏", "그 다음은 어떤 일이었지?",
    "먼저 아래에서 글자를 골라 봐!",
]

# 자모 이름 (names.js 와 같아야 한다)
JAMO_NAMES = {
    "ㄱ": "기역", "ㄲ": "쌍기역", "ㄴ": "니은", "ㄷ": "디귿", "ㄸ": "쌍디귿",
    "ㄹ": "리을", "ㅁ": "미음", "ㅂ": "비읍", "ㅃ": "쌍비읍", "ㅅ": "시옷",
    "ㅆ": "쌍시옷", "ㅇ": "이응", "ㅈ": "지읒", "ㅉ": "쌍지읒", "ㅊ": "치읓",
    "ㅋ": "키읔", "ㅌ": "티읕", "ㅍ": "피읖", "ㅎ": "히읗",
    "ㅏ": "아", "ㅑ": "야", "ㅓ": "어", "ㅕ": "여", "ㅗ": "오",
    "ㅛ": "요", "ㅜ": "우", "ㅠ": "유", "ㅡ": "으", "ㅣ": "이",
}


def unescape_js(s: str) -> str:
    return s.replace("\\'", "'").replace('\\"', '"').replace("\\\\", "\\")


def collect_lines() -> list[str]:
    lines: list[str] = []

    for path in sorted((DATA / "episodes").glob("ep*.js")):
        src = path.read_text(encoding="utf-8")
        for _, _, value in KEY_RE.findall(src):
            text = unescape_js(value).strip()
            if text and not text.endswith(".svg"):
                lines.append(text)

        # 자판기·사라진 글자의 목표 낱말과 망가진 낱말도 읽어준다.
        # 낱자(ㄱ, ㅄ …)는 건너뛴다 — TTS 가 낱자만으로는 소리를 못 만들고,
        # 낱자는 어차피 이름(비읍시옷)으로 읽어주기 때문이다.
        for _, _, word in WORD_RE.findall(src):
            if all("ㄱ" <= c <= "ㆎ" for c in word):
                continue
            lines.append(word)
            lines.append(f"{word} 완성!")
            lines.append(f"{word}? 다시 해 볼까?")

    lines.extend(FIXED_LINES)

    # 자모 이름 — 낱자 그대로와 "받침 ○○" 형태 모두
    for name in JAMO_NAMES.values():
        lines.append(name)
    for j, name in JAMO_NAMES.items():
        lines.append(f"받침 {name}")
        lines.append(f"여기는 {name} 이야")
        lines.append(f"여기는 받침 {name} 이야")

    # 이모지를 지운 뒤 중복 제거. 순서는 유지한다.
    seen: set[str] = set()
    out: list[str] = []
    for line in lines:
        t = spoken_text(line)
        if t and t not in seen:
            seen.add(t)
            out.append(t)
    return out


# ── 생성기 ─────────────────────────────────────────────────────────

async def gen_edge(text: str, dest: Path, voice: str) -> None:
    import edge_tts

    comm = edge_tts.Communicate(text, voice, rate="-8%")
    await comm.save(str(dest))


def gen_sapi(text: str, dest: Path) -> None:
    """오프라인 대체 경로 — 이 PC 에 설치된 한국어 SAPI 음성을 쓴다."""
    wav = dest.with_suffix(".wav")
    ps = f"""
Add-Type -AssemblyName System.Speech
$s = New-Object System.Speech.Synthesis.SpeechSynthesizer
$ko = $s.GetInstalledVoices() | Where-Object {{ $_.VoiceInfo.Culture.Name -like 'ko*' }}
if (-not $ko) {{ Write-Error 'ko 음성 없음'; exit 1 }}
$s.SelectVoice($ko[0].VoiceInfo.Name)
$s.Rate = -1
$s.SetOutputToWaveFile("{wav}")
$s.Speak([Console]::In.ReadToEnd())
$s.Dispose()
"""
    subprocess.run(["powershell", "-NoProfile", "-Command", ps],
                   input=text, text=True, encoding="utf-8",
                   check=True, capture_output=True)
    subprocess.run([ffmpeg_exe(), "-y", "-i", str(wav), "-ac", "1",
                    "-b:a", "32k", str(dest)],
                   check=True, capture_output=True)
    wav.unlink(missing_ok=True)


def write_bank(mapping: dict[str, str]) -> None:
    body = json.dumps(mapping, ensure_ascii=False, indent=1, sort_keys=True)
    BANK_JS.write_text(
        "/* 미리 만들어 둔 음성 파일 목록. tools/make_tts.py 가 자동 생성합니다.\n"
        " * 손으로 고치지 마세요. */\n"
        "(function (AIYA) {\n"
        "  'use strict';\n"
        "  AIYA.audio.registerVoicebank(\n" + body + "\n  );\n"
        "})(window.AIYA);\n",
        encoding="utf-8",
    )


async def main_async(args) -> int:
    lines = collect_lines()
    print(f"발화 문구 {len(lines)}개")
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    mapping: dict[str, str] = {}
    made = skipped = failed = 0

    for i, text in enumerate(lines, 1):
        key = voice_key(text)
        name = f"{key}.mp3"
        dest = OUT_DIR / name
        mapping[key] = name

        if dest.exists() and dest.stat().st_size > 200 and not args.force:
            skipped += 1
            continue

        try:
            if args.engine == "edge":
                voice = VOICES["grandpa"] if "따라" in text or "입을" in text else VOICES["narrator"]
                await gen_edge(text, dest, voice)
            else:
                gen_sapi(text, dest)
            made += 1
            if made % 20 == 0:
                print(f"  {made}개 생성… ({i}/{len(lines)})")
        except Exception as exc:  # noqa: BLE001 — 한 문구 실패로 전체를 멈추지 않는다
            failed += 1
            mapping.pop(key, None)
            print(f"  [실패] {text[:30]!r}: {type(exc).__name__}: {exc}")

    write_bank(mapping)
    total_kb = sum(f.stat().st_size for f in OUT_DIR.glob("*.mp3")) / 1024
    print(f"\n새로 만듦 {made} / 건너뜀 {skipped} / 실패 {failed}")
    print(f"voicebank.js 에 {len(mapping)}개 등록, 총 {total_kb:.0f} KB")
    if failed:
        print("실패한 문구는 기기 음성으로 읽거나 글자만 표시됩니다.")
    return 0


def main() -> int:
    ap = argparse.ArgumentParser(description="발음 음성 MP3 생성")
    ap.add_argument("--force", action="store_true", help="이미 있는 파일도 다시 만든다")
    ap.add_argument("--engine", choices=["edge", "sapi"], default="edge",
                    help="edge = 온라인 신경망 음성(권장), sapi = 오프라인 Windows 음성")
    args = ap.parse_args()
    return asyncio.run(main_async(args))


if __name__ == "__main__":
    sys.exit(main())
