/* 시즌2 61화 「존댓말 / 반말」 — 반대말
 *
 * 글자가 아니라 **말을 쓰는 상황**을 배우는 회차다. 6~7세가 어린이집과
 * 집에서 매일 겪는 것이라, 낱말 공부이자 생활 공부가 된다.
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
  "episode": 61,
  "season": 2,
  "title": "존댓말 / 반말",
  "videoId": "oz1vBBDNSXo",
  "focus": "반대말 — 존댓말 ↔ 반말 (누구에게 쓰는 말인가)",
  "objective": "반대말로 이야기를 통해 한글을 익힌다",
  "jamo": {
    "new": [],
    "seen": []
  },
  "targetWords": [
    "존댓말",
    "반말"
  ],
  "wordFocus": {
    "kind": "antonym",
    "words": [
      "존댓말",
      "반말"
    ]
  },
  "rewards": {
    "cards": [],
    "words": [
      "존댓말",
      "반말"
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
          "sentence": "할머니께는 '안녕히 계세요' 라고 ___ 을 써요.",
          "options": [
            {
              "word": "존댓말",
              "correct": true
            },
            {
              "word": "반말",
              "why": "어른께 반말을 쓰면 예의가 없어요."
            }
          ],
          "hint": "어른께 쓰는 말이에요.",
          "after": "어른께는 존댓말을 써요."
        },
        {
          "sentence": "친한 친구에게는 '잘 가' 라고 ___ 을 써요.",
          "options": [
            {
              "word": "반말",
              "correct": true
            },
            {
              "word": "존댓말",
              "why": "친구끼리는 반말을 써도 돼요."
            }
          ],
          "hint": "또래 친구에게 쓰는 말이에요.",
          "after": "친구끼리는 반말을 써요."
        },
        {
          "sentence": "'밥 먹었어요?' 는 ___ 이에요.",
          "options": [
            {
              "word": "존댓말",
              "correct": true
            },
            {
              "word": "반말",
              "why": "'요' 로 끝나면 존댓말이에요."
            }
          ],
          "hint": "말 끝을 보세요.",
          "after": "말 끝에 '요' 가 붙으면 존댓말이에요."
        },
        {
          "sentence": "선생님께 드리는 말은 ___ 이에요.",
          "options": [
            {
              "word": "존댓말",
              "correct": true
            },
            {
              "word": "반말",
              "why": "선생님은 어른이라 존댓말을 써요."
            }
          ],
          "after": "어른께는 존댓말, 친구에게는 반말이에요."
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
            "할머니께",
            "존댓말을",
            "써요"
          ],
          "say": "할머니께 존댓말을 써요",
          "decoys": [
            "반말을"
          ],
          "hint": "누구께? 무엇을? 어떻게 해요?"
        },
        {
          "words": [
            "친구에게",
            "반말을",
            "해요"
          ],
          "say": "친구에게 반말을 해요",
          "decoys": [
            "존댓말을"
          ],
          "hint": "누구에게? 무엇을? 어떻게 해요?"
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
          "word": "존댓말",
          "pic": "🙇"
        },
        {
          "word": "반말",
          "pic": "🧒"
        },
        {
          "word": "할머니",
          "pic": "👵"
        },
        {
          "word": "친구",
          "pic": "🧑‍🤝‍🧑"
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
          "target": "존댓말",
          "kind": "word",
          "prompt": "'존댓말' 를 따라 써 보세요",
          "note": "받침이 셋이나 들어가요. 천천히 써요."
        },
        {
          "target": "반말",
          "kind": "word",
          "prompt": "'반말' 를 따라 써 보세요",
          "note": "받침 ㄴ 과 ㄹ 이 들어가요."
        }
      ]
    }
  ]
}
  );
})(window.AIYA);
