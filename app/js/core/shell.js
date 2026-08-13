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

    /* 완료한 회차의 카드를 다시 채운다.
     * 창이 둘 열려 있을 때 진도가 덮어써지던 버그로 카드를 잃은 아이가 있다.
     * 회차를 끝낸 기록이 남아 있으면 그 카드는 정당하게 얻은 것이라 되살린다.
     * 카드만 늘고 줄지 않으며, 여러 번 돌려도 결과가 같다.
     * 회차 데이터가 다 등록된 뒤(이 파일이 마지막이다)라야 rewards 를 볼 수 있다. */
    try {
      var back = AIYA.store.reconcileCards();
      if (back.length) AIYA.warn('완료한 회차에서 카드 ' + back.length + '장을 되살렸습니다', back);
    } catch (e) {
      AIYA.warn('카드 다시 채우기 실패', e);
    }
    /* 다른 창이 진도를 저장했을 때 화면을 다시 그린다.
     * 놀이 중에는 건드리지 않는다 — 활동을 다시 그리면 아이가 하던 걸 잃는다. */
    AIYA.onProgressChanged = function () {
      if (session) return;
      var r = parseHash();
      if (r.screen === 'home' || r.screen === 'album' || r.screen === 'level') route();
    };

    window.addEventListener('hashchange', route);
    route();
  }

  // ---------- 라우팅 ----------

  function parseHash() {
    var raw = (location.hash || '').replace(/^#\/?/, '');
    var parts = raw.split('/').filter(Boolean);
    if (!parts.length) return { screen: 'home' };
    if (parts[0] === 'ep') return { screen: 'episode', epKey: parts[1], sub: parts[2] };
    if (parts[0] === 'level') return { screen: 'level', levelId: parts[1] };
    if (parts[0] === 'who') return { screen: 'who' };
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
      case 'level': return screenLevel(r.levelId);
      case 'who': return screenWho(false);
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

  /** 회차 카드 하나. */
  function episodeCard(k) {
    var ep = AIYA.episodes[k];
    var saved = AIYA.store.ep(k);
    var stars = AIYA.store.episodeStars(k);
    return h('button.epcard' + (saved.done ? '.epcard--done' : ''), {
      type: 'button',
      onclick: function () { AIYA.audio.unlock(); go('#/ep/' + k); }
    },
      h('span.epcard__no', ep.episode + '화'),
      h('span.epcard__word', ep.title),
      h('span.epcard__goal', ep.focus || ep.objective || ''),
      h('span.epcard__stars',
        saved.done ? '✅ ⭐ ' + stars : (stars ? '⭐ ' + stars : '시작하기'))
    );
  }

  /**
   * 홈 — 난이도 단계를 고른다.
   *
   * 35편을 한 화면에 늘어놓으면 처음 오는 아이도, 이어서 하는 아이도
   * 어디를 눌러야 하는지 알기 어렵다. 단계를 먼저 고르게 하면
   * "한글을 처음 배워요" 로 시작할 수도, 하던 단계로 바로 갈 수도 있다.
   */
  /**
   * 누가 노는지 고르는 화면.
   *
   * 한 아이패드에서 두 아이가 놀면 진도가 섞인다. 형제나 친구가 번갈아 하면
   * 서로의 카드가 뒤섞이고, 부모 리포트의 '헷갈린 짝' 도 쓸모없어진다.
   * 그래서 아이마다 저장 칸을 따로 둔다.
   *
   * 글씨를 모르는 아이도 자기 자리를 찾을 수 있게 **캐릭터로 고르게** 한다.
   */
  function screenWho(mode) {
    session = null;
    var first = AIYA.profiles.needsSetup();

    function card(p) {
      var isNow = p.id === AIYA.profiles.activeId();
      return h('button.whocard' + (isNow ? '.whocard--now' : ''), {
        type: 'button',
        onclick: function () {
          AIYA.audio.unlock();
          AIYA.store.switchProfile(p.id);
          go('#/');
        }
      },
        h('span.whocard__avatar', p.avatar),
        h('span.whocard__name', p.name),
        h('span.whocard__meta', isNow ? '지금 이 친구' : '누르면 바뀌어요')
      );
    }

    /* 프로필 기능을 넣기 전에 쌓인 진도는 '첫 번째 친구' 로 옮겨진다.
       그 이름을 그대로 두면 누구 진도인지 알 수 없으니 바꾸라고 알려 준다. */
    var needsName = AIYA.profiles.list().some(function (p) {
      return p.name === '첫 번째 친구';
    });

    var addBox = h('div.whoadd');
    var nameInput = h('input.whoadd__name', {
      type: 'text', placeholder: '이름 (예: 지온)', maxlength: '12'
    });
    var chosen = { avatar: AIYA.profiles.freeAvatars()[0] };
    var avatarRow = h('div.whoadd__avatars',
      AIYA.profiles.freeAvatars().map(function (a) {
        var btn = h('button.avatarpick' + (a === chosen.avatar ? '.avatarpick--on' : ''), {
          type: 'button',
          onclick: function () {
            chosen.avatar = a;
            Array.prototype.forEach.call(
              avatarRow.querySelectorAll('.avatarpick'),
              function (x) { x.classList.remove('avatarpick--on'); });
            btn.classList.add('avatarpick--on');
          }
        }, a);
        return btn;
      })
    );
    addBox.appendChild(h('p.whoadd__label', '새 친구 만들기'));
    addBox.appendChild(avatarRow);
    addBox.appendChild(h('div.row.row--wrap',
      nameInput,
      h('button.btn.btn--primary', {
        type: 'button',
        onclick: function () {
          AIYA.audio.unlock();
          AIYA.store.addProfile(nameInput.value, chosen.avatar);
          go('#/');
        }
      }, '＋ 만들기')
    ));

    render(h('div.screen.screen--who',
      first ? null : topbar('누가 놀고 있나요?', '#/'),
      first ? h('header.home__head',
        h('h1.home__title', '아이야 한글놀이'),
        h('p.home__sub', '먼저 누가 놀지 정해요. 아이마다 카드와 진도가 따로 모여요.')
      ) : null,
      AIYA.profiles.list().length
        ? h('div.whogrid', AIYA.profiles.list().map(card))
        : null,
      needsName ? h('p.card__note',
        '지금까지 모은 카드는 "첫 번째 친구" 에 그대로 있습니다. ' +
        '부모님 화면에서 이름을 아이 이름으로 바꿔 주세요.') : null,
      addBox
    ));
  }

  function screenHome() {
    session = null;
    // 아이가 아직 없으면 진도를 담을 곳도 없다. 먼저 정하게 한다.
    if (AIYA.profiles.needsSetup()) return screenWho(true);

    var tiles = AIYA.data.levels.map(function (lv) {
      var keys = AIYA.data.episodesOfLevel(lv.id);

      /* 아직 안 만든 단계는 숨기지 않고 '준비 중' 으로 보여준다.
       * 숨기면 단계 번호가 3, 5, 6 처럼 띄어 보여서 고장난 것처럼 읽힌다. */
      if (!keys.length) {
        return h('div.levelcard.levelcard--soon',
          h('span.levelcard__step', lv.order + '단계'),
          h('span.levelcard__emoji', lv.emoji),
          h('span.levelcard__label', lv.label),
          h('span.levelcard__hint', lv.hint),
          h('span.levelcard__meta', '준비 중')
        );
      }

      var done = keys.filter(function (k) { return AIYA.store.ep(k).done; }).length;
      var stars = keys.reduce(function (s, k) { return s + AIYA.store.episodeStars(k); }, 0);
      var pct = Math.round(done / keys.length * 100);

      return h('button.levelcard' + (done === keys.length ? '.levelcard--done' : ''), {
        type: 'button',
        onclick: function () { AIYA.audio.unlock(); go('#/level/' + lv.id); }
      },
        h('span.levelcard__step', lv.order + '단계'),
        h('span.levelcard__emoji', lv.emoji),
        h('span.levelcard__label', lv.label),
        h('span.levelcard__hint', lv.hint),
        h('span.levelcard__bar', h('span.levelcard__fill', { style: { width: pct + '%' } })),
        h('span.levelcard__meta',
          keys.length + '편' + (done ? ' · ' + done + '편 완료' : '') +
          (stars ? ' · ⭐ ' + stars : ''))
      );
    }).filter(Boolean);

    var me = AIYA.profiles.active();

    render(h('div.screen.screen--home',
      h('header.home__head',
        // 지금 누가 노는지 늘 보이게 둔다. 눌러서 바꿀 수 있다.
        h('button.whochip', {
          type: 'button', onclick: function () { go('#/who'); }
        },
          h('span.whochip__avatar', me ? me.avatar : '🙂'),
          h('span.whochip__name', me ? me.name : '친구'),
          h('span.whochip__swap', '바꾸기')
        ),
        h('h1.home__title', '아이야 한글놀이'),
        h('p.home__sub', '한글용사 아이야를 보고, 놀면서 한글을 익혀요'),
        h('p.home__pick', '어디부터 할까요?')
      ),
      h('div.levelgrid', tiles.length ? tiles : h('p.empty', '회차 데이터가 없습니다.')),
      h('div.home__foot',
        h('button.btn.btn--ghost', {
          type: 'button', onclick: function () { go('#/album'); }
        }, '🗂 카드 (' + AIYA.store.cardCount() + ' + ' + AIYA.store.wordCount() + '장)'),
        h('button.btn.btn--ghost', {
          type: 'button', onclick: function () { go('#/parent'); }
        }, '👪 부모님')
      )
    ));
  }

  /** 한 단계의 회차 목록. */
  function screenLevel(levelId) {
    session = null;
    var lv = AIYA.data.levels.filter(function (l) { return l.id === levelId; })[0];
    if (!lv) return screenHome();

    var keys = AIYA.data.episodesOfLevel(lv.id);
    var order = AIYA.data.levels.filter(function (l) {
      return AIYA.data.episodesOfLevel(l.id).length;
    });
    var pos = order.map(function (l) { return l.id; }).indexOf(lv.id);

    render(h('div.screen',
      topbar(lv.emoji + ' ' + lv.label, '#/'),
      h('p.level__desc', lv.desc),
      h('div.epgrid', keys.length
        ? keys.map(episodeCard)
        : h('p.empty', '이 단계는 아직 준비 중이에요.')),
      h('div.row.row--wrap.level__nav',
        pos > 0 ? h('button.btn.btn--ghost', {
          type: 'button',
          onclick: function () { go('#/level/' + order[pos - 1].id); }
        }, '← ' + order[pos - 1].label) : null,
        pos < order.length - 1 ? h('button.btn.btn--ghost', {
          type: 'button',
          onclick: function () { go('#/level/' + order[pos + 1].id); }
        }, order[pos + 1].label + ' →') : null
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
    var lv = AIYA.data.levelOf(ep.episode, ep.season);

    render(h('div.screen.screen--episode',
      topbar(ep.episode + '화 ' + ep.title, lv ? '#/level/' + lv.id : '#/'),

      videoSection(ep, epKey, watched),

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

  /**
   * 유튜브 임베드.
   *
   * youtube-nocookie.com 을 쓰지 않는 이유: 그 도메인은 **일부러 로그인 쿠키를
   * 쓰지 않는다.** 그래서 유튜브 프리미엄을 구독해도 임베드가 그걸 알 수 없고
   * 광고가 그대로 나온다. youtube.com 으로 열면 브라우저에 로그인된 계정을
   * 볼 수 있어 프리미엄이 적용될 여지가 생긴다.
   *
   * 다만 사파리는 기본으로 제3자 쿠키를 막기 때문에(ITP) 임베드가 로그인을
   * 못 보는 경우가 많다. 광고를 확실히 없애려면 **로그인된 유튜브 앱에서 열어야**
   * 한다. 그래서 앱으로 여는 버튼을 따로 둔다 (부모 설정에서 기본으로 바꿀 수 있다).
   */
  function youtubeEmbed(videoId, startAt) {
    if (!videoId) return h('p.card__warn', '영상 주소가 없습니다.');
    var src = 'https://www.youtube.com/embed/' + videoId +
      '?rel=0&playsinline=1&hl=ko&modestbranding=1' + (startAt ? '&start=' + startAt : '');
    return h('div.embed', h('iframe', {
      src: src, title: '한글용사 아이야', loading: 'lazy',
      allow: 'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
      allowfullscreen: true, frameborder: '0'
    }));
  }

  /** 유튜브 앱(또는 유튜브 사이트)에서 열기. 로그인된 앱이면 프리미엄이 적용된다. */
  function youtubeLink(videoId, startAt) {
    return 'https://www.youtube.com/watch?v=' + videoId +
      (startAt ? '&t=' + Math.floor(startAt) + 's' : '');
  }

  function openInYoutube(videoId, startAt) {
    window.open(youtubeLink(videoId, startAt), '_blank', 'noopener');
  }

  /** 영상 보기 칸. 부모 설정에 따라 앱으로 열기를 기본으로 둘 수 있다. */
  function videoSection(ep, epKey, watched) {
    var inApp = AIYA.store.setting('openInApp');

    function watchedBtn() {
      return h('button.btn.btn--primary', {
        type: 'button',
        onclick: function () {
          AIYA.store.markWatched(epKey);
          screenEpisode(epKey);
        }
      }, watched ? '✅ 오늘 봤어요' : '다 봤어요!');
    }

    var appBtn = h('button.btn' + (inApp ? '.btn--primary.btn--big' : '.btn--ghost'), {
      type: 'button',
      onclick: function () { openInYoutube(ep.videoId); }
    }, '▶ 유튜브 앱에서 보기');

    return h('section.card.card--video',
      h('h2.card__title', '① 먼저 영상을 봐요'),
      h('p.card__note', ep.focus || ''),
      inApp
        ? h('div.stage',
            h('p.card__note',
              '유튜브 앱에서 열립니다. 앱에 프리미엄 계정으로 로그인되어 있으면 광고가 나오지 않아요.'),
            h('div.row.row--wrap', appBtn, watchedBtn()))
        : h('div.stage',
            youtubeEmbed(ep.videoId),
            h('div.row.row--wrap', watchedBtn(), appBtn),
            h('p.card__note',
              '광고가 나오면 "유튜브 앱에서 보기" 로 열어 주세요. ' +
              '부모님 화면에서 앱으로 열기를 기본으로 바꿀 수 있어요.'))
    );
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
    // 시즌2 는 자모가 아니라 낱말을 모은다
    var newWords = [];
    (ep.rewards && ep.rewards.words || []).forEach(function (w) {
      if (AIYA.store.awardWord(w)) newWords.push(w);
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
        newWords.length ? h('div.reward__cards',
          h('p.reward__label', '새 낱말 카드'),
          h('div.row.row--wrap', newWords.map(function (w) {
            return h('span.wordcard', h('span.wordcard__word', w));
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

    /* 시즌2 낱말 카드는 자모 카드와 섞지 않는다. 배운 것이 다르고
     * (글자 vs 낱말의 뜻) 섞으면 무엇을 모았는지 흐려진다.
     * 자모는 64칸이 정해져 있지만 낱말은 회차마다 늘어나니 모은 것만 보여준다. */
    var words = Object.keys(AIYA.store.state.words || {}).sort();

    render(h('div.screen',
      topbar('모은 카드', '#/'),

      h('section.card',
        h('h2.card__title', '한글 카드 ' + owned.length + ' / ' + all.length + '장'),
        h('p.card__note', '시즌1 에서 배운 글자예요'),
        h('div.album', all.map(function (c) {
          var has = !!cards[c];
          return h('div.albumslot' + (has ? '.albumslot--has' : ''),
            h('span.albumslot__face', has ? AIYA.dom.cardFace(c) : '🔒')
          );
        }))
      ),

      h('section.card',
        h('h2.card__title', '낱말 카드 ' + words.length + '장'),
        h('p.card__note', '시즌2 에서 배운 낱말이에요'),
        words.length
          ? h('div.wordalbum', words.map(function (w) {
              return h('div.wordcard', h('span.wordcard__word', w));
            }))
          : h('p.empty', '아직 없어요. 낱말과 문장 단계를 해 보세요!')
      )
    ));
  }

  // ---------- 부모 화면 ----------

  /**
   * 카드 상태 점검.
   *
   * 창이 둘 열려 있을 때 진도가 덮어써지던 버그로 카드를 잃은 아이가 있다.
   * 완료한 회차와 가진 카드를 맞춰 보고, 어긋나면 되살릴 수 있게 한다.
   */
  function cardHealthSection() {
    var st = AIYA.store.state;
    var doneKeys = Object.keys(st.episodes).filter(function (k) {
      return st.episodes[k].done;
    }).sort();

    // 완료한 회차가 줘야 하는 카드
    var should = {};
    doneKeys.forEach(function (k) {
      var ep = AIYA.episodes[k];
      ((ep && ep.rewards && ep.rewards.cards) || []).forEach(function (c) { should[c] = 1; });
    });
    var missing = Object.keys(should).filter(function (c) { return !st.cards[c]; });
    var have = Object.keys(st.cards).length;

    return h('section.card',
      h('h2.card__title', '카드 상태'),
      h('p.card__note',
        '가진 카드 ' + have + '장 · 끝낸 회차 ' + doneKeys.length + '편' +
        (doneKeys.length ? ' (' + doneKeys.map(function (k) {
          return parseInt(k, 10) + '화';
        }).join(', ') + ')' : '')),
      missing.length
        ? h('div',
            h('p.card__warn',
              '끝낸 회차에 비해 카드 ' + missing.length + '장이 비어 있습니다: ' +
              missing.join(', ')),
            h('button.btn.btn--primary', {
              type: 'button',
              onclick: function () {
                var back = AIYA.store.reconcileCards();
                alert(back.length ? '카드 ' + back.length + '장을 되살렸습니다.'
                                  : '되살릴 카드가 없습니다.');
                route();
              }
            }, '카드 되살리기'))
        : h('p.card__note', '끝낸 회차와 카드가 맞습니다.'),
      h('p.card__note',
        '카드가 이상하면 아래 내보내기로 진도 파일을 저장해 개발자에게 보내 주세요. ' +
        '무엇이 어긋났는지 정확히 볼 수 있습니다.')
    );
  }

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

    var inApp = AIYA.store.setting('openInApp');
    var me = AIYA.profiles.active();

    render(h('div.screen',
      topbar('부모님 화면', '#/'),

      h('section.card',
        h('h2.card__title', '아이별 진도'),
        h('p.card__note',
          '한 기기에서 여러 아이가 놀면 진도가 섞입니다. 아이마다 칸을 따로 두었습니다. ' +
          '아래 목록에서 이름을 고치거나 지울 수 있습니다.'),
        h('p.card__note.card__note--strong',
          '아래 진도·헷갈린 짝·글씨는 모두 ' +
          (me ? me.avatar + ' ' + me.name : '지금 아이') + ' 의 것입니다.'),
        h('div.prolist', AIYA.profiles.list().map(function (p) {
          var isNow = p.id === AIYA.profiles.activeId();
          return h('div.prorow' + (isNow ? '.prorow--now' : ''),
            h('span.prorow__avatar', p.avatar),
            h('span.prorow__name', p.name + (isNow ? ' (지금)' : '')),
            h('div.row.row--wrap',
              isNow ? null : h('button.btn.btn--ghost.btn--sm', {
                type: 'button',
                onclick: function () { AIYA.store.switchProfile(p.id); route(); }
              }, '이 아이 보기'),
              h('button.btn.btn--ghost.btn--sm', {
                type: 'button',
                onclick: function () {
                  var n = prompt('이름을 바꿉니다.', p.name);
                  if (n) { AIYA.profiles.rename(p.id, n); route(); }
                }
              }, '이름'),
              h('button.btn.btn--ghost.btn--sm', {
                type: 'button',
                onclick: function () {
                  if (AIYA.profiles.list().length <= 1) {
                    alert('마지막 아이는 지울 수 없습니다. 진도만 지우려면 아래 초기화를 쓰세요.');
                    return;
                  }
                  if (confirm('"' + p.name + '" 의 진도를 모두 지웁니다. 되돌릴 수 없습니다. 계속할까요?')) {
                    AIYA.store.removeProfile(p.id);
                    route();
                  }
                }
              }, '지우기')
            )
          );
        })),
        h('button.btn.btn--ghost', {
          type: 'button', onclick: function () { go('#/who'); }
        }, '＋ 아이 추가 / 바꾸기')
      ),

      cardHealthSection(),

      h('section.card',
        h('h2.card__title', '영상과 광고'),
        h('p.card__note',
          '유튜브 프리미엄을 구독하고 계시면, 로그인된 유튜브 앱에서 영상을 열면 ' +
          '광고가 나오지 않습니다. 앱 안에 넣은 영상 창은 사파리가 제3자 쿠키를 막기 때문에 ' +
          '로그인·프리미엄을 인식하지 못하는 경우가 많습니다.'),
        h('label.toggle',
          h('input', {
            type: 'checkbox', checked: inApp,
            onchange: function (e) {
              AIYA.store.setting('openInApp', !!e.target.checked);
              route();
            }
          }),
          h('span', '영상을 유튜브 앱에서 열기')
        ),
        h('p.card__note',
          inApp
            ? '켜져 있습니다. 회차를 고르면 "유튜브 앱에서 보기" 버튼이 먼저 나옵니다.'
            : '꺼져 있습니다. 앱 안에서 바로 재생하고, 광고가 나오면 앱으로 열 수 있습니다.'),
        h('p.card__note',
          '아이패드에서 처음 한 번은 유튜브 앱에 프리미엄 계정으로 로그인해 두세요. ' +
          '가족 요금제라면 아이 계정이 아니라 부모님 계정으로 로그인해야 광고가 빠집니다.')
      ),

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
        h('p.card__note', '한글 카드 ' + AIYA.store.cardCount() + '장 · 낱말 카드 ' + AIYA.store.wordCount() + '장 · 배지 ' + s.badges.length + '개')
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

  AIYA.shell = {
    boot: boot, go: go, youtubeEmbed: youtubeEmbed,
    /* 테스트용 — 화면에는 어떤 버튼으로도 나오지 않는다.
     * 아이가 쓰는 '건너뛰기' 버튼은 없앴지만(막혔을 때가 아니라 하기 싫을 때
     * 눌렀다), 자동 검사는 63편을 훑으려면 활동을 넘길 방법이 필요하다. */
    devNext: function () {
      if (!session) return false;
      next({ stars: 0, skipped: true });
      return true;
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})(window.AIYA);
