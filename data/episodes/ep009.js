/* 9화 「나비」 — 자음 ㄴ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep009.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 9,
  "title": "나비",
  "videoId": "1DA6tueYG3s",
  "objective": "자음 ''ㄴ'' 의 소리를 인식한다.",
  "focus": "자음 ㄴ",
  "jamo": {
    "new": [
      "ㄴ"
    ],
    "seen": [
      "ㅂ",
      "ㅏ",
      "ㅣ"
    ]
  },
  "targetWords": [
    "나비"
  ],
  "rewards": {
    "cards": [
      "ㄴ"
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
          "q": "니은 은 어디에서 찾았나요?",
          "at": 341,
          "options": [
            {
              "label": "나무늘보",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "나무늘보"
              },
              "correct": true
            },
            {
              "label": "봉투",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "봉투"
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
          "q": "비읍 은 어디에서 찾았나요?",
          "at": 430,
          "options": [
            {
              "label": "봉투",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "봉투"
              },
              "correct": true
            },
            {
              "label": "나무늘보",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "나무늘보"
              }
            }
          ]
        },
        {
          "q": "자판기에서 무엇이 나왔나요?",
          "at": 478,
          "options": [
            {
              "label": "나비",
              "pic": "🦋",
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
          "say": "나",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "첫소리가 들리나요?",
          "options": [
            {
              "label": "나",
              "correct": true
            },
            {
              "label": "아",
              "relation": "noOnset",
              "why": "첫소리가 없는 글자예요. 다시 들어볼까?"
            }
          ]
        },
        {
          "say": "아",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "아",
              "correct": true
            },
            {
              "label": "나",
              "relation": "noOnset"
            }
          ]
        },
        {
          "say": "나",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "첫소리가 무엇인지 들어 보세요",
          "options": [
            {
              "label": "나",
              "correct": true
            },
            {
              "label": "가",
              "relation": "rotation"
            },
            {
              "label": "다",
              "relation": "strokeAdd"
            }
          ]
        },
        {
          "say": "니은",
          "prompt": "이 소리는 어떤 글자일까요?",
          "options": [
            {
              "label": "ㄴ",
              "correct": true
            },
            {
              "label": "ㄱ",
              "relation": "rotation"
            },
            {
              "label": "ㄷ",
              "relation": "strokeAdd"
            }
          ]
        },
        {
          "say": "나비, 나무, 다리. 첫소리가 다른 낱말은 무엇인가요?",
          "prompt": "첫소리가 다른 낱말은 무엇인가요?",
          "at": 683,
          "options": [
            {
              "label": "나비",
              "correct": false,
              "relation": "stopSwap"
            },
            {
              "label": "나무",
              "correct": false,
              "relation": "stopSwap"
            },
            {
              "label": "다리",
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
          "target": "ㄴ",
          "position": "cho",
          "cols": 4,
          "targetCount": 4,
          "prompt": "니은 을 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㄱ",
              "relation": "rotation",
              "count": 3
            },
            {
              "jamo": "ㄷ",
              "relation": "strokeAdd",
              "count": 3
            }
          ],
          "missHint": "이건 니은 이 아니에요. 모양을 다시 보세요."
        },
        {
          "cols": 4,
          "showTarget": false,
          "target": "ㄴ",
          "position": "cho",
          "prompt": "니은 으로 시작하는 글자를 모두 찾아 눌러 보세요",
          "cells": [
            {
              "ch": "나",
              "hit": true
            },
            {
              "ch": "누",
              "hit": true
            },
            {
              "ch": "가",
              "relation": "rotation"
            },
            {
              "ch": "구",
              "relation": "rotation"
            },
            {
              "ch": "다",
              "relation": "strokeAdd"
            },
            {
              "ch": "두",
              "relation": "strokeAdd"
            }
          ],
          "missHint": "첫소리가 니은 인 글자를 찾아요."
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
          "target": "나",
          "at": 478,
          "prompt": "첫 자음을 찾아 넣어 보세요!",
          "decoys": [
            {
              "jamo": "ㄱ",
              "relation": "rotation"
            },
            {
              "jamo": "ㄷ",
              "relation": "strokeAdd"
            }
          ]
        },
        {
          "target": "나비",
          "prompt": "'나비' 전체를 만들어 보세요.",
          "decoys": [
            {
              "jamo": "ㄱ",
              "relation": "rotation"
            },
            {
              "jamo": "ㄷ",
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
          "target": "나비",
          "broken": "아비",
          "prompt": "아비? 소리 내어 읽어 보고 첫소리를 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅇ",
              "relation": "noOnset"
            },
            {
              "jamo": "ㄱ",
              "relation": "rotation"
            },
            {
              "jamo": "ㄷ",
              "relation": "strokeAdd"
            }
          ]
        },
        {
          "target": "나비",
          "broken": "가비",
          "prompt": "가비? 소리 내어 읽어 보고 첫소리를 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅇ",
              "relation": "noOnset"
            },
            {
              "jamo": "ㄱ",
              "relation": "rotation"
            },
            {
              "jamo": "ㄷ",
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
      "prompt": "니은 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "나비",
          "pic": "🦋"
        },
        {
          "word": "누나",
          "pic": "👧"
        },
        {
          "word": "배",
          "pic": "🍐"
        },
        {
          "word": "얘",
          "pic": "🧒"
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
          "target": "ㄴ",
          "kind": "jamo",
          "position": "cho",
          "prompt": "니은 을 따라 써 보세요"
        },
        {
          "target": "나",
          "kind": "syllable",
          "prompt": "'나' 을 따라 써 보세요",
          "note": "첫 자음을 먼저 쓰고 모음을 붙여요."
        },
        {
          "target": "나비",
          "kind": "word",
          "prompt": "'나비' 을 따라 써 보세요",
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
      "at": 112,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 132,
          "caption": "훈민이와 정음이가 노란 나비를 보고 함께 놀고 싶었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 222,
          "caption": "나비가 날아가 버렸어요. '나비' 를 쓸 줄 몰랐어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 252,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 341,
          "caption": "나무늘보 에서 니은 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "나무늘보",
            "jamo": "ㄴ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 370,
          "caption": "아 용사가 아 를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅏ"
          }
        },
        {
          "order": 6,
          "at": 430,
          "caption": "봉투 에서 비읍 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "봉투",
            "jamo": "ㅂ",
            "position": "cho"
          }
        },
        {
          "order": 7,
          "at": 444,
          "caption": "이 용사가 이 를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅣ"
          }
        },
        {
          "order": 8,
          "at": 478,
          "caption": "자판기에 넣으니 나비 이 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 9,
          "at": 517,
          "caption": "할아버지와 '나비' 을 소리 내어 읽었어요.",
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
