"""공용 유틸 — 경로, .env 로딩, 회차 정의."""
from __future__ import annotations

import os
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
WORK = ROOT / "work"
DATA = ROOT / "data"
ASSETS = ROOT / "assets"


def load_env() -> dict[str, str]:
    """.env 를 읽어 dict 로 돌려주고 os.environ 에도 넣는다."""
    env: dict[str, str] = {}
    path = ROOT / ".env"
    if path.exists():
        for line in path.read_text(encoding="utf-8").splitlines():
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            k, v = line.split("=", 1)
            env[k.strip()] = v.strip()
            os.environ.setdefault(k.strip(), v.strip())
    return env


def ffmpeg_exe() -> str:
    """PATH 의 ffmpeg 를 쓰고, 없으면 imageio-ffmpeg 번들 바이너리를 쓴다."""
    from shutil import which

    found = which("ffmpeg")
    if found:
        return found
    import imageio_ffmpeg

    return imageio_ffmpeg.get_ffmpeg_exe()


# 샘플 3편 — 받침 도입부. 확장 시 여기에 줄을 추가한다.
SAMPLE_EPISODES = [
    {"ep": 21, "word": "약", "batchim": "ㄱ", "video_id": "EgerMhNs2qk"},
    {"ep": 22, "word": "문", "batchim": "ㄴ", "video_id": "NLlC2ESCuQQ"},
    {"ep": 23, "word": "돋보기", "batchim": "ㄷ", "video_id": "gaNXiFFUCns"},
]
