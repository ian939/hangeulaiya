/* 21화 「약」 — 받침 ㄱ
 *
 * 학습 초점: **받침이 있다 / 없다**. 받침 개념 자체의 도입이므로
 * 야↔약 처럼 받침 유무만 다른 짝을 소리 활동의 중심에 둔다.
 * 쓰기 초점: 같은 ㄱ 이 첫 자리와 받침 자리에서 모양·크기가 다르다는 것 ('국').
 *
 * 줄거리는 실제 방송 자막(work/transcripts/ep021.txt)을 읽고 확인했다.
 * 이 회차에는 악당 천지가 나오지 않는다 — 훈민정음 병원·약국 놀이 형식이다.
 * 그래서 '천지의 장난' 활동의 문구를 "글자가 사라졌다"로 맞췄다.
 */
(function (AIYA) {
  'use strict';

  AIYA.registerEpisode({
    episode: 21,
    title: '약',
    videoId: 'EgerMhNs2qk',
    duration: 786,
    objective: "받침 'ㄱ'을 인식한다",
    focus: '받침 ㄱ — 받침이 있을 때와 없을 때',

    jamo: { new: ['받침 ㄱ'], carry: ['ㅇ', 'ㅑ', 'ㄱ'] },
    targetWords: ['약', '국', '수박'],

    rewards: {
      cards: ['받침 ㄱ'],
      badges: [{ id: 'batchim-start', label: '받침 첫걸음' }]
    },

    parent: {
      coWatch: true,
      scripts: [
        "'야' 하고 '약' 을 번갈아 말해 주세요. 끝에서 입이 닫히는 걸 느끼게 해 주세요.",
        "'국' 을 쓸 때 위의 ㄱ 과 아래 받침 ㄱ 의 크기가 다른 걸 손으로 짚어 주세요.",
        '집에서 받침 ㄱ 이 들어간 물건 찾기: 약, 국, 수박, 양말은 아니에요!'
      ]
    },

    activities: [
      // ① 이야기 퀴즈 ------------------------------------------------
      {
        type: 'story_quiz', id: 'A', title: '이야기 퀴즈',
        courses: ['short', 'full'], shortCount: 2,
        items: [
          {
            q: '낙타는 어디가 아프다고 했나요?', at: 205,
            options: [
              { label: '마음', pic: '💗', correct: true },
              { label: '이빨', pic: '🦷' },
              { label: '다리', pic: '🦵' }
            ],
            after: '맞아요. 친구가 없어서 마음이 아팠어요.'
          },
          {
            q: "'약'의 ㅇ 은 어디에서 찾았나요?", at: 310,
            options: [
              { label: '열기구', pic: '🎈', correct: true },
              { label: '국수', pic: '🍜' },
              { label: '모자', pic: '👒' }
            ]
          },
          {
            q: '받침 ㄱ 은 어디에서 찾았나요?', at: 440,
            options: [
              { label: '국수', pic: '🍜', correct: true },
              { label: '열기구', pic: '🎈' },
              { label: '계단', pic: '🪜' }
            ],
            after: '국수에서 받침 기역을 찾았어요.'
          },
          {
            q: "'약' 카드를 자판기에 넣으니 무엇이 나왔나요?", at: 515,
            options: [
              { label: '낙타', pic: '🐫', correct: true },
              { label: '약', pic: '💊' },
              { label: '주사', pic: '💉' }
            ],
            after: '낙타의 약은 친구였어요!'
          }
        ]
      },

      // ② 소리 듣고 고르기 -------------------------------------------
      {
        type: 'sound', id: 'B', title: '소리 듣고 고르기',
        courses: ['short', 'full'], shortCount: 3,
        items: [
          {
            say: '약', prompt: '잘 듣고 같은 글자를 골라요',
            hint: '끝에서 입이 닫히는 소리가 있나요?',
            options: [
              { label: '약', correct: true },
              { label: '야', relation: 'noBatchim', why: '받침이 없는 소리예요. 다시 들어볼까?' }
            ]
          },
          // 같은 짝을 반대 방향으로도 낸다. 한쪽만 내면 늘 같은 자리를 눌러 통과할 수 있다.
          {
            say: '야', prompt: '잘 듣고 같은 글자를 골라요',
            options: [
              { label: '야', correct: true },
              { label: '약', relation: 'noBatchim', why: '이건 받침이 있는 소리예요.' }
            ]
          },
          {
            // 방송이 직접 보여준 얌 → 양 → 약 순서를 그대로 문항으로 썼다
            say: '약', prompt: '받침 소리를 잘 듣고 골라요',
            hint: '얌, 양, 약 — 끝소리가 달라요',
            options: [
              { label: '약', correct: true },
              { label: '얌', relation: 'nasalSwap', why: '얌 은 입술로 닫는 소리예요.' },
              { label: '양', relation: 'nasalSwap', why: '양 은 콧소리예요.' }
            ]
          },
          {
            say: '국', prompt: '잘 듣고 같은 글자를 골라요',
            options: [
              { label: '국', correct: true },
              { label: '구', relation: 'noBatchim' },
              { label: '굴', relation: 'stopSwap' }
            ]
          },
          {
            // 방송의 마무리 퀴즈와 같은 형식 — 첫소리가 다른 낱말 찾기
            say: '양말, 약국, 약사. 첫소리가 다른 낱말은 무엇인가요?',
            prompt: '첫소리가 다른 낱말은 무엇인가요?',
            options: [
              { label: '양말', correct: true },
              { label: '약국', relation: 'nasalSwap' },
              { label: '약사', relation: 'nasalSwap' }
            ],
            after: '양말은 받침이 ㅇ, 약국과 약사는 받침이 ㄱ 이에요.'
          }
        ]
      },

      // ③ 글자 찾기 --------------------------------------------------
      {
        type: 'letterhunt', id: 'C', title: '글자 찾기',
        courses: ['full'],
        boards: [
          {
            target: 'ㄱ', position: 'jong', cols: 4, targetCount: 4,
            prompt: '기역을 모두 찾아 눌러 보세요',
            distractors: [
              { jamo: 'ㅋ', count: 3, relation: 'strokeAdd' },
              { jamo: 'ㄴ', count: 3, relation: 'rotation' },
              { jamo: 'ㄷ', count: 3, relation: 'shape' },
              { jamo: 'ㅇ', count: 3, relation: 'unrelated' }
            ],
            missHint: '이건 기역이 아니에요. 가로 긋고 아래로 꺾인 모양을 찾아요.'
          },
          {
            // 음절 모드 — 받침 ㄱ 이 있는 글자만 고른다
            cols: 4, showTarget: false,
            prompt: '받침 ㄱ 이 있는 글자를 모두 찾아 눌러 보세요',
            target: 'ㄱ', position: 'jong',
            cells: [
              { ch: '약', hit: true }, { ch: '국', hit: true },
              { ch: '박', hit: true }, { ch: '축', hit: true },
              { ch: '야', relation: 'noBatchim' }, { ch: '구', relation: 'noBatchim' },
              { ch: '양', relation: 'nasalSwap' }, { ch: '얌', relation: 'nasalSwap' },
              { ch: '안', relation: 'nasalSwap' }, { ch: '바', relation: 'noBatchim' },
              { ch: '수', relation: 'noBatchim' }, { ch: '문', relation: 'nasalSwap' }
            ],
            missHint: '이 글자는 받침 ㄱ 이 없어요. 아래에 ㄱ 이 있는 글자를 찾아요.'
          }
        ]
      },

      // ④ 뭐든지 자판기 ---------------------------------------------
      {
        type: 'jamobuild', id: 'D', title: '뭐든지 자판기',
        courses: ['short', 'full'], shortCount: 1,
        items: [
          {
            target: '약', locked: ['cho'], at: 500,
            prompt: 'ㅇ 은 벌써 앉아 있어요. 모음과 받침을 넣어 주세요!',
            decoys: [
              { jamo: 'ㅏ', relation: 'strokePair' },
              { jamo: 'ㅋ', relation: 'strokeAdd' },
              { jamo: 'ㅁ', relation: 'nasalSwap' }
            ]
          },
          {
            target: '국',
            prompt: 'ㄱ 이 두 번 들어가요. 첫 자리와 받침 자리에 놓아 보세요!',
            decoys: [
              { jamo: 'ㅗ', relation: 'mirrorPair' },
              { jamo: 'ㄴ', relation: 'stopSwap' }
            ]
          },
          {
            target: '수박', locked: ['0:cho'],
            prompt: '두 글자예요. 받침은 뒤쪽 글자에 있어요.',
            // 디코이는 정답에 쓰이는 자모와 겹치면 안 된다. 똑같은 타일이 둘 생겨
            // 하나는 정답이고 하나는 오답이 되면 문항 자체가 말이 안 된다.
            decoys: [
              { jamo: 'ㅁ', relation: 'nasalSwap' },
              { jamo: 'ㅗ', relation: 'mirrorPair' }
            ]
          }
        ]
      },

      // ⑤ 사라진 받침 찾기 -------------------------------------------
      {
        type: 'chunji', id: 'I', title: '사라진 받침',
        courses: ['full'],
        items: [
          {
            target: '약', broken: '야',
            prompt: '받침이 사라졌어요! 소리 내어 읽어 보고 고쳐 주세요.',
            tray: [
              { jamo: 'ㅁ', relation: 'nasalSwap' },
              { jamo: 'ㅇ', relation: 'nasalSwap' },
              { jamo: 'ㄴ', relation: 'nasalSwap' }
            ]
          },
          {
            target: '국', broken: '군',
            prompt: '받침이 바뀌었어요. 군? 소리가 이상해요!',
            tray: [
              { jamo: 'ㄴ', relation: 'stopSwap' },
              { jamo: 'ㅇ', relation: 'nasalSwap' },
              { jamo: 'ㄹ', relation: 'stopSwap' }
            ]
          }
        ]
      },

      // ⑥ 낱말과 그림 -----------------------------------------------
      {
        type: 'match', id: 'G', title: '낱말과 그림',
        courses: ['full'],
        prompt: '받침 ㄱ 낱말과 그림을 이어 보세요',
        pairs: [
          { word: '약', pic: '💊' },
          { word: '국', pic: '🍲' },
          { word: '수박', pic: '🍉' },
          { word: '축구', pic: '⚽' }
        ]
      },

      // ⑦ 한글 쓰기 --------------------------------------------------
      {
        type: 'writing', id: 'E', title: '한글 쓰기',
        courses: ['short', 'full'], shortCount: 1,
        toleranceEm: 0.17, passScore: 0.55,
        items: [
          {
            target: 'ㄱ', kind: 'jamo', position: 'jong',
            prompt: '기역을 따라 써 보세요',
            note: '가로로 긋고, 붓을 떼지 않고 그대로 꺾어 아래로 내려와요. 한 획이에요.'
          },
          {
            target: '약', kind: 'syllable',
            prompt: "'약' 을 따라 써 보세요",
            note: '받침 ㄱ 은 아래에 납작하게 들어가요. 위 두 글자가 조금 눌려요.'
          },
          {
            target: '국', kind: 'syllable',
            prompt: "'국' 을 따라 써 보세요",
            note: 'ㄱ 이 위에도 아래에도 있어요. 크기가 어떻게 다른지 보세요!'
          },
          {
            target: '수박', kind: 'word',
            prompt: "'수박' 을 따라 써 보세요",
            note: '두 글자를 같은 크기로 써 보세요.'
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
            order: 1, at: 112,
            caption: '훈민정음이 병원과 약국을 열었어요.',
            pic: { kind: 'svg', value: 'ep021-1.svg', label: '정음병원과 훈민약국' }
          },
          {
            order: 2, at: 205,
            caption: '낙타가 왔어요. 친구가 없어서 마음이 아파요.',
            pic: { kind: 'svg', value: 'ep021-2.svg', label: '마음이 아픈 낙타' }
          },
          {
            order: 3, at: 310,
            caption: '열기구에서 ㅇ 을 찾았어요.',
            pic: { kind: 'svg', value: 'ep021-3.svg', label: '열기구의 이응' }
          },
          {
            order: 4, at: 440,
            caption: '국수에서 받침 ㄱ 을 찾았어요.',
            pic: { kind: 'svg', value: 'ep021-4.svg', label: '국수의 받침 기역' }
          },
          {
            order: 5, at: 515,
            caption: "자판기에 '약' 을 넣으니 낙타가 나왔어요. 약은 친구였어요!",
            pic: { kind: 'svg', value: 'ep021-5.svg', label: '자판기에서 나온 낙타' }
          },
          {
            order: 6, at: 650,
            caption: "할아버지와 입을 크게 벌리고 '약' 을 읽었어요.",
            pic: { kind: 'svg', value: 'ep021-6.svg', label: '할아버지와 발음 연습' }
          }
        ]
      }
    ]
  });
})(window.AIYA);
