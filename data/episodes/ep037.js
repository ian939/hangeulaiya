/* 37화 「뿡」 — 쌍자음 ㅃ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep037.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 37,
  "title": "뿡",
  "videoId": "L4pntDdQUmA",
  "objective": "쌍자음 'ㅃ'의 소리를 인식한다.",
  "focus": "쌍자음 ㅃ",
  "jamo": {
    "new": [
      "ㅃ"
    ],
    "seen": [
      "ㅂ",
      "ㅜ",
      "받침 ㅇ"
    ]
  },
  "targetWords": [
    "뿡"
  ],
  "rewards": {
    "cards": [
      "ㅃ"
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
          "q": "쌍비읍은 어디에서 찾았나요?",
          "at": 268,
          "options": [
            {
              "label": "빨래",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "빨래"
              },
              "correct": true
            },
            {
              "label": "사탕",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "사탕"
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
          "q": "받침 이응은 어디에서 찾았나요?",
          "at": 430,
          "options": [
            {
              "label": "사탕",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "사탕"
              },
              "correct": true
            },
            {
              "label": "빨래",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "빨래"
              }
            }
          ]
        },
        {
          "q": "자판기에서 무엇이 나왔나요?",
          "at": 493,
          "options": [
            {
              "label": "뿡뿡이",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "뿡뿡이"
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
          "say": "뿡",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "첫소리가 들리나요?",
          "options": [
            {
              "label": "뿡",
              "correct": true
            },
            {
              "label": "웅",
              "relation": "noOnset",
              "why": "첫소리가 없는 글자예요. 다시 들어볼까?"
            }
          ]
        },
        {
          "say": "웅",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "웅",
              "correct": true
            },
            {
              "label": "뿡",
              "relation": "noOnset"
            }
          ]
        },
        {
          "say": "뿡",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "첫소리가 무엇인지 들어 보세요",
          "options": [
            {
              "label": "뿡",
              "correct": true
            },
            {
              "label": "붕",
              "relation": "tensePair"
            },
            {
              "label": "풍",
              "relation": "rotation"
            }
          ]
        },
        {
          "say": "쌍비읍",
          "prompt": "이 소리는 어떤 글자일까요?",
          "options": [
            {
              "label": "ㅃ",
              "correct": true
            },
            {
              "label": "ㅂ",
              "relation": "tensePair"
            },
            {
              "label": "ㅍ",
              "relation": "rotation"
            }
          ]
        },
        {
          "say": "뿡",
          "prompt": "된소리를 잘 듣고 골라요",
          "hint": "목에 힘을 주고 세게 내는 소리예요",
          "options": [
            {
              "label": "뿡",
              "correct": true
            },
            {
              "label": "붕",
              "relation": "tensePair",
              "why": "이건 약한 소리예요. 더 세게 내는 소리를 찾아요."
            }
          ],
          "after": "쌍비읍은 비읍 보다 세게 내는 소리예요."
        },
        {
          "say": "뿡뿡이, 붕어빵, 뿡순이. 첫소리가 다른 낱말은 무엇인가요?",
          "prompt": "첫소리가 다른 낱말은 무엇인가요?",
          "at": 675,
          "options": [
            {
              "label": "뿡뿡이",
              "correct": false,
              "relation": "stopSwap"
            },
            {
              "label": "붕어빵",
              "correct": true
            },
            {
              "label": "뿡순이",
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
          "target": "ㅃ",
          "position": "cho",
          "cols": 4,
          "targetCount": 4,
          "prompt": "쌍비읍을 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㅂ",
              "relation": "tensePair",
              "count": 3
            },
            {
              "jamo": "ㅍ",
              "relation": "rotation",
              "count": 3
            }
          ],
          "missHint": "이건 쌍비읍이 아니에요. 모양을 다시 보세요."
        },
        {
          "cols": 4,
          "showTarget": false,
          "target": "ㅃ",
          "position": "cho",
          "prompt": "쌍비읍으로 시작하는 글자를 모두 찾아 눌러 보세요",
          "cells": [
            {
              "ch": "뿡",
              "hit": true
            },
            {
              "ch": "뿔",
              "hit": true
            },
            {
              "ch": "뿐",
              "hit": true
            },
            {
              "ch": "뽕",
              "hit": true
            },
            {
              "ch": "붕",
              "relation": "tensePair"
            },
            {
              "ch": "불",
              "relation": "tensePair"
            },
            {
              "ch": "풍",
              "relation": "rotation"
            },
            {
              "ch": "풀",
              "relation": "rotation"
            }
          ],
          "missHint": "첫소리가 쌍비읍 인 글자를 찾아요."
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
          "target": "뿡",
          "at": 493,
          "prompt": "첫 자음을 찾아 넣어 보세요!",
          "decoys": [
            {
              "jamo": "ㅂ",
              "relation": "tensePair"
            },
            {
              "jamo": "ㅍ",
              "relation": "rotation"
            }
          ]
        },
        {
          "target": "뿡",
          "prompt": "'뿡' 을 처음부터 만들어 보세요.",
          "decoys": [
            {
              "jamo": "ㅂ",
              "relation": "tensePair"
            },
            {
              "jamo": "ㅍ",
              "relation": "rotation"
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
          "target": "뿡",
          "broken": "웅",
          "prompt": "웅? 소리 내어 읽어 보고 첫소리를 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅇ",
              "relation": "noOnset"
            },
            {
              "jamo": "ㅂ",
              "relation": "tensePair"
            },
            {
              "jamo": "ㅍ",
              "relation": "rotation"
            }
          ]
        },
        {
          "target": "뿡",
          "broken": "붕",
          "prompt": "붕? 소리 내어 읽어 보고 첫소리를 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅇ",
              "relation": "noOnset"
            },
            {
              "jamo": "ㅂ",
              "relation": "tensePair"
            },
            {
              "jamo": "ㅍ",
              "relation": "rotation"
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
      "prompt": "쌍비읍 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "뿡",
          "pic": "💨"
        },
        {
          "word": "뿔",
          "pic": {
            "kind": "text",
            "value": "뿔"
          }
        },
        {
          "word": "뿐",
          "pic": {
            "kind": "text",
            "value": "뿐"
          }
        },
        {
          "word": "뽕",
          "pic": {
            "kind": "text",
            "value": "뽕"
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
          "target": "ㅃ",
          "kind": "jamo",
          "position": "cho",
          "prompt": "쌍비읍을 따라 써 보세요"
        },
        {
          "target": "뿡",
          "kind": "syllable",
          "prompt": "'뿡' 을 따라 써 보세요",
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
      "at": 94,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 114,
          "caption": "훈민이와 정음이가 방귀 소리를 듣고 서로 상대가 뀌었다고 다퉜어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 163,
          "caption": "소리의 주인을 찾으려는데 '뿡' 은 너무 어려운 글자였어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 193,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 268,
          "caption": "빨래 에서 쌍비읍을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "빨래",
            "jamo": "ㅃ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 310,
          "caption": "우 용사가 우를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅜ"
          }
        },
        {
          "order": 6,
          "at": 430,
          "caption": "사탕 에서 받침 이응을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "사탕",
            "jamo": "ㅇ",
            "position": "jong"
          }
        },
        {
          "order": 7,
          "at": 493,
          "caption": "자판기에 넣으니 뿡뿡이가 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 8,
          "at": 567,
          "caption": "할아버지와 '뿡' 을 소리 내어 읽었어요.",
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
