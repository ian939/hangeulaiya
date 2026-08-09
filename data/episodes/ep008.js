/* 8화 「가수」 — 자음 ㄱ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep008.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 8,
  "title": "가수",
  "videoId": "kANDJoLtgbQ",
  "objective": "자음 ''ㄱ'' 의 소리를 인식한다.",
  "focus": "자음 ㄱ",
  "jamo": {
    "new": [
      "ㄱ"
    ],
    "seen": [
      "ㅅ",
      "ㅏ",
      "ㅜ"
    ]
  },
  "targetWords": [
    "가수"
  ],
  "rewards": {
    "cards": [
      "ㄱ"
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
          "at": 336,
          "options": [
            {
              "label": "꽃게",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "꽃게"
              },
              "correct": true
            },
            {
              "label": "산",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "산"
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
          "q": "시옷 은 어디에서 찾았나요?",
          "at": 454,
          "options": [
            {
              "label": "산",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "산"
              },
              "correct": true
            },
            {
              "label": "꽃게",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "꽃게"
              }
            }
          ]
        },
        {
          "q": "자판기에서 무엇이 나왔나요?",
          "at": 512,
          "options": [
            {
              "label": "콘서트 표",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "콘서트 표"
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
          "say": "가",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "첫소리가 들리나요?",
          "options": [
            {
              "label": "가",
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
              "label": "가",
              "relation": "noOnset"
            }
          ]
        },
        {
          "say": "가",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "첫소리가 무엇인지 들어 보세요",
          "options": [
            {
              "label": "가",
              "correct": true
            },
            {
              "label": "다",
              "relation": "shape"
            }
          ]
        },
        {
          "say": "기역",
          "prompt": "이 소리는 어떤 글자일까요?",
          "options": [
            {
              "label": "ㄱ",
              "correct": true
            },
            {
              "label": "ㄷ",
              "relation": "shape"
            }
          ]
        },
        {
          "say": "가수, 가지, 나비. 첫소리가 다른 낱말은 무엇인가요?",
          "prompt": "첫소리가 다른 낱말은 무엇인가요?",
          "at": 747,
          "options": [
            {
              "label": "가수",
              "correct": false,
              "relation": "stopSwap"
            },
            {
              "label": "가지",
              "correct": false,
              "relation": "stopSwap"
            },
            {
              "label": "나비",
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
          "target": "ㄱ",
          "position": "cho",
          "cols": 4,
          "targetCount": 4,
          "prompt": "기역 을 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㄷ",
              "relation": "shape",
              "count": 3
            }
          ],
          "missHint": "이건 기역 이 아니에요. 모양을 다시 보세요."
        },
        {
          "cols": 4,
          "showTarget": false,
          "target": "ㄱ",
          "position": "cho",
          "prompt": "기역 으로 시작하는 글자를 모두 찾아 눌러 보세요",
          "cells": [
            {
              "ch": "가",
              "hit": true
            },
            {
              "ch": "고",
              "hit": true
            },
            {
              "ch": "기",
              "hit": true
            },
            {
              "ch": "구",
              "hit": true
            },
            {
              "ch": "다",
              "relation": "shape"
            },
            {
              "ch": "도",
              "relation": "shape"
            }
          ],
          "missHint": "첫소리가 기역 인 글자를 찾아요."
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
          "target": "가",
          "at": 512,
          "prompt": "첫 자음을 찾아 넣어 보세요!",
          "decoys": [
            {
              "jamo": "ㄷ",
              "relation": "shape"
            }
          ]
        },
        {
          "target": "가수",
          "prompt": "'가수' 전체를 만들어 보세요.",
          "decoys": [
            {
              "jamo": "ㄷ",
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
          "target": "가수",
          "broken": "아수",
          "prompt": "아수? 소리 내어 읽어 보고 첫소리를 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅇ",
              "relation": "noOnset"
            },
            {
              "jamo": "ㄷ",
              "relation": "shape"
            }
          ]
        },
        {
          "target": "가수",
          "broken": "다수",
          "prompt": "다수? 소리 내어 읽어 보고 첫소리를 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅇ",
              "relation": "noOnset"
            },
            {
              "jamo": "ㄷ",
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
      "prompt": "기역 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "가수",
          "pic": "🎤"
        },
        {
          "word": "가위",
          "pic": "✂️"
        },
        {
          "word": "고기",
          "pic": "🍖"
        },
        {
          "word": "구두",
          "pic": "👞"
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
          "target": "ㄱ",
          "kind": "jamo",
          "position": "cho",
          "prompt": "기역 을 따라 써 보세요"
        },
        {
          "target": "가",
          "kind": "syllable",
          "prompt": "'가' 을 따라 써 보세요",
          "note": "첫 자음을 먼저 쓰고 모음을 붙여요."
        },
        {
          "target": "가수",
          "kind": "word",
          "prompt": "'가수' 을 따라 써 보세요",
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
      "at": 83,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 103,
          "caption": "훈민이와 정음이가 노래를 부르며 진짜 가수처럼 무대에 서고 싶었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 219,
          "caption": "진짜 가수를 만나려고 한글 카드를 만들려는데 '가수' 를 쓸 줄 몰랐어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 249,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 336,
          "caption": "꽃게 에서 기역 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "꽃게",
            "jamo": "ㄱ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 362,
          "caption": "아 용사가 아 를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅏ"
          }
        },
        {
          "order": 6,
          "at": 454,
          "caption": "산 에서 시옷 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "산",
            "jamo": "ㅅ",
            "position": "cho"
          }
        },
        {
          "order": 7,
          "at": 475,
          "caption": "우 용사가 우 를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅜ"
          }
        },
        {
          "order": 8,
          "at": 512,
          "caption": "자판기에 넣으니 콘서트 표 이 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 9,
          "at": 589,
          "caption": "할아버지와 '가수' 을 소리 내어 읽었어요.",
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
