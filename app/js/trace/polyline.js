/* 폴리라인 기하 — 재샘플링과 거리 계산.
 *
 * 채점을 캔버스 픽셀 마스크로 하지 않고 점 샘플 거리로 한다.
 * getImageData 는 느리고 기기마다 결과가 흔들리는데, 점 거리 방식은
 * 같은 정보(경로를 다 지났나 / 밖으로 나갔나)를 결정적으로 준다.
 *
 * 좌표계는 전부 "글자 상자" 정규 좌표 [0,1] x [0,1], y 는 아래로 증가.
 */
(function (AIYA) {
  'use strict';

  function dist(a, b) {
    var dx = a[0] - b[0], dy = a[1] - b[1];
    return Math.sqrt(dx * dx + dy * dy);
  }

  function pathLength(pts) {
    var total = 0;
    for (var i = 1; i < pts.length; i++) total += dist(pts[i - 1], pts[i]);
    return total;
  }

  /** 폴리라인을 일정 간격 step 으로 다시 샘플링한다. 항상 시작점과 끝점을 포함. */
  function resample(pts, step) {
    if (!pts || pts.length === 0) return [];
    if (pts.length === 1) return [pts[0].slice()];
    step = step || 0.01;

    var out = [pts[0].slice()];
    var carry = 0;

    for (var i = 1; i < pts.length; i++) {
      var a = pts[i - 1], b = pts[i];
      var seg = dist(a, b);
      if (seg === 0) continue;
      var t = (step - carry) / seg;
      while (t <= 1) {
        out.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]);
        t += step / seg;
      }
      carry = (carry + seg) % step;
    }

    var last = pts[pts.length - 1];
    if (dist(out[out.length - 1], last) > step * 0.4) out.push(last.slice());
    return out;
  }

  /** 점 p 에서 선분 ab 까지의 최단거리와 그 위치 t(0..1) */
  function pointToSegment(p, a, b) {
    var vx = b[0] - a[0], vy = b[1] - a[1];
    var len2 = vx * vx + vy * vy;
    if (len2 === 0) return { d: dist(p, a), t: 0 };
    var t = ((p[0] - a[0]) * vx + (p[1] - a[1]) * vy) / len2;
    t = Math.max(0, Math.min(1, t));
    var cx = a[0] + vx * t, cy = a[1] + vy * t;
    var dx = p[0] - cx, dy = p[1] - cy;
    return { d: Math.sqrt(dx * dx + dy * dy), t: t };
  }

  /**
   * 점 p 에서 폴리라인까지의 최단거리와, 폴리라인을 따라간 진행률(0..1).
   * 진행률은 "아이가 경로의 어디쯤에 있는지"라서 방향 채점의 근거가 된다.
   */
  function pointToPolyline(p, pts) {
    var best = { d: Infinity, s: 0 };
    if (!pts || pts.length === 0) return best;
    if (pts.length === 1) return { d: dist(p, pts[0]), s: 0 };

    var total = pathLength(pts);
    var walked = 0;

    for (var i = 1; i < pts.length; i++) {
      var a = pts[i - 1], b = pts[i];
      var seg = dist(a, b);
      var r = pointToSegment(p, a, b);
      if (r.d < best.d) {
        best = { d: r.d, s: total > 0 ? (walked + seg * r.t) / total : 0 };
      }
      walked += seg;
    }
    return best;
  }

  /** 폴리라인의 방향 벡터 (시작→끝, 단위벡터) */
  function overallDirection(pts) {
    if (!pts || pts.length < 2) return [0, 0];
    var a = pts[0], b = pts[pts.length - 1];
    var dx = b[0] - a[0], dy = b[1] - a[1];
    var m = Math.sqrt(dx * dx + dy * dy);
    return m === 0 ? [0, 0] : [dx / m, dy / m];
  }

  /** 아주 촘촘한 입력점을 솎아낸다 (포인터 이벤트가 과하게 많이 들어올 때) */
  function simplify(pts, minStep) {
    minStep = minStep || 0.004;
    if (!pts || pts.length < 2) return (pts || []).slice();
    var out = [pts[0]];
    for (var i = 1; i < pts.length; i++) {
      if (dist(pts[i], out[out.length - 1]) >= minStep) out.push(pts[i]);
    }
    if (out[out.length - 1] !== pts[pts.length - 1]) out.push(pts[pts.length - 1]);
    return out;
  }

  AIYA.trace.geo = {
    dist: dist,
    pathLength: pathLength,
    resample: resample,
    pointToSegment: pointToSegment,
    pointToPolyline: pointToPolyline,
    overallDirection: overallDirection,
    simplify: simplify
  };
})(window.AIYA);
