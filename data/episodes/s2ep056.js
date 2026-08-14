/* 시즌2 56화 「비누 / 비눗방울」 — 낱말이 합쳐진 말
 *
 * 낱말 둘이 합쳐져 새 낱말이 된다. 합칠 때 사이에 ㅅ 이 들어가는 것도
 * 눈으로 볼 수 있다 (비누 + 방울 → 비눗방울).
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
  "episode": 56,
  "season": 2,
  "title": "비누 / 비눗방울",
  "videoId": "UaZhqvl8oUI",
  "focus": "낱말이 합쳐진 말 — 비누 + 방울 = 비눗방울",
  "objective": "낱말이 합쳐진 말로 이야기를 통해 한글을 익힌다",
  "jamo": {
    "new": [],
    "seen": []
  },
  "targetWords": [
    "비누",
    "비눗방울"
  ],
  "wordFocus": {
    "kind": "compound",
    "words": [
      "비누",
      "비눗방울"
    ]
  },
  "rewards": {
    "cards": [],
    "words": [
      "비누",
      "비눗방울"
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
          "sentence": "손을 씻을 때 ___ 로 거품을 냈어요.",
          "options": [
            {
              "word": "비누",
              "correct": true
            },
            {
              "word": "비눗방울",
              "why": "비눗방울은 공중에 떠다니는 동그란 것이에요."
            }
          ],
          "hint": "손을 씻는 것이에요.",
          "after": "씻을 때 쓰는 것이 비누예요."
        },
        {
          "sentence": "후 불었더니 동그란 ___ 이 하늘로 날아갔어요.",
          "options": [
            {
              "word": "비눗방울",
              "correct": true
            },
            {
              "word": "비누",
              "why": "비누는 날아가지 않아요."
            }
          ],
          "hint": "동그랗게 날아간다고 했어요.",
          "after": "불면 날아가는 동그란 것이 비눗방울이에요."
        },
        {
          "sentence": "비눗방울은 ___ 와 방울이 합쳐진 낱말이에요.",
          "options": [
            {
              "word": "비누",
              "correct": true
            },
            {
              "word": "거품",
              "why": "거품은 들어 있지 않아요."
            },
            {
              "word": "물",
              "why": "물은 들어 있지 않아요."
            }
          ],
          "prompt": "합쳐진 낱말을 골라요",
          "after": "비누 + 방울 = 비눗방울이에요."
        },
        {
          "sentence": "두 낱말을 합칠 때 사이에 들어간 받침은 ___ 이에요.",
          "options": [
            {
              "word": "ㅅ",
              "correct": true
            },
            {
              "word": "ㄴ",
              "why": "비눗방울에는 사이 ㄴ 이 없어요."
            },
            {
              "word": "ㅁ",
              "why": "비눗방울에는 사이 ㅁ 이 없어요."
            }
          ],
          "prompt": "사이에 들어간 받침을 골라요",
          "hint": "비누 의 누 아래를 보세요.",
          "after": "낱말을 합칠 때 사이에 ㅅ 이 들어가기도 해요."
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
            "비누로",
            "손을",
            "씻어요"
          ],
          "say": "비누로 손을 씻어요",
          "decoys": [
            "비눗방울로"
          ],
          "hint": "무엇으로? 무엇을? 어떻게 해요?"
        },
        {
          "words": [
            "비눗방울이",
            "하늘로",
            "날아가요"
          ],
          "say": "비눗방울이 하늘로 날아가요",
          "decoys": [
            "비누가"
          ],
          "hint": "무엇이? 어디로? 어떻게 해요?"
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
          "word": "비누",
          "pic": "🧼"
        },
        {
          "word": "비눗방울",
          "pic": "🫧"
        },
        {
          "word": "물",
          "pic": "💧"
        },
        {
          "word": "손",
          "pic": "✋"
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
          "target": "비누",
          "kind": "word",
          "prompt": "'비누' 를 따라 써 보세요",
          "note": "받침이 없는 두 글자예요."
        },
        {
          "target": "비눗방울",
          "kind": "word",
          "prompt": "'비눗방울' 를 따라 써 보세요",
          "note": "누 아래에 받침 ㅅ 을 넣어요."
        }
      ]
    }
  ]
}
  );
})(window.AIYA);
