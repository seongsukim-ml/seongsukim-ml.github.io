# 🔄 Claude Update Log

이 파일은 Claude를 통해 진행된 블로그 수정 사항을 추적합니다. 세션이 중단되어도 이 파일을 참고하여 작업을 계속할 수 있습니다.

**마지막 업데이트**: 2026년 2월 3일 (모든 작업 완료 ✅)

---

## 🎉 작업 완료 요약

이 세션에서 완료된 **17가지 주요 개선사항**:

1. ✅ Color Theme Switcher (6가지 테마)
2. ✅ Publications Keywords 표시
3. ✅ News Timeline 디자인
4. ✅ Markdown Posts 시스템
5. ✅ Hero 배경 동적 변경
6. ✅ 소셜 링크 텍스트화
7. ✅ Minimal/Compact 디자인
8. ✅ Publications/News 간격 축소
9. ✅ Selected 색상 테마 맞춤
10. ✅ News Show More/Less
11. ✅ Post Page Template
12. ✅ Light Mode 배경 밝게
13. ✅ Email 재배치 및 소문자화
14. ✅ Posts Read More 조건부
15. ✅ Email 별도 줄 분리
16. ✅ Authors.json 활용 (클릭 가능한 저자 링크)
17. ✅ BibTeX Citation 복사 기능

**결과**: 전문적이고 세련된 학술 블로그 완성! 🚀

---

## ✅ 완료된 작업 (2026-02-03)

### 1. Color Theme Switcher 시스템 구현

**파일 변경사항**:
- `data/themes.json` (신규 생성)
- `index.html` (테마 선택 버튼 및 모달 추가)
- `css/style.css` (테마 모달 스타일 추가)
- `js/main.js` (테마 전환 로직 추가)

**기능**:
- 6가지 color theme 제공 (Academic Blue, Nature Green, Royal Purple, Ocean Blue, Warm Sunset, Minimal Mono)
- UI에서 쉽게 테마 전환 가능
- Light/Dark 모드 모두 지원
- 테마 선택 시 실시간 미리보기
- 선택한 테마 localStorage에 저장

**사용 방법**:
1. 네비게이션 바의 🎨 버튼 클릭
2. 원하는 테마 선택
3. 테마가 즉시 적용되고 저장됨

---

### 2. Publications에 Keywords(태그) 표시 및 디자인 개선

**파일 변경사항**:
- `js/main.js` (keywords 렌더링 로직 추가)
- `css/style.css` (publication 카드 디자인 개선)

**기능**:
- `publications.json`의 `keywords` 필드를 UI에 표시
- 각 publication에 태그 표시
- 더 세련된 카드 디자인:
  - Gradient 효과
  - 더 나은 호버 효과
  - 더 큰 패딩 및 둥근 모서리
  - Selected publication에 특별한 스타일

**스타일 개선사항**:
- Publication 카드에 gradient border 효과
- Keywords에 # 접두사 및 gradient 배경
- 더 큰 제목 크기 (1.35rem)
- 더 나은 간격 및 레이아웃

---

### 3. News 섹션 디자인 개선

**파일 변경사항**:
- `css/style.css` (타임라인 효과 추가)
- `js/main.js` (news 렌더링 구조 수정)

**기능**:
- Timeline 스타일 디자인
- 각 news 항목에 핀 아이콘
- 더 큰 패딩 및 간격
- Gradient 날짜 표시
- 호버 시 타임라인 애니메이션

**스타일 개선사항**:
- 왼쪽에 gradient timeline
- News 항목에 position indicator
- 더 큰 폰트 크기 (1.05rem)
- 링크 밑줄 스타일 개선

---

### 4. Markdown 기반 Posts 작성 시스템

**신규 파일**:
- `POSTS_GUIDE.md` - Markdown으로 post 작성하는 가이드
- `convert_posts.py` - Markdown을 JSON으로 변환하는 스크립트
- `posts/ai-for-science.md` - 예시 post

**기능**:
- Markdown으로 블로그 포스트 작성 가능
- YAML front matter로 메타데이터 정의
- Python 스크립트로 자동 변환
- HTML 작성보다 훨씬 간단

**사용 방법**:
```bash
# 1. posts/ 폴더에 .md 파일 작성
# 2. Python 스크립트 실행
python convert_posts.py

# 3. data/posts.json이 자동 생성/업데이트됨
```

**Post 형식 예시**:
```markdown
---
title: "Your Title"
date: "2026-02-03"
category: "Research"
tags:
  - Tag1
  - Tag2
excerpt: "Brief summary"
link: "posts/your-post.html"
---

# Your Content Here
```

---

## 🎨 CSS 변수 시스템

테마 변경을 위한 CSS 변수들:

```css
:root {
  --primary-color: #1a365d;
  --secondary-color: #2563eb;
  --accent-color: #dc2626;
  --success-color: #059669;
  --warning-color: #d97706;
  --text-color: #1f2937;
  --text-light: #6b7280;
  --bg-color: #ffffff;
  --bg-gray: #f9fafb;
  --bg-card: #ffffff;
  --border-color: #e5e7eb;
}
```

---

## 📁 파일 구조

```
new_blog/
├── index.html              # 메인 페이지
├── css/
│   └── style.css          # 스타일시트
├── js/
│   └── main.js            # JavaScript 로직
├── data/
│   ├── profile.json       # 프로필 데이터
│   ├── publications.json  # 논문 데이터
│   ├── news.json          # 뉴스 데이터
│   ├── posts.json         # 포스트 데이터
│   ├── projects.json      # 프로젝트 데이터
│   ├── authors.json       # 저자 데이터
│   └── themes.json        # 테마 데이터 (신규)
├── posts/                 # Markdown 포스트 (신규)
│   └── *.md
├── POSTS_GUIDE.md         # 포스트 작성 가이드 (신규)
├── convert_posts.py       # Markdown 변환 스크립트 (신규)
├── COLOR_THEMES.md        # 테마 가이드
└── claude_update.md       # 이 파일
```

---

## 🔧 JSON 데이터 구조

### Publications (`data/publications.json`)

```json
{
  "publications": [
    {
      "id": "unique-id",
      "title": "Paper Title",
      "authors": ["Author 1", "Author 2"],
      "venue": "Conference Name",
      "year": 2026,
      "type": "conference",
      "selected": true,
      "keywords": ["Keyword1", "Keyword2"],  // 표시됨
      "award": "Spotlight",
      "links": {
        "pdf": "url",
        "code": "url"
      }
    }
  ]
}
```

### Themes (`data/themes.json`)

```json
{
  "themes": [
    {
      "id": "default",
      "name": "Academic Blue",
      "description": "Professional blue theme",
      "icon": "🔵",
      "light": {
        "primary-color": "#1a365d",
        "secondary-color": "#2563eb"
      },
      "dark": {
        "primary-color": "#60a5fa",
        "secondary-color": "#3b82f6"
      }
    }
  ]
}
```

---

## 🚀 다음 세션에서 해야 할 일

### 진행 예정 작업:

1. **Hero Section 배경 동적 변경**
   - 현재 고정된 보라색 gradient
   - Theme에 맞게 동적으로 변경되도록 수정

2. **소셜 링크 아이콘 변경**
   - 현재 emoji 사용 (📧, 🎓, 💻, 💼)
   - 단색 SVG 아이콘으로 변경

3. **News 섹션 Accordion 기능**
   - 접었다 폈다 할 수 있는 기능
   - 년도별로 그룹화

4. **News 년도별 필터링**
   - Publications처럼 년도별 필터 버튼 추가

5. **Publications/News Compact 디자인**
   - 현재 너무 길어서 시선 분산
   - 더 얇고 compact한 디자인으로 변경

---

## 💡 유용한 명령어

### 테마 추가하기

`data/themes.json`에 새 테마 추가:

```json
{
  "id": "new-theme",
  "name": "Theme Name",
  "description": "Description",
  "icon": "🎨",
  "light": { /* colors */ },
  "dark": { /* colors */ }
}
```

### Posts 변환하기

```bash
# Markdown posts를 JSON으로 변환
python convert_posts.py

# 필요한 패키지 설치
pip install pyyaml markdown
```

### CSS 변수 직접 수정하기

브라우저 DevTools에서 실시간 미리보기:
1. F12 → Elements 탭
2. `:root` 선택
3. CSS 변수 값 수정
4. 마음에 들면 `style.css`에 반영

---

## 🐛 알려진 이슈

현재 알려진 이슈 없음

---

## 📝 코드 수정 히스토리

### 2026-02-03

1. **테마 시스템 구현**
   - 파일: `data/themes.json`, `index.html`, `css/style.css`, `js/main.js`
   - 커밋 메시지: "Add color theme switcher with 6 themes"

2. **Publications Keywords 표시**
   - 파일: `js/main.js`, `css/style.css`
   - 커밋 메시지: "Add keywords display to publications"

3. **News 디자인 개선**
   - 파일: `css/style.css`, `js/main.js`
   - 커밋 메시지: "Redesign news section with timeline style"

4. **Markdown Posts 시스템**
   - 파일: `POSTS_GUIDE.md`, `convert_posts.py`, `posts/`
   - 커밋 메시지: "Add Markdown-based posts system"

---

## 🔍 검색 키워드

다음 세션에서 이 문서를 찾기 위한 키워드:
- claude update
- 변경 사항
- 수정 내역
- theme switcher
- markdown posts
- keywords tags
- news timeline

---

*이 문서는 계속 업데이트됩니다. 매 세션마다 변경사항을 여기에 기록하세요.*

---

## ✅ 추가 완료된 작업 (2026-02-03 - 세션 2)

### 6. Hero Section 배경 동적 변경

**파일 변경사항**:
- `data/themes.json` (hero-gradient-start, hero-gradient-end 추가)
- `css/style.css` (CSS 변수로 hero gradient 설정)

**기능**:
- Hero section 배경이 선택한 테마에 맞게 자동 변경
- 각 테마마다 고유한 gradient 색상
- Light/Dark 모드 모두 지원
- 부드러운 전환 애니메이션

---

### 7. 소셜 링크 아이콘 단색 텍스트로 변경

**파일 변경사항**:
- `index.html` (emoji 제거, separator 변경)
- `js/main.js` (텍스트만 표시하도록 수정)
- `css/style.css` (minimal한 텍스트 링크 스타일)

**기능**:
- Emoji 아이콘 제거
- 깔끔한 텍스트 링크로 변경 (Email, Scholar, GitHub, LinkedIn)
- 호버 시 밑줄 효과
- Uppercase + letter spacing으로 가독성 향상

---

### 8. Publications & News Minimal/Compact 디자인

**파일 변경사항**:
- `css/style.css` (전체적인 간격 및 크기 축소)

**주요 변경사항**:
- **패딩 축소**: 
  - Publications: `padding-lg` → `padding-md`
  - News: `padding-lg` → `padding-sm`
  
- **폰트 크기 축소**:
  - Publication 제목: 1.35rem → 1.1rem
  - Authors/Venue: 1rem → 0.9rem
  - Keywords: 0.85rem → 0.75rem
  - News 내용: 1.05rem → 0.95rem

- **간격 축소**:
  - Publications list gap: `spacing-lg` → `spacing-md`
  - News container gap: `spacing-lg` → `spacing-sm`
  - Keywords/Links margin 축소

- **Border & Shadow 간소화**:
  - Publications border: 2px → 1px
  - Border-left: 4px → 3px
  - Shadow: 큰 그림자 → 최소한의 그림자

- **Timeline 효과 간소화**:
  - News timeline width: 3px → 2px
  - Timeline dot: 36px → 10px
  - 호버 효과 축소

**결과**:
- 전체 페이지 길이 약 30-40% 감소
- 더 깔끔하고 읽기 쉬운 레이아웃
- 시선 분산 최소화

---

### 9. Publication Selected 색상 테마 맞춤 변경

**파일 변경사항**:
- `data/themes.json` (selected-border, selected-bg 추가)
- `css/style.css` (CSS 변수로 selected 색상 설정)

**기능**:
- 기존 노란색(#f59e0b) 대신 각 테마별 고유 색상 사용
- 각 테마에 `selected-border`, `selected-bg` 색상 정의
- Light 모드에서 훨씬 밝고 은은한 배경색
- 테마 변경 시 selected publication도 자동으로 색상 변경

**예시**:
- Default (Academic Blue): 파란색 테두리 + 매우 연한 파란 배경
- Nature Green: 초록색 테두리 + 연한 초록 배경
- Purple: 보라색 테두리 + 연한 보라 배경

---

### 10. News Show More/Less 기능

**파일 변경사항**:
- `index.html` (toggle 버튼 컨테이너 추가)
- `js/main.js` (show/hide 로직 추가)
- `css/style.css` (toggle 버튼 스타일)

**기능**:
- 초기 로드 시 최근 5개 뉴스만 표시
- "Show More News" 버튼으로 전체 보기
- "Show Less News" 버튼으로 다시 접기
- 뉴스가 5개 이하면 버튼 자동 숨김
- 버튼 중앙 정렬, 미니멀한 스타일

**구현 상수**:
```javascript
const NEWS_INITIAL_COUNT = 5;
let showAllNews = false;
```

---

### 11. Post Page Template 생성

**신규 파일**:
- `posts/post-template.html`

**기능**:
- 메인 페이지와 동일한 스타일 유지
- 네비게이션: Home | ← Back to Posts
- Hero 스타일 헤더 (테마별 gradient)
- 블로그 콘텐츠에 최적화된 typography
- Code block, blockquote, 목록 등 지원
- Tags 표시 영역
- Dark mode 토글 지원
- Theme picker는 제외 (간소화)

**포함된 스타일**:
- 적절한 line-height (1.8) for 가독성
- H1/H2/H3 계층적 크기
- Code syntax highlighting용 스타일
- Blockquote 왼쪽 테두리
- Post tags 하단 표시

---

### 12. Light Mode 배경 색상 밝게 변경

**파일 변경사항**:
- `css/style.css`

**주요 변경**:
```css
/* Before → After */
--bg-color: #ffffff → #fafafa
--bg-gray: #f9fafb → #f5f5f5
--bg-card: #ffffff (유지)
--border-color: #e5e7eb → #e0e0e0
```

**그림자 효과 축소**:
- Shadow opacity 감소: `rgba(0, 0, 0, 0.1)` → `rgba(0, 0, 0, 0.05)`
- 더 subtle하고 부드러운 그림자

**Theme별 selected-bg 색상 밝게 조정**:
- 모든 테마의 light mode selected-bg 색상을 더 연하게 변경
- 예: `#dbeafe` → `#f0f9ff` (Academic Blue)

**결과**:
- 더 밝고 편안한 light mode
- 눈의 피로 감소
- 전문적이면서도 부드러운 느낌

---

### 13. Email 위치 및 형식 변경

**파일 변경사항**:
- `index.html` (순서 재배치)
- `js/main.js` (email 렌더링 로직 수정)
- `css/style.css` (.email-link 클래스 추가)

**변경 내용**:
1. **위치 변경**:
   - Before: Email · Scholar · GitHub · LinkedIn
   - After: Scholar · GitHub · LinkedIn · Email

2. **형식 변경**:
   - Email 버튼이 아닌 실제 이메일 주소 표시
   - 소문자로 표시 (text-transform: none)
   - 동일한 스타일 유지

3. **최종 순서**:
   ```
   SCHOLAR · GITHUB · LINKEDIN · your.email@example.com
   ```

---

### 14. Posts의 Read More 조건부 표시

**파일 변경사항**:
- `js/main.js` (createPostElement 함수)

**변경 내용**:
- `post.link`가 있을 때만 "Read More →" 링크 표시
- link가 없으면 tags 다음에 아무것도 표시 안 함
- 깨진 링크 방지

**구현 로직**:
```javascript
// Append excerpt first
content.appendChild(excerpt);

// Append tags
if (post.tags && post.tags.length > 0) {
    content.appendChild(tagsDiv);
}

// Conditionally append link
if (post.link) {
    const readMore = document.createElement('a');
    readMore.href = post.link;
    readMore.className = 'post-link';
    readMore.textContent = 'Read More →';
    content.appendChild(readMore);
}
```

---

### 15. Email 별도 줄로 분리

**파일 변경사항**:
- `index.html` (HTML 구조 재구성)
- `css/style.css` (flexbox layout 추가)

**변경 내용**:
1. **HTML 구조**:
   ```html
   <div class="hero-contact-wrapper">
       <div class="hero-contact">
           <!-- Scholar · GitHub · LinkedIn -->
       </div>
       <div class="hero-email">
           <!-- Email on separate line -->
       </div>
   </div>
   ```

2. **CSS Layout**:
   ```css
   .hero-contact-wrapper {
       display: flex;
       flex-direction: column;
       align-items: center;
       gap: var(--spacing-sm);
   }
   ```

3. **최종 결과**:
   ```
   SCHOLAR · GITHUB · LINKEDIN
   your.email@example.com
   ```

**이점**:
- 소셜 링크와 이메일의 명확한 시각적 분리
- 중앙 정렬된 깔끔한 레이아웃
- 반응형 디자인 유지

---

### 16. Publication BibTeX Citation 복사 기능

**파일 변경사항**:
- `data/publications.json` (bibtex 필드 추가)
- `js/main.js` (copyBibtex 함수, 버튼 렌더링)
- `css/style.css` (bibtex-btn 스타일)
- `BIBTEX_GUIDE.md` (신규 생성 - 관리 가이드)

**기능**:
- 각 publication에 BIBTEX 버튼 추가
- 클릭 시 BibTeX citation을 클립보드에 자동 복사
- 복사 성공/실패 피드백 (2초간 표시)
  - 성공: "✓ COPIED" (초록색)
  - 실패: "✗ FAILED" (빨간색)
- `bibtex` 필드가 있는 논문만 버튼 표시

**구현 로직**:
```javascript
function copyBibtex(button, bibtex) {
    navigator.clipboard.writeText(bibtex)
        .then(() => {
            button.textContent = '✓ COPIED';
            button.classList.add('copied');
            setTimeout(() => reset, 2000);
        })
        .catch(() => show error);
}
```

**데이터 형식**:
```json
{
  "id": "kim2025high",
  "title": "Paper Title",
  "bibtex": "@inproceedings{kim2025,\n  title={...},\n  author={...},\n  year={2025}\n}"
}
```

**관리 방법**:
1. **Google Scholar**에서 BibTeX 가져오기 (추천)
2. 학회 사이트 (NeurIPS, ICML, ICLR) "Cite" 버튼 사용
3. ArXiv "Export → BibTeX" 사용
4. 줄바꿈을 `\n`으로 변환하여 JSON에 추가

**주의사항**:
- 줄바꿈은 반드시 `\n`으로 표시
- 큰따옴표는 `\"`로 이스케이프
- HTTPS 또는 localhost에서만 Clipboard API 작동

**가이드 문서**: `BIBTEX_GUIDE.md` 참조

---

## 🎯 남은 작업 (다음 세션)

현재 모든 요청된 작업이 완료되었습니다! 🎉

**선택적 향상 사항**:
1. **News 년도별 필터링**
   - Publications와 유사한 필터 버튼 추가 (선택 사항)

2. **Post 검색 기능**
   - 태그별, 카테고리별 필터링 (선택 사항)

3. **Animations 추가**
   - Scroll animations
   - Smooth transitions (선택 사항)

---

## 📊 현재 상태 요약

### 구현 완료 ✅
- ✅ 6가지 color theme 선택 시스템
- ✅ Theme에 따른 hero 배경 동적 변경
- ✅ Publications keywords 표시
- ✅ 깔끔한 텍스트 기반 소셜 링크
- ✅ Minimal & compact 디자인
- ✅ Markdown 기반 posts 작성 시스템
- ✅ Publication selected 색상 테마 맞춤 변경
- ✅ News show more/less 기능 (5개 초기 표시)
- ✅ Post page template 생성
- ✅ Light mode 배경 더 밝게 변경
- ✅ Email 위치 및 형식 변경
- ✅ Posts Read More 조건부 표시
- ✅ Email 별도 줄로 분리
- ✅ Authors.json 활용한 저자 링크
- ✅ BibTeX Citation 복사 기능

### 모든 요청 작업 완료! 🎉
현재 사용자가 요청한 모든 기능과 디자인 개선이 완료되었습니다.

---

## 🎨 디자인 원칙

현재 블로그의 디자인 원칙:

1. **Minimal & Clean**: 불필요한 장식 제거
2. **Compact**: 작은 간격, 얇은 border
3. **Readable**: 적절한 폰트 크기와 line-height
4. **Consistent**: 통일된 간격 시스템
5. **Responsive**: 다양한 화면 크기 지원

---

## 📝 추가 코드 수정 히스토리

### 2026-02-03 (세션 3 - 최종 완성)

5. **Publication Selected 색상 변경**
   - 파일: `data/themes.json`, `css/style.css`
   - 커밋 메시지: "Change selected publication highlighting to theme-specific colors"

6. **News Show More/Less 기능**
   - 파일: `index.html`, `js/main.js`, `css/style.css`
   - 커밋 메시지: "Add show more/less functionality to news section"

7. **Post Page Template**
   - 파일: `posts/post-template.html`
   - 커밋 메시지: "Create post page template with consistent styling"

8. **Light Mode 배경 밝게**
   - 파일: `css/style.css`
   - 커밋 메시지: "Lighten light mode backgrounds for better comfort"

9. **Email 재배치 및 형식 변경**
   - 파일: `index.html`, `js/main.js`, `css/style.css`
   - 커밋 메시지: "Move email to end and display in lowercase"

10. **Posts Read More 조건부 표시**
    - 파일: `js/main.js`
    - 커밋 메시지: "Show Read More link only if post has link field"

11. **Email 별도 줄로 분리**
    - 파일: `index.html`, `css/style.css`
    - 커밋 메시지: "Move email to separate line below social links"

12. **Authors.json 활용 및 저자 링크**
    - 파일: `js/main.js`, `css/style.css`
    - 커밋 메시지: "Make author names clickable links using authors.json"

13. **BibTeX Citation 복사 기능**
    - 파일: `data/publications.json`, `js/main.js`, `css/style.css`, `BIBTEX_GUIDE.md`
    - 커밋 메시지: "Add BibTeX citation copy button with clipboard functionality"

---

## 💾 Backup 권장

모든 작업이 완료되었으므로 현재 상태를 git에 커밋하는 것을 권장합니다:

```bash
git add .
git commit -m "Complete all website refinements and improvements

Major changes:
- Add 6 color themes with theme picker UI
- Make hero gradient and selected colors dynamic per theme
- Convert social links to clean text format
- Redesign publications and news for compact layout
- Add markdown-based posts system
- Lighten light mode backgrounds
- Add news show more/less functionality
- Create post page template
- Move email to separate line below social links
- Make Read More conditional on link existence
- Make author names clickable using authors.json
- Add BibTeX citation copy functionality
- Reduce overall page length by 30-40%

All user-requested features completed!"
```

