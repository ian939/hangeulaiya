/* 57화 「짧다」 — 겹받침 ㄼ — 쓰는 것과 소리가 달라요 [짤따]
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep057.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 57,
  "title": "짧다",
  "videoId": "GY99rsVl5NE",
  "objective": "받침 'ㄼ'을 인식한다.",
  "focus": "겹받침 ㄼ — 쓰는 것과 소리가 달라요 [짤따]",
  "jamo": {
    "new": [
      "받침 ㄼ"
    ]
  },
  "targetWords": [
    "짧다"
  ],
  "rewards": {
    "cards": [
      "받침 ㄼ"
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
          "q": "쌍지읒 은 어디에서 찾았나요?",
          "at": 328,
          "options": [
            {
              "label": "쪽지",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "쪽지",
                "emoji": "📝"
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
          "at": 559,
          "options": [
            {
              "label": "짧은 줄넘기",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "짧은 줄넘기"
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
          "say": "짧다",
          "prompt": "[짤따] 이라고 들렸어요. 어떻게 쓸까요?",
          "hint": "받침이 두 글자인데 소리는 리을 하나만 나요",
          "options": [
            {
              "label": "짧",
              "correct": true
            },
            {
              "label": "짤",
              "relation": "clusterPart",
              "why": "소리는 같지만 받침이 하나뿐이에요. 두 글자를 써야 해요!"
            }
          ],
          "after": "받침 두 글자 중 리을 만 소리가 나요. 그래도 두 글자를 써요!"
        },
        {
          "say": "짧다",
          "prompt": "받침 두 글자 중 어느 소리가 들리나요?",
          "options": [
            {
              "label": "ㄹ",
              "correct": true
            },
            {
              "label": "ㅂ",
              "relation": "clusterPart"
            }
          ],
          "after": "리을 소리가 나요."
        },
        {
          "say": "짧",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "짧",
              "correct": true
            },
            {
              "label": "짜",
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
          "target": "ㄼ",
          "position": "jong",
          "cols": 4,
          "targetCount": 4,
          "prompt": "받침 리을비읍 을 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㄹ",
              "relation": "clusterPart",
              "count": 3
            },
            {
              "jamo": "ㅂ",
              "relation": "clusterPart",
              "count": 3
            }
          ],
          "missHint": "이건 리을비읍 이 아니에요. 모양을 다시 보세요."
        },
        {
          "cols": 4,
          "showTarget": false,
          "target": "ㄼ",
          "position": "jong",
          "prompt": "받침 리을비읍 이 있는 글자를 모두 찾아 눌러 보세요",
          "cells": [
            {
              "ch": "짧",
              "hit": true
            },
            {
              "ch": "넓",
              "hit": true
            },
            {
              "ch": "짜",
              "relation": "noBatchim"
            },
            {
              "ch": "너",
              "relation": "noBatchim"
            }
          ],
          "missHint": "받침이 리을비읍 인 글자를 찾아요."
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
          "target": "짧",
          "locked": [
            "cho"
          ],
          "at": 559,
          "prompt": "첫 자음은 넣어 두었어요. 나머지를 채워 주세요!",
          "decoys": [
            {
              "jamo": "ㄹ",
              "relation": "clusterPart"
            },
            {
              "jamo": "ㅂ",
              "relation": "clusterPart"
            }
          ]
        },
        {
          "target": "짧다",
          "locked": [
            "0:cho",
            "1:cho"
          ],
          "prompt": "'짧다' 전체를 만들어 보세요. 첫 자음은 넣어 두었어요.",
          "decoys": [
            {
              "jamo": "ㄹ",
              "relation": "clusterPart"
            },
            {
              "jamo": "ㅂ",
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
          "target": "짧다",
          "broken": "짜다",
          "prompt": "받침이 사라졌어요! 소리 내어 읽어 보고 고쳐 주세요.",
          "tray": []
        },
        {
          "target": "짧다",
          "broken": "짤다",
          "prompt": "소리는 맞는데 받침을 하나만 썼어요. 두 글자로 고쳐 주세요!",
          "tray": [
            {
              "jamo": "ㄹ",
              "relation": "clusterPart"
            },
            {
              "jamo": "ㅂ",
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
      "prompt": "받침 리을비읍 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "짧다",
          "pic": "📏"
        },
        {
          "word": "얇다",
          "pic": {
            "kind": "text",
            "value": "얇다"
          }
        },
        {
          "word": "넓다",
          "pic": "🟦"
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
      "toleranceEm": 0.15,
      "passScore": 0.57,
      "items": [
        {
          "target": "ㄼ",
          "kind": "jamo",
          "position": "jong",
          "prompt": "받침 리을비읍 을 따라 써 보세요"
        },
        {
          "target": "짜",
          "kind": "syllable",
          "prompt": "먼저 '짜' 를 따라 써 보세요",
          "note": "받침이 없는 글자예요."
        },
        {
          "target": "짧",
          "kind": "syllable",
          "prompt": "이제 '짧' 을 따라 써 보세요",
          "note": "받침이 들어가면서 위의 글자가 조금 눌려요. 방금 쓴 것과 비교해 보세요!"
        },
        {
          "target": "짧다",
          "kind": "word",
          "prompt": "'짧다' 을 따라 써 보세요",
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
      "at": 89,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 109,
          "caption": "훈민이와 정음이가 줄넘기를 하려고 줄을 들었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 145,
          "caption": "줄이 너무 길어서 잘 안 넘어갔어요. '짧다' 를 쓸 줄 몰랐어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 175,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 328,
          "caption": "쪽지 에서 쌍지읒 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "쪽지",
            "emoji": "📝",
            "jamo": "ㅉ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 559,
          "caption": "자판기에 넣으니 짧은 줄넘기 이 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 6,
          "at": 597,
          "caption": "할아버지와 '짧다' 을 소리 내어 읽었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "grandpa"
          }
        }
      ]
    }
  ],
  "pronunciation": "짤따"
}
  );
})(window.AIYA);
