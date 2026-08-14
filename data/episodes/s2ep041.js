/* 시즌2 41화 「웃다 / 울다」 — 반대말
 *
 * 아이가 매일 겪는 두 감정이라 뜻을 이미 안다. 글자로 갈라 보는 것이 과제다.
 * 받침 ㅅ 과 ㄹ 하나 차이라 시즌1 받침 단원과도 이어진다.
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
  "episode": 41,
  "season": 2,
  "title": "웃다 / 울다",
  "videoId": "GgO4aItQ5I8",
  "focus": "반대말 — 웃다 ↔ 울다 (기쁠 때와 슬플 때)",
  "objective": "반대말로 이야기를 통해 한글을 익힌다",
  "jamo": {
    "new": [],
    "seen": []
  },
  "targetWords": [
    "웃다",
    "울다"
  ],
  "wordFocus": {
    "kind": "antonym",
    "words": [
      "웃다",
      "울다"
    ]
  },
  "rewards": {
    "cards": [],
    "words": [
      "웃다",
      "울다"
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
          "sentence": "재미있는 이야기를 듣고 깔깔 ___.",
          "options": [
            {
              "word": "웃다",
              "correct": true
            },
            {
              "word": "울다",
              "why": "울다는 슬플 때 눈물이 나는 거예요."
            }
          ],
          "hint": "재미있다고 했어요.",
          "after": "기쁘고 재미있을 때 웃어요."
        },
        {
          "sentence": "넘어져서 아파 엉엉 ___.",
          "options": [
            {
              "word": "울다",
              "correct": true
            },
            {
              "word": "웃다",
              "why": "아플 때는 웃지 않아요."
            }
          ],
          "hint": "아프다고 했어요.",
          "after": "슬프거나 아플 때 울어요."
        },
        {
          "sentence": "웃다의 반대말은 ___.",
          "options": [
            {
              "word": "울다",
              "correct": true
            },
            {
              "word": "자다",
              "why": "자다는 잠자는 거예요. 반대말이 아니에요."
            },
            {
              "word": "먹다",
              "why": "먹다는 음식을 먹는 거예요. 반대말이 아니에요."
            }
          ],
          "prompt": "반대말을 골라요",
          "after": "웃다의 반대말은 울다예요."
        },
        {
          "sentence": "받침이 시옷인 낱말은 ___.",
          "options": [
            {
              "word": "웃다",
              "correct": true
            },
            {
              "word": "울다",
              "why": "울다의 받침은 리을이에요."
            }
          ],
          "prompt": "받침을 보고 골라요",
          "after": "웃다는 받침 ㅅ, 울다는 받침 ㄹ 이에요."
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
            "아기가",
            "환하게",
            "웃어요"
          ],
          "say": "아기가 환하게 웃어요",
          "decoys": [
            "울어요"
          ],
          "hint": "누가? 어떻게? 무엇을 해요?"
        },
        {
          "words": [
            "동생이",
            "아파서",
            "울어요"
          ],
          "say": "동생이 아파서 울어요",
          "decoys": [
            "웃어요"
          ],
          "hint": "누가? 왜? 무엇을 해요?"
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
          "word": "웃다",
          "pic": "😄"
        },
        {
          "word": "울다",
          "pic": "😢"
        },
        {
          "word": "기쁘다",
          "pic": "🎉"
        },
        {
          "word": "슬프다",
          "pic": "💧"
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
          "target": "웃다",
          "kind": "word",
          "prompt": "'웃다' 를 따라 써 보세요",
          "note": "받침은 시옷이에요."
        },
        {
          "target": "울다",
          "kind": "word",
          "prompt": "'울다' 를 따라 써 보세요",
          "note": "받침은 리을이에요."
        }
      ]
    }
  ]
}
  );
})(window.AIYA);
