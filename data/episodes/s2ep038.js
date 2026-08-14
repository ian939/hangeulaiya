/* 시즌2 38화 「이기다 / 지다 / 비기다」 — 서로 관련 있는 세 낱말
 *
 * 둘이 아니라 **셋**을 가려야 해서 앞 회차들보다 한 단계 어렵다.
 * 가위바위보처럼 아이가 매일 하는 놀이라 뜻은 이미 안다.
 *
 * 이 파일은 tools/gen_s2.py 가 만들었습니다. 손으로 고치면 다음 생성 때
 * 덮어써집니다. 내용을 바꾸려면 tools/s2_specs.py 를 고치고 다시 생성하세요.
 *
 * 줄거리 컷(이야기 퀴즈·이야기 순서)은 자막을 받은 뒤 채웁니다.
 * 낱말과 문장이 이 단원의 본 내용이라, 그것부터 넣었습니다.
 */
(function (AIYA) {
  'use strict';
  AIYA.registerEpisode(
{
  "episode": 38,
  "season": 2,
  "title": "이기다 / 지다 / 비기다",
  "videoId": "37-fOP6GJTg",
  "focus": "관련 있는 세 낱말 — 이기다 · 지다 · 비기다",
  "objective": "서로 관련 있는 세 낱말로 이야기를 통해 한글을 익힌다",
  "jamo": {
    "new": [],
    "seen": []
  },
  "targetWords": [
    "이기다",
    "지다",
    "비기다"
  ],
  "wordFocus": {
    "kind": "trio",
    "words": [
      "이기다",
      "지다",
      "비기다"
    ]
  },
  "rewards": {
    "cards": [],
    "words": [
      "이기다",
      "지다",
      "비기다"
    ]
  },
  "activities": [
    {
      "type": "wordpair",
      "id": "W",
      "title": "낱말 고르기",
      "courses": [
        "short",
        "full"
      ],
      "shortCount": 3,
      "items": [
        {
          "sentence": "가위바위보에서 내가 보를 내고 상대가 바위를 냈어요. 나는 ___.",
          "options": [
            {
              "word": "이기다",
              "correct": true
            },
            {
              "word": "지다",
              "why": "보는 바위를 이겨요."
            },
            {
              "word": "비기다",
              "why": "서로 다른 것을 냈으니 비기지 않아요."
            }
          ],
          "hint": "보는 바위를 감싸요.",
          "after": "상대보다 잘했을 때 이기다예요."
        },
        {
          "sentence": "둘 다 가위를 냈어요. 그래서 ___.",
          "options": [
            {
              "word": "비기다",
              "correct": true
            },
            {
              "word": "이기다",
              "why": "같은 것을 내면 이기지 않아요."
            },
            {
              "word": "지다",
              "why": "같은 것을 내면 지지도 않아요."
            }
          ],
          "hint": "똑같은 것을 냈어요.",
          "after": "둘 다 같아서 승부가 안 날 때 비기다예요."
        },
        {
          "sentence": "달리기에서 꼴찌로 들어왔어요. 시합에서 ___.",
          "options": [
            {
              "word": "지다",
              "correct": true
            },
            {
              "word": "이기다",
              "why": "꼴찌는 이긴 것이 아니에요."
            },
            {
              "word": "비기다",
              "why": "순서가 갈렸으니 비긴 것이 아니에요."
            }
          ],
          "after": "상대보다 못했을 때 지다예요."
        },
        {
          "sentence": "이기다의 반대말은 ___.",
          "options": [
            {
              "word": "지다",
              "correct": true
            },
            {
              "word": "비기다",
              "why": "비기다는 승부가 안 난 거예요. 반대말이 아니에요."
            }
          ],
          "prompt": "반대말을 골라요",
          "after": "이기다 ↔ 지다 가 반대말이고, 비기다는 그 사이예요."
        }
      ]
    },
    {
      "type": "sentence",
      "id": "S",
      "title": "문장 만들기",
      "courses": [
        "full"
      ],
      "items": [
        {
          "words": [
            "내가",
            "가위바위보에서",
            "이겼어요"
          ],
          "say": "내가 가위바위보에서 이겼어요",
          "decoys": [
            "졌어요"
          ],
          "hint": "누가? 무엇에서? 어떻게 했어요?"
        },
        {
          "words": [
            "둘이",
            "똑같이",
            "내서",
            "비겼어요"
          ],
          "say": "둘이 똑같이 내서 비겼어요",
          "decoys": [
            "이겼어요"
          ],
          "hint": "누가? 어떻게? 왜? 어떻게 됐어요?"
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
      "prompt": "낱말과 그림을 이어 보세요",
      "pairs": [
        {
          "word": "이기다",
          "pic": "🥇"
        },
        {
          "word": "지다",
          "pic": "😞"
        },
        {
          "word": "비기다",
          "pic": "🤝"
        },
        {
          "word": "가위바위보",
          "pic": "✌️"
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
      "toleranceEm": 0.15,
      "passScore": 0.57,
      "items": [
        {
          "target": "이기다",
          "kind": "word",
          "prompt": "'이기다' 를 따라 써 보세요",
          "note": "받침이 없는 글자만 있어요."
        },
        {
          "target": "비기다",
          "kind": "word",
          "prompt": "'비기다' 를 따라 써 보세요",
          "note": "이기다 앞에 비 를 붙였어요."
        }
      ]
    }
  ]
}
  );
})(window.AIYA);
