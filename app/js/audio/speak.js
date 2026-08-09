/* 음성.
 *
 * 3단계로 내려간다.
 *   1) 미리 만들어 둔 MP3 (assets/audio/tts) — 기본 경로. 기기와 무관하게 늘 같은 한국어.
 *   2) 브라우저 Web Speech — 진짜 한국어 음성이 확인될 때만.
 *   3) 무음 + 화면 표시.
 *
 * 2단계를 기본으로 쓰지 않는 이유: 안드로이드 Chrome 은 한국어 음성팩이 없어도
 * getVoices() 에 ko-KR 을 넣어 보고하고, 그 상태에서 영어 음성으로 읽어버린다.
 * 발음을 가르치는 앱에서 영어 음성이 '약'을 읽는 것은 침묵보다 나쁘다.
 */
(function (AIYA) {
  'use strict';

  var bank = {};            // sha1(text) -> 파일명. voicebank.js 가 채운다.
  var unlocked = false;
  var koVoice = null;
  var koVoiceChecked = false;
  var current = null;
  var mode = 'bank';        // 'bank' | 'speech' | 'silent'

  /**
   * 읽을 말만 남긴다. tools/make_tts.py 의 spoken_text() 와 반드시 같아야 한다.
   *
   * 이모지를 지우는 이유: TTS 가 👏 를 "박수", ⭐ 를 "별" 이라고 소리 내어 읽는다.
   * 화면에서는 이모지가 좋지만 소리로는 군더더기다.
   */
  function spokenText(text) {
    return String(text == null ? '' : text)
      // 그림문자·기호·변형 선택자·영-폭 결합자
      .replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE0F}\u{200D}\u{E0020}-\u{E007F}]/gu, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  /**
   * 문자열 → 파일 이름 키. tools/make_tts.py 의 voice_key() 와 반드시 같아야 한다.
   * FNV-1a 32비트를 UTF-8 바이트에 돌리고 8자리 16진수로 만든다.
   * 암호용이 아니라 파일명 만들기용이므로 이 정도로 충분하고, 파이썬으로 재현하기 쉽다.
   */
  function key(text) {
    var s = String(text).trim();
    var bytes = unescape(encodeURIComponent(s)); // UTF-8 바이트열
    var hash = 0x811c9dc5;
    for (var i = 0; i < bytes.length; i++) {
      hash ^= bytes.charCodeAt(i) & 0xff;
      hash = (hash + ((hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24))) >>> 0;
    }
    return ('0000000' + hash.toString(16)).slice(-8);
  }

  function registerVoicebank(map) {
    Object.assign(bank, map || {});
  }

  /** 첫 사용자 제스처에서 호출한다. iOS 는 이게 없으면 오디오를 재생하지 않는다. */
  function unlock() {
    if (unlocked) return;
    unlocked = true;
    try {
      var a = new Audio('assets/audio/sfx/silence.mp3');
      a.volume = 0;
      var p = a.play();
      if (p && p.catch) p.catch(function () { /* 무시 */ });
    } catch (e) { /* 무시 */ }

    if (window.speechSynthesis) {
      try {
        var u = new SpeechSynthesisUtterance(' ');
        u.volume = 0;
        speechSynthesis.speak(u);
      } catch (e) { /* 무시 */ }
    }
    findKoreanVoice();
  }

  function findKoreanVoice() {
    if (koVoiceChecked || !window.speechSynthesis) return;
    var voices = speechSynthesis.getVoices() || [];
    if (!voices.length) {
      // Chrome 은 비동기로 채운다
      speechSynthesis.addEventListener('voiceschanged', function once() {
        speechSynthesis.removeEventListener('voiceschanged', once);
        koVoiceChecked = false;
        findKoreanVoice();
      });
      setTimeout(function () { koVoiceChecked = true; }, 2000);
      return;
    }
    koVoiceChecked = true;
    var ko = voices.filter(function (v) { return /^ko/i.test(v.lang || ''); });
    ko.sort(function (a, b) { return (b.localService ? 1 : 0) - (a.localService ? 1 : 0); });
    koVoice = ko[0] || null;
    if (!koVoice) AIYA.warn('한국어 음성을 찾지 못했습니다. 글자만 보여줍니다.');
  }

  function stop() {
    if (current) {
      try { current.pause(); current.currentTime = 0; } catch (e) { /* 무시 */ }
      current = null;
    }
    if (window.speechSynthesis) {
      try { speechSynthesis.cancel(); } catch (e) { /* 무시 */ }
    }
  }

  /**
   * @param {string} text 아이가 들을 말
   * @param {object} opts {voice:'narrator'|'grandpa', rate, onend}
   */
  function speak(text, opts) {
    opts = opts || {};
    text = spokenText(text);
    if (!text) return Promise.resolve();   // 이모지만 있던 문구는 소리를 내지 않는다
    stop();

    var file = bank[key(text)];
    if (file) return playFile('assets/audio/tts/' + file, opts);

    findKoreanVoice();
    if (koVoice) return speakLive(text, opts);

    mode = 'silent';
    if (opts.onend) opts.onend();
    return Promise.resolve();
  }

  function playFile(src, opts) {
    mode = 'bank';
    return new Promise(function (resolve) {
      var a = new Audio(src);
      current = a;
      a.addEventListener('ended', function () {
        current = null;
        if (opts.onend) opts.onend();
        resolve();
      });
      a.addEventListener('error', function () {
        current = null;
        resolve();
      });
      var p = a.play();
      if (p && p.catch) p.catch(function () { resolve(); });
    });
  }

  function speakLive(text, opts) {
    mode = 'speech';
    return new Promise(function (resolve) {
      var u = new SpeechSynthesisUtterance(text);
      u.voice = koVoice;
      u.lang = koVoice.lang || 'ko-KR';
      u.rate = opts.rate || 0.92;
      u.pitch = opts.voice === 'grandpa' ? 0.8 : 1.0;
      u.onend = function () { if (opts.onend) opts.onend(); resolve(); };
      u.onerror = function () { resolve(); };
      try { speechSynthesis.speak(u); } catch (e) { resolve(); }
    });
  }

  /** 자모 하나를 이름으로 읽어준다. */
  function speakJamo(j, position) {
    return speak(AIYA.hangul.label(j, position));
  }

  /** 음성이 실제로 나오는 상태인지 — 화면에 "소리 없음" 칩을 띄울지 판단 */
  function available() {
    return Object.keys(bank).length > 0 || !!koVoice;
  }

  AIYA.audio.speak = speak;
  AIYA.audio.speakJamo = speakJamo;
  AIYA.audio.stop = stop;
  AIYA.audio.unlock = unlock;
  AIYA.audio.registerVoicebank = registerVoicebank;
  AIYA.audio.available = available;
  AIYA.audio.key = key;
  AIYA.audio.spokenText = spokenText;
  AIYA.audio.currentMode = function () { return mode; };
})(window.AIYA);
