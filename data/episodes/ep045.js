/* 45화 「왜」 — 모음 ㅙ — ㅗ + ㅐ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep045.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 *
 * 영상으로 확인이 필요한 항목: ㅇ 을 찾은 장소
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 45,
  "title": "왜",
  "videoId": "ZIUGnIP8Lz0",
  "objective": "복잡한 모음 'ㅙ'의 소리를 인식한다.",
  "focus": "모음 ㅙ — ㅗ + ㅐ",
  "jamo": {
    "new": [
      "ㅙ"
    ],
    "seen": [
      "ㅇ",
      "ㅏ",
      "ㅗ",
      "ㅣ"
    ]
  },
  "targetWords": [
    "왜"
  ],
  "rewards": {
    "cards": [
      "ㅙ"
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
          "at": 315,
          "options": [
            {
              "label": "오뚝이",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "오뚝이",
                "emoji": "🎎"
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
          "at": 474,
          "options": [
            {
              "label": "악어",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "악어"
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
          "say": "왜",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "오 와 애 가 만나면 왜 가 돼요",
          "options": [
            {
              "label": "ㅙ",
              "correct": true
            },
            {
              "label": "ㅗ",
              "relation": "containment",
              "why": "오 하나만 있는 소리예요."
            }
          ]
        },
        {
          "say": "왜",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "왜",
              "correct": true
            },
            {
              "label": "오",
              "relation": "containment"
            }
          ]
        },
        {
          "say": "왜",
          "prompt": "비슷한 모음이 있어요. 잘 듣고 골라요",
          "options": [
            {
              "label": "ㅙ",
              "correct": true
            },
            {
              "label": "ㅘ",
              "relation": "strokeAdd"
            }
          ]
        },
        {
          "say": "왜가리, 애호박, 애벌레. 첫소리가 다른 낱말은 무엇인가요?",
          "prompt": "첫소리가 다른 낱말은 무엇인가요?",
          "at": 606,
          "options": [
            {
              "label": "왜가리",
              "correct": true
            },
            {
              "label": "애호박",
              "correct": false,
              "relation": "oneVowelDiff"
            },
            {
              "label": "애벌레",
              "correct": false,
              "relation": "oneVowelDiff"
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
          "target": "ㅙ",
          "position": "jung",
          "cols": 4,
          "targetCount": 4,
          "prompt": "왜 을 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㅘ",
              "relation": "strokeAdd",
              "count": 3
            }
          ],
          "missHint": "이건 왜 이 아니에요. 모양을 다시 보세요."
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
          "target": "왜",
          "locked": [
            "cho"
          ],
          "at": 474,
          "prompt": "첫 자음은 넣어 두었어요. 나머지를 채워 주세요!",
          "decoys": [
            {
              "jamo": "ㅘ",
              "relation": "strokeAdd"
            }
          ]
        },
        {
          "target": "왜",
          "prompt": "'왜' 을 처음부터 만들어 보세요.",
          "decoys": [
            {
              "jamo": "ㅘ",
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
          "target": "왜",
          "broken": "오",
          "prompt": "모음이 반쪽만 남았어요! 왜 로 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅗ",
              "relation": "containment"
            },
            {
              "jamo": "ㅐ",
              "relation": "containment"
            }
          ]
        },
        {
          "target": "왜",
          "broken": "와",
          "prompt": "와? 비슷하지만 다른 글자예요. 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅘ",
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
      "prompt": "왜 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "왜",
          "pic": "❓"
        },
        {
          "word": "왜가리",
          "pic": "🦩"
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
      "toleranceEm": 0.16,
      "passScore": 0.57,
      "items": [
        {
          "target": "ㅙ",
          "kind": "jamo",
          "position": "jung",
          "prompt": "왜 을 따라 써 보세요"
        },
        {
          "target": "왜",
          "kind": "syllable",
          "prompt": "'왜' 을 따라 써 보세요",
          "note": "오 와 애 가 만나 왜 가 돼요."
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
      "at": 156,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 176,
          "caption": "악어가 한글을 꿀꺽 먹는 걸 보고 몹시 궁금해졌어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 208,
          "caption": "'왜' 그럴까 알아보려는데 그 글자를 쓸 줄 몰랐어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 238,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 315,
          "caption": "오뚝이 에서 이응 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "오뚝이",
            "emoji": "🎎",
            "jamo": "ㅇ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 340,
          "caption": "오 와 애 가 만나 왜 가 되었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅙ"
          }
        },
        {
          "order": 6,
          "at": 474,
          "caption": "자판기에 넣으니 악어 이 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 7,
          "at": 505,
          "caption": "할아버지와 '왜' 을 소리 내어 읽었어요.",
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
