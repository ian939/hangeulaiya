/* 낱말과 그림 잇기 — 방금 만든 낱말을 뜻과 연결한다.
 *
 * 규칙: 여기 나오는 낱말은 그 회차까지 배운 자모로만 이루어져야 한다.
 * (그 회차 목표 낱말의 '손님 자모' 는 예외 — lint_content.py 가 검사한다.)
 */
(function (AIYA) {
  'use strict';

  var B = AIYA.activities._base;
  var h = AIYA.dom.h;

  AIYA.registerActivity('match', {
    mount: function (host, def, api) {
      var pairs = def.pairs || [];
      if (!pairs.length) { api.skip(); return { destroy: function () {} }; }

      var body = h('div.stage');
      var skip = B.skipRow(api);
      host.appendChild(body);
      host.appendChild(skip);

      body.appendChild(B.prompt(def.prompt || '낱말과 그림을 이어 보세요', api));

      var fb = B.feedback();
      var left = api.shuffle(pairs, 7);
      var right = api.shuffle(pairs, 23);

      var picked = null;   // {side, pair, el}
      var doneCount = 0;
      var attempts = 0;
      var misses = 0;

      /* 낱말 열과 그림 열을 따로 만들면 안 된다. 그림(이모지·삽화)의 높이가
       * 글자보다 커서 두 열의 행이 조금씩 어긋나 보인다.
       * 하나의 2열 격자에 번갈아 넣으면 같은 행이 항상 같은 높이로 맞는다. */
      var board = h('div.matchboard');
      for (var i = 0; i < left.length; i++) {
        board.appendChild(makeItem('word', left[i]));
        board.appendChild(makeItem('pic', right[i]));
      }

      function makeItem(side, p) {
        var el = h('button.matchitem.matchitem--' + side, { type: 'button' },
          side === 'word'
            ? h('span.matchitem__word', p.word)
            : api.picture(p.pic, { className: 'matchitem__pic' })
        );
        el.addEventListener('click', function () { tap(side, p, el); });
        return el;
      }

      body.appendChild(board);
      body.appendChild(fb);

      function tap(side, pair, el) {
        if (el.classList.contains('matchitem--done')) return;

        if (side === 'word') api.say(pair.word);

        if (!picked) {
          picked = { side: side, pair: pair, el: el };
          el.classList.add('matchitem--picked');
          return;
        }

        if (picked.el === el) {
          el.classList.remove('matchitem--picked');
          picked = null;
          return;
        }

        if (picked.side === side) {
          // 같은 쪽을 또 눌렀으면 선택만 옮긴다
          picked.el.classList.remove('matchitem--picked');
          picked = { side: side, pair: pair, el: el };
          el.classList.add('matchitem--picked');
          return;
        }

        attempts++;
        if (picked.pair === pair) {
          picked.el.classList.remove('matchitem--picked');
          picked.el.classList.add('matchitem--done');
          el.classList.add('matchitem--done');
          picked = null;
          doneCount++;
          fb.set(doneCount + ' / ' + pairs.length, true);
          if (doneCount >= pairs.length) {
            // 마지막 짝의 낱말은 읽어주고, 환호는 화면으로만 한다
            fb.set('다 맞췄어! 👏', true);
            B.afterSpeech(api.say(pair.word), { min: 900 }).then(function () {
              api.done({
                stars: misses === 0 ? 3 : (misses <= 2 ? 2 : 1),
                attempts: attempts,
                correctFirstTry: pairs.length - misses
              });
            });
          } else {
            api.say(pair.word);
          }
        } else {
          misses++;
          var a = picked.el;
          a.classList.remove('matchitem--picked');
          picked = null;
          fb.set('음… 다시 볼까?', false);
          api.say('다시 볼까?');
          if (misses >= 4) skip.show();
        }
      }

      return { destroy: function () { AIYA.dom.clear(host); } };
    }
  });
})(window.AIYA);
