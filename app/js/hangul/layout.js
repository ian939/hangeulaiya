/* 음절 블록 배치.
 *
 * 한글은 조합적이라 글자마다 데이터가 필요 없다. 자모 하나하나의 획 데이터(glyphs.js)를
 * 음절 안의 작은 상자에 아핀 변환으로 앉히면 11,172자가 전부 만들어진다.
 *
 * 상자는 음절 단위 정사각형 [0,1] x [0,1] 안의 비율이며 y 는 아래로 증가한다.
 * 여기 비율은 실제 한글 활자의 대략적인 균형을 따른 값이다.
 */
(function (AIYA) {
  'use strict';

  function box(x, y, w, h) { return { x: x, y: y, w: w, h: h }; }

  var BOXES = {
    // 초성 + 세로모음 (가, 이, 니…)
    'vertical': {
      cho: box(0.03, 0.09, 0.47, 0.82),
      jung: box(0.56, 0.05, 0.38, 0.90)
    },
    // 초성 + 세로모음 + 받침 (약, 문, 간…)
    'vertical-jong': {
      cho: box(0.04, 0.05, 0.44, 0.56),
      jung: box(0.56, 0.03, 0.36, 0.60),
      jong: box(0.14, 0.68, 0.72, 0.28)
    },
    // 초성 + 가로모음 (도, 무, 그…)
    'horizontal': {
      cho: box(0.20, 0.04, 0.60, 0.46),
      jung: box(0.05, 0.58, 0.90, 0.34)
    },
    // 초성 + 가로모음 + 받침 (돋, 국, 몸…)
    'horizontal-jong': {
      cho: box(0.24, 0.02, 0.52, 0.34),
      jung: box(0.05, 0.40, 0.90, 0.22),
      jong: box(0.22, 0.66, 0.56, 0.31)
    },
    // 초성 + 복합모음 (과, 위…) — 모음이 초성을 감싼다
    'mixed': {
      cho: box(0.04, 0.05, 0.42, 0.48),
      jung: box(0.04, 0.04, 0.92, 0.90)
    },
    'mixed-jong': {
      cho: box(0.04, 0.03, 0.38, 0.40),
      jung: box(0.04, 0.03, 0.92, 0.62),
      jong: box(0.15, 0.69, 0.70, 0.28)
    }
  };

  /**
   * 음절의 자모별 배치 상자를 돌려준다.
   * @param {string|object} syl '약' 또는 decompose 결과
   * @returns {{kind:string, cho:object, jung:object, jong:?object, jamo:object}}
   */
  function layout(syl) {
    var H = AIYA.hangul;
    var d = typeof syl === 'string' ? H.decompose(syl) : syl;
    if (!d) return null;

    var kind = H.vowelKind(d.jung) + (d.jong ? '-jong' : '');
    var b = BOXES[kind] || BOXES['vertical'];

    return {
      kind: kind,
      cho: b.cho,
      jung: b.jung,
      jong: d.jong ? b.jong : null,
      jamo: { cho: d.cho, jung: d.jung, jong: d.jong }
    };
  }

  /**
   * 자모 자체 좌표(0..1)의 점을 음절 상자 좌표로 옮긴다.
   * @param {Array<number>} pt [x, y] — 자모 자체 단위 좌표
   * @param {object} b 배치 상자
   */
  function place(pt, b) {
    return [b.x + pt[0] * b.w, b.y + pt[1] * b.h];
  }

  /** 폴리라인 전체를 상자로 옮긴다. */
  function placePolyline(pts, b) {
    return pts.map(function (p) { return place(p, b); });
  }

  /**
   * 음절 하나의 전체 획 목록을 순서대로 만든다.
   * 필순 원칙: 초성 → 중성 → 종성.
   * @returns {Array<{jamo:string, position:string, index:number, pts:Array, dir:string}>}
   */
  function strokesFor(syl) {
    var G = AIYA.hangul.glyphs;
    var lay = layout(syl);
    if (!lay || !G) return [];

    var out = [];
    ['cho', 'jung', 'jong'].forEach(function (pos) {
      var j = lay.jamo[pos];
      var b = lay[pos];
      if (!j || !b) return;
      var strokes = G.strokes(j);
      strokes.forEach(function (s, i) {
        out.push({
          jamo: j,
          position: pos,
          index: out.length,
          indexInJamo: i,
          strokeCount: strokes.length,
          pts: placePolyline(s.pts, b),
          dir: s.dir,
          closed: !!s.closed
        });
      });
    });
    return out;
  }

  /** 낱말 전체. 음절별로 상자를 가로로 나눠 배치한다. */
  function strokesForWord(word) {
    var syllables = String(word).split('');
    var n = syllables.length;
    var out = [];
    syllables.forEach(function (s, si) {
      strokesFor(s).forEach(function (st) {
        out.push(Object.assign({}, st, {
          syllableIndex: si,
          index: out.length,
          // 낱말 좌표계: x 를 음절 칸으로 압축
          pts: st.pts.map(function (p) { return [(si + p[0]) / n, p[1]]; })
        }));
      });
    });
    return out;
  }

  AIYA.hangul.BOXES = BOXES;
  AIYA.hangul.layout = layout;
  AIYA.hangul.place = place;
  AIYA.hangul.placePolyline = placePolyline;
  AIYA.hangul.strokesFor = strokesFor;
  AIYA.hangul.strokesForWord = strokesForWord;
})(window.AIYA);
