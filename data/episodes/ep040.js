/* 40화 「재미」 — 모음 ㅐ — ㅏ + ㅣ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep040.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 40,
  "title": "재미",
  "videoId": "kAP4OQo1B5M",
  "objective": "복잡한 모음 'ㅐ'의 소리를 인식한다",
  "focus": "모음 ㅐ — ㅏ + ㅣ",
  "jamo": {
    "new": [
      "ㅐ"
    ]
  },
  "targetWords": [
    "재미"
  ],
  "rewards": {
    "cards": [
      "ㅐ"
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
          "q": "지읒 은 어디에서 찾았나요?",
          "at": 296,
          "options": [
            {
              "label": "종이",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "종이",
                "emoji": "📄"
              },
              "correct": true
            },
            {
              "label": "만화책",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "만화책",
                "emoji": "📚"
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
          "q": "미음 은 어디에서 찾았나요?",
          "at": 465,
          "options": [
            {
              "label": "만화책",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "만화책",
                "emoji": "📚"
              },
              "correct": true
            },
            {
              "label": "종이",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "종이",
                "emoji": "📄"
              }
            }
          ]
        },
        {
          "q": "자판기에서 무엇이 나왔나요?",
          "at": 526,
          "options": [
            {
              "label": "비눗방울",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "비눗방울"
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
          "say": "애",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "아 와 이 가 만나면 애 가 돼요",
          "options": [
            {
              "label": "ㅐ",
              "correct": true
            },
            {
              "label": "ㅏ",
              "relation": "containment",
              "why": "아 하나만 있는 소리예요."
            }
          ]
        },
        {
          "say": "재",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "재",
              "correct": true
            },
            {
              "label": "자",
              "relation": "containment"
            }
          ]
        },
        {
          "say": "애",
          "prompt": "비슷한 모음이 있어요. 잘 듣고 골라요",
          "options": [
            {
              "label": "ㅐ",
              "correct": true
            },
            {
              "label": "ㅏ",
              "relation": "containment"
            }
          ]
        },
        {
          "say": "재미, 재주, 자주. 첫소리가 다른 낱말은 무엇인가요?",
          "prompt": "첫소리가 다른 낱말은 무엇인가요?",
          "at": 682,
          "options": [
            {
              "label": "재미",
              "correct": false,
              "relation": "oneVowelDiff"
            },
            {
              "label": "재주",
              "correct": false,
              "relation": "oneVowelDiff"
            },
            {
              "label": "자주",
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
          "target": "ㅐ",
          "position": "jung",
          "cols": 4,
          "targetCount": 4,
          "prompt": "애 을 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㅏ",
              "relation": "containment",
              "count": 3
            }
          ],
          "missHint": "이건 애 이 아니에요. 모양을 다시 보세요."
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
          "target": "재",
          "locked": [
            "cho"
          ],
          "at": 526,
          "prompt": "첫 자음은 넣어 두었어요. 나머지를 채워 주세요!",
          "decoys": [
            {
              "jamo": "ㅏ",
              "relation": "containment"
            }
          ]
        },
        {
          "target": "재미",
          "locked": [
            "0:cho",
            "1:cho"
          ],
          "prompt": "'재미' 전체를 만들어 보세요. 첫 자음은 넣어 두었어요.",
          "decoys": [
            {
              "jamo": "ㅏ",
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
          "target": "재미",
          "broken": "자미",
          "prompt": "모음이 반쪽만 남았어요! 애 로 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅏ",
              "relation": "containment"
            },
            {
              "jamo": "ㅣ",
              "relation": "containment"
            }
          ]
        },
        {
          "target": "재미",
          "broken": "자미",
          "prompt": "자? 비슷하지만 다른 글자예요. 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅏ",
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
      "prompt": "애 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "재미",
          "pic": "🎉"
        },
        {
          "word": "개미",
          "pic": "🐜"
        },
        {
          "word": "매미",
          "pic": "🦗"
        },
        {
          "word": "배",
          "pic": "🍐"
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
          "target": "ㅐ",
          "kind": "jamo",
          "position": "jung",
          "prompt": "애 을 따라 써 보세요"
        },
        {
          "target": "재",
          "kind": "syllable",
          "prompt": "'재' 을 따라 써 보세요",
          "note": "아 와 이 가 만나 애 가 돼요."
        },
        {
          "target": "재미",
          "kind": "word",
          "prompt": "'재미' 을 따라 써 보세요",
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
      "at": 156,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 176,
          "caption": "훈민이와 정음이가 재미있는 놀이를 찾고 싶었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 188,
          "caption": "'재미' 를 쓰려는데 어떻게 쓰는지 몰랐어요.",
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
          "at": 296,
          "caption": "종이 에서 지읒 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "종이",
            "emoji": "📄",
            "jamo": "ㅈ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 309,
          "caption": "아 와 이 가 만나 애 가 되었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅐ"
          }
        },
        {
          "order": 6,
          "at": 465,
          "caption": "만화책 에서 미음 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "만화책",
            "emoji": "📚",
            "jamo": "ㅁ",
            "position": "cho"
          }
        },
        {
          "order": 7,
          "at": 526,
          "caption": "자판기에 넣으니 비눗방울 이 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 8,
          "at": 567,
          "caption": "할아버지와 '재미' 을 소리 내어 읽었어요.",
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
