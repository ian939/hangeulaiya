/* 30화 「빛」 — 받침 ㅊ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep030.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 30,
  "title": "빛",
  "videoId": "ASHYS4nW_yA",
  "objective": "받침 'ㅊ'을 인식한다.",
  "focus": "받침 ㅊ",
  "jamo": {
    "new": [
      "받침 ㅊ"
    ],
    "seen": [
      "ㅂ",
      "ㅣ"
    ]
  },
  "targetWords": [
    "빛"
  ],
  "rewards": {
    "cards": [
      "받침 ㅊ"
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
          "q": "비읍 은 어디에서 찾았나요?",
          "at": 340,
          "options": [
            {
              "label": "빗",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "빗",
                "emoji": "🪮"
              },
              "correct": true
            },
            {
              "label": "윷",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "윷",
                "emoji": "🎲"
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
          "q": "받침 치읓 은 어디에서 찾았나요?",
          "at": 482,
          "options": [
            {
              "label": "윷",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "윷",
                "emoji": "🎲"
              },
              "correct": true
            },
            {
              "label": "빗",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "빗",
                "emoji": "🪮"
              }
            }
          ]
        },
        {
          "q": "자판기에서 무엇이 나왔나요?",
          "at": 543,
          "options": [
            {
              "label": "손전등",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "손전등"
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
          "say": "빛",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "끝에서 입이 닫히는 소리가 있나요?",
          "options": [
            {
              "label": "빛",
              "correct": true
            },
            {
              "label": "비",
              "relation": "noBatchim",
              "why": "받침이 없는 소리예요. 다시 들어볼까?"
            }
          ]
        },
        {
          "say": "비",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "비",
              "correct": true
            },
            {
              "label": "빛",
              "relation": "noBatchim"
            }
          ]
        },
        {
          "say": "빛",
          "prompt": "받침 소리를 잘 듣고 골라요",
          "hint": "받침마다 입과 혀가 다른 자리에서 막혀요",
          "options": [
            {
              "label": "빛",
              "correct": true
            },
            {
              "label": "빚",
              "relation": "soundSpellMismatch"
            },
            {
              "label": "빗",
              "relation": "soundSpellMismatch"
            }
          ]
        },
        {
          "say": "빛",
          "prompt": "소리가 같아요. 어떤 글자일까요?",
          "hint": "받침 ㄷ ㅅ ㅈ 은 소리가 똑같아요. 낱말을 떠올려 보세요!",
          "options": [
            {
              "label": "빛",
              "correct": true
            },
            {
              "label": "빋",
              "relation": "soundSpellMismatch"
            },
            {
              "label": "빗",
              "relation": "soundSpellMismatch"
            }
          ],
          "after": "소리가 같아도 낱말마다 쓰는 글자가 달라요."
        },
        {
          "say": "빛깔, 빈틈, 빈손. 첫소리가 다른 낱말은 무엇인가요?",
          "prompt": "첫소리가 다른 낱말은 무엇인가요?",
          "at": 681,
          "options": [
            {
              "label": "빛깔",
              "correct": true
            },
            {
              "label": "빈틈",
              "correct": false,
              "relation": "stopSwap"
            },
            {
              "label": "빈손",
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
          "target": "ㅊ",
          "position": "jong",
          "cols": 4,
          "targetCount": 4,
          "prompt": "받침 치읓 을 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㅈ",
              "relation": "strokeAdd",
              "count": 3
            },
            {
              "jamo": "ㅅ",
              "relation": "strokeAdd",
              "count": 3
            },
            {
              "jamo": "ㅋ",
              "relation": "shape",
              "count": 3
            }
          ],
          "missHint": "이건 치읓 이 아니에요. 모양을 다시 보세요."
        },
        {
          "cols": 4,
          "showTarget": false,
          "target": "ㅊ",
          "position": "jong",
          "prompt": "받침 치읓 이 있는 글자를 모두 찾아 눌러 보세요",
          "cells": [
            {
              "ch": "빛",
              "hit": true
            },
            {
              "ch": "꽃",
              "hit": true
            },
            {
              "ch": "비",
              "relation": "noBatchim"
            },
            {
              "ch": "빚",
              "relation": "soundSpellMismatch"
            },
            {
              "ch": "빗",
              "relation": "soundSpellMismatch"
            },
            {
              "ch": "빋",
              "relation": "soundSpellMismatch"
            },
            {
              "ch": "꼬",
              "relation": "noBatchim"
            }
          ],
          "missHint": "받침이 치읓 인 글자를 찾아요."
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
          "target": "빛",
          "locked": [
            "cho"
          ],
          "at": 543,
          "prompt": "첫 자음은 넣어 두었어요. 나머지를 채워 주세요!",
          "decoys": [
            {
              "jamo": "ㅈ",
              "relation": "strokeAdd"
            },
            {
              "jamo": "ㅅ",
              "relation": "strokeAdd"
            },
            {
              "jamo": "ㅋ",
              "relation": "shape"
            }
          ]
        },
        {
          "target": "빛",
          "prompt": "'빛' 을 처음부터 만들어 보세요.",
          "decoys": [
            {
              "jamo": "ㅈ",
              "relation": "strokeAdd"
            },
            {
              "jamo": "ㅅ",
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
          "target": "빛",
          "broken": "비",
          "prompt": "받침이 사라졌어요! 소리 내어 읽어 보고 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅈ",
              "relation": "soundSpellMismatch"
            },
            {
              "jamo": "ㅅ",
              "relation": "soundSpellMismatch"
            },
            {
              "jamo": "ㄷ",
              "relation": "soundSpellMismatch"
            }
          ]
        },
        {
          "target": "빛",
          "broken": "빚",
          "prompt": "빚? 소리가 이상해요! 어디가 잘못됐을까요?",
          "tray": [
            {
              "jamo": "ㅈ",
              "relation": "soundSpellMismatch"
            },
            {
              "jamo": "ㅅ",
              "relation": "soundSpellMismatch"
            },
            {
              "jamo": "ㄷ",
              "relation": "soundSpellMismatch"
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
      "prompt": "받침 치읓 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "빛",
          "pic": "💡"
        },
        {
          "word": "꽃",
          "pic": "🌸"
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
      "toleranceEm": 0.17,
      "passScore": 0.57,
      "items": [
        {
          "target": "ㅊ",
          "kind": "jamo",
          "position": "jong",
          "prompt": "받침 치읓 을 따라 써 보세요"
        },
        {
          "target": "비",
          "kind": "syllable",
          "prompt": "먼저 '비' 를 따라 써 보세요",
          "note": "받침이 없는 글자예요."
        },
        {
          "target": "빛",
          "kind": "syllable",
          "prompt": "이제 '빛' 을 따라 써 보세요",
          "note": "받침이 들어가면서 위의 글자가 조금 눌려요. 방금 쓴 것과 비교해 보세요!"
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
      "at": 91,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 111,
          "caption": "훈민이와 정음이가 손전등 빛으로 그림자 놀이를 했어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 217,
          "caption": "손전등이 고장 나서 빛이 사라졌어요. '빛' 은 너무 어려운 글자였어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 247,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 340,
          "caption": "빗 에서 비읍 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "빗",
            "emoji": "🪮",
            "jamo": "ㅂ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 482,
          "caption": "윷 에서 받침 치읓 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "윷",
            "emoji": "🎲",
            "jamo": "ㅊ",
            "position": "jong"
          }
        },
        {
          "order": 6,
          "at": 543,
          "caption": "자판기에 넣으니 손전등 이 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 7,
          "at": 557,
          "caption": "할아버지와 '빛' 을 소리 내어 읽었어요.",
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
