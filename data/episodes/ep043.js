/* 43화 「계단」 — 모음 ㅖ — ㅕ + ㅣ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep043.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 43,
  "title": "계단",
  "videoId": "Va3JYQ_qaIk",
  "objective": "복잡한 모음 'ㅖ'의 소리를 인식한다.",
  "focus": "모음 ㅖ — ㅕ + ㅣ",
  "jamo": {
    "new": [
      "ㅖ"
    ],
    "seen": [
      "ㄱ",
      "ㄷ",
      "ㅏ",
      "ㅕ",
      "ㅣ",
      "받침 ㄴ"
    ]
  },
  "targetWords": [
    "계단"
  ],
  "rewards": {
    "cards": [
      "ㅖ"
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
          "q": "기역은 어디에서 찾았나요?",
          "at": 252,
          "options": [
            {
              "label": "가위",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "가위",
                "emoji": "✂️"
              },
              "correct": true
            },
            {
              "label": "돌고래",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "돌고래",
                "emoji": "🐬"
              }
            },
            {
              "label": "신발",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "신발",
                "emoji": "👟"
              }
            }
          ]
        },
        {
          "q": "받침 니은은 어디에서 찾았나요?",
          "at": 569,
          "options": [
            {
              "label": "신발",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "신발",
                "emoji": "👟"
              },
              "correct": true
            },
            {
              "label": "가위",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "가위",
                "emoji": "✂️"
              }
            },
            {
              "label": "돌고래",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "돌고래",
                "emoji": "🐬"
              }
            }
          ]
        },
        {
          "q": "자판기에서 무엇이 나왔나요?",
          "at": 634,
          "options": [
            {
              "label": "계단",
              "pic": "🪜",
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
          "say": "예",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "여와 이가 만나면 예가 돼요",
          "options": [
            {
              "label": "ㅖ",
              "correct": true
            },
            {
              "label": "ㅕ",
              "relation": "containment",
              "why": "여 하나만 있는 소리예요."
            }
          ]
        },
        {
          "say": "계",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "계",
              "correct": true
            },
            {
              "label": "겨",
              "relation": "containment"
            }
          ]
        },
        {
          "say": "예",
          "prompt": "비슷한 모음이 있어요. 잘 듣고 골라요",
          "options": [
            {
              "label": "ㅖ",
              "correct": true
            },
            {
              "label": "ㅔ",
              "relation": "strokePair"
            },
            {
              "label": "ㅒ",
              "relation": "mirrorPair"
            }
          ]
        },
        {
          "say": "거울, 계단, 계절. 첫소리가 다른 낱말은 무엇인가요?",
          "prompt": "첫소리가 다른 낱말은 무엇인가요?",
          "at": 816,
          "options": [
            {
              "label": "거울",
              "correct": true
            },
            {
              "label": "계단",
              "correct": false,
              "relation": "oneVowelDiff"
            },
            {
              "label": "계절",
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
          "target": "ㅖ",
          "position": "jung",
          "cols": 4,
          "targetCount": 4,
          "prompt": "예를 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㅔ",
              "relation": "strokePair",
              "count": 3
            },
            {
              "jamo": "ㅒ",
              "relation": "mirrorPair",
              "count": 3
            },
            {
              "jamo": "ㅕ",
              "relation": "containment",
              "count": 3
            }
          ],
          "missHint": "이건 예가 아니에요. 모양을 다시 보세요."
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
          "target": "계",
          "locked": [
            "cho"
          ],
          "at": 634,
          "prompt": "첫 자음은 넣어 두었어요. 나머지를 채워 주세요!",
          "decoys": [
            {
              "jamo": "ㅔ",
              "relation": "strokePair"
            },
            {
              "jamo": "ㅒ",
              "relation": "mirrorPair"
            },
            {
              "jamo": "ㅕ",
              "relation": "containment"
            }
          ]
        },
        {
          "target": "계단",
          "locked": [
            "0:cho",
            "1:cho"
          ],
          "prompt": "'계단' 전체를 만들어 보세요. 첫 자음은 넣어 두었어요.",
          "decoys": [
            {
              "jamo": "ㅔ",
              "relation": "strokePair"
            },
            {
              "jamo": "ㅒ",
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
          "target": "계단",
          "broken": "겨단",
          "prompt": "모음이 반쪽만 남았어요! 예로 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅕ",
              "relation": "containment"
            },
            {
              "jamo": "ㅣ",
              "relation": "containment"
            }
          ]
        },
        {
          "target": "계단",
          "broken": "게단",
          "prompt": "게? 비슷하지만 다른 글자예요. 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅔ",
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
      "prompt": "예 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "계단",
          "pic": "🪜"
        },
        {
          "word": "시계",
          "pic": "🕐"
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
          "target": "ㅖ",
          "kind": "jamo",
          "position": "jung",
          "prompt": "예를 따라 써 보세요"
        },
        {
          "target": "계",
          "kind": "syllable",
          "prompt": "'계' 을 따라 써 보세요",
          "note": "여와 이가 만나 예가 돼요."
        },
        {
          "target": "계단",
          "kind": "word",
          "prompt": "'계단' 을 따라 써 보세요",
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
          "caption": "나무에 걸린 풍선을 꺼내려고 올라갈 계단이 필요했어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 139,
          "caption": "'계단' 을 써야 하는데 둘 다 쓸 줄 몰랐어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 169,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 252,
          "caption": "가위 에서 기역을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "가위",
            "emoji": "✂️",
            "jamo": "ㄱ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 269,
          "caption": "여와 이가 만나 예가 되었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅖ"
          }
        },
        {
          "order": 6,
          "at": 429,
          "caption": "돌고래 에서 디귿을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "돌고래",
            "emoji": "🐬",
            "jamo": "ㄷ",
            "position": "cho"
          }
        },
        {
          "order": 7,
          "at": 569,
          "caption": "신발 에서 받침 니은을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "신발",
            "emoji": "👟",
            "jamo": "ㄴ",
            "position": "jong"
          }
        },
        {
          "order": 8,
          "at": 634,
          "caption": "자판기에 넣으니 계단이 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 9,
          "at": 691,
          "caption": "할아버지와 '계단' 을 소리 내어 읽었어요.",
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
