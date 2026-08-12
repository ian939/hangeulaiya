/* 49화 「위」 — 모음 ㅟ — ㅜ + ㅣ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep049.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 *
 * 영상으로 확인이 필요한 항목: 자판기 결과물
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 49,
  "title": "위",
  "videoId": "VFk_Ehl1E6g",
  "objective": "복잡한 모음 'ㅟ'의 소리를 인식한다.",
  "focus": "모음 ㅟ — ㅜ + ㅣ",
  "jamo": {
    "new": [
      "ㅟ"
    ],
    "seen": [
      "ㅇ",
      "ㅜ",
      "ㅣ"
    ]
  },
  "targetWords": [
    "위"
  ],
  "rewards": {
    "cards": [
      "ㅟ"
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
          "at": 294,
          "options": [
            {
              "label": "옥수수",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "옥수수",
                "emoji": "🌽"
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
          "say": "위",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "우와 이가 만나면 위가 돼요",
          "options": [
            {
              "label": "ㅟ",
              "correct": true
            },
            {
              "label": "ㅜ",
              "relation": "containment",
              "why": "우 하나만 있는 소리예요."
            }
          ]
        },
        {
          "say": "위",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "위",
              "correct": true
            },
            {
              "label": "우",
              "relation": "containment"
            }
          ]
        },
        {
          "say": "위",
          "prompt": "비슷한 모음이 있어요. 잘 듣고 골라요",
          "options": [
            {
              "label": "ㅟ",
              "correct": true
            },
            {
              "label": "ㅚ",
              "relation": "mirrorPair"
            },
            {
              "label": "ㅞ",
              "relation": "shape"
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
          "target": "ㅟ",
          "position": "jung",
          "cols": 4,
          "targetCount": 4,
          "prompt": "위를 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㅚ",
              "relation": "mirrorPair",
              "count": 3
            },
            {
              "jamo": "ㅞ",
              "relation": "shape",
              "count": 3
            },
            {
              "jamo": "ㅜ",
              "relation": "containment",
              "count": 3
            }
          ],
          "missHint": "이건 위가 아니에요. 모양을 다시 보세요."
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
          "target": "위",
          "locked": [
            "cho"
          ],
          "at": 433,
          "prompt": "첫 자음은 넣어 두었어요. 나머지를 채워 주세요!",
          "decoys": [
            {
              "jamo": "ㅚ",
              "relation": "mirrorPair"
            },
            {
              "jamo": "ㅞ",
              "relation": "shape"
            },
            {
              "jamo": "ㅜ",
              "relation": "containment"
            }
          ]
        },
        {
          "target": "위",
          "prompt": "'위' 을 처음부터 만들어 보세요.",
          "decoys": [
            {
              "jamo": "ㅚ",
              "relation": "mirrorPair"
            },
            {
              "jamo": "ㅞ",
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
          "target": "위",
          "broken": "우",
          "prompt": "모음이 반쪽만 남았어요! 위로 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅜ",
              "relation": "containment"
            },
            {
              "jamo": "ㅣ",
              "relation": "containment"
            }
          ]
        },
        {
          "target": "위",
          "broken": "외",
          "prompt": "외? 비슷하지만 다른 글자예요. 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅚ",
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
      "prompt": "위 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "위",
          "pic": "⬆️"
        },
        {
          "word": "귀",
          "pic": "👂"
        },
        {
          "word": "쥐",
          "pic": "🐭"
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
          "target": "ㅟ",
          "kind": "jamo",
          "position": "jung",
          "prompt": "위를 따라 써 보세요"
        },
        {
          "target": "위",
          "kind": "syllable",
          "prompt": "'위' 을 따라 써 보세요",
          "note": "우와 이가 만나 위가 돼요."
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
      "at": 127,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 147,
          "caption": "정음이가 이 용사처럼 하늘 위로 날아오르고 싶었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 188,
          "caption": "'위' 카드를 만들려는데 어떻게 쓰는지 몰랐어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 218,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 294,
          "caption": "옥수수 에서 이응을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "옥수수",
            "emoji": "🌽",
            "jamo": "ㅇ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 305,
          "caption": "우와 이가 만나 위가 되었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅟ"
          }
        },
        {
          "order": 6,
          "at": 433,
          "caption": "자판기에 넣으니 선물이 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 7,
          "at": 485,
          "caption": "할아버지와 '위' 을 소리 내어 읽었어요.",
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
