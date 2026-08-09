/* 한글 쓰기 — trace/tracer.js 를 문항 순서대로 돌린다.
 *
 * 이 앱의 주력 활동이다. 읽기는 되는데 쓰기가 약한 아이의 병목은
 * (1) 같은 자모가 초성일 때와 받침일 때 모양·크기가 다르다는 것,
 * (2) 받침이 붙으면 위 두 자모가 눌려 글자 균형이 무너지는 것이다.
 * 그래서 문항 순서를 자모 → 음절 → 낱말로 올린다.
 */
(function (AIYA) {
  'use strict';

  var B = AIYA.activities._base;
  var h = AIYA.dom.h;

  AIYA.registerActivity('writing', {
    mount: function (host, def, api) {
      var items = B.pickItems(def.items, def, api);
      if (!items.length) { api.skip(); return { destroy: function () {} }; }

      var body = h('div.stage');
      var skip = B.skipRow(api);
      host.appendChild(body);
      host.appendChild(skip);

      var index = 0;
      var stars = [];
      var attempts = 0;
      var lastSnapshot = null;
      var tracer = null;

      function renderItem() {
        if (tracer) { tracer.destroy(); tracer = null; }
        AIYA.dom.clear(body);

        var item = items[index];
        if (!item) return;

        var kind = item.kind ||
          (item.target.length > 1 ? 'word'
            : (AIYA.hangul.isSyllable(item.target) ? 'syllable' : 'jamo'));

        var title = item.prompt ||
          (kind === 'jamo'
            ? AIYA.hangul.label(item.target, item.position) + ' 을 따라 써 보세요'
            : item.target + ' 을 따라 써 보세요');

        body.appendChild(B.prompt(title, api, { speakText: item.say || title }));

        if (item.note) body.appendChild(h('p.card__note', item.note));

        body.appendChild(h('p.card__note',
          '주황색 점에서 시작해서 화살표 방향으로 그어요. 한 획씩 나와요.'));

        var holder = h('div');
        body.appendChild(holder);

        tracer = AIYA.trace.create(holder, {
          target: item.target,
          kind: kind,
          params: Object.assign({
            toleranceEm: def.toleranceEm || 0.22,
            passScore: def.passScore || 0.55,
            attemptsBeforeReveal: 3,
            // 획순은 채점하되(한 획씩만 받는 구조), 방향은 원 모양 획에서만 끈다.
            checkDirection: def.checkDirection !== false
          }, item.params || {}),
          onStroke: function (i, res) {
            if (!res.ok) attempts++;
          },
          onDone: function (r) {
            stars.push(r.stars);
            attempts += r.attempts;
            if (r.snapshot) lastSnapshot = r.snapshot;
            index++;
            // 따라쓰기 위젯의 '완성!' 칭찬을 끝까지 들려준 뒤에 다음 글자로 넘어간다
            B.afterSpeech(r.speech, { min: 1100 }).then(function () {
              if (index >= items.length) finish();
              else renderItem();
            });
          }
        });

        body.appendChild(h('div.row',
          h('span.card__note', (index + 1) + ' / ' + items.length),
          h('button.btn.btn--ghost', {
            type: 'button',
            onclick: function () {
              // 이 문항은 건너뛰고 다음으로 — 쓰기에서 좌절하지 않게
              stars.push(0);
              index++;
              if (index >= items.length) finish();
              else renderItem();
            }
          }, '다음 글자 →')
        ));
      }

      function finish() {
        if (tracer) { tracer.destroy(); tracer = null; }
        var sum = stars.reduce(function (a, b) { return a + b; }, 0);
        var avg = stars.length ? sum / stars.length : 0;
        // 마무리 환호는 화면으로만 (tracer 가 이미 코치 문구를 보여준다)
        B.afterSpeech(null, { min: 700 }).then(function () {
          api.done({
            stars: Math.max(1, Math.round(avg)),
            attempts: attempts,
            correctFirstTry: stars.filter(function (s) { return s >= 3; }).length,
            snapshot: lastSnapshot
          });
        });
      }

      renderItem();
      return {
        destroy: function () {
          if (tracer) tracer.destroy();
          AIYA.dom.clear(host);
        }
      };
    }
  });
})(window.AIYA);
