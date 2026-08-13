/* 회차 콘텐츠 검사기.
 *
 *     node tools/lint_content.mjs
 *
 * 브라우저의 #/selftest 는 로직(조립 공식, 획 데이터, 스키마)을 검사한다.
 * 여기서는 브라우저가 하기 어려운 것을 검사한다.
 *   - 참조한 그림 파일이 디스크에 실제로 있는지
 *   - 모든 발화 문구에 미리 만든 음성 파일이 있는지
 *   - **누적 자모 규칙** — N화에서 아직 배우지 않은 자모를 정답이나 오답으로 쓰지 않았는지
 *
 * 88화로 늘어나면 이 규칙을 손으로 지킬 수 없다. 그래서 검사기가 먼저 있어야 한다.
 */
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

// ── 앱 모듈을 Node 에서 그대로 실행한다 (정규식 파싱보다 훨씬 믿을 만하다) ──
globalThis.window = globalThis;
globalThis.document = { addEventListener() {}, readyState: 'complete' };
globalThis.localStorage = { getItem: () => null, setItem() {}, removeItem() {} };
globalThis.sessionStorage = globalThis.localStorage;
globalThis.addEventListener = () => {};

const FILES = [
  'app/js/core/ns.js',
  'app/js/hangul/jamo.js',
  'app/js/hangul/names.js',
  'app/js/hangul/glyphs.js',
  'app/js/hangul/layout.js',
  'app/js/audio/speak.js',
  'data/common/voicebank.js',
  'data/common/cards.js',
];

for (const f of FILES) {
  const src = readFileSync(join(ROOT, f), 'utf8');
  // eslint-disable-next-line no-new-func
  new Function(src).call(globalThis);
}

// 시즌2 파일은 s2ep029.js 처럼 생겼다. 예전 정규식(^ep\d+)이 이걸 놓쳤다.
const epFiles = readdirSync(join(ROOT, 'data/episodes')).filter((f) => /^(s\d+)?ep\d+\.js$/.test(f)).sort();
for (const f of epFiles) {
  const src = readFileSync(join(ROOT, 'data/episodes', f), 'utf8');
  new Function(src).call(globalThis);
}

const AIYA = globalThis.AIYA;
const H = AIYA.hangul;

const problems = [];
const warnings = [];
const notes = [];

function fail(where, msg) { problems.push(`${where}: ${msg}`); }
function warn(where, msg) { warnings.push(`${where}: ${msg}`); }

// ── 발화 문구와 그림 참조를 재귀로 모은다 ─────────────────────────
const SPEECH_KEYS = new Set(['q', 'say', 'prompt', 'hint', 'after', 'why', 'caption', 'note']);
const lines = new Set();
const svgs = new Set();

function walk(node, keyName) {
  if (node == null) return;
  if (typeof node === 'string') {
    if (SPEECH_KEYS.has(keyName)) lines.add(node.trim());
    if (node.endsWith('.svg')) svgs.add(node);
    return;
  }
  if (Array.isArray(node)) { node.forEach((n) => walk(n, keyName)); return; }
  if (typeof node === 'object') {
    for (const [k, v] of Object.entries(node)) walk(v, k);
  }
}

// ── 회차별 검사 ─────────────────────────────────────────────────
const epKeys = Object.keys(AIYA.episodes).sort();
if (!epKeys.length) fail('전체', '회차 데이터가 없습니다');

for (const key of epKeys) {
  const ep = AIYA.episodes[key];
  const tag = `${ep.episode}화 ${ep.title}`;

  for (const field of ['episode', 'title', 'videoId', 'objective', 'activities']) {
    if (!ep[field]) fail(tag, `필수 항목 누락: ${field}`);
  }
  if (!/^[\w-]{11}$/.test(ep.videoId || '')) fail(tag, `videoId 형식이 이상함: ${ep.videoId}`);

  walk(ep.activities, null);
  walk(ep.parent, null);

  // --- 누적 자모 규칙 ---
  // N화 시점에 쓸 수 있는 카드 = N화 이전에 배운 것 + N화의 새 카드
  /* 기준은 '배정된 카드' 가 아니라 '그때까지 화면에 나온 자모' 다.
     방송은 목표 낱말을 만들려고 다른 자모도 그 회차에서 찾아와 소개한다
     (3화 「어디」의 ㄷ 는 '다리' 에서 찾아온다). available() 이 그걸 포함한다.

     **시즌2 는 이 규칙을 적용하지 않는다.** 시즌2 는 글자를 다 배운 뒤 낱말의
     뜻을 배우는 단원이라, 쓸 수 있는 글자를 제한하면 낱말을 고를 수가 없다.
     ('비싸다' 를 쓰려면 쌍시옷이 필요한데 시즌1 38화에서 배운다) */
  const isSeason2 = (ep.season || 1) >= 2;
  const allowedCards = isSeason2
    ? new Set(AIYA.data.cardOrder)
    : new Set([
        ...AIYA.data.available(ep.episode),
        ...(ep.jamo?.new || []),
        ...(ep.jamo?.seen || [])
      ]);

  /** 글자 하나가 허용 범위 안인지. 받침은 '받침 X' 카드로 따로 따진다. */
  function checkSyllable(ch, where, { allowGuest = false } = {}) {
    if (!H.isSyllable(ch)) return;
    const d = H.decompose(ch);
    const need = [];
    // 초성·중성은 8~20화(자음)와 1~7화(모음)에서 전부 배운다
    need.push(d.cho, d.jung);
    for (const j of need) {
      for (const part of H.parts(j)) {
        if (!allowedCards.has(part)) {
          (allowGuest ? warn : fail)(tag,
            `${where} '${ch}' 의 ${part} 는 ${ep.episode}화 시점에 아직 배우지 않았습니다`);
        }
      }
    }
    if (d.jong) {
      for (const part of H.parts(d.jong)) {
        if (!allowedCards.has('받침 ' + part)) {
          (allowGuest ? warn : fail)(tag,
            `${where} '${ch}' 의 받침 ${part} 는 ${ep.episode}화 시점에 아직 배우지 않았습니다`);
        }
      }
    }
  }

  function checkWord(word, where, opts) {
    for (const ch of String(word)) checkSyllable(ch, where, opts);
  }

  const shortActs = [];
  for (const a of ep.activities) {
    const at = `${tag} / ${a.id || a.type}`;
    if (!a.type) fail(at, 'type 없음');
    if ((a.courses || ['full']).includes('short')) shortActs.push(a.id || a.type);

    // 정답이 정확히 하나
    for (const [i, it] of (a.items || []).entries()) {
      if (it.options) {
        const n = it.options.filter((o) => o.correct).length;
        if (n !== 1) fail(`${at}#${i + 1}`, `정답이 ${n}개 (1개여야 함)`);
      }
    }

    if (a.type === 'jamobuild') {
      for (const [i, it] of (a.items || []).entries()) {
        const w = `${at}#${i + 1} 목표`;
        if (!it.target) { fail(w, 'target 없음'); continue; }
        for (const ch of String(it.target)) {
          if (!H.isSyllable(ch)) fail(w, `'${ch}' 는 완성형 한글이 아닙니다`);
        }
        // 목표 낱말은 '손님 자모'가 있을 수 있으므로 경고만
        checkWord(it.target, '조립 목표', { allowGuest: true });

        // 디코이가 실수로 정답과 같으면 문항이 깨진다
        const needed = new Set();
        for (const ch of String(it.target)) {
          const d = H.decompose(ch);
          [d.cho, d.jung, d.jong].filter(Boolean).forEach((j) => needed.add(j));
        }
        for (const dec of it.decoys || it.tray || []) {
          if (needed.has(dec.jamo)) {
            warn(`${at}#${i + 1}`, `디코이 ${dec.jamo} 가 정답 자모와 같습니다`);
          }
        }
      }
    }

    if (a.type === 'chunji') {
      for (const [i, it] of (a.items || []).entries()) {
        const w = `${at}#${i + 1}`;
        if (!it.target || !it.broken) { fail(w, 'target/broken 없음'); continue; }
        if (String(it.target).length !== String(it.broken).length) {
          fail(w, `망가진 글자 길이 불일치: '${it.broken}' vs '${it.target}'`);
        }
        if (it.target === it.broken) fail(w, '망가진 글자가 목표와 같습니다');
        checkWord(it.target, '복원 목표', { allowGuest: true });
        // 복원에 필요한 자모가 트레이에 있는지
        const missing = [];
        for (let si = 0; si < String(it.target).length; si++) {
          const wantD = H.decompose(String(it.target)[si]);
          const gotD = H.decompose(String(it.broken)[si]);
          for (const pos of ['cho', 'jung', 'jong']) {
            if (wantD[pos] && (!gotD || gotD[pos] !== wantD[pos])) missing.push(wantD[pos]);
          }
        }
        const tray = new Set((it.tray || []).map((t) => t.jamo));
        for (const m of missing) {
          if (!tray.has(m)) {
            notes.push(`${w}: 복원에 필요한 ${m} 는 트레이에 없지만 엔진이 자동으로 넣습니다`);
          }
        }
      }
    }

    if (a.type === 'match') {
      for (const p of a.pairs || []) {
        if (!p.word) { fail(at, '짝에 word 없음'); continue; }
        // 낱말·그림 잇기는 회차 목표 낱말이 아니므로 예외를 두지 않는다
        checkWord(p.word, `낱말 '${p.word}'`);
      }
    }

    if (a.type === 'writing') {
      for (const it of a.items || []) {
        if (!it.target) { fail(at, '쓰기 target 없음'); continue; }
        if (H.isSyllable(it.target[0])) {
          checkWord(it.target, `쓰기 '${it.target}'`, { allowGuest: true });
          const n = it.target.length > 1
            ? H.strokesForWord(it.target).length
            : H.strokesFor(it.target).length;
          if (!n) fail(at, `'${it.target}' 의 획 데이터를 만들 수 없습니다`);
        } else if (!H.glyphs.has(it.target)) {
          fail(at, `자모 '${it.target}' 의 획 데이터가 없습니다`);
        }
      }
    }

    if (a.type === 'letterhunt') {
      for (const [i, b] of (a.boards || []).entries()) {
        const w = `${at} 판${i + 1}`;
        if (b.cells) {
          if (!b.cells.some((c) => c.hit)) fail(w, '정답 칸이 없습니다');
          for (const c of b.cells) {
            if (!c.ch) fail(w, '칸에 ch 없음');
          }
        } else {
          if (!b.target) fail(w, 'target 없음');
          if (!H.glyphs.has(b.target)) fail(w, `자모 '${b.target}' 획 데이터 없음`);
          if (!(b.distractors || []).length) warn(w, '오답 후보가 없습니다');
          for (const d of b.distractors || []) {
            if (!d.relation) warn(w, `오답 후보 ${d.jamo} 에 relation 태그가 없습니다`);
          }
        }
      }
    }

    if (a.type === 'sequence') {
      const orders = (a.cuts || []).map((c) => c.order).sort((x, y) => x - y);
      const ok = orders.length >= 3 && orders.every((o, i) => o === i + 1);
      if (!ok) fail(at, `컷 순서가 1..n 이 아닙니다: [${orders}]`);
      for (const c of a.cuts || []) {
        if (!c.caption) warn(at, `컷 ${c.order} 에 캡션이 없습니다`);
        if (!c.pic) warn(at, `컷 ${c.order} 에 그림이 없습니다`);
      }
    }
  }

  if (!shortActs.length) fail(tag, '짧은 코스에 활동이 하나도 없습니다');
  else notes.push(`${tag}: 짧은 코스 활동 ${shortActs.length}개 (${shortActs.join(', ')})`);
}

// ── 그림 파일 존재 ───────────────────────────────────────────────
for (const f of [...svgs].sort()) {
  if (!existsSync(join(ROOT, 'assets/pics', f))) fail('그림', `없는 파일: assets/pics/${f}`);
}

// ── 음성 파일 커버리지 ───────────────────────────────────────────
const bank = new Set();
{
  // speak.js 가 등록한 목록을 다시 읽는다
  const src = readFileSync(join(ROOT, 'data/common/voicebank.js'), 'utf8');
  for (const m of src.matchAll(/"([0-9a-f]{8})"\s*:/g)) bank.add(m[1]);
}
const missingVoice = [];
for (const line of lines) {
  if (!line) continue;
  const k = AIYA.audio.key(line);
  if (!bank.has(k)) missingVoice.push(line);
}
if (missingVoice.length) {
  warn('음성', `미리 만든 음성이 없는 문구 ${missingVoice.length}개 ` +
    `(tools/make_tts.py 를 다시 실행하세요)`);
  for (const l of missingVoice.slice(0, 8)) warn('음성', `  ${JSON.stringify(l)}`);
}

// ── 출력 ────────────────────────────────────────────────────────
console.log(`회차 ${epKeys.length}개 · 발화 문구 ${lines.size}개 · 그림 ${svgs.size}개 · 음성 ${bank.size}개\n`);

if (notes.length) {
  console.log('참고');
  notes.forEach((n) => console.log('  ·', n));
  console.log('');
}
if (warnings.length) {
  console.log(`경고 ${warnings.length}건`);
  warnings.forEach((w) => console.log('  △', w));
  console.log('');
}
if (problems.length) {
  console.log(`오류 ${problems.length}건`);
  problems.forEach((p) => console.log('  ✗', p));
  console.log('\n검사 실패');
  process.exit(1);
}
console.log('✓ 검사 통과');
