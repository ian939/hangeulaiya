/* 활동 공통 부품.
 *
 * 규칙 (모든 활동이 지킨다)
 *  - "틀렸어요" 문구·X 표시·오답 효과음 없음. 오답은 선택지가 흐려지고 다시 권한다.
 *  - 정해진 횟수만큼 틀리면 정답을 보여준다. 화면에 갇히는 일이 없어야 한다.
 *  - 두 번 연속 틀리면 다음으로 넘어갈 버튼이 나온다.
 *  - 시간 압박 없음.
 */
(function (AIYA) {
  'use strict';

  var h = AIYA.dom.h;

  /* 칭찬·환호는 화면에만 쓴다. 소리로 내지 않는다.
   * "다 찾았어! 👏" 를 읽히면 TTS 가 이모지를 "박수" 라고 읽고, 무엇보다
   * 아이가 기다려야 하는 시간만 늘어난다. 소리는 발음 시범과 설명에만 쓴다. */
  var PRAISE = ['잘했어! 👏', '맞았어! 🎉', '좋아! ⭐', '멋지다! 💪'];
  var RETRY = ['다시 한 번 들어볼까?', '음… 다른 걸 눌러 볼까?', '천천히 다시 볼까?'];

  function praise(i) { return PRAISE[(i || 0) % PRAISE.length]; }
  function retry(i) { return RETRY[(i || 0) % RETRY.length]; }

  /** 질문 줄 — 텍스트 + 다시 듣기 버튼. 아이가 읽을 수 있어도 소리는 늘 제공한다. */
  function prompt(text, api, opts) {
    opts = opts || {};
    var row = h('div.prompt',
      h('p.prompt__text', text),
      h('button.prompt__speak', {
        type: 'button', 'aria-label': '다시 듣기',
        onclick: function () { api.say(opts.speakText || text); }
      }, '🔈')
    );
    if (opts.autoSpeak !== false) {
      setTimeout(function () { api.say(opts.speakText || text); }, 250);
    }
    return row;
  }

  function feedback() {
    var el = h('p.feedback', { 'aria-live': 'polite' });
    el.set = function (text, good) {
      el.textContent = text || '';
      el.classList.toggle('feedback--good', !!good);
    };
    return el;
  }

  /**
   * 예전에 있던 "이건 나중에 같이 하자" 버튼의 자리.
   *
   * 버튼은 없앴다. 아이가 활동을 건너뛰는 길을 눈에 보이게 두면, 막혔을 때가
   * 아니라 하기 싫을 때 누른다. 대신 각 활동이 **몇 번 틀리면 정답을 보여주고**
   * 넘어가게 해서 아이가 화면에 갇히지 않게 한다. 그게 원래 목적이었다.
   *
   * 호출하는 곳을 한꺼번에 고치지 않아도 되게 껍데기는 남긴다.
   */
  function skipRow() {
    var row = h('div.skiprow', { style: { display: 'none' } });
    row.show = function () { /* 더는 아무것도 하지 않는다 */ };
    return row;
  }

  /** 활동 안에서 문항 여러 개를 순서대로 돌리는 진행기. */
  function runner(items, opts) {
    opts = opts || {};
    var state = { index: 0, stars: 0, firstTry: 0, attempts: 0 };

    return {
      state: state,
      current: function () { return items[state.index]; },
      total: items.length,
      /** 한 문항 종료. passedFirstTry 면 첫 시도에 맞힌 것. */
      finish: function (passedFirstTry, attempts) {
        state.attempts += attempts || 1;
        if (passedFirstTry) state.firstTry++;
        state.index++;
        return state.index >= items.length;
      },
      /** 활동 전체 결과 — 첫 시도 정답률로 별을 준다. */
      result: function () {
        var ratio = items.length ? state.firstTry / items.length : 0;
        return {
          stars: ratio >= 0.9 ? 3 : (ratio >= 0.6 ? 2 : 1),
          attempts: state.attempts,
          correctFirstTry: state.firstTry,
          total: items.length
        };
      }
    };
  }

  /** 회차의 다시보기 버튼 — 그 장면 타임스탬프로 유튜브를 연다. */
  function replayButton(api, seconds, label) {
    if (seconds === undefined || seconds === null) return null;
    var vid = api.episode && api.episode.videoId;
    if (!vid) return null;
    return h('button.replay', {
      type: 'button',
      onclick: function () {
        window.open('https://www.youtube.com/watch?v=' + vid + '&t=' + Math.floor(seconds) + 's',
          '_blank', 'noopener');
      }
    }, label || '▶ 이 장면 다시 보기');
  }

  /**
   * 말이 끝난 뒤에 다음으로 넘어간다.
   *
   * 고정 시간(setTimeout 900ms)으로 넘기면 안 된다. 문구 길이가 제각각인데
   * "양말은 받침이 ㅇ, 약국과 약사는 받침이 ㄱ 이에요." 같은 문장은 3~4초가 걸린다.
   * 게다가 다음 문항의 질문 음성이 재생되는 순간 speak() 가 이전 음성을 끊기 때문에,
   * 아이는 칭찬과 설명을 끝까지 듣지 못한다. 설명이 곧 학습 내용인 문항도 많다.
   *
   * @param {Promise} speech AIYA.audio.speak() 가 돌려준 약속
   * @param {object} opts {min: 최소 대기, tail: 말 끝난 뒤 숨 돌릴 시간, max: 안전 상한}
   */
  function afterSpeech(speech, opts) {
    opts = opts || {};
    var minMs = opts.min === undefined ? 800 : opts.min;
    var tailMs = opts.tail === undefined ? 500 : opts.tail;
    var maxMs = opts.max === undefined ? 12000 : opts.max;

    // 말이 끝나면(또는 상한에 걸리면) 해결된다. 음성이 없는 기기에서는 바로 해결된다.
    var spoken = new Promise(function (resolve) {
      var settled = false;
      function finish() { if (!settled) { settled = true; resolve(); } }
      Promise.resolve(speech).then(finish, finish);
      setTimeout(finish, maxMs);   // ended 이벤트가 오지 않는 경우의 안전장치
    }).then(function () {
      return new Promise(function (r) { setTimeout(r, tailMs); });
    });

    var floor = new Promise(function (r) { setTimeout(r, minMs); });
    return Promise.all([spoken, floor]);
  }

  /**
   * 코스에 맞게 문항 수를 줄인다.
   * 짧은 코스는 같은 회차를 지친 날에도 돌릴 수 있게 하는 장치라서,
   * 활동을 빼는 게 아니라 문항을 줄이는 쪽이 학습 루프를 온전히 남긴다.
   */
  function pickItems(list, def, api) {
    var items = list || [];
    if (api.course === 'short' && def.shortCount) return items.slice(0, def.shortCount);
    return items;
  }

  AIYA.activities._base = {
    afterSpeech: afterSpeech,
    pickItems: pickItems,
    prompt: prompt,
    feedback: feedback,
    skipRow: skipRow,
    runner: runner,
    praise: praise,
    retry: retry,
    replayButton: replayButton
  };
})(window.AIYA);
