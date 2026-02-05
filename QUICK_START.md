# 🚀 블로그 실행 방법

## ⚡ 간단 실행 (3단계)

### 1. 터미널 열기
- **Mac**: `Cmd + Space` → "Terminal" 입력
- **Windows**: 시작 메뉴 → "cmd" 입력

### 2. 프로젝트 폴더로 이동
```bash
cd /경로/to/new_blog
```

💡 **팁**: Finder/탐색기에서 `new_blog` 폴더를 터미널에 드래그하면 경로가 자동 입력됩니다!

### 3. 실행
```bash
./start.sh
```

또는

```bash
python3 -m http.server 8000
```

### 4. 브라우저에서 열기
```
http://localhost:8000
```

---

## ⚠️ 중요: 반드시 확인하세요!

### ❌ 절대 이렇게 하지 마세요
- ❌ `index.html`을 더블클릭하여 열기
- ❌ 파일을 브라우저로 드래그
- ❌ 주소창에 `file://`로 시작하는 주소

### ✅ 올바른 방법
- ✅ 터미널에서 `python3 -m http.server 8000` 실행
- ✅ 브라우저에서 `http://localhost:8000` 접속
- ✅ 주소창에 `localhost` 표시 확인

---

## 🔍 "Error Loading Data" 에러가 나오면?

### 원인 1: 웹 서버를 실행하지 않음 (90%)
→ **해결**: 터미널에서 `python3 -m http.server 8000` 실행

### 원인 2: 잘못된 폴더에서 실행 (5%)
→ **해결**: `new_blog` 폴더에서 실행하는지 확인
```bash
cd /경로/to/new_blog
ls  # index.html이 보여야 함
```

### 원인 3: 브라우저 캐시 (5%)
→ **해결**: 강제 새로고침
- Mac: `Cmd + Shift + R`
- Windows: `Ctrl + Shift + R`

---

## 🎯 성공 확인

페이지가 정상 작동하면:

- [ ] "Error Loading Data" 에러 **없음**
- [ ] Profile 정보 표시 (이름, 이메일, 소속)
- [ ] Research Interests (3개 카테고리)
- [ ] News, Publications, Projects 섹션 로드
- [ ] 배경에 반짝이는 별들 ✨
- [ ] 인디고/보라색 Cosmic Space 테마
- [ ] 🎨 버튼으로 테마 변경 가능
- [ ] 🌙 버튼으로 다크 모드 전환 가능

---

## 📁 프로젝트 구조

```
new_blog/
├── index.html              ← 메인 페이지
├── start.sh               ← 실행 스크립트
├── css/style.css          ← 스타일
├── js/main.js             ← JavaScript
├── data/                  ← 콘텐츠 (JSON)
│   ├── profile.json
│   ├── publications.json
│   ├── news.json
│   ├── projects.json
│   ├── posts.json
│   ├── authors.json
│   └── themes.json
└── assets/                ← 이미지, PDF 등
```

---

## 💡 추가 정보

### 다른 포트 사용
```bash
python3 -m http.server 8080
# 브라우저: http://localhost:8080
```

### Python이 없다면
```bash
# Node.js 사용
npx http-server -p 8000

# 또는 VS Code Live Server 사용
# VS Code → Live Server 확장 설치 → index.html 우클릭 → "Open with Live Server"
```

### 서버 종료
터미널에서 `Ctrl + C`

---

## 📖 더 알아보기

- `README.md` - 전체 기능 및 사용법
- `TROUBLESHOOTING.md` - 상세한 문제 해결
- `claude_update.md` - 변경 사항 기록

---

**날짜**: 2026년 2월 4일
