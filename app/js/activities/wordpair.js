/* 낱말 고르기 — 문장을 읽고 알맞은 낱말을 고른다.
 *
 * 시즌2 를 위한 활동이다. 시즌1 은 '글자' 를 배웠고 활동도 자모를 겨냥했다.
 * 시즌2 는 '낱말' 을 배운다 — 반대말(싸다/비싸다), 형태가 비슷한 낱말(달/닭),
 * 한 낱말의 여러 뜻(감다). 글자를 알아도 못 푼다. **문장을 읽고 뜻을 판단해야**
 * 답이 갈린다. 글자는 아는데 뜻으로 넘어가지 못하는 아이에게 맞다.
 *
 * 여기서는 소리를 내지 않는다
 * --------------------------
 * 문장을 **읽는** 것이 이 활동의 과제다. 문장을 읽어 주면 아이가 귀로 답을
 * 맞히고 글을 읽지 않는다. 그림을 선택지에 붙이지 않는 것과 같은 이유다.
 * (다른 활동은 발음을 가르치는 것이 목적이라 소리를 낸다.)
 *
 * 문항 두 가지 모양
 *   빈칸 채우기   sentence 에 ___ 가 있다 → 고른 낱말로 채워 완성된 문장을 보여준다
 *   뜻 고르기     ___ 가 없다 → 문장을 그대로 두고 뜻을 고르게 한다 (44화 '감다')
 */
(function (AIYA) {
  'use strict';

  var B = AIYA.activities._base;
  var h = AIYA.dom.h;
  var BLANK = '___';
  var REVEAL_AFTER = 3;   // 이만큼 틀리면 정답을 보여준다 (화면에 갇히지 않게)

  function mount(host, def, api) {
    var items = B.pickItems(def.items, def, api);
    if (!items.length) { api.skip(); return { destroy: function () {} }; }

    var run = B.runner(items);
    var body = h('div.stage');
    host.appendChild(body);

    function renderItem() {
      AIYA.dom.clear(body);
      var item = run.current();
      if (!item) return;

      var attempts = 0;
      var blank = item.blank || BLANK;
      var hasBlank = String(item.sentence || '').indexOf(blank) >= 0;

      // 문제 줄 — 읽는 활동이라 자동 읽어주기를 끈다
      body.appendChild(h('div.prompt',
        h('p.prompt__text', item.prompt || '문장을 읽고 알맞은 낱말을 골라요')
      ));
      if (item.hint) body.appendChild(h('p.card__note', item.hint));

      var line = h('p.wordpair__sentence');
      if (hasBlank) {
        // 빈칸을 눈에 띄게 끊어 보여준다. 아이가 어디를 채울지 알아야 한다.
        String(item.sentence).split(blank).forEach(function (t, i, arr) {
          if (t) line.appendChild(document.createTextNode(t));
          if (i < arr.length - 1) line.appendChild(h('span.wordpair__blank', '?'));
        });
      } else {
        line.appendChild(document.createTextNode(String(item.sentence || '')));
      }
      body.appendChild(h('div.wordpair__card', line));

      var replay = B.replayButton(api, item.at);
      if (replay) body.appendChild(replay);

      var fb = B.feedback();
      var opts = api.shuffle(item.options, (def.id || '').length * 17 + run.state.index);
      var grid = h('div.options.options--word');
      var buttons = [];

      function correctWord() {
        for (var i = 0; i < opts.length; i++) {
          if (opts[i].correct) return opts[i].word;
        }
        return '';
      }

      opts.forEach(function (o) {
        var btn = h('button.option.option--word', {
          type: 'button',
          onclick: function () { pick(o, btn); }
        }, h('span.option__word', o.word));
        buttons.push({ o: o, btn: btn });
        grid.appendChild(btn);
      });

      function next(first) {
        // 누른 버튼에 포커스가 남으면 다음 문항의 같은 자리 버튼이 강조돼 보인다
        if (document.activeElement && document.activeElement.blur) {
          document.activeElement.blur();
        }
        if (run.finish(first, attempts)) api.done(run.result());
        else renderItem();
      }

      function pick(o, btn) {
        attempts++;
        if (o.correct) {
          btn.classList.add('option--right');
          if (hasBlank) {
            // 완성된 문장을 보여준다 — 그게 이 활동의 학습 지점이다
            AIYA.dom.clear(line);
            line.appendChild(document.createTextNode(
              String(item.sentence).replace(blank, o.word)));
            line.classList.add('wordpair__sentence--filled');
          }
          var first = attempts === 1;
          buttons.forEach(function (x) { x.btn.disabled = true; });

          /* 설명이 있으면 **아이가 다 읽고 누르게** 한다.
           * 처음에는 글자 수로 대기 시간을 계산했는데, 설명이 길면 8초씩 멈춰
           * 있어서 "정답이 다음 문제까지 남아 있다" 처럼 보였다. 읽는 속도는
           * 아이마다 달라서 시간으로 맞출 수 없다. 설명이 없으면 바로 넘어간다. */
          if (item.after) {
            fb.set(B.praise(run.state.index), true);
            body.appendChild(h('div.wordpair__after',
              h('p.wordpair__afterText', item.after),
              h('button.btn.btn--primary', {
                type: 'button',
                onclick: function () { next(first); }
              }, '다음 →')
            ));
          } else {
            fb.set(B.praise(run.state.index), true);
            setTimeout(function () { next(first); }, 900);
          }
          return;
        }

        btn.classList.add('option--dim');
        btn.disabled = true;
        AIYA.store.recordConfusion(correctWord(), o.word, item.relation || 'wordSense');
        fb.set(o.why || B.retry(attempts), false);

        // 몇 번 틀리면 정답을 보여준다. 예전에는 '나중에 하자' 버튼을 냈지만,
        // 아이가 막혔을 때가 아니라 하기 싫을 때 눌러서 없앴다.
        if (attempts >= REVEAL_AFTER) {
          buttons.forEach(function (x) {
            if (x.o.correct) x.btn.classList.add('option--reveal');
            x.btn.disabled = !x.o.correct;
          });
          fb.set('여기 있어! 같이 읽어 볼까?', true);
        }
      }

      body.appendChild(grid);
      body.appendChild(fb);
    }

    renderItem();
    return { destroy: function () { AIYA.dom.clear(host); } };
  }

  AIYA.activities.wordpair = { mount: mount };
})(window.AIYA);
