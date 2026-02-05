# 🔧 유지보수 가이드

이 문서는 향후 Claude 세션 또는 개발자가 사이트를 유지보수할 때 필요한 모든 정보를 담고 있습니다.

## 📋 목차
1. [프로젝트 개요](#프로젝트-개요)
2. [파일 구조](#파일-구조)
3. [일반적인 작업](#일반적인-작업)
4. [데이터 스키마](#데이터-스키마)
5. [테마 시스템](#테마-시스템)
6. [문제 해결](#문제-해결)
7. [배포](#배포)

---

## 프로젝트 개요

### 기술 스택
- **프론트엔드**: 순수 HTML/CSS/JavaScript (프레임워크 없음)
- **데이터 관리**: JSON 파일
- **스타일링**: CSS Variables (테마 지원)
- **배포**: 정적 사이트 (GitHub Pages, Netlify, Vercel)

### 핵심 원칙
1. **JSON 기반**: 모든 콘텐츠는 `data/` 폴더의 JSON 파일로 관리
2. **모듈화**: 각 섹션(Publications, News 등)은 독립적
3. **테마 지원**: CSS Variables로 6가지 테마 제공
4. **반응형**: 모바일 우선 디자인

### 주요 기능
- 6가지 테마 (Dark/Light)
- BibTeX 인용 (.bib 파일)
- Markdown 뉴스
- 클릭 가능한 저자 링크
- PDF 파일 관리
- Markdown 블로그 포스트

---

## 파일 구조

### 핵심 파일

```
new_blog/
├── index.html          # 메인 페이지 (섹션 구조)
├── css/style.css       # 모든 스타일 (CSS Variables)
├── js/main.js          # 동적 로딩 및 렌더링
│
├── data/               # 📊 모든 콘텐츠
│   ├── profile.json
│   ├── publications.json
│   ├── news.json
│   ├── posts.json
│   ├── projects.json
│   ├── authors.json
│   ├── themes.json
│   └── bibtex/         # BibTeX 파일들
│
├── assets/
│   ├── profile.jpg
│   ├── Seongsu_Kim_CV.pdf
│   └── pdf/            # 슬라이드, 포스터 등
│
└── posts/              # 블로그 포스트
```

### 문서 파일

| 파일 | 용도 |
|------|------|
| `README.md` | 프로젝트 개요 및 빠른 시작 |
| `claude_update.md` | 전체 변경 내역 (세션 복구용) |
| `MAINTENANCE.md` | 이 파일 (유지보수 가이드) |
| `BIBTEX_GUIDE.md` | BibTeX 관리 방법 |
| `NEWS_MARKDOWN_GUIDE.md` | News Markdown 사용법 |
| `PDF_MANAGEMENT_GUIDE.md` | PDF 파일 관리 |
| `POSTS_GUIDE.md` | 블로그 포스트 작성 |
| `COLOR_THEMES.md` | 테마 커스터마이징 |
| `DEPLOYMENT_GUIDE.md` | 배포 방법 |

---

## 일반적인 작업

### 1. 논문 추가

**단계**:
1. `data/publications.json` 업데이트
2. `data/bibtex/paper_id.bib` 생성 (선택)
3. 슬라이드 있으면 `assets/pdf/` 추가
4. `data/news.json`에 뉴스 추가

**예시**:
```json
// data/publications.json
{
  "id": "kim2026new",
  "title": "New Paper Title",
  "authors": ["Seongsu Kim", "Co-author"],
  "author_ids": ["seongsu-kim", "coauthor-id"],
  "venue": "Conference Name",
  "year": 2026,
  "type": "conference",
  "award": "Spotlight",
  "selected": true,
  "keywords": ["Keyword1", "Keyword2"],
  "links": {
    "pdf": "https://arxiv.org/abs/...",
    "code": "https://github.com/...",
    "slides": "assets/pdf/slides.pdf"
  },
  "bibtex_file": "data/bibtex/kim2026new.bib"
}
```

### 2. 뉴스 추가

**위치**: `data/news.json` (최상단에 추가)

**예시**:
```json
{
  "id": "news2026",
  "date": "2026-02-03",
  "title": "Paper Accepted",
  "content": "Our paper was accepted to **NeurIPS 2026**! [ArXiv](https://arxiv.org/abs/...)",
  "inline": true
}
```

**Markdown 지원**:
- `**굵게**` → **굵게**
- `*기울임*` → *기울임*
- `[링크](URL)` → 클릭 가능한 링크

### 3. 저자 정보 업데이트

**위치**: `data/authors.json`

**예시**:
```json
{
  "seongsu-kim": {
    "name": "Seongsu Kim",
    "url": "https://seongsukim-ml.github.io",
    "scholar": "scholar_id"
  }
}
```

### 4. BibTeX 추가

**방법 1** (.bib 파일 - 권장):
```bash
# 1. 파일 생성
echo '@inproceedings{kim2026,
  title={Paper Title},
  author={Kim, Seongsu and ...},
  booktitle={Conference},
  year={2026}
}' > data/bibtex/kim2026.bib

# 2. publications.json에 참조 추가
"bibtex_file": "data/bibtex/kim2026.bib"
```

### 5. 테마 추가

**위치**: `data/themes.json`

**예시**:
```json
{
  "id": "new-theme",
  "name": "Theme Name",
  "description": "Description",
  "icon": "🎨",
  "light": {
    "primary-color": "#1a365d",
    "secondary-color": "#2563eb",
    "hero-gradient-start": "#667eea",
    "hero-gradient-end": "#764ba2",
    "selected-border": "#2563eb",
    "selected-bg": "#f0f9ff"
  },
  "dark": {
    "primary-color": "#60a5fa",
    "secondary-color": "#3b82f6",
    "hero-gradient-start": "#1e3a8a",
    "hero-gradient-end": "#581c87",
    "selected-border": "#60a5fa",
    "selected-bg": "#1e3a8a"
  }
}
```

---

## 데이터 스키마

### publications.json

```typescript
{
  id: string,                    // 고유 ID (예: "kim2025high")
  title: string,                 // 논문 제목
  authors: string[],             // 저자 이름 배열
  author_ids: (string|null)[],   // authors.json의 ID (매칭)
  venue: string,                 // 학회/저널 이름
  year: number,                  // 발표 연도
  type: "conference"|"preprint"|"journal",
  award?: string,                // 수상 (선택)
  selected: boolean,             // Featured 논문 여부
  keywords: string[],            // 키워드 태그
  links: {
    pdf?: string,                // ArXiv 등 논문 링크
    code?: string,               // GitHub 코드
    slides?: string,             // 슬라이드 (assets/pdf/...)
    poster?: string,             // 포스터
    video?: string,              // 비디오
    demo?: string                // 데모 사이트
  },
  bibtex_file?: string          // .bib 파일 경로
}
```

### news.json

```typescript
{
  id: string,                   // 고유 ID
  date: string,                 // ISO 날짜 (YYYY-MM-DD)
  title: string,                // 제목
  content: string,              // 내용 (Markdown 지원)
  inline: boolean               // 표시 스타일
}
```

### authors.json

```typescript
{
  "author-id": {
    name: string,               // 저자 이름
    url: string,                // 웹사이트 URL
    scholar?: string            // Google Scholar ID
  }
}
```

### themes.json

```typescript
{
  id: string,
  name: string,
  description: string,
  icon: string,                 // 이모지
  light: ColorPalette,
  dark: ColorPalette
}

type ColorPalette = {
  "primary-color": string,
  "secondary-color": string,
  "hero-gradient-start": string,
  "hero-gradient-end": string,
  "selected-border": string,
  "selected-bg": string,
  // ... 기타 CSS 변수
}
```

---

## 테마 시스템

### 작동 원리

1. **CSS Variables**: `css/style.css`에 정의된 변수들
2. **테마 데이터**: `data/themes.json`에 6가지 테마
3. **적용 로직**: `js/main.js`의 `applyColorTheme()` 함수
4. **저장**: localStorage에 사용자 선택 저장

### 테마 구조

```css
/* CSS Variables (style.css) */
:root {
    --primary-color: #1a365d;
    --secondary-color: #2563eb;
    --hero-gradient-start: #667eea;
    --hero-gradient-end: #764ba2;
    --selected-border: #2563eb;
    --selected-bg: #f0f9ff;
    /* ... */
}
```

### 테마 변경 로직

```javascript
// js/main.js
function applyColorTheme(themeId, mode) {
    const theme = themesData.themes.find(t => t.id === themeId);
    const colors = mode === 'light' ? theme.light : theme.dark;
    const root = document.documentElement;

    Object.entries(colors).forEach(([key, value]) => {
        root.style.setProperty(`--${key}`, value);
    });

    localStorage.setItem('colorTheme', themeId);
}
```

---

## 문제 해결

### 콘텐츠가 로딩되지 않음

**원인**: CORS 정책으로 인해 `file://` 프로토콜로 JSON 로딩 불가

**해결**:
```bash
# 웹 서버 실행
python -m http.server 8000
# 또는
python3 -m http.server 8000
```

### JSON 형식 오류

**증상**: 콘솔에 "Unexpected token" 에러

**해결**:
```bash
# JSON 검증
python -m json.tool data/publications.json

# 또는 온라인: https://jsonlint.com
```

**흔한 실수**:
- 마지막 항목 뒤 쉼표
- 큰따옴표 누락
- 줄바꿈 문자 (`\n`) 처리 안 됨

### BibTeX 버튼이 표시 안 됨

**확인 사항**:
1. `bibtex_file` 필드 존재 여부
2. `.bib` 파일 실제 존재 여부
3. 경로가 올바른지 (`data/bibtex/...`)

### 테마가 변경되지 않음

**해결**:
1. 브라우저 캐시 삭제 (Ctrl+F5)
2. localStorage 확인 (DevTools → Application → Local Storage)
3. `data/themes.json` 형식 확인

### PDF 링크가 작동하지 않음

**확인 사항**:
1. 파일이 `assets/pdf/`에 있는지
2. 경로가 상대 경로인지 (`assets/pdf/...`)
3. 파일명 대소문자 정확한지 (Linux는 대소문자 구분)

---

## 배포

### GitHub Pages

```bash
# 1. GitHub 저장소 생성
# 2. 로컬에서 remote 추가
git remote add origin https://github.com/username/repo.git

# 3. Push
git branch -M main
git push -u origin main

# 4. Settings → Pages → Source: main 선택
```

### 업데이트 배포

```bash
# 로컬 수정 후
git add .
git commit -m "Update publications"
git push

# 2-3분 후 자동 배포됨
```

### 커스텀 도메인

```bash
# 1. 도메인 구매
# 2. DNS 설정 (A 레코드)
# 3. GitHub Settings → Pages → Custom domain
# 4. Enforce HTTPS 체크
```

상세: [`DEPLOYMENT_GUIDE.md`](DEPLOYMENT_GUIDE.md)

---

## 코드 구조

### JavaScript 모듈

`js/main.js`는 다음 섹션으로 구성:

```javascript
// 1. 전역 변수
let profileData = null;
let publicationsData = null;
// ...

// 2. 초기화 및 로딩
async function loadAllData() { ... }

// 3. Utility Functions
function findAuthorByName() { ... }
function toggleBibtex() { ... }

// 4. Publications Rendering
function renderPublications() { ... }

// 5. News Rendering
function renderNews() { ... }

// 6. Posts Rendering
function renderPosts() { ... }

// 7. Theme Management
function applyColorTheme() { ... }

// 8. Event Listeners
document.addEventListener('DOMContentLoaded', init);
```

### CSS 구조

`css/style.css`는 섹션별로 구성:

```css
/* 1. CSS Variables */
:root { ... }

/* 2. Base Styles */
* { ... }
body { ... }

/* 3. Navigation */
.navbar { ... }

/* 4. Hero Section */
.hero-section { ... }

/* 5. Publications */
.publication-item { ... }

/* 6. News */
.news-item { ... }

/* 7. Posts */
.post-card { ... }

/* 8. Theme Modal */
.theme-modal { ... }

/* 9. Responsive */
@media (max-width: 768px) { ... }
```

---

## 개발 워크플로우

### 새 기능 추가

1. **계획**: `claude_update.md`에 기록
2. **구현**:
   - HTML: 섹션 추가 (`index.html`)
   - CSS: 스타일 추가 (`style.css`)
   - JS: 렌더링 로직 추가 (`main.js`)
   - Data: JSON 스키마 정의
3. **테스트**: 로컬 웹 서버에서 확인
4. **문서화**: 관련 가이드 업데이트
5. **커밋**: Git 커밋 및 푸시

### 디버깅

```javascript
// 1. 콘솔 로그 확인 (F12)
console.log('Publications loaded:', publicationsData);

// 2. 네트워크 탭 (JSON 로딩 확인)
// 3. Elements 탭 (CSS Variables 확인)
// 4. Application 탭 (localStorage 확인)
```

---

## Claude 세션 복구

새 Claude 세션에서 작업을 이어갈 때:

```markdown
"이 코드를 다시 이해하고 수정 사항을 마무리해줘.
claude_update.md 파일을 읽고 이어서 작업해줘."
```

**중요 파일**:
1. `claude_update.md` - 전체 변경 내역
2. `MAINTENANCE.md` - 이 파일 (구조 이해)
3. `README.md` - 프로젝트 개요

---

## 체크리스트

### 배포 전

- [ ] JSON 파일 검증 완료
- [ ] 로컬 웹 서버에서 테스트
- [ ] 모든 링크 작동 확인
- [ ] 모바일 반응형 확인
- [ ] 브라우저 호환성 확인
- [ ] 이미지 최적화 (< 500KB)
- [ ] Git 커밋 메시지 작성

### 정기 유지보수

- [ ] 뉴스 업데이트 (월 1회)
- [ ] 논문 목록 최신화
- [ ] 깨진 링크 확인
- [ ] CV 업데이트
- [ ] Google Scholar 동기화

---

## 참고 자료

### 내부 문서
- [`README.md`](README.md) - 빠른 시작
- [`claude_update.md`](claude_update.md) - 변경 내역
- 각종 가이드 (BIBTEX_GUIDE.md 등)

### 외부 자료
- [JSON Validator](https://jsonlint.com)
- [CSS Variables MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [GitHub Pages 문서](https://docs.github.com/en/pages)

---

**마지막 업데이트**: 2026년 2월 3일
**작성자**: Claude Sonnet 4.5 + Seongsu Kim
