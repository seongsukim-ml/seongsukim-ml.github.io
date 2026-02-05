# 🎓 Academic Portfolio Website

완성도 높은 학술 포트폴리오 웹사이트입니다. JSON 기반 데이터 관리, 6가지 테마, BibTeX 지원, Markdown 뉴스 등 다양한 기능을 제공합니다.

## ✨ 주요 기능

- ✨ **Cosmic Theme Effects**: 반짝이는 별과 떨어지는 유성 효과 (NEW!)
- ⭐ **Stars Toggle**: 별과 유성 표시/숨김 토글 버튼 (NEW!)
- 🎨 **6가지 Color Themes**: Dark/Light 모드 지원
- 📚 **BibTeX Citations**: .bib 파일로 쉬운 인용 관리
- 📝 **Markdown Support**: News에서 굵게, 기울임, 링크 사용 가능
- 🔗 **Clickable Authors**: 저자 이름 클릭 시 웹사이트로 이동
- 📄 **PDF Links**: 슬라이드, 포스터 등 로컬 PDF 링크
- 🗂️ **Posts System**: Markdown으로 블로그 포스트 작성
- 📱 **Responsive Design**: 모든 디바이스에서 완벽하게 작동
- ⚡ **Fast & Lightweight**: 순수 HTML/CSS/JS (프레임워크 불필요)

## 📁 프로젝트 구조

```
new_blog/
├── index.html                    # 메인 페이지
├── css/
│   └── style.css                # 스타일시트 (CSS Variables 사용)
├── js/
│   └── main.js                  # 동적 렌더링 및 테마 로직
├── data/                         # 📊 모든 콘텐츠 (JSON)
│   ├── profile.json             # 개인 정보, 소셜 링크
│   ├── publications.json        # 논문 목록
│   ├── news.json                # 뉴스 및 공지사항
│   ├── posts.json               # 블로그 포스트 목록
│   ├── projects.json            # 프로젝트 목록
│   ├── authors.json             # 저자 정보 (URL, Scholar ID)
│   ├── themes.json              # 테마 색상 정의
│   └── bibtex/                  # 📚 BibTeX 파일들
│       ├── kim2025high.bib
│       └── ...
├── assets/                       # 정적 파일
│   ├── profile.jpg              # 프로필 사진
│   ├── Seongsu_Kim_CV.pdf       # CV
│   └── pdf/                     # 📄 슬라이드, 포스터 등
│       ├── slides1.pdf
│       └── ...
├── posts/                        # 블로그 포스트 (Markdown)
│   ├── post-template.html       # 포스트 템플릿
│   └── *.md                     # Markdown 포스트
├── convert_posts.py              # MD → JSON 변환 스크립트
│
├── 📖 문서 (Documentation)
├── README.md                     # 👈 이 파일
├── claude_update.md              # 변경 내역 및 세션 복구용
├── CLAUDE_UPDATE.md              # 🆕 Cosmic Theme 상세 업데이트 로그
├── BIBTEX_GUIDE.md              # BibTeX 관리 가이드
├── NEWS_MARKDOWN_GUIDE.md       # News Markdown 사용법
├── PDF_MANAGEMENT_GUIDE.md      # PDF 파일 관리
├── POSTS_GUIDE.md               # 블로그 포스트 작성법
├── COLOR_THEMES.md              # 테마 커스터마이징
└── DEPLOYMENT_GUIDE.md          # 배포 가이드 (GitHub Pages 등)
```

## 🚀 빠른 시작

### 1. 로컬에서 보기

이 블로그는 정적 HTML 사이트이지만 JSON 파일을 로드하기 때문에 **웹 서버가 필요합니다**. 파일 프로토콜(`file://`)로는 CORS 정책 때문에 작동하지 않습니다.

```bash
# 프로젝트 폴더로 이동
cd new_blog

# Python 웹 서버 실행 (Python 3)
python -m http.server 8000

# 또는 Python 2를 사용하는 경우
python -m SimpleHTTPServer 8000

# 브라우저에서 열기
# Windows/Linux: http://localhost:8000
# macOS: open http://localhost:8000
```

브라우저에서 `http://localhost:8000`을 열면 사이트를 볼 수 있습니다.

**다른 포트 사용하기**:
```bash
# 8080 포트 사용
python -m http.server 8080
```

### 2. 콘텐츠 수정

#### 개인 정보 업데이트
```bash
# data/profile.json 수정
{
  "name": "Your Name",
  "email": "your@email.com",
  ...
}
```

#### 논문 추가
```bash
# 1. data/publications.json에 추가
# 2. data/bibtex/에 .bib 파일 생성 (선택)
# 3. 슬라이드 있으면 assets/pdf/에 추가
```

#### 뉴스 추가
```bash
# data/news.json에 추가 (Markdown 지원!)
{
  "content": "Paper accepted to **NeurIPS 2025**!"
}
```

### 3. 배포

```bash
# Git 커밋
git add .
git commit -m "Update content"
git push

# GitHub Pages, Netlify, Vercel 등에서 자동 배포됨
```

## 📚 상세 가이드

각 기능별로 상세한 가이드가 준비되어 있습니다:

| 가이드 | 내용 | 파일 |
|--------|------|------|
| ✨ **Cosmic Theme** | 별, 유성 효과 상세 구현 가이드 | [`CLAUDE_UPDATE.md`](CLAUDE_UPDATE.md) |
| 🔧 **세션 복구** | Claude 세션 중단 시 복구 방법 | [`claude_update.md`](claude_update.md) |
| 📚 **BibTeX 관리** | .bib 파일로 인용 관리하는 법 | [`BIBTEX_GUIDE.md`](BIBTEX_GUIDE.md) |
| 📝 **Markdown 뉴스** | 굵게, 기울임, 링크 사용법 | [`NEWS_MARKDOWN_GUIDE.md`](NEWS_MARKDOWN_GUIDE.md) |
| 📄 **PDF 관리** | 슬라이드, 포스터 링크하기 | [`PDF_MANAGEMENT_GUIDE.md`](PDF_MANAGEMENT_GUIDE.md) |
| ✍️ **블로그 포스트** | Markdown으로 포스트 작성 | [`POSTS_GUIDE.md`](POSTS_GUIDE.md) |
| 🎨 **테마 커스터마이징** | 색상 테마 수정 및 추가 | [`COLOR_THEMES.md`](COLOR_THEMES.md) |
| 🚀 **배포** | GitHub Pages/Netlify 배포 | [`DEPLOYMENT_GUIDE.md`](DEPLOYMENT_GUIDE.md) |

## 🎯 일반적인 작업 흐름

### 논문 발표 시

```bash
# 1. publications.json 업데이트
# 2. BibTeX 파일 추가 (data/bibtex/paper_id.bib)
# 3. 슬라이드 추가 (assets/pdf/slides.pdf)
# 4. News 추가 (data/news.json)
# 5. Git push → 자동 배포
```

### 뉴스 추가 시

```bash
# data/news.json 수정 (최상단에 추가)
{
  "id": "unique_id",
  "date": "2026-02-03",
  "title": "Title",
  "content": "**Bold** text with [links](url)",
  "inline": true
}

# Git push → 자동 배포
```

### 테마 변경 시

```bash
# 사용자가 사이트에서 직접 변경 가능 (🎨 버튼)
# 또는 data/themes.json 수정하여 새 테마 추가
```

## 🔑 핵심 파일 설명

### `data/publications.json`

```json
{
  "id": "paper2025",
  "title": "Paper Title",
  "authors": ["Author 1", "Author 2"],
  "author_ids": ["author1-id", "author2-id"],
  "venue": "Conference Name",
  "year": 2025,
  "type": "conference",
  "award": "Spotlight",
  "selected": true,
  "keywords": ["AI", "ML"],
  "links": {
    "pdf": "https://arxiv.org/...",
    "code": "https://github.com/...",
    "slides": "assets/pdf/slides.pdf"
  },
  "bibtex_file": "data/bibtex/paper2025.bib"
}
```

### `data/authors.json`

```json
{
  "author-id": {
    "name": "Author Name",
    "url": "https://author-website.com",
    "scholar": "scholar_id"
  }
}
```

### `data/themes.json`

```json
{
  "id": "theme-id",
  "name": "Theme Name",
  "icon": "🔵",
  "light": {
    "primary-color": "#1a365d",
    "secondary-color": "#2563eb",
    ...
  },
  "dark": { ... }
}
```

## 🛠️ 기술 스택

- **Frontend**: HTML5, CSS3 (CSS Variables), Vanilla JavaScript
- **Data**: JSON files
- **Markdown**: Front matter + content for posts
- **Build**: 없음 (순수 정적 사이트)
- **Deploy**: GitHub Pages, Netlify, Vercel 등

## 🎨 디자인 원칙

1. **Minimal & Clean**: 불필요한 장식 제거
2. **Compact**: 작은 간격, 얇은 테두리
3. **Readable**: 적절한 폰트 크기와 line-height
4. **Consistent**: 통일된 간격 시스템
5. **Responsive**: 모바일 우선 디자인

## 🔄 업데이트 방법

### 로컬 수정 후 배포

```bash
# 1. JSON 파일 수정 (publications, news 등)
# 2. Git 커밋
git add .
git commit -m "Add new paper"
git push

# 3. 자동 배포 (2-3분 소요)
```

### BibTeX 추가

```bash
# 1. .bib 파일 생성
echo '@inproceedings{...}' > data/bibtex/paper_id.bib

# 2. publications.json에 참조 추가
"bibtex_file": "data/bibtex/paper_id.bib"

# 3. Commit & Push
```

### 슬라이드/PDF 추가

```bash
# 1. PDF 복사
cp slides.pdf assets/pdf/

# 2. publications.json에 링크 추가
"slides": "assets/pdf/slides.pdf"

# 3. Commit & Push
```

## 🧪 테스트

### 로컬 테스트

```bash
# 웹 서버 실행
python -m http.server 8000

# 확인 사항:
# - 모든 섹션이 로딩되는가?
# - 링크가 작동하는가?
# - 테마 전환이 되는가?
# - BibTeX 버튼이 표시되는가?
```

### JSON 검증

```bash
# Python으로 JSON 검증
python -m json.tool data/publications.json > /dev/null

# 또는 온라인: https://jsonlint.com
```

## 🐛 문제 해결

### 자주 발생하는 문제

1. **콘텐츠가 로딩 안 됨**
   - 웹 서버 사용 중인가? (file:// 프로토콜은 안 됨)
   - JSON 형식이 올바른가?

2. **BibTeX 버튼이 안 보임**
   - `bibtex_file` 필드가 있는가?
   - .bib 파일이 실제로 존재하는가?

3. **테마가 변경 안 됨**
   - 브라우저 캐시 삭제 (Ctrl+F5)
   - localStorage 확인

4. **PDF 링크가 안 됨**
   - 경로가 `assets/pdf/...`인가?
   - 파일이 실제로 존재하는가?
   - 파일명 대소문자가 정확한가?

## 📦 배포 플랫폼

### GitHub Pages (추천)
- ✅ 무료
- ✅ 간단한 설정
- ✅ 자동 배포
- 📖 가이드: [`DEPLOYMENT_GUIDE.md`](DEPLOYMENT_GUIDE.md)

### Netlify
- ✅ 무료
- ✅ CDN 제공
- ✅ 폼 지원

### Vercel
- ✅ 무료
- ✅ 초고속
- ✅ 개발자 친화적

## 🔐 보안

- ✅ 정적 사이트 (서버 측 취약점 없음)
- ✅ HTTPS 기본 제공 (GitHub Pages, Netlify)
- ⚠️ `.env` 파일 없음 (모든 데이터가 공개)

## 🎓 학술 사이트에 최적화

- 📚 Publications 중심 레이아웃
- 🔍 Google Scholar 연동
- 📊 BibTeX 내보내기
- 🎨 전문적인 디자인
- 📱 모든 디바이스 지원

## 🤖 Claude 세션 복구

Claude Code로 작업 중 세션이 끊기면:

```markdown
"이 코드를 다시 이해하고 수정 사항을 마무리해줘.
claude_update.md 파일을 읽고 이어서 작업해줘."
```

→ [`claude_update.md`](claude_update.md) 파일에 모든 변경 내역이 기록되어 있습니다.

## 📊 통계

- **파일 수**: 31개
- **코드 라인**: ~6,500 줄
- **문서**: 8개 가이드
- **JSON 스키마**: 7개
- **지원 테마**: 6개
- **빌드 도구**: 불필요 (순수 정적)

## 📝 변경 로그

전체 변경 내역은 [`claude_update.md`](claude_update.md)를 참조하세요.

**최신 업데이트** (2026-02-05) - Cosmic Theme v1.0:
- ✨ **배경 별 효과**: 80개 작은 별 + 30개 큰 별 (box-shadow 기법)
- ☄️ **유성 효과**: 12개의 떨어지는 유성 (45도 대각선)
- ⭐ **별 토글 기능**: 별과 유성 표시/숨김 버튼 추가
- 🎭 **Fadeout/Fadein**: 1초 부드러운 애니메이션
- 🐛 **버그 수정**: 토글 버튼 간헐적 오작동, 별 fadeout 미작동 수정
- 📏 **UI 개선**: About 섹션 여백 축소, News 네비게이션 링크 제거
- ⚡ **성능 최적화**: 별 개수 감소, setupEventListeners 조기 호출

👉 **Cosmic Theme 상세 문서**: [`CLAUDE_UPDATE.md`](CLAUDE_UPDATE.md)

**이전 업데이트** (2026-02-03):
- ✅ BibTeX .bib 파일 지원
- ✅ News Markdown 지원
- ✅ PDF 링크 시스템
- ✅ 모든 publication 배경색
- ✅ 저자 클릭 가능 링크
- ✅ 17가지 주요 기능 완성

## 🙏 감사의 글

Built with:
- ❤️ Love for academic research
- 🤖 Claude Sonnet 4.5
- ☕ Coffee

---

## 📞 연락처

**Seongsu Kim**
📧 ksusu7@gmail.com
🌐 GitHub: [@seongsukim-ml](https://github.com/seongsukim-ml)

## 📄 라이센스

Academic use. Feel free to fork and customize!

---

**마지막 업데이트**: 2026년 2월 5일
**버전**: 2.1 (Cosmic Theme)
