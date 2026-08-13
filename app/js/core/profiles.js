/* 아이별 진도 분리.
 *
 * 왜 필요한가
 * -----------
 * 진도는 기기의 브라우저 저장소에 담긴다. 프로필이 없으면 한 아이패드에서
 * 두 아이가 놀 때 같은 진도·같은 카드를 쓰게 된다. 형제나 친구가 번갈아
 * 하면 서로의 카드가 섞이고, 부모 리포트의 '헷갈린 짝' 도 뒤섞여 쓸모가 없어진다.
 *
 * 그래서 아이마다 저장 칸을 따로 둔다.
 *   aiya.profiles.v1              누가 있는지 + 지금 누가 노는지
 *   aiya.progress.v1:<id>         그 아이의 진도
 *
 * 예전 진도(aiya.progress.v1, 프로필 없던 시절)는 첫 아이의 것으로 옮긴다.
 * 이미 모은 카드를 잃지 않게 하는 것이 이 파일에서 가장 중요한 일이다.
 */
(function (AIYA) {
  'use strict';

  var REG_KEY = 'aiya.profiles.v1';
  var PROGRESS_PREFIX = 'aiya.progress.v1';
  var LEGACY_KEY = 'aiya.progress.v1';       // 프로필 없던 시절의 열쇠

  var AVATARS = ['🦊', '🐰', '🐻', '🐼', '🦁', '🐯', '🐨', '🐸', '🐧', '🦉'];

  var reg = null;

  function blankReg() {
    return { version: 1, activeId: null, list: [] };
  }

  function readReg() {
    try {
      var raw = localStorage.getItem(REG_KEY);
      if (!raw) return null;
      var p = JSON.parse(raw);
      return (p && p.version === 1 && Array.isArray(p.list)) ? p : null;
    } catch (e) {
      return null;
    }
  }

  function writeReg() {
    try { localStorage.setItem(REG_KEY, JSON.stringify(reg)); }
    catch (e) { AIYA.warn('프로필 저장 실패', e); }
  }

  function newId() {
    // 시각 + 난수. 기기끼리 부딪힐 일이 없고 사람이 읽을 필요도 없다.
    return 'p' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  }

  function progressKey(id) {
    return PROGRESS_PREFIX + ':' + id;
  }

  /** 예전 진도를 첫 아이의 것으로 옮긴다. 카드를 잃지 않게 하는 일이다. */
  function migrateLegacy() {
    var legacy = null;
    try { legacy = localStorage.getItem(LEGACY_KEY); } catch (e) { /* 무시 */ }
    if (!legacy) return null;

    var id = newId();
    try {
      localStorage.setItem(progressKey(id), legacy);
      // 예전 열쇠는 남겨 둔다. 지우면 되돌릴 방법이 없어진다.
    } catch (e) {
      AIYA.warn('예전 진도를 옮기지 못했습니다', e);
      return null;
    }
    return { id: id, name: '첫 번째 친구', avatar: AVATARS[0], createdAt: nowISO() };
  }

  function nowISO() {
    return new Date().toISOString();
  }

  function init() {
    reg = readReg();
    if (reg && reg.list.length) {
      // 지워진 아이를 가리키고 있으면 첫 아이로 되돌린다
      if (!byId(reg.activeId)) reg.activeId = reg.list[0].id;
      return;
    }

    reg = blankReg();
    var moved = migrateLegacy();
    if (moved) {
      reg.list.push(moved);
      reg.activeId = moved.id;
    }
    writeReg();
  }

  function byId(id) {
    for (var i = 0; i < reg.list.length; i++) {
      if (reg.list[i].id === id) return reg.list[i];
    }
    return null;
  }

  function list() {
    return reg.list.slice();
  }

  function active() {
    return byId(reg.activeId);
  }

  /** 아이가 아직 없으면 진도를 저장할 곳도 없다. 셸이 이걸 보고 물어본다. */
  function needsSetup() {
    return !reg.list.length || !reg.activeId;
  }

  function usedAvatars() {
    return reg.list.map(function (p) { return p.avatar; });
  }

  /** 아직 안 쓴 캐릭터. 아이가 고를 때 겹치지 않게 한다. */
  function freeAvatars() {
    var used = usedAvatars();
    var free = AVATARS.filter(function (a) { return used.indexOf(a) < 0; });
    return free.length ? free : AVATARS.slice();
  }

  function add(name, avatar) {
    name = String(name || '').trim().slice(0, 12) || '친구';
    var p = {
      id: newId(),
      name: name,
      avatar: avatar || freeAvatars()[0],
      createdAt: nowISO()
    };
    reg.list.push(p);
    reg.activeId = p.id;
    writeReg();
    return p;
  }

  function rename(id, name) {
    var p = byId(id);
    if (!p) return false;
    p.name = String(name || '').trim().slice(0, 12) || p.name;
    writeReg();
    return true;
  }

  function remove(id) {
    var p = byId(id);
    if (!p) return false;
    reg.list = reg.list.filter(function (x) { return x.id !== id; });
    try { localStorage.removeItem(progressKey(id)); } catch (e) { /* 무시 */ }
    if (reg.activeId === id) reg.activeId = reg.list.length ? reg.list[0].id : null;
    writeReg();
    return true;
  }

  function switchTo(id) {
    if (!byId(id)) return false;
    reg.activeId = id;
    writeReg();
    return true;
  }

  init();

  AIYA.profiles = {
    AVATARS: AVATARS,
    list: list,
    active: active,
    activeId: function () { return reg.activeId; },
    needsSetup: needsSetup,
    freeAvatars: freeAvatars,
    add: add,
    rename: rename,
    remove: remove,
    switchTo: switchTo,
    progressKey: progressKey,
    /** 지금 아이의 진도 열쇠. 아이가 없으면 임시 칸을 쓴다. */
    currentKey: function () {
      return progressKey(reg.activeId || 'guest');
    }
  };
})(window.AIYA);
