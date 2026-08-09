/* 5화 「우유」 — 모음 ㅠ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep005.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 5,
  "title": "우유",
  "videoId": "m1G8Wz3hxco",
  "objective": "모음 'ㅜ','ㅠ' 의 소리를 인식한다.",
  "focus": "모음 ㅠ",
  "jamo": {
    "new": [
      "ㅠ"
    ],
    "seen": [
      "ㅇ",
      "ㅜ"
    ]
  },
  "targetWords": [
    "우유"
  ],
  "rewards": {
    "cards": [
      "ㅠ"
    ]
  },
  "activities": [
    {
      "type": "story_quiz",
      "id": "A",
      "title": "이야기 퀴즈",
      "courses": [
        "short",
        "full"
      ],
      "shortCount": 2,
      "items": [
        {
          "q": "이응 은 어디에서 찾았나요?",
          "at": 400,
          "options": [
            {
              "label": "어항",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "어항"
              },
              "correct": true
            },
            {
              "label": "자판기",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "자판기"
              }
            },
            {
              "label": "냉장고",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "냉장고",
                "emoji": "🧊"
              }
            }
          ]
        },
        {
          "q": "자판기에서 무엇이 나왔나요?",
          "at": 547,
          "options": [
            {
              "label": "우유",
              "pic": "🥛",
              "correct": true
            },
            {
              "label": "모자",
              "pic": "👒"
            },
            {
              "label": "가방",
              "pic": "🎒"
            }
          ]
        }
      ]
    },
    {
      "type": "sound",
      "id": "B",
      "title": "소리 듣고 고르기",
      "courses": [
        "short",
        "full"
      ],
      "shortCount": 3,
      "items": [
        {
          "say": "유",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "입 모양을 따라 해 보세요",
          "options": [
            {
              "label": "ㅠ",
              "correct": true
            },
            {
              "label": "ㅜ",
              "relation": "strokePair"
            }
          ]
        },
        {
          "say": "유",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "유",
              "correct": true
            },
            {
              "label": "우",
              "relation": "strokePair"
            }
          ]
        },
        {
          "say": "우유, 우산, 유리. 첫소리가 다른 낱말은 무엇인가요?",
          "prompt": "첫소리가 다른 낱말은 무엇인가요?",
          "at": 679,
          "options": [
            {
              "label": "우유",
              "correct": false,
              "relation": "oneVowelDiff"
            },
            {
              "label": "우산",
              "correct": false,
              "relation": "oneVowelDiff"
            },
            {
              "label": "유리",
              "correct": true
            }
          ]
        }
      ]
    },
    {
      "type": "letterhunt",
      "id": "C",
      "title": "글자 찾기",
      "courses": [
        "full"
      ],
      "boards": [
        {
          "target": "ㅠ",
          "position": "jung",
          "cols": 4,
          "targetCount": 4,
          "prompt": "유 을 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㅜ",
              "relation": "strokePair",
              "count": 3
            }
          ],
          "missHint": "이건 유 이 아니에요. 모양을 다시 보세요."
        }
      ]
    },
    {
      "type": "jamobuild",
      "id": "D",
      "title": "뭐든지 자판기",
      "courses": [
        "short",
        "full"
      ],
      "shortCount": 1,
      "items": [
        {
          "target": "유",
          "locked": [
            "cho"
          ],
          "at": 547,
          "prompt": "첫 자음은 넣어 두었어요. 나머지를 채워 주세요!",
          "decoys": []
        },
        {
          "target": "우유",
          "locked": [
            "0:cho",
            "1:cho"
          ],
          "prompt": "'우유' 전체를 만들어 보세요. 첫 자음은 넣어 두었어요.",
          "decoys": []
        }
      ]
    },
    {
      "type": "chunji",
      "id": "I",
      "title": "사라진 글자",
      "courses": [
        "full"
      ],
      "items": [
        {
          "target": "우유",
          "broken": "우우",
          "prompt": "우? 모음이 바뀌었어요. 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅜ",
              "relation": "strokePair"
            }
          ]
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
      "prompt": "유 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "우유",
          "pic": "🥛"
        },
        {
          "word": "오이",
          "pic": "🥒"
        },
        {
          "word": "유아",
          "pic": {
            "kind": "text",
            "value": "유아"
          }
        },
        {
          "word": "얘",
          "pic": "🧒"
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
      "toleranceEm": 0.2,
      "passScore": 0.57,
      "items": [
        {
          "target": "ㅠ",
          "kind": "jamo",
          "position": "jung",
          "prompt": "유 을 따라 써 보세요"
        },
        {
          "target": "유",
          "kind": "syllable",
          "prompt": "'유' 을 따라 써 보세요",
          "note": "ㅇ 을 먼저 쓰고 모음을 붙여요."
        },
        {
          "target": "우유",
          "kind": "word",
          "prompt": "'우유' 을 따라 써 보세요",
          "note": "글자 크기를 같게 써 보세요."
        }
      ]
    },
    {
      "type": "sequence",
      "id": "F",
      "title": "이야기 순서",
      "courses": [
        "full"
      ],
      "at": 63,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 83,
          "caption": "훈민이와 정음이가 빵가게 놀이를 하며 손님에게 우유를 따라 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 295,
          "caption": "우유가 다 없어졌어요. '우유' 를 쓸 줄 몰랐어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 325,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 400,
          "caption": "어항 에서 이응 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "어항",
            "jamo": "ㅇ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 440,
          "caption": "우 용사가 우 를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅜ"
          }
        },
        {
          "order": 6,
          "at": 507,
          "caption": "유 용사가 유 를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅠ"
          }
        },
        {
          "order": 7,
          "at": 547,
          "caption": "자판기에 넣으니 우유 이 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 8,
          "at": 588,
          "caption": "할아버지와 '우유' 을 소리 내어 읽었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "grandpa"
          }
        }
      ]
    }
  ]
}
  );
})(window.AIYA);
