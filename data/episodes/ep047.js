/* 47화 「월」 — 모음 ㅝ — ㅜ + ㅓ
 *
 * 이 파일은 tools/gen_episodes.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/episode_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep047.txt)을 읽어 확인했습니다.
 * 이 회차에는 천지·개벽이 나오지 않습니다 — 아·이·야 세 용사가 자모를 찾아옵니다.
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 47,
  "title": "월",
  "videoId": "cVzNamRvh_4",
  "objective": "복잡한 모음 'ㅝ'의 소리를 인식한다.",
  "focus": "모음 ㅝ — ㅜ + ㅓ",
  "jamo": {
    "new": [
      "ㅝ"
    ],
    "seen": [
      "ㅇ",
      "ㅓ",
      "ㅜ",
      "받침 ㄹ"
    ]
  },
  "targetWords": [
    "월"
  ],
  "rewards": {
    "cards": [
      "ㅝ"
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
          "at": 352,
          "options": [
            {
              "label": "아령",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "아령",
                "emoji": "🏋️"
              },
              "correct": true
            },
            {
              "label": "털실",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "털실",
                "emoji": "🧶"
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
          "q": "받침 리을은 어디에서 찾았나요?",
          "at": 588,
          "options": [
            {
              "label": "털실",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "털실",
                "emoji": "🧶"
              },
              "correct": true
            },
            {
              "label": "아령",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "아령",
                "emoji": "🏋️"
              }
            }
          ]
        },
        {
          "q": "자판기에서 무엇이 나왔나요?",
          "at": 644,
          "options": [
            {
              "label": "초대장",
              "pic": {
                "kind": "scene",
                "sceneKind": "place",
                "place": "초대장"
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
          "say": "워",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "hint": "우와 어가 만나면 워가 돼요",
          "options": [
            {
              "label": "ㅝ",
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
          "say": "월",
          "prompt": "잘 듣고 같은 글자를 골라요",
          "options": [
            {
              "label": "월",
              "correct": true
            },
            {
              "label": "울",
              "relation": "containment"
            }
          ]
        },
        {
          "say": "워",
          "prompt": "비슷한 모음이 있어요. 잘 듣고 골라요",
          "options": [
            {
              "label": "ㅝ",
              "correct": true
            },
            {
              "label": "ㅘ",
              "relation": "mirrorPair"
            },
            {
              "label": "ㅜ",
              "relation": "containment"
            }
          ]
        },
        {
          "say": "더워, 더위, 추워. 끝소리가 다른 낱말은 무엇인가요?",
          "prompt": "끝소리가 다른 낱말은 무엇인가요?",
          "at": 786,
          "options": [
            {
              "label": "더워",
              "correct": false,
              "relation": "oneVowelDiff"
            },
            {
              "label": "더위",
              "correct": true
            },
            {
              "label": "추워",
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
          "target": "ㅝ",
          "position": "jung",
          "cols": 4,
          "targetCount": 4,
          "prompt": "워를 모두 찾아 눌러 보세요",
          "distractors": [
            {
              "jamo": "ㅘ",
              "relation": "mirrorPair",
              "count": 3
            },
            {
              "jamo": "ㅜ",
              "relation": "containment",
              "count": 3
            }
          ],
          "missHint": "이건 워가 아니에요. 모양을 다시 보세요."
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
          "target": "월",
          "locked": [
            "cho"
          ],
          "at": 644,
          "prompt": "첫 자음은 넣어 두었어요. 나머지를 채워 주세요!",
          "decoys": [
            {
              "jamo": "ㅘ",
              "relation": "mirrorPair"
            },
            {
              "jamo": "ㅜ",
              "relation": "containment"
            }
          ]
        },
        {
          "target": "월",
          "prompt": "'월' 을 처음부터 만들어 보세요.",
          "decoys": [
            {
              "jamo": "ㅘ",
              "relation": "mirrorPair"
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
      "type": "chunji",
      "id": "I",
      "title": "사라진 글자",
      "courses": [
        "full"
      ],
      "items": [
        {
          "target": "월",
          "broken": "울",
          "prompt": "모음이 반쪽만 남았어요! 워로 고쳐 주세요.",
          "tray": [
            {
              "jamo": "ㅜ",
              "relation": "containment"
            },
            {
              "jamo": "ㅓ",
              "relation": "containment"
            }
          ]
        },
        {
          "target": "월",
          "broken": "왈",
          "prompt": "왈? 비슷하지만 다른 글자예요. 고쳐 주세요.",
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
      "prompt": "워 낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "월",
          "pic": "📅"
        },
        {
          "word": "원",
          "pic": "⭕"
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
          "target": "ㅝ",
          "kind": "jamo",
          "position": "jung",
          "prompt": "워를 따라 써 보세요"
        },
        {
          "target": "월",
          "kind": "syllable",
          "prompt": "'월' 을 따라 써 보세요",
          "note": "우와 어가 만나 워가 돼요."
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
      "at": 93,
      "prompt": "이야기 순서대로 눌러 보세요",
      "firstCutGiven": true,
      "cuts": [
        {
          "order": 1,
          "at": 113,
          "caption": "달력에 생일을 표시하고 초대장을 만들려 했어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "situation"
          }
        },
        {
          "order": 2,
          "at": 234,
          "caption": "초대장에 날짜를 쓰려는데 '월' 이 너무 어려웠어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "problem"
          }
        },
        {
          "order": 3,
          "at": 264,
          "caption": "'한글용사 아이야!' 하고 불렀어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "summon"
          }
        },
        {
          "order": 4,
          "at": 352,
          "caption": "아령 에서 이응을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "아령",
            "emoji": "🏋️",
            "jamo": "ㅇ",
            "position": "cho"
          }
        },
        {
          "order": 5,
          "at": 368,
          "caption": "우와 어가 만나 워가 되었어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "merge",
            "jamo": "ㅝ"
          }
        },
        {
          "order": 6,
          "at": 588,
          "caption": "털실 에서 받침 리을을 찾았어요.",
          "pic": {
            "kind": "scene",
            "sceneKind": "place",
            "place": "털실",
            "emoji": "🧶",
            "jamo": "ㄹ",
            "position": "jong"
          }
        },
        {
          "order": 7,
          "at": 644,
          "caption": "자판기에 넣으니 초대장이 나왔어요!",
          "pic": {
            "kind": "scene",
            "sceneKind": "vending"
          }
        },
        {
          "order": 8,
          "at": 672,
          "caption": "할아버지와 '월' 을 소리 내어 읽었어요.",
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
