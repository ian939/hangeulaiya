/* 48화 「웬일」 — 모음 ㅞ — ㅜ + ㅐ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep048.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 *
 * 영상으로 확인이 필요한 항목: 받침 ㄴ 을 찾은 장소, 자판기 결과물
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 48,
  "title": "웬일",
  "videoId": "GPghKtUXiZw",
  "objective": "복잡한 모음 'ㅞ'의 소리를 인식한다.",
  "focus": "모음 ㅞ — ㅜ + ㅐ",
  "jamo": {
    "new": [
      "ㅞ"
    ],
    "seen": [
      "ㅇ",
      "ㅓ",
      "ㅜ",
      "ㅣ",
      "받침 ㄴ",
      "받침 ㄹ"
    ]
  },
  "targetWords": [
    "웬일"
  ],
  "rewards": {
    "cards": [
      "ㅞ"
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
          "at": 233,
          "options": [
            {
              "label": "안경",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "안경",
                "emoji": "👓"
              },
              "correct": true
            },
            {
              "label": "논",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "논",
                "emoji": "🌾"
              }
            },
            {
              "label": "과일",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "과일",
                "emoji": "🍎"
              }
            }
          ]
        },
        {
          "q": "받침 리을 은 어디에서 찾았나요?",
          "at": 508,
          "options": [
            {
              "label": "과일",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "과일",
                "emoji": "🍎"
              },
              "correct": true
            },
            {
              "label": "안경",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "안경",
                "emoji": "👓"
              }
            },
            {
              "label": "논",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "논",
                "emoji": "🌾"
              }
            }
          ]
        },
        {
          "q": "자판기에서 무엇이 나왔나요?",
          "at": 570,
          "options": [
            {
              "label": "선물",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "선물"
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
          "say": "웨",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "우 와 애 가 만나면 웨 가 돼요",
          "options": [
            {
              "label": "ㅞ",
              "correct": true
            },
            {
              "label": "ㅜ",
              "relation": "containment",
              "why": "우 하나만 있는 소리예요."
            }
          ]
        },
        {
          "say": "웬",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "웬",
              "correct": true
            },
            {
              "label": "운",
              "relation": "containment"
            }
          ]
        },
        {
          "say": "웨",
          "prompt": "비슷한 모음이 있어요. 잘 듣고 골라요",
          "options": [
            {
              "label": "ㅞ",
              "correct": true
            },
            {
              "label": "ㅝ",
              "relation": "strokeAdd"
            },
            {
              "label": "ㅙ",
              "relation": "mirrorPair"
            }
          ]
        },
        {
          "say": "웬일, 완두콩, 완성. 첫소리가 다른 낱말은 무엇인가요?",
          "prompt": "첫소리가 다른 낱말은 무엇인가요?",
          "at": 736,
          "options": [
            {
              "label": "웬일",
              "correct": true
            },
            {
              "label": "완두콩",
              "correct": false,
              "relation": "oneVowelDiff"
            },
            {
              "label": "완성",
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
          "target": "ㅞ",
          "position": "jung",
          "cols": 4,
          "targetCount": 4,
          "prompt": "웨 을 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㅝ",
              "relation": "strokeAdd",
              "count": 3
            },
            {
              "jamo": "ㅙ",
              "relation": "mirrorPair",
              "count": 3
            }
          ],
          "missHint": "이건 웨 이 아니에요. 모양을 다시 보세요."
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
          "target": "웬",
          "locked": [
            "cho"
          ],
          "at": 570,
          "prompt": "첫 자음은 넣어 두었어요. 나머지를 채워 주세요!",
          "decoys": [
            {
              "jamo": "ㅝ",
              "relation": "strokeAdd"
            },
            {
              "jamo": "ㅙ",
              "relation": "mirrorPair"
            }
          ]
        },
        {
          "target": "웬일",
          "locked": [
            "0:cho",
            "1:cho"
          ],
          "prompt": "'웬일' 전체를 만들어 보세요. 첫 자음은 넣어 두었어요.",
          "decoys": [
            {
              "jamo": "ㅝ",
              "relation": "strokeAdd"
            },
            {
              "jamo": "ㅙ",
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
          "target": "웬일",
          "broken": "운일",
          "prompt": "모음이 반쪽만 남았어요! 웨 로 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅜ",
              "relation": "containment"
            },
            {
              "jamo": "ㅐ",
              "relation": "containment"
            }
          ]
        },
        {
          "target": "웬일",
          "broken": "원일",
          "prompt": "원? 비슷하지만 다른 글자예요. 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅝ",
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
      "prompt": "웨 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "웬일",
          "pic": "😲"
        },
        {
          "word": "약",
          "pic": "💊"
        },
        {
          "word": "국",
          "pic": "🍲"
        },
        {
          "word": "수박",
          "pic": "🍉"
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
          "target": "ㅞ",
          "kind": "jamo",
          "position": "jung",
          "prompt": "웨 을 따라 써 보세요"
        },
        {
          "target": "웬",
          "kind": "syllable",
          "prompt": "'웬' 을 따라 써 보세요",
          "note": "우 와 애 가 만나 웨 가 돼요."
        },
        {
          "target": "웬일",
          "kind": "word",
          "prompt": "'웬일' 을 따라 써 보세요",
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
      "at": 100,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 120,
          "caption": "훈민이와 정음이가 머리를 콩 부딪히고 아이야를 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 172,
          "caption": "'웬일' 이라는 말을 쓰고 싶은데 너무 어려웠어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 202,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 233,
          "caption": "안경 에서 이응 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "안경",
            "emoji": "👓",
            "jamo": "ㅇ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 259,
          "caption": "우 와 애 가 만나 웨 가 되었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅞ"
          }
        },
        {
          "order": 6,
          "at": 453,
          "caption": "논 에서 받침 니은 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "논",
            "emoji": "🌾",
            "jamo": "ㄴ",
            "position": "jong"
          }
        },
        {
          "order": 7,
          "at": 508,
          "caption": "과일 에서 받침 리을 을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "과일",
            "emoji": "🍎",
            "jamo": "ㄹ",
            "position": "jong"
          }
        },
        {
          "order": 8,
          "at": 570,
          "caption": "자판기에 넣으니 선물 이 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 9,
          "at": 626,
          "caption": "할아버지와 '웬일' 을 소리 내어 읽었어요.",
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
