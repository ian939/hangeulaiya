/* 시즌2 32화 「고리 / 꼬리」 — 형태가 비슷한 낱말
 *
 * 첫소리가 ㄱ 이냐 ㄲ 이냐로 뜻이 완전히 갈린다. 시즌1 쌍자음 단원에서
 * 배운 된소리가 낱말 수준에서 다시 나온다.
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
  "episode": 32,
  "season": 2,
  "title": "고리 / 꼬리",
  "videoId": "0Oi1qdyxJXI",
  "focus": "형태가 비슷한 낱말 — 고리 / 꼬리 (된소리 하나 차이)",
  "objective": "형태가 비슷한 낱말로 이야기를 통해 한글을 익힌다",
  "jamo": {
    "new": [],
    "seen": []
  },
  "targetWords": [
    "고리",
    "꼬리"
  ],
  "wordFocus": {
    "kind": "nearPair",
    "words": [
      "고리",
      "꼬리"
    ]
  },
  "rewards": {
    "cards": [],
    "words": [
      "고리",
      "꼬리"
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
          "sentence": "강아지가 ___ 를 살랑살랑 흔들어요.",
          "options": [
            {
              "word": "꼬리",
              "correct": true
            },
            {
              "word": "고리",
              "why": "고리는 둥근 쇠붙이예요. 흔들 수 없어요."
            }
          ],
          "hint": "동물 몸에 달린 것을 떠올려 보세요.",
          "after": "동물 몸 뒤에 달린 것은 꼬리예요."
        },
        {
          "sentence": "열쇠를 ___ 에 끼워 두었어요.",
          "options": [
            {
              "word": "고리",
              "correct": true
            },
            {
              "word": "꼬리",
              "why": "꼬리는 동물 몸에 달린 것이라 열쇠를 끼울 수 없어요."
            }
          ],
          "hint": "둥글게 생긴 물건이에요.",
          "after": "둥글게 이어진 물건은 고리예요."
        },
        {
          "sentence": "여우는 ___ 가 길고 복슬복슬해요.",
          "options": [
            {
              "word": "꼬리",
              "correct": true
            },
            {
              "word": "고리",
              "why": "고리는 털이 없어요."
            }
          ],
          "after": "털이 있는 것은 꼬리예요."
        },
        {
          "sentence": "된소리로 세게 읽는 낱말은 ___ 예요.",
          "options": [
            {
              "word": "꼬리",
              "correct": true
            },
            {
              "word": "고리",
              "why": "고리는 ㄱ 하나로 약하게 읽어요."
            }
          ],
          "prompt": "첫소리를 보고 골라요",
          "hint": "ㄲ 은 목에 힘을 주고 세게 내는 소리예요.",
          "after": "ㄱ 은 고리, ㄲ 은 꼬리. 첫소리 하나로 뜻이 달라져요."
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
            "강아지가",
            "꼬리를",
            "흔들어요"
          ],
          "say": "강아지가 꼬리를 흔들어요",
          "decoys": [
            "고리를"
          ],
          "hint": "누가? 무엇을? 어떻게 해요?"
        },
        {
          "words": [
            "열쇠를",
            "고리에",
            "걸었어요"
          ],
          "say": "열쇠를 고리에 걸었어요",
          "decoys": [
            "꼬리에"
          ],
          "hint": "무엇을? 어디에? 어떻게 했어요?"
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
          "word": "고리",
          "pic": "🔗"
        },
        {
          "word": "꼬리",
          "pic": "🐕"
        },
        {
          "word": "열쇠",
          "pic": "🔑"
        },
        {
          "word": "여우",
          "pic": "🦊"
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
          "target": "고리",
          "kind": "word",
          "prompt": "'고리' 를 따라 써 보세요",
          "note": "첫소리는 기역 하나예요."
        },
        {
          "target": "꼬리",
          "kind": "word",
          "prompt": "'꼬리' 를 따라 써 보세요",
          "note": "첫소리에 기역을 두 개 나란히 써요."
        }
      ]
    }
  ]
}
  );
})(window.AIYA);
