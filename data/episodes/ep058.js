/* 58화 「핥다」 — 겹받침 ㄾ — 쓰는 것과 소리가 달라요 [할따]
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep058.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 58,
  "title": "핥다",
  "videoId": "mSGH_1qztqs",
  "objective": "받침 'ㄾ'을 인식한다.",
  "focus": "겹받침 ㄾ — 쓰는 것과 소리가 달라요 [할따]",
  "jamo": {
    "new": [
      "받침 ㄾ"
    ],
    "seen": [
      "ㄷ",
      "ㅎ",
      "ㅏ"
    ]
  },
  "targetWords": [
    "핥다"
  ],
  "rewards": {
    "cards": [
      "받침 ㄾ"
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
          "q": "히읗 은 어디에서 찾았나요?",
          "at": 338,
          "options": [
            {
              "label": "호두",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "호두",
                "emoji": "🌰"
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
          "at": 578,
          "options": [
            {
              "label": "막대사탕",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "막대사탕"
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
          "say": "핥다",
          "prompt": "[할따] 이라고 들렸어요. 어떻게 쓸까요?",
          "hint": "받침이 두 글자인데 소리는 리을 하나만 나요",
          "options": [
            {
              "label": "핥",
              "correct": true
            },
            {
              "label": "할",
              "relation": "clusterPart",
              "why": "소리는 같지만 받침이 하나뿐이에요. 두 글자를 써야 해요!"
            }
          ],
          "after": "받침 두 글자 중 리을 만 소리가 나요. 그래도 두 글자를 써요!"
        },
        {
          "say": "핥다",
          "prompt": "받침 두 글자 중 어느 소리가 들리나요?",
          "options": [
            {
              "label": "ㄹ",
              "correct": true
            },
            {
              "label": "ㅌ",
              "relation": "clusterPart"
            }
          ],
          "after": "리을 소리가 나요."
        },
        {
          "say": "핥",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "핥",
              "correct": true
            },
            {
              "label": "하",
              "relation": "noBatchim"
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
          "target": "ㄾ",
          "position": "jong",
          "cols": 4,
          "targetCount": 4,
          "prompt": "받침 리을티읕 을 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㄹ",
              "relation": "clusterPart",
              "count": 3
            },
            {
              "jamo": "ㅌ",
              "relation": "clusterPart",
              "count": 3
            }
          ],
          "missHint": "이건 리을티읕 이 아니에요. 모양을 다시 보세요."
        },
        {
          "cols": 4,
          "showTarget": false,
          "target": "ㄾ",
          "position": "jong",
          "prompt": "받침 리을티읕 이 있는 글자를 모두 찾아 눌러 보세요",
          "cells": [
            {
              "ch": "핥",
              "hit": true
            },
            {
              "ch": "하",
              "relation": "noBatchim"
            }
          ],
          "missHint": "받침이 리을티읕 인 글자를 찾아요."
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
          "target": "핥",
          "locked": [
            "cho"
          ],
          "at": 578,
          "prompt": "첫 자음은 넣어 두었어요. 나머지를 채워 주세요!",
          "decoys": [
            {
              "jamo": "ㄹ",
              "relation": "clusterPart"
            },
            {
              "jamo": "ㅌ",
              "relation": "clusterPart"
            }
          ]
        },
        {
          "target": "핥다",
          "locked": [
            "0:cho",
            "1:cho"
          ],
          "prompt": "'핥다' 전체를 만들어 보세요. 첫 자음은 넣어 두었어요.",
          "decoys": [
            {
              "jamo": "ㄹ",
              "relation": "clusterPart"
            },
            {
              "jamo": "ㅌ",
              "relation": "clusterPart"
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
          "target": "핥다",
          "broken": "하다",
          "prompt": "받침이 사라졌어요! 소리 내어 읽어 보고 고쳐 주세요.",
          "tray": []
        },
        {
          "target": "핥다",
          "broken": "할다",
          "prompt": "소리는 맞는데 받침을 하나만 썼어요. 두 글자로 고쳐 주세요!",
          "tray": [
            {
              "jamo": "ㄹ",
              "relation": "clusterPart"
            },
            {
              "jamo": "ㅌ",
              "relation": "clusterPart"
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
      "prompt": "받침 리을티읕 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "핥다",
          "pic": "👅"
        },
        {
          "word": "훑다",
          "pic": {
            "kind": "text",
            "value": "훑다"
          }
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
      "toleranceEm": 0.15,
      "passScore": 0.57,
      "items": [
        {
          "target": "ㄾ",
          "kind": "jamo",
          "position": "jong",
          "prompt": "받침 리을티읕 을 따라 써 보세요"
        },
        {
          "target": "하",
          "kind": "syllable",
          "prompt": "먼저 '하' 를 따라 써 보세요",
          "note": "받침이 없는 글자예요."
        },
        {
          "target": "핥",
          "kind": "syllable",
          "prompt": "이제 '핥' 을 따라 써 보세요",
          "note": "받침이 들어가면서 위의 글자가 조금 눌려요. 방금 쓴 것과 비교해 보세요!"
        },
        {
          "target": "핥다",
          "kind": "word",
          "prompt": "'핥다' 을 따라 써 보세요",
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
          "caption": "훈민이와 정음이가 과자와 찰떡을 혀로 핥아 먹었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 184,
          "caption": "먹을 게 다 없어졌어요. '핥다' 는 너무 어려운 글자였어요.",
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
          "at": 338,
          "caption": "호두 에서 히읗 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "호두",
            "emoji": "🌰",
            "jamo": "ㅎ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 504,
          "caption": "받침 리을티읕 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "jamo": "ㄾ"
          }
        },
        {
          "order": 6,
          "at": 578,
          "caption": "자판기에 넣으니 막대사탕 이 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 7,
          "at": 590,
          "caption": "할아버지와 '핥다' 을 소리 내어 읽었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "grandpa"
          }
        }
      ]
    }
  ],
  "pronunciation": "할따"
}
  );
})(window.AIYA);
