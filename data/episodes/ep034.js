/* 34화 「좋아」 — 받침 ㅎ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep034.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 *
 * 영상으로 확인이 필요한 항목: 받침 ㅎ 을 찾은 장소
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 34,
  "title": "좋아",
  "videoId": "h2SKIFx4clo",
  "objective": "받침 'ㅎ'을 인식한다.",
  "focus": "받침 ㅎ",
  "jamo": {
    "new": [
      "받침 ㅎ"
    ]
  },
  "targetWords": [
    "좋아"
  ],
  "rewards": {
    "cards": [
      "받침 ㅎ"
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
          "at": 282,
          "options": [
            {
              "label": "장갑",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "장갑",
                "emoji": "🧤"
              },
              "correct": true
            },
            {
              "label": "암탉",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "암탉",
                "emoji": "🐔"
              }
            },
            {
              "label": "아몬드",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "아몬드",
                "emoji": "🌰"
              }
            }
          ]
        },
        {
          "q": "이응 은 어디에서 찾았나요?",
          "at": 481,
          "options": [
            {
              "label": "아몬드",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "아몬드",
                "emoji": "🌰"
              },
              "correct": true
            },
            {
              "label": "장갑",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "장갑",
                "emoji": "🧤"
              }
            },
            {
              "label": "암탉",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "암탉",
                "emoji": "🐔"
              }
            }
          ]
        },
        {
          "q": "자판기에서 무엇이 나왔나요?",
          "at": 561,
          "options": [
            {
              "label": "거울",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "거울"
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
          "say": "좋",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "끝에서 입이 닫히는 소리가 있나요?",
          "options": [
            {
              "label": "좋",
              "correct": true
            },
            {
              "label": "조",
              "relation": "noBatchim",
              "why": "받침이 없는 소리예요. 다시 들어볼까?"
            }
          ]
        },
        {
          "say": "조",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "조",
              "correct": true
            },
            {
              "label": "좋",
              "relation": "noBatchim"
            }
          ]
        },
        {
          "say": "좋",
          "prompt": "받침 소리를 잘 듣고 골라요",
          "hint": "받침마다 입과 혀가 다른 자리에서 막혀요",
          "options": [
            {
              "label": "좋",
              "correct": true
            },
            {
              "label": "종",
              "relation": "nasalSwap"
            },
            {
              "label": "족",
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
          "target": "ㅎ",
          "position": "jong",
          "cols": 4,
          "targetCount": 4,
          "prompt": "받침 히읗 을 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㅇ",
              "relation": "strokeAdd",
              "count": 3
            },
            {
              "jamo": "ㅊ",
              "relation": "shape",
              "count": 3
            },
            {
              "jamo": "ㅁ",
              "relation": "shape",
              "count": 3
            }
          ],
          "missHint": "이건 히읗 이 아니에요. 모양을 다시 보세요."
        },
        {
          "cols": 4,
          "showTarget": false,
          "target": "ㅎ",
          "position": "jong",
          "prompt": "받침 히읗 이 있는 글자를 모두 찾아 눌러 보세요",
          "cells": [
            {
              "ch": "좋",
              "hit": true
            },
            {
              "ch": "조",
              "relation": "noBatchim"
            },
            {
              "ch": "종",
              "relation": "nasalSwap"
            },
            {
              "ch": "족",
              "relation": "stopSwap"
            }
          ],
          "missHint": "받침이 히읗 인 글자를 찾아요."
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
          "target": "좋",
          "locked": [
            "cho"
          ],
          "at": 561,
          "prompt": "첫 자음은 넣어 두었어요. 나머지를 채워 주세요!",
          "decoys": [
            {
              "jamo": "ㅊ",
              "relation": "shape"
            },
            {
              "jamo": "ㅁ",
              "relation": "shape"
            }
          ]
        },
        {
          "target": "좋아",
          "locked": [
            "0:cho",
            "1:cho"
          ],
          "prompt": "'좋아' 전체를 만들어 보세요. 첫 자음은 넣어 두었어요.",
          "decoys": [
            {
              "jamo": "ㅊ",
              "relation": "shape"
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
          "target": "좋아",
          "broken": "조아",
          "prompt": "받침이 사라졌어요! 소리 내어 읽어 보고 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅇ",
              "relation": "nasalSwap"
            },
            {
              "jamo": "ㄱ",
              "relation": "stopSwap"
            }
          ]
        },
        {
          "target": "좋아",
          "broken": "종아",
          "prompt": "종아? 소리가 이상해요! 어디가 잘못됐을까요?",
          "tray": [
            {
              "jamo": "ㅇ",
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
      "prompt": "받침 히읗 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "좋아",
          "pic": "👍"
        },
        {
          "word": "약",
          "pic": "💊"
        },
        {
          "word": "국",
          "pic": "🍲"
        },
        {
          "word": "수박",
          "pic": "🍉"
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
          "target": "ㅎ",
          "kind": "jamo",
          "position": "jong",
          "prompt": "받침 히읗 을 따라 써 보세요"
        },
        {
          "target": "조",
          "kind": "syllable",
          "prompt": "먼저 '조' 를 따라 써 보세요",
          "note": "받침이 없는 글자예요."
        },
        {
          "target": "좋",
          "kind": "syllable",
          "prompt": "이제 '좋' 을 따라 써 보세요",
          "note": "받침이 들어가면서 위의 글자가 조금 눌려요. 방금 쓴 것과 비교해 보세요!"
        },
        {
          "target": "좋아",
          "kind": "word",
          "prompt": "'좋아' 을 따라 써 보세요",
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
          "caption": "훈민이와 정음이가 상자에서 좋아하는 것을 꺼내며 놀았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 192,
          "caption": "'좋아' 를 어떻게 쓰는지 궁금해졌어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 222,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 282,
          "caption": "장갑 에서 지읒 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "장갑",
            "emoji": "🧤",
            "jamo": "ㅈ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 398,
          "caption": "암탉 에서 받침 히읗 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "암탉",
            "emoji": "🐔",
            "jamo": "ㅎ",
            "position": "jong"
          }
        },
        {
          "order": 6,
          "at": 481,
          "caption": "아몬드 에서 이응 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "아몬드",
            "emoji": "🌰",
            "jamo": "ㅇ",
            "position": "cho"
          }
        },
        {
          "order": 7,
          "at": 561,
          "caption": "자판기에 넣으니 거울 이 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 8,
          "at": 578,
          "caption": "할아버지와 '좋아' 을 소리 내어 읽었어요.",
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
