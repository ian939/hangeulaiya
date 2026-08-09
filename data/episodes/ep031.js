/* 31화 「부엌」 — 받침 ㅋ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep031.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 31,
  "title": "부엌",
  "videoId": "F84QcxzuNOI",
  "objective": "받침 'ㅋ'을 인식한다.",
  "focus": "받침 ㅋ",
  "jamo": {
    "new": [
      "받침 ㅋ"
    ]
  },
  "targetWords": [
    "부엌"
  ],
  "rewards": {
    "cards": [
      "받침 ㅋ"
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
          "q": "비읍 은 어디에서 찾았나요?",
          "at": 289,
          "options": [
            {
              "label": "배드민턴",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "배드민턴",
                "emoji": "🏸"
              },
              "correct": true
            },
            {
              "label": "요구르트",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "요구르트",
                "emoji": "🥛"
              }
            },
            {
              "label": "새벽녘",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "새벽녘",
                "emoji": "🌄"
              }
            }
          ]
        },
        {
          "q": "받침 키읔 은 어디에서 찾았나요?",
          "at": 529,
          "options": [
            {
              "label": "새벽녘",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "새벽녘",
                "emoji": "🌄"
              },
              "correct": true
            },
            {
              "label": "배드민턴",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "배드민턴",
                "emoji": "🏸"
              }
            },
            {
              "label": "요구르트",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "요구르트",
                "emoji": "🥛"
              }
            }
          ]
        },
        {
          "q": "자판기에서 무엇이 나왔나요?",
          "at": 606,
          "options": [
            {
              "label": "이름표",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "이름표"
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
          "say": "엌",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "끝에서 입이 닫히는 소리가 있나요?",
          "options": [
            {
              "label": "엌",
              "correct": true
            },
            {
              "label": "어",
              "relation": "noBatchim",
              "why": "받침이 없는 소리예요. 다시 들어볼까?"
            }
          ]
        },
        {
          "say": "어",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "어",
              "correct": true
            },
            {
              "label": "엌",
              "relation": "noBatchim"
            }
          ]
        },
        {
          "say": "엌",
          "prompt": "받침 소리를 잘 듣고 골라요",
          "hint": "받침마다 입과 혀가 다른 자리에서 막혀요",
          "options": [
            {
              "label": "엌",
              "correct": true
            },
            {
              "label": "억",
              "relation": "soundSpellMismatch"
            },
            {
              "label": "엉",
              "relation": "nasalSwap"
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
          "target": "ㅋ",
          "position": "jong",
          "cols": 4,
          "targetCount": 4,
          "prompt": "받침 키읔 을 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㄱ",
              "relation": "strokeAdd",
              "count": 3
            },
            {
              "jamo": "ㅌ",
              "relation": "shape",
              "count": 3
            },
            {
              "jamo": "ㅊ",
              "relation": "shape",
              "count": 3
            }
          ],
          "missHint": "이건 키읔 이 아니에요. 모양을 다시 보세요."
        },
        {
          "cols": 4,
          "showTarget": false,
          "target": "ㅋ",
          "position": "jong",
          "prompt": "받침 키읔 이 있는 글자를 모두 찾아 눌러 보세요",
          "cells": [
            {
              "ch": "엌",
              "hit": true
            },
            {
              "ch": "어",
              "relation": "noBatchim"
            },
            {
              "ch": "억",
              "relation": "soundSpellMismatch"
            },
            {
              "ch": "엉",
              "relation": "nasalSwap"
            }
          ],
          "missHint": "받침이 키읔 인 글자를 찾아요."
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
          "target": "엌",
          "locked": [
            "cho"
          ],
          "at": 606,
          "prompt": "첫 자음은 넣어 두었어요. 나머지를 채워 주세요!",
          "decoys": [
            {
              "jamo": "ㄱ",
              "relation": "strokeAdd"
            },
            {
              "jamo": "ㅌ",
              "relation": "shape"
            },
            {
              "jamo": "ㅊ",
              "relation": "shape"
            }
          ]
        },
        {
          "target": "부엌",
          "locked": [
            "0:cho",
            "1:cho"
          ],
          "prompt": "'부엌' 전체를 만들어 보세요. 첫 자음은 넣어 두었어요.",
          "decoys": [
            {
              "jamo": "ㄱ",
              "relation": "strokeAdd"
            },
            {
              "jamo": "ㅌ",
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
          "target": "부엌",
          "broken": "부어",
          "prompt": "받침이 사라졌어요! 소리 내어 읽어 보고 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㄱ",
              "relation": "soundSpellMismatch"
            },
            {
              "jamo": "ㅇ",
              "relation": "nasalSwap"
            }
          ]
        },
        {
          "target": "부엌",
          "broken": "부억",
          "prompt": "부억? 소리가 이상해요! 어디가 잘못됐을까요?",
          "tray": [
            {
              "jamo": "ㄱ",
              "relation": "soundSpellMismatch"
            },
            {
              "jamo": "ㅇ",
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
      "prompt": "받침 키읔 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "부엌",
          "pic": "🍳"
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
          "target": "ㅋ",
          "kind": "jamo",
          "position": "jong",
          "prompt": "받침 키읔 을 따라 써 보세요"
        },
        {
          "target": "어",
          "kind": "syllable",
          "prompt": "먼저 '어' 를 따라 써 보세요",
          "note": "받침이 없는 글자예요."
        },
        {
          "target": "엌",
          "kind": "syllable",
          "prompt": "이제 '엌' 을 따라 써 보세요",
          "note": "받침이 들어가면서 위의 글자가 조금 눌려요. 방금 쓴 것과 비교해 보세요!"
        },
        {
          "target": "부엌",
          "kind": "word",
          "prompt": "'부엌' 을 따라 써 보세요",
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
      "at": 87,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 107,
          "caption": "훈민이와 정음이가 한쪽을 부엌으로 정하고 요리 놀이를 했어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 178,
          "caption": "'부엌' 이라고 크게 써 두려는데 글자가 어려웠어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 208,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 289,
          "caption": "배드민턴 에서 비읍 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "배드민턴",
            "emoji": "🏸",
            "jamo": "ㅂ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 384,
          "caption": "요구르트 에서 이응 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "요구르트",
            "emoji": "🥛",
            "jamo": "ㅇ",
            "position": "cho"
          }
        },
        {
          "order": 6,
          "at": 529,
          "caption": "새벽녘 에서 받침 키읔 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "새벽녘",
            "emoji": "🌄",
            "jamo": "ㅋ",
            "position": "jong"
          }
        },
        {
          "order": 7,
          "at": 606,
          "caption": "자판기에 넣으니 이름표 이 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 8,
          "at": 614,
          "caption": "할아버지와 '부엌' 을 소리 내어 읽었어요.",
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
