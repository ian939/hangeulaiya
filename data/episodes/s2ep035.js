/* 시즌2 35화 「숟가락 / 젓가락」 — 짝을 이루는 낱말
 *
 * '가락' 은 같고 앞글자만 다르다. 그리고 받침이 ㄷ 과 ㅅ 으로 갈리는데
 * 소리는 둘 다 [ㄷ] 이다 — 시즌1 23화에서 배운 그 문제가 다시 나온다.
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
  "episode": 35,
  "season": 2,
  "title": "숟가락 / 젓가락",
  "videoId": "sq3Ps6WJHcQ",
  "focus": "짝을 이루는 낱말 — 숟가락 / 젓가락 (뒷부분이 같아요)",
  "objective": "짝을 이루는 낱말로 이야기를 통해 한글을 익힌다",
  "jamo": {
    "new": [],
    "seen": []
  },
  "targetWords": [
    "숟가락",
    "젓가락"
  ],
  "wordFocus": {
    "kind": "related",
    "words": [
      "숟가락",
      "젓가락"
    ]
  },
  "rewards": {
    "cards": [],
    "words": [
      "숟가락",
      "젓가락"
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
          "sentence": "국을 떠먹을 때는 ___ 을 써요.",
          "options": [
            {
              "word": "숟가락",
              "correct": true
            },
            {
              "word": "젓가락",
              "why": "젓가락으로는 국물을 뜰 수 없어요."
            }
          ],
          "hint": "국물을 뜨는 것이에요.",
          "after": "국물을 뜨는 것은 숟가락이에요."
        },
        {
          "sentence": "반찬을 집을 때는 ___ 을 써요.",
          "options": [
            {
              "word": "젓가락",
              "correct": true
            },
            {
              "word": "숟가락",
              "why": "숟가락으로는 집기 어려워요."
            }
          ],
          "hint": "집는 것이에요.",
          "after": "집을 때 쓰는 것은 젓가락이에요."
        },
        {
          "sentence": "두 낱말에서 똑같은 부분은 ___ 이에요.",
          "options": [
            {
              "word": "가락",
              "correct": true
            },
            {
              "word": "숟",
              "why": "숟 은 숟가락에만 있어요."
            },
            {
              "word": "젓",
              "why": "젓 은 젓가락에만 있어요."
            }
          ],
          "prompt": "같은 부분을 골라요",
          "after": "앞글자가 무엇을 하는 물건인지 정해요."
        },
        {
          "sentence": "받침이 디귿인 낱말은 ___ 이에요.",
          "options": [
            {
              "word": "숟가락",
              "correct": true
            },
            {
              "word": "젓가락",
              "why": "젓가락의 받침은 시옷이에요."
            }
          ],
          "prompt": "받침을 보고 골라요",
          "hint": "소리는 둘 다 [ㄷ] 으로 같아요. 낱말을 기억해야 해요.",
          "after": "숟가락은 받침 ㄷ, 젓가락은 받침 ㅅ 이에요. 소리는 같아요."
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
            "숟가락으로",
            "국을",
            "떠요"
          ],
          "say": "숟가락으로 국을 떠요",
          "decoys": [
            "젓가락으로"
          ],
          "hint": "무엇으로? 무엇을? 어떻게 해요?"
        },
        {
          "words": [
            "젓가락으로",
            "반찬을",
            "집어요"
          ],
          "say": "젓가락으로 반찬을 집어요",
          "decoys": [
            "숟가락으로"
          ],
          "hint": "무엇으로? 무엇을? 어떻게 해요?"
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
          "word": "숟가락",
          "pic": "🥄"
        },
        {
          "word": "젓가락",
          "pic": "🥢"
        },
        {
          "word": "밥",
          "pic": "🍚"
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
      "toleranceEm": 0.15,
      "passScore": 0.57,
      "items": [
        {
          "target": "숟가락",
          "kind": "word",
          "prompt": "'숟가락' 를 따라 써 보세요",
          "note": "첫 글자 받침은 디귿이에요."
        },
        {
          "target": "젓가락",
          "kind": "word",
          "prompt": "'젓가락' 를 따라 써 보세요",
          "note": "첫 글자 받침은 시옷이에요."
        }
      ]
    }
  ]
}
  );
})(window.AIYA);
