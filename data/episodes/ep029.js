/* 29화 「낮」 — 받침 ㅈ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep029.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 29,
  "title": "낮",
  "videoId": "siY0jZ0EWIc",
  "objective": "받침 'ㅈ'을 인식한다.",
  "focus": "받침 ㅈ",
  "jamo": {
    "new": [
      "받침 ㅈ"
    ]
  },
  "targetWords": [
    "낮"
  ],
  "rewards": {
    "cards": [
      "받침 ㅈ"
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
          "at": 359,
          "options": [
            {
              "label": "냉장고",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "냉장고",
                "emoji": "🧊"
              },
              "correct": true
            },
            {
              "label": "젖소",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "젖소",
                "emoji": "🐄"
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
          "q": "받침 지읒 은 어디에서 찾았나요?",
          "at": 490,
          "options": [
            {
              "label": "젖소",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "젖소",
                "emoji": "🐄"
              },
              "correct": true
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
          "at": 578,
          "options": [
            {
              "label": "낮",
              "pic": "☀️",
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
          "say": "낮",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "끝에서 입이 닫히는 소리가 있나요?",
          "options": [
            {
              "label": "낮",
              "correct": true
            },
            {
              "label": "나",
              "relation": "noBatchim",
              "why": "받침이 없는 소리예요. 다시 들어볼까?"
            }
          ]
        },
        {
          "say": "나",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "나",
              "correct": true
            },
            {
              "label": "낮",
              "relation": "noBatchim"
            }
          ]
        },
        {
          "say": "낮",
          "prompt": "받침 소리를 잘 듣고 골라요",
          "hint": "받침마다 입과 혀가 다른 자리에서 막혀요",
          "options": [
            {
              "label": "낮",
              "correct": true
            },
            {
              "label": "낟",
              "relation": "soundSpellMismatch"
            },
            {
              "label": "낫",
              "relation": "soundSpellMismatch"
            }
          ]
        },
        {
          "say": "낮",
          "prompt": "소리가 같아요. 어떤 글자일까요?",
          "hint": "받침 ㄷ ㅅ ㅈ 은 소리가 똑같아요. 낱말을 떠올려 보세요!",
          "options": [
            {
              "label": "낮",
              "correct": true
            },
            {
              "label": "낟",
              "relation": "soundSpellMismatch"
            },
            {
              "label": "낫",
              "relation": "soundSpellMismatch"
            }
          ],
          "after": "소리가 같아도 낱말마다 쓰는 글자가 달라요."
        },
        {
          "say": "대낮, 밤낮, 맨날. 끝소리가 다른 낱말은 무엇인가요?",
          "prompt": "끝소리가 다른 낱말은 무엇인가요?",
          "at": 746,
          "options": [
            {
              "label": "대낮",
              "correct": false,
              "relation": "stopSwap"
            },
            {
              "label": "밤낮",
              "correct": false,
              "relation": "stopSwap"
            },
            {
              "label": "맨날",
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
          "target": "ㅈ",
          "position": "jong",
          "cols": 4,
          "targetCount": 4,
          "prompt": "받침 지읒 을 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㅅ",
              "relation": "strokeAdd",
              "count": 3
            },
            {
              "jamo": "ㅊ",
              "relation": "strokeAdd",
              "count": 3
            },
            {
              "jamo": "ㅇ",
              "relation": "shape",
              "count": 3
            }
          ],
          "missHint": "이건 지읒 이 아니에요. 모양을 다시 보세요."
        },
        {
          "cols": 4,
          "showTarget": false,
          "target": "ㅈ",
          "position": "jong",
          "prompt": "받침 지읒 이 있는 글자를 모두 찾아 눌러 보세요",
          "cells": [
            {
              "ch": "낮",
              "hit": true
            },
            {
              "ch": "나",
              "relation": "noBatchim"
            },
            {
              "ch": "낟",
              "relation": "soundSpellMismatch"
            },
            {
              "ch": "낫",
              "relation": "soundSpellMismatch"
            },
            {
              "ch": "낯",
              "relation": "soundSpellMismatch"
            }
          ],
          "missHint": "받침이 지읒 인 글자를 찾아요."
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
          "target": "낮",
          "locked": [
            "cho"
          ],
          "at": 578,
          "prompt": "첫 자음은 넣어 두었어요. 나머지를 채워 주세요!",
          "decoys": [
            {
              "jamo": "ㅅ",
              "relation": "strokeAdd"
            },
            {
              "jamo": "ㅊ",
              "relation": "strokeAdd"
            },
            {
              "jamo": "ㅇ",
              "relation": "shape"
            }
          ]
        },
        {
          "target": "낮",
          "prompt": "'낮' 을 처음부터 만들어 보세요.",
          "decoys": [
            {
              "jamo": "ㅅ",
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
          "target": "낮",
          "broken": "나",
          "prompt": "받침이 사라졌어요! 소리 내어 읽어 보고 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㄷ",
              "relation": "soundSpellMismatch"
            },
            {
              "jamo": "ㅅ",
              "relation": "soundSpellMismatch"
            },
            {
              "jamo": "ㅊ",
              "relation": "soundSpellMismatch"
            }
          ]
        },
        {
          "target": "낮",
          "broken": "낟",
          "prompt": "낟? 소리가 이상해요! 어디가 잘못됐을까요?",
          "tray": [
            {
              "jamo": "ㄷ",
              "relation": "soundSpellMismatch"
            },
            {
              "jamo": "ㅅ",
              "relation": "soundSpellMismatch"
            },
            {
              "jamo": "ㅊ",
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
      "prompt": "받침 지읒 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "낮",
          "pic": "☀️"
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
          "target": "ㅈ",
          "kind": "jamo",
          "position": "jong",
          "prompt": "받침 지읒 을 따라 써 보세요"
        },
        {
          "target": "나",
          "kind": "syllable",
          "prompt": "먼저 '나' 를 따라 써 보세요",
          "note": "받침이 없는 글자예요."
        },
        {
          "target": "낮",
          "kind": "syllable",
          "prompt": "이제 '낮' 을 따라 써 보세요",
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
      "at": 88,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 108,
          "caption": "잘 시간인데 훈민이와 정음이가 마당에서 더 놀고 싶었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 234,
          "caption": "밤이라 너무 어두워서 아무것도 안 보였어요. '낮' 을 쓸 줄 몰랐어요.",
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
          "at": 359,
          "caption": "냉장고 에서 니은 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "냉장고",
            "emoji": "🧊",
            "jamo": "ㄴ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 490,
          "caption": "젖소 에서 받침 지읒 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "젖소",
            "emoji": "🐄",
            "jamo": "ㅈ",
            "position": "jong"
          }
        },
        {
          "order": 6,
          "at": 578,
          "caption": "자판기에 넣으니 낮 이 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 7,
          "at": 608,
          "caption": "할아버지와 '낮' 을 소리 내어 읽었어요.",
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
