/* 23화 「돋보기」 — 받침 ㄷ
 *
 * 이 회차가 샘플 3편 중 가장 값이 크다. 받침 ㄷ·ㅅ·ㅈ·ㅊ·ㅌ 은 **모두 [ㄷ] 으로 소리난다**.
 * 즉 소리만 듣고는 어떤 글자를 쓸지 알 수 없다 — 읽기는 되는데 쓰기가 약한 아이의
 * 병목이 정확히 여기다. 그래서 "소리는 같은데 글자가 다르다" 를 정면으로 다룬다.
 *
 * 쓰기 초점: 세 글자 낱말 '돋보기'. 받침 있는 음절과 없는 음절이 섞여 있어
 * 글자 크기를 일정하게 유지하는 연습이 된다. 그리고 '돋' 은 같은 ㄷ 이
 * 첫 자리와 받침 자리에 동시에 오는 첫 사례다.
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep023.txt)을 읽고 확인했다.
 * 세 글자라 자모를 네 번 찾아온다: 등대에서 ㄷ, 쓰레받기에서 받침 ㄷ,
 * 부엌에서 ㅂ, 계단에서 ㄱ.
 */
(function (AIYA) {
  'use strict';

  AIYA.registerEpisode({
    episode: 23,
    title: '돋보기',
    videoId: 'gaNXiFFUCns',
    duration: 903,
    objective: "받침 'ㄷ'을 인식한다",
    focus: '받침 ㄷ — 소리는 같은데 글자가 달라요',

    jamo: { new: ['받침 ㄷ'], carry: ['ㄷ', 'ㅗ', 'ㅂ', 'ㄱ', 'ㅣ'] },
    targetWords: ['돋보기', '돋', '곧'],

    rewards: {
      cards: ['받침 ㄷ'],
      badges: [{ id: 'sound-spell', label: '소리와 글자 구별!' }]
    },

    parent: {
      coWatch: true,
      scripts: [
        "'돋' 과 '옷' 과 '낮' 은 끝소리가 똑같이 들려요. 그래서 소리만으로는 못 쓰고 낱말을 기억해야 해요.",
        "'돋보기' 를 쓸 때 세 글자를 같은 크기로 쓰게 도와주세요. 받침 있는 글자가 커지기 쉬워요.",
        '집에서 실제 돋보기로 같이 보면서 "크게 보인다" 를 말로 표현하게 해 주세요.'
      ]
    },

    activities: [
      // ① 이야기 퀴즈 ------------------------------------------------
      {
        type: 'story_quiz', id: 'A', title: '이야기 퀴즈',
        courses: ['short', 'full'], shortCount: 2,
        items: [
          {
            q: '돋보기로 보면 어떻게 보이나요?', at: 125,
            options: [
              { label: '크게', pic: '🔍', correct: true },
              { label: '작게', pic: '🔬' },
              { label: '거꾸로', pic: '🙃' }
            ]
          },
          {
            q: '아이야를 왜 불렀나요?', at: 170,
            options: [
              { label: '커다란 돋보기가 필요해서', pic: '🔍', correct: true },
              { label: '돋보기가 깨져서', pic: '💔' },
              { label: '돋보기를 잃어버려서', pic: '❓' }
            ],
            after: '같이 보려면 커다란 돋보기가 필요했어요.'
          },
          {
            q: 'ㄷ 은 어디에서 찾았나요?', at: 245,
            options: [
              { label: '등대', pic: { kind: 'svg', value: 'ep023-3.svg', label: '등대' }, correct: true },
              { label: '계단', pic: '🪜' },
              { label: '모자', pic: '👒' }
            ]
          },
          {
            q: '받침 ㄷ 은 어디에서 찾았나요?', at: 370,
            options: [
              { label: '쓰레받기', pic: { kind: 'svg', value: 'ep023-4.svg', label: '쓰레받기' }, correct: true },
              { label: '등대', pic: { kind: 'svg', value: 'ep023-3.svg', label: '등대' } },
              { label: '계단', pic: '🪜' }
            ]
          },
          {
            q: 'ㄱ 은 어디에서 찾았나요?', at: 540,
            options: [
              { label: '계단', pic: '🪜', correct: true },
              { label: '등대', pic: { kind: 'svg', value: 'ep023-3.svg', label: '등대' } },
              { label: '국수', pic: '🍜' }
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
            say: '돋', prompt: '잘 듣고 같은 글자를 골라요',
            hint: '받침이 있나요?',
            options: [
              { label: '돋', correct: true },
              { label: '도', relation: 'noBatchim' }
            ]
          },
          {
            // 방송이 직접 보여준 돌 → 동 → 돋
            say: '돋', prompt: '돌, 동, 돋. 어느 것을 들었나요?',
            options: [
              { label: '돋', correct: true },
              { label: '돌', relation: 'stopSwap', why: '돌 은 혀가 굴러가는 소리예요.' },
              { label: '동', relation: 'nasalSwap', why: '동 은 콧소리예요.' }
            ]
          },
          {
            // 이 회차의 핵심 — 소리는 같고 글자가 다르다
            say: '옷', prompt: '[옫] 이라고 들렸어요. 어떤 글자일까요?',
            hint: '받침 ㄷ 과 ㅅ 은 소리가 똑같아요. 낱말을 떠올려 보세요!',
            options: [
              { label: '옷', correct: true },
              { label: '옫', relation: 'soundSpellMismatch', why: '소리는 같지만 이런 낱말은 없어요.' }
            ],
            after: '소리가 같아도 낱말마다 쓰는 글자가 달라요.'
          },
          {
            say: '돋', prompt: '[돋] 이라고 들렸어요. 돋보기의 첫 글자는?',
            hint: '소리만으로는 알 수 없어요. 낱말을 기억해야 해요!',
            options: [
              { label: '돋', correct: true },
              { label: '돗', relation: 'soundSpellMismatch' },
              { label: '돚', relation: 'soundSpellMismatch' }
            ]
          },
          {
            say: '곧', prompt: '잘 듣고 같은 글자를 골라요',
            options: [
              { label: '곧', correct: true },
              { label: '고', relation: 'noBatchim' },
              { label: '골', relation: 'stopSwap' },
              { label: '공', relation: 'nasalSwap' }
            ]
          },
          {
            // 방송의 마무리 퀴즈와 같은 형식 — 첫소리가 다른 낱말 찾기
            say: '돋보기, 돌멩이, 돌덩이. 첫소리가 다른 낱말은 무엇인가요?',
            prompt: '첫소리가 다른 낱말은 무엇인가요?',
            options: [
              { label: '돋보기', correct: true },
              { label: '돌멩이', relation: 'stopSwap' },
              { label: '돌덩이', relation: 'stopSwap' }
            ],
            after: '돋보기는 받침이 ㄷ, 돌멩이와 돌덩이는 받침이 ㄹ 이에요.'
          }
        ]
      },

      // ③ 글자 찾기 --------------------------------------------------
      {
        type: 'letterhunt', id: 'C', title: '글자 찾기',
        courses: ['full'],
        boards: [
          {
            target: 'ㄷ', position: 'jong', cols: 4, targetCount: 4,
            prompt: '디귿을 모두 찾아 눌러 보세요',
            distractors: [
              { jamo: 'ㄴ', count: 3, relation: 'strokeAdd' },
              { jamo: 'ㅌ', count: 3, relation: 'strokeAdd' },
              { jamo: 'ㄹ', count: 3, relation: 'shape' },
              { jamo: 'ㅁ', count: 2, relation: 'shape' }
            ],
            missHint: '디귿은 위 가로와, 왼쪽 세로에서 아래로 꺾인 모양 두 획이에요.'
          },
          {
            // 소리는 같지만 글자가 다른 받침들을 한 판에 모았다.
            // 아이는 "소리로는 구별할 수 없다"는 것을 눌러 보며 알게 된다.
            cols: 4, showTarget: false,
            prompt: '받침 ㄷ 이 있는 글자를 모두 찾아 눌러 보세요',
            target: 'ㄷ', position: 'jong',
            cells: [
              { ch: '돋', hit: true }, { ch: '곧', hit: true },
              { ch: '닫', hit: true }, { ch: '믿', hit: true },
              { ch: '옷', relation: 'soundSpellMismatch' }, { ch: '낮', relation: 'soundSpellMismatch' },
              { ch: '빛', relation: 'soundSpellMismatch' }, { ch: '팥', relation: 'soundSpellMismatch' },
              { ch: '도', relation: 'noBatchim' }, { ch: '돌', relation: 'stopSwap' },
              { ch: '동', relation: 'nasalSwap' }, { ch: '문', relation: 'nasalSwap' }
            ],
            missHint: '소리는 [ㄷ] 으로 같아도 글자가 달라요. 아래가 ㄷ 인 글자만 찾아요!'
          }
        ]
      },

      // ④ 뭐든지 자판기 ---------------------------------------------
      {
        type: 'jamobuild', id: 'D', title: '뭐든지 자판기',
        courses: ['short', 'full'], shortCount: 1,
        items: [
          {
            target: '돋', at: 370,
            prompt: "'돋' 을 만들어 보세요. ㄷ 이 위에도 아래에도 들어가요!",
            decoys: [
              { jamo: 'ㅅ', relation: 'soundSpellMismatch' },
              { jamo: 'ㅌ', relation: 'soundSpellMismatch' },
              { jamo: 'ㅜ', relation: 'mirrorPair' }
            ]
          },
          {
            target: '보', locked: ['cho'],
            prompt: "'보' 를 만들어 보세요. 모음만 넣으면 돼요.",
            decoys: [
              { jamo: 'ㅜ', relation: 'mirrorPair' },
              { jamo: 'ㅏ', relation: 'positionSwap' }
            ]
          },
          {
            target: '돋보기', locked: ['0:cho', '1:cho', '2:cho'], at: 570,
            prompt: "이제 '돋보기' 전체를 만들어 보세요! 첫 자음은 미리 넣어 두었어요.",
            decoys: [
              { jamo: 'ㅅ', relation: 'soundSpellMismatch' },
              { jamo: 'ㅜ', relation: 'mirrorPair' },
              { jamo: 'ㅡ', relation: 'shape' }
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
            target: '돋', broken: '도',
            prompt: '받침이 사라졌어요! 소리 내어 읽어 보고 고쳐 주세요.',
            tray: [
              { jamo: 'ㅅ', relation: 'soundSpellMismatch' },
              { jamo: 'ㄹ', relation: 'stopSwap' },
              { jamo: 'ㅇ', relation: 'nasalSwap' }
            ]
          },
          {
            target: '돋보기', broken: '돌보기',
            prompt: '돌보기? 받침 하나가 바뀌었어요. 찾아서 고쳐 주세요!',
            tray: [
              { jamo: 'ㄹ', relation: 'stopSwap' },
              { jamo: 'ㅅ', relation: 'soundSpellMismatch' },
              { jamo: 'ㅇ', relation: 'nasalSwap' }
            ]
          },
          {
            target: '돋보기', broken: '옷보기',
            prompt: '옷보기? 소리는 비슷한데 뜻이 사라졌어요. 첫 글자를 고쳐 주세요.',
            tray: [
              { jamo: 'ㅅ', relation: 'soundSpellMismatch' },
              { jamo: 'ㅌ', relation: 'soundSpellMismatch' },
              { jamo: 'ㄴ', relation: 'nasalSwap' }
            ]
          }
        ]
      },

      // ⑥ 낱말과 그림 -----------------------------------------------
      {
        type: 'match', id: 'G', title: '낱말과 그림',
        courses: ['full'],
        prompt: '낱말과 그림을 이어 보세요',
        // '등대' 는 받침 ㅇ 이라 28화에서 배운다. 대신 21~22화에서 배운 받침으로
        // 채워 분산 복습이 되게 했다.
        pairs: [
          { word: '돋보기', pic: '🔍' },
          { word: '문', pic: '🚪' },
          { word: '약', pic: '💊' },
          { word: '손', pic: '✋' }
        ]
      },

      // ⑦ 한글 쓰기 --------------------------------------------------
      {
        type: 'writing', id: 'E', title: '한글 쓰기',
        courses: ['short', 'full'], shortCount: 1,
        toleranceEm: 0.15, passScore: 0.58,
        items: [
          {
            target: 'ㄷ', kind: 'jamo', position: 'jong',
            prompt: '디귿을 따라 써 보세요',
            note: '두 획이에요. 위 가로를 먼저 긋고, 왼쪽에서 아래로 내려와 오른쪽으로 꺾어요.'
          },
          {
            target: '도', kind: 'syllable',
            prompt: "먼저 '도' 를 따라 써 보세요",
            note: 'ㄷ 이 위, ㅗ 가 아래에 있어요.'
          },
          {
            target: '돋', kind: 'syllable',
            prompt: "이제 '돋' 을 따라 써 보세요",
            note: 'ㄷ 이 위에도 아래에도 있어요! 아래 받침 ㄷ 이 더 납작한 걸 보세요.'
          },
          {
            target: '돋보기', kind: 'word',
            prompt: "'돋보기' 를 따라 써 보세요",
            note: '세 글자를 같은 크기로 써요. 받침이 있는 첫 글자가 커지지 않게 조심해요.'
          }
        ]
      },

      // ⑧ 이야기 순서 -----------------------------------------------
      {
        type: 'sequence', id: 'F', title: '이야기 순서',
        courses: ['full'], at: 100,
        prompt: '이야기 순서대로 눌러 보세요',
        firstCutGiven: true,
        cuts: [
          {
            order: 1, at: 125,
            caption: '돋보기로 보니 눈이 크게 보여요.',
            pic: { kind: 'svg', value: 'ep023-1.svg', label: '돋보기로 크게 보기' }
          },
          {
            order: 2, at: 170,
            caption: '커다란 돋보기가 있으면 같이 볼 수 있을 텐데…',
            pic: { kind: 'svg', value: 'ep023-2.svg', label: '커다란 돋보기가 필요해요' }
          },
          {
            order: 3, at: 245,
            caption: '등대에서 ㄷ 을 찾았어요.',
            pic: { kind: 'svg', value: 'ep023-3.svg', label: '등대의 디귿' }
          },
          {
            order: 4, at: 370,
            caption: '쓰레받기에서 받침 ㄷ 을 찾았어요.',
            pic: { kind: 'svg', value: 'ep023-4.svg', label: '쓰레받기의 받침 디귿' }
          },
          {
            order: 5, at: 540,
            caption: '계단에서 ㄱ 을 찾았어요.',
            pic: { kind: 'svg', value: 'ep023-5.svg', label: '계단의 기역' }
          },
          {
            order: 6, at: 620,
            caption: '자판기에서 커다란 돋보기가 나왔어요!',
            pic: { kind: 'svg', value: 'ep023-6.svg', label: '커다란 돋보기' }
          }
        ]
      }
    ]
  });
})(window.AIYA);
