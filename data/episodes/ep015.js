/* 15화 「자유」 — 자음 ㅈ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep015.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 *
 * 영상으로 확인이 필요한 항목: 퀴즈 종류(끝소리로 추정)
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 15,
  "title": "자유",
  "videoId": "7JJup1IZETQ",
  "objective": "자음 ''ㅈ''의 소리를 인식한다.",
  "focus": "자음 ㅈ",
  "jamo": {
    "new": [
      "ㅈ"
    ],
    "seen": [
      "ㅇ",
      "ㅏ",
      "ㅠ"
    ]
  },
  "targetWords": [
    "자유"
  ],
  "rewards": {
    "cards": [
      "ㅈ"
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
          "q": "지읒은 어디에서 찾았나요?",
          "at": 302,
          "options": [
            {
              "label": "자전거",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "자전거"
              },
              "correct": true
            },
            {
              "label": "옹달샘",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "옹달샘"
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
          "q": "이응은 어디에서 찾았나요?",
          "at": 419,
          "options": [
            {
              "label": "옹달샘",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "옹달샘"
              },
              "correct": true
            },
            {
              "label": "자전거",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "자전거"
              }
            }
          ]
        },
        {
          "q": "자판기에서 무엇이 나왔나요?",
          "at": 488,
          "options": [
            {
              "label": "예쁜 종이",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "예쁜 종이"
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
          "say": "자",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "첫소리가 들리나요?",
          "options": [
            {
              "label": "자",
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
              "label": "자",
              "relation": "noOnset"
            }
          ]
        },
        {
          "say": "자",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "첫소리가 무엇인지 들어 보세요",
          "options": [
            {
              "label": "자",
              "correct": true
            },
            {
              "label": "사",
              "relation": "strokeAdd"
            },
            {
              "label": "아",
              "relation": "shape"
            }
          ]
        },
        {
          "say": "지읒",
          "prompt": "이 소리는 어떤 글자일까요?",
          "options": [
            {
              "label": "ㅈ",
              "correct": true
            },
            {
              "label": "ㅅ",
              "relation": "strokeAdd"
            },
            {
              "label": "ㅇ",
              "relation": "shape"
            }
          ]
        },
        {
          "say": "자유, 자두, 두유. 끝소리가 다른 낱말은 무엇인가요?",
          "prompt": "끝소리가 다른 낱말은 무엇인가요?",
          "at": 697,
          "options": [
            {
              "label": "자유",
              "correct": false,
              "relation": "stopSwap"
            },
            {
              "label": "자두",
              "correct": true
            },
            {
              "label": "두유",
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
          "target": "ㅈ",
          "position": "cho",
          "cols": 4,
          "targetCount": 4,
          "prompt": "지읒을 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㅅ",
              "relation": "strokeAdd",
              "count": 3
            },
            {
              "jamo": "ㅇ",
              "relation": "shape",
              "count": 3
            }
          ],
          "missHint": "이건 지읒이 아니에요. 모양을 다시 보세요."
        },
        {
          "cols": 4,
          "showTarget": false,
          "target": "ㅈ",
          "position": "cho",
          "prompt": "지읒으로 시작하는 글자를 모두 찾아 눌러 보세요",
          "cells": [
            {
              "ch": "자",
              "hit": true
            },
            {
              "ch": "지",
              "hit": true
            },
            {
              "ch": "주",
              "hit": true
            },
            {
              "ch": "사",
              "relation": "strokeAdd"
            },
            {
              "ch": "시",
              "relation": "strokeAdd"
            },
            {
              "ch": "아",
              "relation": "shape"
            },
            {
              "ch": "이",
              "relation": "shape"
            }
          ],
          "missHint": "첫소리가 지읒 인 글자를 찾아요."
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
          "target": "자",
          "at": 488,
          "prompt": "첫 자음을 찾아 넣어 보세요!",
          "decoys": [
            {
              "jamo": "ㅅ",
              "relation": "strokeAdd"
            }
          ]
        },
        {
          "target": "자유",
          "prompt": "'자유' 전체를 만들어 보세요.",
          "decoys": [
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
          "target": "자유",
          "broken": "아유",
          "prompt": "아유? 소리 내어 읽어 보고 첫소리를 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅇ",
              "relation": "noOnset"
            },
            {
              "jamo": "ㅅ",
              "relation": "strokeAdd"
            },
            {
              "jamo": "ㅇ",
              "relation": "shape"
            }
          ]
        },
        {
          "target": "자유",
          "broken": "사유",
          "prompt": "사유? 소리 내어 읽어 보고 첫소리를 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅇ",
              "relation": "noOnset"
            },
            {
              "jamo": "ㅅ",
              "relation": "strokeAdd"
            },
            {
              "jamo": "ㅇ",
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
      "prompt": "지읒 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "자유",
          "pic": "🕊️"
        },
        {
          "word": "지도",
          "pic": "🗺️"
        },
        {
          "word": "주사기",
          "pic": "💉"
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
          "target": "ㅈ",
          "kind": "jamo",
          "position": "cho",
          "prompt": "지읒을 따라 써 보세요"
        },
        {
          "target": "자",
          "kind": "syllable",
          "prompt": "'자' 을 따라 써 보세요",
          "note": "첫 자음을 먼저 쓰고 모음을 붙여요."
        },
        {
          "target": "자유",
          "kind": "word",
          "prompt": "'자유' 을 따라 써 보세요",
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
      "at": 90,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 110,
          "caption": "훈민이와 정음이가 밖에서 자유롭게 놀며 블록으로 공룡과 자동차를 만들었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 184,
          "caption": "방 앞에 '자유' 라고 써 붙이고 싶은데 쓸 줄 몰랐어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 214,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 302,
          "caption": "자전거 에서 지읒을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "자전거",
            "jamo": "ㅈ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 364,
          "caption": "아 용사가 아를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅏ"
          }
        },
        {
          "order": 6,
          "at": 419,
          "caption": "옹달샘 에서 이응을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "옹달샘",
            "jamo": "ㅇ",
            "position": "cho"
          }
        },
        {
          "order": 7,
          "at": 447,
          "caption": "유 용사가 유를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅠ"
          }
        },
        {
          "order": 8,
          "at": 488,
          "caption": "자판기에 넣으니 예쁜 종이가 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 9,
          "at": 549,
          "caption": "할아버지와 '자유' 을 소리 내어 읽었어요.",
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
