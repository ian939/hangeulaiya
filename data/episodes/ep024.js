/* 24화 「탈」 — 받침 ㄹ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep024.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 24,
  "title": "탈",
  "videoId": "D_IxtYfzKCo",
  "objective": "받침 'ㄹ'을 인식한다.",
  "focus": "받침 ㄹ",
  "jamo": {
    "new": [
      "받침 ㄹ"
    ]
  },
  "targetWords": [
    "탈"
  ],
  "rewards": {
    "cards": [
      "받침 ㄹ"
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
          "q": "티읕 은 어디에서 찾았나요?",
          "at": 347,
          "options": [
            {
              "label": "타조",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "타조",
                "emoji": "🦩"
              },
              "correct": true
            },
            {
              "label": "길",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "길",
                "emoji": "🛣️"
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
          "q": "받침 리을 은 어디에서 찾았나요?",
          "at": 472,
          "options": [
            {
              "label": "길",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "길",
                "emoji": "🛣️"
              },
              "correct": true
            },
            {
              "label": "타조",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "타조",
                "emoji": "🦩"
              }
            }
          ]
        },
        {
          "q": "자판기에서 무엇이 나왔나요?",
          "at": 539,
          "options": [
            {
              "label": "탈",
              "pic": "🎭",
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
          "say": "탈",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "끝에서 입이 닫히는 소리가 있나요?",
          "options": [
            {
              "label": "탈",
              "correct": true
            },
            {
              "label": "타",
              "relation": "noBatchim",
              "why": "받침이 없는 소리예요. 다시 들어볼까?"
            }
          ]
        },
        {
          "say": "타",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "타",
              "correct": true
            },
            {
              "label": "탈",
              "relation": "noBatchim"
            }
          ]
        },
        {
          "say": "탈",
          "prompt": "받침 소리를 잘 듣고 골라요",
          "hint": "받침마다 입과 혀가 다른 자리에서 막혀요",
          "options": [
            {
              "label": "탈",
              "correct": true
            },
            {
              "label": "탄",
              "relation": "stopSwap"
            },
            {
              "label": "탁",
              "relation": "stopSwap"
            }
          ]
        },
        {
          "say": "하회탈, 목욕탕, 각시탈. 끝소리가 다른 낱말은 무엇인가요?",
          "prompt": "끝소리가 다른 낱말은 무엇인가요?",
          "at": 676,
          "options": [
            {
              "label": "하회탈",
              "correct": false,
              "relation": "stopSwap"
            },
            {
              "label": "목욕탕",
              "correct": true
            },
            {
              "label": "각시탈",
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
          "position": "jong",
          "cols": 4,
          "targetCount": 4,
          "prompt": "받침 리을 을 모두 찾아 눌러 보세요",
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
            },
            {
              "jamo": "ㅌ",
              "relation": "shape",
              "count": 3
            }
          ],
          "missHint": "이건 리을 이 아니에요. 모양을 다시 보세요."
        },
        {
          "cols": 4,
          "showTarget": false,
          "target": "ㄹ",
          "position": "jong",
          "prompt": "받침 리을 이 있는 글자를 모두 찾아 눌러 보세요",
          "cells": [
            {
              "ch": "탈",
              "hit": true
            },
            {
              "ch": "발",
              "hit": true
            },
            {
              "ch": "물",
              "hit": true
            },
            {
              "ch": "별",
              "hit": true
            },
            {
              "ch": "타",
              "relation": "noBatchim"
            },
            {
              "ch": "탄",
              "relation": "stopSwap"
            },
            {
              "ch": "탐",
              "relation": "nasalSwap"
            },
            {
              "ch": "탁",
              "relation": "stopSwap"
            },
            {
              "ch": "바",
              "relation": "noBatchim"
            },
            {
              "ch": "무",
              "relation": "noBatchim"
            }
          ],
          "missHint": "받침이 리을 인 글자를 찾아요."
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
          "target": "탈",
          "locked": [
            "cho"
          ],
          "at": 539,
          "prompt": "첫 자음은 넣어 두었어요. 나머지를 채워 주세요!",
          "decoys": [
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
          "target": "탈",
          "prompt": "'탈' 을 처음부터 만들어 보세요.",
          "decoys": [
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
      "type": "chunji",
      "id": "I",
      "title": "사라진 글자",
      "courses": [
        "full"
      ],
      "items": [
        {
          "target": "탈",
          "broken": "타",
          "prompt": "받침이 사라졌어요! 소리 내어 읽어 보고 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㄴ",
              "relation": "stopSwap"
            },
            {
              "jamo": "ㅁ",
              "relation": "nasalSwap"
            },
            {
              "jamo": "ㄱ",
              "relation": "stopSwap"
            }
          ]
        },
        {
          "target": "탈",
          "broken": "탄",
          "prompt": "탄? 소리가 이상해요! 어디가 잘못됐을까요?",
          "tray": [
            {
              "jamo": "ㄴ",
              "relation": "stopSwap"
            },
            {
              "jamo": "ㅁ",
              "relation": "nasalSwap"
            },
            {
              "jamo": "ㄱ",
              "relation": "stopSwap"
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
      "prompt": "받침 리을 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "탈",
          "pic": "🎭"
        },
        {
          "word": "발",
          "pic": "🦶"
        },
        {
          "word": "달",
          "pic": "🌙"
        },
        {
          "word": "물",
          "pic": "💧"
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
          "target": "ㄹ",
          "kind": "jamo",
          "position": "jong",
          "prompt": "받침 리을 을 따라 써 보세요"
        },
        {
          "target": "타",
          "kind": "syllable",
          "prompt": "먼저 '타' 를 따라 써 보세요",
          "note": "받침이 없는 글자예요."
        },
        {
          "target": "탈",
          "kind": "syllable",
          "prompt": "이제 '탈' 을 따라 써 보세요",
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
      "at": 130,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 150,
          "caption": "훈민이와 정음이가 탈을 쓰고 탈춤을 추며 놀았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 205,
          "caption": "탈이 하나뿐이라 하나 더 필요한데, '탈' 을 쓸 줄 몰랐어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 235,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 347,
          "caption": "타조 에서 티읕 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "타조",
            "emoji": "🦩",
            "jamo": "ㅌ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 472,
          "caption": "길 에서 받침 리을 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "길",
            "emoji": "🛣️",
            "jamo": "ㄹ",
            "position": "jong"
          }
        },
        {
          "order": 6,
          "at": 539,
          "caption": "자판기에 넣으니 탈 이 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 7,
          "at": 561,
          "caption": "할아버지와 '탈' 을 소리 내어 읽었어요.",
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
