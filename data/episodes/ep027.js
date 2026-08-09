/* 27화 「옷」 — 받침 ㅅ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep027.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 *
 * 영상으로 확인이 필요한 항목: 받침 ㅅ 을 찾은 장소
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 27,
  "title": "옷",
  "videoId": "XMuVJPpDF-w",
  "objective": "받침 'ㅅ'을 인식한다.",
  "focus": "받침 ㅅ",
  "jamo": {
    "new": [
      "받침 ㅅ"
    ],
    "seen": [
      "ㅇ",
      "ㅗ"
    ]
  },
  "targetWords": [
    "옷"
  ],
  "rewards": {
    "cards": [
      "받침 ㅅ"
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
          "q": "이응 은 어디에서 찾았나요?",
          "at": 337,
          "options": [
            {
              "label": "울타리",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "울타리",
                "emoji": "🚧"
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
          "at": 525,
          "options": [
            {
              "label": "옷",
              "pic": "👕",
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
          "say": "옷",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "끝에서 입이 닫히는 소리가 있나요?",
          "options": [
            {
              "label": "옷",
              "correct": true
            },
            {
              "label": "오",
              "relation": "noBatchim",
              "why": "받침이 없는 소리예요. 다시 들어볼까?"
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
              "label": "옷",
              "relation": "noBatchim"
            }
          ]
        },
        {
          "say": "옷",
          "prompt": "받침 소리를 잘 듣고 골라요",
          "hint": "받침마다 입과 혀가 다른 자리에서 막혀요",
          "options": [
            {
              "label": "옷",
              "correct": true
            },
            {
              "label": "옫",
              "relation": "soundSpellMismatch"
            },
            {
              "label": "온",
              "relation": "nasalSwap"
            }
          ]
        },
        {
          "say": "옷",
          "prompt": "소리가 같아요. 어떤 글자일까요?",
          "hint": "받침 ㄷ ㅅ ㅈ 은 소리가 똑같아요. 낱말을 떠올려 보세요!",
          "options": [
            {
              "label": "옷",
              "correct": true
            },
            {
              "label": "옫",
              "relation": "soundSpellMismatch"
            },
            {
              "label": "옺",
              "relation": "soundSpellMismatch"
            }
          ],
          "after": "소리가 같아도 낱말마다 쓰는 글자가 달라요."
        },
        {
          "say": "비옷, 시옷, 기온. 끝소리가 다른 낱말은 무엇인가요?",
          "prompt": "끝소리가 다른 낱말은 무엇인가요?",
          "at": 705,
          "options": [
            {
              "label": "비옷",
              "correct": false,
              "relation": "stopSwap"
            },
            {
              "label": "시옷",
              "correct": false,
              "relation": "stopSwap"
            },
            {
              "label": "기온",
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
          "target": "ㅅ",
          "position": "jong",
          "cols": 4,
          "targetCount": 4,
          "prompt": "받침 시옷 을 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㅈ",
              "relation": "strokeAdd",
              "count": 3
            },
            {
              "jamo": "ㅊ",
              "relation": "strokeAdd",
              "count": 3
            },
            {
              "jamo": "ㅁ",
              "relation": "shape",
              "count": 3
            }
          ],
          "missHint": "이건 시옷 이 아니에요. 모양을 다시 보세요."
        },
        {
          "cols": 4,
          "showTarget": false,
          "target": "ㅅ",
          "position": "jong",
          "prompt": "받침 시옷 이 있는 글자를 모두 찾아 눌러 보세요",
          "cells": [
            {
              "ch": "옷",
              "hit": true
            },
            {
              "ch": "붓",
              "hit": true
            },
            {
              "ch": "빗",
              "hit": true
            },
            {
              "ch": "오",
              "relation": "noBatchim"
            },
            {
              "ch": "옫",
              "relation": "soundSpellMismatch"
            },
            {
              "ch": "옺",
              "relation": "soundSpellMismatch"
            },
            {
              "ch": "온",
              "relation": "nasalSwap"
            },
            {
              "ch": "부",
              "relation": "noBatchim"
            },
            {
              "ch": "비",
              "relation": "noBatchim"
            }
          ],
          "missHint": "받침이 시옷 인 글자를 찾아요."
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
          "target": "옷",
          "locked": [
            "cho"
          ],
          "at": 525,
          "prompt": "첫 자음은 넣어 두었어요. 나머지를 채워 주세요!",
          "decoys": [
            {
              "jamo": "ㅈ",
              "relation": "strokeAdd"
            },
            {
              "jamo": "ㅊ",
              "relation": "strokeAdd"
            },
            {
              "jamo": "ㅁ",
              "relation": "shape"
            }
          ]
        },
        {
          "target": "옷",
          "prompt": "'옷' 을 처음부터 만들어 보세요.",
          "decoys": [
            {
              "jamo": "ㅈ",
              "relation": "strokeAdd"
            },
            {
              "jamo": "ㅊ",
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
          "target": "옷",
          "broken": "오",
          "prompt": "받침이 사라졌어요! 소리 내어 읽어 보고 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㄷ",
              "relation": "soundSpellMismatch"
            },
            {
              "jamo": "ㅈ",
              "relation": "soundSpellMismatch"
            },
            {
              "jamo": "ㄴ",
              "relation": "nasalSwap"
            }
          ]
        },
        {
          "target": "옷",
          "broken": "옫",
          "prompt": "옫? 소리가 이상해요! 어디가 잘못됐을까요?",
          "tray": [
            {
              "jamo": "ㄷ",
              "relation": "soundSpellMismatch"
            },
            {
              "jamo": "ㅈ",
              "relation": "soundSpellMismatch"
            },
            {
              "jamo": "ㄴ",
              "relation": "nasalSwap"
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
      "prompt": "받침 시옷 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "옷",
          "pic": "👕"
        },
        {
          "word": "붓",
          "pic": "🖌️"
        },
        {
          "word": "빗",
          "pic": "🪮"
        },
        {
          "word": "약",
          "pic": "💊"
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
          "target": "ㅅ",
          "kind": "jamo",
          "position": "jong",
          "prompt": "받침 시옷 을 따라 써 보세요"
        },
        {
          "target": "오",
          "kind": "syllable",
          "prompt": "먼저 '오' 를 따라 써 보세요",
          "note": "받침이 없는 글자예요."
        },
        {
          "target": "옷",
          "kind": "syllable",
          "prompt": "이제 '옷' 을 따라 써 보세요",
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
      "at": 90,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 110,
          "caption": "유치원에 가려고 정음이가 좋아하는 옷을 골랐어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 233,
          "caption": "좋아하는 옷을 몽땅 겹쳐 입어 버렸어요. '옷' 을 쓸 줄 몰랐어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 263,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 337,
          "caption": "울타리 에서 이응 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "울타리",
            "emoji": "🚧",
            "jamo": "ㅇ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 465,
          "caption": "받침 시옷 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "jamo": "ㅅ"
          }
        },
        {
          "order": 6,
          "at": 525,
          "caption": "자판기에 넣으니 옷 이 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 7,
          "at": 593,
          "caption": "할아버지와 '옷' 을 소리 내어 읽었어요.",
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
