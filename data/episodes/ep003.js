/* 3화 「어디」 — 모음 ㅓ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep003.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 *
 * 영상으로 확인이 필요한 항목: 첫 이응을 찾은 장소
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 3,
  "title": "어디",
  "videoId": "k_eCbbmXXmc",
  "objective": "모음 ''ㅓ'', ''ㅣ'' 의 소리를 인식한다.",
  "focus": "모음 ㅓ",
  "jamo": {
    "new": [
      "ㅓ"
    ],
    "seen": [
      "ㄷ",
      "ㅇ",
      "ㅣ"
    ]
  },
  "targetWords": [
    "어디"
  ],
  "rewards": {
    "cards": [
      "ㅓ"
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
          "q": "디귿 은 어디에서 찾았나요?",
          "at": 565,
          "options": [
            {
              "label": "다리",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "다리"
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
          "at": 627,
          "options": [
            {
              "label": "이름표",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "이름표"
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
          "say": "어",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "입 모양을 따라 해 보세요",
          "options": [
            {
              "label": "ㅓ",
              "correct": true
            },
            {
              "label": "ㅏ",
              "relation": "mirrorPair"
            },
            {
              "label": "ㅗ",
              "relation": "axisRotation"
            }
          ]
        },
        {
          "say": "어",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "어",
              "correct": true
            },
            {
              "label": "아",
              "relation": "mirrorPair"
            },
            {
              "label": "오",
              "relation": "axisRotation"
            }
          ]
        },
        {
          "say": "어디, 어제, 여기. 첫소리가 다른 낱말은 무엇인가요?",
          "prompt": "첫소리가 다른 낱말은 무엇인가요?",
          "at": 791,
          "options": [
            {
              "label": "어디",
              "correct": false,
              "relation": "oneVowelDiff"
            },
            {
              "label": "어제",
              "correct": false,
              "relation": "oneVowelDiff"
            },
            {
              "label": "여기",
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
          "target": "ㅓ",
          "position": "jung",
          "cols": 4,
          "targetCount": 4,
          "prompt": "어 을 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㅏ",
              "relation": "mirrorPair",
              "count": 3
            },
            {
              "jamo": "ㅗ",
              "relation": "axisRotation",
              "count": 3
            }
          ],
          "missHint": "이건 어 이 아니에요. 모양을 다시 보세요."
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
          "target": "어",
          "locked": [
            "cho"
          ],
          "at": 627,
          "prompt": "첫 자음은 넣어 두었어요. 나머지를 채워 주세요!",
          "decoys": [
            {
              "jamo": "ㅏ",
              "relation": "mirrorPair"
            },
            {
              "jamo": "ㅗ",
              "relation": "axisRotation"
            }
          ]
        },
        {
          "target": "어디",
          "locked": [
            "0:cho",
            "1:cho"
          ],
          "prompt": "'어디' 전체를 만들어 보세요. 첫 자음은 넣어 두었어요.",
          "decoys": [
            {
              "jamo": "ㅏ",
              "relation": "mirrorPair"
            },
            {
              "jamo": "ㅗ",
              "relation": "axisRotation"
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
          "target": "어디",
          "broken": "아디",
          "prompt": "아디? 모음이 바뀌었어요. 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅏ",
              "relation": "mirrorPair"
            },
            {
              "jamo": "ㅗ",
              "relation": "axisRotation"
            }
          ]
        },
        {
          "target": "어디",
          "broken": "오디",
          "prompt": "오디? 모음이 바뀌었어요. 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅏ",
              "relation": "mirrorPair"
            },
            {
              "jamo": "ㅗ",
              "relation": "axisRotation"
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
      "prompt": "어 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "어디",
          "pic": {
            "kind": "text",
            "value": "어디"
          }
        },
        {
          "word": "아이",
          "pic": "👶"
        },
        {
          "word": "오이",
          "pic": "🥒"
        },
        {
          "word": "어이",
          "pic": {
            "kind": "text",
            "value": "어이"
          }
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
          "target": "ㅓ",
          "kind": "jamo",
          "position": "jung",
          "prompt": "어 을 따라 써 보세요"
        },
        {
          "target": "어",
          "kind": "syllable",
          "prompt": "'어' 을 따라 써 보세요",
          "note": "ㅇ 을 먼저 쓰고 모음을 붙여요."
        },
        {
          "target": "어디",
          "kind": "word",
          "prompt": "'어디' 을 따라 써 보세요",
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
      "at": 71,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 91,
          "caption": "할아버지가 물건을 자꾸 찾으셔서 물건을 담아 두는 상자를 만들었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 313,
          "caption": "상자에 이름표를 붙이려는데 '어디' 를 쓸 줄 몰랐어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 343,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 424,
          "caption": "이응 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "jamo": "ㅇ"
          }
        },
        {
          "order": 5,
          "at": 469,
          "caption": "어 용사가 어 를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅓ"
          }
        },
        {
          "order": 6,
          "at": 565,
          "caption": "다리 에서 디귿 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "다리",
            "jamo": "ㄷ",
            "position": "cho"
          }
        },
        {
          "order": 7,
          "at": 583,
          "caption": "이 용사가 이 를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅣ"
          }
        },
        {
          "order": 8,
          "at": 627,
          "caption": "자판기에 넣으니 이름표 이 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 9,
          "at": 665,
          "caption": "할아버지와 '어디' 을 소리 내어 읽었어요.",
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
