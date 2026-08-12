/* 36화 「딱지」 — 쌍자음 ㄸ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep036.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 36,
  "title": "딱지",
  "videoId": "vdGXvOEjZE0",
  "objective": "쌍자음 'ㄸ'의 소리를 인식한다.",
  "focus": "쌍자음 ㄸ",
  "jamo": {
    "new": [
      "ㄸ"
    ],
    "seen": [
      "ㄷ",
      "ㅈ",
      "ㅏ",
      "ㅣ",
      "받침 ㄱ"
    ]
  },
  "targetWords": [
    "딱지"
  ],
  "rewards": {
    "cards": [
      "ㄸ"
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
          "q": "쌍디귿은 어디에서 찾았나요?",
          "at": 285,
          "options": [
            {
              "label": "떡",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "떡"
              },
              "correct": true
            },
            {
              "label": "바둑",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "바둑"
              }
            },
            {
              "label": "제비",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "제비"
              }
            }
          ]
        },
        {
          "q": "지읒은 어디에서 찾았나요?",
          "at": 483,
          "options": [
            {
              "label": "제비",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "제비"
              },
              "correct": true
            },
            {
              "label": "떡",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "떡"
              }
            },
            {
              "label": "바둑",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "바둑"
              }
            }
          ]
        },
        {
          "q": "자판기에서 무엇이 나왔나요?",
          "at": 585,
          "options": [
            {
              "label": "아이야 딱지",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "아이야 딱지"
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
          "say": "딱",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "첫소리가 들리나요?",
          "options": [
            {
              "label": "딱",
              "correct": true
            },
            {
              "label": "악",
              "relation": "noOnset",
              "why": "첫소리가 없는 글자예요. 다시 들어볼까?"
            }
          ]
        },
        {
          "say": "악",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "악",
              "correct": true
            },
            {
              "label": "딱",
              "relation": "noOnset"
            }
          ]
        },
        {
          "say": "딱",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "첫소리가 무엇인지 들어 보세요",
          "options": [
            {
              "label": "딱",
              "correct": true
            },
            {
              "label": "닥",
              "relation": "tensePair"
            },
            {
              "label": "탁",
              "relation": "strokeAdd"
            }
          ]
        },
        {
          "say": "쌍디귿",
          "prompt": "이 소리는 어떤 글자일까요?",
          "options": [
            {
              "label": "ㄸ",
              "correct": true
            },
            {
              "label": "ㄷ",
              "relation": "tensePair"
            },
            {
              "label": "ㅌ",
              "relation": "strokeAdd"
            }
          ]
        },
        {
          "say": "딱",
          "prompt": "된소리를 잘 듣고 골라요",
          "hint": "목에 힘을 주고 세게 내는 소리예요",
          "options": [
            {
              "label": "딱",
              "correct": true
            },
            {
              "label": "닥",
              "relation": "tensePair",
              "why": "이건 약한 소리예요. 더 세게 내는 소리를 찾아요."
            }
          ],
          "after": "쌍디귿은 디귿 보다 세게 내는 소리예요."
        },
        {
          "say": "꿀떡, 팥떡, 더덕. 끝소리가 다른 낱말은 무엇인가요?",
          "prompt": "끝소리가 다른 낱말은 무엇인가요?",
          "at": 703,
          "options": [
            {
              "label": "꿀떡",
              "correct": false,
              "relation": "stopSwap"
            },
            {
              "label": "팥떡",
              "correct": false,
              "relation": "stopSwap"
            },
            {
              "label": "더덕",
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
          "target": "ㄸ",
          "position": "cho",
          "cols": 4,
          "targetCount": 4,
          "prompt": "쌍디귿을 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㄷ",
              "relation": "tensePair",
              "count": 3
            },
            {
              "jamo": "ㅌ",
              "relation": "strokeAdd",
              "count": 3
            }
          ],
          "missHint": "이건 쌍디귿이 아니에요. 모양을 다시 보세요."
        },
        {
          "cols": 4,
          "showTarget": false,
          "target": "ㄸ",
          "position": "cho",
          "prompt": "쌍디귿으로 시작하는 글자를 모두 찾아 눌러 보세요",
          "cells": [
            {
              "ch": "딱",
              "hit": true
            },
            {
              "ch": "땅",
              "hit": true
            },
            {
              "ch": "땀",
              "hit": true
            },
            {
              "ch": "딸",
              "hit": true
            },
            {
              "ch": "닥",
              "relation": "tensePair"
            },
            {
              "ch": "당",
              "relation": "tensePair"
            },
            {
              "ch": "탁",
              "relation": "strokeAdd"
            },
            {
              "ch": "탕",
              "relation": "strokeAdd"
            }
          ],
          "missHint": "첫소리가 쌍디귿 인 글자를 찾아요."
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
          "target": "딱",
          "at": 585,
          "prompt": "첫 자음을 찾아 넣어 보세요!",
          "decoys": [
            {
              "jamo": "ㄷ",
              "relation": "tensePair"
            },
            {
              "jamo": "ㅌ",
              "relation": "strokeAdd"
            }
          ]
        },
        {
          "target": "딱지",
          "prompt": "'딱지' 전체를 만들어 보세요.",
          "decoys": [
            {
              "jamo": "ㄷ",
              "relation": "tensePair"
            },
            {
              "jamo": "ㅌ",
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
          "target": "딱지",
          "broken": "악지",
          "prompt": "악지? 소리 내어 읽어 보고 첫소리를 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅇ",
              "relation": "noOnset"
            },
            {
              "jamo": "ㄷ",
              "relation": "tensePair"
            },
            {
              "jamo": "ㅌ",
              "relation": "strokeAdd"
            }
          ]
        },
        {
          "target": "딱지",
          "broken": "닥지",
          "prompt": "닥지? 소리 내어 읽어 보고 첫소리를 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅇ",
              "relation": "noOnset"
            },
            {
              "jamo": "ㄷ",
              "relation": "tensePair"
            },
            {
              "jamo": "ㅌ",
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
      "prompt": "쌍디귿 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "딱지",
          "pic": "🎫"
        },
        {
          "word": "땅",
          "pic": "🟫"
        },
        {
          "word": "땀",
          "pic": {
            "kind": "text",
            "value": "땀"
          }
        },
        {
          "word": "딱",
          "pic": {
            "kind": "text",
            "value": "딱"
          }
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
          "target": "ㄸ",
          "kind": "jamo",
          "position": "cho",
          "prompt": "쌍디귿을 따라 써 보세요"
        },
        {
          "target": "딱",
          "kind": "syllable",
          "prompt": "'딱' 을 따라 써 보세요",
          "note": "첫 자음을 먼저 쓰고 모음을 붙여요."
        },
        {
          "target": "딱지",
          "kind": "word",
          "prompt": "'딱지' 을 따라 써 보세요",
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
      "at": 84,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 104,
          "caption": "훈민이와 정음이가 직접 접은 딱지로 딱지치기를 했어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 193,
          "caption": "할아버지를 이길 딱지가 필요한데 '딱지' 를 쓸 줄 몰랐어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 223,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 285,
          "caption": "떡 에서 쌍디귿을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "떡",
            "jamo": "ㄸ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 315,
          "caption": "아 용사가 아를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅏ"
          }
        },
        {
          "order": 6,
          "at": 407,
          "caption": "바둑 에서 받침 기역을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "바둑",
            "jamo": "ㄱ",
            "position": "jong"
          }
        },
        {
          "order": 7,
          "at": 483,
          "caption": "제비 에서 지읒을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "제비",
            "jamo": "ㅈ",
            "position": "cho"
          }
        },
        {
          "order": 8,
          "at": 494,
          "caption": "이 용사가 이를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅣ"
          }
        },
        {
          "order": 9,
          "at": 585,
          "caption": "자판기에 넣으니 아이야 딱지가 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 10,
          "at": 598,
          "caption": "할아버지와 '딱지' 을 소리 내어 읽었어요.",
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
