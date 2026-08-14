/* 시즌2 48화 「공 / 콩」 — 형태가 비슷한 낱말
 *
 * ㄱ 과 ㅋ, 첫소리 하나로 갈린다. 둘 다 둥글어서 그림으로는 헷갈리기 쉽고,
 * 그래서 문장을 읽어야 갈린다.
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
  "episode": 48,
  "season": 2,
  "title": "공 / 콩",
  "videoId": "HHrQbAmwBRk",
  "focus": "형태가 비슷한 낱말 — 공 / 콩 (거센소리 하나 차이)",
  "objective": "형태가 비슷한 낱말로 이야기를 통해 한글을 익힌다",
  "jamo": {
    "new": [],
    "seen": []
  },
  "targetWords": [
    "공",
    "콩"
  ],
  "wordFocus": {
    "kind": "nearPair",
    "words": [
      "공",
      "콩"
    ]
  },
  "rewards": {
    "cards": [],
    "words": [
      "공",
      "콩"
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
          "sentence": "운동장에서 ___ 을 차며 놀았어요.",
          "options": [
            {
              "word": "공",
              "correct": true
            },
            {
              "word": "콩",
              "why": "콩은 먹는 것이라 차고 놀 수 없어요."
            }
          ],
          "hint": "발로 차는 것이에요.",
          "after": "발로 차며 노는 것은 공이에요."
        },
        {
          "sentence": "밥에 ___ 을 넣어 먹었어요.",
          "options": [
            {
              "word": "콩",
              "correct": true
            },
            {
              "word": "공",
              "why": "공은 먹을 수 없어요."
            }
          ],
          "hint": "먹는 것이에요.",
          "after": "밥에 넣어 먹는 것은 콩이에요."
        },
        {
          "sentence": "___ 이 데굴데굴 굴러갔어요.",
          "options": [
            {
              "word": "공",
              "correct": true
            },
            {
              "word": "콩",
              "why": "콩도 구르지만, 차며 노는 큰 것은 공이에요."
            }
          ],
          "after": "차고 노는 둥근 것은 공이에요."
        },
        {
          "sentence": "바람을 세게 내보내는 소리로 시작하는 낱말은 ___ 이에요.",
          "options": [
            {
              "word": "콩",
              "correct": true
            },
            {
              "word": "공",
              "why": "공의 첫소리 ㄱ 은 바람이 세지 않아요."
            }
          ],
          "prompt": "첫소리를 보고 골라요",
          "hint": "손을 입 앞에 대면 바람이 느껴지는 소리예요.",
          "after": "ㅋ 은 바람이 세게 나오는 소리예요."
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
            "아이가",
            "공을",
            "찼어요"
          ],
          "say": "아이가 공을 찼어요",
          "decoys": [
            "콩을"
          ],
          "hint": "누가? 무엇을? 어떻게 했어요?"
        },
        {
          "words": [
            "밥에",
            "콩을",
            "넣었어요"
          ],
          "say": "밥에 콩을 넣었어요",
          "decoys": [
            "공을"
          ],
          "hint": "어디에? 무엇을? 어떻게 했어요?"
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
          "word": "공",
          "pic": "⚽"
        },
        {
          "word": "콩",
          "pic": "🫘"
        },
        {
          "word": "밥",
          "pic": "🍚"
        },
        {
          "word": "운동장",
          "pic": "🏟️"
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
          "target": "공",
          "kind": "syllable",
          "prompt": "'공' 를 따라 써 보세요",
          "note": "첫소리는 기역이에요."
        },
        {
          "target": "콩",
          "kind": "syllable",
          "prompt": "'콩' 를 따라 써 보세요",
          "note": "첫소리는 키읔이에요. 기역에 획을 하나 더 그어요."
        }
      ]
    }
  ]
}
  );
})(window.AIYA);
