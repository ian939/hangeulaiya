"""회차별 압축 명세 — 자막을 읽고 뽑은 사실만 담는다.

tools/gen_episodes.py 가 이걸 읽어 data/episodes/epNNN.js 를 만든다.
회차당 손으로 쓰는 건 이 명세뿐이고, 활동 8종은 여기서 파생된다.

자막 출처: work/transcripts/epNNN.txt (tools/fetch_transcript.py 로 받음)
자동 생성 자막이라 사물·장소 이름이 틀리는 경우가 있어, 확신이 없는 항목은
`uncertain` 에 적어 두었다. 영상으로 확인하면 그 항목만 고치면 된다.

── 자막을 읽고 확인한 것 (설계에 직접 반영) ──────────────────────
1. **천지·개벽은 24~60화에 전혀 나오지 않는다.** 등장 용사는 아·이·야 셋뿐이고
   포맷은 21~23화와 같다. (천지·개벽은 시즌2의 축이다.)
2. **복합 모음(40~50화)은 장소에서 찾지 않는다.** 모음 용사끼리 만나 합쳐진다.
   ㅐ=ㅏ+ㅣ, ㅘ=ㅗ+ㅏ … ㅙ·ㅞ 는 ㅐ 를 먼저 만든 뒤 2단계로 합친다.
   그래서 hunts 의 모음 항목은 place 가 없고 merge 로 표시한다.
3. **겹받침(51~60화)은 두 글자를 따로 찾지 않는다.** '받침 리을기억' 처럼
   한 덩어리로 찾아온다. 그리고 방송은 발음 규칙(읽다→[익따])을 설명하지 않고
   소리만 시범한다. **그 규칙이 이 단원의 실제 학습 내용이라 앱에서 직접 넣는다.**
"""
from __future__ import annotations

# place 에 쓸 이모지. 없으면 장면 카드가 낱말만 보여준다.
PLACE_EMOJI = {
    "타조": "🦩", "길": "🛣️", "지붕": "🏠", "김": "🍙", "벌": "🐝", "힙합": "🎤",
    "울타리": "🚧", "가로등": "💡", "징": "🥁", "냉장고": "🧊", "젖소": "🐄",
    "빗": "🪮", "윷": "🎲", "배드민턴": "🏸", "요구르트": "🥛", "새벽녘": "🌄",
    "파도": "🌊", "팥떡": "🍡", "사다리": "🪜", "짚신": "👡", "장갑": "🧤",
    "암탉": "🐔", "아몬드": "🌰",
    "종이": "📄", "만화책": "📚", "올챙이": "🐸", "국기": "🚩", "가위": "✂️",
    "돌고래": "🐬", "신발": "👟", "홍시": "🍅", "오뚝이": "🎎", "철봉": "🤸",
    "골짜기": "🏞️", "아령": "🏋️", "털실": "🧶", "안경": "👓", "논": "🌾",
    "과일": "🍎", "옥수수": "🌽", "와플": "🧇", "장난감": "🧸",
    "도미노": "🀫", "용": "🐉", "쓰레기통": "🗑️", "운동장": "🏟️", "메주": "🫘",
    "오이": "🥒", "문구점": "🏪", "돗자리": "🧺", "쪽지": "📝", "호두": "🌰",
    "선인장": "🌵", "앵무새": "🦜", "밥상": "🍚",
}

# ── 받침 단원 24~34화 ─────────────────────────────────────────
BATCHIM = [
    dict(ep=24, word="탈", jamo="받침 ㄹ",
         situation="훈민이와 정음이가 탈을 쓰고 탈춤을 추며 놀았어요.",
         problem="탈이 하나뿐이라 하나 더 필요한데, '탈' 을 쓸 줄 몰랐어요.",
         hunts=[("ㅌ", "cho", "타조", 347), ("ㄹ", "jong", "길", 472)],
         vending="탈", situation_at=150, problem_at=205, vending_at=539, grandpa_at=561,
         quiz=("끝소리", ["하회탈", "목욕탕", "각시탈"], "목욕탕", 676),
         extra=["발", "달", "물", "별"]),

    dict(ep=25, word="잠", jamo="받침 ㅁ",
         situation="훈민이와 정음이가 마당에서 캠핑을 하며 밤늦게까지 놀았어요.",
         problem="훈민이는 자꾸 잠들고 정음이는 잠이 오지 않았어요. '잠' 을 쓸 줄 몰랐어요.",
         hunts=[("ㅈ", "cho", "지붕", 339), ("ㅁ", "jong", "김", 459)],
         vending="곰", situation_at=131, problem_at=239, vending_at=524, grandpa_at=567,
         quiz=("첫소리", ["장난감", "잠수함", "잠꼬대"], "장난감", 679),
         extra=["곰", "밤", "봄", "김"]),

    dict(ep=26, word="밥", jamo="받침 ㅂ",
         situation="훈민이와 정음이가 밥을 꼭꼭 씹어 맛있게 먹었어요.",
         problem="배고픈 악어에게 줄 밥이 필요한데, '밥' 을 쓸 줄 몰랐어요.",
         hunts=[("ㅂ", "cho", "벌", 296), ("ㅂ", "jong", "힙합", 459)],
         vending="밥", situation_at=108, problem_at=178, vending_at=518, grandpa_at=556,
         quiz=("끝소리", ["콩밥", "수박", "초밥"], "수박", 679),
         extra=["집", "컵", "입", "김밥"]),

    dict(ep=27, word="옷", jamo="받침 ㅅ",
         situation="유치원에 가려고 정음이가 좋아하는 옷을 골랐어요.",
         problem="좋아하는 옷을 몽땅 겹쳐 입어 버렸어요. '옷' 을 쓸 줄 몰랐어요.",
         hunts=[("ㅇ", "cho", "울타리", 337), ("ㅅ", "jong", None, 465)],
         vending="옷", situation_at=110, problem_at=233, vending_at=525, grandpa_at=593,
         quiz=("끝소리", ["비옷", "시옷", "기온"], "기온", 705),
         extra=["붓", "빗"], uncertain=["받침 ㅅ 을 찾은 장소"]),

    dict(ep=28, word="공", jamo="받침 ㅇ",
         situation="훈민이와 정음이가 골키퍼와 공격수를 정하고 축구를 하려 했어요.",
         problem="털실 뭉치는 잘 굴러가지 않았어요. 진짜 공이 필요한데 '공' 을 쓸 줄 몰랐어요.",
         hunts=[("ㄱ", "cho", "가로등", 306), ("ㅇ", "jong", "징", 437)],
         vending="공", situation_at=115, problem_at=189, vending_at=504, grandpa_at=532,
         quiz=("끝소리", ["야구공", "북극곰", "농구공"], "북극곰", 655),
         extra=["콩", "빵", "종", "강"]),

    dict(ep=29, word="낮", jamo="받침 ㅈ",
         situation="잘 시간인데 훈민이와 정음이가 마당에서 더 놀고 싶었어요.",
         problem="밤이라 너무 어두워서 아무것도 안 보였어요. '낮' 을 쓸 줄 몰랐어요.",
         hunts=[("ㄴ", "cho", "냉장고", 359), ("ㅈ", "jong", "젖소", 490)],
         vending="낮", situation_at=108, problem_at=234, vending_at=578, grandpa_at=608,
         quiz=("끝소리", ["대낮", "밤낮", "맨날"], "맨날", 746),
         extra=["낮"]),

    dict(ep=30, word="빛", jamo="받침 ㅊ",
         situation="훈민이와 정음이가 손전등 빛으로 그림자 놀이를 했어요.",
         problem="손전등이 고장 나서 빛이 사라졌어요. '빛' 은 너무 어려운 글자였어요.",
         hunts=[("ㅂ", "cho", "빗", 340), ("ㅊ", "jong", "윷", 482)],
         vending="손전등", situation_at=111, problem_at=217, vending_at=543, grandpa_at=557,
         quiz=("첫소리", ["빛깔", "빈틈", "빈손"], "빛깔", 681),
         extra=["꽃", "빛"]),

    dict(ep=31, word="부엌", jamo="받침 ㅋ",
         situation="훈민이와 정음이가 한쪽을 부엌으로 정하고 요리 놀이를 했어요.",
         problem="'부엌' 이라고 크게 써 두려는데 글자가 어려웠어요.",
         hunts=[("ㅂ", "cho", "배드민턴", 289), ("ㅇ", "cho", "요구르트", 384),
                ("ㅋ", "jong", "새벽녘", 529)],
         vending="이름표", situation_at=107, problem_at=178, vending_at=606, grandpa_at=614,
         quiz=None, extra=["부엌"]),

    dict(ep=32, word="팥", jamo="받침 ㅌ",
         situation="할아버지가 끓여 주신 팥으로 팥빙수를 만들어 먹었어요.",
         problem="할아버지 것도 만들려는데 팥을 다 먹어 버렸어요. '팥' 을 쓸 줄 몰랐어요.",
         hunts=[("ㅍ", "cho", "파도", 361), ("ㅌ", "jong", "팥떡", 496)],
         vending="팥", situation_at=127, problem_at=244, vending_at=560, grandpa_at=570,
         quiz=("첫소리", ["팥죽", "팥떡", "팔찌"], "팔찌", 702),
         extra=["팥", "밭"]),

    dict(ep=33, word="숲", jamo="받침 ㅍ",
         situation="새가 날아가 버려서 훈민이와 정음이가 나무 흉내를 내며 새를 불렀어요.",
         problem="나무가 두 그루뿐이라 새가 오지 않았어요. '숲' 은 어려운 글자였어요.",
         hunts=[("ㅅ", "cho", "사다리", 294), ("ㅍ", "jong", "짚신", 441)],
         vending="숲", situation_at=158, problem_at=193, vending_at=497, grandpa_at=514,
         quiz=("첫소리", ["숲속", "숲길", "순례"], "순례", 634),
         extra=["숲", "잎"]),

    dict(ep=34, word="좋아", jamo="받침 ㅎ",
         situation="훈민이와 정음이가 상자에서 좋아하는 것을 꺼내며 놀았어요.",
         problem="'좋아' 를 어떻게 쓰는지 궁금해졌어요.",
         hunts=[("ㅈ", "cho", "장갑", 282), ("ㅎ", "jong", "암탉", 398),
                ("ㅇ", "cho", "아몬드", 481)],
         vending="거울", situation_at=104, problem_at=192, vending_at=561, grandpa_at=578,
         quiz=None, extra=["좋아"], uncertain=["받침 ㅎ 을 찾은 장소"]),
]

# ── 복합 모음 단원 40~50화 ────────────────────────────────────
# merge=(왼쪽, 오른쪽) — 모음 용사끼리 합쳐지는 연출. 장소에서 찾지 않는다.
VOWEL = [
    dict(ep=40, word="재미", jamo="ㅐ", merge=("ㅏ", "ㅣ"),
         situation="훈민이와 정음이가 재미있는 놀이를 찾고 싶었어요.",
         problem="'재미' 를 쓰려는데 어떻게 쓰는지 몰랐어요.",
         hunts=[("ㅈ", "cho", "종이", 296), ("ㅐ", "merge", None, 309),
                ("ㅁ", "cho", "만화책", 465)],
         vending="비눗방울", situation_at=176, problem_at=188, vending_at=526, grandpa_at=567,
         quiz=("첫소리", ["재미", "재주", "자주"], "자주", 682),
         extra=["개미", "매미"]),

    dict(ep=41, word="얘", jamo="ㅒ", merge=("ㅑ", "ㅣ"),
         situation="훈민이와 정음이가 파티를 열고 친구들을 부르려 했어요.",
         problem="멀리 있는 친구들을 부르려는데 '얘' 를 쓸 줄 몰랐어요.",
         hunts=[("ㅇ", "cho", "올챙이", 359), ("ㅒ", "merge", None, 391)],
         vending="친구들", situation_at=111, problem_at=253, vending_at=511, grandpa_at=572,
         quiz=("첫소리", ["얘들아", "위험해", "얘기해"], "위험해", 683),
         extra=["얘"]),

    dict(ep=42, word="게", jamo="ㅔ", merge=("ㅓ", "ㅣ"),
         situation="훈민이와 정음이가 게처럼 옆으로 걷는 시합을 하려 했어요.",
         problem="게가 어떻게 걷는지 보려는데 '게' 를 쓸 줄 몰랐어요.",
         hunts=[("ㄱ", "cho", "국기", 288), ("ㅔ", "merge", None, 304)],
         vending="게", situation_at=110, problem_at=179, vending_at=419, grandpa_at=461,
         quiz=("끝소리", ["가게", "무게", "방귀"], "방귀", 588),
         extra=["게", "네"]),

    dict(ep=43, word="계단", jamo="ㅖ", merge=("ㅕ", "ㅣ"),
         situation="나무에 걸린 풍선을 꺼내려고 올라갈 계단이 필요했어요.",
         problem="'계단' 을 써야 하는데 둘 다 쓸 줄 몰랐어요.",
         hunts=[("ㄱ", "cho", "가위", 252), ("ㅖ", "merge", None, 269),
                ("ㄷ", "cho", "돌고래", 429), ("ㄴ", "jong", "신발", 569)],
         vending="계단", situation_at=120, problem_at=139, vending_at=634, grandpa_at=691,
         quiz=("첫소리", ["거울", "계단", "계절"], "거울", 816),
         extra=["계단", "시계"]),

    dict(ep=44, word="화", jamo="ㅘ", merge=("ㅗ", "ㅏ"),
         situation="컵을 높이 쌓다가 탑이 무너져서 훈민이가 화가 났어요.",
         problem="훈민이의 화를 풀어 주려는데 '화' 를 쓸 줄 몰랐어요.",
         hunts=[("ㅎ", "cho", "홍시", 295), ("ㅘ", "merge", None, 307)],
         vending="편지지", situation_at=116, problem_at=208, vending_at=443, grandpa_at=579,
         quiz=("첫소리", ["하늘", "화분", "화가"], "하늘", 709),
         extra=["화분", "사과"]),

    dict(ep=45, word="왜", jamo="ㅙ", merge=("ㅗ", "ㅐ"),
         situation="악어가 한글을 꿀꺽 먹는 걸 보고 몹시 궁금해졌어요.",
         problem="'왜' 그럴까 알아보려는데 그 글자를 쓸 줄 몰랐어요.",
         hunts=[("ㅇ", "cho", "오뚝이", 315), ("ㅙ", "merge", None, 340)],
         vending="악어", situation_at=176, problem_at=208, vending_at=474, grandpa_at=505,
         quiz=("첫소리", ["왜가리", "애호박", "애벌레"], "왜가리", 606),
         extra=["왜"], uncertain=["ㅇ 을 찾은 장소"]),

    dict(ep=46, word="최고", jamo="ㅚ", merge=("ㅗ", "ㅣ"),
         situation="훈민이와 정음이가 서로 최고로 잘하는 것을 자랑했어요.",
         problem="둘이 최고라고 알리려는데 '최고' 를 쓸 줄 몰랐어요.",
         hunts=[("ㅊ", "cho", "철봉", 305), ("ㅚ", "merge", None, 326),
                ("ㄱ", "cho", "골짜기", 504)],
         vending="이름표", situation_at=120, problem_at=220, vending_at=563, grandpa_at=592,
         quiz=("첫소리", ["취소", "최고", "최선"], "취소", 708),
         extra=["최고", "회의"]),

    dict(ep=47, word="월", jamo="ㅝ", merge=("ㅜ", "ㅓ"),
         situation="달력에 생일을 표시하고 초대장을 만들려 했어요.",
         problem="초대장에 날짜를 쓰려는데 '월' 이 너무 어려웠어요.",
         hunts=[("ㅇ", "cho", "아령", 352), ("ㅝ", "merge", None, 368),
                ("ㄹ", "jong", "털실", 588)],
         vending="초대장", situation_at=113, problem_at=234, vending_at=644, grandpa_at=672,
         quiz=("끝소리", ["더워", "더위", "추워"], "더위", 786),
         extra=["월", "원"]),

    dict(ep=48, word="웬일", jamo="ㅞ", merge=("ㅜ", "ㅐ"),
         situation="훈민이와 정음이가 머리를 콩 부딪히고 아이야를 불렀어요.",
         problem="'웬일' 이라는 말을 쓰고 싶은데 너무 어려웠어요.",
         hunts=[("ㅇ", "cho", "안경", 233), ("ㅞ", "merge", None, 259),
                ("ㄴ", "jong", "논", 453), ("ㄹ", "jong", "과일", 508)],
         vending="선물", situation_at=120, problem_at=172, vending_at=570, grandpa_at=626,
         quiz=("첫소리", ["웬일", "완두콩", "완성"], "웬일", 736),
         extra=["웬일"], uncertain=["받침 ㄴ 을 찾은 장소", "자판기 결과물"]),

    dict(ep=49, word="위", jamo="ㅟ", merge=("ㅜ", "ㅣ"),
         situation="정음이가 이 용사처럼 하늘 위로 날아오르고 싶었어요.",
         problem="'위' 카드를 만들려는데 어떻게 쓰는지 몰랐어요.",
         hunts=[("ㅇ", "cho", "옥수수", 294), ("ㅟ", "merge", None, 305)],
         vending=None, situation_at=147, problem_at=188, vending_at=433, grandpa_at=485,
         quiz=None, extra=["위", "귀", "쥐"], uncertain=["자판기 결과물"]),

    dict(ep=50, word="의자", jamo="ㅢ", merge=("ㅡ", "ㅣ"),
         situation="유치원에서 선생님이 책을 읽어 주는데 정음이도 앉고 싶었어요.",
         problem="의자가 모자랐어요. '의자' 는 어려운 글자였어요.",
         hunts=[("ㅇ", "cho", "와플", 313), ("ㅢ", "merge", None, 347),
                ("ㅈ", "cho", "장난감", 518)],
         vending="의자", situation_at=155, problem_at=207, vending_at=583, grandpa_at=624,
         quiz=None, extra=["의자", "의사"]),
]

# ── 겹받침 단원 51~60화 ──────────────────────────────────────
# say=실제 발음. 방송은 규칙을 설명하지 않으므로 앱에서 직접 가르친다.
CLUSTER = [
    dict(ep=51, word="닦다", jamo="받침 ㄲ", say="닥따", keep="ㄱ",
         situation="훈민이와 정음이가 걸레로 탁자와 거울을 반짝반짝 닦았어요.",
         problem="높은 곳에 손이 닿지 않았어요. '닦다' 를 쓸 줄 몰랐어요.",
         hunts=[("ㄷ", "cho", "도미노", 343), ("ㄲ", "jong", None, 588)],
         vending="기다란 걸레", situation_at=117, problem_at=212, vending_at=666, grandpa_at=682,
         extra=["깎다", "닦다"]),

    dict(ep=52, word="있다", jamo="받침 ㅆ", say="읻따", keep="ㄷ",
         situation="훈민이가 숨긴 물건을 정음이가 하나씩 찾는 놀이를 했어요.",
         problem="마지막 물건이 너무 작아서 안 보였어요. '있다' 의 받침을 쓸 줄 몰랐어요.",
         hunts=[("ㅇ", "cho", "용", 366), ("ㅆ", "jong", "쓰레기통", 517)],
         vending="찾아 주는 도우미", situation_at=105, problem_at=209, vending_at=584, grandpa_at=646,
         extra=["있다", "왔다"]),

    dict(ep=53, word="앉다", jamo="받침 ㄵ", say="안따", keep="ㄴ",
         situation="훈민이와 정음이가 앉아서 책을 보며 강아지도 불렀어요.",
         problem="강아지가 앉지 않았어요. '앉다' 를 쓸 줄 몰랐어요.",
         hunts=[("ㅇ", "cho", "운동장", 328), ("ㄵ", "jong", None, 565)],
         vending="강아지 간식", situation_at=118, problem_at=185, vending_at=642, grandpa_at=663,
         extra=["앉다", "얹다"]),

    dict(ep=54, word="많다", jamo="받침 ㄶ", say="만타", keep="ㄴ",
         situation="할아버지가 주신 과자로 파티를 하고 과자로 집을 지었어요.",
         problem="지붕을 만들기 전에 과자를 다 먹어 버렸어요. '많다' 를 쓸 줄 몰랐어요.",
         hunts=[("ㅁ", "cho", "메주", 401), ("ㄶ", "jong", None, 558)],
         vending="과자 상자", situation_at=198, problem_at=267, vending_at=627, grandpa_at=650,
         extra=["많다", "끊다"]),

    dict(ep=55, word="읽다", jamo="받침 ㄺ", say="익따", keep="ㄱ",
         situation="글자 읽기가 재미있어서 훈민이와 정음이가 그림책을 펴 봤어요.",
         problem="책의 글씨가 잘 안 보여서 읽을 수 없었어요. '읽다' 를 쓸 줄 몰랐어요.",
         hunts=[("ㅇ", "cho", "오이", 389), ("ㄺ", "jong", "문구점", 572)],
         vending="물감", situation_at=199, problem_at=242, vending_at=641, grandpa_at=677,
         extra=["읽다", "맑다", "굵다"]),

    dict(ep=56, word="닮다", jamo="받침 ㄻ", say="담따", keep="ㅁ",
         situation="쌍둥이인 훈민이와 정음이가 서로 닮은 곳을 찾아봤어요.",
         problem="눈썹과 귀 말고는 더 못 찾겠어요. '닮다' 를 쓸 줄 몰랐어요.",
         hunts=[("ㄷ", "cho", "돗자리", 370), ("ㄻ", "jong", None, 547)],
         vending="깜짝 선물", situation_at=101, problem_at=179, vending_at=602, grandpa_at=618,
         extra=["닮다", "옮기다"]),

    dict(ep=57, word="짧다", jamo="받침 ㄼ", say="짤따", keep="ㄹ",
         situation="훈민이와 정음이가 줄넘기를 하려고 줄을 들었어요.",
         problem="줄이 너무 길어서 잘 안 넘어갔어요. '짧다' 를 쓸 줄 몰랐어요.",
         hunts=[("ㅉ", "cho", "쪽지", 328), ("ㄼ", "jong", None, 489)],
         vending="짧은 줄넘기", situation_at=109, problem_at=145, vending_at=559, grandpa_at=597,
         extra=["짧다", "얇다", "넓다"]),

    dict(ep=58, word="핥다", jamo="받침 ㄾ", say="할따", keep="ㄹ",
         situation="훈민이와 정음이가 과자와 찰떡을 혀로 핥아 먹었어요.",
         problem="먹을 게 다 없어졌어요. '핥다' 는 너무 어려운 글자였어요.",
         hunts=[("ㅎ", "cho", "호두", 338), ("ㄾ", "jong", None, 504)],
         vending="막대사탕", situation_at=110, problem_at=184, vending_at=578, grandpa_at=590,
         extra=["핥다", "훑다"]),

    dict(ep=59, word="싫다", jamo="받침 ㅀ", say="실타", keep="ㄹ",
         situation="훈민이가 책을 읽는데 정음이가 옆에서 자꾸 장난을 쳤어요.",
         problem="싫다고 말하고 싶은데 '싫다' 를 쓸 줄 몰랐어요.",
         hunts=[("ㅅ", "cho", "선인장", 350), ("ㅀ", "jong", None, 519)],
         vending="용기", situation_at=114, problem_at=207, vending_at=584, grandpa_at=637,
         extra=["싫다", "옳다", "끓다"]),

    dict(ep=60, word="없다", jamo="받침 ㅄ", say="업따", keep="ㅂ",
         situation="정음이가 마술사가 되어 모자와 인형을 하나씩 사라지게 했어요.",
         problem="훈민이도 해보고 싶은데 '없다' 를 쓸 줄 몰랐어요.",
         hunts=[("ㅇ", "cho", "앵무새", 394), ("ㅄ", "jong", "밥상", 582)],
         vending="마술 보자기", situation_at=107, problem_at=260, vending_at=661, grandpa_at=685,
         extra=["없다", "값"]),
]

ALL_SPECS = BATCHIM + VOWEL + CLUSTER
