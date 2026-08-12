/* 2화 「오이」 — 모음 ㅗ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep002.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 2,
  "title": "오이",
  "videoId": "labPzGmG0jw",
  "objective": "모음 'ㅗ', 'ㅣ' 의 소리를 인식한다.",
  "focus": "모음 ㅗ",
  "jamo": {
    "new": [
      "ㅗ"
    ],
    "seen": [
      "ㅇ",
      "ㅣ"
    ]
  },
  "targetWords": [
    "오이"
  ],
  "rewards": {
    "cards": [
      "ㅗ"
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
          "q": "이응은 어디에서 찾았나요?",
          "at": 400,
          "options": [
            {
              "label": "오징어",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "오징어"
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
          "at": 566,
          "options": [
            {
              "label": "오이",
              "pic": "🥒",
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
          "say": "오",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "입 모양을 따라 해 보세요",
          "options": [
            {
              "label": "ㅗ",
              "correct": true
            },
            {
              "label": "ㅏ",
              "relation": "axisRotation"
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
              "label": "아",
              "relation": "axisRotation"
            }
          ]
        },
        {
          "say": "오이, 오리, 요리. 첫소리가 다른 낱말은 무엇인가요?",
          "prompt": "첫소리가 다른 낱말은 무엇인가요?",
          "at": 680,
          "options": [
            {
              "label": "오이",
              "correct": false,
              "relation": "oneVowelDiff"
            },
            {
              "label": "오리",
              "correct": false,
              "relation": "oneVowelDiff"
            },
            {
              "label": "요리",
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
          "target": "ㅗ",
          "position": "jung",
          "cols": 4,
          "targetCount": 4,
          "prompt": "오를 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㅏ",
              "relation": "axisRotation",
              "count": 3
            }
          ],
          "missHint": "이건 오가 아니에요. 모양을 다시 보세요."
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
          "target": "오",
          "locked": [
            "cho"
          ],
          "at": 566,
          "prompt": "첫 자음은 넣어 두었어요. 나머지를 채워 주세요!",
          "decoys": [
            {
              "jamo": "ㅏ",
              "relation": "axisRotation"
            }
          ]
        },
        {
          "target": "오이",
          "locked": [
            "0:cho",
            "1:cho"
          ],
          "prompt": "'오이' 전체를 만들어 보세요. 첫 자음은 넣어 두었어요.",
          "decoys": [
            {
              "jamo": "ㅏ",
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
          "target": "오이",
          "broken": "아이",
          "prompt": "아이? 모음이 바뀌었어요. 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅏ",
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
      "prompt": "오 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "오이",
          "pic": "🥒"
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
          "target": "ㅗ",
          "kind": "jamo",
          "position": "jung",
          "prompt": "오를 따라 써 보세요"
        },
        {
          "target": "오",
          "kind": "syllable",
          "prompt": "'오' 을 따라 써 보세요",
          "note": "ㅇ 을 먼저 쓰고 모음을 붙여요."
        },
        {
          "target": "오이",
          "kind": "word",
          "prompt": "'오이' 을 따라 써 보세요",
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
      "at": 72,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 92,
          "caption": "훈민이와 정음이가 가게 놀이를 하며 할아버지가 좋아하는 오이를 팔기로 했어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 306,
          "caption": "오이를 다 먹어 버렸어요. '오이' 를 쓸 줄 몰랐어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 336,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 400,
          "caption": "오징어 에서 이응을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "오징어",
            "jamo": "ㅇ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 425,
          "caption": "오 용사가 오를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅗ"
          }
        },
        {
          "order": 6,
          "at": 479,
          "caption": "이 용사가 이를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅣ"
          }
        },
        {
          "order": 7,
          "at": 566,
          "caption": "자판기에 넣으니 오이가 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 8,
          "at": 601,
          "caption": "할아버지와 '오이' 을 소리 내어 읽었어요.",
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
