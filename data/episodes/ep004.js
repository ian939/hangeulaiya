/* 4화 「여우」 — 모음 ㅕ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep004.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 *
 * 영상으로 확인이 필요한 항목: 퀴즈 낱말
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 4,
  "title": "여우",
  "videoId": "C4tBDGOA34M",
  "objective": "모음 'ㅕ', 'ㅜ' 의 소리를 인식한다.",
  "focus": "모음 ㅕ",
  "jamo": {
    "new": [
      "ㅕ",
      "ㅜ"
    ],
    "seen": [
      "ㅇ"
    ]
  },
  "targetWords": [
    "여우"
  ],
  "rewards": {
    "cards": [
      "ㅕ",
      "ㅜ"
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
          "at": 407,
          "options": [
            {
              "label": "야구공",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "야구공"
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
          "at": 564,
          "options": [
            {
              "label": "여우",
              "pic": "🦊",
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
          "say": "여",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "입 모양을 따라 해 보세요",
          "options": [
            {
              "label": "ㅕ",
              "correct": true
            },
            {
              "label": "ㅓ",
              "relation": "strokePair"
            },
            {
              "label": "ㅑ",
              "relation": "mirrorPair"
            }
          ]
        },
        {
          "say": "여",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "여",
              "correct": true
            },
            {
              "label": "어",
              "relation": "strokePair"
            },
            {
              "label": "야",
              "relation": "mirrorPair"
            }
          ]
        },
        {
          "say": "여우, 여행, 야구. 첫소리가 다른 낱말은 무엇인가요?",
          "prompt": "첫소리가 다른 낱말은 무엇인가요?",
          "at": 692,
          "options": [
            {
              "label": "여우",
              "correct": false,
              "relation": "oneVowelDiff"
            },
            {
              "label": "여행",
              "correct": false,
              "relation": "oneVowelDiff"
            },
            {
              "label": "야구",
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
          "target": "ㅕ",
          "position": "jung",
          "cols": 4,
          "targetCount": 4,
          "prompt": "여 을 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㅓ",
              "relation": "strokePair",
              "count": 3
            },
            {
              "jamo": "ㅑ",
              "relation": "mirrorPair",
              "count": 3
            }
          ],
          "missHint": "이건 여 이 아니에요. 모양을 다시 보세요."
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
          "target": "여",
          "locked": [
            "cho"
          ],
          "at": 564,
          "prompt": "첫 자음은 넣어 두었어요. 나머지를 채워 주세요!",
          "decoys": [
            {
              "jamo": "ㅓ",
              "relation": "strokePair"
            },
            {
              "jamo": "ㅑ",
              "relation": "mirrorPair"
            }
          ]
        },
        {
          "target": "여우",
          "locked": [
            "0:cho",
            "1:cho"
          ],
          "prompt": "'여우' 전체를 만들어 보세요. 첫 자음은 넣어 두었어요.",
          "decoys": [
            {
              "jamo": "ㅓ",
              "relation": "strokePair"
            },
            {
              "jamo": "ㅑ",
              "relation": "mirrorPair"
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
          "target": "여우",
          "broken": "어우",
          "prompt": "어우? 모음이 바뀌었어요. 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅓ",
              "relation": "strokePair"
            },
            {
              "jamo": "ㅑ",
              "relation": "mirrorPair"
            }
          ]
        },
        {
          "target": "여우",
          "broken": "야우",
          "prompt": "야우? 모음이 바뀌었어요. 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅓ",
              "relation": "strokePair"
            },
            {
              "jamo": "ㅑ",
              "relation": "mirrorPair"
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
      "prompt": "여 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "여우",
          "pic": "🦊"
        },
        {
          "word": "아이",
          "pic": "👶"
        },
        {
          "word": "얘",
          "pic": "🧒"
        },
        {
          "word": "왜",
          "pic": "❓"
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
          "target": "ㅕ",
          "kind": "jamo",
          "position": "jung",
          "prompt": "여 을 따라 써 보세요"
        },
        {
          "target": "여",
          "kind": "syllable",
          "prompt": "'여' 을 따라 써 보세요",
          "note": "ㅇ 을 먼저 쓰고 모음을 붙여요."
        },
        {
          "target": "여우",
          "kind": "word",
          "prompt": "'여우' 을 따라 써 보세요",
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
      "at": 78,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 98,
          "caption": "정음이가 종이로 여우를 접어 주고, 여우랑 숨바꼭질 놀이를 했어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 292,
          "caption": "진짜 여우가 궁금했어요. '여우' 를 쓸 줄 몰랐어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 322,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 407,
          "caption": "야구공 에서 이응 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "야구공",
            "jamo": "ㅇ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 422,
          "caption": "여 용사가 여 를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅕ"
          }
        },
        {
          "order": 6,
          "at": 509,
          "caption": "우 용사가 우 를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅜ"
          }
        },
        {
          "order": 7,
          "at": 564,
          "caption": "자판기에 넣으니 여우 이 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 8,
          "at": 592,
          "caption": "할아버지와 '여우' 을 소리 내어 읽었어요.",
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
