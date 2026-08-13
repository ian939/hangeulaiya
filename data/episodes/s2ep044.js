/* 시즌2 44화 「감다」 — 한 낱말의 여러 뜻
 *
 * 세 회차 중 가장 어렵고, 지온이에게 가장 필요한 회차다.
 *
 * 왜 어려운가
 *   앞의 두 회차는 낱말이 둘이고 뜻이 둘이었다. 여기는 **낱말이 하나인데 뜻이
 *   셋**이다. 머리를 감다 · 눈을 감다 · 실을 감다. 글자가 똑같으니 글자를 아는
 *   것으로는 답이 갈리지 않는다. **문장의 나머지 부분을 읽어야** 뜻이 정해진다.
 *   이게 읽기에서 뜻으로 넘어가는 다음 단계다.
 *
 * 그래서 이 회차의 낱말 고르기는 방향이 반대다. 다른 회차는 문장을 주고 낱말을
 * 고르지만, 여기는 **'감다' 가 든 문장을 주고 무슨 뜻인지** 고르게 한다.
 *
 * 줄거리 컷은 자막을 받은 뒤 채운다.
 */
(function (AIYA) {
  'use strict';

  AIYA.registerEpisode({
    episode: 44,
    season: 2,
    title: '감다',
    videoId: 'SHo4YB40_ZI',
    focus: '한 낱말의 여러 뜻 — 머리를 감다 · 눈을 감다 · 실을 감다',
    objective: '다양한 뜻을 가진 낱말로 이야기를 통해 한글을 익힌다',
    jamo: { new: [], seen: [] },
    targetWords: ['감다'],
    wordFocus: { kind: 'polysemy', word: '감다',
                 senses: ['머리를 감다', '눈을 감다', '실을 감다'] },
    rewards: { cards: [], words: ['감다'] },

    activities: [
      {
        type: 'wordpair', id: 'W', title: '무슨 뜻일까요',
        courses: ['short', 'full'], shortCount: 3,
        items: [
          {
            sentence: '물과 비누로 머리를 감아요. 무엇을 하는 걸까요?',
            prompt: '문장을 읽고 무슨 뜻인지 골라요',
            hint: '물과 비누가 나와요.',
            options: [
              { word: '씻는다', correct: true },
              { word: '눈을 닫는다', why: '물과 비누로는 눈을 닫지 않아요.' },
              { word: '실을 돌린다', why: '머리는 실이 아니에요.' }
            ],
            after: '머리를 감다는 머리를 씻는 거예요.'
          },
          {
            sentence: '잠이 오면 눈을 감아요. 무엇을 하는 걸까요?',
            prompt: '문장을 읽고 무슨 뜻인지 골라요',
            hint: '잠이 온다고 했어요.',
            options: [
              { word: '눈을 닫는다', correct: true },
              { word: '씻는다', why: '잠이 올 때 눈을 씻지는 않아요.' },
              { word: '실을 돌린다', why: '눈은 실이 아니에요.' }
            ],
            after: '눈을 감다는 눈을 닫는 거예요.'
          },
          {
            sentence: '털실을 공처럼 둥글게 감아요. 무엇을 하는 걸까요?',
            prompt: '문장을 읽고 무슨 뜻인지 골라요',
            hint: '둥글게 만든다고 했어요.',
            options: [
              { word: '돌돌 말다', correct: true },
              { word: '씻는다', why: '털실을 물로 씻는 게 아니에요.' },
              { word: '눈을 닫는다', why: '털실에는 눈이 없어요.' }
            ],
            after: '실을 감다는 돌돌 마는 거예요.'
          },
          {
            sentence: '비누를 쓰는 것은 ___ 를 감는 거예요.',
            hint: '비누는 어디에 쓸까요?',
            options: [
              { word: '머리', correct: true },
              { word: '눈', why: '눈에는 비누를 쓰지 않아요.' },
              { word: '실', why: '실에는 비누를 쓰지 않아요.' }
            ],
            after: '같은 감다인데 앞에 오는 낱말이 뜻을 정해요.'
          },
          {
            sentence: '감다는 뜻이 몇 개일까요?',
            prompt: '오늘 배운 것을 떠올려 골라요',
            hint: '머리, 눈, 실 세 가지가 나왔어요.',
            options: [
              { word: '세 개', correct: true },
              { word: '한 개', why: '머리·눈·실, 세 가지 뜻이 나왔어요.' }
            ],
            // 정답만 맞히고 끝나면 '세 개' 라는 숫자만 남는다. 무엇 무엇인지
            // 다시 짚어 줘야 아이 머리에 세 가지 뜻이 함께 남는다.
            after: '① 머리를 감다 = 씻는다  ② 눈을 감다 = 눈을 닫는다  ' +
                   '③ 실을 감다 = 돌돌 만다. 글자는 같아도 앞에 오는 낱말이 뜻을 정해요.'
          }
        ]
      },

      {
        type: 'sentence', id: 'S', title: '문장 만들기',
        courses: ['full'],
        items: [
          {
            words: ['비누로', '머리를', '감아요'],
            say: '비누로 머리를 감아요',
            decoys: ['눈을'],
            hint: '무엇으로? 무엇을? 어떻게 해요?'
          },
          {
            words: ['잠이', '와서', '눈을', '감아요'],
            say: '잠이 와서 눈을 감아요',
            decoys: ['머리를'],
            hint: '왜? 무엇을? 어떻게 해요?'
          },
          {
            words: ['털실을', '둥글게', '감아요'],
            say: '털실을 둥글게 감아요',
            decoys: ['머리를'],
            hint: '무엇을? 어떻게? 무엇을 해요?'
          }
        ]
      },

      {
        type: 'match', id: 'G', title: '낱말과 그림',
        courses: ['full'],
        prompt: '감다의 뜻과 그림을 이어 보세요',
        pairs: [
          { word: '머리를 감다', pic: '🧼' },
          { word: '눈을 감다', pic: '😌' },
          { word: '실을 감다', pic: '🧶' },
          { word: '잠을 자다', pic: '😴' }
        ]
      },

      {
        type: 'writing', id: 'E', title: '한글 쓰기',
        courses: ['short', 'full'], shortCount: 1,
        toleranceEm: 0.15, passScore: 0.57,
        items: [
          { target: '감다', kind: 'word', prompt: "'감다' 를 따라 써 보세요",
            note: '받침 미음을 아래에 넣어요.' },
          { target: '머리', kind: 'word', prompt: "'머리' 를 따라 써 보세요",
            note: '받침이 없는 글자예요.' }
        ]
      }
    ]
  });
})(window.AIYA);
