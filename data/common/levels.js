/* 난이도 단계.
 *
 * 방송의 편성 순서가 그대로 난이도 순서다. 회차 번호로 단계를 가른다.
 *   1~7화   기초 모음     2  8~20화  기초 자음
 *   21~34화 받침          35~39화 쌍자음
 *   40~50화 복잡한 모음    51~60화 겹받침
 *
 * 단계 순서가 회차 번호와 어긋나는 곳이 있다(받침이 21~34화와 51~60화로 나뉜다).
 * 아이 기준으로는 받침 → 쌍자음 → 복잡한 모음 → 겹받침 순서가 맞다.
 */
(function (AIYA) {
  'use strict';

  AIYA.data.levels = [
    {
      id: 'vowel', order: 1, emoji: '🅰️',
      label: '기초 모음',
      hint: '한글을 처음 배워요',
      desc: 'ㅏ ㅣ ㅑ ㅗ ㅓ ㅕ ㅜ ㅠ ㅛ ㅡ — 모음의 소리와 모양',
      from: 1, to: 7
    },
    {
      id: 'consonant', order: 2, emoji: '🅱️',
      label: '기초 자음',
      hint: '자음을 하나씩',
      desc: 'ㄱ ㄴ ㄷ ㄹ ㅁ ㅂ ㅅ ㅈ ㅊ ㅋ ㅌ ㅍ ㅎ — 자음 열셋',
      from: 8, to: 20
    },
    {
      id: 'batchim', order: 3, emoji: '🧱',
      label: '받침',
      hint: '글자 아래에 붙는 소리',
      desc: '받침이 있을 때와 없을 때, 헷갈리는 받침 구별',
      from: 21, to: 34
    },
    {
      id: 'double', order: 4, emoji: '👯',
      label: '쌍자음',
      hint: '된소리 다섯',
      desc: 'ㄲ ㄸ ㅃ ㅆ ㅉ — 자음이 둘씩 붙어요',
      from: 35, to: 39
    },
    {
      id: 'vowel2', order: 5, emoji: '➕',
      label: '복잡한 모음',
      hint: '모음이 만나 합쳐져요',
      desc: 'ㅐ ㅔ ㅘ ㅙ ㅚ ㅝ ㅞ ㅟ ㅢ — 모음 두 개가 하나로',
      from: 40, to: 50
    },
    {
      id: 'cluster', order: 6, emoji: '🧩',
      label: '겹받침',
      hint: '가장 어려운 단계',
      desc: '받침이 두 글자인데 소리는 하나 — 읽다 [익따]',
      from: 51, to: 60
    }
  ];

  /** 회차 번호가 속한 단계. */
  AIYA.data.levelOf = function (episode) {
    var n = parseInt(episode, 10);
    return AIYA.data.levels.filter(function (l) {
      return n >= l.from && n <= l.to;
    })[0] || null;
  };

  /** 그 단계에 실제로 만들어진 회차 키 목록 (정렬됨). */
  AIYA.data.episodesOfLevel = function (levelId) {
    var lv = AIYA.data.levels.filter(function (l) { return l.id === levelId; })[0];
    if (!lv) return [];
    return Object.keys(AIYA.episodes).filter(function (k) {
      var n = parseInt(k, 10);
      return n >= lv.from && n <= lv.to;
    }).sort();
  };
})(window.AIYA);
