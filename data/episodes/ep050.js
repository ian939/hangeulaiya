/* 50화 「의자」 — 모음 ㅢ — ㅡ + ㅣ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep050.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 50,
  "title": "의자",
  "videoId": "icqlqmLZqqU",
  "objective": "복잡한 모음 'ㅢ'의 소리를 인식한다.",
  "focus": "모음 ㅢ — ㅡ + ㅣ",
  "jamo": {
    "new": [
      "ㅢ"
    ]
  },
  "targetWords": [
    "의자"
  ],
  "rewards": {
    "cards": [
      "ㅢ"
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
          "at": 313,
          "options": [
            {
              "label": "와플",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "와플",
                "emoji": "🧇"
              },
              "correct": true
            },
            {
              "label": "장난감",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "장난감",
                "emoji": "🧸"
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
          "q": "지읒 은 어디에서 찾았나요?",
          "at": 518,
          "options": [
            {
              "label": "장난감",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "장난감",
                "emoji": "🧸"
              },
              "correct": true
            },
            {
              "label": "와플",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "와플",
                "emoji": "🧇"
              }
            }
          ]
        },
        {
          "q": "자판기에서 무엇이 나왔나요?",
          "at": 583,
          "options": [
            {
              "label": "의자",
              "pic": "🪑",
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
          "say": "의",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "으 와 이 가 만나면 의 가 돼요",
          "options": [
            {
              "label": "ㅢ",
              "correct": true
            },
            {
              "label": "ㅡ",
              "relation": "containment",
              "why": "으 하나만 있는 소리예요."
            }
          ]
        },
        {
          "say": "의",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "의",
              "correct": true
            },
            {
              "label": "으",
              "relation": "containment"
            }
          ]
        },
        {
          "say": "의",
          "prompt": "비슷한 모음이 있어요. 잘 듣고 골라요",
          "options": [
            {
              "label": "ㅢ",
              "correct": true
            },
            {
              "label": "ㅡ",
              "relation": "containment"
            },
            {
              "label": "ㅣ",
              "relation": "containment"
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
          "target": "ㅢ",
          "position": "jung",
          "cols": 4,
          "targetCount": 4,
          "prompt": "의 을 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㅡ",
              "relation": "containment",
              "count": 3
            },
            {
              "jamo": "ㅣ",
              "relation": "containment",
              "count": 3
            },
            {
              "jamo": "ㅟ",
              "relation": "shape",
              "count": 3
            }
          ],
          "missHint": "이건 의 이 아니에요. 모양을 다시 보세요."
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
          "target": "의",
          "locked": [
            "cho"
          ],
          "at": 583,
          "prompt": "첫 자음은 넣어 두었어요. 나머지를 채워 주세요!",
          "decoys": [
            {
              "jamo": "ㅡ",
              "relation": "containment"
            },
            {
              "jamo": "ㅣ",
              "relation": "containment"
            },
            {
              "jamo": "ㅟ",
              "relation": "shape"
            }
          ]
        },
        {
          "target": "의자",
          "locked": [
            "0:cho",
            "1:cho"
          ],
          "prompt": "'의자' 전체를 만들어 보세요. 첫 자음은 넣어 두었어요.",
          "decoys": [
            {
              "jamo": "ㅡ",
              "relation": "containment"
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
      "type": "chunji",
      "id": "I",
      "title": "사라진 글자",
      "courses": [
        "full"
      ],
      "items": [
        {
          "target": "의자",
          "broken": "으자",
          "prompt": "모음이 반쪽만 남았어요! 의 로 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅡ",
              "relation": "containment"
            },
            {
              "jamo": "ㅣ",
              "relation": "containment"
            }
          ]
        },
        {
          "target": "의자",
          "broken": "으자",
          "prompt": "으? 비슷하지만 다른 글자예요. 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅡ",
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
      "prompt": "의 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "의자",
          "pic": "🪑"
        },
        {
          "word": "의사",
          "pic": "👩‍⚕️"
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
          "target": "ㅢ",
          "kind": "jamo",
          "position": "jung",
          "prompt": "의 을 따라 써 보세요"
        },
        {
          "target": "의",
          "kind": "syllable",
          "prompt": "'의' 을 따라 써 보세요",
          "note": "으 와 이 가 만나 의 가 돼요."
        },
        {
          "target": "의자",
          "kind": "word",
          "prompt": "'의자' 을 따라 써 보세요",
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
      "at": 135,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 155,
          "caption": "유치원에서 선생님이 책을 읽어 주는데 정음이도 앉고 싶었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 207,
          "caption": "의자가 모자랐어요. '의자' 는 어려운 글자였어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 237,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 313,
          "caption": "와플 에서 이응 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "와플",
            "emoji": "🧇",
            "jamo": "ㅇ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 347,
          "caption": "으 와 이 가 만나 의 가 되었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅢ"
          }
        },
        {
          "order": 6,
          "at": 518,
          "caption": "장난감 에서 지읒 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "장난감",
            "emoji": "🧸",
            "jamo": "ㅈ",
            "position": "cho"
          }
        },
        {
          "order": 7,
          "at": 583,
          "caption": "자판기에 넣으니 의자 이 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 8,
          "at": 624,
          "caption": "할아버지와 '의자' 을 소리 내어 읽었어요.",
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
