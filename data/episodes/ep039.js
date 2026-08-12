/* 39화 「짜다」 — 쌍자음 ㅉ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep039.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 39,
  "title": "짜다",
  "videoId": "pupMJv5_8do",
  "objective": "쌍자음 'ㅉ'의 소리를 인식한다.",
  "focus": "쌍자음 ㅉ",
  "jamo": {
    "new": [
      "ㅉ"
    ],
    "seen": [
      "ㄷ",
      "ㅈ",
      "ㅏ"
    ]
  },
  "targetWords": [
    "짜다"
  ],
  "rewards": {
    "cards": [
      "ㅉ"
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
          "q": "쌍지읒은 어디에서 찾았나요?",
          "at": 335,
          "options": [
            {
              "label": "짜장면",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "짜장면"
              },
              "correct": true
            },
            {
              "label": "다람쥐",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "다람쥐"
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
          "q": "디귿은 어디에서 찾았나요?",
          "at": 471,
          "options": [
            {
              "label": "다람쥐",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "다람쥐"
              },
              "correct": true
            },
            {
              "label": "짜장면",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "짜장면"
              }
            }
          ]
        },
        {
          "q": "자판기에서 무엇이 나왔나요?",
          "at": 550,
          "options": [
            {
              "label": "밥",
              "pic": "🍚",
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
          "say": "짜",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "첫소리가 들리나요?",
          "options": [
            {
              "label": "짜",
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
              "label": "짜",
              "relation": "noOnset"
            }
          ]
        },
        {
          "say": "짜",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "첫소리가 무엇인지 들어 보세요",
          "options": [
            {
              "label": "짜",
              "correct": true
            },
            {
              "label": "자",
              "relation": "tensePair"
            },
            {
              "label": "차",
              "relation": "strokeAdd"
            }
          ]
        },
        {
          "say": "쌍지읒",
          "prompt": "이 소리는 어떤 글자일까요?",
          "options": [
            {
              "label": "ㅉ",
              "correct": true
            },
            {
              "label": "ㅈ",
              "relation": "tensePair"
            },
            {
              "label": "ㅊ",
              "relation": "strokeAdd"
            }
          ]
        },
        {
          "say": "짜",
          "prompt": "된소리를 잘 듣고 골라요",
          "hint": "목에 힘을 주고 세게 내는 소리예요",
          "options": [
            {
              "label": "짜",
              "correct": true
            },
            {
              "label": "자",
              "relation": "tensePair",
              "why": "이건 약한 소리예요. 더 세게 내는 소리를 찾아요."
            }
          ],
          "after": "쌍지읒은 지읒 보다 세게 내는 소리예요."
        },
        {
          "say": "짜다",
          "prompt": "잘 듣고 같은 낱말을 골라요",
          "hint": "첫소리를 세게 내면 다른 낱말이 돼요",
          "options": [
            {
              "label": "짜다",
              "correct": true
            },
            {
              "label": "자다",
              "relation": "tensePair",
              "why": "약한 소리로 읽으면 다른 낱말이에요."
            }
          ],
          "after": "'자다'와 '짜다'는 첫소리 하나로 뜻이 달라져요."
        },
        {
          "say": "자다, 짜다, 짜증. 첫소리가 다른 낱말은 무엇인가요?",
          "prompt": "첫소리가 다른 낱말은 무엇인가요?",
          "at": 714,
          "options": [
            {
              "label": "자다",
              "correct": true
            },
            {
              "label": "짜다",
              "correct": false,
              "relation": "stopSwap"
            },
            {
              "label": "짜증",
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
          "target": "ㅉ",
          "position": "cho",
          "cols": 4,
          "targetCount": 4,
          "prompt": "쌍지읒을 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㅈ",
              "relation": "tensePair",
              "count": 3
            },
            {
              "jamo": "ㅊ",
              "relation": "strokeAdd",
              "count": 3
            }
          ],
          "missHint": "이건 쌍지읒이 아니에요. 모양을 다시 보세요."
        },
        {
          "cols": 4,
          "showTarget": false,
          "target": "ㅉ",
          "position": "cho",
          "prompt": "쌍지읒으로 시작하는 글자를 모두 찾아 눌러 보세요",
          "cells": [
            {
              "ch": "짜",
              "hit": true
            },
            {
              "ch": "찌",
              "hit": true
            },
            {
              "ch": "짝",
              "hit": true
            },
            {
              "ch": "자",
              "relation": "tensePair"
            },
            {
              "ch": "지",
              "relation": "tensePair"
            },
            {
              "ch": "차",
              "relation": "strokeAdd"
            },
            {
              "ch": "치",
              "relation": "strokeAdd"
            }
          ],
          "missHint": "첫소리가 쌍지읒 인 글자를 찾아요."
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
          "target": "짜",
          "at": 550,
          "prompt": "첫 자음을 찾아 넣어 보세요!",
          "decoys": [
            {
              "jamo": "ㅈ",
              "relation": "tensePair"
            },
            {
              "jamo": "ㅊ",
              "relation": "strokeAdd"
            }
          ]
        },
        {
          "target": "짜다",
          "prompt": "'짜다' 전체를 만들어 보세요.",
          "decoys": [
            {
              "jamo": "ㅈ",
              "relation": "tensePair"
            },
            {
              "jamo": "ㅊ",
              "relation": "strokeAdd"
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
          "target": "짜다",
          "broken": "아다",
          "prompt": "아다? 소리 내어 읽어 보고 첫소리를 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅇ",
              "relation": "noOnset"
            },
            {
              "jamo": "ㅈ",
              "relation": "tensePair"
            },
            {
              "jamo": "ㅊ",
              "relation": "strokeAdd"
            }
          ]
        },
        {
          "target": "짜다",
          "broken": "자다",
          "prompt": "자다? 소리 내어 읽어 보고 첫소리를 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅇ",
              "relation": "noOnset"
            },
            {
              "jamo": "ㅈ",
              "relation": "tensePair"
            },
            {
              "jamo": "ㅊ",
              "relation": "strokeAdd"
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
      "prompt": "쌍지읒 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "짜다",
          "pic": "🧂"
        },
        {
          "word": "짜증",
          "pic": {
            "kind": "text",
            "value": "짜증"
          }
        },
        {
          "word": "찌개",
          "pic": "🍲"
        },
        {
          "word": "짝",
          "pic": "👏"
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
          "target": "ㅉ",
          "kind": "jamo",
          "position": "cho",
          "prompt": "쌍지읒을 따라 써 보세요"
        },
        {
          "target": "짜",
          "kind": "syllable",
          "prompt": "'짜' 을 따라 써 보세요",
          "note": "첫 자음을 먼저 쓰고 모음을 붙여요."
        },
        {
          "target": "짜다",
          "kind": "word",
          "prompt": "'짜다' 을 따라 써 보세요",
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
      "at": 88,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 108,
          "caption": "정음이가 김을 자꾸 먹어서 훈민이가 옆에서 말렸어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 202,
          "caption": "김이 너무 짰어요. '짜다' 를 쓸 줄 몰랐어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 232,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 335,
          "caption": "짜장면 에서 쌍지읒을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "짜장면",
            "jamo": "ㅉ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 379,
          "caption": "아 용사가 아를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅏ"
          }
        },
        {
          "order": 6,
          "at": 471,
          "caption": "다람쥐 에서 디귿을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "다람쥐",
            "jamo": "ㄷ",
            "position": "cho"
          }
        },
        {
          "order": 7,
          "at": 499,
          "caption": "아 용사가 아를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅏ"
          }
        },
        {
          "order": 8,
          "at": 550,
          "caption": "자판기에 넣으니 밥이 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 9,
          "at": 597,
          "caption": "할아버지와 '짜다' 을 소리 내어 읽었어요.",
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
