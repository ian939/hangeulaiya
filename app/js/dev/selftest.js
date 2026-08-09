/* 개발용 자체 점검. 브라우저에서 #/selftest 로 열면 실행된다.
 *
 * 회차 데이터가 88개로 늘어나면 사람이 손으로 검사할 수 없다.
 * 여기서 걸러야 하는 것: 조립 공식 오류, 획 데이터 누락, 회차 데이터 스키마 위반,
 * 그리고 활동이 참조하는 그림 파일이 실제로 있는지.
 */
(function (AIYA) {
  'use strict';

  var h = AIYA.dom.h;
  var H = AIYA.hangul;

  function run(out) {
    var results = [];
    function ok(name, cond, detail) {
      results.push({ name: name, pass: !!cond, detail: detail || '' });
    }

    // ---- 한글 조립 ----
    ok('조립: ㅇ+ㅑ+ㄱ = 약', H.compose('ㅇ', 'ㅑ', 'ㄱ') === '약', H.compose('ㅇ', 'ㅑ', 'ㄱ'));
    ok('조립: ㅁ+ㅜ+ㄴ = 문', H.compose('ㅁ', 'ㅜ', 'ㄴ') === '문');
    ok('조립: ㄷ+ㅗ+ㄷ = 돋', H.compose('ㄷ', 'ㅗ', 'ㄷ') === '돋');
    ok('조립: 받침 없음 ㅇ+ㅑ = 야', H.compose('ㅇ', 'ㅑ', '') === '야');

    var d = H.decompose('돋');
    ok('분해: 돋 → ㄷ/ㅗ/ㄷ', d && d.cho === 'ㄷ' && d.jung === 'ㅗ' && d.jong === 'ㄷ',
      d ? [d.cho, d.jung, d.jong].join('/') : 'null');

    ok('받침 바꾸기: 약 → 야', H.withJong('약', '') === '야');
    ok('받침 바꾸기: 문 → 뭉', H.withJong('문', 'ㅇ') === '뭉');

    // 11,172 음절 전수 왕복 검사 — 공식이 틀리면 여기서 반드시 걸린다
    var roundTrip = 0;
    for (var c = 0xac00; c <= 0xd7a3; c++) {
      var ch = String.fromCharCode(c);
      var p = H.decompose(ch);
      if (!p || H.compose(p.cho, p.jung, p.jong) !== ch) roundTrip++;
    }
    ok('음절 11,172자 분해→조립 왕복', roundTrip === 0, roundTrip + '자 불일치');

    ok('낱말 자모 추출: 돋보기', H.jamoUsed('돋보기').join('') === 'ㄷㅗㅂㄱㅣ',
      H.jamoUsed('돋보기').join(''));

    // ---- 획 데이터 ----
    var basic = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ',
                 'ㅏ', 'ㅑ', 'ㅓ', 'ㅕ', 'ㅗ', 'ㅛ', 'ㅜ', 'ㅠ', 'ㅡ', 'ㅣ'];
    var missing = basic.filter(function (j) { return !H.glyphs.has(j); });
    ok('기본 자모 24자 획 데이터', missing.length === 0, missing.join(' '));

    // 교과서 관행: 꺾임은 한 획. ㄱ ㄴ ㅇ 은 1획이어야 한다.
    var expectCount = {
      'ㄱ': 1, 'ㄴ': 1, 'ㄷ': 2, 'ㄹ': 3, 'ㅁ': 3, 'ㅂ': 4, 'ㅅ': 2, 'ㅇ': 1,
      'ㅈ': 2, 'ㅊ': 3, 'ㅋ': 2, 'ㅌ': 3, 'ㅍ': 4, 'ㅎ': 3,
      'ㅏ': 2, 'ㅑ': 3, 'ㅓ': 2, 'ㅕ': 3, 'ㅗ': 2, 'ㅛ': 3, 'ㅜ': 2, 'ㅠ': 3, 'ㅡ': 1, 'ㅣ': 1
    };
    var badCount = Object.keys(expectCount).filter(function (j) {
      return H.glyphs.strokeCount(j) !== expectCount[j];
    });
    ok('획수가 교과서 관행과 일치', badCount.length === 0,
      badCount.map(function (j) {
        return j + '(' + H.glyphs.strokeCount(j) + '≠' + expectCount[j] + ')';
      }).join(' '));

    // 모든 획 좌표가 단위 상자 안에 있는지
    var outOfBox = [];
    H.glyphs.list().forEach(function (j) {
      H.glyphs.strokes(j).forEach(function (st) {
        st.pts.forEach(function (p) {
          if (p[0] < -0.01 || p[0] > 1.01 || p[1] < -0.01 || p[1] > 1.01) {
            if (outOfBox.indexOf(j) < 0) outOfBox.push(j);
          }
        });
      });
    });
    ok('획 좌표가 0~1 범위 안', outOfBox.length === 0, outOfBox.join(' '));

    // 음절 획 생성
    ['약', '문', '돋', '국', '수'].forEach(function (ch) {
      var st = H.strokesFor(ch);
      var want = H.jamoUsed(ch).reduce(function (n, j) { return n + H.glyphs.strokeCount(j); }, 0);
      ok('음절 획 생성: ' + ch, st.length > 0, st.length + '획');
    });
    ok('낱말 획 생성: 돋보기', H.strokesForWord('돋보기').length > 0,
      H.strokesForWord('돋보기').length + '획');

    // ---- 채점 ----
    var guide = [[0.5, 0.05], [0.5, 0.95]];
    var perfect = AIYA.trace.scoreStroke(guide, guide, {});
    ok('채점: 완벽히 따라 쓰면 통과', perfect.ok, 'score=' + perfect.score.toFixed(2));

    var backwards = AIYA.trace.scoreStroke([[0.5, 0.95], [0.5, 0.05]], guide, {});
    ok('채점: 거꾸로 그으면 불통과', !backwards.ok, backwards.reason);

    var tooShort = AIYA.trace.scoreStroke([[0.5, 0.05], [0.5, 0.2]], guide, {});
    ok('채점: 너무 짧으면 불통과', !tooShort.ok, tooShort.reason);

    var offPath = AIYA.trace.scoreStroke([[0.05, 0.5], [0.95, 0.5]], guide, {});
    ok('채점: 엉뚱한 방향은 불통과', !offPath.ok, offPath.reason);

    // ---- 회차 데이터 ----
    var epKeys = Object.keys(AIYA.episodes);
    ok('회차 데이터 로드됨', epKeys.length > 0, epKeys.join(', '));

    var pics = [];
    epKeys.forEach(function (k) {
      var ep = AIYA.episodes[k];
      var tag = ep.episode + '화';
      ok(tag + ' videoId 있음', !!ep.videoId);
      ok(tag + ' 활동 있음', (ep.activities || []).length > 0,
        (ep.activities || []).length + '개');

      var shortCount = 0;
      (ep.activities || []).forEach(function (a) {
        ok(tag + ' ' + (a.id || a.type) + ': 엔진 등록됨', !!AIYA.activities[a.type], a.type);
        if ((a.courses || ['full']).indexOf('short') >= 0) shortCount++;

        // 자판기·사라진받침 문항의 목표가 실제 한글인지
        (a.items || []).forEach(function (it, i) {
          if (a.type === 'jamobuild' && it.target) {
            var allSyl = String(it.target).split('').every(H.isSyllable);
            ok(tag + ' ' + a.id + '#' + (i + 1) + ' 목표가 한글 음절', allSyl, it.target);
          }
          if (a.type === 'chunji') {
            ok(tag + ' ' + a.id + '#' + (i + 1) + ' 망가진 글자 길이 일치',
              String(it.broken).length === String(it.target).length,
              it.broken + ' / ' + it.target);
            ok(tag + ' ' + a.id + '#' + (i + 1) + ' 망가진 글자가 목표와 다름',
              it.broken !== it.target);
          }
          // 선택형은 정답이 정확히 하나
          if (it.options) {
            var n = it.options.filter(function (o) { return o.correct; }).length;
            ok(tag + ' ' + a.id + '#' + (i + 1) + ' 정답 1개', n === 1, n + '개');
          }
        });

        // 순서 맞추기: order 가 1..n 으로 빠짐없이
        if (a.type === 'sequence') {
          var orders = (a.cuts || []).map(function (c) { return c.order; }).sort(function (x, y) { return x - y; });
          var seqOk = orders.length > 0 && orders.every(function (o, i) { return o === i + 1; });
          ok(tag + ' 순서 맞추기 order 연속', seqOk, orders.join(','));
        }

        // 그림 파일 수집
        JSON.stringify(a).replace(/"value":"([^"]+\.svg)"/g, function (_, f) {
          if (pics.indexOf(f) < 0) pics.push(f);
          return '';
        });
      });

      ok(tag + ' 짧은 코스에 활동 있음', shortCount > 0, shortCount + '개');
    });

    // ---- 그림 파일 존재 확인 ----
    var picRow = h('p', '그림 파일 확인 중… (' + pics.length + '개)');
    out.appendChild(picRow);
    var loaded = 0, failed = [];
    if (!pics.length) picRow.textContent = '그림 파일 참조 없음';
    pics.forEach(function (f) {
      var img = new Image();
      img.onload = img.onerror = function () {
        loaded++;
        if (!img.naturalWidth) failed.push(f);
        if (loaded === pics.length) {
          picRow.className = failed.length ? 'card__warn' : 'feedback feedback--good';
          picRow.textContent = failed.length
            ? '✗ 없는 그림 파일: ' + failed.join(', ')
            : '✓ 그림 파일 ' + pics.length + '개 모두 있음';
        }
      };
      img.src = 'assets/pics/' + f;
    });

    // ---- 출력 ----
    var pass = results.filter(function (r) { return r.pass; }).length;
    var head = h('p.prompt__text',
      (pass === results.length ? '✅ ' : '⚠️ ') + pass + ' / ' + results.length + ' 통과');
    out.insertBefore(head, out.firstChild);

    var list = h('ul.plainlist');
    results.forEach(function (r) {
      list.appendChild(h('li', { style: { color: r.pass ? '#2e9e6b' : '#c0392b' } },
        (r.pass ? '✓ ' : '✗ ') + r.name + (r.detail ? '  — ' + r.detail : '')));
    });
    out.appendChild(list);

    // 브라우저 자동화(Playwright)가 읽을 수 있도록 결과를 노출한다
    window.__AIYA_SELFTEST__ = {
      total: results.length,
      pass: pass,
      failures: results.filter(function (r) { return !r.pass; })
        .map(function (r) { return r.name + (r.detail ? ' (' + r.detail + ')' : ''); })
    };
  }

  AIYA.dev = AIYA.dev || {};
  AIYA.dev.selftest = run;
})(window.AIYA);
