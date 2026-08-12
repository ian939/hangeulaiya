/* 35화 「꿈」 — 쌍자음 ㄲ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep035.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 *
 * 영상으로 확인이 필요한 항목: 쌍기역을 찾은 장소
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 35,
  "title": "꿈",
  "videoId": "WwoRvv2MYWE",
  "objective": "쌍자음 'ㄲ'의 소리를 인식한다.",
  "focus": "쌍자음 ㄲ",
  "jamo": {
    "new": [
      "ㄲ"
    ],
    "seen": [
      "ㄱ",
      "ㅜ",
      "받침 ㅁ"
    ]
  },
  "targetWords": [
    "꿈"
  ],
  "rewards": {
    "cards": [
      "ㄲ"
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
          "q": "쌍기역은 어디에서 찾았나요?",
          "at": 281,
          "options": [
            {
              "label": "신발끈",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "신발끈"
              },
              "correct": true
            },
            {
              "label": "구름",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "구름"
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
          "q": "받침 미음은 어디에서 찾았나요?",
          "at": 439,
          "options": [
            {
              "label": "구름",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "구름"
              },
              "correct": true
            },
            {
              "label": "신발끈",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "신발끈"
              }
            }
          ]
        },
        {
          "q": "자판기에서 무엇이 나왔나요?",
          "at": 491,
          "options": [
            {
              "label": "꿈",
              "pic": "💭",
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
          "say": "꿈",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "첫소리가 들리나요?",
          "options": [
            {
              "label": "꿈",
              "correct": true
            },
            {
              "label": "움",
              "relation": "noOnset",
              "why": "첫소리가 없는 글자예요. 다시 들어볼까?"
            }
          ]
        },
        {
          "say": "움",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "움",
              "correct": true
            },
            {
              "label": "꿈",
              "relation": "noOnset"
            }
          ]
        },
        {
          "say": "꿈",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "첫소리가 무엇인지 들어 보세요",
          "options": [
            {
              "label": "꿈",
              "correct": true
            },
            {
              "label": "굼",
              "relation": "tensePair"
            },
            {
              "label": "쿰",
              "relation": "strokeAdd"
            }
          ]
        },
        {
          "say": "쌍기역",
          "prompt": "이 소리는 어떤 글자일까요?",
          "options": [
            {
              "label": "ㄲ",
              "correct": true
            },
            {
              "label": "ㄱ",
              "relation": "tensePair"
            },
            {
              "label": "ㅋ",
              "relation": "strokeAdd"
            }
          ]
        },
        {
          "say": "꿈",
          "prompt": "된소리를 잘 듣고 골라요",
          "hint": "목에 힘을 주고 세게 내는 소리예요",
          "options": [
            {
              "label": "꿈",
              "correct": true
            },
            {
              "label": "굼",
              "relation": "tensePair",
              "why": "이건 약한 소리예요. 더 세게 내는 소리를 찾아요."
            }
          ],
          "after": "쌍기역은 기역 보다 세게 내는 소리예요."
        },
        {
          "say": "꿈나라, 굼벵이, 꿈동산. 첫소리가 다른 낱말은 무엇인가요?",
          "prompt": "첫소리가 다른 낱말은 무엇인가요?",
          "at": 666,
          "options": [
            {
              "label": "꿈나라",
              "correct": false,
              "relation": "stopSwap"
            },
            {
              "label": "굼벵이",
              "correct": true
            },
            {
              "label": "꿈동산",
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
          "target": "ㄲ",
          "position": "cho",
          "cols": 4,
          "targetCount": 4,
          "prompt": "쌍기역을 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㄱ",
              "relation": "tensePair",
              "count": 3
            },
            {
              "jamo": "ㅋ",
              "relation": "strokeAdd",
              "count": 3
            }
          ],
          "missHint": "이건 쌍기역이 아니에요. 모양을 다시 보세요."
        },
        {
          "cols": 4,
          "showTarget": false,
          "target": "ㄲ",
          "position": "cho",
          "prompt": "쌍기역으로 시작하는 글자를 모두 찾아 눌러 보세요",
          "cells": [
            {
              "ch": "꿈",
              "hit": true
            },
            {
              "ch": "꿀",
              "hit": true
            },
            {
              "ch": "꿍",
              "hit": true
            },
            {
              "ch": "꾹",
              "hit": true
            },
            {
              "ch": "굼",
              "relation": "tensePair"
            },
            {
              "ch": "굴",
              "relation": "tensePair"
            },
            {
              "ch": "쿰",
              "relation": "strokeAdd"
            },
            {
              "ch": "쿨",
              "relation": "strokeAdd"
            }
          ],
          "missHint": "첫소리가 쌍기역 인 글자를 찾아요."
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
          "target": "꿈",
          "at": 491,
          "prompt": "첫 자음을 찾아 넣어 보세요!",
          "decoys": [
            {
              "jamo": "ㄱ",
              "relation": "tensePair"
            },
            {
              "jamo": "ㅋ",
              "relation": "strokeAdd"
            }
          ]
        },
        {
          "target": "꿈",
          "prompt": "'꿈' 을 처음부터 만들어 보세요.",
          "decoys": [
            {
              "jamo": "ㄱ",
              "relation": "tensePair"
            },
            {
              "jamo": "ㅋ",
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
          "target": "꿈",
          "broken": "움",
          "prompt": "움? 소리 내어 읽어 보고 첫소리를 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅇ",
              "relation": "noOnset"
            },
            {
              "jamo": "ㄱ",
              "relation": "tensePair"
            },
            {
              "jamo": "ㅋ",
              "relation": "strokeAdd"
            }
          ]
        },
        {
          "target": "꿈",
          "broken": "굼",
          "prompt": "굼? 소리 내어 읽어 보고 첫소리를 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅇ",
              "relation": "noOnset"
            },
            {
              "jamo": "ㄱ",
              "relation": "tensePair"
            },
            {
              "jamo": "ㅋ",
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
      "prompt": "쌍기역 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "꿈",
          "pic": "💭"
        },
        {
          "word": "꿀",
          "pic": {
            "kind": "text",
            "value": "꿀"
          }
        },
        {
          "word": "꿍",
          "pic": {
            "kind": "text",
            "value": "꿍"
          }
        },
        {
          "word": "꾹",
          "pic": {
            "kind": "text",
            "value": "꾹"
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
          "target": "ㄲ",
          "kind": "jamo",
          "position": "cho",
          "prompt": "쌍기역을 따라 써 보세요"
        },
        {
          "target": "꿈",
          "kind": "syllable",
          "prompt": "'꿈' 을 따라 써 보세요",
          "note": "첫 자음을 먼저 쓰고 모음을 붙여요."
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
      "at": 92,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 112,
          "caption": "정음이가 낮잠을 자다 달콤한 꿈을 꾸었어요. 훈민이도 그런 꿈을 꾸고 싶었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 189,
          "caption": "다시 꿈을 꾸려면 '꿈' 을 써야 하는데 쓸 줄 몰랐어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 219,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 281,
          "caption": "신발끈 에서 쌍기역을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "신발끈",
            "jamo": "ㄲ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 323,
          "caption": "우 용사가 우를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅜ"
          }
        },
        {
          "order": 6,
          "at": 439,
          "caption": "구름 에서 받침 미음을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "구름",
            "jamo": "ㅁ",
            "position": "jong"
          }
        },
        {
          "order": 7,
          "at": 491,
          "caption": "자판기에 넣으니 꿈이 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 8,
          "at": 565,
          "caption": "할아버지와 '꿈' 을 소리 내어 읽었어요.",
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
