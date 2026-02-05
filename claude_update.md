# Claude Update Log - Cosmic Theme & Stars Implementation

## 최근 업데이트 날짜: 2026-02-05

## 주요 변경사항 요약

이 문서는 블로그에 추가된 우주 테마 효과(별, 유성)와 관련 기능들의 구현 내역을 정리합니다.

---

## 1. 별과 유성 효과 구현 (Cosmic Theme)

### 1.1 배경 별 구현 (CSS box-shadow 기법)

**위치**: `css/style.css`

- **body::before**: 80개의 작은 별 (1-3px 크기)
- **body::after**: 30개의 큰 별 (2-5px 크기, 보라/파란색 톤)

```css
body::before {
    content: '';
    position: fixed;
    width: 1px;
    height: 1px;
    background: white;
    border-radius: 50%;
    z-index: 0;
    opacity: 1;
    transition: opacity 1s ease-out;
    animation: twinkle 4s ease-in-out infinite;
    box-shadow: [80개의 별 좌표];
}

body::after {
    content: '';
    position: fixed;
    width: 2px;
    height: 2px;
    background: white;
    border-radius: 50%;
    z-index: 0;
    opacity: 1;
    transition: opacity 1s ease-out;
    animation: twinkle 6s ease-in-out infinite alternate;
    box-shadow: [30개의 큰 별 좌표];
}
```

**핵심 포인트**:
- box-shadow를 사용하여 여러 개의 별을 하나의 요소로 렌더링 (성능 최적화)
- twinkle 애니메이션으로 반짝이는 효과
- width/height을 1px/2px로 설정하여 box-shadow가 제대로 렌더링되도록 함

### 1.2 유성 효과 구현 (Velog 블로그 기반)

**위치**: `css/style.css`, `js/main.js`

**HTML 구조**:
```html
<div id="shooting-stars" class="shooting-stars">
    <!-- JavaScript로 동적 생성 -->
</div>
```

**CSS**:
```css
.shooting-stars {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 1;
    transition: opacity 1s ease-out;
}

.shooting-star {
    position: absolute;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0px 0px 10px 3px rgba(255, 255, 255, 0.9);
    animation: meteor 3s ease-in infinite;
    opacity: 0;
    transition: opacity 1s ease-out;
}

.shooting-star::after {
    content: '';
    position: absolute;
    width: 2000%;
    height: 2px;
    background: linear-gradient(to left, #fff0, #ffffff);
    transform: rotateZ(-45deg) translateX(50%);
    transition: opacity 1s ease-out;
}

@keyframes meteor {
    0% {
        top: -10vh;
        transform: translateX(0px);
        opacity: 1;
    }
    100% {
        top: 110vh;
        transform: translateX(-120vh);
        opacity: 1;
    }
}
```

**JavaScript 구현** (`js/main.js`):
```javascript
function initializeMeteors() {
    const colors = ["#c77eff", "#f6ff7e", "#ff8d7e", "#ffffff"];
    const meteorCount = 12;
    const container = document.getElementById('shooting-stars');

    for (let i = 0; i < meteorCount; i++) {
        const meteor = document.createElement('div');
        meteor.className = 'shooting-star';

        const size = Math.random() * 2 + 1;
        const left = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = Math.random() * 4 + 2;

        meteor.style.width = `${size}px`;
        meteor.style.height = `${size}px`;
        meteor.style.left = `${left}%`;
        meteor.style.animationDelay = `${delay}s`;
        meteor.style.animationDuration = `${duration}s`;

        container.appendChild(meteor);
    }
}
```

---

## 2. 별 토글 기능 구현

### 2.1 UI 추가

**위치**: `index.html`

네비게이션 바에 별 토글 버튼 추가:
```html
<button id="stars-toggle" class="stars-toggle" aria-label="Toggle stars and meteors">
    ⭐
</button>
```

**버튼 순서**: 🎨 (팔레트) → ⭐ (별 토글) → 🌙 (다크모드)

### 2.2 JavaScript 로직

**위치**: `js/main.js`

```javascript
// 별 토글 함수
function toggleStars() {
    const body = document.body;
    const isHidden = body.classList.contains('stars-hidden');

    if (isHidden) {
        body.classList.remove('stars-hidden');
        localStorage.setItem('starsVisible', 'true');
    } else {
        body.classList.add('stars-hidden');
        localStorage.setItem('starsVisible', 'false');
    }

    updateStarsIcon(!isHidden);
}

// 아이콘 업데이트 (클릭 시 동작을 표시)
function updateStarsIcon(isVisible) {
    const starsToggle = document.getElementById('stars-toggle');
    if (starsToggle) {
        // 별이 보이면 🌑(숨기기), 안 보이면 ⭐(보이기)
        starsToggle.textContent = isVisible ? '🌑' : '⭐';
    }
}

// 별 표시 설정 로드
function loadStarsPreference() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const savedStarsVisible = localStorage.getItem('starsVisible');

    let starsVisible;

    if (savedStarsVisible !== null) {
        starsVisible = savedStarsVisible === 'true';
    } else {
        // 기본값: light 모드에서는 숨김, dark 모드에서는 표시
        starsVisible = currentTheme === 'dark';
    }

    if (starsVisible) {
        document.body.classList.remove('stars-hidden');
    } else {
        document.body.classList.add('stars-hidden');
    }

    updateStarsIcon(starsVisible);
}

// 테마 변경 시 별 표시 자동 조정
function checkStarsForTheme(theme) {
    if (localStorage.getItem('starsVisible') === null) {
        if (theme === 'light') {
            document.body.classList.add('stars-hidden');
            updateStarsIcon(false);
        } else {
            document.body.classList.remove('stars-hidden');
            updateStarsIcon(true);
        }
    }
}
```

### 2.3 CSS 애니메이션 (Fadeout/Fadein)

**위치**: `css/style.css`

```css
/* 별이 숨겨진 상태 */
body.stars-hidden::before,
body.stars-hidden::after {
    opacity: 0 !important;
    pointer-events: none;
    animation: none !important; /* 반짝이는 애니메이션도 멈춤 */
}

body.stars-hidden .shooting-stars {
    opacity: 0 !important;
    pointer-events: none;
}

body.stars-hidden .shooting-star {
    opacity: 0 !important;
    animation: none !important; /* 유성 애니메이션도 멈춤 */
}

body.stars-hidden .shooting-star::after {
    opacity: 0 !important; /* 유성 꼬리도 함께 숨김 */
}
```

**핵심 포인트**:
- `transition: opacity 1s ease-out`으로 부드러운 fadeout/fadein
- `animation: none !important`로 twinkle과 meteor 애니메이션 중지
- `!important`로 애니메이션이 opacity를 덮어쓰지 못하도록 방지

### 2.4 이벤트 리스너 설정

**위치**: `js/main.js`

```javascript
document.addEventListener('DOMContentLoaded', async () => {
    // 유성 효과 초기화
    initializeMeteors();

    // 테마 설정 로드
    loadThemePreference();

    // 별 표시 설정 로드
    loadStarsPreference();

    // 이벤트 리스너 조기 설정 (데이터 로딩 전)
    setupEventListeners();

    // 데이터 로드
    await loadAllData();

    // 앱 초기화
    initializeApp();
});

function setupEventListeners() {
    // 별 토글 버튼
    const starsToggle = document.getElementById('stars-toggle');
    if (starsToggle) {
        starsToggle.addEventListener('click', toggleStars);
    }

    // ... 다른 이벤트 리스너들
}
```

**중요**: `setupEventListeners()`를 데이터 로딩 전에 호출하여 버튼이 항상 작동하도록 보장

---

## 3. UI/UX 개선사항

### 3.1 네비게이션 바 변경

**위치**: `index.html`

- **News 링크 제거**: 네비게이션 바에서 News 링크 제거 (실제 News 섹션은 유지)
- 네비게이션 항목: About → Publications → Projects → Posts → CV

### 3.2 섹션 레이아웃 조정

**위치**: `css/style.css`

```css
/* About 섹션 하단 여백 축소 */
#about.section {
    padding-bottom: var(--spacing-lg);
}

/* Research Interests 섹션 회색 배경 제거 */
#research.section {
    padding: var(--spacing-lg) 0;
}
```

**변경사항**:
- About 섹션의 하단 여백 축소 (padding-bottom)
- Research Interests 섹션의 section-gray 클래스 제거

---

## 4. 성능 최적화

### 4.1 별 개수 최적화

- **초기 설정**: 120개 작은 별 + 40개 큰 별
- **최적화 후**: 80개 작은 별 + 30개 큰 별
- **이유**: 렉 감소 및 성능 향상

### 4.2 CSS 최적화

- **shadowBlur 제거**: box-shadow에서 blur 값 최소화
- **z-sorting 제거**: 별 렌더링 시 z-index 정렬 제거
- **애니메이션 최적화**: 불필요한 per-frame 계산 제거

### 4.3 JavaScript 최적화

```javascript
// setupEventListeners()를 데이터 로딩 전에 호출
document.addEventListener('DOMContentLoaded', async () => {
    initializeMeteors();
    loadThemePreference();
    loadStarsPreference();
    setupEventListeners(); // ← 여기서 먼저 호출
    await loadAllData();
    initializeApp(); // setupEventListeners() 호출 제거
});
```

**효과**: 데이터 로딩 지연과 무관하게 버튼이 즉시 작동

---

## 5. 버그 수정 내역

### 5.1 별 토글 버튼 간헐적 오작동

**문제**: 버튼이 가끔 작동하지 않음
**원인**: `setupEventListeners()`가 `loadAllData()` 이후에만 호출되어, 데이터 로딩 실패 시 이벤트 리스너가 등록되지 않음
**해결**: `setupEventListeners()`를 데이터 로딩 전에 호출

### 5.2 배경 별이 사라지지 않는 문제

**문제**: 별 토글 시 유성은 사라지지만 배경 별은 그대로 남음
**원인**: `body::before`와 `body::after`의 `twinkle` 애니메이션이 opacity를 계속 변경
**해결**: `body.stars-hidden::before, body.stars-hidden::after`에 `animation: none !important` 추가

```css
body.stars-hidden::before,
body.stars-hidden::after {
    opacity: 0 !important;
    animation: none !important; /* 핵심 수정 */
}
```

### 5.3 유성 꼬리가 사라지지 않는 문제

**문제**: 유성 본체는 사라지지만 꼬리는 보임
**원인**: `.shooting-star::after`에 대한 fadeout 처리 누락
**해결**:
```css
body.stars-hidden .shooting-star::after {
    opacity: 0 !important;
}

.shooting-star::after {
    transition: opacity 1s ease-out;
}
```

### 5.4 아이콘 의미 반전

**문제**: 아이콘이 "현재 상태"를 표시하여 직관적이지 않음
**원인**: `updateStarsIcon(isVisible)`에서 `isVisible ? '⭐' : '🌑'`
**해결**: 아이콘이 "클릭 시 동작"을 표시하도록 반전
```javascript
starsToggle.textContent = isVisible ? '🌑' : '⭐';
// 별이 보이면 🌑(숨기기 버튼), 안 보이면 ⭐(보이기 버튼)
```

---

## 6. 파일 구조

```
new_blog/
├── index.html                 # 별 토글 버튼 추가, News 링크 제거
├── css/
│   └── style.css             # 별, 유성, fadeout 스타일 정의
├── js/
│   └── main.js               # 유성 초기화, 별 토글 로직
├── data/
│   ├── profile.json
│   ├── publications.json
│   ├── news.json             # News 데이터 (컨텐츠는 유지)
│   ├── projects.json
│   ├── posts.json
│   ├── authors.json
│   └── themes.json
└── assets/
    └── Seongsu_Kim_CV.pdf
```

---

## 7. 주요 함수 및 메서드

### JavaScript (js/main.js)

| 함수명 | 설명 |
|--------|------|
| `initializeMeteors()` | 유성 효과 초기화 및 DOM 생성 |
| `toggleStars()` | 별과 유성 표시/숨김 토글 |
| `updateStarsIcon(isVisible)` | 토글 버튼 아이콘 업데이트 |
| `loadStarsPreference()` | localStorage에서 별 표시 설정 로드 |
| `checkStarsForTheme(theme)` | 테마 변경 시 별 표시 자동 조정 |

### CSS Animations

| 애니메이션명 | 설명 |
|-------------|------|
| `twinkle` | 별 반짝임 효과 (opacity 0.3 ↔ 1) |
| `meteor` | 유성 떨어지는 효과 (45도 대각선) |

---

## 8. 트러블슈팅 가이드

### 문제: 별이 전혀 보이지 않음
- **확인사항**:
  1. body::before와 body::after의 width/height이 1px/2px인지 확인
  2. background: white와 border-radius: 50% 설정 확인
  3. z-index: 0 설정 확인
- **해결**: box-shadow는 기본 요소가 1px 이상이어야 제대로 렌더링됨

### 문제: 별 토글이 작동하지 않음
- **확인사항**:
  1. setupEventListeners()가 DOMContentLoaded에서 호출되는지 확인
  2. 브라우저 콘솔에서 에러 확인
  3. stars-toggle 버튼이 HTML에 존재하는지 확인
- **해결**: setupEventListeners()를 데이터 로딩 전에 호출

### 문제: 별이 일부만 사라짐
- **확인사항**:
  1. body.stars-hidden::before, ::after에 animation: none !important 있는지 확인
  2. body.stars-hidden .shooting-star::after에 opacity: 0 !important 있는지 확인
- **해결**: 모든 별 관련 요소에 animation 중지 및 opacity 제어 적용

---

## 9. 향후 개선 가능 사항

1. **성능 최적화**
   - requestAnimationFrame을 사용한 유성 애니메이션 최적화
   - Intersection Observer로 viewport 밖의 유성 비활성화

2. **시각 효과 개선**
   - 별똥별이 떨어질 때 파티클 효과 추가
   - 마우스 움직임에 따라 별이 미세하게 움직이는 효과

3. **사용자 설정**
   - 유성 개수 조절 옵션
   - 별 색상 테마 선택 옵션
   - 애니메이션 속도 조절

4. **접근성**
   - prefers-reduced-motion 미디어 쿼리 적용
   - 스크린 리더를 위한 ARIA 레이블 개선

---

## 10. 참고 자료

- **원본 블로그**: [Velog - 유성 배경효과를 만들어 보기](https://velog.io/@dnrgus1127/%EC%9C%A0%EC%84%B1-%EB%B0%B0%EA%B2%BD%ED%9A%A8%EA%B3%BC%EB%A5%BC-%EB%A7%8C%EB%93%A4%EC%96%B4-%EB%B3%B4%EA%B8%B0)
- **box-shadow 기법**: 하나의 요소로 여러 개의 그림자를 만들어 성능 최적화
- **CSS 애니메이션**: transition과 @keyframes를 조합한 부드러운 효과

---

## 변경 이력

| 날짜 | 버전 | 변경 내역 |
|------|------|----------|
| 2026-02-05 | 1.0 | 초기 구현: 별, 유성 효과 및 토글 기능 |

---

**작성자**: Claude (Anthropic)
**문서 버전**: 1.0
**최종 업데이트**: 2026-02-05
