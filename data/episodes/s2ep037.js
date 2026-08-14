/* 시즌2 37화 「고물 / 괴물」 — 형태가 비슷한 낱말
 *
 * ㅗ 와 ㅚ, 모음 하나로 뜻이 갈린다. 시즌1 복잡한 모음 단원(46화 ㅚ)에서
 * 배운 것이 낱말 수준에서 다시 나온다.
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
  "episode": 37,
  "season": 2,
  "title": "고물 / 괴물",
  "videoId": "rKpKREz0mHg",
  "focus": "형태가 비슷한 낱말 — 고물 / 괴물 (모음 하나 차이)",
  "objective": "형태가 비슷한 낱말로 이야기를 통해 한글을 익힌다",
  "jamo": {
    "new": [],
    "seen": []
  },
  "targetWords": [
    "고물",
    "괴물"
  ],
  "wordFocus": {
    "kind": "nearPair",
    "words": [
      "고물",
      "괴물"
    ]
  },
  "rewards": {
    "cards": [],
    "words": [
      "고물",
      "괴물"
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
          "sentence": "망가져서 버리려는 낡은 물건을 ___ 이라고 해요.",
          "options": [
            {
              "word": "고물",
              "correct": true
            },
            {
              "word": "괴물",
              "why": "괴물은 무섭게 생긴 상상 속 존재예요."
            }
          ],
          "hint": "오래되고 낡았다는 뜻이에요.",
          "after": "낡아서 못 쓰는 물건이 고물이에요."
        },
        {
          "sentence": "무섭게 생긴 ___ 이 나타났어요!",
          "options": [
            {
              "word": "괴물",
              "correct": true
            },
            {
              "word": "고물",
              "why": "고물은 무섭지 않아요. 낡은 물건이에요."
            }
          ],
          "hint": "무섭다고 했어요.",
          "after": "무섭게 생긴 것은 괴물이에요."
        },
        {
          "sentence": "버린 ___ 이 모여 커다란 로봇이 되었어요.",
          "options": [
            {
              "word": "고물",
              "correct": true
            },
            {
              "word": "괴물",
              "why": "버리는 것은 고물이에요."
            }
          ],
          "after": "버린 낡은 물건이 고물이에요."
        },
        {
          "sentence": "모음이 ㅚ 인 낱말은 ___ 예요.",
          "options": [
            {
              "word": "괴물",
              "correct": true
            },
            {
              "word": "고물",
              "why": "고물의 첫 글자 모음은 ㅗ 예요."
            }
          ],
          "prompt": "모음을 보고 골라요",
          "after": "ㅗ 는 고물, ㅚ 는 괴물. 모음 하나로 뜻이 달라져요."
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
            "무서운",
            "괴물이",
            "나타났어요"
          ],
          "say": "무서운 괴물이 나타났어요",
          "decoys": [
            "고물이"
          ],
          "hint": "어떤? 누가? 무엇을 해요?"
        },
        {
          "words": [
            "낡은",
            "고물을",
            "버렸어요"
          ],
          "say": "낡은 고물을 버렸어요",
          "decoys": [
            "괴물을"
          ],
          "hint": "어떤? 무엇을? 어떻게 했어요?"
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
          "word": "고물",
          "pic": "🗑️"
        },
        {
          "word": "괴물",
          "pic": "👹"
        },
        {
          "word": "장난감",
          "pic": "🧸"
        },
        {
          "word": "로봇",
          "pic": "🤖"
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
          "target": "고물",
          "kind": "word",
          "prompt": "'고물' 를 따라 써 보세요",
          "note": "첫 글자 모음은 ㅗ 예요."
        },
        {
          "target": "괴물",
          "kind": "word",
          "prompt": "'괴물' 를 따라 써 보세요",
          "note": "첫 글자 모음은 ㅗ 와 ㅣ 가 만난 ㅚ 예요."
        }
      ]
    }
  ]
}
  );
})(window.AIYA);
