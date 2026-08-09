/* 1화 「아이야」 — 모음 ㅏ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep001.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 1,
  "title": "아이야",
  "videoId": "sjxbhMNV97M",
  "objective": "모음 \"ㅏ\",\"ㅣ\",\"ㅑ\"의 소리를 인식한다.",
  "focus": "모음 ㅏ",
  "jamo": {
    "new": [
      "ㅏ",
      "ㅣ",
      "ㅑ",
      "ㅇ"
    ],
    "seen": []
  },
  "targetWords": [
    "아이야"
  ],
  "rewards": {
    "cards": [
      "ㅏ",
      "ㅣ",
      "ㅑ",
      "ㅇ"
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
          "at": 303,
          "options": [
            {
              "label": "우유",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "우유"
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
          "at": 543,
          "options": [
            {
              "label": "한글용사 아이야",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "한글용사 아이야"
              },
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
          "say": "아",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "입 모양을 따라 해 보세요",
          "options": [
            {
              "label": "ㅏ",
              "correct": true
            },
            {
              "label": "ㅑ",
              "relation": "strokePair"
            },
            {
              "label": "ㅣ",
              "relation": "containment"
            }
          ]
        },
        {
          "say": "아",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "아",
              "correct": true
            },
            {
              "label": "야",
              "relation": "strokePair"
            },
            {
              "label": "이",
              "relation": "containment"
            }
          ]
        },
        {
          "say": "아이, 아기, 어부. 첫소리가 다른 낱말은 무엇인가요?",
          "prompt": "첫소리가 다른 낱말은 무엇인가요?",
          "at": 688,
          "options": [
            {
              "label": "아이",
              "correct": false,
              "relation": "oneVowelDiff"
            },
            {
              "label": "아기",
              "correct": false,
              "relation": "oneVowelDiff"
            },
            {
              "label": "어부",
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
          "target": "ㅏ",
          "position": "jung",
          "cols": 4,
          "targetCount": 4,
          "prompt": "아 을 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㅑ",
              "relation": "strokePair",
              "count": 3
            },
            {
              "jamo": "ㅣ",
              "relation": "containment",
              "count": 3
            }
          ],
          "missHint": "이건 아 이 아니에요. 모양을 다시 보세요."
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
          "target": "아",
          "locked": [
            "cho"
          ],
          "at": 543,
          "prompt": "첫 자음은 넣어 두었어요. 나머지를 채워 주세요!",
          "decoys": []
        },
        {
          "target": "아이야",
          "locked": [
            "0:cho",
            "1:cho",
            "2:cho"
          ],
          "prompt": "'아이야' 전체를 만들어 보세요. 첫 자음은 넣어 두었어요.",
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
          "target": "아이야",
          "broken": "야이야",
          "prompt": "야이야? 모음이 바뀌었어요. 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅑ",
              "relation": "strokePair"
            },
            {
              "jamo": "ㅣ",
              "relation": "containment"
            }
          ]
        },
        {
          "target": "아이야",
          "broken": "이이야",
          "prompt": "이이야? 모음이 바뀌었어요. 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅑ",
              "relation": "strokePair"
            },
            {
              "jamo": "ㅣ",
              "relation": "containment"
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
      "prompt": "아 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "아이야",
          "pic": {
            "kind": "text",
            "value": "아이야"
          }
        },
        {
          "word": "아이",
          "pic": "👶"
        },
        {
          "word": "이",
          "pic": "🦷"
        },
        {
          "word": "아야",
          "pic": {
            "kind": "text",
            "value": "아야"
          }
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
          "target": "ㅏ",
          "kind": "jamo",
          "position": "jung",
          "prompt": "아 을 따라 써 보세요"
        },
        {
          "target": "아",
          "kind": "syllable",
          "prompt": "'아' 을 따라 써 보세요",
          "note": "ㅇ 을 먼저 쓰고 모음을 붙여요."
        },
        {
          "target": "아이야",
          "kind": "word",
          "prompt": "'아이야' 을 따라 써 보세요",
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
      "at": 196,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 216,
          "caption": "훈민이와 정음이가 처음 만난 한글 용사들의 이름을 적어 두고 싶었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 229,
          "caption": "아, 이, 야 라는 이름을 어떻게 쓰는지 몰랐어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 259,
          "caption": "한글용사들이 나타났어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 303,
          "caption": "우유 에서 이응 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "우유",
            "jamo": "ㅇ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 334,
          "caption": "아 용사가 아 를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅏ"
          }
        },
        {
          "order": 6,
          "at": 377,
          "caption": "이 용사가 이 를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅣ"
          }
        },
        {
          "order": 7,
          "at": 436,
          "caption": "야 용사가 야 를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅑ"
          }
        },
        {
          "order": 8,
          "at": 543,
          "caption": "자판기에 넣으니 한글용사 아이야 이 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 9,
          "at": 551,
          "caption": "할아버지와 '아이야' 을 소리 내어 읽었어요.",
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
