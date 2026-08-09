/* 글자 찾기 — 격자에서 목표 자모를 모두 눌러 찾는다.
 *
 * 오답 후보는 반드시 "왜 헷갈리는지"가 있는 것으로 고른다. 그 관계(relation)는
 * 오답 기록에 함께 남아 부모 화면의 "헷갈린 짝"이 된다.
 */
(function (AIYA) {
  'use strict';

  var B = AIYA.activities._base;
  var h = AIYA.dom.h;

  AIYA.registerActivity('letterhunt', {
    mount: function (host, def, api) {
      var boards = B.pickItems(def.boards, def, api);
      if (!boards.length) { api.skip(); return { destroy: function () {} }; }

      var run = B.runner(boards);
      var body = h('div.stage');
      var skip = B.skipRow(api);
      host.appendChild(body);
      host.appendChild(skip);

      function renderBoard() {
        AIYA.dom.clear(body);
        var board = run.current();
        if (!board) return;

        var target = board.target;
        var cols = board.cols || 4;
        var attempts = 0;
        var misses = 0;

        var question = board.prompt ||
          (AIYA.hangul.label(target, board.position) + ' 을 모두 찾아 눌러 보세요');
        body.appendChild(B.prompt(question, api));

        if (board.showTarget !== false) {
          // 찾을 자모는 획 데이터로 크게 그린다 (글꼴이면 자모마다 높이가 들쭉날쭉하다)
          body.appendChild(h('div.prompt__bigjamo',
            AIYA.hangul.glyphNode(target, { position: board.position })));
        }

        /* 셀 구성. 두 가지 모드를 지원한다.
         *   낱자 모드 — 목표 자모 n개 + 오답 후보 자모
         *   글자 모드 — board.cells 를 그대로 쓴다. "받침 ㄱ 이 있는 글자를 모두 골라"처럼
         *               음절 단위로 물을 때 필요하다. */
        var cells;
        if (board.cells) {
          cells = board.cells.map(function (c) {
            return { ch: c.ch, hit: !!c.hit, relation: c.relation, say: c.ch };
          });
        } else {
          cells = [];
          for (var i = 0; i < (board.targetCount || 3); i++) {
            cells.push({ ch: target, hit: true });
          }
          (board.distractors || []).forEach(function (d) {
            var n = d.count || 1;
            for (var k = 0; k < n; k++) {
              cells.push({ ch: d.jamo, hit: false, relation: d.relation });
            }
          });
        }
        cells = api.shuffle(cells, run.state.index * 17 + cols);

        var need = cells.filter(function (c) { return c.hit; }).length;
        var found = 0;

        var fb = B.feedback();
        var grid = h('div.hunt', { style: { '--hunt-cols': String(cols) } });

        cells.forEach(function (c) {
          var btn = h('button.huntcell', { type: 'button' },
            AIYA.hangul.glyphNode(c.ch, { position: board.position }));
          btn.addEventListener('click', function () {
            if (btn.disabled) return;
            attempts++;
            if (c.hit) {
              btn.classList.add('huntcell--found');
              btn.disabled = true;
              found++;
              api.say(c.say || AIYA.hangul.label(target, board.position));
              fb.set(found + ' / ' + need, true);
              if (found >= need) finish();
            } else {
              btn.classList.add('huntcell--miss');
              setTimeout(function () { btn.classList.remove('huntcell--miss'); }, 420);
              misses++;
              api.confusion(target, c.ch, c.relation);
              fb.set(board.missHint || '이건 다른 글자야. 다시 찾아볼까?', false);
              api.say('다시 찾아볼까?');
              if (misses >= 4) {
                // 남은 정답에 표시를 해준다 — 화면에 갇히지 않게
                [].slice.call(grid.children).forEach(function (el, i) {
                  if (cells[i].hit && !el.disabled) el.classList.add('huntcell--found');
                });
                fb.set('여기 있어! 같이 눌러 보자.', true);
                skip.show();
              }
            }
          });
          grid.appendChild(btn);
        });

        body.appendChild(grid);
        body.appendChild(fb);

        function finish() {
          fb.set('다 찾았어! 👏', true);
          // 환호는 화면으로만. 소리는 자모 발음에만 썼다.
          B.afterSpeech(null, { min: 900 }).then(function () {
            if (run.finish(misses === 0, attempts)) api.done(run.result());
            else renderBoard();
          });
        }
      }

      renderBoard();
      return { destroy: function () { AIYA.dom.clear(host); } };
    }
  });
})(window.AIYA);
