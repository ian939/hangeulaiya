/* 시즌2 46화 「피다 / 파다」 — 형태가 비슷한 낱말
 *
 * ㅣ 와 ㅏ, 모음 하나 차이인데 하는 일이 정반대다.
 * 꽃이 피는 것과 흙을 파는 것.
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
  "episode": 46,
  "season": 2,
  "title": "피다 / 파다",
  "videoId": "k9mZzhuFW_E",
  "focus": "형태가 비슷한 낱말 — 피다 / 파다 (모음 하나 차이)",
  "objective": "형태가 비슷한 낱말로 이야기를 통해 한글을 익힌다",
  "jamo": {
    "new": [],
    "seen": []
  },
  "targetWords": [
    "피다",
    "파다"
  ],
  "wordFocus": {
    "kind": "nearPair",
    "words": [
      "피다",
      "파다"
    ]
  },
  "rewards": {
    "cards": [],
    "words": [
      "피다",
      "파다"
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
          "sentence": "봄이 되어 꽃이 활짝 ___.",
          "options": [
            {
              "word": "피다",
              "correct": true
            },
            {
              "word": "파다",
              "why": "파다는 땅에 구멍을 내는 거예요."
            }
          ],
          "hint": "꽃이 벌어지는 것을 말해요.",
          "after": "꽃이 벌어지는 것은 피다예요."
        },
        {
          "sentence": "삽으로 흙을 ___.",
          "options": [
            {
              "word": "파다",
              "correct": true
            },
            {
              "word": "피다",
              "why": "피다는 꽃이 벌어지는 거예요."
            }
          ],
          "hint": "구멍을 내는 것이에요.",
          "after": "흙에 구멍을 내는 것은 파다예요."
        },
        {
          "sentence": "씨앗을 심으려고 땅을 ___.",
          "options": [
            {
              "word": "파다",
              "correct": true
            },
            {
              "word": "피다",
              "why": "심기 전에는 땅을 파요."
            }
          ],
          "after": "땅에 구멍을 내는 것이 파다예요."
        },
        {
          "sentence": "모음이 ㅣ 인 낱말은 ___ 예요.",
          "options": [
            {
              "word": "피다",
              "correct": true
            },
            {
              "word": "파다",
              "why": "파다의 첫 글자 모음은 ㅏ 예요."
            }
          ],
          "prompt": "모음을 보고 골라요",
          "after": "ㅣ 는 피다, ㅏ 는 파다예요."
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
            "봄에",
            "꽃이",
            "피어요"
          ],
          "say": "봄에 꽃이 피어요",
          "decoys": [
            "파여요"
          ],
          "hint": "언제? 무엇이? 어떻게 해요?"
        },
        {
          "words": [
            "삽으로",
            "땅을",
            "파요"
          ],
          "say": "삽으로 땅을 파요",
          "decoys": [
            "피어요"
          ],
          "hint": "무엇으로? 무엇을? 어떻게 해요?"
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
          "word": "피다",
          "pic": "🌸"
        },
        {
          "word": "파다",
          "pic": "🕳️"
        },
        {
          "word": "꽃",
          "pic": "🌷"
        },
        {
          "word": "삽",
          "pic": "🪣"
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
          "target": "피다",
          "kind": "word",
          "prompt": "'피다' 를 따라 써 보세요",
          "note": "첫 글자 모음은 ㅣ 예요."
        },
        {
          "target": "파다",
          "kind": "word",
          "prompt": "'파다' 를 따라 써 보세요",
          "note": "첫 글자 모음은 ㅏ 예요."
        }
      ]
    }
  ]
}
  );
})(window.AIYA);
