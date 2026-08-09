/* 진도 저장.
 *
 * 아이패드 Safari 는 홈 화면에 추가하지 않으면 7일 미사용 시 저장소를 비운다.
 * 그래서 (1) 홈 화면 추가를 안내하고 (2) 부모용 내보내기/불러오기를 반드시 둔다.
 */
(function (AIYA) {
  'use strict';

  var KEY = 'aiya.progress.v1';
  var writeTimer = null;

  function blank() {
    return {
      version: 1,
      episodes: {},   // "021": { activities: {id: {stars, attempts, at}}, done, watchedAt, course }
      cards: {},      // "받침 ㄱ": 1
      badges: [],
      confusions: {}, // "ㄱ→ㅇ": 3   — 부모 리포트의 "헷갈린 짝"
      writings: {},   // "021:E1": dataURL (아이가 쓴 글자)
      updatedAt: null
    };
  }

  var state = load();

  function load() {
    try {
      var raw = localStorage.getItem(KEY) || sessionStorage.getItem(KEY);
      if (!raw) return blank();
      var parsed = JSON.parse(raw);
      if (!parsed || parsed.version !== 1) return blank();
      return Object.assign(blank(), parsed);
    } catch (e) {
      AIYA.warn('진도를 읽지 못했습니다. 새로 시작합니다.', e);
      return blank();
    }
  }

  function flush() {
    state.updatedAt = new Date().toISOString();
    var raw = JSON.stringify(state);
    try { localStorage.setItem(KEY, raw); } catch (e) { AIYA.warn('localStorage 저장 실패', e); }
    try { sessionStorage.setItem(KEY, raw); } catch (e) { /* 무시 */ }
  }

  function save() {
    if (writeTimer) clearTimeout(writeTimer);
    writeTimer = setTimeout(flush, 250);
  }

  function ep(key) {
    key = String(key).padStart(3, '0');
    if (!state.episodes[key]) {
      state.episodes[key] = { activities: {}, done: false, watchedAt: null, course: null };
    }
    return state.episodes[key];
  }

  /** 활동 하나의 결과를 기록한다. */
  function recordActivity(epKey, activityId, result) {
    var e = ep(epKey);
    var prev = e.activities[activityId];
    var stars = Math.max((prev && prev.stars) || 0, result.stars || 0);
    e.activities[activityId] = {
      stars: stars,
      attempts: ((prev && prev.attempts) || 0) + (result.attempts || 0),
      correctFirstTry: result.correctFirstTry,
      at: new Date().toISOString()
    };
    if (result.snapshot) state.writings[epKey + ':' + activityId] = result.snapshot;
    save();
  }

  /** 오답의 혼동 관계를 누적한다. 부모 리포트가 여기서 나온다. */
  function recordConfusion(expected, got, relation) {
    if (!expected || !got || expected === got) return;
    var k = expected + '→' + got + (relation ? '|' + relation : '');
    state.confusions[k] = (state.confusions[k] || 0) + 1;
    save();
  }

  function awardCard(cardId) {
    if (!cardId) return false;
    var isNew = !state.cards[cardId];
    state.cards[cardId] = (state.cards[cardId] || 0) + 1;
    save();
    return isNew;
  }

  function awardBadge(badgeId) {
    if (!badgeId || state.badges.indexOf(badgeId) >= 0) return false;
    state.badges.push(badgeId);
    save();
    return true;
  }

  function markWatched(epKey) {
    ep(epKey).watchedAt = new Date().toISOString();
    save();
  }

  /** 오늘 그 회차를 봤는지 — 스토리 문항을 낼 자격이 있는지 판단에 쓴다. */
  function watchedToday(epKey) {
    var at = ep(epKey).watchedAt;
    if (!at) return false;
    return new Date(at).toDateString() === new Date().toDateString();
  }

  function markDone(epKey, course) {
    var e = ep(epKey);
    e.done = true;
    e.course = course || e.course;
    save();
  }

  function episodeStars(epKey) {
    var e = ep(epKey);
    return Object.keys(e.activities).reduce(function (sum, k) {
      return sum + (e.activities[k].stars || 0);
    }, 0);
  }

  function cardCount() { return Object.keys(state.cards).length; }

  /** 부모용 내보내기 — 파일로 저장한다. */
  function exportFile() {
    var stamp = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    var blob = new Blob([JSON.stringify(state, null, 1)], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'aiya-progress-' + stamp + '.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }

  /** 부모용 불러오기 */
  function importJSON(text) {
    var parsed = JSON.parse(text);
    if (!parsed || parsed.version !== 1) throw new Error('진도 파일 형식이 아닙니다.');
    state = Object.assign(blank(), parsed);
    flush();
    return state;
  }

  function reset() {
    state = blank();
    flush();
  }

  AIYA.store = {
    get state() { return state; },
    ep: ep,
    recordActivity: recordActivity,
    recordConfusion: recordConfusion,
    awardCard: awardCard,
    awardBadge: awardBadge,
    markWatched: markWatched,
    watchedToday: watchedToday,
    markDone: markDone,
    episodeStars: episodeStars,
    cardCount: cardCount,
    exportFile: exportFile,
    importJSON: importJSON,
    reset: reset,
    save: save,
    flush: flush
  };

  window.addEventListener('pagehide', flush);
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') flush();
  });
})(window.AIYA);
