/* 32화 「팥」 — 받침 ㅌ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep032.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 32,
  "title": "팥",
  "videoId": "nHZJiv1fMw4",
  "objective": "받침 'ㅌ'을 인식한다.",
  "focus": "받침 ㅌ",
  "jamo": {
    "new": [
      "받침 ㅌ"
    ],
    "seen": [
      "ㅍ",
      "ㅏ"
    ]
  },
  "targetWords": [
    "팥"
  ],
  "rewards": {
    "cards": [
      "받침 ㅌ"
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
          "at": 361,
          "options": [
            {
              "label": "파도",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "파도",
                "emoji": "🌊"
              },
              "correct": true
            },
            {
              "label": "팥떡",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "팥떡",
                "emoji": "🍡"
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
          "q": "받침 티읕은 어디에서 찾았나요?",
          "at": 496,
          "options": [
            {
              "label": "팥떡",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "팥떡",
                "emoji": "🍡"
              },
              "correct": true
            },
            {
              "label": "파도",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "파도",
                "emoji": "🌊"
              }
            }
          ]
        },
        {
          "q": "자판기에서 무엇이 나왔나요?",
          "at": 560,
          "options": [
            {
              "label": "팥",
              "pic": "🫘",
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
          "say": "팥",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "끝에서 입이 닫히는 소리가 있나요?",
          "options": [
            {
              "label": "팥",
              "correct": true
            },
            {
              "label": "파",
              "relation": "noBatchim",
              "why": "받침이 없는 소리예요. 다시 들어볼까?"
            }
          ]
        },
        {
          "say": "파",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "파",
              "correct": true
            },
            {
              "label": "팥",
              "relation": "noBatchim"
            }
          ]
        },
        {
          "say": "팥",
          "prompt": "받침 소리를 잘 듣고 골라요",
          "hint": "받침마다 입과 혀가 다른 자리에서 막혀요",
          "options": [
            {
              "label": "팥",
              "correct": true
            },
            {
              "label": "팓",
              "relation": "soundSpellMismatch"
            },
            {
              "label": "팟",
              "relation": "soundSpellMismatch"
            }
          ]
        },
        {
          "say": "팥",
          "prompt": "소리가 같아요. 어떤 글자일까요?",
          "hint": "받침 ㄷ ㅅ ㅈ 은 소리가 똑같아요. 낱말을 떠올려 보세요!",
          "options": [
            {
              "label": "팥",
              "correct": true
            },
            {
              "label": "팓",
              "relation": "soundSpellMismatch"
            },
            {
              "label": "팟",
              "relation": "soundSpellMismatch"
            }
          ],
          "after": "소리가 같아도 낱말마다 쓰는 글자가 달라요."
        },
        {
          "say": "팥죽, 팥떡, 팔찌. 첫소리가 다른 낱말은 무엇인가요?",
          "prompt": "첫소리가 다른 낱말은 무엇인가요?",
          "at": 702,
          "options": [
            {
              "label": "팥죽",
              "correct": false,
              "relation": "stopSwap"
            },
            {
              "label": "팥떡",
              "correct": false,
              "relation": "stopSwap"
            },
            {
              "label": "팔찌",
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
          "target": "ㅌ",
          "position": "jong",
          "cols": 4,
          "targetCount": 4,
          "prompt": "받침 티읕을 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㄷ",
              "relation": "strokeAdd",
              "count": 3
            },
            {
              "jamo": "ㅋ",
              "relation": "shape",
              "count": 3
            },
            {
              "jamo": "ㄹ",
              "relation": "shape",
              "count": 3
            }
          ],
          "missHint": "이건 티읕이 아니에요. 모양을 다시 보세요."
        },
        {
          "cols": 4,
          "showTarget": false,
          "target": "ㅌ",
          "position": "jong",
          "prompt": "받침 티읕이 있는 글자를 모두 찾아 눌러 보세요",
          "cells": [
            {
              "ch": "팥",
              "hit": true
            },
            {
              "ch": "밭",
              "hit": true
            },
            {
              "ch": "파",
              "relation": "noBatchim"
            },
            {
              "ch": "팓",
              "relation": "soundSpellMismatch"
            },
            {
              "ch": "팟",
              "relation": "soundSpellMismatch"
            },
            {
              "ch": "바",
              "relation": "noBatchim"
            }
          ],
          "missHint": "받침이 티읕 인 글자를 찾아요."
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
          "target": "팥",
          "locked": [
            "cho"
          ],
          "at": 560,
          "prompt": "첫 자음은 넣어 두었어요. 나머지를 채워 주세요!",
          "decoys": [
            {
              "jamo": "ㄷ",
              "relation": "strokeAdd"
            },
            {
              "jamo": "ㅋ",
              "relation": "shape"
            },
            {
              "jamo": "ㄹ",
              "relation": "shape"
            }
          ]
        },
        {
          "target": "팥",
          "prompt": "'팥' 을 처음부터 만들어 보세요.",
          "decoys": [
            {
              "jamo": "ㄷ",
              "relation": "strokeAdd"
            },
            {
              "jamo": "ㅋ",
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
          "target": "팥",
          "broken": "파",
          "prompt": "받침이 사라졌어요! 소리 내어 읽어 보고 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㄷ",
              "relation": "soundSpellMismatch"
            },
            {
              "jamo": "ㅅ",
              "relation": "soundSpellMismatch"
            }
          ]
        },
        {
          "target": "팥",
          "broken": "팓",
          "prompt": "팓? 소리가 이상해요! 어디가 잘못됐을까요?",
          "tray": [
            {
              "jamo": "ㄷ",
              "relation": "soundSpellMismatch"
            },
            {
              "jamo": "ㅅ",
              "relation": "soundSpellMismatch"
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
      "prompt": "받침 티읕 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "팥",
          "pic": "🫘"
        },
        {
          "word": "밭",
          "pic": "🌾"
        },
        {
          "word": "약",
          "pic": "💊"
        },
        {
          "word": "국",
          "pic": "🍲"
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
          "target": "ㅌ",
          "kind": "jamo",
          "position": "jong",
          "prompt": "받침 티읕을 따라 써 보세요"
        },
        {
          "target": "파",
          "kind": "syllable",
          "prompt": "먼저 '파' 를 따라 써 보세요",
          "note": "받침이 없는 글자예요."
        },
        {
          "target": "팥",
          "kind": "syllable",
          "prompt": "이제 '팥' 을 따라 써 보세요",
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
      "at": 107,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 127,
          "caption": "할아버지가 끓여 주신 팥으로 팥빙수를 만들어 먹었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 244,
          "caption": "할아버지 것도 만들려는데 팥을 다 먹어 버렸어요. '팥' 을 쓸 줄 몰랐어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 274,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 361,
          "caption": "파도 에서 피읖을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "파도",
            "emoji": "🌊",
            "jamo": "ㅍ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 496,
          "caption": "팥떡 에서 받침 티읕을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "팥떡",
            "emoji": "🍡",
            "jamo": "ㅌ",
            "position": "jong"
          }
        },
        {
          "order": 6,
          "at": 560,
          "caption": "자판기에 넣으니 팥이 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 7,
          "at": 570,
          "caption": "할아버지와 '팥' 을 소리 내어 읽었어요.",
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
