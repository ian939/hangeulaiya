/* 28화 「공」 — 받침 ㅇ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep028.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 28,
  "title": "공",
  "videoId": "BwiaTokUxbg",
  "objective": "받침 'ㅇ'을 인식한다.",
  "focus": "받침 ㅇ",
  "jamo": {
    "new": [
      "받침 ㅇ"
    ],
    "seen": [
      "ㄱ",
      "ㅗ"
    ]
  },
  "targetWords": [
    "공"
  ],
  "rewards": {
    "cards": [
      "받침 ㅇ"
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
          "q": "기역 은 어디에서 찾았나요?",
          "at": 306,
          "options": [
            {
              "label": "가로등",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "가로등",
                "emoji": "💡"
              },
              "correct": true
            },
            {
              "label": "징",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "징",
                "emoji": "🥁"
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
          "q": "받침 이응 은 어디에서 찾았나요?",
          "at": 437,
          "options": [
            {
              "label": "징",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "징",
                "emoji": "🥁"
              },
              "correct": true
            },
            {
              "label": "가로등",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "가로등",
                "emoji": "💡"
              }
            }
          ]
        },
        {
          "q": "자판기에서 무엇이 나왔나요?",
          "at": 504,
          "options": [
            {
              "label": "공",
              "pic": "⚽",
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
          "say": "공",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "끝에서 입이 닫히는 소리가 있나요?",
          "options": [
            {
              "label": "공",
              "correct": true
            },
            {
              "label": "고",
              "relation": "noBatchim",
              "why": "받침이 없는 소리예요. 다시 들어볼까?"
            }
          ]
        },
        {
          "say": "고",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "고",
              "correct": true
            },
            {
              "label": "공",
              "relation": "noBatchim"
            }
          ]
        },
        {
          "say": "공",
          "prompt": "받침 소리를 잘 듣고 골라요",
          "hint": "받침마다 입과 혀가 다른 자리에서 막혀요",
          "options": [
            {
              "label": "공",
              "correct": true
            },
            {
              "label": "곤",
              "relation": "nasalSwap"
            },
            {
              "label": "곰",
              "relation": "nasalSwap"
            }
          ]
        },
        {
          "say": "야구공, 북극곰, 농구공. 끝소리가 다른 낱말은 무엇인가요?",
          "prompt": "끝소리가 다른 낱말은 무엇인가요?",
          "at": 655,
          "options": [
            {
              "label": "야구공",
              "correct": false,
              "relation": "stopSwap"
            },
            {
              "label": "북극곰",
              "correct": true
            },
            {
              "label": "농구공",
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
          "target": "ㅇ",
          "position": "jong",
          "cols": 4,
          "targetCount": 4,
          "prompt": "받침 이응 을 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㅁ",
              "relation": "shape",
              "count": 3
            },
            {
              "jamo": "ㅎ",
              "relation": "strokeAdd",
              "count": 3
            },
            {
              "jamo": "ㅅ",
              "relation": "shape",
              "count": 3
            }
          ],
          "missHint": "이건 이응 이 아니에요. 모양을 다시 보세요."
        },
        {
          "cols": 4,
          "showTarget": false,
          "target": "ㅇ",
          "position": "jong",
          "prompt": "받침 이응 이 있는 글자를 모두 찾아 눌러 보세요",
          "cells": [
            {
              "ch": "공",
              "hit": true
            },
            {
              "ch": "콩",
              "hit": true
            },
            {
              "ch": "빵",
              "hit": true
            },
            {
              "ch": "종",
              "hit": true
            },
            {
              "ch": "고",
              "relation": "noBatchim"
            },
            {
              "ch": "곤",
              "relation": "nasalSwap"
            },
            {
              "ch": "곰",
              "relation": "nasalSwap"
            },
            {
              "ch": "곡",
              "relation": "stopSwap"
            },
            {
              "ch": "코",
              "relation": "noBatchim"
            },
            {
              "ch": "빠",
              "relation": "noBatchim"
            }
          ],
          "missHint": "받침이 이응 인 글자를 찾아요."
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
          "target": "공",
          "locked": [
            "cho"
          ],
          "at": 504,
          "prompt": "첫 자음은 넣어 두었어요. 나머지를 채워 주세요!",
          "decoys": [
            {
              "jamo": "ㅁ",
              "relation": "shape"
            },
            {
              "jamo": "ㅎ",
              "relation": "strokeAdd"
            },
            {
              "jamo": "ㅅ",
              "relation": "shape"
            }
          ]
        },
        {
          "target": "공",
          "prompt": "'공' 을 처음부터 만들어 보세요.",
          "decoys": [
            {
              "jamo": "ㅁ",
              "relation": "shape"
            },
            {
              "jamo": "ㅎ",
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
          "target": "공",
          "broken": "고",
          "prompt": "받침이 사라졌어요! 소리 내어 읽어 보고 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㄴ",
              "relation": "nasalSwap"
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
          "target": "공",
          "broken": "곤",
          "prompt": "곤? 소리가 이상해요! 어디가 잘못됐을까요?",
          "tray": [
            {
              "jamo": "ㄴ",
              "relation": "nasalSwap"
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
      "prompt": "받침 이응 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "공",
          "pic": "⚽"
        },
        {
          "word": "콩",
          "pic": "🫘"
        },
        {
          "word": "빵",
          "pic": "🍞"
        },
        {
          "word": "종",
          "pic": "🔔"
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
          "target": "ㅇ",
          "kind": "jamo",
          "position": "jong",
          "prompt": "받침 이응 을 따라 써 보세요"
        },
        {
          "target": "고",
          "kind": "syllable",
          "prompt": "먼저 '고' 를 따라 써 보세요",
          "note": "받침이 없는 글자예요."
        },
        {
          "target": "공",
          "kind": "syllable",
          "prompt": "이제 '공' 을 따라 써 보세요",
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
      "at": 95,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 115,
          "caption": "훈민이와 정음이가 골키퍼와 공격수를 정하고 축구를 하려 했어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 189,
          "caption": "털실 뭉치는 잘 굴러가지 않았어요. 진짜 공이 필요한데 '공' 을 쓸 줄 몰랐어요.",
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
          "at": 306,
          "caption": "가로등 에서 기역 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "가로등",
            "emoji": "💡",
            "jamo": "ㄱ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 437,
          "caption": "징 에서 받침 이응 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "징",
            "emoji": "🥁",
            "jamo": "ㅇ",
            "position": "jong"
          }
        },
        {
          "order": 6,
          "at": 504,
          "caption": "자판기에 넣으니 공 이 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 7,
          "at": 532,
          "caption": "할아버지와 '공' 을 소리 내어 읽었어요.",
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
