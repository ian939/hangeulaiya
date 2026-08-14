/* 시즌2 53화 「거울 / 겨울」 — 형태가 비슷한 낱말
 *
 * ㅓ 와 ㅕ, 획 하나 차이다. 하나는 물건이고 하나는 계절이라 뜻이 아주 멀다.
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
  "episode": 53,
  "season": 2,
  "title": "거울 / 겨울",
  "videoId": "14lFiCb-3fQ",
  "focus": "형태가 비슷한 낱말 — 거울 / 겨울 (모음 하나 차이)",
  "objective": "형태가 비슷한 낱말로 이야기를 통해 한글을 익힌다",
  "jamo": {
    "new": [],
    "seen": []
  },
  "targetWords": [
    "거울",
    "겨울"
  ],
  "wordFocus": {
    "kind": "nearPair",
    "words": [
      "거울",
      "겨울"
    ]
  },
  "rewards": {
    "cards": [],
    "words": [
      "거울",
      "겨울"
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
          "sentence": "___ 을 보고 얼굴을 확인했어요.",
          "options": [
            {
              "word": "거울",
              "correct": true
            },
            {
              "word": "겨울",
              "why": "겨울은 계절이라 볼 수 없어요."
            }
          ],
          "hint": "벽에 걸어 두는 물건이에요.",
          "after": "얼굴을 비추는 물건은 거울이에요."
        },
        {
          "sentence": "___ 이 되어 눈이 펑펑 내렸어요.",
          "options": [
            {
              "word": "겨울",
              "correct": true
            },
            {
              "word": "거울",
              "why": "거울에서는 눈이 내리지 않아요."
            }
          ],
          "hint": "눈이 오는 계절이에요.",
          "after": "눈이 오는 계절은 겨울이에요."
        },
        {
          "sentence": "___ 에는 두꺼운 옷을 입어요.",
          "options": [
            {
              "word": "겨울",
              "correct": true
            },
            {
              "word": "거울",
              "why": "거울은 계절이 아니에요."
            }
          ],
          "after": "추운 계절이 겨울이에요."
        },
        {
          "sentence": "모음에 획이 하나 더 있는 낱말은 ___ 이에요.",
          "options": [
            {
              "word": "겨울",
              "correct": true
            },
            {
              "word": "거울",
              "why": "거울의 첫 글자 모음은 ㅓ 예요."
            }
          ],
          "prompt": "모음을 보고 골라요",
          "after": "ㅓ 는 거울, ㅕ 는 겨울. 획 하나로 뜻이 달라져요."
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
            "겨울에",
            "눈이",
            "내려요"
          ],
          "say": "겨울에 눈이 내려요",
          "decoys": [
            "거울에"
          ],
          "hint": "언제? 무엇이? 어떻게 해요?"
        },
        {
          "words": [
            "거울을",
            "보고",
            "웃었어요"
          ],
          "say": "거울을 보고 웃었어요",
          "decoys": [
            "겨울을"
          ],
          "hint": "무엇을? 어떻게 하고? 어떻게 했어요?"
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
          "word": "거울",
          "pic": "🪞"
        },
        {
          "word": "겨울",
          "pic": "❄️"
        },
        {
          "word": "눈사람",
          "pic": "⛄"
        },
        {
          "word": "얼굴",
          "pic": "😊"
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
          "target": "거울",
          "kind": "word",
          "prompt": "'거울' 를 따라 써 보세요",
          "note": "첫 글자 모음은 ㅓ 예요."
        },
        {
          "target": "겨울",
          "kind": "word",
          "prompt": "'겨울' 를 따라 써 보세요",
          "note": "첫 글자 모음은 ㅕ 예요. 획을 하나 더 그어요."
        }
      ]
    }
  ]
}
  );
})(window.AIYA);
