/* 낱자(자모)를 화면에 그린다.
 *
 * 왜 글꼴 대신 직접 그리는가
 * ---------------------------
 * ㄱ ㅜ ㅗ ㅡ 같은 낱자를 글자로 찍으면 자모마다 잉크가 em 박스 안에서 놓이는
 * 높이가 달라진다. ㅗ 는 위쪽에, ㅜ 는 아래쪽에, ㄴ 은 왼쪽 아래에 몰려 있다.
 * 그래서 같은 칸에 넣어도 어떤 건 가운데, 어떤 건 아래로 처져 보이고 잘리기도 한다.
 *
 * 우리는 이미 획 데이터(glyphs.js)를 갖고 있고 그건 단위 상자에 정규화되어 있다.
 * 그걸 SVG 로 그리면 모든 자모가 칸 가운데에 똑같은 크기로 놓인다.
 * 따라쓰기 안내선과 완전히 같은 도형이라는 것도 이점이다.
 *
 * 음절(약, 문 …)은 글꼴로 찍는다. 조합 결과를 보여주는 게 목적이기 때문이다.
 */
(function (AIYA) {
  'use strict';

  var NS = 'http://www.w3.org/2000/svg';

  function pathD(pts) {
    return pts.map(function (p, i) {
      return (i ? 'L' : 'M') + p[0].toFixed(4) + ' ' + p[1].toFixed(4);
    }).join(' ');
  }

  /**
   * 자모 하나를 SVG 로. 획 데이터가 없으면 null.
   *
   * 여백은 CSS 가 아니라 viewBox 안쪽에서 준다. SVG 는 viewBox 에서 나온 고유
   * 비율을 갖는 대체 요소라서, width/height 를 auto 로 두고 네 방향 inset 만
   * 주면 브라우저가 inset 대신 그 비율을 우선해 정사각형으로 만들어 버린다.
   * 그래서 CSS 에서는 칸을 꽉 채우게 하고(inset:0, 100%x100%), 숨 쉴 틈은
   * 여기서 만든다. preserveAspectRatio 기본값이 글자를 가운데에 비율대로 넣는다.
   *
   * @param {string} jamo 'ㄱ' | 'ㅜ' …
   * @param {object} opts {weight, pad, className, position}
   */
  function jamoSvg(jamo, opts) {
    opts = opts || {};
    var G = AIYA.hangul.glyphs;
    if (!G || !G.has(jamo)) return null;

    var weight = opts.weight || 0.13;
    // weight/2 는 둥근 끝이 잘리지 않게, 나머지는 칸 안에서의 여백
    var pad = opts.pad === undefined ? weight / 2 + 0.10 : opts.pad;
    var svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox',
      (-pad).toFixed(3) + ' ' + (-pad).toFixed(3) + ' ' +
      (1 + pad * 2).toFixed(3) + ' ' + (1 + pad * 2).toFixed(3));
    svg.setAttribute('class', 'jamo' + (opts.className ? ' ' + opts.className : ''));
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-label', AIYA.hangul.label(jamo, opts.position));
    svg.setAttribute('focusable', 'false');

    G.strokes(jamo).forEach(function (s) {
      var path = document.createElementNS(NS, 'path');
      path.setAttribute('d', pathD(s.pts));
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', 'currentColor');
      path.setAttribute('stroke-width', String(weight));
      path.setAttribute('stroke-linecap', 'round');
      path.setAttribute('stroke-linejoin', 'round');
      svg.appendChild(path);
    });
    return svg;
  }

  /** 한 글자짜리 낱자인지 (완성형 음절은 아니어야 한다) */
  function isSingleJamo(text) {
    if (typeof text !== 'string' || Array.from(text).length !== 1) return false;
    return !AIYA.hangul.isSyllable(text) && AIYA.hangul.glyphs.has(text);
  }

  /**
   * 낱자면 SVG, 그 밖이면 텍스트 노드를 돌려준다.
   * 선택지·타일·칸의 내용을 만들 때 이걸 쓰면 자모와 음절을 함께 다룰 수 있다.
   */
  function glyphNode(text, opts) {
    if (isSingleJamo(text)) {
      var svg = jamoSvg(text, opts);
      if (svg) return svg;
    }
    var span = document.createElement('span');
    span.className = 'glyphtext' + (opts && opts.className ? ' ' + opts.className : '');
    span.textContent = text;
    return span;
  }

  AIYA.hangul.jamoSvg = jamoSvg;
  AIYA.hangul.isSingleJamo = isSingleJamo;
  AIYA.hangul.glyphNode = glyphNode;
})(window.AIYA);
