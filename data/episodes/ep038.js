/* 38화 「씨」 — 쌍자음 ㅆ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep038.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 *
 * 영상으로 확인이 필요한 항목: 초성·중성 결합 시각
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 38,
  "title": "씨",
  "videoId": "HdI47jurKUc",
  "objective": "쌍자음 'ㅆ'의 소리를 인식한다.",
  "focus": "쌍자음 ㅆ",
  "jamo": {
    "new": [
      "ㅆ"
    ],
    "seen": [
      "ㅅ",
      "ㅣ"
    ]
  },
  "targetWords": [
    "씨"
  ],
  "rewards": {
    "cards": [
      "ㅆ"
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
          "q": "쌍시옷은 어디에서 찾았나요?",
          "at": 451,
          "options": [
            {
              "label": "새싹",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "새싹"
              },
              "correct": true
            },
            {
              "label": "자판기",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "자판기"
              }
            },
            {
              "label": "냉장고",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "냉장고",
                "emoji": "🧊"
              }
            }
          ]
        },
        {
          "q": "자판기에서 무엇이 나왔나요?",
          "at": 516,
          "options": [
            {
              "label": "수박씨",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "수박씨"
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
          "say": "씨",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "첫소리가 들리나요?",
          "options": [
            {
              "label": "씨",
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
              "label": "씨",
              "relation": "noOnset"
            }
          ]
        },
        {
          "say": "씨",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "첫소리가 무엇인지 들어 보세요",
          "options": [
            {
              "label": "씨",
              "correct": true
            },
            {
              "label": "시",
              "relation": "tensePair"
            },
            {
              "label": "지",
              "relation": "strokeAdd"
            }
          ]
        },
        {
          "say": "쌍시옷",
          "prompt": "이 소리는 어떤 글자일까요?",
          "options": [
            {
              "label": "ㅆ",
              "correct": true
            },
            {
              "label": "ㅅ",
              "relation": "tensePair"
            },
            {
              "label": "ㅈ",
              "relation": "strokeAdd"
            }
          ]
        },
        {
          "say": "씨",
          "prompt": "된소리를 잘 듣고 골라요",
          "hint": "목에 힘을 주고 세게 내는 소리예요",
          "options": [
            {
              "label": "씨",
              "correct": true
            },
            {
              "label": "시",
              "relation": "tensePair",
              "why": "이건 약한 소리예요. 더 세게 내는 소리를 찾아요."
            }
          ],
          "after": "쌍시옷은 시옷 보다 세게 내는 소리예요."
        },
        {
          "say": "씨앗, 씨름, 시장. 첫소리가 다른 낱말은 무엇인가요?",
          "prompt": "첫소리가 다른 낱말은 무엇인가요?",
          "at": 621,
          "options": [
            {
              "label": "씨앗",
              "correct": false,
              "relation": "stopSwap"
            },
            {
              "label": "씨름",
              "correct": false,
              "relation": "stopSwap"
            },
            {
              "label": "시장",
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
          "target": "ㅆ",
          "position": "cho",
          "cols": 4,
          "targetCount": 4,
          "prompt": "쌍시옷을 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㅅ",
              "relation": "tensePair",
              "count": 3
            },
            {
              "jamo": "ㅈ",
              "relation": "strokeAdd",
              "count": 3
            }
          ],
          "missHint": "이건 쌍시옷이 아니에요. 모양을 다시 보세요."
        },
        {
          "cols": 4,
          "showTarget": false,
          "target": "ㅆ",
          "position": "cho",
          "prompt": "쌍시옷으로 시작하는 글자를 모두 찾아 눌러 보세요",
          "cells": [
            {
              "ch": "씨",
              "hit": true
            },
            {
              "ch": "싹",
              "hit": true
            },
            {
              "ch": "쌀",
              "hit": true
            },
            {
              "ch": "시",
              "relation": "tensePair"
            },
            {
              "ch": "삭",
              "relation": "tensePair"
            },
            {
              "ch": "지",
              "relation": "strokeAdd"
            },
            {
              "ch": "작",
              "relation": "strokeAdd"
            }
          ],
          "missHint": "첫소리가 쌍시옷 인 글자를 찾아요."
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
          "target": "씨",
          "at": 516,
          "prompt": "첫 자음을 찾아 넣어 보세요!",
          "decoys": [
            {
              "jamo": "ㅅ",
              "relation": "tensePair"
            },
            {
              "jamo": "ㅈ",
              "relation": "strokeAdd"
            }
          ]
        },
        {
          "target": "씨",
          "prompt": "'씨' 을 처음부터 만들어 보세요.",
          "decoys": [
            {
              "jamo": "ㅅ",
              "relation": "tensePair"
            },
            {
              "jamo": "ㅈ",
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
          "target": "씨",
          "broken": "이",
          "prompt": "이? 소리 내어 읽어 보고 첫소리를 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅇ",
              "relation": "noOnset"
            },
            {
              "jamo": "ㅅ",
              "relation": "tensePair"
            },
            {
              "jamo": "ㅈ",
              "relation": "strokeAdd"
            }
          ]
        },
        {
          "target": "씨",
          "broken": "시",
          "prompt": "시? 소리 내어 읽어 보고 첫소리를 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅇ",
              "relation": "noOnset"
            },
            {
              "jamo": "ㅅ",
              "relation": "tensePair"
            },
            {
              "jamo": "ㅈ",
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
      "prompt": "쌍시옷 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "씨",
          "pic": "🌱"
        },
        {
          "word": "씨앗",
          "pic": {
            "kind": "text",
            "value": "씨앗"
          }
        },
        {
          "word": "싹",
          "pic": {
            "kind": "text",
            "value": "싹"
          }
        },
        {
          "word": "쌀",
          "pic": "🍚"
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
      "toleranceEm": 0.16,
      "passScore": 0.57,
      "items": [
        {
          "target": "ㅆ",
          "kind": "jamo",
          "position": "cho",
          "prompt": "쌍시옷을 따라 써 보세요"
        },
        {
          "target": "씨",
          "kind": "syllable",
          "prompt": "'씨' 을 따라 써 보세요",
          "note": "첫 자음을 먼저 쓰고 모음을 붙여요."
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
          "caption": "훈민이와 정음이가 수박을 먹으며 누가 씨를 더 많이 뱉었는지 세어 봤어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 287,
          "caption": "씨를 심으려는데 씨가 없어졌어요. '씨' 를 쓸 줄 몰랐어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 317,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 451,
          "caption": "새싹 에서 쌍시옷을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "새싹",
            "jamo": "ㅆ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 455,
          "caption": "이 용사가 이를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅣ"
          }
        },
        {
          "order": 6,
          "at": 516,
          "caption": "자판기에 넣으니 수박씨가 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 7,
          "at": 526,
          "caption": "할아버지와 '씨' 을 소리 내어 읽었어요.",
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
