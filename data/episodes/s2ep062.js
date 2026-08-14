/* 시즌2 62화 「치다」 — 한 낱말의 여러 뜻
 *
 * 44화 「감다」와 같은 구조지만 뜻이 더 멀다. 때리는 것, 세우는 것,
 * 소리 내는 것. 문장을 끝까지 읽어야 뜻이 정해진다.
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
  "episode": 62,
  "season": 2,
  "title": "치다",
  "videoId": "3V-fMA2YVb0",
  "focus": "한 낱말의 여러 뜻 — 공을 치다 · 텐트를 치다 · 박수를 치다",
  "objective": "한 낱말의 여러 뜻로 이야기를 통해 한글을 익힌다",
  "jamo": {
    "new": [],
    "seen": []
  },
  "targetWords": [
    "치다"
  ],
  "wordFocus": {
    "kind": "polysemy",
    "words": [
      "치다"
    ]
  },
  "rewards": {
    "cards": [],
    "words": [
      "치다"
    ]
  },
  "activities": [
    {
      "type": "wordpair",
      "id": "W",
      "title": "무슨 뜻일까요",
      "courses": [
        "short",
        "full"
      ],
      "shortCount": 3,
      "items": [
        {
          "sentence": "방망이로 야구공을 쳐요. 무엇을 하는 걸까요?",
          "options": [
            {
              "word": "때린다",
              "correct": true
            },
            {
              "word": "세운다",
              "why": "공은 세우는 것이 아니에요."
            },
            {
              "word": "소리를 낸다",
              "why": "방망이로 때리는 거예요."
            }
          ],
          "prompt": "문장을 읽고 무슨 뜻인지 골라요",
          "hint": "방망이가 나와요.",
          "after": "공을 치다는 때린다는 뜻이에요."
        },
        {
          "sentence": "산에서 잘 텐트를 쳐요. 무엇을 하는 걸까요?",
          "options": [
            {
              "word": "세운다",
              "correct": true
            },
            {
              "word": "때린다",
              "why": "텐트를 때리는 게 아니에요."
            },
            {
              "word": "소리를 낸다",
              "why": "텐트는 소리를 내지 않아요."
            }
          ],
          "prompt": "문장을 읽고 무슨 뜻인지 골라요",
          "hint": "산에서 잔다고 했어요.",
          "after": "텐트를 치다는 세운다는 뜻이에요."
        },
        {
          "sentence": "공연이 끝나고 박수를 쳐요. 무엇을 하는 걸까요?",
          "options": [
            {
              "word": "소리를 낸다",
              "correct": true
            },
            {
              "word": "세운다",
              "why": "박수는 세우는 것이 아니에요."
            },
            {
              "word": "때린다",
              "why": "손뼉으로 소리를 내는 거예요."
            }
          ],
          "prompt": "문장을 읽고 무슨 뜻인지 골라요",
          "hint": "공연이 끝났다고 했어요.",
          "after": "박수를 치다는 손뼉으로 소리를 낸다는 뜻이에요."
        },
        {
          "sentence": "치다는 뜻이 몇 개일까요?",
          "options": [
            {
              "word": "세 개",
              "correct": true
            },
            {
              "word": "한 개",
              "why": "공·텐트·박수, 세 가지 뜻이 나왔어요."
            }
          ],
          "prompt": "오늘 배운 것을 떠올려 골라요",
          "hint": "공, 텐트, 박수 세 가지가 나왔어요.",
          "after": "① 공을 치다 = 때린다  ② 텐트를 치다 = 세운다  ③ 박수를 치다 = 소리를 낸다. 앞에 오는 낱말이 뜻을 정해요."
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
            "방망이로",
            "공을",
            "쳐요"
          ],
          "say": "방망이로 공을 쳐요",
          "decoys": [
            "텐트를"
          ],
          "hint": "무엇으로? 무엇을? 어떻게 해요?"
        },
        {
          "words": [
            "산에서",
            "텐트를",
            "쳐요"
          ],
          "say": "산에서 텐트를 쳐요",
          "decoys": [
            "박수를"
          ],
          "hint": "어디에서? 무엇을? 어떻게 해요?"
        },
        {
          "words": [
            "공연이",
            "끝나서",
            "박수를",
            "쳐요"
          ],
          "say": "공연이 끝나서 박수를 쳐요",
          "decoys": [
            "공을"
          ],
          "hint": "무엇이? 왜? 무엇을? 어떻게 해요?"
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
      "prompt": "치다의 뜻과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "공을 치다",
          "pic": "⚾"
        },
        {
          "word": "텐트를 치다",
          "pic": "⛺"
        },
        {
          "word": "박수를 치다",
          "pic": "👏"
        },
        {
          "word": "피아노",
          "pic": "🎹"
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
          "target": "치다",
          "kind": "word",
          "prompt": "'치다' 를 따라 써 보세요",
          "note": "받침이 없는 두 글자예요."
        },
        {
          "target": "박수",
          "kind": "word",
          "prompt": "'박수' 를 따라 써 보세요",
          "note": "받침 ㄱ 이 들어가요."
        }
      ]
    }
  ]
}
  );
})(window.AIYA);
