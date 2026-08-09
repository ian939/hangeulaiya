/* 41화 「얘」 — 모음 ㅒ — ㅑ + ㅣ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep041.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 41,
  "title": "얘",
  "videoId": "zofpkN_tMmc",
  "objective": "복잡한 모음 'ㅒ'의 소리를 인식한다.",
  "focus": "모음 ㅒ — ㅑ + ㅣ",
  "jamo": {
    "new": [
      "ㅒ"
    ],
    "seen": [
      "ㅇ",
      "ㅑ",
      "ㅣ"
    ]
  },
  "targetWords": [
    "얘"
  ],
  "rewards": {
    "cards": [
      "ㅒ"
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
          "at": 359,
          "options": [
            {
              "label": "올챙이",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "올챙이",
                "emoji": "🐸"
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
          "at": 511,
          "options": [
            {
              "label": "친구들",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "친구들"
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
          "say": "얘",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "야 와 이 가 만나면 얘 가 돼요",
          "options": [
            {
              "label": "ㅒ",
              "correct": true
            },
            {
              "label": "ㅑ",
              "relation": "containment",
              "why": "야 하나만 있는 소리예요."
            }
          ]
        },
        {
          "say": "얘",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "얘",
              "correct": true
            },
            {
              "label": "야",
              "relation": "containment"
            }
          ]
        },
        {
          "say": "얘",
          "prompt": "비슷한 모음이 있어요. 잘 듣고 골라요",
          "options": [
            {
              "label": "ㅒ",
              "correct": true
            },
            {
              "label": "ㅐ",
              "relation": "strokePair"
            },
            {
              "label": "ㅑ",
              "relation": "containment"
            }
          ]
        },
        {
          "say": "얘들아, 위험해, 얘기해. 첫소리가 다른 낱말은 무엇인가요?",
          "prompt": "첫소리가 다른 낱말은 무엇인가요?",
          "at": 683,
          "options": [
            {
              "label": "얘들아",
              "correct": false,
              "relation": "oneVowelDiff"
            },
            {
              "label": "위험해",
              "correct": true
            },
            {
              "label": "얘기해",
              "correct": false,
              "relation": "oneVowelDiff"
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
          "target": "ㅒ",
          "position": "jung",
          "cols": 4,
          "targetCount": 4,
          "prompt": "얘 을 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㅐ",
              "relation": "strokePair",
              "count": 3
            },
            {
              "jamo": "ㅑ",
              "relation": "containment",
              "count": 3
            }
          ],
          "missHint": "이건 얘 이 아니에요. 모양을 다시 보세요."
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
          "target": "얘",
          "locked": [
            "cho"
          ],
          "at": 511,
          "prompt": "첫 자음은 넣어 두었어요. 나머지를 채워 주세요!",
          "decoys": [
            {
              "jamo": "ㅐ",
              "relation": "strokePair"
            },
            {
              "jamo": "ㅑ",
              "relation": "containment"
            }
          ]
        },
        {
          "target": "얘",
          "prompt": "'얘' 을 처음부터 만들어 보세요.",
          "decoys": [
            {
              "jamo": "ㅐ",
              "relation": "strokePair"
            },
            {
              "jamo": "ㅑ",
              "relation": "containment"
            }
          ]
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
          "target": "얘",
          "broken": "야",
          "prompt": "모음이 반쪽만 남았어요! 얘 로 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅑ",
              "relation": "containment"
            },
            {
              "jamo": "ㅣ",
              "relation": "containment"
            }
          ]
        },
        {
          "target": "얘",
          "broken": "애",
          "prompt": "애? 비슷하지만 다른 글자예요. 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅐ",
              "relation": "mirrorPair"
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
      "prompt": "얘 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "얘",
          "pic": "🧒"
        },
        {
          "word": "약",
          "pic": "💊"
        },
        {
          "word": "국",
          "pic": "🍲"
        },
        {
          "word": "수박",
          "pic": "🍉"
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
      "toleranceEm": 0.16,
      "passScore": 0.57,
      "items": [
        {
          "target": "ㅒ",
          "kind": "jamo",
          "position": "jung",
          "prompt": "얘 을 따라 써 보세요"
        },
        {
          "target": "얘",
          "kind": "syllable",
          "prompt": "'얘' 을 따라 써 보세요",
          "note": "야 와 이 가 만나 얘 가 돼요."
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
      "at": 91,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 111,
          "caption": "훈민이와 정음이가 파티를 열고 친구들을 부르려 했어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 253,
          "caption": "멀리 있는 친구들을 부르려는데 '얘' 를 쓸 줄 몰랐어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 283,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 359,
          "caption": "올챙이 에서 이응 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "올챙이",
            "emoji": "🐸",
            "jamo": "ㅇ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 391,
          "caption": "야 와 이 가 만나 얘 가 되었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅒ"
          }
        },
        {
          "order": 6,
          "at": 511,
          "caption": "자판기에 넣으니 친구들 이 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 7,
          "at": 572,
          "caption": "할아버지와 '얘' 을 소리 내어 읽었어요.",
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
