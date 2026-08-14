/* 시즌2 54화 「무지개 / 번개 / 안개」 — 서로 관련 있는 세 낱말
 *
 * 끝글자가 같은 세 낱말이다. 끝이 같아도 앞이 다르면 완전히 다른 것이라는
 * 걸 배운다. 셋 다 날씨와 관련돼 있어 묶어 기억하기 좋다.
 *
 * 이 파일은 tools/gen_s2.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/s2_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리 컷(이야기 퀴즈·이야기 순서)은 자막을 받은 뒤 채웁니다.
 * 낱말과 문장이 이 단원의 본 내용이라, 그것부터 넣었습니다.
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 54,
  "season": 2,
  "title": "무지개 / 번개 / 안개",
  "videoId": "EmGlUze_cKo",
  "focus": "관련 있는 세 낱말 — 무지개 · 번개 · 안개 (모두 '개' 로 끝나요)",
  "objective": "서로 관련 있는 세 낱말로 이야기를 통해 한글을 익힌다",
  "jamo": {
    "new": [],
    "seen": []
  },
  "targetWords": [
    "무지개",
    "번개",
    "안개"
  ],
  "wordFocus": {
    "kind": "trio",
    "words": [
      "무지개",
      "번개",
      "안개"
    ]
  },
  "rewards": {
    "cards": [],
    "words": [
      "무지개",
      "번개",
      "안개"
    ]
  },
  "activities": [
    {
      "type": "wordpair",
      "id": "W",
      "title": "낱말 고르기",
      "courses": [
        "short",
        "full"
      ],
      "shortCount": 3,
      "items": [
        {
          "sentence": "비가 그친 뒤 하늘에 일곱 빛깔 ___ 가 떴어요.",
          "options": [
            {
              "word": "무지개",
              "correct": true
            },
            {
              "word": "번개",
              "why": "번개는 번쩍하는 빛이에요."
            },
            {
              "word": "안개",
              "why": "안개는 뿌옇게 끼는 것이에요."
            }
          ],
          "hint": "일곱 빛깔이라고 했어요.",
          "after": "비 온 뒤 하늘에 뜨는 일곱 빛깔이 무지개예요."
        },
        {
          "sentence": "번쩍! 하고 하늘이 밝아졌어요. ___ 가 쳤어요.",
          "options": [
            {
              "word": "번개",
              "correct": true
            },
            {
              "word": "무지개",
              "why": "무지개는 번쩍하지 않아요."
            },
            {
              "word": "안개",
              "why": "안개는 소리도 빛도 없어요."
            }
          ],
          "hint": "번쩍한다고 했어요.",
          "after": "하늘이 번쩍하는 것은 번개예요."
        },
        {
          "sentence": "뿌옇게 끼어서 앞이 잘 안 보여요. ___ 가 짙어요.",
          "options": [
            {
              "word": "안개",
              "correct": true
            },
            {
              "word": "무지개",
              "why": "무지개는 앞을 가리지 않아요."
            },
            {
              "word": "번개",
              "why": "번개는 순식간에 사라져요."
            }
          ],
          "after": "앞을 뿌옇게 가리는 것은 안개예요."
        },
        {
          "sentence": "세 낱말이 모두 똑같이 끝나는 글자는 ___ 예요.",
          "options": [
            {
              "word": "개",
              "correct": true
            },
            {
              "word": "무",
              "why": "무 는 무지개에만 있어요."
            },
            {
              "word": "번",
              "why": "번 은 번개에만 있어요."
            }
          ],
          "prompt": "같은 글자를 골라요",
          "after": "끝글자가 같아도 앞글자가 다르면 다른 낱말이에요."
        }
      ]
    },
    {
      "type": "sentence",
      "id": "S",
      "title": "문장 만들기",
      "courses": [
        "full"
      ],
      "items": [
        {
          "words": [
            "비가",
            "그치고",
            "무지개가",
            "떴어요"
          ],
          "say": "비가 그치고 무지개가 떴어요",
          "decoys": [
            "번개가"
          ],
          "hint": "무엇이? 어떻게 하고? 무엇이? 어떻게 했어요?"
        },
        {
          "words": [
            "안개가",
            "짙어서",
            "앞이",
            "안 보여요"
          ],
          "say": "안개가 짙어서 앞이 안 보여요",
          "decoys": [
            "무지개가"
          ],
          "hint": "무엇이? 왜? 무엇이? 어떻게 해요?"
        }
      ]
    },
    {
      "type": "match",
      "id": "G",
      "title": "낱말과 그림",
      "courses": [
        "full"
      ],
      "prompt": "낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "무지개",
          "pic": "🌈"
        },
        {
          "word": "번개",
          "pic": "⚡"
        },
        {
          "word": "안개",
          "pic": "🌫️"
        },
        {
          "word": "비",
          "pic": "🌧️"
        }
      ]
    },
    {
      "type": "writing",
      "id": "E",
      "title": "한글 쓰기",
      "courses": [
        "short",
        "full"
      ],
      "shortCount": 1,
      "toleranceEm": 0.15,
      "passScore": 0.57,
      "items": [
        {
          "target": "무지개",
          "kind": "word",
          "prompt": "'무지개' 를 따라 써 보세요",
          "note": "세 글자 모두 받침이 없어요."
        },
        {
          "target": "번개",
          "kind": "word",
          "prompt": "'번개' 를 따라 써 보세요",
          "note": "첫 글자에 받침 ㄴ 이 들어가요."
        }
      ]
    }
  ]
}
  );
})(window.AIYA);
