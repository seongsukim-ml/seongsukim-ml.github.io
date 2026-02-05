# 🔧 문제 해결 가이드 (Troubleshooting Guide)

## ⚠️ "Error Loading Data" 에러가 발생하는 경우

### 문제
브라우저에서 다음과 같은 에러 메시지가 표시됩니다:
```
⚠️ Error Loading Data
Please make sure all JSON files are present in the data folder.
```

### 원인
이 블로그는 JSON 파일을 동적으로 로드하기 때문에, **파일 프로토콜(`file://`)로는 작동하지 않습니다**.

만약 다음과 같은 방법으로 사이트를 열었다면, 이 에러가 발생합니다:
- ❌ `index.html` 파일을 더블클릭하여 열기
- ❌ 파일 탐색기에서 `index.html`을 브라우저로 드래그
- ❌ 브라우저 주소창에 `file:///...` 경로가 표시됨

### 해결 방법

#### ✅ 방법 1: Python 웹 서버 사용 (권장)

터미널에서 다음 명령어를 실행하세요:

```bash
# 프로젝트 폴더로 이동
cd /경로/to/new_blog

# Python 3 서버 실행
python3 -m http.server 8000

# 또는 Python 2를 사용하는 경우
python -m SimpleHTTPServer 8000
```

그런 다음 브라우저에서 다음 주소로 접속하세요:
```
http://localhost:8000
```

#### ✅ 방법 2: Node.js http-server 사용

```bash
# http-server 설치 (한 번만 실행)
npm install -g http-server

# 서버 실행
cd /경로/to/new_blog
http-server -p 8000
```

브라우저에서 `http://localhost:8000` 접속

#### ✅ 방법 3: VS Code Live Server 확장

1. VS Code에서 프로젝트 폴더 열기
2. "Live Server" 확장 설치
3. `index.html`에서 우클릭 → "Open with Live Server"

---

## 🎨 Cosmic Space 테마가 적용되지 않는 경우

### 문제
사이트가 로드되지만 Cosmic Space 테마의 보라색/인디고 색상이 표시되지 않습니다.

### 해결됨 ✅
이 문제는 CSS 파일에 중복된 `:root` 블록이 있어서 발생했습니다. 이제 수정되었습니다!

### 확인 방법
1. 웹 서버를 사용하여 사이트를 열어보세요
2. 기본 색상이 인디고/보라색 계열이어야 합니다
3. 우측 상단의 🎨 버튼을 클릭하면 테마 선택 모달이 열립니다
4. "Cosmic Space 🌌" 테마가 첫 번째에 있고 선택되어 있어야 합니다

### 캐시 문제인 경우
브라우저 캐시를 강제로 새로고침하세요:
- **Windows/Linux**: `Ctrl + Shift + R` 또는 `Ctrl + F5`
- **Mac**: `Cmd + Shift + R`

---

## 📋 체크리스트

사이트가 정상적으로 작동하는지 확인하려면:

### ✅ 기본 확인
- [ ] 웹 서버를 사용하여 사이트 열기 (`http://localhost:8000`)
- [ ] 브라우저 주소창에 `localhost` 또는 `127.0.0.1`이 표시됨
- [ ] 페이지가 "Error Loading Data" 없이 로드됨

### ✅ 콘텐츠 확인
- [ ] Profile 섹션에 이름과 이메일이 표시됨
- [ ] Research Interests가 3개 카테고리로 분류되어 표시됨
- [ ] News 섹션이 로드됨
- [ ] Publications 섹션이 로드됨

### ✅ 테마 확인
- [ ] 기본 색상이 인디고/보라색 계열 (Cosmic Space)
- [ ] 배경에 별들이 반짝임 ✨
- [ ] 우측 상단 🎨 버튼 클릭 시 테마 선택 가능
- [ ] 우측 상단 🌙 버튼 클릭 시 다크 모드로 전환

---

## 🔍 추가 디버깅

### 브라우저 콘솔 확인

1. 브라우저 개발자 도구 열기:
   - **Windows/Linux**: `F12` 또는 `Ctrl + Shift + I`
   - **Mac**: `Cmd + Option + I`

2. "Console" 탭으로 이동

3. 에러 메시지 확인:
   - CORS 에러가 있다면 → 웹 서버 사용 필요
   - 404 에러가 있다면 → 파일 경로 확인
   - JSON 파싱 에러가 있다면 → JSON 문법 확인

### JSON 파일 검증

터미널에서 JSON 파일 유효성 검사:

```bash
cd data
for file in *.json; do
    python3 -m json.tool "$file" > /dev/null && echo "✓ $file" || echo "✗ $file"
done
```

---

## 💡 빠른 해결 팁

| 증상 | 원인 | 해결 |
|------|------|------|
| "Error Loading Data" | file:// 프로토콜 사용 | 웹 서버 사용 (`python3 -m http.server 8000`) |
| 테마가 이상함 | 캐시 문제 | `Ctrl + Shift + R` (강제 새로고침) |
| 별이 안 보임 | CSS 미적용 | 캐시 새로고침 |
| JSON 에러 | 문법 오류 | `python3 -m json.tool data/profile.json` |

---

## 📞 도움이 필요하신가요?

1. 먼저 README.md의 "🐛 문제 해결" 섹션을 확인하세요
2. 브라우저 콘솔에서 에러 메시지를 확인하세요
3. JSON 파일 검증을 실행하세요

---

**최종 업데이트**: 2026년 2월 4일
