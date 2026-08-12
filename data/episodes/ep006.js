/* 6화 「요가」 — 모음 ㅛ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep006.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 6,
  "title": "요가",
  "videoId": "RgqOMeXTZQ0",
  "objective": "모음 'ㅗ', 'ㅏ' 의 소리를 인식한다.",
  "focus": "모음 ㅛ",
  "jamo": {
    "new": [
      "ㅛ"
    ],
    "seen": [
      "ㄱ",
      "ㅇ",
      "ㅏ"
    ]
  },
  "targetWords": [
    "요가"
  ],
  "rewards": {
    "cards": [
      "ㅛ"
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
          "q": "이응은 어디에서 찾았나요?",
          "at": 357,
          "options": [
            {
              "label": "요요",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "요요"
              },
              "correct": true
            },
            {
              "label": "기린",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "기린"
              }
            },
            {
              "label": "모자",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "모자"
              }
            }
          ]
        },
        {
          "q": "기역은 어디에서 찾았나요?",
          "at": 451,
          "options": [
            {
              "label": "기린",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "기린"
              },
              "correct": true
            },
            {
              "label": "요요",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "요요"
              }
            }
          ]
        },
        {
          "q": "자판기에서 무엇이 나왔나요?",
          "at": 558,
          "options": [
            {
              "label": "요가 간판",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "요가 간판"
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
          "say": "요",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "입 모양을 따라 해 보세요",
          "options": [
            {
              "label": "ㅛ",
              "correct": true
            },
            {
              "label": "ㅗ",
              "relation": "strokePair"
            },
            {
              "label": "ㅠ",
              "relation": "mirrorPair"
            }
          ]
        },
        {
          "say": "요",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "요",
              "correct": true
            },
            {
              "label": "오",
              "relation": "strokePair"
            },
            {
              "label": "유",
              "relation": "mirrorPair"
            }
          ]
        },
        {
          "say": "요가, 요정, 야호. 첫소리가 다른 낱말은 무엇인가요?",
          "prompt": "첫소리가 다른 낱말은 무엇인가요?",
          "at": 686,
          "options": [
            {
              "label": "요가",
              "correct": false,
              "relation": "oneVowelDiff"
            },
            {
              "label": "요정",
              "correct": false,
              "relation": "oneVowelDiff"
            },
            {
              "label": "야호",
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
          "target": "ㅛ",
          "position": "jung",
          "cols": 4,
          "targetCount": 4,
          "prompt": "요를 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㅗ",
              "relation": "strokePair",
              "count": 3
            },
            {
              "jamo": "ㅠ",
              "relation": "mirrorPair",
              "count": 3
            }
          ],
          "missHint": "이건 요가 아니에요. 모양을 다시 보세요."
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
          "target": "요",
          "locked": [
            "cho"
          ],
          "at": 558,
          "prompt": "첫 자음은 넣어 두었어요. 나머지를 채워 주세요!",
          "decoys": [
            {
              "jamo": "ㅗ",
              "relation": "strokePair"
            },
            {
              "jamo": "ㅠ",
              "relation": "mirrorPair"
            }
          ]
        },
        {
          "target": "요가",
          "locked": [
            "0:cho",
            "1:cho"
          ],
          "prompt": "'요가' 전체를 만들어 보세요. 첫 자음은 넣어 두었어요.",
          "decoys": [
            {
              "jamo": "ㅗ",
              "relation": "strokePair"
            },
            {
              "jamo": "ㅠ",
              "relation": "mirrorPair"
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
          "target": "요가",
          "broken": "오가",
          "prompt": "오가? 모음이 바뀌었어요. 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅗ",
              "relation": "strokePair"
            },
            {
              "jamo": "ㅠ",
              "relation": "mirrorPair"
            }
          ]
        },
        {
          "target": "요가",
          "broken": "유가",
          "prompt": "유가? 모음이 바뀌었어요. 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅗ",
              "relation": "strokePair"
            },
            {
              "jamo": "ㅠ",
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
      "prompt": "요 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "요가",
          "pic": "🧘"
        },
        {
          "word": "요요",
          "pic": "🪀"
        },
        {
          "word": "얘",
          "pic": "🧒"
        },
        {
          "word": "게",
          "pic": "🦀"
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
          "target": "ㅛ",
          "kind": "jamo",
          "position": "jung",
          "prompt": "요를 따라 써 보세요"
        },
        {
          "target": "요",
          "kind": "syllable",
          "prompt": "'요' 을 따라 써 보세요",
          "note": "ㅇ 을 먼저 쓰고 모음을 붙여요."
        },
        {
          "target": "요가",
          "kind": "word",
          "prompt": "'요가' 을 따라 써 보세요",
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
      "at": 144,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 164,
          "caption": "훈민이와 정음이가 요가 교실을 열고 할아버지를 손님으로 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 236,
          "caption": "간판에 '요가' 를 써야 하는데 쓸 줄 몰랐어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 266,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 357,
          "caption": "요요 에서 이응을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "요요",
            "jamo": "ㅇ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 371,
          "caption": "요 용사가 요를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅛ"
          }
        },
        {
          "order": 6,
          "at": 451,
          "caption": "기린 에서 기역을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "기린",
            "jamo": "ㄱ",
            "position": "cho"
          }
        },
        {
          "order": 7,
          "at": 515,
          "caption": "아 용사가 아를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅏ"
          }
        },
        {
          "order": 8,
          "at": 558,
          "caption": "자판기에 넣으니 요가 간판이 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 9,
          "at": 573,
          "caption": "할아버지와 '요가' 을 소리 내어 읽었어요.",
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
