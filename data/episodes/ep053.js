/* 53화 「앉다」 — 겹받침 ㄵ — 쓰는 것과 소리가 달라요 [안따]
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep053.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 53,
  "title": "앉다",
  "videoId": "vOv5l5wLoiY",
  "objective": "받침 'ㄵ'을 인식한다.",
  "focus": "겹받침 ㄵ — 쓰는 것과 소리가 달라요 [안따]",
  "jamo": {
    "new": [
      "받침 ㄵ"
    ],
    "seen": [
      "ㄷ",
      "ㅇ",
      "ㅏ"
    ]
  },
  "targetWords": [
    "앉다"
  ],
  "rewards": {
    "cards": [
      "받침 ㄵ"
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
          "q": "이응은 어디에서 찾았나요?",
          "at": 328,
          "options": [
            {
              "label": "운동장",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "운동장",
                "emoji": "🏟️"
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
          "at": 642,
          "options": [
            {
              "label": "강아지 간식",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "강아지 간식"
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
          "say": "앉다",
          "prompt": "[안따] 이라고 들렸어요. 어떻게 쓸까요?",
          "hint": "받침이 두 글자인데 소리는 니은 하나만 나요",
          "options": [
            {
              "label": "앉",
              "correct": true
            },
            {
              "label": "안",
              "relation": "clusterPart",
              "why": "소리는 같지만 받침이 하나뿐이에요. 두 글자를 써야 해요!"
            }
          ],
          "after": "받침 두 글자 중 니은 만 소리가 나요. 그래도 두 글자를 써요!"
        },
        {
          "say": "앉다",
          "prompt": "받침 두 글자 중 어느 소리가 들리나요?",
          "options": [
            {
              "label": "ㄴ",
              "correct": true
            },
            {
              "label": "ㅈ",
              "relation": "clusterPart"
            }
          ],
          "after": "니은 소리가 나요."
        },
        {
          "say": "앉",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "앉",
              "correct": true
            },
            {
              "label": "아",
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
          "target": "ㄵ",
          "position": "jong",
          "cols": 4,
          "targetCount": 4,
          "prompt": "받침 니은지읒을 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㄴ",
              "relation": "clusterPart",
              "count": 3
            },
            {
              "jamo": "ㅈ",
              "relation": "clusterPart",
              "count": 3
            }
          ],
          "missHint": "이건 니은지읒이 아니에요. 모양을 다시 보세요."
        },
        {
          "cols": 4,
          "showTarget": false,
          "target": "ㄵ",
          "position": "jong",
          "prompt": "받침 니은지읒이 있는 글자를 모두 찾아 눌러 보세요",
          "cells": [
            {
              "ch": "앉",
              "hit": true
            },
            {
              "ch": "아",
              "relation": "noBatchim"
            }
          ],
          "missHint": "받침이 니은지읒 인 글자를 찾아요."
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
          "target": "앉",
          "locked": [
            "cho"
          ],
          "at": 642,
          "prompt": "첫 자음은 넣어 두었어요. 나머지를 채워 주세요!",
          "decoys": [
            {
              "jamo": "ㄴ",
              "relation": "clusterPart"
            },
            {
              "jamo": "ㅈ",
              "relation": "clusterPart"
            }
          ]
        },
        {
          "target": "앉다",
          "locked": [
            "0:cho",
            "1:cho"
          ],
          "prompt": "'앉다' 전체를 만들어 보세요. 첫 자음은 넣어 두었어요.",
          "decoys": [
            {
              "jamo": "ㄴ",
              "relation": "clusterPart"
            },
            {
              "jamo": "ㅈ",
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
          "target": "앉다",
          "broken": "아다",
          "prompt": "받침이 사라졌어요! 소리 내어 읽어 보고 고쳐 주세요.",
          "tray": []
        },
        {
          "target": "앉다",
          "broken": "안다",
          "prompt": "소리는 맞는데 받침을 하나만 썼어요. 두 글자로 고쳐 주세요!",
          "tray": [
            {
              "jamo": "ㄴ",
              "relation": "clusterPart"
            },
            {
              "jamo": "ㅈ",
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
      "prompt": "받침 니은지읒 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "앉다",
          "pic": "🪑"
        },
        {
          "word": "얹다",
          "pic": {
            "kind": "text",
            "value": "얹다"
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
          "target": "ㄵ",
          "kind": "jamo",
          "position": "jong",
          "prompt": "받침 니은지읒을 따라 써 보세요"
        },
        {
          "target": "아",
          "kind": "syllable",
          "prompt": "먼저 '아' 를 따라 써 보세요",
          "note": "받침이 없는 글자예요."
        },
        {
          "target": "앉",
          "kind": "syllable",
          "prompt": "이제 '앉' 을 따라 써 보세요",
          "note": "받침이 들어가면서 위의 글자가 조금 눌려요. 방금 쓴 것과 비교해 보세요!"
        },
        {
          "target": "앉다",
          "kind": "word",
          "prompt": "'앉다' 을 따라 써 보세요",
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
      "at": 98,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 118,
          "caption": "훈민이와 정음이가 앉아서 책을 보며 강아지도 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 185,
          "caption": "강아지가 앉지 않았어요. '앉다' 를 쓸 줄 몰랐어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 215,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 328,
          "caption": "운동장 에서 이응을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "운동장",
            "emoji": "🏟️",
            "jamo": "ㅇ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 565,
          "caption": "받침 니은지읒을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "jamo": "ㄵ"
          }
        },
        {
          "order": 6,
          "at": 642,
          "caption": "자판기에 넣으니 강아지 간식이 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 7,
          "at": 663,
          "caption": "할아버지와 '앉다' 을 소리 내어 읽었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "grandpa"
          }
        }
      ]
    }
  ],
  "pronunciation": "안따"
}
  );
})(window.AIYA);
