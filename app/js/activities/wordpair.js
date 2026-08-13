/* 낱말 고르기 — 문장을 읽고 빈칸에 맞는 낱말을 넣는다.
 *
 * 시즌2 를 위한 활동이다. 시즌1 은 '글자' 를 배웠고 활동도 자모를 겨냥했다.
 * 시즌2 는 '낱말' 을 배운다 — 반대말(싸다/비싸다), 형태가 비슷한 낱말(달/닭),
 * 한 낱말의 여러 뜻(감다). 이건 글자를 알아도 못 푼다. **문장을 읽고 뜻을
 * 판단해야** 답이 갈린다. 글자는 아는데 뜻으로 넘어가지 못하는 아이에게 맞다.
 *
 * 선택지에 그림을 붙이지 않는다. 그림이 있으면 문장을 안 읽고 그림만 보고
 * 고를 수 있다. 뜻을 가리는 게 목적이라 문장이 유일한 단서여야 한다.
 *
 * 문항 모양
 *   { sentence: '이 옷은 너무 ___. 십만 원이야.',
 *     options: [{ word: '비싸다', correct: true },
 *               { word: '싸다', why: '싸다는 값이 낮을 때 써요.' }],
 *     after: '값이 높으면 비싸다, 낮으면 싸다예요.' }
 */
(function (AIYA) {
  'use strict';

  var B = AIYA.activities._base;
  var h = AIYA.dom.h;
  var BLANK = '___';

  function mount(host, def, api) {
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
      var blank = item.blank || BLANK;
      var spoken = String(item.sentence || '').replace(blank, '무엇');

      body.appendChild(B.prompt(item.prompt || '문장을 읽고 알맞은 낱말을 골라요', api,
        { speakText: item.say || spoken }));
      if (item.hint) body.appendChild(h('p.card__note', item.hint));

      // 빈칸을 눈에 띄게 끊어 보여준다. 아이가 어디를 채울지 알아야 한다.
      var line = h('p.wordpair__sentence');
      String(item.sentence || '').split(blank).forEach(function (t, i, arr) {
        if (t) line.appendChild(document.createTextNode(t));
        if (i < arr.length - 1) line.appendChild(h('span.wordpair__blank', '?'));
      });
      body.appendChild(h('div.wordpair__card', line));

      var replay = B.replayButton(api, item.at);
      if (replay) body.appendChild(replay);

      var fb = B.feedback();
      var opts = api.shuffle(item.options, (def.id || '').length * 17 + run.state.index);
      var grid = h('div.options.options--word');

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
        grid.appendChild(btn);
      });

      function pick(o, btn) {
        attempts++;
        if (o.correct) {
          btn.classList.add('option--right');
          // 완성된 문장을 보여주고 읽어 준다 — 그게 이 활동의 학습 지점이다
          AIYA.dom.clear(line);
          line.appendChild(document.createTextNode(
            String(item.sentence).replace(blank, o.word)));
          line.classList.add('wordpair__sentence--filled');
          fb.set(B.praise(run.state.index) + (item.after ? '  ' + item.after : ''), true);
          wrongStreak = 0;
          var first = attempts === 1;
          B.afterSpeech(api.say(item.after || String(item.sentence).replace(blank, o.word)),
            { min: 1000 }).then(function () {
            if (run.finish(first, attempts)) api.done(run.result());
            else renderItem();
          });
          return;
        }

        btn.classList.add('option--dim');
        btn.disabled = true;
        AIYA.store.recordConfusion(correctWord(), o.word, item.relation || 'wordSense');
        fb.set(o.why || B.retry(attempts), false);
        api.say(o.why || '문장을 다시 읽어 볼까?');
        wrongStreak++;
        if (wrongStreak >= 2) skip.show();
      }

      body.appendChild(grid);
      body.appendChild(fb);
    }

    renderItem();
    return { destroy: function () { AIYA.dom.clear(host); } };
  }

  AIYA.activities.wordpair = { mount: mount };
})(window.AIYA);
