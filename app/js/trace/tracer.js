/* 따라쓰기 위젯.
 *
 * 한 번에 한 획씩만 받는다. 획 수를 UI 구조로 강제하는 셈이라
 * 아이가 획 수를 틀리는 일이 원천적으로 생기지 않고,
 * "지금은 두 번째 획이에요" 같은 안내로 바뀐다.
 */
(function (AIYA) {
  'use strict';

  var geo = AIYA.trace.geo;

  var COLORS = {
    ghost: 'rgba(20,24,40,0.10)',      // 글자 전체 실루엣
    band: 'rgba(90,140,255,0.18)',     // 현재 획 허용 띠
    guide: 'rgba(70,120,240,0.55)',    // 현재 획 중심선
    done: '#2b3a67',                   // 아이가 완성한 획
    ink: '#1b2340',                    // 지금 그리는 선
    start: '#ff7043',
    reveal: 'rgba(255,112,67,0.85)'
  };

  function dpr() {
    return Math.min(window.devicePixelRatio || 1, 3);
  }

  /**
   * @param {HTMLElement} host
   * @param {object} spec
   *   spec.target  '약' | 'ㄱ' | '돋보기'
   *   spec.kind    'jamo' | 'syllable' | 'word'
   *   spec.params  { toleranceEm, passScore, checkDirection, attemptsBeforeReveal }
   *   spec.onStroke(index, result)
   *   spec.onDone({stars, attempts, revealed, score, snapshot})
   */
  function create(host, spec) {
    var H = AIYA.hangul;
    var params = Object.assign({
      toleranceEm: 0.16,
      passScore: 0.55,
      attemptsBeforeReveal: 3,
      checkDirection: true,
      showNumbers: true,
      showArrow: true,
      showGhost: true
    }, spec.params || {});

    var target = spec.target;
    var kind = spec.kind || (H.isSyllable(target) ? 'syllable' : 'jamo');
    var cols = kind === 'word' ? String(target).length : 1;

    // --- 획 목록 ---
    var strokes;
    if (kind === 'word') {
      strokes = H.strokesForWord(target);
    } else if (kind === 'syllable') {
      strokes = H.strokesFor(target);
    } else {
      var g0 = H.glyphs.strokes(target);
      strokes = g0.map(function (s, i) {
        return {
          jamo: target, position: 'cho', index: i, indexInJamo: i,
          strokeCount: g0.length, pts: s.pts, dir: s.dir, closed: !!s.closed
        };
      });
    }

    // --- DOM ---
    var wrap = document.createElement('div');
    wrap.className = 'tracer' + (cols > 1 ? ' tracer--word' : '');

    var canvas = document.createElement('canvas');
    canvas.className = 'tracer__canvas';
    canvas.style.aspectRatio = cols + ' / 1';
    wrap.appendChild(canvas);

    var hud = document.createElement('div');
    hud.className = 'tracer__hud';
    wrap.appendChild(hud);

    var coach = document.createElement('p');
    coach.className = 'tracer__coach';
    coach.setAttribute('aria-live', 'polite');
    wrap.appendChild(coach);

    var actions = document.createElement('div');
    actions.className = 'tracer__actions';
    actions.appendChild(button('↩︎ 다시', function () { resetStroke(); }));
    actions.appendChild(button('👀 보여줘', function () { reveal(); }));
    wrap.appendChild(actions);

    host.appendChild(wrap);

    function button(text, fn) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'btn btn--ghost';
      b.textContent = text;
      b.addEventListener('click', fn);
      return b;
    }

    // --- 상태 ---
    var ctx = canvas.getContext('2d');
    var W = 0, Hh = 0, cell = 0;
    var current = 0;      // 지금 그려야 하는 획
    var drawing = false;
    var pts = [];         // 지금 그리는 획 (정규 좌표)
    var completed = [];
    var attempts = 0;     // 현재 획에서의 시도 수
    var totalAttempts = 0;
    var revealedAny = false;
    var revealTimer = null;
    var revealProgress = -1;
    var scores = [];
    var destroyed = false;
    var lastSpeech = Promise.resolve();   // 마지막 발화. 호출한 쪽이 끝을 기다릴 수 있게 넘긴다.

    function resize() {
      var rect = canvas.getBoundingClientRect();
      if (!rect.width) return;
      var r = dpr();
      canvas.width = Math.round(rect.width * r);
      canvas.height = Math.round(rect.height * r);
      W = rect.width;
      Hh = rect.height;
      cell = Hh;                       // 글자 상자 한 칸의 픽셀 크기
      ctx.setTransform(r, 0, 0, r, 0, 0);
      draw();
    }

    /** 정규 좌표 → 픽셀 */
    function toPx(p) {
      return [p[0] * W, p[1] * cell];
    }

    /** 클라이언트 좌표 → 정규 좌표 */
    function toNorm(clientX, clientY) {
      var rect = canvas.getBoundingClientRect();
      return [(clientX - rect.left) / rect.width, (clientY - rect.top) / rect.height];
    }

    /**
     * 채점은 종횡비가 왜곡되지 않은 좌표에서 해야 한다.
     * 낱말 모드는 x 가 cols 배로 늘어나 있으므로 x 를 되돌린다.
     */
    function forScoring(p) {
      return p.map(function (q) { return [q[0] * cols, q[1]]; });
    }

    // --- 그리기 ---
    function draw() {
      if (!W) return;
      ctx.clearRect(0, 0, W, Hh);
      drawGrid();
      if (params.showGhost) drawGhost();

      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      ctx.strokeStyle = COLORS.done;
      ctx.lineWidth = Math.max(6, cell * 0.055);
      completed.forEach(function (p) { strokePath(p); ctx.stroke(); });

      if (current < strokes.length) {
        var gp = strokes[current].pts;

        // 허용 띠. 기하적으로는 반지름 = toleranceEm 이지만, 그대로 그리면
        // 칸을 거의 다 덮어 안내선이 안 보인다. 화면에서만 폭을 제한한다.
        ctx.strokeStyle = COLORS.band;
        ctx.lineWidth = Math.min(params.toleranceEm * 2, 0.26) * cell;
        strokePath(gp); ctx.stroke();

        ctx.strokeStyle = COLORS.guide;
        ctx.lineWidth = Math.max(2, cell * 0.012);
        ctx.setLineDash([cell * 0.035, cell * 0.03]);
        strokePath(gp); ctx.stroke();
        ctx.setLineDash([]);

        drawStartDot(gp);
        if (params.showArrow) drawArrow(gp);
        if (revealProgress >= 0) drawReveal(gp);
      }

      if (pts.length > 1) {
        ctx.strokeStyle = COLORS.ink;
        ctx.lineWidth = Math.max(6, cell * 0.055);
        strokePath(pts); ctx.stroke();
      }

      updateHud();
    }

    function strokePath(p) {
      if (!p.length) return;
      ctx.beginPath();
      var a = toPx(p[0]);
      ctx.moveTo(a[0], a[1]);
      for (var i = 1; i < p.length; i++) {
        var b = toPx(p[i]);
        ctx.lineTo(b[0], b[1]);
      }
    }

    function drawGrid() {
      ctx.save();
      ctx.strokeStyle = 'rgba(20,24,40,0.08)';
      ctx.lineWidth = 1;
      var w = W / cols;
      for (var c = 0; c < cols; c++) {
        var x0 = c * w;
        ctx.strokeRect(x0 + 0.5, 0.5, w - 1, cell - 1);
        ctx.beginPath();
        ctx.setLineDash([4, 7]);
        ctx.moveTo(x0 + w / 2, 0); ctx.lineTo(x0 + w / 2, cell);
        ctx.moveTo(x0, cell / 2); ctx.lineTo(x0 + w, cell / 2);
        ctx.stroke();
        ctx.setLineDash([]);
      }
      ctx.restore();
    }

    /**
     * 글자 전체의 옅은 밑그림.
     *
     * 시스템 폰트로 fillText 하면 안 된다. 폰트의 글자 모양과 우리 획 데이터의
     * 중심선이 미묘하게 어긋나서, 아이 눈에는 서로 다른 두 개의 글자로 보인다.
     * 그래서 채점에 쓰는 그 획 데이터를 그대로 옅게 깔아 준다. 밑그림과 안내선과
     * 채점 기준이 항상 정확히 같은 도형이 된다.
     */
    function drawGhost() {
      ctx.save();
      ctx.strokeStyle = COLORS.ghost;
      ctx.lineWidth = Math.max(8, cell * 0.075);
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      strokes.forEach(function (s, i) {
        if (i === current) return;          // 지금 그을 획은 안내선으로 따로 그린다
        strokePath(s.pts);
        ctx.stroke();
      });
      ctx.restore();
    }

    function drawStartDot(gp) {
      var a = toPx(gp[0]);
      ctx.save();
      ctx.fillStyle = COLORS.start;
      ctx.beginPath();
      ctx.arc(a[0], a[1], Math.max(8, cell * 0.032), 0, Math.PI * 2);
      ctx.fill();
      if (params.showNumbers) {
        ctx.fillStyle = '#fff';
        ctx.font = '700 ' + Math.max(11, cell * 0.040) + 'px system-ui,sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(String(strokes[current].indexInJamo + 1), a[0], a[1] + 0.5);
      }
      ctx.restore();
    }

    function drawArrow(gp) {
      if (strokes[current].closed || gp.length < 2) return;
      var n = gp.length;
      var tip = toPx(gp[n - 1]);
      var prev = toPx(gp[Math.max(0, n - 2)]);
      var ang = Math.atan2(tip[1] - prev[1], tip[0] - prev[0]);
      var size = Math.max(9, cell * 0.045);
      ctx.save();
      ctx.translate(tip[0], tip[1]);
      ctx.rotate(ang);
      ctx.fillStyle = COLORS.guide;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(-size, -size * 0.5);
      ctx.lineTo(-size, size * 0.5);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    /** "보여줘" 애니메이션 — 안내선을 따라 선이 자란다. */
    function drawReveal(gp) {
      var g = geo.resample(gp, 0.008);
      var upto = Math.max(2, Math.floor(g.length * revealProgress));
      ctx.save();
      ctx.strokeStyle = COLORS.reveal;
      ctx.lineWidth = Math.max(6, cell * 0.05);
      ctx.lineCap = 'round';
      strokePath(g.slice(0, upto));
      ctx.stroke();
      ctx.restore();
    }

    function updateHud() {
      var total = strokes.length;
      var s = strokes[Math.min(current, total - 1)];
      var bits = ['<span class="tracer__count">' + Math.min(current + 1, total) + ' / ' + total + ' 획</span>'];
      if (kind !== 'jamo' && s) {
        var posName = s.position === 'jong' ? '받침' : (s.position === 'jung' ? '모음' : '첫 자음');
        bits.push('<span class="tracer__part">' + posName + ' ' + s.jamo + '</span>');
      }
      hud.innerHTML = bits.join('');
    }

    /**
     * 코치 문구를 보여준다. 소리는 "어떻게 하라"는 안내에만 쓴다.
     * 칭찬·환호(quiet=true)는 화면으로만 — 소리로 내면 아이가 기다리는 시간만 늘고,
     * TTS 가 이모지를 "박수" 라고 읽어 버린다.
     */
    function say(text, quiet) {
      coach.textContent = text || '';
      if (text && !quiet && AIYA.audio && AIYA.audio.speak) {
        lastSpeech = AIYA.audio.speak(text);
      }
      return lastSpeech;
    }

    // --- 포인터 ---
    function onDown(e) {
      if (destroyed || current >= strokes.length) return;
      if (canvas.setPointerCapture) {
        try { canvas.setPointerCapture(e.pointerId); } catch (err) { /* 무시 */ }
      }
      drawing = true;
      pts = [toNorm(e.clientX, e.clientY)];
      cancelReveal();
      coach.textContent = '';
      e.preventDefault();
      draw();
    }

    function onMove(e) {
      if (!drawing) return;
      var list = e.getCoalescedEvents ? e.getCoalescedEvents() : null;
      if (list && list.length) {
        for (var i = 0; i < list.length; i++) pts.push(toNorm(list[i].clientX, list[i].clientY));
      } else {
        pts.push(toNorm(e.clientX, e.clientY));
      }
      e.preventDefault();
      draw();
    }

    function onUp(e) {
      if (!drawing) return;
      drawing = false;
      e.preventDefault();
      finishStroke();
    }

    function finishStroke() {
      var s = strokes[current];
      var res = AIYA.trace.scoreStroke(forScoring(pts), forScoring(s.pts), {
        toleranceEm: params.toleranceEm,
        passScore: params.passScore,
        checkDirection: !s.closed && params.checkDirection !== false,
        checkStart: !s.closed
      });

      attempts++;
      totalAttempts++;
      if (spec.onStroke) spec.onStroke(current, res);

      if (res.ok) {
        scores.push(res.score);
        completed.push(pts.slice());
        pts = [];
        current++;
        attempts = 0;
        if (current >= strokes.length) {
          say('완성! 잘했어 👏', true);   // 환호는 화면으로만
          draw();
          finishAll();
          return;
        }
        say('좋아! 다음 획이야.', true);   // 획마다 소리가 나면 흐름이 끊긴다
      } else {
        pts = [];
        say(AIYA.trace.coachLine(res.reason));
        if (attempts >= params.attemptsBeforeReveal) reveal();
      }
      draw();
    }

    function finishAll() {
      var avg = scores.length
        ? scores.reduce(function (a, b) { return a + b; }, 0) / scores.length
        : 0;
      if (spec.onDone) {
        spec.onDone({
          target: target,
          stars: AIYA.trace.stars(true, totalAttempts <= strokes.length ? 1 : 2, revealedAny),
          attempts: totalAttempts,
          revealed: revealedAny,
          score: avg,
          snapshot: snapshot(),
          // 칭찬을 끝까지 들려준 다음 넘어가도록 호출한 쪽에 발화를 넘긴다
          speech: lastSpeech
        });
      }
    }

    /** 아이가 쓴 글자를 작은 PNG 로 — 부모 리포트용 */
    function snapshot() {
      try {
        var c = document.createElement('canvas');
        var size = 160;
        c.width = size * cols;
        c.height = size;
        var g2 = c.getContext('2d');
        g2.fillStyle = '#fff';
        g2.fillRect(0, 0, c.width, c.height);
        g2.strokeStyle = '#2b3a67';
        g2.lineWidth = 9;
        g2.lineCap = 'round';
        g2.lineJoin = 'round';
        completed.forEach(function (p) {
          g2.beginPath();
          p.forEach(function (pt, i) {
            var x = pt[0] * c.width;
            var y = pt[1] * size;
            if (i) g2.lineTo(x, y); else g2.moveTo(x, y);
          });
          g2.stroke();
        });
        return c.toDataURL('image/png');
      } catch (err) {
        return null;
      }
    }

    function resetStroke() {
      pts = [];
      cancelReveal();
      coach.textContent = '';
      draw();
    }

    function reveal() {
      if (current >= strokes.length) return;
      revealedAny = true;
      cancelReveal();
      say('이렇게 그어 보자!');
      var t0 = Date.now();
      revealProgress = 0;
      revealTimer = setInterval(function () {
        revealProgress = Math.min(1, (Date.now() - t0) / 1100);
        draw();
        if (revealProgress >= 1) {
          clearInterval(revealTimer);
          revealTimer = null;
          setTimeout(function () { revealProgress = -1; draw(); }, 500);
        }
      }, 33);
    }

    function cancelReveal() {
      if (revealTimer) { clearInterval(revealTimer); revealTimer = null; }
      revealProgress = -1;
    }

    canvas.addEventListener('pointerdown', onDown);
    canvas.addEventListener('pointermove', onMove);
    canvas.addEventListener('pointerup', onUp);
    canvas.addEventListener('pointercancel', onUp);
    // Safari 가 캔버스 위에서 스크롤·확대하지 못하게 한다
    canvas.addEventListener('touchstart', function (e) { e.preventDefault(); }, { passive: false });
    canvas.addEventListener('touchmove', function (e) { e.preventDefault(); }, { passive: false });

    var ro = window.ResizeObserver ? new ResizeObserver(resize) : null;
    if (ro) ro.observe(canvas); else window.addEventListener('resize', resize);
    setTimeout(resize, 0);

    return {
      el: wrap,
      redraw: draw,
      reveal: reveal,
      destroy: function () {
        destroyed = true;
        cancelReveal();
        if (ro) ro.disconnect(); else window.removeEventListener('resize', resize);
        wrap.remove();
      }
    };
  }

  AIYA.trace.create = create;
})(window.AIYA);
