/* 뭐든지 자판기 — 자모 타일을 초성/중성/종성 칸에 넣어 낱말을 만든다.
 * 그리고 천지의 장난 — 망가진 낱말에서 잘못된 칸을 찾아 고친다.
 *
 * 조작은 드래그가 아니라 "타일 탭 → 칸 탭" 이다. 6~7세 손가락으로 드래그는
 * 자주 놓치고, 놓친 것이 오답으로 기록되면 측정이 망가진다. 탭은 실패가 없다.
 *
 * 정답 판정은 유니코드 조립식으로 실제 음절을 만들어 목표와 비교한다(jamo.js).
 */
(function (AIYA) {
  'use strict';

  var B = AIYA.activities._base;
  var h = AIYA.dom.h;
  var H = AIYA.hangul;

  var POS = ['cho', 'jung', 'jong'];

  /** 칸에 자모를 넣는다. 글꼴이 아니라 획 데이터로 그려서 칸마다 위치가 일정하다. */
  function setSlot(el, jamo, pos) {
    AIYA.dom.clear(el);
    if (!jamo) return;
    el.appendChild(H.glyphNode(jamo, { position: pos }));
  }

  /** locked 표기를 {si:{pos:true}} 로 정규화. 'cho' 나 '1:jong' 둘 다 받는다. */
  function normalizeLocked(locked, syllableCount) {
    var map = {};
    (locked || []).forEach(function (entry) {
      var si = 0, pos = entry;
      if (String(entry).indexOf(':') >= 0) {
        var p = String(entry).split(':');
        si = parseInt(p[0], 10);
        pos = p[1];
      } else if (syllableCount > 1) {
        // 음절을 안 적었으면 모든 음절의 그 자리를 잠근다
        for (var k = 0; k < syllableCount; k++) {
          map[k] = map[k] || {};
          map[k][entry] = true;
        }
        return;
      }
      map[si] = map[si] || {};
      map[si][pos] = true;
    });
    return map;
  }

  /**
   * 조립 판을 만든다.
   * @param spec.target   '약' | '돋보기'
   * @param spec.locked   ['cho'] | ['0:cho','2:cho']
   * @param spec.prefill  {'0:jung':'ㅗ'}  — 미리 채워두되 잠그지 않음
   * @param spec.ghost    true 면 완성 글자를 흐리게 보여준다
   * @param spec.onSolved(result)
   */
  function board(spec) {
    var syllables = String(spec.target).split('');
    var want = syllables.map(H.decompose);
    var lockedMap = normalizeLocked(spec.locked, syllables.length);
    var prefill = spec.prefill || {};

    var filled = {};    // 'si:pos' -> 자모
    var slotEls = {};
    var picked = null;  // 선택된 타일 {jamo, el}

    var root = h('div.vending');
    var slots = h('div.slots');
    var tray = h('div.tray');
    var fb = B.feedback();

    var cells = [];

    syllables.forEach(function (ch, si) {
      var d = want[si];
      var kind = H.blockKind(ch);
      var cell = h('div.syllable');
      cells.push(cell);
      // 실루엣은 언제나 넣어 두지만 기본은 숨어 있다 (CSS). 여러 번 막힐 때만 켠다.
      cell.appendChild(h('div.syllable__ghost', ch));
      if (spec.ghost === true) cell.classList.add('syllable--hint');

      var grid = h('div.syllable__grid.syllable__grid--' + kind);
      POS.forEach(function (pos) {
        if (!d[pos]) return;
        var key = si + ':' + pos;
        var isLocked = lockedMap[si] && lockedMap[si][pos];
        var pre = prefill[key];

        var el = h('div.slot.slot--' + pos, { dataset: { key: key, pos: pos } });
        if (isLocked) {
          el.classList.add('slot--locked');
          setSlot(el, d[pos], pos);
          filled[key] = d[pos];
        } else if (pre) {
          el.classList.add('slot--filled');
          setSlot(el, pre, pos);
          filled[key] = pre;
          el.addEventListener('click', function () { onSlot(key, el); });
        } else {
          el.addEventListener('click', function () { onSlot(key, el); });
        }
        slotEls[key] = el;
        grid.appendChild(el);
      });

      cell.appendChild(grid);
      slots.appendChild(cell);
    });

    /** 두 번 넘게 막히면 완성 글자 실루엣을 켜서 발판을 준다. */
    function showGhost() {
      cells.forEach(function (c) { c.classList.add('syllable--hint'); });
    }

    // 트레이: 아이가 놓아야 하는 자모 + 디코이
    var needed = [];
    syllables.forEach(function (ch, si) {
      POS.forEach(function (pos) {
        var key = si + ':' + pos;
        if (!want[si][pos]) return;
        if (lockedMap[si] && lockedMap[si][pos]) return;
        if (prefill[key]) return;
        needed.push(want[si][pos]);
      });
    });

    var tiles = needed.map(function (j) { return { jamo: j }; })
      .concat(spec.decoys || spec.tray || []);
    tiles = AIYA.dom.shuffle(tiles, String(spec.target).length * 13 + tiles.length);

    var tileEls = [];
    tiles.forEach(function (t) {
      var el = h('button.tile', { type: 'button' }, H.glyphNode(t.jamo));
      el.addEventListener('click', function () { onTile(t, el); });
      tileEls.push({ def: t, el: el });
      tray.appendChild(el);
    });

    root.appendChild(slots);
    root.appendChild(tray);
    root.appendChild(fb);

    var attempts = 0;
    var mistakes = 0;
    var solved = false;

    function onTile(t, el) {
      if (solved) return;
      if (picked && picked.el === el) { clearPick(); return; }
      clearPick();
      picked = { jamo: t.jamo, relation: t.relation, el: el };
      el.classList.add('tile--picked');
      highlightTargets(t.jamo);
      if (AIYA.audio.speakJamo) AIYA.audio.speakJamo(t.jamo);
    }

    function clearPick() {
      if (picked) picked.el.classList.remove('tile--picked');
      picked = null;
      Object.keys(slotEls).forEach(function (k) {
        slotEls[k].classList.remove('slot--target');
      });
    }

    /** 이 자모가 들어갈 수 있는 빈 칸을 표시해 준다 (힌트가 아니라 조작 안내) */
    function highlightTargets(jamo) {
      var isV = H.isVowel(jamo);
      Object.keys(slotEls).forEach(function (k) {
        var pos = k.split(':')[1];
        var el = slotEls[k];
        if (el.classList.contains('slot--locked')) return;
        var fits = isV ? pos === 'jung' : (pos === 'cho' || pos === 'jong');
        if (fits && !filled[k]) el.classList.add('slot--target');
      });
    }

    function onSlot(key, el) {
      if (solved) return;

      // 이미 채워진 칸을 누르면 되돌린다
      if (filled[key] && !el.classList.contains('slot--locked')) {
        var back = filled[key];
        delete filled[key];
        setSlot(el, null);
        el.classList.remove('slot--filled');
        var t = tileEls.find(function (x) {
          return x.def.jamo === back && x.el.classList.contains('tile--used');
        });
        if (t) t.el.classList.remove('tile--used');
        return;
      }

      if (!picked) {
        fb.set('먼저 아래에서 글자를 골라 봐!', false);
        return;
      }

      filled[key] = picked.jamo;
      setSlot(el, picked.jamo, el.dataset.pos);
      el.classList.add('slot--filled');
      picked.el.classList.add('tile--used');
      clearPick();
      check();
    }

    function check() {
      // 모든 칸이 찼는지
      var allKeys = Object.keys(slotEls);
      var complete = allKeys.every(function (k) { return !!filled[k]; });
      if (!complete) return;

      attempts++;
      var slotsList = syllables.map(function (ch, si) {
        return {
          cho: filled[si + ':cho'] || '',
          jung: filled[si + ':jung'] || '',
          jong: filled[si + ':jong'] || ''
        };
      });
      var res = H.checkWord(slotsList, spec.target);

      if (res.ok) {
        solved = true;
        [].slice.call(slots.children).forEach(function (c) { c.classList.add('syllable--done'); });
        fb.set('완성! ' + spec.target, true);
        // 완성한 낱말만 읽어준다. 그게 이 활동의 학습 보상이고, "완성!" 같은
        // 환호는 화면으로 충분하다.
        B.afterSpeech(AIYA.audio.speak(spec.target), { min: 1000 })
          .then(function () {
            if (spec.onSolved) {
              spec.onSolved({ ok: true, attempts: attempts, firstTry: mistakes === 0 });
            }
          });
        return;
      }

      // 틀린 칸만 흔들고 되돌린다
      mistakes++;
      res.results.forEach(function (r, si) {
        r.wrong.forEach(function (pos) {
          var key = si + ':' + pos;
          var el = slotEls[key];
          if (!el || el.classList.contains('slot--locked')) return;
          var got = filled[key];
          var exp = r.expected[pos];
          AIYA.store.recordConfusion(exp, got, pos === 'jong' ? 'batchim' : null);
          el.classList.add('slot--wrong');
          setTimeout(function () { el.classList.remove('slot--wrong'); }, 450);
          delete filled[key];
          setSlot(el, null);
          el.classList.remove('slot--filled');
          var t = tileEls.find(function (x) {
            return x.def.jamo === got && x.el.classList.contains('tile--used');
          });
          if (t) t.el.classList.remove('tile--used');
        });
      });

      var built = res.results.map(function (r) { return r.built || '?'; }).join('');
      fb.set(built + ' … 소리를 내 볼까? 조금 이상해!', false);
      AIYA.audio.speak(built + '? 다시 해 볼까?');

      if (mistakes >= 2) showGhost();
      if (mistakes >= 3) revealOne();
    }

    /** 막히면 한 칸을 채워 준다 — 완전히 풀어주지는 않는다 */
    function revealOne() {
      var keys = Object.keys(slotEls).filter(function (k) {
        return !filled[k] && !slotEls[k].classList.contains('slot--locked');
      });
      if (!keys.length) return;
      var k = keys[0];
      var p = k.split(':');
      var j = want[parseInt(p[0], 10)][p[1]];
      filled[k] = j;
      setSlot(slotEls[k], j, p[1]);
      slotEls[k].classList.add('slot--filled');
      var t = tileEls.find(function (x) {
        return x.def.jamo === j && !x.el.classList.contains('tile--used');
      });
      if (t) t.el.classList.add('tile--used');
      fb.set('여기는 ' + AIYA.hangul.label(j, p[1]) + ' 이야. 나머지를 해 보자!', true);
      AIYA.audio.speak('여기는 ' + AIYA.hangul.label(j, p[1]) + ' 이야');
      check();
    }

    return { el: root, revealOne: revealOne, showGhost: showGhost };
  }

  // ---------- 자판기 활동 ----------

  AIYA.registerActivity('jamobuild', {
    mount: function (host, def, api) {
      var items = B.pickItems(def.items, def, api);
      if (!items.length) { api.skip(); return { destroy: function () {} }; }

      var run = B.runner(items);
      var body = h('div.stage');
      var skip = B.skipRow(api);
      host.appendChild(body);
      host.appendChild(skip);

      function renderItem() {
        AIYA.dom.clear(body);
        var item = run.current();
        if (!item) return;

        body.appendChild(B.prompt(
          item.prompt || (item.target + ' 을 만들어 볼까?'), api));

        var replay = B.replayButton(api, item.at);
        if (replay) body.appendChild(replay);

        var bd = board(Object.assign({}, item, {
          onSolved: function (r) {
            if (run.finish(r.firstTry, r.attempts)) api.done(run.result());
            else renderItem();
          }
        }));
        body.appendChild(bd.el);
        body.appendChild(h('div.row',
          h('button.btn.btn--ghost', {
            type: 'button', onclick: function () { bd.showGhost(); bd.revealOne(); skip.show(); }
          }, '💡 한 칸 알려줘')
        ));
      }

      renderItem();
      return { destroy: function () { AIYA.dom.clear(host); } };
    }
  });

  // ---------- 천지의 장난 ----------
  /* 완성된 낱말에서 한 자리가 잘못되어 있다. 아이가 그 칸을 눌러 고친다.
   * 조립(만들기)의 역과제이며, 오류를 스스로 알아채는 훈련은 다른 활동이 못 한다.
   * 정답 근거는 "소리 내어 읽으면 이상하다"는 청각 신호다. */

  AIYA.registerActivity('chunji', {
    mount: function (host, def, api) {
      var items = def.items || [];
      if (!items.length) { api.skip(); return { destroy: function () {} }; }

      var run = B.runner(items);
      var body = h('div.stage');
      var skip = B.skipRow(api);
      host.appendChild(body);
      host.appendChild(skip);

      function renderItem() {
        AIYA.dom.clear(body);
        var item = run.current();
        if (!item) return;

        body.appendChild(B.prompt(
          item.prompt || '천지가 글자를 망가뜨렸어! 이상한 곳을 찾아 고쳐 줘.', api));

        // 망가진 상태를 크게 보여준다
        body.appendChild(h('p.prompt__big', item.broken));
        body.appendChild(h('div.row',
          h('button.btn.btn--ghost', {
            type: 'button',
            onclick: function () { api.say(item.broken); }
          }, '🔈 망가진 소리 듣기'),
          h('button.btn.btn--ghost', {
            type: 'button',
            onclick: function () { api.say(item.target); }
          }, '🔈 바른 소리 듣기')
        ));

        var replay = B.replayButton(api, item.at);
        if (replay) body.appendChild(replay);

        // 망가진 글자에서 시작해, 잘못된 자리만 비워 둔다
        var brokenSyl = String(item.broken).split('');
        var targetSyl = String(item.target).split('');
        var prefill = {};
        var locked = [];

        targetSyl.forEach(function (ch, si) {
          var wantD = H.decompose(ch);
          var gotD = H.decompose(brokenSyl[si] || '');
          POS.forEach(function (pos) {
            if (!wantD[pos]) return;
            var key = si + ':' + pos;
            var same = gotD && gotD[pos] === wantD[pos];
            if (same && item.lockCorrect !== false) locked.push(key);
            // 다른 자리는 비워 둔다 (아이가 채운다)
          });
        });

        var bd = board({
          target: item.target,
          locked: locked,
          ghost: item.ghost === true,   // 기본은 정답을 보여주지 않는다
          decoys: item.tray || [],
          onSolved: function (r) {
            if (run.finish(r.firstTry, r.attempts)) api.done(run.result());
            else renderItem();
          }
        });

        body.appendChild(bd.el);
        body.appendChild(h('div.row',
          h('button.btn.btn--ghost', {
            type: 'button', onclick: function () { bd.showGhost(); bd.revealOne(); skip.show(); }
          }, '💡 알려줘')
        ));
      }

      renderItem();
      return { destroy: function () { AIYA.dom.clear(host); } };
    }
  });
})(window.AIYA);
