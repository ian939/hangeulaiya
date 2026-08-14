/* 시즌2 51화 「구름 / 먹구름」 — 낱말이 합쳐진 말
 *
 * 앞에 한 글자가 붙어 **더 자세한 뜻**이 된다. 29화 싸다/비싸다 는 뜻이
 * 뒤집혔지만, 여기는 뜻이 좁아진다 — 그 차이를 아는 것이 이 회차다.
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
  "episode": 51,
  "season": 2,
  "title": "구름 / 먹구름",
  "videoId": "-BGO5Q9BDv4",
  "focus": "낱말이 합쳐진 말 — 구름 + 먹- = 먹구름",
  "objective": "낱말이 합쳐진 말로 이야기를 통해 한글을 익힌다",
  "jamo": {
    "new": [],
    "seen": []
  },
  "targetWords": [
    "구름",
    "먹구름"
  ],
  "wordFocus": {
    "kind": "compound",
    "words": [
      "구름",
      "먹구름"
    ]
  },
  "rewards": {
    "cards": [],
    "words": [
      "구름",
      "먹구름"
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
          "sentence": "파란 하늘에 하얀 ___ 이 떠 있어요.",
          "options": [
            {
              "word": "구름",
              "correct": true
            },
            {
              "word": "먹구름",
              "why": "먹구름은 까맣고 비가 올 것 같은 구름이에요."
            }
          ],
          "hint": "하얗다고 했어요.",
          "after": "하늘에 떠 있는 것이 구름이에요."
        },
        {
          "sentence": "하늘이 까매지더니 ___ 이 몰려왔어요.",
          "options": [
            {
              "word": "먹구름",
              "correct": true
            },
            {
              "word": "구름",
              "why": "까만 구름은 따로 먹구름이라고 불러요."
            }
          ],
          "hint": "까맣다고 했어요.",
          "after": "까만 구름을 먹구름이라고 해요."
        },
        {
          "sentence": "___ 이 끼면 곧 비가 올 것 같아요.",
          "options": [
            {
              "word": "먹구름",
              "correct": true
            },
            {
              "word": "구름",
              "why": "하얀 구름만으로는 비가 오지 않아요."
            }
          ],
          "after": "먹구름이 끼면 비가 올 때가 많아요."
        },
        {
          "sentence": "먹구름에서 구름 앞에 붙은 글자는 ___ 이에요.",
          "options": [
            {
              "word": "먹",
              "correct": true
            },
            {
              "word": "름",
              "why": "름 은 구름의 끝글자예요."
            },
            {
              "word": "구",
              "why": "구 는 구름의 첫글자예요."
            }
          ],
          "prompt": "붙은 글자를 골라요",
          "after": "먹- 은 까맣다는 뜻이에요. 그래서 먹구름은 까만 구름이에요."
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
            "하늘에",
            "구름이",
            "떠 있어요"
          ],
          "say": "하늘에 구름이 떠 있어요",
          "decoys": [
            "먹구름이"
          ],
          "hint": "어디에? 무엇이? 어떻게 해요?"
        },
        {
          "words": [
            "먹구름이",
            "몰려와",
            "비가",
            "내려요"
          ],
          "say": "먹구름이 몰려와 비가 내려요",
          "decoys": [
            "구름이"
          ],
          "hint": "무엇이? 어떻게 하고? 무엇이? 어떻게 해요?"
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
          "word": "구름",
          "pic": "☁️"
        },
        {
          "word": "먹구름",
          "pic": "🌩️"
        },
        {
          "word": "하늘",
          "pic": "🌤️"
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
          "target": "구름",
          "kind": "word",
          "prompt": "'구름' 를 따라 써 보세요",
          "note": "받침 ㅁ 이 들어가요."
        },
        {
          "target": "먹구름",
          "kind": "word",
          "prompt": "'먹구름' 를 따라 써 보세요",
          "note": "구름 앞에 먹 을 붙여요."
        }
      ]
    }
  ]
}
  );
})(window.AIYA);
