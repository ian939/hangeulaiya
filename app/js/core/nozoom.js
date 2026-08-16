/* 아이가 잘못 만져서 화면이 확대·축소되는 것을 막는다.
 *
 * 왜 CSS·메타 태그만으로는 안 되는가
 * ----------------------------------
 * <meta viewport ... maximum-scale=1, user-scalable=no> 는 **iOS Safari 가
 * 무시한다.** 접근성 때문에 iOS 10 부터 일부러 그렇게 바뀌었다. 그래서
 * 아이패드에서는 두 손가락으로 벌리면 그대로 확대된다.
 *
 * 확대되면 아이가 스스로 되돌리지 못한다. 화면 일부만 보이니 다음 버튼을 못 찾고,
 * 부모를 불러야 한다. 놀이가 거기서 끊긴다.
 *
 * 막아야 하는 길이 네 가지다
 *   1. 두 손가락으로 벌리기 — Safari 의 gesture 이벤트 (iOS 전용)
 *   2. 손가락 두 개 이상의 touchmove — 다른 브라우저의 핀치
 *   3. 손가락으로 빠르게 두 번 두드리기 — CSS touch-action 으로 막는다
 *   4. 트랙패드 핀치 / Ctrl+휠 — 데스크톱에서 부모가 볼 때
 *
 * 접근성에 대해: 이 앱의 글자는 원래 크게(clamp 로 화면 폭에 맞춰) 잡혀 있고,
 * 확대해서 봐야 할 만큼 작은 글자가 없다. 확대가 필요한 상황보다 아이가
 * 실수로 확대해 갇히는 상황이 훨씬 잦아서 막는 쪽을 골랐다.
 */
(function (AIYA) {
  'use strict';

  var DOUBLE_TAP_MS = 320;
  var lastTouchEnd = 0;

  function stop(e) {
    if (e.cancelable) e.preventDefault();
  }

  // 1. iOS Safari 의 핀치 확대. 이 세 이벤트가 실제로 확대를 일으킨다.
  ['gesturestart', 'gesturechange', 'gestureend'].forEach(function (name) {
    document.addEventListener(name, stop, { passive: false });
  });

  /* 2. 손가락 두 개 이상으로 끄는 동작.
   *    한 손가락은 그대로 둔다 — 스크롤과 글씨 쓰기를 막으면 안 된다. */
  document.addEventListener('touchmove', function (e) {
    if (e.touches && e.touches.length > 1) stop(e);
  }, { passive: false });

  /* 3. 빠르게 두 번 두드려 확대하기.
   *    CSS touch-action: manipulation 이 대부분 막아 주지만, 예전 iOS 와
   *    일부 웹뷰는 그것만으로 부족해서 한 겹 더 둔다. */
  document.addEventListener('touchend', function (e) {
    var now = Date.now();
    if (now - lastTouchEnd < DOUBLE_TAP_MS) stop(e);
    lastTouchEnd = now;
  }, { passive: false });

  // 4. 트랙패드 핀치와 Ctrl+휠 (부모가 PC 로 볼 때)
  document.addEventListener('wheel', function (e) {
    if (e.ctrlKey) stop(e);
  }, { passive: false });

  // Ctrl/⌘ + '+' '-' '0' 도 막는다
  document.addEventListener('keydown', function (e) {
    if (!(e.ctrlKey || e.metaKey)) return;
    if (['+', '-', '=', '0'].indexOf(e.key) >= 0) stop(e);
  });

  AIYA.nozoom = { installed: true };
})(window.AIYA);
