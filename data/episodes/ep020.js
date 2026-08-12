/* 20화 「휴지」 — 자음 ㅎ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep020.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 *
 * 영상으로 확인이 필요한 항목: 퀴즈 종류(끝소리로 추정)
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 20,
  "title": "휴지",
  "videoId": "YBgQ-Hh7rfY",
  "objective": "자음 ''ㅎ''의 소리를 인식한다.",
  "focus": "자음 ㅎ",
  "jamo": {
    "new": [
      "ㅎ"
    ],
    "seen": [
      "ㅈ",
      "ㅠ",
      "ㅣ"
    ]
  },
  "targetWords": [
    "휴지"
  ],
  "rewards": {
    "cards": [
      "ㅎ"
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
          "q": "히읗은 어디에서 찾았나요?",
          "at": 393,
          "options": [
            {
              "label": "황소",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "황소"
              },
              "correct": true
            },
            {
              "label": "조개",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "조개"
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
          "q": "지읒은 어디에서 찾았나요?",
          "at": 488,
          "options": [
            {
              "label": "조개",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "조개"
              },
              "correct": true
            },
            {
              "label": "황소",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "황소"
              }
            }
          ]
        },
        {
          "q": "자판기에서 무엇이 나왔나요?",
          "at": 547,
          "options": [
            {
              "label": "깨끗한 휴지",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "깨끗한 휴지"
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
          "say": "휴",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "첫소리가 들리나요?",
          "options": [
            {
              "label": "휴",
              "correct": true
            },
            {
              "label": "유",
              "relation": "noOnset",
              "why": "첫소리가 없는 글자예요. 다시 들어볼까?"
            }
          ]
        },
        {
          "say": "유",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "유",
              "correct": true
            },
            {
              "label": "휴",
              "relation": "noOnset"
            }
          ]
        },
        {
          "say": "휴",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "첫소리가 무엇인지 들어 보세요",
          "options": [
            {
              "label": "휴",
              "correct": true
            },
            {
              "label": "유",
              "relation": "strokeAdd"
            },
            {
              "label": "츄",
              "relation": "shape"
            }
          ]
        },
        {
          "say": "히읗",
          "prompt": "이 소리는 어떤 글자일까요?",
          "options": [
            {
              "label": "ㅎ",
              "correct": true
            },
            {
              "label": "ㅇ",
              "relation": "strokeAdd"
            },
            {
              "label": "ㅊ",
              "relation": "shape"
            }
          ]
        },
        {
          "say": "휴지, 가지, 김치. 끝소리가 다른 낱말은 무엇인가요?",
          "prompt": "끝소리가 다른 낱말은 무엇인가요?",
          "at": 699,
          "options": [
            {
              "label": "휴지",
              "correct": false,
              "relation": "stopSwap"
            },
            {
              "label": "가지",
              "correct": false,
              "relation": "stopSwap"
            },
            {
              "label": "김치",
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
          "target": "ㅎ",
          "position": "cho",
          "cols": 4,
          "targetCount": 4,
          "prompt": "히읗을 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㅇ",
              "relation": "strokeAdd",
              "count": 3
            },
            {
              "jamo": "ㅊ",
              "relation": "shape",
              "count": 3
            },
            {
              "jamo": "ㅁ",
              "relation": "shape",
              "count": 3
            }
          ],
          "missHint": "이건 히읗이 아니에요. 모양을 다시 보세요."
        },
        {
          "cols": 4,
          "showTarget": false,
          "target": "ㅎ",
          "position": "cho",
          "prompt": "히읗으로 시작하는 글자를 모두 찾아 눌러 보세요",
          "cells": [
            {
              "ch": "휴",
              "hit": true
            },
            {
              "ch": "하",
              "hit": true
            },
            {
              "ch": "호",
              "hit": true
            },
            {
              "ch": "유",
              "relation": "strokeAdd"
            },
            {
              "ch": "아",
              "relation": "strokeAdd"
            },
            {
              "ch": "츄",
              "relation": "shape"
            },
            {
              "ch": "차",
              "relation": "shape"
            },
            {
              "ch": "뮤",
              "relation": "shape"
            },
            {
              "ch": "마",
              "relation": "shape"
            }
          ],
          "missHint": "첫소리가 히읗 인 글자를 찾아요."
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
          "target": "휴",
          "at": 547,
          "prompt": "첫 자음을 찾아 넣어 보세요!",
          "decoys": [
            {
              "jamo": "ㅇ",
              "relation": "strokeAdd"
            },
            {
              "jamo": "ㅊ",
              "relation": "shape"
            },
            {
              "jamo": "ㅁ",
              "relation": "shape"
            }
          ]
        },
        {
          "target": "휴지",
          "prompt": "'휴지' 전체를 만들어 보세요.",
          "decoys": [
            {
              "jamo": "ㅇ",
              "relation": "strokeAdd"
            },
            {
              "jamo": "ㅊ",
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
          "target": "휴지",
          "broken": "유지",
          "prompt": "유지? 소리 내어 읽어 보고 첫소리를 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅇ",
              "relation": "noOnset"
            },
            {
              "jamo": "ㅇ",
              "relation": "strokeAdd"
            },
            {
              "jamo": "ㅊ",
              "relation": "shape"
            }
          ]
        },
        {
          "target": "휴지",
          "broken": "유지",
          "prompt": "유지? 소리 내어 읽어 보고 첫소리를 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅇ",
              "relation": "noOnset"
            },
            {
              "jamo": "ㅇ",
              "relation": "strokeAdd"
            },
            {
              "jamo": "ㅊ",
              "relation": "shape"
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
      "prompt": "히읗 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "휴지",
          "pic": "🧻"
        },
        {
          "word": "하마",
          "pic": "🦛"
        },
        {
          "word": "호수",
          "pic": "🏞️"
        },
        {
          "word": "재미",
          "pic": "🎉"
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
      "toleranceEm": 0.2,
      "passScore": 0.57,
      "items": [
        {
          "target": "ㅎ",
          "kind": "jamo",
          "position": "cho",
          "prompt": "히읗을 따라 써 보세요"
        },
        {
          "target": "휴",
          "kind": "syllable",
          "prompt": "'휴' 을 따라 써 보세요",
          "note": "첫 자음을 먼저 쓰고 모음을 붙여요."
        },
        {
          "target": "휴지",
          "kind": "word",
          "prompt": "'휴지' 을 따라 써 보세요",
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
      "at": 118,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 138,
          "caption": "훈민이와 정음이가 한글용사 흉내를 내며 놀다 휴지를 길게 풀어 길을 만들었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 275,
          "caption": "휴지를 다 써 버려서 할아버지께 드릴 휴지가 없었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 305,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 393,
          "caption": "황소 에서 히읗을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "황소",
            "jamo": "ㅎ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 413,
          "caption": "유 용사가 유를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅠ"
          }
        },
        {
          "order": 6,
          "at": 488,
          "caption": "조개 에서 지읒을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "조개",
            "jamo": "ㅈ",
            "position": "cho"
          }
        },
        {
          "order": 7,
          "at": 511,
          "caption": "이 용사가 이를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅣ"
          }
        },
        {
          "order": 8,
          "at": 547,
          "caption": "자판기에 넣으니 깨끗한 휴지가 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 9,
          "at": 587,
          "caption": "할아버지와 '휴지' 을 소리 내어 읽었어요.",
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
