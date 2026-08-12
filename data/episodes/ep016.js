/* 16화 「차」 — 자음 ㅊ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep016.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 *
 * 영상으로 확인이 필요한 항목: 퀴즈 종류(끝소리로 추정)
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 16,
  "title": "차",
  "videoId": "lm4C6NGaz5E",
  "objective": "자음 ''ㅊ''의 소리를 인식한다.",
  "focus": "자음 ㅊ",
  "jamo": {
    "new": [
      "ㅊ"
    ],
    "seen": [
      "ㅏ"
    ]
  },
  "targetWords": [
    "차"
  ],
  "rewards": {
    "cards": [
      "ㅊ"
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
          "q": "치읓은 어디에서 찾았나요?",
          "at": 421,
          "options": [
            {
              "label": "침팬지",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "침팬지"
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
          "at": 503,
          "options": [
            {
              "label": "커다란 차",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "커다란 차"
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
          "say": "차",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "첫소리가 들리나요?",
          "options": [
            {
              "label": "차",
              "correct": true
            },
            {
              "label": "아",
              "relation": "noOnset",
              "why": "첫소리가 없는 글자예요. 다시 들어볼까?"
            }
          ]
        },
        {
          "say": "아",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "아",
              "correct": true
            },
            {
              "label": "차",
              "relation": "noOnset"
            }
          ]
        },
        {
          "say": "차",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "첫소리가 무엇인지 들어 보세요",
          "options": [
            {
              "label": "차",
              "correct": true
            },
            {
              "label": "자",
              "relation": "strokeAdd"
            },
            {
              "label": "사",
              "relation": "strokeAdd"
            }
          ]
        },
        {
          "say": "치읓",
          "prompt": "이 소리는 어떤 글자일까요?",
          "options": [
            {
              "label": "ㅊ",
              "correct": true
            },
            {
              "label": "ㅈ",
              "relation": "strokeAdd"
            },
            {
              "label": "ㅅ",
              "relation": "strokeAdd"
            }
          ]
        },
        {
          "say": "그림자, 자동차, 기차. 끝소리가 다른 낱말은 무엇인가요?",
          "prompt": "끝소리가 다른 낱말은 무엇인가요?",
          "at": 671,
          "options": [
            {
              "label": "그림자",
              "correct": true
            },
            {
              "label": "자동차",
              "correct": false,
              "relation": "stopSwap"
            },
            {
              "label": "기차",
              "correct": false,
              "relation": "stopSwap"
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
          "target": "ㅊ",
          "position": "cho",
          "cols": 4,
          "targetCount": 4,
          "prompt": "치읓을 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㅈ",
              "relation": "strokeAdd",
              "count": 3
            },
            {
              "jamo": "ㅅ",
              "relation": "strokeAdd",
              "count": 3
            }
          ],
          "missHint": "이건 치읓이 아니에요. 모양을 다시 보세요."
        },
        {
          "cols": 4,
          "showTarget": false,
          "target": "ㅊ",
          "position": "cho",
          "prompt": "치읓으로 시작하는 글자를 모두 찾아 눌러 보세요",
          "cells": [
            {
              "ch": "차",
              "hit": true
            },
            {
              "ch": "치",
              "hit": true
            },
            {
              "ch": "초",
              "hit": true
            },
            {
              "ch": "자",
              "relation": "strokeAdd"
            },
            {
              "ch": "지",
              "relation": "strokeAdd"
            },
            {
              "ch": "사",
              "relation": "strokeAdd"
            },
            {
              "ch": "시",
              "relation": "strokeAdd"
            }
          ],
          "missHint": "첫소리가 치읓 인 글자를 찾아요."
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
          "target": "차",
          "at": 503,
          "prompt": "첫 자음을 찾아 넣어 보세요!",
          "decoys": [
            {
              "jamo": "ㅈ",
              "relation": "strokeAdd"
            },
            {
              "jamo": "ㅅ",
              "relation": "strokeAdd"
            }
          ]
        },
        {
          "target": "차",
          "prompt": "'차' 을 처음부터 만들어 보세요.",
          "decoys": [
            {
              "jamo": "ㅈ",
              "relation": "strokeAdd"
            },
            {
              "jamo": "ㅅ",
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
          "target": "차",
          "broken": "아",
          "prompt": "아? 소리 내어 읽어 보고 첫소리를 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅇ",
              "relation": "noOnset"
            },
            {
              "jamo": "ㅈ",
              "relation": "strokeAdd"
            },
            {
              "jamo": "ㅅ",
              "relation": "strokeAdd"
            }
          ]
        },
        {
          "target": "차",
          "broken": "자",
          "prompt": "자? 소리 내어 읽어 보고 첫소리를 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅇ",
              "relation": "noOnset"
            },
            {
              "jamo": "ㅈ",
              "relation": "strokeAdd"
            },
            {
              "jamo": "ㅅ",
              "relation": "strokeAdd"
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
      "prompt": "치읓 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "차",
          "pic": "🚗"
        },
        {
          "word": "치마",
          "pic": "👗"
        },
        {
          "word": "초",
          "pic": "🕯️"
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
          "target": "ㅊ",
          "kind": "jamo",
          "position": "cho",
          "prompt": "치읓을 따라 써 보세요"
        },
        {
          "target": "차",
          "kind": "syllable",
          "prompt": "'차' 을 따라 써 보세요",
          "note": "첫 자음을 먼저 쓰고 모음을 붙여요."
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
          "caption": "훈민이와 정음이가 장난감 차를 굴리며 신호등과 터널이 있는 찻길을 만들었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 322,
          "caption": "'차' 라고 쓰고 싶은데 쓸 줄 몰랐어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 352,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 421,
          "caption": "침팬지 에서 치읓을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "침팬지",
            "jamo": "ㅊ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 471,
          "caption": "아 용사가 아를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅏ"
          }
        },
        {
          "order": 6,
          "at": 503,
          "caption": "자판기에 넣으니 커다란 차가 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 7,
          "at": 553,
          "caption": "할아버지와 '차' 을 소리 내어 읽었어요.",
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
