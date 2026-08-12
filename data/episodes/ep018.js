/* 18화 「토마토」 — 자음 ㅌ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep018.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 *
 * 영상으로 확인이 필요한 항목: ㅁ 을 얻은 장소(묵/무 중 불확실)
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 18,
  "title": "토마토",
  "videoId": "G0FoYv9-w68",
  "objective": "공식 홈페이지 : https://home.ebs.co.kr/hangeulaiya/etc/1/htmlMenu ",
  "focus": "자음 ㅌ",
  "jamo": {
    "new": [
      "ㅌ"
    ],
    "seen": [
      "ㅁ",
      "ㅏ",
      "ㅗ"
    ]
  },
  "targetWords": [
    "토마토"
  ],
  "rewards": {
    "cards": [
      "ㅌ"
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
          "q": "티읕은 어디에서 찾았나요?",
          "at": 319,
          "options": [
            {
              "label": "태권도",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "태권도"
              },
              "correct": true
            },
            {
              "label": "묵",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "묵"
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
          "q": "미음은 어디에서 찾았나요?",
          "at": 413,
          "options": [
            {
              "label": "묵",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "묵"
              },
              "correct": true
            },
            {
              "label": "태권도",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "태권도"
              }
            }
          ]
        },
        {
          "q": "자판기에서 무엇이 나왔나요?",
          "at": 481,
          "options": [
            {
              "label": "토마토 이름표",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "토마토 이름표"
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
          "say": "토",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "첫소리가 들리나요?",
          "options": [
            {
              "label": "토",
              "correct": true
            },
            {
              "label": "오",
              "relation": "noOnset",
              "why": "첫소리가 없는 글자예요. 다시 들어볼까?"
            }
          ]
        },
        {
          "say": "오",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "오",
              "correct": true
            },
            {
              "label": "토",
              "relation": "noOnset"
            }
          ]
        },
        {
          "say": "토",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "첫소리가 무엇인지 들어 보세요",
          "options": [
            {
              "label": "토",
              "correct": true
            },
            {
              "label": "도",
              "relation": "strokeAdd"
            },
            {
              "label": "코",
              "relation": "shape"
            }
          ]
        },
        {
          "say": "티읕",
          "prompt": "이 소리는 어떤 글자일까요?",
          "options": [
            {
              "label": "ㅌ",
              "correct": true
            },
            {
              "label": "ㄷ",
              "relation": "strokeAdd"
            },
            {
              "label": "ㅋ",
              "relation": "shape"
            }
          ]
        },
        {
          "say": "도자기, 토마토, 토요일. 첫소리가 다른 낱말은 무엇인가요?",
          "prompt": "첫소리가 다른 낱말은 무엇인가요?",
          "at": 692,
          "options": [
            {
              "label": "도자기",
              "correct": true
            },
            {
              "label": "토마토",
              "correct": false,
              "relation": "stopSwap"
            },
            {
              "label": "토요일",
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
          "target": "ㅌ",
          "position": "cho",
          "cols": 4,
          "targetCount": 4,
          "prompt": "티읕을 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㄷ",
              "relation": "strokeAdd",
              "count": 3
            },
            {
              "jamo": "ㅋ",
              "relation": "shape",
              "count": 3
            },
            {
              "jamo": "ㄹ",
              "relation": "shape",
              "count": 3
            }
          ],
          "missHint": "이건 티읕이 아니에요. 모양을 다시 보세요."
        },
        {
          "cols": 4,
          "showTarget": false,
          "target": "ㅌ",
          "position": "cho",
          "prompt": "티읕으로 시작하는 글자를 모두 찾아 눌러 보세요",
          "cells": [
            {
              "ch": "토",
              "hit": true
            },
            {
              "ch": "타",
              "hit": true
            },
            {
              "ch": "도",
              "relation": "strokeAdd"
            },
            {
              "ch": "다",
              "relation": "strokeAdd"
            },
            {
              "ch": "코",
              "relation": "shape"
            },
            {
              "ch": "카",
              "relation": "shape"
            },
            {
              "ch": "로",
              "relation": "shape"
            },
            {
              "ch": "라",
              "relation": "shape"
            }
          ],
          "missHint": "첫소리가 티읕 인 글자를 찾아요."
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
          "target": "토",
          "at": 481,
          "prompt": "첫 자음을 찾아 넣어 보세요!",
          "decoys": [
            {
              "jamo": "ㄷ",
              "relation": "strokeAdd"
            },
            {
              "jamo": "ㅋ",
              "relation": "shape"
            },
            {
              "jamo": "ㄹ",
              "relation": "shape"
            }
          ]
        },
        {
          "target": "토마토",
          "prompt": "'토마토' 전체를 만들어 보세요.",
          "decoys": [
            {
              "jamo": "ㄷ",
              "relation": "strokeAdd"
            },
            {
              "jamo": "ㅋ",
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
          "target": "토마토",
          "broken": "오마토",
          "prompt": "오마토? 소리 내어 읽어 보고 첫소리를 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅇ",
              "relation": "noOnset"
            },
            {
              "jamo": "ㄷ",
              "relation": "strokeAdd"
            },
            {
              "jamo": "ㅋ",
              "relation": "shape"
            }
          ]
        },
        {
          "target": "토마토",
          "broken": "도마토",
          "prompt": "도마토? 소리 내어 읽어 보고 첫소리를 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅇ",
              "relation": "noOnset"
            },
            {
              "jamo": "ㄷ",
              "relation": "strokeAdd"
            },
            {
              "jamo": "ㅋ",
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
      "prompt": "티읕 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "토마토",
          "pic": "🍅"
        },
        {
          "word": "타조",
          "pic": "🦩"
        },
        {
          "word": "토끼",
          "pic": {
            "kind": "text",
            "value": "토끼"
          }
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
          "target": "ㅌ",
          "kind": "jamo",
          "position": "cho",
          "prompt": "티읕을 따라 써 보세요"
        },
        {
          "target": "토",
          "kind": "syllable",
          "prompt": "'토' 을 따라 써 보세요",
          "note": "첫 자음을 먼저 쓰고 모음을 붙여요."
        },
        {
          "target": "토마토",
          "kind": "word",
          "prompt": "'토마토' 을 따라 써 보세요",
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
      "at": 96,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 116,
          "caption": "훈민이와 정음이가 심어 둔 토마토가 주렁주렁 열려 톡톡 따 보았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 204,
          "caption": "밭에 '토마토' 라고 이름표를 쓰려는데 쓸 줄 몰랐어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 234,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 319,
          "caption": "태권도 에서 티읕을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "태권도",
            "jamo": "ㅌ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 342,
          "caption": "오 용사가 오를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅗ"
          }
        },
        {
          "order": 6,
          "at": 413,
          "caption": "묵 에서 미음을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "묵",
            "jamo": "ㅁ",
            "position": "cho"
          }
        },
        {
          "order": 7,
          "at": 439,
          "caption": "아 용사가 아를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅏ"
          }
        },
        {
          "order": 8,
          "at": 481,
          "caption": "자판기에 넣으니 토마토 이름표가 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 9,
          "at": 530,
          "caption": "할아버지와 '토마토' 을 소리 내어 읽었어요.",
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
