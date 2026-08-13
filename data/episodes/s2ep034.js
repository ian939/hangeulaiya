/* 시즌2 34화 「달 / 닭」 — 형태가 비슷한 낱말
 *
 * 이 회차를 고른 이유
 *   시즌1 겹받침 단원(51~60화)에서 배운 것이 낱말 수준에서 다시 나온다.
 *   달 → 닭 은 받침이 ㄹ 에서 겹받침 ㄺ 으로 늘어난 것이고, 소리도 [닥] 으로
 *   바뀐다. 글자 하나 차이로 하늘의 달과 꼬꼬댁 닭이 갈린다.
 *
 * 학습 지점
 *   1. 받침 하나가 늘어 뜻이 완전히 달라진다 (달 / 닭).
 *   2. 닭은 쓰는 것과 소리가 다르다 — [닥] 으로 소리 난다.
 *   3. 문장 안에서 어느 낱말인지 가려야 한다. '밤하늘에 뜬' vs '새벽에 우는'.
 *
 * 줄거리 컷은 자막을 받은 뒤 채운다.
 */
(function (AIYA) {
  'use strict';

  AIYA.registerEpisode({
    episode: 34,
    season: 2,
    title: '달 / 닭',
    videoId: 'KRMLLctW1t8',
    focus: '형태가 비슷한 낱말 — 달 / 닭 (받침 하나 차이)',
    objective: '비슷한 형태의 두 낱말로 이야기를 통해 한글을 익힌다',
    jamo: { new: [], seen: ['받침 ㄹ', '받침 ㄺ'] },
    targetWords: ['달', '닭'],
    wordFocus: { kind: 'nearPair', pair: ['달', '닭'] },
    pronunciation: '닥',
    rewards: { cards: [], words: ['달', '닭'] },

    activities: [
      {
        type: 'sound', id: 'B', title: '소리 듣고 고르기',
        courses: ['short', 'full'], shortCount: 3,
        items: [
          {
            say: '달',
            prompt: '잘 듣고 같은 글자를 골라요',
            hint: '받침이 하나인지 둘인지 들어 보세요',
            options: [
              { label: '달', correct: true },
              { label: '닭', relation: 'clusterPart',
                why: '닭은 받침이 두 글자예요. 소리도 [닥] 이에요.' }
            ]
          },
          {
            say: '닭',
            prompt: '[닥] 이라고 들렸어요. 어떻게 쓸까요?',
            hint: '받침이 두 글자인데 소리는 기역 하나만 나요',
            options: [
              { label: '닭', correct: true },
              { label: '닥', relation: 'soundSpellMismatch',
                why: '소리는 맞지만 이렇게 쓰는 낱말이 아니에요.' },
              { label: '달', relation: 'clusterPart',
                why: '달은 [달] 로 소리 나요. 끝에서 혀가 입천장에 붙어요.' }
            ],
            after: '닭은 리을기역을 쓰고 [닥] 으로 소리 내요.'
          },
          {
            say: '달, 닭. 받침이 두 글자인 낱말은 무엇인가요?',
            prompt: '받침이 두 글자인 낱말은 무엇인가요?',
            options: [
              { label: '닭', correct: true },
              { label: '달', relation: 'clusterPart' }
            ]
          }
        ]
      },

      {
        type: 'wordpair', id: 'W', title: '낱말 고르기',
        courses: ['short', 'full'], shortCount: 3,
        items: [
          {
            sentence: '밤하늘에 둥근 ___ 이 떴어요.',
            hint: '하늘에 있는 것일까요, 마당에 있는 것일까요?',
            options: [
              { word: '달', correct: true },
              { word: '닭', why: '닭은 마당에서 꼬꼬댁 우는 새예요.' }
            ],
            after: '하늘에 뜨는 것은 달이에요.'
          },
          {
            sentence: '새벽에 ___ 이 꼬꼬댁 울었어요.',
            hint: '소리를 내는 것은 무엇일까요?',
            options: [
              { word: '닭', correct: true },
              { word: '달', why: '달은 소리를 내지 않아요.' }
            ],
            after: '꼬꼬댁 우는 것은 닭이에요. 받침이 두 글자예요.'
          },
          {
            sentence: '___ 이 알을 낳았어요.',
            hint: '알을 낳는 것은 무엇일까요?',
            options: [
              { word: '닭', correct: true },
              { word: '달', why: '달은 알을 낳지 않아요.' }
            ],
            after: '닭이 알을 낳아요. 그게 달걀이에요.'
          },
          {
            sentence: '받침이 두 글자인 낱말은 ___.',
            prompt: '받침을 보고 골라요',
            hint: '받침을 잘 보세요.',
            options: [
              { word: '닭', correct: true },
              { word: '달', why: '달은 받침이 리을 하나예요.' }
            ],
            after: '닭은 리을과 기역, 두 글자를 받침으로 써요.'
          }
        ]
      },

      {
        type: 'sentence', id: 'S', title: '문장 만들기',
        courses: ['full'],
        items: [
          {
            words: ['닭이', '새벽에', '울어요'],
            say: '닭이 새벽에 울어요',
            decoys: ['달이'],
            hint: '누가? 언제? 무엇을 해요?'
          },
          {
            words: ['달이', '밤하늘에', '떴어요'],
            say: '달이 밤하늘에 떴어요',
            decoys: ['닭이'],
            hint: '누가? 어디에? 무엇을 해요?'
          },
          {
            words: ['닭이', '알을', '낳았어요'],
            say: '닭이 알을 낳았어요',
            decoys: ['달이'],
            hint: '누가? 무엇을? 어떻게 했어요?'
          }
        ]
      },

      {
        type: 'chunji', id: 'I', title: '사라진 글자',
        courses: ['full'],
        items: [
          {
            target: '닭', broken: '달',
            prompt: '새벽에 우는 닭을 쓰려는데 받침이 하나뿐이에요. 고쳐 주세요!',
            tray: [{ jamo: 'ㄺ', relation: 'clusterPart' },
                   { jamo: 'ㄹ', relation: 'clusterPart' }]
          },
          {
            target: '닭', broken: '닥',
            prompt: '소리는 맞는데 글자가 달라요. 받침을 두 글자로 고쳐 주세요!',
            tray: [{ jamo: 'ㄺ', relation: 'clusterPart' },
                   { jamo: 'ㄱ', relation: 'clusterPart' }]
          }
        ]
      },

      {
        type: 'match', id: 'G', title: '낱말과 그림',
        courses: ['full'],
        prompt: '낱말과 그림을 이어 보세요',
        pairs: [
          { word: '달', pic: '🌙' },
          { word: '닭', pic: '🐔' },
          { word: '별', pic: '⭐' },
          { word: '알', pic: '🥚' }
        ]
      },

      {
        type: 'writing', id: 'E', title: '한글 쓰기',
        courses: ['short', 'full'], shortCount: 1,
        toleranceEm: 0.15, passScore: 0.57,
        items: [
          { target: '달', kind: 'syllable', prompt: "'달' 을 따라 써 보세요",
            note: '받침이 리을 하나예요.' },
          { target: '닭', kind: 'syllable', prompt: "'닭' 을 따라 써 보세요",
            note: '받침에 리을과 기역을 나란히 써요. 아래 칸이 좁으니 작게 써요.' }
        ]
      }
    ]
  });
})(window.AIYA);
