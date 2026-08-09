/* 52화 「있다」 — 겹받침 ㅆ — 쓰는 것과 소리가 달라요 [읻따]
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep052.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 52,
  "title": "있다",
  "videoId": "vIrC6Ssda1U",
  "objective": "받침 'ㅆ'을 인식한다.",
  "focus": "겹받침 ㅆ — 쓰는 것과 소리가 달라요 [읻따]",
  "jamo": {
    "new": [
      "받침 ㅆ"
    ]
  },
  "targetWords": [
    "있다"
  ],
  "rewards": {
    "cards": [
      "받침 ㅆ"
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
          "at": 366,
          "options": [
            {
              "label": "용",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "용",
                "emoji": "🐉"
              },
              "correct": true
            },
            {
              "label": "쓰레기통",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "쓰레기통",
                "emoji": "🗑️"
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
          "q": "받침 쌍시옷 은 어디에서 찾았나요?",
          "at": 517,
          "options": [
            {
              "label": "쓰레기통",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "쓰레기통",
                "emoji": "🗑️"
              },
              "correct": true
            },
            {
              "label": "용",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "용",
                "emoji": "🐉"
              }
            }
          ]
        },
        {
          "q": "자판기에서 무엇이 나왔나요?",
          "at": 584,
          "options": [
            {
              "label": "찾아 주는 도우미",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "찾아 주는 도우미"
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
          "say": "있다",
          "prompt": "[읻따] 이라고 들렸어요. 어떻게 쓸까요?",
          "hint": "받침이 두 글자인데 소리는 디귿 하나만 나요",
          "options": [
            {
              "label": "있",
              "correct": true
            },
            {
              "label": "읻",
              "relation": "clusterPart",
              "why": "소리는 같지만 받침이 하나뿐이에요. 두 글자를 써야 해요!"
            }
          ],
          "after": "받침 두 글자 중 디귿 만 소리가 나요. 그래도 두 글자를 써요!"
        },
        {
          "say": "있다",
          "prompt": "받침 두 글자 중 어느 소리가 들리나요?",
          "options": [
            {
              "label": "ㄷ",
              "correct": true
            },
            {
              "label": "ㅅ",
              "relation": "clusterPart"
            },
            {
              "label": "ㅅ",
              "relation": "clusterPart"
            }
          ],
          "after": "디귿 소리가 나요."
        },
        {
          "say": "있",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "있",
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
          "target": "ㅆ",
          "position": "jong",
          "cols": 4,
          "targetCount": 4,
          "prompt": "받침 쌍시옷 을 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㅅ",
              "relation": "clusterPart",
              "count": 3
            }
          ],
          "missHint": "이건 쌍시옷 이 아니에요. 모양을 다시 보세요."
        },
        {
          "cols": 4,
          "showTarget": false,
          "target": "ㅆ",
          "position": "jong",
          "prompt": "받침 쌍시옷 이 있는 글자를 모두 찾아 눌러 보세요",
          "cells": [
            {
              "ch": "있",
              "hit": true
            },
            {
              "ch": "왔",
              "hit": true
            },
            {
              "ch": "이",
              "relation": "noBatchim"
            },
            {
              "ch": "와",
              "relation": "noBatchim"
            }
          ],
          "missHint": "받침이 쌍시옷 인 글자를 찾아요."
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
          "target": "있",
          "locked": [
            "cho"
          ],
          "at": 584,
          "prompt": "첫 자음은 넣어 두었어요. 나머지를 채워 주세요!",
          "decoys": [
            {
              "jamo": "ㅅ",
              "relation": "clusterPart"
            }
          ]
        },
        {
          "target": "있다",
          "locked": [
            "0:cho",
            "1:cho"
          ],
          "prompt": "'있다' 전체를 만들어 보세요. 첫 자음은 넣어 두었어요.",
          "decoys": [
            {
              "jamo": "ㅅ",
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
          "target": "있다",
          "broken": "이다",
          "prompt": "받침이 사라졌어요! 소리 내어 읽어 보고 고쳐 주세요.",
          "tray": []
        },
        {
          "target": "있다",
          "broken": "읻다",
          "prompt": "소리는 맞는데 받침을 하나만 썼어요. 두 글자로 고쳐 주세요!",
          "tray": [
            {
              "jamo": "ㅅ",
              "relation": "clusterPart"
            },
            {
              "jamo": "ㅅ",
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
      "prompt": "받침 쌍시옷 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "있다",
          "pic": "🙋"
        },
        {
          "word": "왔다",
          "pic": "🚶"
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
          "target": "ㅆ",
          "kind": "jamo",
          "position": "jong",
          "prompt": "받침 쌍시옷 을 따라 써 보세요"
        },
        {
          "target": "이",
          "kind": "syllable",
          "prompt": "먼저 '이' 를 따라 써 보세요",
          "note": "받침이 없는 글자예요."
        },
        {
          "target": "있",
          "kind": "syllable",
          "prompt": "이제 '있' 을 따라 써 보세요",
          "note": "받침이 들어가면서 위의 글자가 조금 눌려요. 방금 쓴 것과 비교해 보세요!"
        },
        {
          "target": "있다",
          "kind": "word",
          "prompt": "'있다' 을 따라 써 보세요",
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
      "at": 85,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 105,
          "caption": "훈민이가 숨긴 물건을 정음이가 하나씩 찾는 놀이를 했어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 209,
          "caption": "마지막 물건이 너무 작아서 안 보였어요. '있다' 의 받침을 쓸 줄 몰랐어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 239,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 366,
          "caption": "용 에서 이응 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "용",
            "emoji": "🐉",
            "jamo": "ㅇ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 517,
          "caption": "쓰레기통 에서 받침 쌍시옷 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "쓰레기통",
            "emoji": "🗑️",
            "jamo": "ㅆ",
            "position": "jong"
          }
        },
        {
          "order": 6,
          "at": 584,
          "caption": "자판기에 넣으니 찾아 주는 도우미 이 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 7,
          "at": 646,
          "caption": "할아버지와 '있다' 을 소리 내어 읽었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "grandpa"
          }
        }
      ]
    }
  ],
  "pronunciation": "읻따"
}
  );
})(window.AIYA);
