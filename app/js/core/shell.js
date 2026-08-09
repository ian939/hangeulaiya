/* 앱 셸 — 홈, 회차, 활동 진행, 보상 화면을 갈아 끼운다. */
(function (AIYA) {
  'use strict';

  var h = AIYA.dom.h, clear = AIYA.dom.clear;

  var root = null;
  var session = null;   // { epKey, ep, course, queue, index, results }
  var mounted = null;   // 현재 활동 인스턴스

  function boot() {
    root = document.getElementById('app');
    if (!root) { AIYA.warn('#app 을 찾을 수 없습니다.'); return; }
    window.addEventListener('hashchange', route);
    route();
  }

  // ---------- 라우팅 ----------

  function parseHash() {
    var raw = (location.hash || '').replace(/^#\/?/, '');
    var parts = raw.split('/').filter(Boolean);
    if (!parts.length) return { screen: 'home' };
    if (parts[0] === 'ep') return { screen: 'episode', epKey: parts[1], sub: parts[2] };
    if (parts[0] === 'parent') return { screen: 'parent' };
    if (parts[0] === 'album') return { screen: 'album' };
    if (parts[0] === 'selftest') return { screen: 'selftest' };
    return { screen: 'home' };
  }

  function go(hash) {
    if (location.hash === hash) route();
    else location.hash = hash;
  }

  function route() {
    unmountActivity();
    var r = parseHash();
    switch (r.screen) {
      case 'episode': return screenEpisode(r.epKey, r.sub);
      case 'parent': return screenParent();
      case 'album': return screenAlbum();
      case 'selftest': return screenSelfTest();
      default: return screenHome();
    }
  }

  function unmountActivity() {
    if (mounted && mounted.destroy) {
      try { mounted.destroy(); } catch (e) { /* 무시 */ }
    }
    mounted = null;
    if (AIYA.audio && AIYA.audio.stop) AIYA.audio.stop();
  }

  function render(el) {
    clear(root);
    root.appendChild(el);
    root.scrollTop = 0;
  }

  // ---------- 홈 ----------

  function screenHome() {
    session = null;
    var keys = Object.keys(AIYA.episodes).sort();

    var cards = keys.map(function (k) {
      var ep = AIYA.episodes[k];
      var saved = AIYA.store.ep(k);
      var stars = AIYA.store.episodeStars(k);
      return h('button.epcard', {
        type: 'button',
        onclick: function () { AIYA.audio.unlock(); go('#/ep/' + k); }
      },
        h('span.epcard__no', ep.episode + '화'),
        h('span.epcard__word', ep.title),
        h('span.epcard__goal', ep.focus || ep.objective || ''),
        h('span.epcard__stars', saved.done ? '⭐ ' + stars : (stars ? '⭐ ' + stars : '시작하기'))
      );
    });

    render(h('div.screen.screen--home',
      h('header.home__head',
        h('h1.home__title', '아이야 한글놀이'),
        h('p.home__sub', '한글용사 아이야를 보고, 놀면서 받침을 익혀요')
      ),
      h('div.epgrid', cards.length ? cards : h('p.empty', '회차 데이터가 없습니다.')),
      h('div.home__foot',
        h('button.btn.btn--ghost', {
          type: 'button', onclick: function () { go('#/album'); }
        }, '🗂 한글 카드 (' + AIYA.store.cardCount() + '장)'),
        h('button.btn.btn--ghost', {
          type: 'button', onclick: function () { go('#/parent'); }
        }, '👪 부모님')
      )
    ));
  }

  // ---------- 회차 ----------

  function screenEpisode(epKey, sub) {
    epKey = String(epKey || '').padStart(3, '0');
    var ep = AIYA.episodes[epKey];
    if (!ep) return screenHome();

    if (sub === 'play') return screenActivity();
    if (sub === 'reward') return screenReward();

    var watched = AIYA.store.watchedToday(epKey);

    render(h('div.screen.screen--episode',
      topbar(ep.episode + '화 ' + ep.title, '#/'),

      h('section.card.card--video',
        h('h2.card__title', '① 먼저 영상을 봐요'),
        h('p.card__note', ep.focus || ''),
        youtubeEmbed(ep.videoId),
        h('div.row',
          h('button.btn.btn--primary', {
            type: 'button',
            onclick: function () {
              AIYA.store.markWatched(epKey);
              screenEpisode(epKey);
            }
          }, watched ? '✅ 오늘 봤어요' : '다 봤어요!')
        )
      ),

      h('section.card',
        h('h2.card__title', '② 놀이를 골라요'),
        !watched ? h('p.card__warn', '영상을 먼저 보면 이야기 문제를 풀 수 있어요.') : null,
        h('div.row.row--wrap',
          h('button.btn.btn--primary.btn--big', {
            type: 'button',
            onclick: function () { start(epKey, 'full'); }
          }, '전체 코스 · 12~15분'),
          h('button.btn.btn--ghost.btn--big', {
            type: 'button',
            onclick: function () { start(epKey, 'short'); }
          }, '짧은 코스 · 6~8분')
        )
      )
    ));
  }

  function youtubeEmbed(videoId, startAt) {
    if (!videoId) return h('p.card__warn', '영상 주소가 없습니다.');
    var src = 'https://www.youtube-nocookie.com/embed/' + videoId +
      '?rel=0&playsinline=1&hl=ko' + (startAt ? '&start=' + startAt : '');
    return h('div.embed', h('iframe', {
      src: src, title: '한글용사 아이야', loading: 'lazy',
      allow: 'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
      allowfullscreen: true, frameborder: '0'
    }));
  }

  function topbar(title, backHash) {
    return h('header.topbar',
      h('button.topbar__back', {
        type: 'button', 'aria-label': '뒤로',
        onclick: function () { go(backHash || '#/'); }
      }, '←'),
      h('h1.topbar__title', title),
      h('span.topbar__right',
        AIYA.audio.available() ? '' : h('span.chip.chip--mute', '🔈 소리 없음')
      )
    );
  }

  // ---------- 세션 ----------

  function start(epKey, course) {
    AIYA.audio.unlock();
    var ep = AIYA.episodes[epKey];
    var queue = (ep.activities || []).filter(function (a) {
      var courses = a.courses || ['full'];
      return courses.indexOf(course) >= 0;
    });
    if (!queue.length) {
      AIYA.warn('이 코스에 활동이 없습니다.', epKey, course);
      return;
    }
    session = { epKey: epKey, ep: ep, course: course, queue: queue, index: 0, results: [] };
    go('#/ep/' + epKey + '/play');
  }

  function screenActivity() {
    if (!session) return screenHome();
    var def = session.queue[session.index];
    if (!def) return screenReward();

    var impl = AIYA.activities[def.type];
    var stage = h('div.stage');

    var view = h('div.screen.screen--play',
      topbar(session.ep.episode + '화 ' + session.ep.title, '#/ep/' + session.epKey),
      progressBar(),
      h('section.card.card--stage',
        h('h2.card__title', def.title || labelForType(def.type)),
        stage
      )
    );
    render(view);

    if (!impl) {
      stage.appendChild(h('p.card__warn', '아직 만들지 않은 활동입니다: ' + def.type));
      stage.appendChild(h('button.btn.btn--primary', {
        type: 'button', onclick: function () { next({ stars: 0, skipped: true }); }
      }, '다음'));
      return;
    }

    try {
      mounted = impl.mount(stage, def, makeApi(def));
    } catch (err) {
      AIYA.warn('활동 실행 오류', def.type, err);
      stage.appendChild(h('p.card__warn', '문제가 생겼어요. 다음으로 넘어가요.'));
      stage.appendChild(h('button.btn.btn--primary', {
        type: 'button', onclick: function () { next({ stars: 0, skipped: true }); }
      }, '다음'));
    }
  }

  function labelForType(type) {
    return ({
      story_quiz: '이야기 퀴즈',
      sound: '소리 듣고 고르기',
      letterhunt: '글자 찾기',
      jamobuild: '뭐든지 자판기',
      chunji: '천지의 장난',
      match: '낱말과 그림',
      writing: '한글 쓰기',
      sequence: '이야기 순서'
    })[type] || type;
  }

  function progressBar() {
    var total = session.queue.length;
    var dots = session.queue.map(function (_, i) {
      var cls = 'dot' + (i < session.index ? ' dot--done' : (i === session.index ? ' dot--now' : ''));
      return h('span.' + cls.replace(/ /g, '.'));
    });
    return h('div.progress',
      h('div.progress__dots', dots),
      h('span.progress__text', (session.index + 1) + ' / ' + total)
    );
  }

  /** 활동에게 넘겨주는 도구 모음. */
  function makeApi(def) {
    return {
      episode: session.ep,
      epKey: session.epKey,
      course: session.course,
      def: def,
      h: h,
      picture: AIYA.dom.picture,
      shuffle: AIYA.dom.shuffle,
      say: function (text, opts) { return AIYA.audio.speak(text, opts); },
      sayJamo: function (j, pos) { return AIYA.audio.speakJamo(j, pos); },
      confusion: function (expected, got, relation) {
        AIYA.store.recordConfusion(expected, got, relation);
      },
      done: function (result) { next(result || {}); },
      skip: function () { next({ stars: 0, skipped: true }); }
    };
  }

  function next(result) {
    var def = session.queue[session.index];
    AIYA.store.recordActivity(session.epKey, def.id || def.type + session.index, {
      stars: result.stars || 0,
      attempts: result.attempts || 0,
      correctFirstTry: result.correctFirstTry,
      snapshot: result.snapshot
    });
    session.results.push(Object.assign({ id: def.id, type: def.type }, result));
    session.index++;
    unmountActivity();
    if (session.index >= session.queue.length) go('#/ep/' + session.epKey + '/reward');
    else screenActivity();
  }

  // ---------- 보상 ----------

  function screenReward() {
    if (!session) return screenHome();
    var ep = session.ep;
    var stars = session.results.reduce(function (s, r) { return s + (r.stars || 0); }, 0);

    AIYA.store.markDone(session.epKey, session.course);

    var newCards = [];
    (ep.rewards && ep.rewards.cards || []).forEach(function (c) {
      if (AIYA.store.awardCard(c)) newCards.push(c);
    });
    (ep.rewards && ep.rewards.badges || []).forEach(function (b) {
      AIYA.store.awardBadge(b.id || b);
    });

    var epKey = session.epKey;
    render(h('div.screen.screen--reward',
      h('div.reward',
        h('h1.reward__title', '잘했어요! 👏'),
        h('p.reward__stars', '⭐ ' + stars + '개'),
        newCards.length ? h('div.reward__cards',
          h('p.reward__label', '새 한글 카드'),
          h('div.row.row--wrap', newCards.map(function (c) {
            return h('span.hangulcard', AIYA.dom.cardFace(c));
          }))
        ) : null,
        h('p.reward__note', ep.episode + '화 ' + ep.title + ' 끝!'),
        h('div.row.row--wrap',
          h('button.btn.btn--primary.btn--big', {
            type: 'button', onclick: function () { go('#/'); }
          }, '🏠 처음으로'),
          h('button.btn.btn--ghost', {
            type: 'button', onclick: function () { go('#/ep/' + epKey); }
          }, '다시 놀기')
        )
      )
    ));
    session = null;
  }

  // ---------- 한글 카드 앨범 ----------

  function screenAlbum() {
    var cards = AIYA.store.state.cards;
    var owned = Object.keys(cards);
    var all = (AIYA.data.cardOrder || owned);

    render(h('div.screen',
      topbar('한글 카드 ' + owned.length + '장', '#/'),
      h('div.album', all.map(function (c) {
        var has = !!cards[c];
        return h('div.albumslot' + (has ? '.albumslot--has' : ''),
          h('span.albumslot__face', has ? AIYA.dom.cardFace(c) : '🔒')
        );
      }))
    ));
  }

  // ---------- 부모 화면 ----------

  function screenParent() {
    var s = AIYA.store.state;
    var conf = Object.keys(s.confusions)
      .map(function (k) { return { k: k, n: s.confusions[k] }; })
      .sort(function (a, b) { return b.n - a.n; })
      .slice(0, 6);

    var fileInput = h('input', {
      type: 'file', accept: 'application/json', style: { display: 'none' },
      onchange: function (e) {
        var f = e.target.files && e.target.files[0];
        if (!f) return;
        var fr = new FileReader();
        fr.onload = function () {
          try { AIYA.store.importJSON(String(fr.result)); alert('진도를 불러왔습니다.'); route(); }
          catch (err) { alert('불러오기 실패: ' + err.message); }
        };
        fr.readAsText(f);
      }
    });

    render(h('div.screen',
      topbar('부모님 화면', '#/'),

      h('section.card',
        h('h2.card__title', '진도'),
        h('ul.plainlist', Object.keys(s.episodes).sort().map(function (k) {
          var e = s.episodes[k];
          var ep = AIYA.episodes[k];
          return h('li',
            (ep ? ep.episode + '화 ' + ep.title : k) + ' — ' +
            (e.done ? '완료' : '진행 중') + ' · ⭐ ' + AIYA.store.episodeStars(k) +
            (e.course ? ' · ' + (e.course === 'short' ? '짧은 코스' : '전체 코스') : '')
          );
        })),
        h('p.card__note', '한글 카드 ' + AIYA.store.cardCount() + '장 · 배지 ' + s.badges.length + '개')
      ),

      h('section.card',
        h('h2.card__title', '헷갈린 짝'),
        conf.length
          ? h('ul.plainlist', conf.map(function (c) {
              var parts = c.k.split('|');
              return h('li', parts[0].replace('→', ' 를 ') + ' 로 · ' + c.n + '번' +
                (parts[1] ? '  (' + parts[1] + ')' : ''));
            }))
          : h('p.card__note', '아직 기록이 없습니다.'),
        h('p.card__note', '가장 많이 헷갈린 짝을 집에서 손가락으로 짚어 주며 말해 주세요.')
      ),

      h('section.card',
        h('h2.card__title', '아이가 쓴 글자'),
        h('div.row.row--wrap', Object.keys(s.writings).slice(-8).map(function (k) {
          return h('figure.writing',
            h('img', { src: s.writings[k], alt: k }),
            h('figcaption', k)
          );
        })),
        Object.keys(s.writings).length ? null : h('p.card__note', '아직 없습니다.')
      ),

      h('section.card',
        h('h2.card__title', '진도 보관'),
        h('p.card__note',
          '아이패드 Safari 는 홈 화면에 추가하지 않으면 7일 이상 안 쓸 때 저장된 진도를 지웁니다. ' +
          '공유 버튼 → "홈 화면에 추가" 를 꼭 해 두시고, 가끔 아래에서 내보내 두세요.'),
        h('div.row.row--wrap',
          h('button.btn.btn--ghost', { type: 'button', onclick: AIYA.store.exportFile }, '⬇ 내보내기'),
          h('button.btn.btn--ghost', { type: 'button', onclick: function () { fileInput.click(); } }, '⬆ 불러오기'),
          h('button.btn.btn--ghost', {
            type: 'button',
            onclick: function () {
              if (confirm('진도를 모두 지웁니다. 계속할까요?')) { AIYA.store.reset(); route(); }
            }
          }, '🗑 초기화')
        ),
        fileInput
      )
    ));
  }

  // ---------- 자체 점검 ----------

  function screenSelfTest() {
    var out = h('div.selftest');
    render(h('div.screen', topbar('자체 점검', '#/'), h('section.card', out)));
    if (AIYA.dev && AIYA.dev.selftest) AIYA.dev.selftest(out);
    else out.appendChild(h('p', 'dev/selftest.js 가 로드되지 않았습니다.'));
  }

  AIYA.shell = { boot: boot, go: go, youtubeEmbed: youtubeEmbed };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})(window.AIYA);
