/* 25화 「잠」 — 받침 ㅁ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep025.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 25,
  "title": "잠",
  "videoId": "J1ofRc5zu_A",
  "objective": "받침 'ㅁ'을 인식한다.",
  "focus": "받침 ㅁ",
  "jamo": {
    "new": [
      "받침 ㅁ"
    ]
  },
  "targetWords": [
    "잠"
  ],
  "rewards": {
    "cards": [
      "받침 ㅁ"
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
          "q": "지읒 은 어디에서 찾았나요?",
          "at": 339,
          "options": [
            {
              "label": "지붕",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "지붕",
                "emoji": "🏠"
              },
              "correct": true
            },
            {
              "label": "김",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "김",
                "emoji": "🍙"
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
          "q": "받침 미음 은 어디에서 찾았나요?",
          "at": 459,
          "options": [
            {
              "label": "김",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "김",
                "emoji": "🍙"
              },
              "correct": true
            },
            {
              "label": "지붕",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "지붕",
                "emoji": "🏠"
              }
            }
          ]
        },
        {
          "q": "자판기에서 무엇이 나왔나요?",
          "at": 524,
          "options": [
            {
              "label": "곰",
              "pic": "🐻",
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
          "say": "잠",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "끝에서 입이 닫히는 소리가 있나요?",
          "options": [
            {
              "label": "잠",
              "correct": true
            },
            {
              "label": "자",
              "relation": "noBatchim",
              "why": "받침이 없는 소리예요. 다시 들어볼까?"
            }
          ]
        },
        {
          "say": "자",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "자",
              "correct": true
            },
            {
              "label": "잠",
              "relation": "noBatchim"
            }
          ]
        },
        {
          "say": "잠",
          "prompt": "받침 소리를 잘 듣고 골라요",
          "hint": "받침마다 입과 혀가 다른 자리에서 막혀요",
          "options": [
            {
              "label": "잠",
              "correct": true
            },
            {
              "label": "잔",
              "relation": "nasalSwap"
            }
          ]
        },
        {
          "say": "장난감, 잠수함, 잠꼬대. 첫소리가 다른 낱말은 무엇인가요?",
          "prompt": "첫소리가 다른 낱말은 무엇인가요?",
          "at": 679,
          "options": [
            {
              "label": "장난감",
              "correct": true
            },
            {
              "label": "잠수함",
              "correct": false,
              "relation": "stopSwap"
            },
            {
              "label": "잠꼬대",
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
          "target": "ㅁ",
          "position": "jong",
          "cols": 4,
          "targetCount": 4,
          "prompt": "받침 미음 을 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㅇ",
              "relation": "shape",
              "count": 3
            },
            {
              "jamo": "ㅂ",
              "relation": "strokeAdd",
              "count": 3
            },
            {
              "jamo": "ㄷ",
              "relation": "shape",
              "count": 3
            }
          ],
          "missHint": "이건 미음 이 아니에요. 모양을 다시 보세요."
        },
        {
          "cols": 4,
          "showTarget": false,
          "target": "ㅁ",
          "position": "jong",
          "prompt": "받침 미음 이 있는 글자를 모두 찾아 눌러 보세요",
          "cells": [
            {
              "ch": "잠",
              "hit": true
            },
            {
              "ch": "곰",
              "hit": true
            },
            {
              "ch": "밤",
              "hit": true
            },
            {
              "ch": "봄",
              "hit": true
            },
            {
              "ch": "자",
              "relation": "noBatchim"
            },
            {
              "ch": "잔",
              "relation": "nasalSwap"
            },
            {
              "ch": "장",
              "relation": "nasalSwap"
            },
            {
              "ch": "잡",
              "relation": "stopSwap"
            },
            {
              "ch": "고",
              "relation": "noBatchim"
            },
            {
              "ch": "바",
              "relation": "noBatchim"
            }
          ],
          "missHint": "받침이 미음 인 글자를 찾아요."
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
          "target": "잠",
          "locked": [
            "cho"
          ],
          "at": 524,
          "prompt": "첫 자음은 넣어 두었어요. 나머지를 채워 주세요!",
          "decoys": [
            {
              "jamo": "ㅇ",
              "relation": "shape"
            },
            {
              "jamo": "ㅂ",
              "relation": "strokeAdd"
            },
            {
              "jamo": "ㄷ",
              "relation": "shape"
            }
          ]
        },
        {
          "target": "잠",
          "prompt": "'잠' 을 처음부터 만들어 보세요.",
          "decoys": [
            {
              "jamo": "ㅇ",
              "relation": "shape"
            },
            {
              "jamo": "ㅂ",
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
          "target": "잠",
          "broken": "자",
          "prompt": "받침이 사라졌어요! 소리 내어 읽어 보고 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㄴ",
              "relation": "nasalSwap"
            },
            {
              "jamo": "ㅇ",
              "relation": "nasalSwap"
            },
            {
              "jamo": "ㅂ",
              "relation": "stopSwap"
            }
          ]
        },
        {
          "target": "잠",
          "broken": "잔",
          "prompt": "잔? 소리가 이상해요! 어디가 잘못됐을까요?",
          "tray": [
            {
              "jamo": "ㄴ",
              "relation": "nasalSwap"
            },
            {
              "jamo": "ㅇ",
              "relation": "nasalSwap"
            },
            {
              "jamo": "ㅂ",
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
      "prompt": "받침 미음 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "잠",
          "pic": "😴"
        },
        {
          "word": "곰",
          "pic": "🐻"
        },
        {
          "word": "밤",
          "pic": "🌰"
        },
        {
          "word": "봄",
          "pic": "🌸"
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
          "target": "ㅁ",
          "kind": "jamo",
          "position": "jong",
          "prompt": "받침 미음 을 따라 써 보세요"
        },
        {
          "target": "자",
          "kind": "syllable",
          "prompt": "먼저 '자' 를 따라 써 보세요",
          "note": "받침이 없는 글자예요."
        },
        {
          "target": "잠",
          "kind": "syllable",
          "prompt": "이제 '잠' 을 따라 써 보세요",
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
      "at": 111,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 131,
          "caption": "훈민이와 정음이가 마당에서 캠핑을 하며 밤늦게까지 놀았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 239,
          "caption": "훈민이는 자꾸 잠들고 정음이는 잠이 오지 않았어요. '잠' 을 쓸 줄 몰랐어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 269,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 339,
          "caption": "지붕 에서 지읒 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "지붕",
            "emoji": "🏠",
            "jamo": "ㅈ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 459,
          "caption": "김 에서 받침 미음 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "김",
            "emoji": "🍙",
            "jamo": "ㅁ",
            "position": "jong"
          }
        },
        {
          "order": 6,
          "at": 524,
          "caption": "자판기에 넣으니 곰 이 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 7,
          "at": 567,
          "caption": "할아버지와 '잠' 을 소리 내어 읽었어요.",
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
