/* 7화 「으」 — 모음 ㅡ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep007.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 *
 * 영상으로 확인이 필요한 항목: 퀴즈 낱말과 정답
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 7,
  "title": "으",
  "videoId": "cHS61BdT98I",
  "objective": "모음 ''ㅡ'' 의 소리를 인식한다.",
  "focus": "모음 ㅡ",
  "jamo": {
    "new": [
      "ㅡ"
    ],
    "seen": [
      "ㅇ"
    ]
  },
  "targetWords": [
    "으"
  ],
  "rewards": {
    "cards": [
      "ㅡ"
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
          "at": 494,
          "options": [
            {
              "label": "아기",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "아기"
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
          "at": 559,
          "options": [
            {
              "label": "동화책",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "동화책"
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
          "say": "으",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "입 모양을 따라 해 보세요",
          "options": [
            {
              "label": "ㅡ",
              "correct": true
            },
            {
              "label": "ㅣ",
              "relation": "axisRotation"
            },
            {
              "label": "ㅗ",
              "relation": "containment"
            }
          ]
        },
        {
          "say": "으",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "으",
              "correct": true
            },
            {
              "label": "이",
              "relation": "axisRotation"
            },
            {
              "label": "오",
              "relation": "containment"
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
          "target": "ㅡ",
          "position": "jung",
          "cols": 4,
          "targetCount": 4,
          "prompt": "으를 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㅣ",
              "relation": "axisRotation",
              "count": 3
            },
            {
              "jamo": "ㅗ",
              "relation": "containment",
              "count": 3
            },
            {
              "jamo": "ㅜ",
              "relation": "containment",
              "count": 3
            }
          ],
          "missHint": "이건 으가 아니에요. 모양을 다시 보세요."
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
          "target": "으",
          "locked": [
            "cho"
          ],
          "at": 559,
          "prompt": "첫 자음은 넣어 두었어요. 나머지를 채워 주세요!",
          "decoys": [
            {
              "jamo": "ㅣ",
              "relation": "axisRotation"
            },
            {
              "jamo": "ㅗ",
              "relation": "containment"
            },
            {
              "jamo": "ㅜ",
              "relation": "containment"
            }
          ]
        },
        {
          "target": "으",
          "prompt": "'으' 을 처음부터 만들어 보세요.",
          "decoys": [
            {
              "jamo": "ㅣ",
              "relation": "axisRotation"
            },
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
          "target": "으",
          "broken": "이",
          "prompt": "이? 모음이 바뀌었어요. 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅣ",
              "relation": "axisRotation"
            },
            {
              "jamo": "ㅗ",
              "relation": "containment"
            },
            {
              "jamo": "ㅜ",
              "relation": "containment"
            }
          ]
        },
        {
          "target": "으",
          "broken": "오",
          "prompt": "오? 모음이 바뀌었어요. 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅣ",
              "relation": "axisRotation"
            },
            {
              "jamo": "ㅗ",
              "relation": "containment"
            },
            {
              "jamo": "ㅜ",
              "relation": "containment"
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
      "prompt": "으 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "으",
          "pic": {
            "kind": "text",
            "value": "으"
          }
        },
        {
          "word": "얘",
          "pic": "🧒"
        },
        {
          "word": "게",
          "pic": "🦀"
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
          "target": "ㅡ",
          "kind": "jamo",
          "position": "jung",
          "prompt": "으를 따라 써 보세요"
        },
        {
          "target": "으",
          "kind": "syllable",
          "prompt": "'으' 을 따라 써 보세요",
          "note": "ㅇ 을 먼저 쓰고 모음을 붙여요."
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
      "at": 79,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 99,
          "caption": "훈민이와 정음이가 무섭고 재미있는 이야기를 직접 만들어 들려주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 372,
          "caption": "이야기 제목 '으' 를 쓰려는데 쓸 줄 몰랐어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 402,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 494,
          "caption": "아기 에서 이응을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "아기",
            "jamo": "ㅇ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 520,
          "caption": "으 용사가 으를 붙여 주었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅡ"
          }
        },
        {
          "order": 6,
          "at": 559,
          "caption": "자판기에 넣으니 동화책이 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 7,
          "at": 604,
          "caption": "할아버지와 '으' 을 소리 내어 읽었어요.",
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
