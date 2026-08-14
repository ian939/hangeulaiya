/* 시즌2 63화 「겁먹다 / 마음먹다」 — 짝을 이루는 낱말
 *
 * '먹다' 인데 음식을 먹는 게 아니다. 앞에 무엇이 오느냐로 뜻이 완전히
 * 달라진다 — 무서워하는 것과 굳게 결심하는 것.
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
  "episode": 63,
  "season": 2,
  "title": "겁먹다 / 마음먹다",
  "videoId": "J_uy5XQf3DY",
  "focus": "짝을 이루는 낱말 — 겁먹다 / 마음먹다 (둘 다 '먹다' 로 끝나요)",
  "objective": "짝을 이루는 낱말로 이야기를 통해 한글을 익힌다",
  "jamo": {
    "new": [],
    "seen": []
  },
  "targetWords": [
    "겁먹다",
    "마음먹다"
  ],
  "wordFocus": {
    "kind": "related",
    "words": [
      "겁먹다",
      "마음먹다"
    ]
  },
  "rewards": {
    "cards": [],
    "words": [
      "겁먹다",
      "마음먹다"
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
          "sentence": "어두운 곳이 무서워서 ___.",
          "options": [
            {
              "word": "겁먹다",
              "correct": true
            },
            {
              "word": "마음먹다",
              "why": "마음먹다는 굳게 결심한다는 뜻이에요."
            }
          ],
          "hint": "무섭다고 했어요.",
          "after": "무서워하는 것이 겁먹다예요."
        },
        {
          "sentence": "오늘은 꼭 자전거를 타겠다고 ___.",
          "options": [
            {
              "word": "마음먹다",
              "correct": true
            },
            {
              "word": "겁먹다",
              "why": "겁먹다는 무서워하는 거예요."
            }
          ],
          "hint": "꼭 하겠다고 정했어요.",
          "after": "굳게 정하는 것이 마음먹다예요."
        },
        {
          "sentence": "두 낱말에서 똑같은 부분은 ___ 예요.",
          "options": [
            {
              "word": "먹다",
              "correct": true
            },
            {
              "word": "겁",
              "why": "겁 은 겁먹다에만 있어요."
            },
            {
              "word": "마음",
              "why": "마음 은 마음먹다에만 있어요."
            }
          ],
          "prompt": "같은 부분을 골라요",
          "after": "둘 다 먹다 로 끝나지만 음식을 먹는 것이 아니에요."
        },
        {
          "sentence": "'먹다' 앞에 무엇이 오는지에 따라 ___ 이 달라져요.",
          "options": [
            {
              "word": "뜻",
              "correct": true
            },
            {
              "word": "소리",
              "why": "소리는 그대로예요."
            },
            {
              "word": "받침",
              "why": "받침도 그대로예요."
            }
          ],
          "prompt": "무엇이 달라지는지 골라요",
          "after": "앞에 오는 낱말이 뜻을 정해요. 겁이면 무서워하고, 마음이면 결심해요."
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
            "어두워서",
            "겁먹었어요"
          ],
          "say": "어두워서 겁먹었어요",
          "decoys": [
            "마음먹었어요"
          ],
          "hint": "왜? 어떻게 했어요?"
        },
        {
          "words": [
            "자전거를",
            "타겠다고",
            "마음먹었어요"
          ],
          "say": "자전거를 타겠다고 마음먹었어요",
          "decoys": [
            "겁먹었어요"
          ],
          "hint": "무엇을? 어떻게 하겠다고? 어떻게 했어요?"
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
          "word": "겁먹다",
          "pic": "😨"
        },
        {
          "word": "마음먹다",
          "pic": "💪"
        },
        {
          "word": "자전거",
          "pic": "🚲"
        },
        {
          "word": "밥",
          "pic": "🍚"
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
          "target": "겁먹다",
          "kind": "word",
          "prompt": "'겁먹다' 를 따라 써 보세요",
          "note": "첫 글자에 받침 ㅂ 이 들어가요."
        },
        {
          "target": "마음먹다",
          "kind": "word",
          "prompt": "'마음먹다' 를 따라 써 보세요",
          "note": "네 글자예요. 천천히 써요."
        }
      ]
    }
  ]
}
  );
})(window.AIYA);
