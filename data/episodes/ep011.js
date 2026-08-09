/* 11화 「라디오」 — 자음 ㄹ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep011.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 *
 * 영상으로 확인이 필요한 항목: ㅇ 을 찾은 장소
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 11,
  "title": "라디오",
  "videoId": "5XpgVOqSRFA",
  "objective": "자음 ''ㄹ'' 의 소리를 인식한다.",
  "focus": "자음 ㄹ",
  "jamo": {
    "new": [
      "ㄹ"
    ],
    "seen": [
      "ㄷ",
      "ㅇ",
      "ㅏ",
      "ㅗ",
      "ㅣ"
    ]
  },
  "targetWords": [
    "라디오"
  ],
  "rewards": {
    "cards": [
      "ㄹ"
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
          "q": "리을 은 어디에서 찾았나요?",
          "at": 294,
          "options": [
            {
              "label": "라면",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "라면"
              },
              "correct": true
            },
            {
              "label": "다리미",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "다리미"
              }
            },
            {
              "label": "아침 해",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "아침 해"
              }
            }
          ]
        },
        {
          "q": "이응 은 어디에서 찾았나요?",
          "at": 457,
          "options": [
            {
              "label": "아침 해",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "아침 해"
              },
              "correct": true
            },
            {
              "label": "라면",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "라면"
              }
            },
            {
              "label": "다리미",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "다리미"
              }
            }
          ]
        },
        {
          "q": "자판기에서 무엇이 나왔나요?",
          "at": 508,
          "options": [
            {
              "label": "라디오",
              "pic": "📻",
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
          "say": "라",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "첫소리가 들리나요?",
          "options": [
            {
              "label": "라",
              "correct": true
            },
            {
              "label": "아",
              "relation": "noOnset",
              "why": "첫소리가 없는 글자예요. 다시 들어볼까?"
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
              "label": "라",
              "relation": "noOnset"
            }
          ]
        },
        {
          "say": "라",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "첫소리가 무엇인지 들어 보세요",
          "options": [
            {
              "label": "라",
              "correct": true
            },
            {
              "label": "다",
              "relation": "shape"
            },
            {
              "label": "나",
              "relation": "shape"
            }
          ]
        },
        {
          "say": "리을",
          "prompt": "이 소리는 어떤 글자일까요?",
          "options": [
            {
              "label": "ㄹ",
              "correct": true
            },
            {
              "label": "ㄷ",
              "relation": "shape"
            },
            {
              "label": "ㄴ",
              "relation": "shape"
            }
          ]
        },
        {
          "say": "라디오, 마스크, 라일락. 첫소리가 다른 낱말은 무엇인가요?",
          "prompt": "첫소리가 다른 낱말은 무엇인가요?",
          "at": 709,
          "options": [
            {
              "label": "라디오",
              "correct": false,
              "relation": "stopSwap"
            },
            {
              "label": "마스크",
              "correct": true
            },
            {
              "label": "라일락",
              "correct": false,
              "relation": "stopSwap"
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
          "target": "ㄹ",
          "position": "cho",
          "cols": 4,
          "targetCount": 4,
          "prompt": "리을 을 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㄷ",
              "relation": "shape",
              "count": 3
            },
            {
              "jamo": "ㄴ",
              "relation": "shape",
              "count": 3
            }
          ],
          "missHint": "이건 리을 이 아니에요. 모양을 다시 보세요."
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
          "target": "라",
          "at": 508,
          "prompt": "첫 자음을 찾아 넣어 보세요!",
          "decoys": [
            {
              "jamo": "ㄴ",
              "relation": "shape"
            }
          ]
        },
        {
          "target": "라디오",
          "prompt": "'라디오' 전체를 만들어 보세요.",
          "decoys": [
            {
              "jamo": "ㄴ",
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
          "target": "라디오",
          "broken": "아디오",
          "prompt": "아디오? 소리 내어 읽어 보고 첫소리를 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅇ",
              "relation": "noOnset"
            },
            {
              "jamo": "ㄷ",
              "relation": "shape"
            },
            {
              "jamo": "ㄴ",
              "relation": "shape"
            }
          ]
        },
        {
          "target": "라디오",
          "broken": "다디오",
          "prompt": "다디오? 소리 내어 읽어 보고 첫소리를 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅇ",
              "relation": "noOnset"
            },
            {
              "jamo": "ㄷ",
              "relation": "shape"
            },
            {
              "jamo": "ㄴ",
              "relation": "shape"
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
      "prompt": "리을 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "라디오",
          "pic": "📻"
        },
        {
          "word": "배",
          "pic": "🍐"
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
          "target": "ㄹ",
          "kind": "jamo",
          "position": "cho",
          "prompt": "리을 을 따라 써 보세요"
        },
        {
          "target": "라",
          "kind": "syllable",
          "prompt": "'라' 을 따라 써 보세요",
          "note": "첫 자음을 먼저 쓰고 모음을 붙여요."
        },
        {
          "target": "라디오",
          "kind": "word",
          "prompt": "'라디오' 을 따라 써 보세요",
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
      "at": 90,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 110,
          "caption": "훈민이와 정음이가 할아버지 라디오를 돌려 보고 자기들도 갖고 싶었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 196,
          "caption": "라디오는 할아버지 물건이라 돌려놓아야 했어요. '라디오' 를 쓸 줄 몰랐어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 226,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 294,
          "caption": "라면 에서 리을 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "라면",
            "jamo": "ㄹ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 318,
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
          "caption": "다리미 에서 디귿 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "다리미",
            "jamo": "ㄷ",
            "position": "cho"
          }
        },
        {
          "order": 7,
          "at": 402,
          "caption": "이 용사가 이 를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅣ"
          }
        },
        {
          "order": 8,
          "at": 457,
          "caption": "아침 해 에서 이응 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "아침 해",
            "jamo": "ㅇ",
            "position": "cho"
          }
        },
        {
          "order": 9,
          "at": 474,
          "caption": "오 용사가 오 를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅗ"
          }
        },
        {
          "order": 10,
          "at": 508,
          "caption": "자판기에 넣으니 라디오 이 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 11,
          "at": 536,
          "caption": "할아버지와 '라디오' 을 소리 내어 읽었어요.",
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
