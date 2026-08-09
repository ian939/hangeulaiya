/* 한글 음절 조립·분해.
 *
 * 완성형 한글은 규칙적으로 배열되어 있어 표가 아니라 계산으로 처리한다.
 *   코드 = 0xAC00 + (초성 index * 21 + 중성 index) * 28 + 종성 index
 * 따라서 아이가 놓은 타일을 실제 음절로 합성해 목표 글자와 그냥 비교하면 된다.
 */
(function (AIYA) {
  'use strict';

  var BASE = 0xac00;
  var LAST = 0xd7a3;
  var VCOUNT = 21;
  var TCOUNT = 28;

  // 초성 19개 (순서가 유니코드 배열 순서와 같아야 한다)
  var CHO = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ',
             'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

  // 중성 21개
  var JUNG = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ',
              'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];

  // 종성 28개 — 0번은 "받침 없음"
  var JONG = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ',
              'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ',
              'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

  // 겹받침 -> 기본 자모 2개. 쓰기·조립에서 부품으로 쪼갤 때 쓴다.
  var CLUSTER = {
    'ㄲ': ['ㄱ', 'ㄱ'], 'ㄳ': ['ㄱ', 'ㅅ'], 'ㄵ': ['ㄴ', 'ㅈ'], 'ㄶ': ['ㄴ', 'ㅎ'],
    'ㄺ': ['ㄹ', 'ㄱ'], 'ㄻ': ['ㄹ', 'ㅁ'], 'ㄼ': ['ㄹ', 'ㅂ'], 'ㄽ': ['ㄹ', 'ㅅ'],
    'ㄾ': ['ㄹ', 'ㅌ'], 'ㄿ': ['ㄹ', 'ㅍ'], 'ㅀ': ['ㄹ', 'ㅎ'], 'ㅄ': ['ㅂ', 'ㅅ'],
    'ㄸ': ['ㄷ', 'ㄷ'], 'ㅃ': ['ㅂ', 'ㅂ'], 'ㅆ': ['ㅅ', 'ㅅ'], 'ㅉ': ['ㅈ', 'ㅈ']
  };

  // 복합 모음 -> 기본 모음 조합
  var VOWEL_PARTS = {
    'ㅐ': ['ㅏ', 'ㅣ'], 'ㅒ': ['ㅑ', 'ㅣ'], 'ㅔ': ['ㅓ', 'ㅣ'], 'ㅖ': ['ㅕ', 'ㅣ'],
    'ㅘ': ['ㅗ', 'ㅏ'], 'ㅙ': ['ㅗ', 'ㅏ', 'ㅣ'], 'ㅚ': ['ㅗ', 'ㅣ'],
    'ㅝ': ['ㅜ', 'ㅓ'], 'ㅞ': ['ㅜ', 'ㅓ', 'ㅣ'], 'ㅟ': ['ㅜ', 'ㅣ'],
    'ㅢ': ['ㅡ', 'ㅣ']
  };

  // 가로모음(초성 아래에 붙는다) / 세로모음(초성 오른쪽에 붙는다)
  var HORIZONTAL = ['ㅗ', 'ㅛ', 'ㅜ', 'ㅠ', 'ㅡ'];
  var MIXED = ['ㅘ', 'ㅙ', 'ㅚ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅢ'];

  function isSyllable(ch) {
    if (!ch) return false;
    var c = ch.charCodeAt(0);
    return c >= BASE && c <= LAST;
  }

  /** '약' -> { cho:'ㅇ', jung:'ㅑ', jong:'ㄱ' }  (받침 없으면 jong 은 '') */
  function decompose(ch) {
    if (!isSyllable(ch)) return null;
    var i = ch.charCodeAt(0) - BASE;
    return {
      cho: CHO[Math.floor(i / (VCOUNT * TCOUNT))],
      jung: JUNG[Math.floor(i / TCOUNT) % VCOUNT],
      jong: JONG[i % TCOUNT]
    };
  }

  /** ('ㅇ','ㅑ','ㄱ') -> '약'. 잘못된 자모면 null. */
  function compose(cho, jung, jong) {
    var ci = CHO.indexOf(cho);
    var vi = JUNG.indexOf(jung);
    var ti = JONG.indexOf(jong || '');
    if (ci < 0 || vi < 0 || ti < 0) return null;
    return String.fromCharCode(BASE + (ci * VCOUNT + vi) * TCOUNT + ti);
  }

  /** 낱말을 음절별 분해 배열로. '돋보기' -> [{cho,jung,jong}, ...] */
  function decomposeWord(word) {
    return String(word).split('').map(decompose);
  }

  /** 모음의 배치 종류: 'vertical'(ㅏ 오른쪽) | 'horizontal'(ㅗ 아래) | 'mixed'(ㅘ) */
  function vowelKind(v) {
    if (HORIZONTAL.indexOf(v) >= 0) return 'horizontal';
    if (MIXED.indexOf(v) >= 0) return 'mixed';
    return 'vertical';
  }

  /** 음절 블록 구조 이름 — trace/layout 이 쓴다. */
  function blockKind(syl) {
    var d = typeof syl === 'string' ? decompose(syl) : syl;
    if (!d) return null;
    return vowelKind(d.jung) + (d.jong ? '-jong' : '');
  }

  /** 자모가 자음인지 */
  function isConsonant(j) {
    return CHO.indexOf(j) >= 0 || (j && JONG.indexOf(j) > 0);
  }

  function isVowel(j) {
    return JUNG.indexOf(j) >= 0;
  }

  /** 겹자모/복합모음을 기본 자모로 쪼갠다. 기본 자모면 그대로 [j]. */
  function parts(j) {
    if (CLUSTER[j]) return CLUSTER[j].slice();
    if (VOWEL_PARTS[j]) return VOWEL_PARTS[j].slice();
    return [j];
  }

  /**
   * 아이가 슬롯에 놓은 타일이 목표 음절과 맞는지 검사한다.
   * slots: { cho, jung, jong }  (빈 칸은 null/'')
   * 반환: { ok, built, expected, wrong:['cho'|'jung'|'jong'...], missing:[...] }
   */
  function checkSyllable(slots, target) {
    var want = decompose(target);
    if (!want) return { ok: false, built: null, expected: null, wrong: [], missing: [] };

    var wrong = [];
    var missing = [];
    ['cho', 'jung', 'jong'].forEach(function (k) {
      var got = slots[k] || '';
      var exp = want[k] || '';
      if (!got && exp) missing.push(k);
      else if (got !== exp) wrong.push(k);
    });

    var built = compose(slots.cho, slots.jung, slots.jong);
    return {
      ok: wrong.length === 0 && missing.length === 0,
      built: built,
      expected: want,
      wrong: wrong,
      missing: missing
    };
  }

  /** 낱말 단위 검사. slotsList 는 음절별 slots 배열. */
  function checkWord(slotsList, targetWord) {
    var syllables = String(targetWord).split('');
    var results = syllables.map(function (s, i) {
      return checkSyllable(slotsList[i] || {}, s);
    });
    return {
      ok: results.every(function (r) { return r.ok; }),
      results: results
    };
  }

  /** 낱말에 쓰인 모든 기본 자모의 집합 (누적 규칙 검사용) */
  function jamoUsed(word) {
    var out = [];
    decomposeWord(word).forEach(function (d) {
      if (!d) return;
      [d.cho, d.jung, d.jong].forEach(function (j) {
        if (!j) return;
        parts(j).forEach(function (p) {
          if (out.indexOf(p) < 0) out.push(p);
        });
      });
    });
    return out;
  }

  /** 받침만 바꾼 글자를 만든다. ('약','ㅇ') -> '앙',  ('약','') -> '야' */
  function withJong(ch, jong) {
    var d = decompose(ch);
    if (!d) return null;
    return compose(d.cho, d.jung, jong || '');
  }

  /** 중성만 바꾼 글자. ('아','ㅓ') -> '어' */
  function withJung(ch, jung) {
    var d = decompose(ch);
    if (!d) return null;
    return compose(d.cho, jung, d.jong);
  }

  AIYA.hangul.CHO = CHO;
  AIYA.hangul.JUNG = JUNG;
  AIYA.hangul.JONG = JONG;
  AIYA.hangul.CLUSTER = CLUSTER;
  AIYA.hangul.HORIZONTAL = HORIZONTAL;

  AIYA.hangul.isSyllable = isSyllable;
  AIYA.hangul.decompose = decompose;
  AIYA.hangul.compose = compose;
  AIYA.hangul.decomposeWord = decomposeWord;
  AIYA.hangul.vowelKind = vowelKind;
  AIYA.hangul.blockKind = blockKind;
  AIYA.hangul.isConsonant = isConsonant;
  AIYA.hangul.isVowel = isVowel;
  AIYA.hangul.parts = parts;
  AIYA.hangul.checkSyllable = checkSyllable;
  AIYA.hangul.checkWord = checkWord;
  AIYA.hangul.jamoUsed = jamoUsed;
  AIYA.hangul.withJong = withJong;
  AIYA.hangul.withJung = withJung;
})(window.AIYA);
