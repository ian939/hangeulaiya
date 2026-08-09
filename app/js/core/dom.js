/* 작은 DOM 헬퍼. 프레임워크 대신 이것만 쓴다. */
(function (AIYA) {
  'use strict';

  /**
   * h('div.card', {onclick: fn}, '텍스트', childEl)
   * 태그에 .클래스 와 #아이디 를 붙일 수 있다.
   */
  function h(tag) {
    var parts = String(tag).split(/(?=[.#])/);
    var el = document.createElement(parts[0] || 'div');
    for (var i = 1; i < parts.length; i++) {
      var p = parts[i];
      if (p[0] === '.') el.classList.add(p.slice(1));
      else if (p[0] === '#') el.id = p.slice(1);
    }

    var args = [].slice.call(arguments, 1);
    if (args.length && args[0] && args[0].constructor === Object) {
      var props = args.shift();
      Object.keys(props).forEach(function (k) {
        var v = props[k];
        if (v === null || v === undefined || v === false) return;
        if (k.slice(0, 2) === 'on' && typeof v === 'function') {
          el.addEventListener(k.slice(2), v);
        } else if (k === 'style' && typeof v === 'object') {
          Object.assign(el.style, v);
        } else if (k === 'html') {
          el.innerHTML = v;
        } else if (k === 'dataset') {
          Object.assign(el.dataset, v);
        } else if (k in el && k !== 'list' && k !== 'form') {
          try { el[k] = v; } catch (e) { el.setAttribute(k, v); }
        } else {
          el.setAttribute(k, v);
        }
      });
    }

    args.forEach(function add(c) {
      if (c === null || c === undefined || c === false) return;
      if (Array.isArray(c)) { c.forEach(add); return; }
      el.appendChild(c.nodeType ? c : document.createTextNode(String(c)));
    });

    return el;
  }

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return [].slice.call((root || document).querySelectorAll(sel)); }
  function clear(el) { while (el && el.firstChild) el.removeChild(el.firstChild); }

  /** 배열을 seed 로 결정적으로 섞는다. 같은 문항이 늘 같은 순서로 나오지 않게. */
  function shuffle(arr, seed) {
    var a = arr.slice();
    var s = seed === undefined ? Math.floor(Math.random() * 1e9) : seed;
    function rnd() {
      s = (s * 1103515245 + 12345) & 0x7fffffff;
      return s / 0x7fffffff;
    }
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(rnd() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function delay(ms) {
    return new Promise(function (res) { setTimeout(res, ms); });
  }

  /** 이모지·SVG·원격 이미지·글자 카드를 한 방식으로 그린다. */
  function picture(ref, opts) {
    opts = opts || {};
    var cls = 'pic' + (opts.className ? ' ' + opts.className : '');
    if (!ref) return h('div.' + 'pic pic--empty');

    if (typeof ref === 'string') ref = { kind: 'emoji', value: ref };

    switch (ref.kind) {
      case 'emoji':
        return h('div', { className: cls + ' pic--emoji', 'aria-label': ref.label || '' }, ref.value);
      case 'text':
        return h('div', { className: cls + ' pic--text' }, ref.value);
      case 'svg':
        return h('img', {
          className: cls + ' pic--svg', src: 'assets/pics/' + ref.value,
          alt: ref.label || '', loading: 'lazy', draggable: false
        });
      case 'thumb':
        return h('img', {
          className: cls + ' pic--thumb',
          src: 'https://i.ytimg.com/vi/' + ref.value + '/' + (ref.frame || 'hqdefault') + '.jpg',
          alt: ref.label || '', loading: 'lazy', draggable: false
        });
      case 'scene':
        return scenePic(ref, cls);
      default:
        return h('div', { className: cls + ' pic--empty' }, ref.value || '');
    }
  }

  /**
   * 이야기 순서 컷의 장면 카드.
   *
   * 회차마다 삽화를 6장씩 그리면 32편에 192장이 된다. 그런데 이 시리즈의
   * 이야기 골격은 늘 같다 — 상황 → 막힘 → 소환 → 장소에서 자모 찾기 →
   * 자판기 → 발음 연습. 달라지는 건 **장소와 찾은 자모**뿐이다.
   * 그래서 장면을 데이터로 조립한다. 장소 이모지 + 찾은 자모 배지 조합이면
   * 아이가 "아, 국수에서 받침 기역 찾은 장면" 이라고 알아본다.
   */
  var SCENE_MARK = {
    situation: '🙂', problem: '❓', summon: '📣',
    merge: '➕', vending: '🎁', grandpa: '👴', place: '🔍'
  };

  function scenePic(ref, cls) {
    var kind = ref.sceneKind || 'place';
    var mark = ref.emoji || SCENE_MARK[kind] || '🔍';

    var body = [h('span.scene__mark', mark)];
    if (ref.place && !ref.emoji) {
      // 이모지가 없는 장소는 이름을 글자로 보여준다 (읽기 연습도 된다)
      body = [h('span.scene__place', ref.place)];
    } else if (ref.place) {
      body.push(h('span.scene__name', ref.place));
    }

    var el = h('div', { className: cls + ' pic--scene scene--' + kind }, body);
    if (ref.jamo) {
      el.appendChild(h('span.scene__jamo',
        AIYA.hangul && AIYA.hangul.glyphNode
          ? AIYA.hangul.glyphNode(ref.jamo, { position: ref.position })
          : ref.jamo));
    }
    return el;
  }

  /**
   * 한글 카드의 앞면. '받침 ㄱ' 은 작은 '받침' 라벨과 큰 자모로 나눠 그린다.
   * 한 줄로 두면 글자가 끼어 보이고, 무엇보다 초성 ㄱ 카드와 구별이 잘 안 된다.
   */
  function cardFace(id) {
    var m = /^받침\s*(.+)$/.exec(String(id || ''));
    if (m) {
      return [h('span.cardface__tag', '받침'), h('span.cardface__glyph', m[1])];
    }
    return [h('span.cardface__glyph', id)];
  }

  AIYA.dom = {
    h: h, $: $, $$: $$, clear: clear, shuffle: shuffle, delay: delay,
    picture: picture, cardFace: cardFace
  };
})(window.AIYA);
