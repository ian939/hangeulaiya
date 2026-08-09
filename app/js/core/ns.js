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

  /** 회차 데이터 파일이 스스로 등록한다. data/episodes/ep021.js 참고. */
  AIYA.registerEpisode = function (ep) {
    var key = String(ep.episode).padStart(3, '0');
    AIYA.episodes[key] = ep;
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
