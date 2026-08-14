/* 시즌2 47화 「진짜 / 가짜」 — 반대말
 *
 * 아이가 놀이에서 자주 쓰는 말이다. 뒷글자 '짜' 는 같고 앞글자만 달라서,
 * 낱말의 어느 부분이 뜻을 정하는지 보기에 좋다.
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
  "episode": 47,
  "season": 2,
  "title": "진짜 / 가짜",
  "videoId": "v1W9Yc5mz0Q",
  "focus": "반대말 — 진짜 ↔ 가짜",
  "objective": "반대말로 이야기를 통해 한글을 익힌다",
  "jamo": {
    "new": [],
    "seen": []
  },
  "targetWords": [
    "진짜",
    "가짜"
  ],
  "wordFocus": {
    "kind": "antonym",
    "words": [
      "진짜",
      "가짜"
    ]
  },
  "rewards": {
    "cards": [],
    "words": [
      "진짜",
      "가짜"
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
          "sentence": "이건 그림이 아니라 ___ 사과예요. 먹을 수 있어요.",
          "options": [
            {
              "word": "진짜",
              "correct": true
            },
            {
              "word": "가짜",
              "why": "가짜는 먹을 수 없어요."
            }
          ],
          "hint": "먹을 수 있다고 했어요.",
          "after": "정말인 것이 진짜예요."
        },
        {
          "sentence": "이 꽃은 종이로 만든 ___ 예요.",
          "options": [
            {
              "word": "가짜",
              "correct": true
            },
            {
              "word": "진짜",
              "why": "종이로 만든 것은 진짜가 아니에요."
            }
          ],
          "hint": "종이로 만들었다고 했어요.",
          "after": "정말이 아닌 것이 가짜예요."
        },
        {
          "sentence": "진짜의 반대말은 ___ 예요.",
          "options": [
            {
              "word": "가짜",
              "correct": true
            },
            {
              "word": "멋짜",
              "why": "그런 낱말은 없어요."
            },
            {
              "word": "커짜",
              "why": "그런 낱말은 없어요."
            }
          ],
          "prompt": "반대말을 골라요",
          "after": "진짜의 반대말은 가짜예요. 뒷글자는 같고 앞글자만 달라요."
        },
        {
          "sentence": "두 낱말에서 똑같은 글자는 ___ 예요.",
          "options": [
            {
              "word": "짜",
              "correct": true
            },
            {
              "word": "진",
              "why": "진 은 진짜에만 있어요."
            },
            {
              "word": "가",
              "why": "가 는 가짜에만 있어요."
            }
          ],
          "prompt": "같은 글자를 골라요",
          "after": "앞글자가 뜻을 정해요. 진 이면 정말, 가 면 아니에요."
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
            "이건",
            "진짜",
            "금이에요"
          ],
          "say": "이건 진짜 금이에요",
          "decoys": [
            "가짜"
          ],
          "hint": "어느 것? 어떤? 무엇이에요?"
        },
        {
          "words": [
            "종이로",
            "만든",
            "가짜",
            "꽃이에요"
          ],
          "say": "종이로 만든 가짜 꽃이에요",
          "decoys": [
            "진짜"
          ],
          "hint": "무엇으로? 어떻게 한? 어떤? 무엇이에요?"
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
          "word": "진짜",
          "pic": "✅"
        },
        {
          "word": "가짜",
          "pic": "❌"
        },
        {
          "word": "금",
          "pic": "🪙"
        },
        {
          "word": "장난감",
          "pic": "🧸"
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
          "target": "진짜",
          "kind": "word",
          "prompt": "'진짜' 를 따라 써 보세요",
          "note": "받침 ㄴ 을 넣고 쌍지읒을 써요."
        },
        {
          "target": "가짜",
          "kind": "word",
          "prompt": "'가짜' 를 따라 써 보세요",
          "note": "받침이 없고 쌍지읒을 써요."
        }
      ]
    }
  ]
}
  );
})(window.AIYA);
