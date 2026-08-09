/* 26화 「밥」 — 받침 ㅂ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep026.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 26,
  "title": "밥",
  "videoId": "bw_ujZQf9gE",
  "objective": "받침 'ㅂ'을 인식한다.",
  "focus": "받침 ㅂ",
  "jamo": {
    "new": [
      "받침 ㅂ"
    ]
  },
  "targetWords": [
    "밥"
  ],
  "rewards": {
    "cards": [
      "받침 ㅂ"
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
          "at": 296,
          "options": [
            {
              "label": "벌",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "벌",
                "emoji": "🐝"
              },
              "correct": true
            },
            {
              "label": "힙합",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "힙합",
                "emoji": "🎤"
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
          "q": "받침 비읍 은 어디에서 찾았나요?",
          "at": 459,
          "options": [
            {
              "label": "힙합",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "힙합",
                "emoji": "🎤"
              },
              "correct": true
            },
            {
              "label": "벌",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "벌",
                "emoji": "🐝"
              }
            }
          ]
        },
        {
          "q": "자판기에서 무엇이 나왔나요?",
          "at": 518,
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
          "say": "밥",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "끝에서 입이 닫히는 소리가 있나요?",
          "options": [
            {
              "label": "밥",
              "correct": true
            },
            {
              "label": "바",
              "relation": "noBatchim",
              "why": "받침이 없는 소리예요. 다시 들어볼까?"
            }
          ]
        },
        {
          "say": "바",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "바",
              "correct": true
            },
            {
              "label": "밥",
              "relation": "noBatchim"
            }
          ]
        },
        {
          "say": "밥",
          "prompt": "받침 소리를 잘 듣고 골라요",
          "hint": "받침마다 입과 혀가 다른 자리에서 막혀요",
          "options": [
            {
              "label": "밥",
              "correct": true
            },
            {
              "label": "밤",
              "relation": "nasalSwap"
            },
            {
              "label": "박",
              "relation": "stopSwap"
            }
          ]
        },
        {
          "say": "콩밥, 수박, 초밥. 끝소리가 다른 낱말은 무엇인가요?",
          "prompt": "끝소리가 다른 낱말은 무엇인가요?",
          "at": 679,
          "options": [
            {
              "label": "콩밥",
              "correct": false,
              "relation": "stopSwap"
            },
            {
              "label": "수박",
              "correct": true
            },
            {
              "label": "초밥",
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
          "position": "jong",
          "cols": 4,
          "targetCount": 4,
          "prompt": "받침 비읍 을 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㅁ",
              "relation": "strokeAdd",
              "count": 3
            },
            {
              "jamo": "ㅍ",
              "relation": "rotation",
              "count": 3
            },
            {
              "jamo": "ㅇ",
              "relation": "shape",
              "count": 3
            }
          ],
          "missHint": "이건 비읍 이 아니에요. 모양을 다시 보세요."
        },
        {
          "cols": 4,
          "showTarget": false,
          "target": "ㅂ",
          "position": "jong",
          "prompt": "받침 비읍 이 있는 글자를 모두 찾아 눌러 보세요",
          "cells": [
            {
              "ch": "밥",
              "hit": true
            },
            {
              "ch": "집",
              "hit": true
            },
            {
              "ch": "컵",
              "hit": true
            },
            {
              "ch": "입",
              "hit": true
            },
            {
              "ch": "바",
              "relation": "noBatchim"
            },
            {
              "ch": "밤",
              "relation": "nasalSwap"
            },
            {
              "ch": "박",
              "relation": "stopSwap"
            },
            {
              "ch": "밧",
              "relation": "stopSwap"
            },
            {
              "ch": "지",
              "relation": "noBatchim"
            },
            {
              "ch": "커",
              "relation": "noBatchim"
            }
          ],
          "missHint": "받침이 비읍 인 글자를 찾아요."
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
          "target": "밥",
          "locked": [
            "cho"
          ],
          "at": 518,
          "prompt": "첫 자음은 넣어 두었어요. 나머지를 채워 주세요!",
          "decoys": [
            {
              "jamo": "ㅁ",
              "relation": "strokeAdd"
            },
            {
              "jamo": "ㅍ",
              "relation": "rotation"
            },
            {
              "jamo": "ㅇ",
              "relation": "shape"
            }
          ]
        },
        {
          "target": "밥",
          "prompt": "'밥' 을 처음부터 만들어 보세요.",
          "decoys": [
            {
              "jamo": "ㅁ",
              "relation": "strokeAdd"
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
          "target": "밥",
          "broken": "바",
          "prompt": "받침이 사라졌어요! 소리 내어 읽어 보고 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅁ",
              "relation": "nasalSwap"
            },
            {
              "jamo": "ㄱ",
              "relation": "stopSwap"
            },
            {
              "jamo": "ㅅ",
              "relation": "stopSwap"
            }
          ]
        },
        {
          "target": "밥",
          "broken": "밤",
          "prompt": "밤? 소리가 이상해요! 어디가 잘못됐을까요?",
          "tray": [
            {
              "jamo": "ㅁ",
              "relation": "nasalSwap"
            },
            {
              "jamo": "ㄱ",
              "relation": "stopSwap"
            },
            {
              "jamo": "ㅅ",
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
      "prompt": "받침 비읍 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "밥",
          "pic": "🍚"
        },
        {
          "word": "집",
          "pic": "🏠"
        },
        {
          "word": "컵",
          "pic": "☕"
        },
        {
          "word": "입",
          "pic": "👄"
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
          "target": "ㅂ",
          "kind": "jamo",
          "position": "jong",
          "prompt": "받침 비읍 을 따라 써 보세요"
        },
        {
          "target": "바",
          "kind": "syllable",
          "prompt": "먼저 '바' 를 따라 써 보세요",
          "note": "받침이 없는 글자예요."
        },
        {
          "target": "밥",
          "kind": "syllable",
          "prompt": "이제 '밥' 을 따라 써 보세요",
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
      "at": 88,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 108,
          "caption": "훈민이와 정음이가 밥을 꼭꼭 씹어 맛있게 먹었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 178,
          "caption": "배고픈 악어에게 줄 밥이 필요한데, '밥' 을 쓸 줄 몰랐어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 208,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 296,
          "caption": "벌 에서 비읍 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "벌",
            "emoji": "🐝",
            "jamo": "ㅂ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 459,
          "caption": "힙합 에서 받침 비읍 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "힙합",
            "emoji": "🎤",
            "jamo": "ㅂ",
            "position": "jong"
          }
        },
        {
          "order": 6,
          "at": 518,
          "caption": "자판기에 넣으니 밥 이 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 7,
          "at": 556,
          "caption": "할아버지와 '밥' 을 소리 내어 읽었어요.",
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
