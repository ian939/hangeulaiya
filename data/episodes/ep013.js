/* 13화 「버스」 — 자음 ㅂ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep013.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 *
 * 영상으로 확인이 필요한 항목: 퀴즈 세 번째 낱말
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 13,
  "title": "버스",
  "videoId": "7ykvLdRFNWQ",
  "objective": "자음 ''ㅂ'' 의 소리를 인식한다.",
  "focus": "자음 ㅂ",
  "jamo": {
    "new": [
      "ㅂ"
    ],
    "seen": [
      "ㅅ",
      "ㅓ",
      "ㅡ"
    ]
  },
  "targetWords": [
    "버스"
  ],
  "rewards": {
    "cards": [
      "ㅂ"
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
          "q": "비읍은 어디에서 찾았나요?",
          "at": 352,
          "options": [
            {
              "label": "바구니",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "바구니"
              },
              "correct": true
            },
            {
              "label": "수박",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "수박"
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
          "q": "시옷은 어디에서 찾았나요?",
          "at": 443,
          "options": [
            {
              "label": "수박",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "수박"
              },
              "correct": true
            },
            {
              "label": "바구니",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "바구니"
              }
            }
          ]
        },
        {
          "q": "자판기에서 무엇이 나왔나요?",
          "at": 499,
          "options": [
            {
              "label": "버스 이름표",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "버스 이름표"
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
          "say": "버",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "첫소리가 들리나요?",
          "options": [
            {
              "label": "버",
              "correct": true
            },
            {
              "label": "어",
              "relation": "noOnset",
              "why": "첫소리가 없는 글자예요. 다시 들어볼까?"
            }
          ]
        },
        {
          "say": "어",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "어",
              "correct": true
            },
            {
              "label": "버",
              "relation": "noOnset"
            }
          ]
        },
        {
          "say": "버",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "첫소리가 무엇인지 들어 보세요",
          "options": [
            {
              "label": "버",
              "correct": true
            },
            {
              "label": "머",
              "relation": "strokeAdd"
            },
            {
              "label": "어",
              "relation": "shape"
            }
          ]
        },
        {
          "say": "비읍",
          "prompt": "이 소리는 어떤 글자일까요?",
          "options": [
            {
              "label": "ㅂ",
              "correct": true
            },
            {
              "label": "ㅁ",
              "relation": "strokeAdd"
            },
            {
              "label": "ㅇ",
              "relation": "shape"
            }
          ]
        },
        {
          "say": "머리, 버스, 버섯. 첫소리가 다른 낱말은 무엇인가요?",
          "prompt": "첫소리가 다른 낱말은 무엇인가요?",
          "at": 691,
          "options": [
            {
              "label": "머리",
              "correct": true
            },
            {
              "label": "버스",
              "correct": false,
              "relation": "stopSwap"
            },
            {
              "label": "버섯",
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
          "target": "ㅂ",
          "position": "cho",
          "cols": 4,
          "targetCount": 4,
          "prompt": "비읍을 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㅁ",
              "relation": "strokeAdd",
              "count": 3
            },
            {
              "jamo": "ㅇ",
              "relation": "shape",
              "count": 3
            }
          ],
          "missHint": "이건 비읍이 아니에요. 모양을 다시 보세요."
        },
        {
          "cols": 4,
          "showTarget": false,
          "target": "ㅂ",
          "position": "cho",
          "prompt": "비읍으로 시작하는 글자를 모두 찾아 눌러 보세요",
          "cells": [
            {
              "ch": "버",
              "hit": true
            },
            {
              "ch": "바",
              "hit": true
            },
            {
              "ch": "비",
              "hit": true
            },
            {
              "ch": "머",
              "relation": "strokeAdd"
            },
            {
              "ch": "마",
              "relation": "strokeAdd"
            },
            {
              "ch": "어",
              "relation": "shape"
            },
            {
              "ch": "아",
              "relation": "shape"
            }
          ],
          "missHint": "첫소리가 비읍 인 글자를 찾아요."
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
          "target": "버",
          "at": 499,
          "prompt": "첫 자음을 찾아 넣어 보세요!",
          "decoys": [
            {
              "jamo": "ㅁ",
              "relation": "strokeAdd"
            },
            {
              "jamo": "ㅇ",
              "relation": "shape"
            }
          ]
        },
        {
          "target": "버스",
          "prompt": "'버스' 전체를 만들어 보세요.",
          "decoys": [
            {
              "jamo": "ㅁ",
              "relation": "strokeAdd"
            },
            {
              "jamo": "ㅇ",
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
          "target": "버스",
          "broken": "어스",
          "prompt": "어스? 소리 내어 읽어 보고 첫소리를 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅇ",
              "relation": "noOnset"
            },
            {
              "jamo": "ㅁ",
              "relation": "strokeAdd"
            },
            {
              "jamo": "ㅇ",
              "relation": "shape"
            }
          ]
        },
        {
          "target": "버스",
          "broken": "머스",
          "prompt": "머스? 소리 내어 읽어 보고 첫소리를 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅇ",
              "relation": "noOnset"
            },
            {
              "jamo": "ㅁ",
              "relation": "strokeAdd"
            },
            {
              "jamo": "ㅇ",
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
      "prompt": "비읍 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "버스",
          "pic": "🚌"
        },
        {
          "word": "바나나",
          "pic": "🍌"
        },
        {
          "word": "바다",
          "pic": "🌊"
        },
        {
          "word": "비",
          "pic": "🌧️"
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
          "target": "ㅂ",
          "kind": "jamo",
          "position": "cho",
          "prompt": "비읍을 따라 써 보세요"
        },
        {
          "target": "버",
          "kind": "syllable",
          "prompt": "'버' 을 따라 써 보세요",
          "note": "첫 자음을 먼저 쓰고 모음을 붙여요."
        },
        {
          "target": "버스",
          "kind": "word",
          "prompt": "'버스' 을 따라 써 보세요",
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
      "at": 86,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 106,
          "caption": "훈민이와 정음이가 탈 수 있는 버스를 만들어 손님을 태웠어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 246,
          "caption": "버스에 이름표를 달려는데 '버스' 를 쓸 줄 몰랐어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 276,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 352,
          "caption": "바구니 에서 비읍을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "바구니",
            "jamo": "ㅂ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 380,
          "caption": "어 용사가 어를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅓ"
          }
        },
        {
          "order": 6,
          "at": 443,
          "caption": "수박 에서 시옷을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "수박",
            "jamo": "ㅅ",
            "position": "cho"
          }
        },
        {
          "order": 7,
          "at": 462,
          "caption": "으 용사가 으를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅡ"
          }
        },
        {
          "order": 8,
          "at": 499,
          "caption": "자판기에 넣으니 버스 이름표가 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 9,
          "at": 532,
          "caption": "할아버지와 '버스' 을 소리 내어 읽었어요.",
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
