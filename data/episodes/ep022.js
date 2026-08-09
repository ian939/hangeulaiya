/* 22화 「문」 — 받침 ㄴ
 *
 * 학습 초점: **비음 받침 혼동 (ㄴ / ㅁ / ㅇ)**. 한국 아이가 실제로 가장 많이 틀리는
 * 받침 오류라서 소리 활동의 중심을 여기 둔다. ㄴ은 혀끝, ㅁ은 입술, ㅇ은 목이다.
 * 쓰기 초점: 무 → 문 대조. 받침이 붙으면 위 두 자모가 눌린다.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep022.txt)을 읽고 확인했다.
 * 정음이가 '문'을 쓰려다 '무'만 써 버리는 장면이 이 회차의 극적 순간이고,
 * 그게 곧 "받침이 없으면 다른 글자가 된다"는 이 단원의 교수 내용이다.
 * 방송도 무/묵/문 과 무→문, 누→눈, 소→손 을 직접 훈련시킨다.
 */
(function (AIYA) {
  'use strict';

  AIYA.registerEpisode({
    episode: 22,
    title: '문',
    videoId: 'NLlC2ESCuQQ',
    duration: 889,
    objective: "받침 'ㄴ'을 인식한다",
    focus: '받침 ㄴ — 콧소리 받침 ㄴ·ㅁ·ㅇ 구별',

    jamo: { new: ['받침 ㄴ'], carry: ['ㅁ', 'ㅜ', 'ㄴ'] },
    targetWords: ['문', '눈', '손', '산'],

    rewards: {
      cards: ['받침 ㄴ'],
      badges: [{ id: 'nasal-master', label: 'ㄴㅁㅇ 구별!' }]
    },

    parent: {
      coWatch: true,
      scripts: [
        "'문' 은 혀끝이 위에 붙어요. '뭄' 은 입술이 붙고, '뭉' 은 목에서 나요. 손을 목과 입술에 대 보게 해 주세요.",
        "'무' 와 '문' 을 번갈아 말해 주세요. 받침이 있으면 다른 낱말이 된다는 걸 알게 해 주세요.",
        '집에서 받침 ㄴ 찾기: 문, 눈, 손, 산 — 창문도 문이에요!'
      ]
    },

    activities: [
      // ① 이야기 퀴즈 ------------------------------------------------
      {
        type: 'story_quiz', id: 'A', title: '이야기 퀴즈',
        courses: ['short', 'full'], shortCount: 2,
        items: [
          {
            q: '훈민이와 정음이는 집에 무엇이 없어서 만들었나요?', at: 120,
            options: [
              { label: '문', pic: '🚪', correct: true },
              { label: '창문', pic: '🪟' },
              { label: '지붕', pic: '🏠' }
            ]
          },
          {
            q: "정음이가 '문' 이라고 쓰려다가 무엇이라고 썼나요?", at: 290,
            options: [
              { label: '무', pic: { kind: 'text', value: '무' }, correct: true },
              { label: '문', pic: { kind: 'text', value: '문' } },
              { label: '뭄', pic: { kind: 'text', value: '뭄' } }
            ],
            after: '받침을 안 써서 무 가 되었어요!'
          },
          {
            q: 'ㅁ 은 어디에서 찾았나요?', at: 398,
            options: [
              { label: '모자', pic: '👒', correct: true },
              { label: '손', pic: '✋' },
              { label: '문', pic: '🚪' }
            ]
          },
          {
            q: '받침 ㄴ 은 어디에서 찾았나요?', at: 535,
            options: [
              { label: '손', pic: '✋', correct: true },
              { label: '모자', pic: '👒' },
              { label: '눈', pic: '👁' }
            ]
          },
          {
            q: "'문' 카드를 자판기에 넣으니 무엇이 나왔나요?", at: 600,
            options: [
              { label: '문패', pic: { kind: 'svg', value: 'ep022-6.svg', label: '문패' }, correct: true },
              { label: '모자', pic: '👒' },
              { label: '간식', pic: '🍪' }
            ]
          }
        ]
      },

      // ② 소리 듣고 고르기 -------------------------------------------
      {
        type: 'sound', id: 'B', title: '소리 듣고 고르기',
        courses: ['short', 'full'], shortCount: 3,
        items: [
          {
            say: '문', prompt: '잘 듣고 같은 글자를 골라요',
            hint: '받침이 있나요, 없나요?',
            options: [
              { label: '문', correct: true },
              { label: '무', relation: 'noBatchim', why: '받침이 없는 소리예요.' }
            ]
          },
          {
            say: '무', prompt: '잘 듣고 같은 글자를 골라요',
            options: [
              { label: '무', correct: true },
              { label: '문', relation: 'noBatchim' }
            ]
          },
          {
            // 이 회차의 핵심 문항 — 콧소리 받침 세 가지
            say: '문', prompt: '받침 소리를 잘 듣고 골라요',
            hint: 'ㄴ 은 혀끝, ㅁ 은 입술, ㅇ 은 목이에요',
            options: [
              { label: '문', correct: true },
              { label: '뭄', relation: 'nasalSwap', why: '입술이 붙는 소리예요. 혀끝은 어때요?' },
              { label: '뭉', relation: 'nasalSwap', why: '목에서 나는 소리예요.' }
            ]
          },
          {
            // 방송이 직접 보여준 물 → 묵 → 문
            say: '문', prompt: '물, 묵, 문. 어느 것을 들었나요?',
            options: [
              { label: '문', correct: true },
              { label: '물', relation: 'stopSwap' },
              { label: '묵', relation: 'stopSwap' }
            ]
          },
          {
            say: '손', prompt: '잘 듣고 같은 글자를 골라요',
            options: [
              { label: '손', correct: true },
              { label: '소', relation: 'noBatchim' },
              { label: '솜', relation: 'nasalSwap' },
              { label: '송', relation: 'nasalSwap' }
            ]
          },
          {
            // 방송의 마무리 퀴즈와 같은 형식 — 끝소리가 다른 낱말 찾기
            say: '선물, 신문, 창문. 끝소리가 다른 낱말은 무엇인가요?',
            prompt: '끝소리가 다른 낱말은 무엇인가요?',
            options: [
              { label: '선물', correct: true },
              { label: '신문', relation: 'stopSwap' },
              { label: '창문', relation: 'stopSwap' }
            ],
            after: '선물은 끝이 ㄹ, 신문과 창문은 끝이 ㄴ 이에요.'
          }
        ]
      },

      // ③ 글자 찾기 --------------------------------------------------
      {
        type: 'letterhunt', id: 'C', title: '글자 찾기',
        courses: ['full'],
        boards: [
          {
            target: 'ㄴ', position: 'jong', cols: 4, targetCount: 4,
            prompt: '니은을 모두 찾아 눌러 보세요',
            distractors: [
              { jamo: 'ㄱ', count: 3, relation: 'rotation' },
              { jamo: 'ㄷ', count: 3, relation: 'strokeAdd' },
              { jamo: 'ㅁ', count: 3, relation: 'nasalSwap' },
              { jamo: 'ㄹ', count: 2, relation: 'shape' }
            ],
            missHint: '이건 니은이 아니에요. 아래로 내려가 오른쪽으로 꺾인 모양이에요.'
          },
          {
            cols: 4, showTarget: false,
            prompt: '받침 ㄴ 이 있는 글자를 모두 찾아 눌러 보세요',
            target: 'ㄴ', position: 'jong',
            cells: [
              { ch: '문', hit: true }, { ch: '눈', hit: true },
              { ch: '손', hit: true }, { ch: '산', hit: true },
              { ch: '무', relation: 'noBatchim' }, { ch: '소', relation: 'noBatchim' },
              { ch: '뭄', relation: 'nasalSwap' }, { ch: '뭉', relation: 'nasalSwap' },
              { ch: '약', relation: 'stopSwap' }, { ch: '솜', relation: 'nasalSwap' },
              { ch: '상', relation: 'nasalSwap' }, { ch: '물', relation: 'stopSwap' }
            ],
            missHint: '받침이 ㄴ 인 글자를 찾아요. 콧소리라도 ㅁ 과 ㅇ 은 달라요.'
          }
        ]
      },

      // ④ 뭐든지 자판기 ---------------------------------------------
      {
        type: 'jamobuild', id: 'D', title: '뭐든지 자판기',
        courses: ['short', 'full'], shortCount: 1,
        items: [
          {
            target: '문', at: 580,
            prompt: "'문' 을 만들어 보세요. 받침 자리를 잘 보세요!",
            decoys: [
              { jamo: 'ㅇ', relation: 'nasalSwap' },
              { jamo: 'ㅗ', relation: 'mirrorPair' },
              { jamo: 'ㄹ', relation: 'stopSwap' }
            ]
          },
          {
            target: '눈', locked: ['cho'],
            prompt: 'ㄴ 이 첫 자리에 있어요. 모음과 받침을 넣어 주세요!',
            decoys: [
              { jamo: 'ㅁ', relation: 'nasalSwap' },
              { jamo: 'ㅗ', relation: 'mirrorPair' }
            ]
          },
          {
            // '창문' 을 쓰지 않는 이유: 받침 ㅇ 은 28화에서 배운다.
            // '신문' 은 두 글자 모두 받침 ㄴ 이라 이 회차 목표에 오히려 더 맞다.
            target: '신문', locked: ['0:cho'],
            prompt: "'신문' 이에요. 두 글자 모두 받침이 ㄴ 이에요!",
            decoys: [
              { jamo: 'ㅇ', relation: 'nasalSwap' },
              { jamo: 'ㅗ', relation: 'mirrorPair' }
            ]
          }
        ]
      },

      // ⑤ 사라진 받침 -----------------------------------------------
      {
        type: 'chunji', id: 'I', title: '사라진 받침',
        courses: ['full'],
        items: [
          {
            target: '문', broken: '무',
            prompt: '받침이 사라졌어요! 이러면 다른 낱말이 돼요.',
            tray: [
              { jamo: 'ㅁ', relation: 'nasalSwap' },
              { jamo: 'ㅇ', relation: 'nasalSwap' },
              { jamo: 'ㄹ', relation: 'stopSwap' }
            ]
          },
          {
            target: '문', broken: '뭉',
            prompt: '받침이 바뀌었어요. 뭉? 소리 내어 읽어 보세요!',
            tray: [
              { jamo: 'ㅇ', relation: 'nasalSwap' },
              { jamo: 'ㅁ', relation: 'nasalSwap' },
              { jamo: 'ㄱ', relation: 'stopSwap' }
            ]
          },
          {
            target: '손', broken: '솜',
            prompt: '솜? 손이 되게 고쳐 주세요. 혀끝으로 닫는 소리예요.',
            tray: [
              { jamo: 'ㅁ', relation: 'nasalSwap' },
              { jamo: 'ㅇ', relation: 'nasalSwap' },
              { jamo: 'ㄷ', relation: 'stopSwap' }
            ]
          }
        ]
      },

      // ⑥ 낱말과 그림 -----------------------------------------------
      {
        type: 'match', id: 'G', title: '낱말과 그림',
        courses: ['full'],
        prompt: '받침 ㄴ 낱말과 그림을 이어 보세요',
        pairs: [
          { word: '문', pic: '🚪' },
          { word: '눈', pic: '👁' },
          { word: '손', pic: '✋' },
          { word: '산', pic: '⛰' }
        ]
      },

      // ⑦ 한글 쓰기 --------------------------------------------------
      {
        type: 'writing', id: 'E', title: '한글 쓰기',
        courses: ['short', 'full'], shortCount: 1,
        toleranceEm: 0.16, passScore: 0.57,
        items: [
          {
            target: 'ㄴ', kind: 'jamo', position: 'jong',
            prompt: '니은을 따라 써 보세요',
            note: '위에서 아래로 내려와 그대로 꺾어 오른쪽으로. 한 획이에요.'
          },
          {
            target: '무', kind: 'syllable',
            prompt: "먼저 '무' 를 따라 써 보세요",
            note: 'ㅁ 이 위, ㅜ 가 아래에 있어요.'
          },
          {
            target: '문', kind: 'syllable',
            prompt: "이제 '문' 을 따라 써 보세요",
            note: '받침 ㄴ 이 들어가면서 위의 ㅁ 과 ㅜ 가 조금 눌려요. 방금 쓴 무 와 비교해 보세요!'
          },
          {
            target: '손', kind: 'syllable',
            prompt: "'손' 을 따라 써 보세요",
            note: '받침 ㄴ 은 아래에 넓게 깔려요.'
          }
        ]
      },

      // ⑧ 이야기 순서 -----------------------------------------------
      {
        type: 'sequence', id: 'F', title: '이야기 순서',
        courses: ['full'], at: 105,
        prompt: '이야기 순서대로 눌러 보세요',
        firstCutGiven: true,
        cuts: [
          {
            order: 1, at: 112,
            caption: '상자로 집을 만들었는데 문이 없어요.',
            pic: { kind: 'svg', value: 'ep022-1.svg', label: '문이 없는 상자집' }
          },
          {
            order: 2, at: 170,
            caption: '문을 만들었어요. 친구들이 들어왔어요.',
            pic: { kind: 'svg', value: 'ep022-2.svg', label: '문이 생긴 집' }
          },
          {
            order: 3, at: 290,
            caption: "'문' 이라고 쓰려는데 '무' 가 되었어요.",
            pic: { kind: 'svg', value: 'ep022-3.svg', label: '무라고 잘못 쓴 종이' }
          },
          {
            order: 4, at: 398,
            caption: '모자에서 ㅁ 을 찾았어요.',
            pic: { kind: 'svg', value: 'ep022-4.svg', label: '모자의 미음' }
          },
          {
            order: 5, at: 535,
            caption: '손에서 받침 ㄴ 을 찾았어요.',
            pic: { kind: 'svg', value: 'ep022-5.svg', label: '손의 받침 니은' }
          },
          {
            order: 6, at: 600,
            caption: "자판기에 '문' 을 넣으니 문패가 나왔어요!",
            pic: { kind: 'svg', value: 'ep022-6.svg', label: '자판기에서 나온 문패' }
          }
        ]
      }
    ]
  });
})(window.AIYA);
