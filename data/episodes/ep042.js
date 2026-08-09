/* 42화 「게」 — 모음 ㅔ — ㅓ + ㅣ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep042.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 42,
  "title": "게",
  "videoId": "e7ou46fLYWc",
  "objective": "복잡한 모음 'ㅔ'의 소리를 인식한다",
  "focus": "모음 ㅔ — ㅓ + ㅣ",
  "jamo": {
    "new": [
      "ㅔ"
    ],
    "seen": [
      "ㄱ",
      "ㅓ",
      "ㅣ"
    ]
  },
  "targetWords": [
    "게"
  ],
  "rewards": {
    "cards": [
      "ㅔ"
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
          "q": "기역 은 어디에서 찾았나요?",
          "at": 288,
          "options": [
            {
              "label": "국기",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "국기",
                "emoji": "🚩"
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
          "at": 419,
          "options": [
            {
              "label": "게",
              "pic": "🦀",
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
          "say": "에",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "어 와 이 가 만나면 에 가 돼요",
          "options": [
            {
              "label": "ㅔ",
              "correct": true
            },
            {
              "label": "ㅓ",
              "relation": "containment",
              "why": "어 하나만 있는 소리예요."
            }
          ]
        },
        {
          "say": "게",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "게",
              "correct": true
            },
            {
              "label": "거",
              "relation": "containment"
            }
          ]
        },
        {
          "say": "에",
          "prompt": "비슷한 모음이 있어요. 잘 듣고 골라요",
          "options": [
            {
              "label": "ㅔ",
              "correct": true
            },
            {
              "label": "ㅐ",
              "relation": "mirrorPair"
            },
            {
              "label": "ㅓ",
              "relation": "containment"
            }
          ]
        },
        {
          "say": "가게, 무게, 방귀. 끝소리가 다른 낱말은 무엇인가요?",
          "prompt": "끝소리가 다른 낱말은 무엇인가요?",
          "at": 588,
          "options": [
            {
              "label": "가게",
              "correct": false,
              "relation": "oneVowelDiff"
            },
            {
              "label": "무게",
              "correct": false,
              "relation": "oneVowelDiff"
            },
            {
              "label": "방귀",
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
          "target": "ㅔ",
          "position": "jung",
          "cols": 4,
          "targetCount": 4,
          "prompt": "에 을 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㅐ",
              "relation": "mirrorPair",
              "count": 3
            },
            {
              "jamo": "ㅓ",
              "relation": "containment",
              "count": 3
            }
          ],
          "missHint": "이건 에 이 아니에요. 모양을 다시 보세요."
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
          "target": "게",
          "locked": [
            "cho"
          ],
          "at": 419,
          "prompt": "첫 자음은 넣어 두었어요. 나머지를 채워 주세요!",
          "decoys": [
            {
              "jamo": "ㅐ",
              "relation": "mirrorPair"
            },
            {
              "jamo": "ㅓ",
              "relation": "containment"
            }
          ]
        },
        {
          "target": "게",
          "prompt": "'게' 을 처음부터 만들어 보세요.",
          "decoys": [
            {
              "jamo": "ㅐ",
              "relation": "mirrorPair"
            },
            {
              "jamo": "ㅓ",
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
          "target": "게",
          "broken": "거",
          "prompt": "모음이 반쪽만 남았어요! 에 로 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅓ",
              "relation": "containment"
            },
            {
              "jamo": "ㅣ",
              "relation": "containment"
            }
          ]
        },
        {
          "target": "게",
          "broken": "개",
          "prompt": "개? 비슷하지만 다른 글자예요. 고쳐 주세요.",
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
      "prompt": "에 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "게",
          "pic": "🦀"
        },
        {
          "word": "네",
          "pic": {
            "kind": "text",
            "value": "네"
          }
        },
        {
          "word": "베개",
          "pic": "🛏️"
        },
        {
          "word": "약",
          "pic": "💊"
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
          "target": "ㅔ",
          "kind": "jamo",
          "position": "jung",
          "prompt": "에 을 따라 써 보세요"
        },
        {
          "target": "게",
          "kind": "syllable",
          "prompt": "'게' 을 따라 써 보세요",
          "note": "어 와 이 가 만나 에 가 돼요."
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
      "at": 90,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 110,
          "caption": "훈민이와 정음이가 게처럼 옆으로 걷는 시합을 하려 했어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 179,
          "caption": "게가 어떻게 걷는지 보려는데 '게' 를 쓸 줄 몰랐어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 209,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 288,
          "caption": "국기 에서 기역 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "국기",
            "emoji": "🚩",
            "jamo": "ㄱ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 304,
          "caption": "어 와 이 가 만나 에 가 되었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅔ"
          }
        },
        {
          "order": 6,
          "at": 419,
          "caption": "자판기에 넣으니 게 이 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 7,
          "at": 461,
          "caption": "할아버지와 '게' 을 소리 내어 읽었어요.",
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
