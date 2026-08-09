/* 10화 「두유」 — 자음 ㄷ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep010.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 10,
  "title": "두유",
  "videoId": "SYbQL7SOyxs",
  "objective": "자음 ''ㄷ'' 의 소리를 인식한다",
  "focus": "자음 ㄷ",
  "jamo": {
    "new": [
      "ㄷ"
    ],
    "seen": [
      "ㅇ",
      "ㅜ",
      "ㅠ"
    ]
  },
  "targetWords": [
    "두유"
  ],
  "rewards": {
    "cards": [
      "ㄷ"
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
          "q": "디귿 은 어디에서 찾았나요?",
          "at": 392,
          "options": [
            {
              "label": "도마뱀",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "도마뱀"
              },
              "correct": true
            },
            {
              "label": "양배추",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "양배추"
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
          "q": "이응 은 어디에서 찾았나요?",
          "at": 482,
          "options": [
            {
              "label": "양배추",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "양배추"
              },
              "correct": true
            },
            {
              "label": "도마뱀",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "도마뱀"
              }
            }
          ]
        },
        {
          "q": "자판기에서 무엇이 나왔나요?",
          "at": 564,
          "options": [
            {
              "label": "두유 이름표",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "두유 이름표"
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
          "say": "두",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "첫소리가 들리나요?",
          "options": [
            {
              "label": "두",
              "correct": true
            },
            {
              "label": "우",
              "relation": "noOnset",
              "why": "첫소리가 없는 글자예요. 다시 들어볼까?"
            }
          ]
        },
        {
          "say": "우",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "우",
              "correct": true
            },
            {
              "label": "두",
              "relation": "noOnset"
            }
          ]
        },
        {
          "say": "두",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "첫소리가 무엇인지 들어 보세요",
          "options": [
            {
              "label": "두",
              "correct": true
            },
            {
              "label": "누",
              "relation": "strokeAdd"
            }
          ]
        },
        {
          "say": "디귿",
          "prompt": "이 소리는 어떤 글자일까요?",
          "options": [
            {
              "label": "ㄷ",
              "correct": true
            },
            {
              "label": "ㄴ",
              "relation": "strokeAdd"
            }
          ]
        },
        {
          "say": "두유, 두부, 루비. 첫소리가 다른 낱말은 무엇인가요?",
          "prompt": "첫소리가 다른 낱말은 무엇인가요?",
          "at": 726,
          "options": [
            {
              "label": "두유",
              "correct": false,
              "relation": "stopSwap"
            },
            {
              "label": "두부",
              "correct": false,
              "relation": "stopSwap"
            },
            {
              "label": "루비",
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
          "target": "ㄷ",
          "position": "cho",
          "cols": 4,
          "targetCount": 4,
          "prompt": "디귿 을 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㄴ",
              "relation": "strokeAdd",
              "count": 3
            }
          ],
          "missHint": "이건 디귿 이 아니에요. 모양을 다시 보세요."
        },
        {
          "cols": 4,
          "showTarget": false,
          "target": "ㄷ",
          "position": "cho",
          "prompt": "디귿 으로 시작하는 글자를 모두 찾아 눌러 보세요",
          "cells": [
            {
              "ch": "두",
              "hit": true
            },
            {
              "ch": "도",
              "hit": true
            },
            {
              "ch": "누",
              "relation": "strokeAdd"
            },
            {
              "ch": "노",
              "relation": "strokeAdd"
            }
          ],
          "missHint": "첫소리가 디귿 인 글자를 찾아요."
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
          "target": "두",
          "at": 564,
          "prompt": "첫 자음을 찾아 넣어 보세요!",
          "decoys": [
            {
              "jamo": "ㄴ",
              "relation": "strokeAdd"
            }
          ]
        },
        {
          "target": "두유",
          "prompt": "'두유' 전체를 만들어 보세요.",
          "decoys": [
            {
              "jamo": "ㄴ",
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
          "target": "두유",
          "broken": "우유",
          "prompt": "우유? 소리 내어 읽어 보고 첫소리를 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅇ",
              "relation": "noOnset"
            },
            {
              "jamo": "ㄴ",
              "relation": "strokeAdd"
            }
          ]
        },
        {
          "target": "두유",
          "broken": "누유",
          "prompt": "누유? 소리 내어 읽어 보고 첫소리를 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅇ",
              "relation": "noOnset"
            },
            {
              "jamo": "ㄴ",
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
      "prompt": "디귿 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "두유",
          "pic": "🥛"
        },
        {
          "word": "두부",
          "pic": {
            "kind": "text",
            "value": "두부"
          }
        },
        {
          "word": "우유",
          "pic": "🥛"
        },
        {
          "word": "도시",
          "pic": "🏙️"
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
          "target": "ㄷ",
          "kind": "jamo",
          "position": "cho",
          "prompt": "디귿 을 따라 써 보세요"
        },
        {
          "target": "두",
          "kind": "syllable",
          "prompt": "'두' 을 따라 써 보세요",
          "note": "첫 자음을 먼저 쓰고 모음을 붙여요."
        },
        {
          "target": "두유",
          "kind": "word",
          "prompt": "'두유' 을 따라 써 보세요",
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
      "at": 108,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 128,
          "caption": "훈민이와 정음이가 콩국물에 우유를 섞어 두유를 만들었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 279,
          "caption": "냉장고에 넣고 이름표를 붙이려는데 '두유' 를 쓸 줄 몰랐어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 309,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 392,
          "caption": "도마뱀 에서 디귿 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "도마뱀",
            "jamo": "ㄷ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 423,
          "caption": "우 용사가 우 를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅜ"
          }
        },
        {
          "order": 6,
          "at": 482,
          "caption": "양배추 에서 이응 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "양배추",
            "jamo": "ㅇ",
            "position": "cho"
          }
        },
        {
          "order": 7,
          "at": 512,
          "caption": "유 용사가 유 를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅠ"
          }
        },
        {
          "order": 8,
          "at": 564,
          "caption": "자판기에 넣으니 두유 이름표 이 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 9,
          "at": 602,
          "caption": "할아버지와 '두유' 을 소리 내어 읽었어요.",
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
