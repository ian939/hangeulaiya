/* 진도 저장.
 *
 * 아이패드 Safari 는 홈 화면에 추가하지 않으면 7일 미사용 시 저장소를 비운다.
 * 그래서 (1) 홈 화면 추가를 안내하고 (2) 부모용 내보내기/불러오기를 반드시 둔다.
 */
(function (AIYA) {
  'use strict';

  /* 저장 열쇠는 **지금 노는 아이마다 다르다.** 한 아이패드에서 두 아이가
   * 놀 때 진도가 섞이지 않게 프로필별로 칸을 나눴다.
   * app/js/core/profiles.js 가 열쇠를 정해 준다. */
  function KEYOF() {
    return AIYA.profiles.currentKey();
  }

  var writeTimer = null;

  /* 부모가 정하는 설정.
   * openInApp — 영상을 유튜브 앱에서 열지. 프리미엄 계정으로 로그인된 앱에서
   *   열면 광고가 나오지 않는다. 사파리 안 임베드는 제3자 쿠키가 막혀 있어
   *   로그인·프리미엄이 인식되지 않는 경우가 많다. */
  var DEFAULT_SETTINGS = { openInApp: false };

  function blank() {
    return {
      version: 1,
      settings: Object.assign({}, DEFAULT_SETTINGS),
      episodes: {},   // "021": { activities: {id: {stars, attempts, at}}, done, watchedAt, course }
      cards: {},      // "받침 ㄱ": 1
      badges: [],
      confusions: {}, // "ㄱ→ㅇ": 3   — 부모 리포트의 "헷갈린 짝"
      writings: {},   // "021:E1": dataURL (아이가 쓴 글자)
      updatedAt: null
    };
  }

  var state = load();

  function readRaw(store) {
    try {
      var raw = store.getItem(KEYOF());
      if (!raw) return null;
      var parsed = JSON.parse(raw);
      return (parsed && parsed.version === 1) ? parsed : null;
    } catch (e) {
      return null;
    }
  }

  function normalize(parsed) {
    var out = Object.assign(blank(), parsed);
    // 예전에 저장된 진도에는 settings 가 없다. 기본값을 채워 준다.
    out.settings = Object.assign({}, DEFAULT_SETTINGS, parsed.settings || {});
    return out;
  }

  function load() {
    try {
      /* 둘 중 **더 새것** 을 고른다.
       * 예전에는 localStorage 를 먼저 보고 있었는데, 다른 창이 오래된 상태로
       * 덮어써 두면 그 오래된 것을 읽어 버렸다. */
      var a = readRaw(localStorage);
      var b = readRaw(sessionStorage);
      var pick = a;
      if (b && (!a || String(b.updatedAt || '') > String(a.updatedAt || ''))) pick = b;
      if (!pick) return blank();
      return normalize(pick);
    } catch (e) {
      AIYA.warn('진도를 읽지 못했습니다. 새로 시작합니다.', e);
      return blank();
    }
  }

  /* ── 합치기 ────────────────────────────────────────────────
   * 창(탭)이 둘 이상 열려 있으면 각 창이 메모리에 진도를 따로 들고 있다.
   * 그래서 통째로 덮어쓰면 **먼저 열어 둔 창이 나중에 저장하는 순간
   * 새 진도가 사라진다.** 아이패드에서 앱을 전환하기만 해도
   * visibilitychange 로 저장이 돌기 때문에 실제로 자주 일어난다.
   * (카드가 22장에서 16장으로 줄어든 것이 이 때문이었다.)
   *
   * 그래서 저장할 때마다 저장소에 있는 것과 합친다. 진도는 되돌아가지 않아야
   * 하므로 모든 값을 '더 많은 쪽' 으로 맞춘다.
   */
  function mergeCounts(mine, theirs) {
    var out = Object.assign({}, theirs || {});
    Object.keys(mine || {}).forEach(function (k) {
      out[k] = Math.max(out[k] || 0, mine[k] || 0);
    });
    return out;
  }

  function laterOf(a, b) {
    if (!a) return b || null;
    if (!b) return a;
    return String(a) > String(b) ? a : b;
  }

  function mergeActivity(mine, theirs) {
    if (!theirs) return mine;
    if (!mine) return theirs;
    return {
      stars: Math.max(mine.stars || 0, theirs.stars || 0),
      // 합치기를 여러 번 해도 값이 부풀지 않게 max 를 쓴다 (합이 아니다)
      attempts: Math.max(mine.attempts || 0, theirs.attempts || 0),
      correctFirstTry: Math.max(mine.correctFirstTry || 0, theirs.correctFirstTry || 0),
      at: laterOf(mine.at, theirs.at)
    };
  }

  function mergeEpisodes(mine, theirs) {
    var out = {};
    Object.keys(theirs || {}).concat(Object.keys(mine || {})).forEach(function (k) {
      if (out[k]) return;
      var m = (mine || {})[k];
      var t = (theirs || {})[k];
      if (!m || !t) { out[k] = m || t; return; }
      var acts = {};
      Object.keys(t.activities || {}).concat(Object.keys(m.activities || {}))
        .forEach(function (id) {
          if (acts[id]) return;
          acts[id] = mergeActivity((m.activities || {})[id], (t.activities || {})[id]);
        });
      out[k] = {
        activities: acts,
        done: !!(m.done || t.done),
        watchedAt: laterOf(m.watchedAt, t.watchedAt),
        course: m.course || t.course
      };
    });
    return out;
  }

  /** 저장소에 있는 진도와 합친 결과. 진도는 절대 줄지 않는다. */
  function mergeWith(stored) {
    if (!stored) return state;
    return {
      version: 1,
      // 설정은 이 창에서 부모가 방금 바꾼 것일 수 있으니 내 것을 쓴다
      settings: Object.assign({}, stored.settings || {}, state.settings || {}),
      episodes: mergeEpisodes(state.episodes, stored.episodes),
      cards: mergeCounts(state.cards, stored.cards),
      badges: (stored.badges || []).concat(
        (state.badges || []).filter(function (x) {
          return (stored.badges || []).indexOf(x) < 0;
        })),
      confusions: mergeCounts(state.confusions, stored.confusions),
      writings: Object.assign({}, stored.writings || {}, state.writings || {}),
      updatedAt: new Date().toISOString()
    };
  }

  /**
   * @param {boolean} replace true 면 합치지 않고 통째로 바꾼다
   *   (부모의 '불러오기'·'초기화' 는 일부러 되돌리는 동작이다)
   */
  function flush(replace) {
    if (!replace) {
      var stored = readRaw(localStorage);
      // 내가 마지막으로 쓴 것과 다르면 다른 창이 손댄 것이다 → 합친다
      if (stored) state = normalize(mergeWith(stored));
    }
    state.updatedAt = new Date().toISOString();
    var raw = JSON.stringify(state);
    try { localStorage.setItem(KEYOF(), raw); } catch (e) { AIYA.warn('localStorage 저장 실패', e); }
    try { sessionStorage.setItem(KEYOF(), raw); } catch (e) { /* 무시 */ }
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
    state = normalize(parsed);
    flush(true);        // 일부러 되돌리는 동작이므로 합치지 않는다
    return state;
  }

  function reset() {
    state = blank();
    flush(true);        // 초기화는 합치면 안 된다
  }

  function setting(key, value) {
    if (value === undefined) return state.settings[key];
    state.settings[key] = value;
    save();
    return value;
  }

  /** 노는 아이가 바뀌었을 때 그 아이의 진도를 새로 읽는다.
   * 먼저 지금 아이의 진도를 확실히 저장한 다음 바꿔야 한다. */
  function switchProfile(id) {
    flush();                       // 지금 아이 진도를 마무리 저장
    if (writeTimer) { clearTimeout(writeTimer); writeTimer = null; }
    if (!AIYA.profiles.switchTo(id)) return false;
    state = load();                // 열쇠가 바뀌었으니 그 아이 것을 읽는다
    return true;
  }

  /** 아이를 새로 만들고 그 아이로 넘어간다. */
  function addProfile(name, avatar) {
    flush();
    if (writeTimer) { clearTimeout(writeTimer); writeTimer = null; }
    var p = AIYA.profiles.add(name, avatar);
    state = load();                // 새 아이는 빈 진도로 시작한다
    flush(true);
    return p;
  }

  function removeProfile(id) {
    var wasActive = AIYA.profiles.activeId() === id;
    if (!AIYA.profiles.remove(id)) return false;
    if (wasActive) state = load();
    return true;
  }

  AIYA.store = {
    get state() { return state; },
    setting: setting,
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
    flush: flush,
    switchProfile: switchProfile,
    addProfile: addProfile,
    removeProfile: removeProfile
  };

  window.addEventListener('pagehide', function () { flush(); });
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') flush();
  });

  /* 다른 창이 진도를 저장하면 그걸 즉시 받아들인다.
   * 이게 없으면 이 창은 계속 오래된 진도를 들고 있다가, 다음에 저장할 때
   * 상대 창의 진도를 되돌려 버린다(합치기가 있으니 잃지는 않지만,
   * 화면에 보이는 카드 수가 창마다 달라 아이가 혼란스러워한다). */
  window.addEventListener('storage', function (e) {
    if (e.key !== KEYOF() || !e.newValue) return;
    var incoming = readRaw(localStorage);
    if (!incoming) return;
    state = normalize(mergeWith(incoming));
    if (AIYA.onProgressChanged) AIYA.onProgressChanged();
  });
})(window.AIYA);
