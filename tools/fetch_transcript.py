"""회차별 한국어 자동 자막(ASR)을 받아 work/transcripts/ 에 저장한다.

    python tools/fetch_transcript.py            # 샘플 3편
    python tools/transcript.py 21 22            # 특정 회차

수동 자막은 없고 자동 생성(ASR) 트랙만 존재하므로 품질은 완벽하지 않다.
줄거리 파악의 보조 자료로 쓰고, 최종 확인은 프레임 이미지로 한다.
"""
from __future__ import annotations

import json
import sys

from _common import SAMPLE_EPISODES, WORK


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


def main(argv: list[str]) -> int:
    wanted = {int(a) for a in argv} if argv else None
    episodes = [e for e in SAMPLE_EPISODES if wanted is None or e["ep"] in wanted]
    if not episodes:
        print(f"해당 회차를 SAMPLE_EPISODES 에서 찾을 수 없습니다: {argv}")
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
