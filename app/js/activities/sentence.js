/* 문장 만들기 — 어절 카드를 순서대로 놓아 문장을 완성한다.
 *
 * 시즌2 에서 난이도를 올리는 핵심 활동이다.
 * 시즌1 의 '자판기' 는 자모를 모아 **한 글자**를 만들었다. 여기서는 어절을 모아
 * **한 문장**을 만든다. 낱말을 다 읽을 수 있어도 어순을 모르면 못 푼다.
 *
 * 한국어라서 되는 활동이다. 조사가 어절에 붙어 있어서
 *   '닭이'  '새벽에'  '울어요'
 * 처럼 조사만 봐도 누가 하는 일인지 알 수 있다. 그걸 아이가 눈치채는 게 목적이라,
 * 힌트도 '누가 → 언제 → 무엇을 해요' 로 준다.
 *
 * 오답 어절(decoys)에는 그 회차의 헷갈리는 낱말을 넣는다. 34화라면 '달이' 를
 * 넣어서 '닭이' 와 고르게 한다 — 문장 안에서 두 낱말을 구별하게 된다.
 *
 * 문항 모양
 *   { words: ['닭이', '새벽에', '울어요'],   // 정답 순서
 *     say: '닭이 새벽에 울어요',
 *     decoys: ['달이'],
 *     hint: '누가? 언제? 무엇을 해요?' }
 */
(function (AIYA) {
  'use strict';

  var B = AIYA.activities._base;
  var h = AIYA.dom.h;

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

      var placed = [];
      var attempts = 0;
      var misses = 0;
      var full = item.words.join(' ');

      /* 오답 어절이 섞여 있다는 것을 **먼저 알려 준다.**
       * 알려주지 않으면 아이는 늘어놓은 어절이 다 쓰이는 줄 알고 순서만 고민한다.
       * 그러면 오답을 눌렀을 때 왜 틀렸는지 이해하지 못한다. */
      var decoyCount = (item.decoys || []).length;
      var head = item.prompt || '어절을 순서대로 놓아 문장을 만들어요';
      if (decoyCount) {
        head += decoyCount === 1
          ? '  —  틀린 낱말이 하나 섞여 있어요!'
          : '  —  틀린 낱말이 ' + decoyCount + '개 섞여 있어요!';
      }
      body.appendChild(B.prompt(head, api, { speakText: head }));
      if (item.hint) body.appendChild(h('p.card__note', item.hint));

      var lineEl = h('div.sentline');
      var ghost = h('span.sentline__ghost', '여기에 문장이 만들어져요');
      body.appendChild(lineEl);

      var trayEl = h('div.senttray');
      body.appendChild(trayEl);

      var fb = B.feedback();
      body.appendChild(fb);

      var chips = item.words.map(function (w) { return { word: w, decoy: false }; })
        .concat((item.decoys || []).map(function (w) { return { word: w, decoy: true }; }));
      chips = api.shuffle(chips, (def.id || '').length * 29 + run.state.index);

      function redraw() {
        AIYA.dom.clear(lineEl);
        if (!placed.length) { lineEl.appendChild(ghost); return; }
        placed.forEach(function (w, i) {
          lineEl.appendChild(h('button.sentchip.sentchip--placed', {
            type: 'button',
            onclick: function () {
              // 마지막에 놓은 것만 되돌린다. 중간을 빼면 문장이 더 헷갈린다.
              if (i !== placed.length - 1) return;
              placed.pop();
              redraw();
              var t = trayEl.querySelector('[data-word="' + w + '"]');
              if (t) { t.disabled = false; t.classList.remove('sentchip--used'); }
            }
          }, w));
        });
      }

      chips.forEach(function (c) {
        var btn = h('button.sentchip', {
          type: 'button', dataset: { word: c.word },
          onclick: function () { tap(c, btn); }
        }, c.word);
        trayEl.appendChild(btn);
      });

      function tap(c, btn) {
        attempts++;
        var want = item.words[placed.length];

        if (c.decoy || c.word !== want) {
          misses++;
          btn.classList.add('sentchip--wrong');
          setTimeout(function () { btn.classList.remove('sentchip--wrong'); }, 420);
          AIYA.store.recordConfusion(want, c.word, c.decoy ? 'wordSense' : 'wordOrder');
          var msg = c.decoy
            ? "'" + c.word + "' 는 이 문장에 없는 낱말이에요."
            : '순서를 다시 생각해 볼까? 누가 먼저 나올까요?';
          fb.set(msg, false);
          api.say(msg);

          /* 오답을 계속 누르면 다음에 올 어절을 반짝여 알려 준다.
           * 예전에는 '나중에 하자' 버튼을 냈지만, 막혔을 때가 아니라 하기 싫을 때
           * 눌러서 없앴다. 갇히지 않게 하는 목적은 이렇게 지킨다. */
          if (misses >= 3) {
            var hintBtn = trayEl.querySelector('[data-word="' + want + '"]');
            if (hintBtn) hintBtn.classList.add('sentchip--hint');
            fb.set('반짝이는 낱말이 다음 순서예요!', true);
          }
          return;
        }

        placed.push(c.word);
        btn.disabled = true;
        btn.classList.add('sentchip--used');
        btn.classList.remove('sentchip--hint');
        redraw();

        if (placed.length < item.words.length) {
          fb.set(placed.length + ' / ' + item.words.length, true);
          return;
        }

        lineEl.classList.add('sentline--done');
        fb.set('문장 완성! 👏', true);
        wrongStreak = 0;
        var firstTry = misses === 0;
        B.afterSpeech(api.say(item.say || full), { min: 1100 }).then(function () {
          if (run.finish(firstTry, attempts)) api.done(run.result());
          else renderItem();
        });
      }

      redraw();
    }

    renderItem();
    return { destroy: function () { AIYA.dom.clear(host); } };
  }

  AIYA.activities.sentence = { mount: mount };
})(window.AIYA);
