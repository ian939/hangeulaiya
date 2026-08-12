/* 19화 「피자」 — 자음 ㅍ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep019.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 19,
  "title": "피자",
  "videoId": "bnYttMdutvE",
  "objective": "자음 ''ㅍ''의 소리를 인식한다.",
  "focus": "자음 ㅍ",
  "jamo": {
    "new": [
      "ㅍ"
    ],
    "seen": [
      "ㅈ",
      "ㅏ",
      "ㅣ"
    ]
  },
  "targetWords": [
    "피자"
  ],
  "rewards": {
    "cards": [
      "ㅍ"
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
          "q": "피읖은 어디에서 찾았나요?",
          "at": 355,
          "options": [
            {
              "label": "폭포",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "폭포"
              },
              "correct": true
            },
            {
              "label": "자라",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "자라"
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
          "q": "지읒은 어디에서 찾았나요?",
          "at": 456,
          "options": [
            {
              "label": "자라",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "자라"
              },
              "correct": true
            },
            {
              "label": "폭포",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "폭포"
              }
            }
          ]
        },
        {
          "q": "자판기에서 무엇이 나왔나요?",
          "at": 515,
          "options": [
            {
              "label": "피자 한 판",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "피자 한 판"
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
          "say": "피",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "첫소리가 들리나요?",
          "options": [
            {
              "label": "피",
              "correct": true
            },
            {
              "label": "이",
              "relation": "noOnset",
              "why": "첫소리가 없는 글자예요. 다시 들어볼까?"
            }
          ]
        },
        {
          "say": "이",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "이",
              "correct": true
            },
            {
              "label": "피",
              "relation": "noOnset"
            }
          ]
        },
        {
          "say": "피",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "첫소리가 무엇인지 들어 보세요",
          "options": [
            {
              "label": "피",
              "correct": true
            },
            {
              "label": "비",
              "relation": "rotation"
            },
            {
              "label": "미",
              "relation": "shape"
            }
          ]
        },
        {
          "say": "피읖",
          "prompt": "이 소리는 어떤 글자일까요?",
          "options": [
            {
              "label": "ㅍ",
              "correct": true
            },
            {
              "label": "ㅂ",
              "relation": "rotation"
            },
            {
              "label": "ㅁ",
              "relation": "shape"
            }
          ]
        },
        {
          "say": "주차, 피자, 모자. 끝소리가 다른 낱말은 무엇인가요?",
          "prompt": "끝소리가 다른 낱말은 무엇인가요?",
          "at": 712,
          "options": [
            {
              "label": "주차",
              "correct": true
            },
            {
              "label": "피자",
              "correct": false,
              "relation": "stopSwap"
            },
            {
              "label": "모자",
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
          "target": "ㅍ",
          "position": "cho",
          "cols": 4,
          "targetCount": 4,
          "prompt": "피읖을 모두 찾아 눌러 보세요",
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
          "missHint": "이건 피읖이 아니에요. 모양을 다시 보세요."
        },
        {
          "cols": 4,
          "showTarget": false,
          "target": "ㅍ",
          "position": "cho",
          "prompt": "피읖으로 시작하는 글자를 모두 찾아 눌러 보세요",
          "cells": [
            {
              "ch": "피",
              "hit": true
            },
            {
              "ch": "포",
              "hit": true
            },
            {
              "ch": "파",
              "hit": true
            },
            {
              "ch": "비",
              "relation": "rotation"
            },
            {
              "ch": "보",
              "relation": "rotation"
            },
            {
              "ch": "미",
              "relation": "shape"
            },
            {
              "ch": "모",
              "relation": "shape"
            },
            {
              "ch": "티",
              "relation": "shape"
            },
            {
              "ch": "토",
              "relation": "shape"
            }
          ],
          "missHint": "첫소리가 피읖 인 글자를 찾아요."
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
          "target": "피",
          "at": 515,
          "prompt": "첫 자음을 찾아 넣어 보세요!",
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
          "target": "피자",
          "prompt": "'피자' 전체를 만들어 보세요.",
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
          "target": "피자",
          "broken": "이자",
          "prompt": "이자? 소리 내어 읽어 보고 첫소리를 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅇ",
              "relation": "noOnset"
            },
            {
              "jamo": "ㅂ",
              "relation": "rotation"
            },
            {
              "jamo": "ㅁ",
              "relation": "shape"
            }
          ]
        },
        {
          "target": "피자",
          "broken": "비자",
          "prompt": "비자? 소리 내어 읽어 보고 첫소리를 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅇ",
              "relation": "noOnset"
            },
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
      "type": "match",
      "id": "G",
      "title": "낱말과 그림",
      "courses": [
        "full"
      ],
      "prompt": "피읖 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "피자",
          "pic": "🍕"
        },
        {
          "word": "포도",
          "pic": "🍇"
        },
        {
          "word": "파",
          "pic": "🧅"
        },
        {
          "word": "재미",
          "pic": "🎉"
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
      "toleranceEm": 0.2,
      "passScore": 0.57,
      "items": [
        {
          "target": "ㅍ",
          "kind": "jamo",
          "position": "cho",
          "prompt": "피읖을 따라 써 보세요"
        },
        {
          "target": "피",
          "kind": "syllable",
          "prompt": "'피' 을 따라 써 보세요",
          "note": "첫 자음을 먼저 쓰고 모음을 붙여요."
        },
        {
          "target": "피자",
          "kind": "word",
          "prompt": "'피자' 을 따라 써 보세요",
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
      "at": 89,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 109,
          "caption": "훈민이와 정음이가 빵 위에 소스와 치즈를 올려 피자를 만들었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 234,
          "caption": "둘이 다 먹어 버려서 할아버지께 드릴 피자 재료가 없었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 264,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 355,
          "caption": "폭포 에서 피읖을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "폭포",
            "jamo": "ㅍ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 375,
          "caption": "이 용사가 이를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅣ"
          }
        },
        {
          "order": 6,
          "at": 456,
          "caption": "자라 에서 지읒을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "자라",
            "jamo": "ㅈ",
            "position": "cho"
          }
        },
        {
          "order": 7,
          "at": 479,
          "caption": "아 용사가 아를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅏ"
          }
        },
        {
          "order": 8,
          "at": 515,
          "caption": "자판기에 넣으니 피자 한 판이 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 9,
          "at": 535,
          "caption": "할아버지와 '피자' 을 소리 내어 읽었어요.",
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
