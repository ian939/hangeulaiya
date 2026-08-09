/* 60화 「없다」 — 겹받침 ㅄ — 쓰는 것과 소리가 달라요 [업따]
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep060.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 60,
  "title": "없다",
  "videoId": "a-nXTK-oYuU",
  "objective": "받침 ㅄ'을 인식한다.",
  "focus": "겹받침 ㅄ — 쓰는 것과 소리가 달라요 [업따]",
  "jamo": {
    "new": [
      "받침 ㅄ"
    ],
    "seen": [
      "ㄷ",
      "ㅇ",
      "ㅏ",
      "ㅓ"
    ]
  },
  "targetWords": [
    "없다"
  ],
  "rewards": {
    "cards": [
      "받침 ㅄ"
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
          "at": 394,
          "options": [
            {
              "label": "앵무새",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "앵무새",
                "emoji": "🦜"
              },
              "correct": true
            },
            {
              "label": "밥상",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "밥상",
                "emoji": "🍚"
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
          "q": "받침 비읍시옷 은 어디에서 찾았나요?",
          "at": 582,
          "options": [
            {
              "label": "밥상",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "밥상",
                "emoji": "🍚"
              },
              "correct": true
            },
            {
              "label": "앵무새",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "앵무새",
                "emoji": "🦜"
              }
            }
          ]
        },
        {
          "q": "자판기에서 무엇이 나왔나요?",
          "at": 661,
          "options": [
            {
              "label": "마술 보자기",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "마술 보자기"
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
          "say": "없다",
          "prompt": "[업따] 이라고 들렸어요. 어떻게 쓸까요?",
          "hint": "받침이 두 글자인데 소리는 비읍 하나만 나요",
          "options": [
            {
              "label": "없",
              "correct": true
            },
            {
              "label": "업",
              "relation": "clusterPart",
              "why": "소리는 같지만 받침이 하나뿐이에요. 두 글자를 써야 해요!"
            }
          ],
          "after": "받침 두 글자 중 비읍 만 소리가 나요. 그래도 두 글자를 써요!"
        },
        {
          "say": "없다",
          "prompt": "받침 두 글자 중 어느 소리가 들리나요?",
          "options": [
            {
              "label": "ㅂ",
              "correct": true
            },
            {
              "label": "ㅅ",
              "relation": "clusterPart"
            }
          ],
          "after": "비읍 소리가 나요."
        },
        {
          "say": "없",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "없",
              "correct": true
            },
            {
              "label": "어",
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
          "target": "ㅄ",
          "position": "jong",
          "cols": 4,
          "targetCount": 4,
          "prompt": "받침 비읍시옷 을 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㅂ",
              "relation": "clusterPart",
              "count": 3
            },
            {
              "jamo": "ㅅ",
              "relation": "clusterPart",
              "count": 3
            }
          ],
          "missHint": "이건 비읍시옷 이 아니에요. 모양을 다시 보세요."
        },
        {
          "cols": 4,
          "showTarget": false,
          "target": "ㅄ",
          "position": "jong",
          "prompt": "받침 비읍시옷 이 있는 글자를 모두 찾아 눌러 보세요",
          "cells": [
            {
              "ch": "없",
              "hit": true
            },
            {
              "ch": "값",
              "hit": true
            },
            {
              "ch": "어",
              "relation": "noBatchim"
            },
            {
              "ch": "가",
              "relation": "noBatchim"
            }
          ],
          "missHint": "받침이 비읍시옷 인 글자를 찾아요."
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
          "target": "없",
          "locked": [
            "cho"
          ],
          "at": 661,
          "prompt": "첫 자음은 넣어 두었어요. 나머지를 채워 주세요!",
          "decoys": [
            {
              "jamo": "ㅂ",
              "relation": "clusterPart"
            },
            {
              "jamo": "ㅅ",
              "relation": "clusterPart"
            }
          ]
        },
        {
          "target": "없다",
          "locked": [
            "0:cho",
            "1:cho"
          ],
          "prompt": "'없다' 전체를 만들어 보세요. 첫 자음은 넣어 두었어요.",
          "decoys": [
            {
              "jamo": "ㅂ",
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
      "type": "chunji",
      "id": "I",
      "title": "사라진 글자",
      "courses": [
        "full"
      ],
      "items": [
        {
          "target": "없다",
          "broken": "어다",
          "prompt": "받침이 사라졌어요! 소리 내어 읽어 보고 고쳐 주세요.",
          "tray": []
        },
        {
          "target": "없다",
          "broken": "업다",
          "prompt": "소리는 맞는데 받침을 하나만 썼어요. 두 글자로 고쳐 주세요!",
          "tray": [
            {
              "jamo": "ㅂ",
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
      "prompt": "받침 비읍시옷 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "없다",
          "pic": "🫥"
        },
        {
          "word": "값",
          "pic": "🏷️"
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
          "target": "ㅄ",
          "kind": "jamo",
          "position": "jong",
          "prompt": "받침 비읍시옷 을 따라 써 보세요"
        },
        {
          "target": "어",
          "kind": "syllable",
          "prompt": "먼저 '어' 를 따라 써 보세요",
          "note": "받침이 없는 글자예요."
        },
        {
          "target": "없",
          "kind": "syllable",
          "prompt": "이제 '없' 을 따라 써 보세요",
          "note": "받침이 들어가면서 위의 글자가 조금 눌려요. 방금 쓴 것과 비교해 보세요!"
        },
        {
          "target": "없다",
          "kind": "word",
          "prompt": "'없다' 을 따라 써 보세요",
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
          "caption": "정음이가 마술사가 되어 모자와 인형을 하나씩 사라지게 했어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 260,
          "caption": "훈민이도 해보고 싶은데 '없다' 를 쓸 줄 몰랐어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 290,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 394,
          "caption": "앵무새 에서 이응 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "앵무새",
            "emoji": "🦜",
            "jamo": "ㅇ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 582,
          "caption": "밥상 에서 받침 비읍시옷 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "밥상",
            "emoji": "🍚",
            "jamo": "ㅄ",
            "position": "jong"
          }
        },
        {
          "order": 6,
          "at": 661,
          "caption": "자판기에 넣으니 마술 보자기 이 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 7,
          "at": 685,
          "caption": "할아버지와 '없다' 을 소리 내어 읽었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "grandpa"
          }
        }
      ]
    }
  ],
  "pronunciation": "업따"
}
  );
})(window.AIYA);
