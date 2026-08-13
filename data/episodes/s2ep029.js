/* 시즌2 29화 「싸다 / 비싸다」 — 반대말
 *
 * 시즌2 는 시즌1 과 배우는 것이 다르다. 시즌1 은 글자(자모)를 배웠고,
 * 시즌2 는 **낱말의 뜻**을 배운다. 글자를 다 읽는 아이에게 필요한 다음 단계다.
 *
 * 이 회차의 학습 지점
 *   1. 싸다 ↔ 비싸다 는 반대말이다.
 *   2. '비-' 한 글자가 붙어 뜻이 뒤집힌다. 글자 하나가 뜻을 바꾼다는 걸
 *      받침이 아니라 **낱말 수준**에서 다시 본다.
 *   3 값이라는 개념은 6~7세가 겪어 본 것이라 문장으로 판단할 수 있다.
 *
 * 줄거리 컷(이야기 퀴즈·순서)은 자막을 받은 뒤 채운다. 유튜브 자막 요청 제한에
 * 걸려 있어서, 지금은 낱말·문장 활동만 넣었다. 그게 이 회차의 본 내용이다.
 */
(function (AIYA) {
  'use strict';

  AIYA.registerEpisode({
    episode: 29,
    season: 2,
    title: '싸다 / 비싸다',
    videoId: 'aoTigHMxDcY',
    focus: '반대말 — 싸다 ↔ 비싸다',
    objective: '반대 관계의 두 낱말로 이야기를 통해 한글을 익힌다',
    jamo: { new: [], seen: [] },
    targetWords: ['싸다', '비싸다'],
    wordFocus: { kind: 'antonym', pair: ['싸다', '비싸다'] },
    rewards: { cards: [], words: ['싸다', '비싸다'] },

    activities: [
      {
        type: 'wordpair', id: 'W', title: '낱말 고르기',
        courses: ['short', 'full'], shortCount: 3,
        items: [
          {
            sentence: '이 사탕은 백 원이에요. 정말 ___.',
            hint: '값이 낮으면 어떤 낱말을 쓸까요?',
            options: [
              { word: '싸다', correct: true },
              { word: '비싸다', why: '비싸다는 값이 높을 때 써요. 백 원은 낮은 값이에요.' }
            ],
            after: '값이 낮으면 싸다예요.'
          },
          {
            sentence: '이 장난감은 십만 원이에요. 너무 ___.',
            hint: '값이 높으면 어떤 낱말을 쓸까요?',
            options: [
              { word: '비싸다', correct: true },
              { word: '싸다', why: '싸다는 값이 낮을 때 써요. 십만 원은 높은 값이에요.' }
            ],
            after: '값이 높으면 비싸다예요. 싸다의 반대말이에요.'
          },
          {
            sentence: '천 원인 빵과 만 원인 케이크 중에 케이크가 더 ___.',
            hint: '두 값을 비교해 보세요.',
            options: [
              { word: '비싸다', correct: true },
              { word: '싸다', why: '만 원이 천 원보다 높으니 케이크가 비싸요.' }
            ],
            after: '더 높은 값이 비싼 거예요.'
          },
          {
            sentence: '싸다의 반대말은 ___.',
            prompt: '반대말을 골라요',
            hint: '앞에 한 글자가 붙어요.',
            options: [
              { word: '비싸다', correct: true },
              { word: '작다', why: '작다는 크기를 말해요. 값의 반대말이 아니에요.' },
              { word: '많다', why: '많다는 개수를 말해요. 값의 반대말이 아니에요.' }
            ],
            after: '싸다 앞에 비 한 글자가 붙어 반대말이 돼요.'
          },
          {
            sentence: '용돈이 조금 있어서 ___ 것을 골랐어요.',
            hint: '돈이 적을 때는 어떤 것을 고를까요?',
            options: [
              { word: '싼', correct: true },
              { word: '비싼', why: '돈이 조금 있으면 비싼 것은 사기 어려워요.' }
            ],
            after: '싸다가 낱말 앞에 오면 싼 으로 모양이 바뀌어요.'
          }
        ]
      },

      {
        type: 'sentence', id: 'S', title: '문장 만들기',
        courses: ['full'],
        items: [
          {
            words: ['사탕이', '아주', '싸요'],
            say: '사탕이 아주 싸요',
            decoys: ['비싸요'],
            hint: '무엇이? 얼마나? 어때요?'
          },
          {
            words: ['이', '가방은', '너무', '비싸요'],
            say: '이 가방은 너무 비싸요',
            decoys: ['싸요'],
            hint: '어느 것? 무엇이? 얼마나? 어때요?'
          },
          {
            words: ['싼', '것을', '골랐어요'],
            say: '싼 것을 골랐어요',
            decoys: ['비싼'],
            hint: '어떤? 무엇을? 어떻게 했어요?'
          }
        ]
      },

      {
        type: 'match', id: 'G', title: '낱말과 그림',
        courses: ['full'],
        prompt: '낱말과 그림을 이어 보세요',
        pairs: [
          { word: '싸다', pic: '🪙' },
          { word: '비싸다', pic: '💎' },
          { word: '사탕', pic: '🍬' },
          { word: '가방', pic: '🎒' }
        ]
      },

      {
        type: 'writing', id: 'E', title: '한글 쓰기',
        courses: ['short', 'full'], shortCount: 1,
        toleranceEm: 0.15, passScore: 0.57,
        items: [
          { target: '싸다', kind: 'word', prompt: "'싸다' 를 따라 써 보세요",
            note: '쌍시옷은 시옷 두 개를 나란히 써요.' },
          { target: '비싸다', kind: 'word', prompt: "'비싸다' 를 따라 써 보세요",
            note: '앞에 비 한 글자만 더 붙이면 반대말이 돼요.' }
        ]
      }
    ]
  });
})(window.AIYA);
