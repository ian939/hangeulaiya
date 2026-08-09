/* 자모의 이름과 소리. TTS 문구 조립과 화면 표시에 쓴다. */
(function (AIYA) {
  'use strict';

  // 자음 이름 (한글 맞춤법 기준)
  var CONSONANT = {
    'ㄱ': '기역', 'ㄲ': '쌍기역', 'ㄴ': '니은', 'ㄷ': '디귿', 'ㄸ': '쌍디귿',
    'ㄹ': '리을', 'ㅁ': '미음', 'ㅂ': '비읍', 'ㅃ': '쌍비읍', 'ㅅ': '시옷',
    'ㅆ': '쌍시옷', 'ㅇ': '이응', 'ㅈ': '지읒', 'ㅉ': '쌍지읒', 'ㅊ': '치읓',
    'ㅋ': '키읔', 'ㅌ': '티읕', 'ㅍ': '피읖', 'ㅎ': '히읗',
    'ㄳ': '기역시옷', 'ㄵ': '니은지읒', 'ㄶ': '니은히읗', 'ㄺ': '리을기역',
    'ㄻ': '리을미음', 'ㄼ': '리을비읍', 'ㄽ': '리을시옷', 'ㄾ': '리을티읕',
    'ㄿ': '리을피읖', 'ㅀ': '리을히읗', 'ㅄ': '비읍시옷'
  };

  // 모음의 이름은 그 소리 자체다.
  var VOWEL = {
    'ㅏ': '아', 'ㅐ': '애', 'ㅑ': '야', 'ㅒ': '얘', 'ㅓ': '어', 'ㅔ': '에',
    'ㅕ': '여', 'ㅖ': '예', 'ㅗ': '오', 'ㅘ': '와', 'ㅙ': '왜', 'ㅚ': '외',
    'ㅛ': '요', 'ㅜ': '우', 'ㅝ': '워', 'ㅞ': '웨', 'ㅟ': '위', 'ㅠ': '유',
    'ㅡ': '으', 'ㅢ': '의', 'ㅣ': '이'
  };

  /** 'ㄱ' -> '기역',  'ㅑ' -> '야' */
  function name(j) {
    return CONSONANT[j] || VOWEL[j] || j;
  }

  /** 받침일 때 부르는 말. 'ㄱ' -> '받침 기역' */
  function jongName(j) {
    return '받침 ' + name(j);
  }

  /**
   * 화면·음성에서 자모를 부를 때 쓰는 라벨.
   * position: 'cho' | 'jung' | 'jong'
   */
  function label(j, position) {
    if (position === 'jong') return jongName(j);
    return name(j);
  }

  AIYA.hangul.name = name;
  AIYA.hangul.jongName = jongName;
  AIYA.hangul.label = label;
  AIYA.hangul.NAMES = { consonant: CONSONANT, vowel: VOWEL };
})(window.AIYA);
