/* 12화 「모자」 — 자음 ㅁ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep012.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 *
 * 영상으로 확인이 필요한 항목: 퀴즈 낱말
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 12,
  "title": "모자",
  "videoId": "ovZ0A3u56ts",
  "objective": "자음 ''ㅁ'' 의 소리를 인식한다.",
  "focus": "자음 ㅁ",
  "jamo": {
    "new": [
      "ㅁ"
    ],
    "seen": [
      "ㅈ",
      "ㅏ",
      "ㅗ"
    ]
  },
  "targetWords": [
    "모자"
  ],
  "rewards": {
    "cards": [
      "ㅁ"
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
          "q": "미음 은 어디에서 찾았나요?",
          "at": 340,
          "options": [
            {
              "label": "문",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "문"
              },
              "correct": true
            },
            {
              "label": "잠자리",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "잠자리"
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
          "q": "지읒 은 어디에서 찾았나요?",
          "at": 429,
          "options": [
            {
              "label": "잠자리",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "잠자리"
              },
              "correct": true
            },
            {
              "label": "문",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "문"
              }
            }
          ]
        },
        {
          "q": "자판기에서 무엇이 나왔나요?",
          "at": 518,
          "options": [
            {
              "label": "새 모자",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "새 모자"
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
          "say": "모",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "첫소리가 들리나요?",
          "options": [
            {
              "label": "모",
              "correct": true
            },
            {
              "label": "오",
              "relation": "noOnset",
              "why": "첫소리가 없는 글자예요. 다시 들어볼까?"
            }
          ]
        },
        {
          "say": "오",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "오",
              "correct": true
            },
            {
              "label": "모",
              "relation": "noOnset"
            }
          ]
        },
        {
          "say": "모",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "첫소리가 무엇인지 들어 보세요",
          "options": [
            {
              "label": "모",
              "correct": true
            },
            {
              "label": "오",
              "relation": "shape"
            },
            {
              "label": "보",
              "relation": "strokeAdd"
            }
          ]
        },
        {
          "say": "미음",
          "prompt": "이 소리는 어떤 글자일까요?",
          "options": [
            {
              "label": "ㅁ",
              "correct": true
            },
            {
              "label": "ㅇ",
              "relation": "shape"
            },
            {
              "label": "ㅂ",
              "relation": "strokeAdd"
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
          "position": "cho",
          "cols": 4,
          "targetCount": 4,
          "prompt": "미음 을 모두 찾아 눌러 보세요",
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
          "position": "cho",
          "prompt": "미음 으로 시작하는 글자를 모두 찾아 눌러 보세요",
          "cells": [
            {
              "ch": "모",
              "hit": true
            },
            {
              "ch": "머",
              "hit": true
            },
            {
              "ch": "무",
              "hit": true
            },
            {
              "ch": "오",
              "relation": "shape"
            },
            {
              "ch": "어",
              "relation": "shape"
            },
            {
              "ch": "보",
              "relation": "strokeAdd"
            },
            {
              "ch": "버",
              "relation": "strokeAdd"
            },
            {
              "ch": "도",
              "relation": "shape"
            },
            {
              "ch": "더",
              "relation": "shape"
            }
          ],
          "missHint": "첫소리가 미음 인 글자를 찾아요."
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
          "target": "모",
          "at": 518,
          "prompt": "첫 자음을 찾아 넣어 보세요!",
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
          "target": "모자",
          "prompt": "'모자' 전체를 만들어 보세요.",
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
          "target": "모자",
          "broken": "오자",
          "prompt": "오자? 소리 내어 읽어 보고 첫소리를 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅇ",
              "relation": "noOnset"
            },
            {
              "jamo": "ㅇ",
              "relation": "shape"
            },
            {
              "jamo": "ㅂ",
              "relation": "strokeAdd"
            }
          ]
        },
        {
          "target": "모자",
          "broken": "오자",
          "prompt": "오자? 소리 내어 읽어 보고 첫소리를 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅇ",
              "relation": "noOnset"
            },
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
      "type": "match",
      "id": "G",
      "title": "낱말과 그림",
      "courses": [
        "full"
      ],
      "prompt": "미음 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "모자",
          "pic": "👒"
        },
        {
          "word": "머리",
          "pic": "💇"
        },
        {
          "word": "무",
          "pic": "🥬"
        },
        {
          "word": "머루",
          "pic": "🍇"
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
          "target": "ㅁ",
          "kind": "jamo",
          "position": "cho",
          "prompt": "미음 을 따라 써 보세요"
        },
        {
          "target": "모",
          "kind": "syllable",
          "prompt": "'모' 을 따라 써 보세요",
          "note": "첫 자음을 먼저 쓰고 모음을 붙여요."
        },
        {
          "target": "모자",
          "kind": "word",
          "prompt": "'모자' 을 따라 써 보세요",
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
      "at": 128,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 148,
          "caption": "훈민이와 정음이가 할아버지 모자를 쓰고 마술사 놀이를 했어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 236,
          "caption": "마술로 나온 물총에 모자가 젖었어요. '모자' 를 쓸 줄 몰랐어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 266,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 340,
          "caption": "문 에서 미음 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "문",
            "jamo": "ㅁ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 364,
          "caption": "오 용사가 오 를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅗ"
          }
        },
        {
          "order": 6,
          "at": 429,
          "caption": "잠자리 에서 지읒 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "잠자리",
            "jamo": "ㅈ",
            "position": "cho"
          }
        },
        {
          "order": 7,
          "at": 484,
          "caption": "아 용사가 아 를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅏ"
          }
        },
        {
          "order": 8,
          "at": 518,
          "caption": "자판기에 넣으니 새 모자 이 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 9,
          "at": 546,
          "caption": "할아버지와 '모자' 을 소리 내어 읽었어요.",
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
