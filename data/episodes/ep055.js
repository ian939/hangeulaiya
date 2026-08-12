/* 55화 「읽다」 — 겹받침 ㄺ — 쓰는 것과 소리가 달라요 [익따]
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep055.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 55,
  "title": "읽다",
  "videoId": "Q09evaN3F3M",
  "objective": "받침 'ㄺ'을 인식한다.",
  "focus": "겹받침 ㄺ — 쓰는 것과 소리가 달라요 [익따]",
  "jamo": {
    "new": [
      "받침 ㄺ"
    ],
    "seen": [
      "ㄷ",
      "ㅇ",
      "ㅏ",
      "ㅣ"
    ]
  },
  "targetWords": [
    "읽다"
  ],
  "rewards": {
    "cards": [
      "받침 ㄺ"
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
          "at": 389,
          "options": [
            {
              "label": "오이",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "오이",
                "emoji": "🥒"
              },
              "correct": true
            },
            {
              "label": "문구점",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "문구점",
                "emoji": "🏪"
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
          "q": "받침 리을기역은 어디에서 찾았나요?",
          "at": 572,
          "options": [
            {
              "label": "문구점",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "문구점",
                "emoji": "🏪"
              },
              "correct": true
            },
            {
              "label": "오이",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "오이",
                "emoji": "🥒"
              }
            }
          ]
        },
        {
          "q": "자판기에서 무엇이 나왔나요?",
          "at": 641,
          "options": [
            {
              "label": "물감",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "물감"
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
          "say": "읽다",
          "prompt": "[익따] 이라고 들렸어요. 어떻게 쓸까요?",
          "hint": "받침이 두 글자인데 소리는 기역 하나만 나요",
          "options": [
            {
              "label": "읽",
              "correct": true
            },
            {
              "label": "익",
              "relation": "clusterPart",
              "why": "소리는 같지만 받침이 하나뿐이에요. 두 글자를 써야 해요!"
            }
          ],
          "after": "받침 두 글자 중 기역 만 소리가 나요. 그래도 두 글자를 써요!"
        },
        {
          "say": "읽다",
          "prompt": "받침 두 글자 중 어느 소리가 들리나요?",
          "options": [
            {
              "label": "ㄱ",
              "correct": true
            },
            {
              "label": "ㄹ",
              "relation": "clusterPart"
            }
          ],
          "after": "기역 소리가 나요."
        },
        {
          "say": "읽",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "읽",
              "correct": true
            },
            {
              "label": "이",
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
          "target": "ㄺ",
          "position": "jong",
          "cols": 4,
          "targetCount": 4,
          "prompt": "받침 리을기역을 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㄹ",
              "relation": "clusterPart",
              "count": 3
            },
            {
              "jamo": "ㄱ",
              "relation": "clusterPart",
              "count": 3
            }
          ],
          "missHint": "이건 리을기역이 아니에요. 모양을 다시 보세요."
        },
        {
          "cols": 4,
          "showTarget": false,
          "target": "ㄺ",
          "position": "jong",
          "prompt": "받침 리을기역이 있는 글자를 모두 찾아 눌러 보세요",
          "cells": [
            {
              "ch": "읽",
              "hit": true
            },
            {
              "ch": "맑",
              "hit": true
            },
            {
              "ch": "이",
              "relation": "noBatchim"
            },
            {
              "ch": "마",
              "relation": "noBatchim"
            }
          ],
          "missHint": "받침이 리을기역 인 글자를 찾아요."
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
          "target": "읽",
          "locked": [
            "cho"
          ],
          "at": 641,
          "prompt": "첫 자음은 넣어 두었어요. 나머지를 채워 주세요!",
          "decoys": [
            {
              "jamo": "ㄹ",
              "relation": "clusterPart"
            },
            {
              "jamo": "ㄱ",
              "relation": "clusterPart"
            }
          ]
        },
        {
          "target": "읽다",
          "locked": [
            "0:cho",
            "1:cho"
          ],
          "prompt": "'읽다' 전체를 만들어 보세요. 첫 자음은 넣어 두었어요.",
          "decoys": [
            {
              "jamo": "ㄹ",
              "relation": "clusterPart"
            },
            {
              "jamo": "ㄱ",
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
          "target": "읽다",
          "broken": "이다",
          "prompt": "받침이 사라졌어요! 소리 내어 읽어 보고 고쳐 주세요.",
          "tray": []
        },
        {
          "target": "읽다",
          "broken": "익다",
          "prompt": "소리는 맞는데 받침을 하나만 썼어요. 두 글자로 고쳐 주세요!",
          "tray": [
            {
              "jamo": "ㄹ",
              "relation": "clusterPart"
            },
            {
              "jamo": "ㄱ",
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
      "prompt": "받침 리을기역 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "읽다",
          "pic": "📖"
        },
        {
          "word": "맑다",
          "pic": "☀️"
        },
        {
          "word": "굵다",
          "pic": {
            "kind": "text",
            "value": "굵다"
          }
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
          "target": "ㄺ",
          "kind": "jamo",
          "position": "jong",
          "prompt": "받침 리을기역을 따라 써 보세요"
        },
        {
          "target": "이",
          "kind": "syllable",
          "prompt": "먼저 '이' 를 따라 써 보세요",
          "note": "받침이 없는 글자예요."
        },
        {
          "target": "읽",
          "kind": "syllable",
          "prompt": "이제 '읽' 을 따라 써 보세요",
          "note": "받침이 들어가면서 위의 글자가 조금 눌려요. 방금 쓴 것과 비교해 보세요!"
        },
        {
          "target": "읽다",
          "kind": "word",
          "prompt": "'읽다' 을 따라 써 보세요",
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
      "at": 179,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 199,
          "caption": "글자 읽기가 재미있어서 훈민이와 정음이가 그림책을 펴 봤어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 242,
          "caption": "책의 글씨가 잘 안 보여서 읽을 수 없었어요. '읽다' 를 쓸 줄 몰랐어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 272,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 389,
          "caption": "오이 에서 이응을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "오이",
            "emoji": "🥒",
            "jamo": "ㅇ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 572,
          "caption": "문구점 에서 받침 리을기역을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "문구점",
            "emoji": "🏪",
            "jamo": "ㄺ",
            "position": "jong"
          }
        },
        {
          "order": 6,
          "at": 641,
          "caption": "자판기에 넣으니 물감이 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 7,
          "at": 677,
          "caption": "할아버지와 '읽다' 을 소리 내어 읽었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "grandpa"
          }
        }
      ]
    }
  ],
  "pronunciation": "익따"
}
  );
})(window.AIYA);
