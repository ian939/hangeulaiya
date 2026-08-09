/* 44화 「화」 — 모음 ㅘ — ㅗ + ㅏ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep044.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 44,
  "title": "화",
  "videoId": "qzL4eY9SahU",
  "objective": "복잡한 모음 'ㅘ'의 소리를 인식한다.",
  "focus": "모음 ㅘ — ㅗ + ㅏ",
  "jamo": {
    "new": [
      "ㅘ"
    ]
  },
  "targetWords": [
    "화"
  ],
  "rewards": {
    "cards": [
      "ㅘ"
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
          "q": "히읗 은 어디에서 찾았나요?",
          "at": 295,
          "options": [
            {
              "label": "홍시",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "홍시",
                "emoji": "🍅"
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
          "at": 443,
          "options": [
            {
              "label": "편지지",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "편지지"
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
          "say": "와",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "오 와 아 가 만나면 와 가 돼요",
          "options": [
            {
              "label": "ㅘ",
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
          "say": "화",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "화",
              "correct": true
            },
            {
              "label": "호",
              "relation": "containment"
            }
          ]
        },
        {
          "say": "와",
          "prompt": "비슷한 모음이 있어요. 잘 듣고 골라요",
          "options": [
            {
              "label": "ㅘ",
              "correct": true
            },
            {
              "label": "ㅗ",
              "relation": "containment"
            }
          ]
        },
        {
          "say": "하늘, 화분, 화가. 첫소리가 다른 낱말은 무엇인가요?",
          "prompt": "첫소리가 다른 낱말은 무엇인가요?",
          "at": 709,
          "options": [
            {
              "label": "하늘",
              "correct": true
            },
            {
              "label": "화분",
              "correct": false,
              "relation": "oneVowelDiff"
            },
            {
              "label": "화가",
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
          "target": "ㅘ",
          "position": "jung",
          "cols": 4,
          "targetCount": 4,
          "prompt": "와 을 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㅗ",
              "relation": "containment",
              "count": 3
            }
          ],
          "missHint": "이건 와 이 아니에요. 모양을 다시 보세요."
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
          "target": "화",
          "locked": [
            "cho"
          ],
          "at": 443,
          "prompt": "첫 자음은 넣어 두었어요. 나머지를 채워 주세요!",
          "decoys": [
            {
              "jamo": "ㅗ",
              "relation": "containment"
            }
          ]
        },
        {
          "target": "화",
          "prompt": "'화' 을 처음부터 만들어 보세요.",
          "decoys": [
            {
              "jamo": "ㅗ",
              "relation": "containment"
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
          "target": "화",
          "broken": "호",
          "prompt": "모음이 반쪽만 남았어요! 와 로 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅗ",
              "relation": "containment"
            },
            {
              "jamo": "ㅏ",
              "relation": "containment"
            }
          ]
        },
        {
          "target": "화",
          "broken": "호",
          "prompt": "호? 비슷하지만 다른 글자예요. 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅗ",
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
      "prompt": "와 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "화",
          "pic": "😠"
        },
        {
          "word": "화분",
          "pic": "🪴"
        },
        {
          "word": "사과",
          "pic": "🍎"
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
      "toleranceEm": 0.16,
      "passScore": 0.57,
      "items": [
        {
          "target": "ㅘ",
          "kind": "jamo",
          "position": "jung",
          "prompt": "와 을 따라 써 보세요"
        },
        {
          "target": "화",
          "kind": "syllable",
          "prompt": "'화' 을 따라 써 보세요",
          "note": "오 와 아 가 만나 와 가 돼요."
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
          "caption": "컵을 높이 쌓다가 탑이 무너져서 훈민이가 화가 났어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 208,
          "caption": "훈민이의 화를 풀어 주려는데 '화' 를 쓸 줄 몰랐어요.",
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
          "at": 295,
          "caption": "홍시 에서 히읗 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "홍시",
            "emoji": "🍅",
            "jamo": "ㅎ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 307,
          "caption": "오 와 아 가 만나 와 가 되었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅘ"
          }
        },
        {
          "order": 6,
          "at": 443,
          "caption": "자판기에 넣으니 편지지 이 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 7,
          "at": 579,
          "caption": "할아버지와 '화' 을 소리 내어 읽었어요.",
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
