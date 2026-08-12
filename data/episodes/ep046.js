/* 46화 「최고」 — 모음 ㅚ — ㅗ + ㅣ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep046.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 46,
  "title": "최고",
  "videoId": "vxceaffFyfA",
  "objective": "복잡한 모음 'ㅚ'의 소리를 인식한다.",
  "focus": "모음 ㅚ — ㅗ + ㅣ",
  "jamo": {
    "new": [
      "ㅚ"
    ],
    "seen": [
      "ㄱ",
      "ㅊ",
      "ㅗ",
      "ㅣ"
    ]
  },
  "targetWords": [
    "최고"
  ],
  "rewards": {
    "cards": [
      "ㅚ"
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
          "q": "치읓은 어디에서 찾았나요?",
          "at": 305,
          "options": [
            {
              "label": "철봉",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "철봉",
                "emoji": "🤸"
              },
              "correct": true
            },
            {
              "label": "골짜기",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "골짜기",
                "emoji": "🏞️"
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
          "at": 504,
          "options": [
            {
              "label": "골짜기",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "골짜기",
                "emoji": "🏞️"
              },
              "correct": true
            },
            {
              "label": "철봉",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "철봉",
                "emoji": "🤸"
              }
            }
          ]
        },
        {
          "q": "자판기에서 무엇이 나왔나요?",
          "at": 563,
          "options": [
            {
              "label": "이름표",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "이름표"
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
          "say": "외",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "오와 이가 만나면 외가 돼요",
          "options": [
            {
              "label": "ㅚ",
              "correct": true
            },
            {
              "label": "ㅗ",
              "relation": "containment",
              "why": "오 하나만 있는 소리예요."
            }
          ]
        },
        {
          "say": "최",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "최",
              "correct": true
            },
            {
              "label": "초",
              "relation": "containment"
            }
          ]
        },
        {
          "say": "외",
          "prompt": "비슷한 모음이 있어요. 잘 듣고 골라요",
          "options": [
            {
              "label": "ㅚ",
              "correct": true
            },
            {
              "label": "ㅙ",
              "relation": "shape"
            },
            {
              "label": "ㅗ",
              "relation": "containment"
            }
          ]
        },
        {
          "say": "취소, 최고, 최선. 첫소리가 다른 낱말은 무엇인가요?",
          "prompt": "첫소리가 다른 낱말은 무엇인가요?",
          "at": 708,
          "options": [
            {
              "label": "취소",
              "correct": true
            },
            {
              "label": "최고",
              "correct": false,
              "relation": "oneVowelDiff"
            },
            {
              "label": "최선",
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
          "target": "ㅚ",
          "position": "jung",
          "cols": 4,
          "targetCount": 4,
          "prompt": "외를 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㅙ",
              "relation": "shape",
              "count": 3
            },
            {
              "jamo": "ㅗ",
              "relation": "containment",
              "count": 3
            }
          ],
          "missHint": "이건 외가 아니에요. 모양을 다시 보세요."
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
          "target": "최",
          "locked": [
            "cho"
          ],
          "at": 563,
          "prompt": "첫 자음은 넣어 두었어요. 나머지를 채워 주세요!",
          "decoys": [
            {
              "jamo": "ㅙ",
              "relation": "shape"
            }
          ]
        },
        {
          "target": "최고",
          "locked": [
            "0:cho",
            "1:cho"
          ],
          "prompt": "'최고' 전체를 만들어 보세요. 첫 자음은 넣어 두었어요.",
          "decoys": [
            {
              "jamo": "ㅙ",
              "relation": "shape"
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
          "target": "최고",
          "broken": "초고",
          "prompt": "모음이 반쪽만 남았어요! 외로 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅗ",
              "relation": "containment"
            },
            {
              "jamo": "ㅣ",
              "relation": "containment"
            }
          ]
        },
        {
          "target": "최고",
          "broken": "쵀고",
          "prompt": "쵀? 비슷하지만 다른 글자예요. 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅙ",
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
      "prompt": "외 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "최고",
          "pic": "👍"
        },
        {
          "word": "회의",
          "pic": "🗣️"
        },
        {
          "word": "약",
          "pic": "💊"
        },
        {
          "word": "국",
          "pic": "🍲"
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
          "target": "ㅚ",
          "kind": "jamo",
          "position": "jung",
          "prompt": "외를 따라 써 보세요"
        },
        {
          "target": "최",
          "kind": "syllable",
          "prompt": "'최' 을 따라 써 보세요",
          "note": "오와 이가 만나 외가 돼요."
        },
        {
          "target": "최고",
          "kind": "word",
          "prompt": "'최고' 을 따라 써 보세요",
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
      "at": 100,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 120,
          "caption": "훈민이와 정음이가 서로 최고로 잘하는 것을 자랑했어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 220,
          "caption": "둘이 최고라고 알리려는데 '최고' 를 쓸 줄 몰랐어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 250,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 305,
          "caption": "철봉 에서 치읓을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "철봉",
            "emoji": "🤸",
            "jamo": "ㅊ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 326,
          "caption": "오와 이가 만나 외가 되었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅚ"
          }
        },
        {
          "order": 6,
          "at": 504,
          "caption": "골짜기 에서 기역을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "골짜기",
            "emoji": "🏞️",
            "jamo": "ㄱ",
            "position": "cho"
          }
        },
        {
          "order": 7,
          "at": 563,
          "caption": "자판기에 넣으니 이름표가 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 8,
          "at": 592,
          "caption": "할아버지와 '최고' 을 소리 내어 읽었어요.",
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
