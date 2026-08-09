"""제공된 한글 카드 템플릿(A4 인쇄용)에서 앱에 쓸 카드 두 면을 만든다.

    python tools/make_card_art.py

원본은 접이식 인쇄물이라 위·아래 절반이 각각 180° 돌아가 있다.
  위쪽 절반  = 로고면      → 아직 못 모은 카드 (뒤집혀 있는 카드)
  아래쪽 절반 = 빈 글자 틀  → 모은 카드. 가운데에 자모를 얹는다

절반을 그대로 쓴다. 붉은 틀만 오려내려 하면 어디를 자르든 틀이나 로고 탭이
한쪽 잘려서, 결국 절반 통째로 쓰는 게 가장 깔끔하다. 페이지 바깥의 금색
테두리는 카드의 테두리로 자연스럽게 읽힌다.

2480x3508 / 7MB 원본을 그대로 쓸 수 없으니 480px WebP 로 줄인다.
"""
from __future__ import annotations

import sys

from _common import ASSETS, ROOT

SRC_CANDIDATES = [
    '아이야 로고 있는_ 기본 한글 카드.png',
    '아이야 로고 없는_ 기본 한글 카드.png',
]

OUT_W = 480


def main() -> int:
    try:
        from PIL import Image
    except ImportError:
        print('Pillow 가 필요합니다:  python -m pip install pillow')
        return 1

    src = next((ROOT / n for n in SRC_CANDIDATES if (ROOT / n).exists()), None)
    if src is None:
        print('카드 템플릿 PNG 를 찾지 못했습니다. 아래 이름 중 하나로 프로젝트 폴더에 두세요:')
        for n in SRC_CANDIDATES:
            print('   ', n)
        return 1

    print(f'원본: {src.name}')
    im = Image.open(src).convert('RGB')
    W, Hh = im.size
    half = Hh // 2

    out_dir = ASSETS / 'pics'
    out_dir.mkdir(parents=True, exist_ok=True)

    for label, box, name in (
        ('카드 뒷면(로고)', (0, 0, W, half), 'card-back.webp'),
        ('카드 앞면(빈 틀)', (0, half, W, Hh), 'card-face.webp'),
    ):
        part = im.crop(box).rotate(180)   # 접이식 인쇄용이라 180° 돌아가 있다
        w, h = part.size
        part = part.resize((OUT_W, round(h * OUT_W / w)), Image.LANCZOS)
        dest = out_dir / name
        part.save(dest, 'WEBP', quality=84, method=6)
        print(f'  {label:16s} → {name}  {part.size[0]}x{part.size[1]}  '
              f'{dest.stat().st_size / 1024:.0f} KB')

    print('\napp/css/base.css 가 이 파일을 카드 배경으로 씁니다.')
    return 0


if __name__ == '__main__':
    sys.exit(main())
