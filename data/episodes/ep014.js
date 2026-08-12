/* 14화 「소리」 — 자음 ㅅ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep014.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 14,
  "title": "소리",
  "videoId": "zPPAN1bp0DA",
  "objective": "자음 ''ㅅ'' 의 소리를 인식한다.",
  "focus": "자음 ㅅ",
  "jamo": {
    "new": [
      "ㅅ"
    ],
    "seen": [
      "ㄹ",
      "ㅗ",
      "ㅣ"
    ]
  },
  "targetWords": [
    "소리"
  ],
  "rewards": {
    "cards": [
      "ㅅ"
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
          "q": "시옷은 어디에서 찾았나요?",
          "at": 346,
          "options": [
            {
              "label": "상어",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "상어"
              },
              "correct": true
            },
            {
              "label": "리본",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "리본"
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
          "q": "리을은 어디에서 찾았나요?",
          "at": 462,
          "options": [
            {
              "label": "리본",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "리본"
              },
              "correct": true
            },
            {
              "label": "상어",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "상어"
              }
            }
          ]
        },
        {
          "q": "자판기에서 무엇이 나왔나요?",
          "at": 534,
          "options": [
            {
              "label": "과자",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "과자"
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
          "say": "소",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "첫소리가 들리나요?",
          "options": [
            {
              "label": "소",
              "correct": true
            },
            {
              "label": "오",
              "relation": "noOnset",
              "why": "첫소리가 없는 글자예요. 다시 들어볼까?"
            }
          ]
        },
        {
          "say": "오",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "오",
              "correct": true
            },
            {
              "label": "소",
              "relation": "noOnset"
            }
          ]
        },
        {
          "say": "소",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "첫소리가 무엇인지 들어 보세요",
          "options": [
            {
              "label": "소",
              "correct": true
            },
            {
              "label": "조",
              "relation": "strokeAdd"
            },
            {
              "label": "모",
              "relation": "shape"
            }
          ]
        },
        {
          "say": "시옷",
          "prompt": "이 소리는 어떤 글자일까요?",
          "options": [
            {
              "label": "ㅅ",
              "correct": true
            },
            {
              "label": "ㅈ",
              "relation": "strokeAdd"
            },
            {
              "label": "ㅁ",
              "relation": "shape"
            }
          ]
        },
        {
          "say": "조개, 소리, 소금. 첫소리가 다른 낱말은 무엇인가요?",
          "prompt": "첫소리가 다른 낱말은 무엇인가요?",
          "at": 701,
          "options": [
            {
              "label": "조개",
              "correct": true
            },
            {
              "label": "소리",
              "correct": false,
              "relation": "stopSwap"
            },
            {
              "label": "소금",
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
          "target": "ㅅ",
          "position": "cho",
          "cols": 4,
          "targetCount": 4,
          "prompt": "시옷을 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㅈ",
              "relation": "strokeAdd",
              "count": 3
            },
            {
              "jamo": "ㅁ",
              "relation": "shape",
              "count": 3
            }
          ],
          "missHint": "이건 시옷이 아니에요. 모양을 다시 보세요."
        },
        {
          "cols": 4,
          "showTarget": false,
          "target": "ㅅ",
          "position": "cho",
          "prompt": "시옷으로 시작하는 글자를 모두 찾아 눌러 보세요",
          "cells": [
            {
              "ch": "소",
              "hit": true
            },
            {
              "ch": "시",
              "hit": true
            },
            {
              "ch": "수",
              "hit": true
            },
            {
              "ch": "조",
              "relation": "strokeAdd"
            },
            {
              "ch": "지",
              "relation": "strokeAdd"
            },
            {
              "ch": "모",
              "relation": "shape"
            },
            {
              "ch": "미",
              "relation": "shape"
            }
          ],
          "missHint": "첫소리가 시옷 인 글자를 찾아요."
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
          "target": "소",
          "at": 534,
          "prompt": "첫 자음을 찾아 넣어 보세요!",
          "decoys": [
            {
              "jamo": "ㅈ",
              "relation": "strokeAdd"
            },
            {
              "jamo": "ㅁ",
              "relation": "shape"
            }
          ]
        },
        {
          "target": "소리",
          "prompt": "'소리' 전체를 만들어 보세요.",
          "decoys": [
            {
              "jamo": "ㅈ",
              "relation": "strokeAdd"
            },
            {
              "jamo": "ㅁ",
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
          "target": "소리",
          "broken": "오리",
          "prompt": "오리? 소리 내어 읽어 보고 첫소리를 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅇ",
              "relation": "noOnset"
            },
            {
              "jamo": "ㅈ",
              "relation": "strokeAdd"
            },
            {
              "jamo": "ㅁ",
              "relation": "shape"
            }
          ]
        },
        {
          "target": "소리",
          "broken": "조리",
          "prompt": "조리? 소리 내어 읽어 보고 첫소리를 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅇ",
              "relation": "noOnset"
            },
            {
              "jamo": "ㅈ",
              "relation": "strokeAdd"
            },
            {
              "jamo": "ㅁ",
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
      "prompt": "시옷 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "소리",
          "pic": "🔊"
        },
        {
          "word": "소",
          "pic": "🐄"
        },
        {
          "word": "시소",
          "pic": "🛝"
        },
        {
          "word": "수도",
          "pic": "🚰"
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
          "target": "ㅅ",
          "kind": "jamo",
          "position": "cho",
          "prompt": "시옷을 따라 써 보세요"
        },
        {
          "target": "소",
          "kind": "syllable",
          "prompt": "'소' 을 따라 써 보세요",
          "note": "첫 자음을 먼저 쓰고 모음을 붙여요."
        },
        {
          "target": "소리",
          "kind": "word",
          "prompt": "'소리' 을 따라 써 보세요",
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
      "at": 106,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 126,
          "caption": "훈민이와 정음이가 흉내 낸 소리를 듣고 맞히는 놀이를 했어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 267,
          "caption": "부스럭부스럭 소리가 났어요. '소리' 를 쓸 줄 몰랐어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 297,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 346,
          "caption": "상어 에서 시옷을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "상어",
            "jamo": "ㅅ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 390,
          "caption": "오 용사가 오를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅗ"
          }
        },
        {
          "order": 6,
          "at": 462,
          "caption": "리본 에서 리을을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "리본",
            "jamo": "ㄹ",
            "position": "cho"
          }
        },
        {
          "order": 7,
          "at": 494,
          "caption": "이 용사가 이를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅣ"
          }
        },
        {
          "order": 8,
          "at": 534,
          "caption": "자판기에 넣으니 과자가 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 9,
          "at": 560,
          "caption": "할아버지와 '소리' 을 소리 내어 읽었어요.",
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
