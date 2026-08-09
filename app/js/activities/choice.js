/* 선택형 활동 — 'story_quiz'(이야기 퀴즈) 와 'sound'(소리 듣고 고르기).
 *
 * 둘 다 "여러 선택지 중 하나 고르기"라 엔진을 공유한다. 차이는 문제 제시 방식뿐이다.
 *   story_quiz — 질문 문장을 보여주고 읽어준다
 *   sound      — 소리를 들려주고, 글자/그림을 고르게 한다 (문장이 없다)
 */
(function (AIYA) {
  'use strict';

  var B = AIYA.activities._base;
  var h = AIYA.dom.h;

  function mount(host, def, api, mode) {
    var items = B.pickItems(def.items, def, api);
    if (!items.length) { api.skip(); return { destroy: function () {} }; }

    var run = B.runner(items);
    var body = h('div.stage');
    var skip = B.skipRow(api);
    host.appendChild(body);
    host.appendChild(skip);

    var wrongStreak = 0;

    function renderItem() {
      AIYA.dom.clear(body);
      var item = run.current();
      if (!item) return;

      var attempts = 0;
      var revealed = false;

      // ── 문제 ──
      if (mode === 'sound') {
        var listen = h('div.prompt',
          h('p.prompt__text', item.prompt || '잘 듣고 골라 보세요'),
          h('button.prompt__speak', {
            type: 'button', 'aria-label': '다시 듣기',
            onclick: function () { api.say(item.say, { voice: item.voice }); }
          }, '🔈')
        );
        body.appendChild(listen);
        if (item.hint) body.appendChild(h('p.card__note', item.hint));
        setTimeout(function () { api.say(item.say, { voice: item.voice }); }, 300);
      } else {
        body.appendChild(B.prompt(item.q, api));
        if (item.show) body.appendChild(h('p.prompt__big', item.show));
      }

      var replay = B.replayButton(api, item.at);
      if (replay) body.appendChild(replay);

      // ── 선택지 ──
      var fb = B.feedback();
      var opts = api.shuffle(item.options, (def.id || '').length * 31 + run.state.index);
      var isJamo = opts.every(function (o) { return !o.pic && o.label && o.label.length <= 2; });

      var grid = h('div.options' +
        (opts.length === 2 ? '.options--two' : '') +
        (isJamo ? '.options--jamo' : ''));

      opts.forEach(function (o) {
        // 낱자 선택지는 획 데이터로 그린다. 글꼴로 찍으면 ㅗ 는 위, ㅜ 는 아래로
        // 처져 보여서 같은 줄에 놓았을 때 비교가 어렵다.
        var label = null;
        if (o.label) {
          var single = AIYA.hangul.isSingleJamo(o.label);
          label = h('span.option__label' + (single ? '.option__label--jamo' : ''),
            AIYA.hangul.glyphNode(o.label));
        }
        var btn = h('button.option' + (isJamo ? '.option--jamo' : ''), {
          type: 'button',
          onclick: function () { pick(o, btn); }
        },
          o.pic ? api.picture(o.pic) : null,
          label
        );
        grid.appendChild(btn);
      });

      body.appendChild(grid);
      body.appendChild(fb);

      function pick(o, btn) {
        if (revealed) return;
        attempts++;

        if (o.correct) {
          btn.classList.add('option--right');
          // 들리는 말과 보이는 글을 맞춘다. after 는 곧 학습 설명이라 화면에도 남긴다.
          fb.set(B.praise(run.state.index) + (item.after ? '  ' + item.after : ''), true);
          wrongStreak = 0;
          var first = attempts === 1;
          // 설명(after)이 있으면 끝까지 듣고 나서 넘어간다.
          // 설명이 없으면 소리를 내지 않는다 — "맞았어요" 같은 호응은 화면으로 충분하다.
          B.afterSpeech(item.after ? api.say(item.after) : null, { min: 800 }).then(function () {
            if (run.finish(first, attempts)) api.done(run.result());
            else renderItem();
          });
          return;
        }

        // 오답 — 흐려지고 다시 권한다. "틀렸다"고 말하지 않는다.
        btn.classList.add('option--dim');
        var right = item.options.find(function (x) { return x.correct; });
        api.confusion(right && (right.label || right.value), o.label || o.value, o.relation);
        fb.set(o.why || B.retry(attempts), false);
        api.say(o.why || '다시 들어볼까?');

        if (attempts >= (def.attemptsBeforeReveal || 3)) reveal();
      }

      function reveal() {
        revealed = true;
        var idx = -1;
        [].slice.call(grid.children).forEach(function (el, i) {
          if (opts[i].correct) { el.classList.remove('option--dim'); el.classList.add('option--reveal'); idx = i; }
          else el.classList.add('option--dim');
        });
        fb.set('여기 있어! 같이 볼까?', true);
        wrongStreak++;
        if (wrongStreak >= 2) skip.show();
        // 정답 시연은 아이가 보고 따라할 시간이 필요하므로 최소 대기를 길게 준다
        B.afterSpeech(
          api.say('정답은 ' + (opts[idx] && (opts[idx].label || '이거')) + ' 이에요'),
          { min: 2200 }
        ).then(function () {
          if (run.finish(false, attempts)) api.done(run.result());
          else renderItem();
        });
      }
    }

    renderItem();
    return { destroy: function () { AIYA.dom.clear(host); } };
  }

  AIYA.registerActivity('story_quiz', {
    mount: function (host, def, api) { return mount(host, def, api, 'quiz'); }
  });

  AIYA.registerActivity('sound', {
    mount: function (host, def, api) { return mount(host, def, api, 'sound'); }
  });
})(window.AIYA);
