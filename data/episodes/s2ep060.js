/* 시즌2 60화 「사랑 / 자랑」 — 형태가 비슷한 낱말
 *
 * ㅅ 과 ㅈ 은 소리도 모양도 닮았다. 둘 다 마음을 나타내는 말이라
 * 뜻으로 갈라야 한다.
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
  "episode": 60,
  "season": 2,
  "title": "사랑 / 자랑",
  "videoId": "B_nm6a3juM8",
  "focus": "형태가 비슷한 낱말 — 사랑 / 자랑 (첫소리 하나 차이)",
  "objective": "형태가 비슷한 낱말로 이야기를 통해 한글을 익힌다",
  "jamo": {
    "new": [],
    "seen": []
  },
  "targetWords": [
    "사랑",
    "자랑"
  ],
  "wordFocus": {
    "kind": "nearPair",
    "words": [
      "사랑",
      "자랑"
    ]
  },
  "rewards": {
    "cards": [],
    "words": [
      "사랑",
      "자랑"
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
          "sentence": "엄마 아빠를 ___ 해요.",
          "options": [
            {
              "word": "사랑",
              "correct": true
            },
            {
              "word": "자랑",
              "why": "자랑은 잘한 것을 남에게 보여 주는 거예요."
            }
          ],
          "hint": "마음이 따뜻해지는 말이에요.",
          "after": "아끼는 마음이 사랑이에요."
        },
        {
          "sentence": "상을 받아서 친구들에게 ___ 했어요.",
          "options": [
            {
              "word": "자랑",
              "correct": true
            },
            {
              "word": "사랑",
              "why": "사랑은 아끼는 마음이라 보여 주는 게 아니에요."
            }
          ],
          "hint": "잘한 것을 보여 주는 거예요.",
          "after": "잘한 것을 남에게 보여 주는 것이 자랑이에요."
        },
        {
          "sentence": "강아지를 ___ 하는 마음으로 돌봐요.",
          "options": [
            {
              "word": "사랑",
              "correct": true
            },
            {
              "word": "자랑",
              "why": "돌보는 마음은 사랑이에요."
            }
          ],
          "after": "아끼고 돌보는 마음이 사랑이에요."
        },
        {
          "sentence": "첫소리가 시옷인 낱말은 ___ 이에요.",
          "options": [
            {
              "word": "사랑",
              "correct": true
            },
            {
              "word": "자랑",
              "why": "자랑의 첫소리는 지읒이에요."
            }
          ],
          "prompt": "첫소리를 보고 골라요",
          "after": "ㅅ 은 사랑, ㅈ 은 자랑이에요."
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
            "가족을",
            "사랑해요"
          ],
          "say": "가족을 사랑해요",
          "decoys": [
            "자랑해요"
          ],
          "hint": "누구를? 어떻게 해요?"
        },
        {
          "words": [
            "상장을",
            "친구에게",
            "자랑했어요"
          ],
          "say": "상장을 친구에게 자랑했어요",
          "decoys": [
            "사랑했어요"
          ],
          "hint": "무엇을? 누구에게? 어떻게 했어요?"
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
          "word": "사랑",
          "pic": "❤️"
        },
        {
          "word": "자랑",
          "pic": "🏆"
        },
        {
          "word": "가족",
          "pic": "👨‍👩‍👦"
        },
        {
          "word": "상장",
          "pic": "🎖️"
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
          "target": "사랑",
          "kind": "word",
          "prompt": "'사랑' 를 따라 써 보세요",
          "note": "첫소리는 시옷이에요."
        },
        {
          "target": "자랑",
          "kind": "word",
          "prompt": "'자랑' 를 따라 써 보세요",
          "note": "첫소리는 지읒이에요. 시옷 위에 획을 하나 얹어요."
        }
      ]
    }
  ]
}
  );
})(window.AIYA);
