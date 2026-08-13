/* 전역 네임스페이스. 가장 먼저 로드되어야 한다. */
(function (w) {
  'use strict';

  var AIYA = w.AIYA || (w.AIYA = {});

  AIYA.version = '0.1.0';

  // 각 모듈이 여기에 자기 자리를 만든다.
  AIYA.hangul = AIYA.hangul || {};
  AIYA.trace = AIYA.trace || {};
  AIYA.ui = AIYA.ui || {};
  AIYA.audio = AIYA.audio || {};
  AIYA.activities = AIYA.activities || {}; // type -> { mount(el, payload, api) }
  AIYA.episodes = AIYA.episodes || {};     // "021" -> 회차 데이터
  AIYA.data = AIYA.data || {};

  /**
   * 회차 데이터 파일이 스스로 등록한다. data/episodes/ep021.js 참고.
   *
   * 회차 키에 시즌을 넣는다. 시즌1 과 시즌2 에 같은 번호가 있어서
   * (시즌1 29화 「낮」, 시즌2 29화 「싸다/비싸다」) 번호만 쓰면 덮어써진다.
   *   시즌1 → "021"      (예전 키를 그대로 둔다. 아이 진도가 이 키로 저장돼 있다)
   *   시즌2 → "s2-029"
   */
  AIYA.episodeKey = function (episode, season) {
    var num = String(episode).padStart(3, '0');
    return (!season || season === 1) ? num : 's' + season + '-' + num;
  };

  AIYA.registerEpisode = function (ep) {
    AIYA.episodes[AIYA.episodeKey(ep.episode, ep.season)] = ep;
    return ep;
  };

  /** 활동 엔진이 스스로 등록한다. */
  AIYA.registerActivity = function (type, impl) {
    AIYA.activities[type] = impl;
    return impl;
  };

  AIYA.log = function () {
    if (!w.console) return;
    console.log.apply(console, ['[아이야]'].concat([].slice.call(arguments)));
  };

  AIYA.warn = function () {
    if (!w.console) return;
    console.warn.apply(console, ['[아이야]'].concat([].slice.call(arguments)));
  };
})(window);
