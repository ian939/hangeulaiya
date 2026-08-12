/* 17화 「코」 — 자음 ㅋ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep017.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 17,
  "title": "코",
  "videoId": "E4RmFPnpfM0",
  "objective": "자음 ''ㅋ''의 소리를 인식한다.",
  "focus": "자음 ㅋ",
  "jamo": {
    "new": [
      "ㅋ"
    ],
    "seen": [
      "ㅗ"
    ]
  },
  "targetWords": [
    "코"
  ],
  "rewards": {
    "cards": [
      "ㅋ"
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
          "q": "키읔은 어디에서 찾았나요?",
          "at": 432,
          "options": [
            {
              "label": "케이크",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "케이크"
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
          "at": 508,
          "options": [
            {
              "label": "코끼리 코",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "코끼리 코"
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
          "say": "코",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "첫소리가 들리나요?",
          "options": [
            {
              "label": "코",
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
              "label": "코",
              "relation": "noOnset"
            }
          ]
        },
        {
          "say": "코",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "첫소리가 무엇인지 들어 보세요",
          "options": [
            {
              "label": "코",
              "correct": true
            },
            {
              "label": "고",
              "relation": "strokeAdd"
            },
            {
              "label": "초",
              "relation": "shape"
            }
          ]
        },
        {
          "say": "키읔",
          "prompt": "이 소리는 어떤 글자일까요?",
          "options": [
            {
              "label": "ㅋ",
              "correct": true
            },
            {
              "label": "ㄱ",
              "relation": "strokeAdd"
            },
            {
              "label": "ㅊ",
              "relation": "shape"
            }
          ]
        },
        {
          "say": "코코아, 고구마, 코알라. 첫소리가 다른 낱말은 무엇인가요?",
          "prompt": "첫소리가 다른 낱말은 무엇인가요?",
          "at": 667,
          "options": [
            {
              "label": "코코아",
              "correct": false,
              "relation": "stopSwap"
            },
            {
              "label": "고구마",
              "correct": true
            },
            {
              "label": "코알라",
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
          "target": "ㅋ",
          "position": "cho",
          "cols": 4,
          "targetCount": 4,
          "prompt": "키읔을 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㄱ",
              "relation": "strokeAdd",
              "count": 3
            },
            {
              "jamo": "ㅊ",
              "relation": "shape",
              "count": 3
            }
          ],
          "missHint": "이건 키읔이 아니에요. 모양을 다시 보세요."
        },
        {
          "cols": 4,
          "showTarget": false,
          "target": "ㅋ",
          "position": "cho",
          "prompt": "키읔으로 시작하는 글자를 모두 찾아 눌러 보세요",
          "cells": [
            {
              "ch": "코",
              "hit": true
            },
            {
              "ch": "카",
              "hit": true
            },
            {
              "ch": "고",
              "relation": "strokeAdd"
            },
            {
              "ch": "가",
              "relation": "strokeAdd"
            },
            {
              "ch": "초",
              "relation": "shape"
            },
            {
              "ch": "차",
              "relation": "shape"
            }
          ],
          "missHint": "첫소리가 키읔 인 글자를 찾아요."
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
          "target": "코",
          "at": 508,
          "prompt": "첫 자음을 찾아 넣어 보세요!",
          "decoys": [
            {
              "jamo": "ㄱ",
              "relation": "strokeAdd"
            },
            {
              "jamo": "ㅊ",
              "relation": "shape"
            }
          ]
        },
        {
          "target": "코",
          "prompt": "'코' 을 처음부터 만들어 보세요.",
          "decoys": [
            {
              "jamo": "ㄱ",
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
          "target": "코",
          "broken": "오",
          "prompt": "오? 소리 내어 읽어 보고 첫소리를 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅇ",
              "relation": "noOnset"
            },
            {
              "jamo": "ㄱ",
              "relation": "strokeAdd"
            },
            {
              "jamo": "ㅊ",
              "relation": "shape"
            }
          ]
        },
        {
          "target": "코",
          "broken": "고",
          "prompt": "고? 소리 내어 읽어 보고 첫소리를 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅇ",
              "relation": "noOnset"
            },
            {
              "jamo": "ㄱ",
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
      "prompt": "키읔 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "코",
          "pic": "👃"
        },
        {
          "word": "카드",
          "pic": "🃏"
        },
        {
          "word": "코드",
          "pic": {
            "kind": "text",
            "value": "코드"
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
          "target": "ㅋ",
          "kind": "jamo",
          "position": "cho",
          "prompt": "키읔을 따라 써 보세요"
        },
        {
          "target": "코",
          "kind": "syllable",
          "prompt": "'코' 을 따라 써 보세요",
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
      "at": 89,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 109,
          "caption": "훈민이와 정음이가 코로 동물 흉내를 내고 무슨 동물인지 맞히는 놀이를 했어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 300,
          "caption": "코끼리 코를 갖고 싶었어요. '코' 를 쓸 줄 몰랐어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 330,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 432,
          "caption": "케이크 에서 키읔을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "케이크",
            "jamo": "ㅋ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 478,
          "caption": "오 용사가 오를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅗ"
          }
        },
        {
          "order": 6,
          "at": 508,
          "caption": "자판기에 넣으니 코끼리 코가 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 7,
          "at": 552,
          "caption": "할아버지와 '코' 을 소리 내어 읽었어요.",
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
