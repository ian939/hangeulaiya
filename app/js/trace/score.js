/* 획 하나의 채점.
 *
 * 점수는 두 축의 곱이다.
 *   coverage  — 안내선을 끝까지 지났나 (중간에 멈추면 떨어진다)
 *   precision — 안내선 밖으로 나가지 않았나 (아무렇게나 칠하면 떨어진다)
 * 두 축이 모두 필요하다. coverage 만 보면 화면 전체를 문질러도 통과하고,
 * precision 만 보면 점 하나만 찍어도 통과한다.
 *
 * 허용 오차는 픽셀이 아니라 글자 상자 기준 비율(em)로 받는다. 그래야
 * 아이패드 해상도나 캔버스 크기가 바뀌어도 채점이 같다.
 */
(function (AIYA) {
  'use strict';

  var geo = AIYA.trace.geo;

  var DEFAULTS = {
    toleranceEm: 0.16,      // 안내선에서 이만큼 벗어나도 봐준다
    coverageEm: 0.13,       // 안내선 위 한 점을 "지났다"고 볼 거리
    passScore: 0.55,
    startEm: 0.28,          // 시작점 허용 오차
    checkDirection: true,   // ㅇ 처럼 방향이 없는 획은 false
    checkStart: true,
    minLengthRatio: 0.45    // 안내선 길이의 이 비율보다 짧으면 미완성
  };

  /**
   * @param {Array} drawn 아이가 그린 점 배열 (정규 좌표)
   * @param {Array} guide 안내선 폴리라인 (정규 좌표)
   * @param {object} opts DEFAULTS 참고
   */
  function scoreStroke(drawn, guide, opts) {
    var o = Object.assign({}, DEFAULTS, opts || {});

    var result = {
      ok: false, score: 0,
      coverage: 0, precision: 0,
      tooShort: false, wrongStart: false, wrongDirection: false,
      reason: null
    };

    if (!drawn || drawn.length < 2 || !guide || guide.length < 2) {
      result.tooShort = true;
      result.reason = 'tooShort';
      return result;
    }

    var d = geo.resample(geo.simplify(drawn), 0.01);
    var g = geo.resample(guide, 0.012);

    // --- coverage: 안내선의 각 점 근처를 지났는지 ---
    var hit = 0;
    for (var i = 0; i < g.length; i++) {
      var m = Infinity;
      for (var j = 0; j < d.length; j++) {
        var dd = geo.dist(g[i], d[j]);
        if (dd < m) { m = dd; if (m < o.coverageEm * 0.35) break; }
      }
      if (m <= o.coverageEm) hit++;
    }
    result.coverage = hit / g.length;

    // --- precision: 그린 점들이 허용 띠 안에 있는지 + 진행률 기록 ---
    var inside = 0;
    var progress = [];
    for (var k = 0; k < d.length; k++) {
      var r = geo.pointToPolyline(d[k], g);
      if (r.d <= o.toleranceEm) inside++;
      progress.push(r.s);
    }
    result.precision = inside / d.length;

    // --- 길이 ---
    var lenRatio = geo.pathLength(d) / geo.pathLength(g);
    if (lenRatio < o.minLengthRatio) {
      result.tooShort = true;
      result.reason = 'tooShort';
    }

    // --- 시작점 ---
    if (o.checkStart) {
      var dStart = geo.dist(d[0], g[0]);
      var dEnd = geo.dist(d[0], g[g.length - 1]);
      if (dStart > o.startEm && dEnd < dStart) {
        result.wrongStart = true;
        result.wrongDirection = true;
        result.reason = result.reason || 'wrongStart';
      } else if (dStart > o.startEm * 1.8) {
        result.wrongStart = true;
        result.reason = result.reason || 'wrongStart';
      }
    }

    // --- 방향: 진행률이 대체로 늘어나야 한다 ---
    if (o.checkDirection && progress.length > 3) {
      var forward = 0, back = 0;
      for (var p = 1; p < progress.length; p++) {
        var delta = progress[p] - progress[p - 1];
        if (delta > 0.002) forward++;
        else if (delta < -0.002) back++;
      }
      if (forward + back > 0 && forward / (forward + back) < 0.6) {
        result.wrongDirection = true;
        result.reason = result.reason || 'wrongDirection';
      }
    }

    result.score = result.coverage * result.precision;
    result.ok = result.score >= o.passScore &&
                !result.tooShort &&
                !result.wrongStart &&
                !(o.checkDirection && result.wrongDirection);

    if (result.ok) result.reason = null;
    else if (!result.reason) {
      result.reason = result.coverage < result.precision ? 'incomplete' : 'offPath';
    }

    return result;
  }

  /** 실패 이유를 아이에게 할 말로 바꾼다. 절대 "틀렸다"고 하지 않는다. */
  var COACH = {
    tooShort: '조금 더 길게 그어 볼까?',
    wrongStart: '여기 점에서 시작해 봐!',
    wrongDirection: '화살표 방향으로 그어 볼까?',
    incomplete: '끝까지 쭉 이어 볼까?',
    offPath: '선 안쪽으로 천천히 지나가 볼까?'
  };

  function coachLine(reason) {
    return COACH[reason] || '다시 한 번 해 볼까?';
  }

  /** 별 개수 — 첫 시도에 통과하면 3, 재시도면 2, 시연 후면 1 */
  function stars(passed, attempts, revealed) {
    if (!passed) return 0;
    if (revealed) return 1;
    return attempts <= 1 ? 3 : 2;
  }

  AIYA.trace.DEFAULTS = DEFAULTS;
  AIYA.trace.scoreStroke = scoreStroke;
  AIYA.trace.coachLine = coachLine;
  AIYA.trace.stars = stars;
})(window.AIYA);
