/* 33화 「숲」 — 받침 ㅍ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep033.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 33,
  "title": "숲",
  "videoId": "bx4b_3oxHZY",
  "objective": "받침 'ㅍ'을 인식한다.",
  "focus": "받침 ㅍ",
  "jamo": {
    "new": [
      "받침 ㅍ"
    ],
    "seen": [
      "ㅅ",
      "ㅜ"
    ]
  },
  "targetWords": [
    "숲"
  ],
  "rewards": {
    "cards": [
      "받침 ㅍ"
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
          "q": "시옷 은 어디에서 찾았나요?",
          "at": 294,
          "options": [
            {
              "label": "사다리",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "사다리",
                "emoji": "🪜"
              },
              "correct": true
            },
            {
              "label": "짚신",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "짚신",
                "emoji": "👡"
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
          "q": "받침 피읖 은 어디에서 찾았나요?",
          "at": 441,
          "options": [
            {
              "label": "짚신",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "짚신",
                "emoji": "👡"
              },
              "correct": true
            },
            {
              "label": "사다리",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "사다리",
                "emoji": "🪜"
              }
            }
          ]
        },
        {
          "q": "자판기에서 무엇이 나왔나요?",
          "at": 497,
          "options": [
            {
              "label": "숲",
              "pic": "🌲",
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
          "say": "숲",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "끝에서 입이 닫히는 소리가 있나요?",
          "options": [
            {
              "label": "숲",
              "correct": true
            },
            {
              "label": "수",
              "relation": "noBatchim",
              "why": "받침이 없는 소리예요. 다시 들어볼까?"
            }
          ]
        },
        {
          "say": "수",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "수",
              "correct": true
            },
            {
              "label": "숲",
              "relation": "noBatchim"
            }
          ]
        },
        {
          "say": "숲",
          "prompt": "받침 소리를 잘 듣고 골라요",
          "hint": "받침마다 입과 혀가 다른 자리에서 막혀요",
          "options": [
            {
              "label": "숲",
              "correct": true
            },
            {
              "label": "숩",
              "relation": "soundSpellMismatch"
            },
            {
              "label": "숨",
              "relation": "nasalSwap"
            }
          ]
        },
        {
          "say": "숲속, 숲길, 순례. 첫소리가 다른 낱말은 무엇인가요?",
          "prompt": "첫소리가 다른 낱말은 무엇인가요?",
          "at": 634,
          "options": [
            {
              "label": "숲속",
              "correct": false,
              "relation": "stopSwap"
            },
            {
              "label": "숲길",
              "correct": false,
              "relation": "stopSwap"
            },
            {
              "label": "순례",
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
          "target": "ㅍ",
          "position": "jong",
          "cols": 4,
          "targetCount": 4,
          "prompt": "받침 피읖 을 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㅂ",
              "relation": "rotation",
              "count": 3
            },
            {
              "jamo": "ㅁ",
              "relation": "shape",
              "count": 3
            },
            {
              "jamo": "ㅌ",
              "relation": "shape",
              "count": 3
            }
          ],
          "missHint": "이건 피읖 이 아니에요. 모양을 다시 보세요."
        },
        {
          "cols": 4,
          "showTarget": false,
          "target": "ㅍ",
          "position": "jong",
          "prompt": "받침 피읖 이 있는 글자를 모두 찾아 눌러 보세요",
          "cells": [
            {
              "ch": "숲",
              "hit": true
            },
            {
              "ch": "잎",
              "hit": true
            },
            {
              "ch": "수",
              "relation": "noBatchim"
            },
            {
              "ch": "숩",
              "relation": "soundSpellMismatch"
            },
            {
              "ch": "숨",
              "relation": "nasalSwap"
            },
            {
              "ch": "이",
              "relation": "noBatchim"
            }
          ],
          "missHint": "받침이 피읖 인 글자를 찾아요."
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
          "target": "숲",
          "locked": [
            "cho"
          ],
          "at": 497,
          "prompt": "첫 자음은 넣어 두었어요. 나머지를 채워 주세요!",
          "decoys": [
            {
              "jamo": "ㅂ",
              "relation": "rotation"
            },
            {
              "jamo": "ㅁ",
              "relation": "shape"
            },
            {
              "jamo": "ㅌ",
              "relation": "shape"
            }
          ]
        },
        {
          "target": "숲",
          "prompt": "'숲' 을 처음부터 만들어 보세요.",
          "decoys": [
            {
              "jamo": "ㅂ",
              "relation": "rotation"
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
          "target": "숲",
          "broken": "수",
          "prompt": "받침이 사라졌어요! 소리 내어 읽어 보고 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅂ",
              "relation": "soundSpellMismatch"
            },
            {
              "jamo": "ㅁ",
              "relation": "nasalSwap"
            }
          ]
        },
        {
          "target": "숲",
          "broken": "숩",
          "prompt": "숩? 소리가 이상해요! 어디가 잘못됐을까요?",
          "tray": [
            {
              "jamo": "ㅂ",
              "relation": "soundSpellMismatch"
            },
            {
              "jamo": "ㅁ",
              "relation": "nasalSwap"
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
      "prompt": "받침 피읖 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "숲",
          "pic": "🌲"
        },
        {
          "word": "잎",
          "pic": "🍃"
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
          "target": "ㅍ",
          "kind": "jamo",
          "position": "jong",
          "prompt": "받침 피읖 을 따라 써 보세요"
        },
        {
          "target": "수",
          "kind": "syllable",
          "prompt": "먼저 '수' 를 따라 써 보세요",
          "note": "받침이 없는 글자예요."
        },
        {
          "target": "숲",
          "kind": "syllable",
          "prompt": "이제 '숲' 을 따라 써 보세요",
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
      "at": 138,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 158,
          "caption": "새가 날아가 버려서 훈민이와 정음이가 나무 흉내를 내며 새를 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 193,
          "caption": "나무가 두 그루뿐이라 새가 오지 않았어요. '숲' 은 어려운 글자였어요.",
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
          "at": 294,
          "caption": "사다리 에서 시옷 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "사다리",
            "emoji": "🪜",
            "jamo": "ㅅ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 441,
          "caption": "짚신 에서 받침 피읖 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "짚신",
            "emoji": "👡",
            "jamo": "ㅍ",
            "position": "jong"
          }
        },
        {
          "order": 6,
          "at": 497,
          "caption": "자판기에 넣으니 숲 이 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 7,
          "at": 514,
          "caption": "할아버지와 '숲' 을 소리 내어 읽었어요.",
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
