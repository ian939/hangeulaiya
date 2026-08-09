/* 이야기 순서 맞추기 — 장면 컷을 이야기 순서대로 놓는다.
 *
 * 세션의 마지막 활동이다. 글자와 무관하고 성공률이 높아서, 어려운 쓰기 활동
 * 다음에 놓으면 세션이 승리로 마감된다.
 *
 * 컷 그림은 방송 화면 캡처가 아니라 직접 그린 삽화(assets/pics/*.svg)다.
 * 실제 장면을 다시 보고 싶으면 "이 장면 다시 보기" 로 유튜브 해당 시각을 연다.
 */
(function (AIYA) {
  'use strict';

  var B = AIYA.activities._base;
  var h = AIYA.dom.h;

  AIYA.registerActivity('sequence', {
    mount: function (host, def, api) {
      var cuts = (def.cuts || []).slice();
      if (cuts.length < 3) { api.skip(); return { destroy: function () {} }; }

      var body = h('div.stage');
      var skip = B.skipRow(api);
      host.appendChild(body);
      host.appendChild(skip);

      body.appendChild(B.prompt(def.prompt || '이야기 순서대로 눌러 보세요', api));

      var fb = B.feedback();
      var next = 0;         // 다음에 눌러야 하는 순서 (0부터)
      var misses = 0;
      var attempts = 0;

      // 첫 컷을 미리 놓아 준다 (firstCutGiven)
      var giveFirst = def.firstCutGiven !== false;

      var shuffled = api.shuffle(cuts, cuts.length * 11);
      var els = [];

      var strip = h('div.seqstrip');
      shuffled.forEach(function (cut) {
        var order = h('span.seqcut__order', '?');
        var el = h('button.seqcut', { type: 'button' },
          order,
          cut.pic ? api.picture(cut.pic, { className: 'seqcut__img' }) : null,
          h('span.seqcut__cap', cut.caption || '')
        );
        el.addEventListener('click', function () { tap(cut, el, order); });
        els.push({ cut: cut, el: el, order: order });
        strip.appendChild(el);
      });

      body.appendChild(strip);
      body.appendChild(fb);

      if (giveFirst) {
        var first = els.find(function (x) { return x.cut.order === 1; });
        if (first) place(first);
      }

      /** 컷을 제자리에 놓는다. 캡션을 읽어주는 약속을 돌려준다. */
      function place(entry) {
        entry.el.classList.add('seqcut--placed');
        entry.el.disabled = true;
        entry.order.textContent = String(entry.cut.order);
        next = Math.max(next, entry.cut.order);
        fb.set(next + ' / ' + cuts.length, true);
        return entry.cut.caption ? api.say(entry.cut.caption) : Promise.resolve();
      }

      function tap(cut, el, order) {
        if (el.disabled) return;
        attempts++;

        if (cut.order === next + 1) {
          var caption = place({ cut: cut, el: el, order: order });
          if (next >= cuts.length) {
            fb.set('이야기 완성! 👏', true);
            // 마지막 컷의 캡션은 끝까지 들려준다. 마무리 환호는 화면으로만 하고
            // 소리를 겹치지 않는다 — 겹치면 캡션이 끊긴다.
            B.afterSpeech(caption, { min: 1200 })
              .then(function () {
                api.done({
                  stars: misses === 0 ? 3 : (misses <= 2 ? 2 : 1),
                  attempts: attempts,
                  correctFirstTry: cuts.length - misses
                });
              });
          }
          return;
        }

        misses++;
        el.classList.add('seqcut--picked');
        setTimeout(function () { el.classList.remove('seqcut--picked'); }, 500);
        fb.set('음… 그 다음은 아닌 것 같아. 다시 볼까?', false);
        api.say('그 다음은 어떤 일이었지?');

        if (misses >= 4) {
          var want = els.find(function (x) { return x.cut.order === next + 1; });
          if (want) {
            want.el.classList.add('seqcut--picked');
            fb.set('이게 다음이야! 눌러 볼까?', true);
          }
          skip.show();
        }
      }

      var replay = B.replayButton(api, def.at, '▶ 영상 다시 보기');
      if (replay) body.appendChild(replay);

      return { destroy: function () { AIYA.dom.clear(host); } };
    }
  });
})(window.AIYA);
