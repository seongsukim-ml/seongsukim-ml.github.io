# 🔧 Error Loading Data 에러 해결 방법

## 🚨 현재 상황
페이지를 열면 "Error Loading Data" 에러가 표시되고 있습니다.

## ✅ 해결 단계 (5분 소요)

### 1단계: 진단 도구 실행 🔍

먼저 정확한 문제를 파악하기 위해 진단 도구를 실행합니다.

#### 방법 A: 웹 서버를 통해 실행 (권장)

```bash
# 터미널 열기
# Mac: Spotlight에서 "Terminal" 검색
# Windows: 시작 메뉴에서 "cmd" 검색

# 1. 프로젝트 폴더로 이동
cd /Users/your-username/path/to/my_blog/new_blog

# 2. 웹 서버 시작
python3 -m http.server 8000

# 3. 브라우저에서 진단 도구 열기
# http://localhost:8000/diagnostic.html
```

#### 방법 B: 파일로 직접 열기 (진단만 가능)

1. 파일 탐색기에서 `diagnostic.html` 파일을 찾습니다
2. 더블클릭하여 브라우저로 엽니다
3. 진단 결과를 확인합니다

---

### 2단계: 진단 결과 확인 📋

진단 도구가 보여주는 4가지 테스트 결과를 확인하세요:

#### ✅ Test 1: 프로토콜 확인
- **성공**: `http://` 또는 `https://` 프로토콜 사용 중
- **실패**: `file://` 프로토콜 사용 중 ← **가장 흔한 문제!**

#### ✅ Test 2: JSON 파일 로딩
- 7개의 JSON 파일이 모두 로드되어야 합니다
- 하나라도 실패하면 문제가 있는 것입니다

#### ✅ Test 3: HTML 요소 확인
- 모든 HTML 요소가 존재해야 합니다
- 누락된 요소가 있으면 index.html 파일 문제입니다

#### ✅ Test 4: JavaScript 함수 확인
- (참고용) 진단 페이지에서는 실패할 수 있습니다

---

### 3단계: 문제별 해결 방법 🛠️

#### 🔴 문제 1: `file://` 프로토콜 사용 중 (가장 흔함!)

**증상**:
```
현재 프로토콜: file:
현재 URL: file:///Users/.../new_blog/index.html
```

**원인**:
HTML 파일을 더블클릭하여 열었거나, 파일 탐색기에서 드래그하여 열었습니다.

**해결 방법**:

```bash
# Step 1: 터미널 열기
# Mac: Spotlight (Cmd+Space)에서 "Terminal" 입력
# Windows: 시작 메뉴에서 "cmd" 입력

# Step 2: 프로젝트 폴더로 이동
cd /경로/to/new_blog

# 💡 팁: 폴더를 터미널에 드래그하면 경로가 자동으로 입력됩니다!

# Step 3: 웹 서버 실행
python3 -m http.server 8000

# 다음과 같은 메시지가 나오면 성공:
# Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...

# Step 4: 브라우저에서 열기
# 새 탭을 열고 주소창에 입력:
# http://localhost:8000
```

**확인 방법**:
- 브라우저 주소창에 `localhost` 또는 `127.0.0.1`이 표시되어야 합니다
- `file://`이 보이면 여전히 잘못된 방법입니다

---

#### 🔴 문제 2: JSON 파일 로딩 실패

**증상**:
```
❌ data/profile.json - Failed to fetch
❌ data/themes.json - HTTP 404
```

**해결 방법**:

1. **파일이 존재하는지 확인**:
```bash
# 터미널에서 실행
cd new_blog
ls -la data/*.json

# 다음 7개 파일이 있어야 합니다:
# profile.json
# publications.json
# news.json
# projects.json
# posts.json
# authors.json
# themes.json
```

2. **JSON 문법이 올바른지 확인**:
```bash
# 각 JSON 파일 검증
python3 -m json.tool data/profile.json
python3 -m json.tool data/themes.json
# 등등...

# 에러가 없으면 "Valid JSON"
# 에러가 있으면 문법 오류 수정 필요
```

---

#### 🔴 문제 3: HTML 요소 누락

**증상**:
```
❌ #profile-email-display - 요소를 찾을 수 없음
❌ #research-interests-list - 요소를 찾을 수 없음
```

**해결 방법**:

1. **브라우저 캐시 강제 새로고침**:
   - **Mac**: `Cmd + Shift + R`
   - **Windows**: `Ctrl + Shift + R`

2. **index.html이 최신인지 확인**:
   - `index.html` 파일 날짜 확인
   - 필요시 백업에서 복원

---

### 4단계: 최종 확인 ✅

모든 문제를 해결한 후:

1. **웹 서버 실행 확인**:
   ```bash
   python3 -m http.server 8000
   ```

2. **브라우저에서 열기**:
   ```
   http://localhost:8000
   ```

3. **캐시 강제 새로고침**:
   - Mac: `Cmd + Shift + R`
   - Windows: `Ctrl + Shift + R`

4. **정상 작동 확인**:
   - [ ] 페이지가 에러 없이 로드됨
   - [ ] Profile 정보 표시됨
   - [ ] Research Interests가 3개 카테고리로 표시됨
   - [ ] News 섹션이 로드됨
   - [ ] Publications 섹션이 로드됨
   - [ ] 배경에 별들이 반짝임 ✨
   - [ ] Cosmic Space 테마 (인디고/보라색) 적용됨

---

## 🆘 여전히 해결되지 않는다면?

### 브라우저 개발자 도구 확인

1. **개발자 도구 열기**:
   - Mac: `Cmd + Option + I`
   - Windows: `F12` 또는 `Ctrl + Shift + I`

2. **Console 탭 클릭**

3. **에러 메시지 확인**:
   - 빨간색 에러 메시지를 찾습니다
   - 전체 에러 메시지를 복사합니다

4. **에러 종류별 해결**:

   **CORS Error**:
   ```
   Access to fetch at 'file:///...' has been blocked by CORS policy
   ```
   → 웹 서버를 사용하지 않은 것입니다 (문제 1 참조)

   **404 Error**:
   ```
   GET http://localhost:8000/data/profile.json 404 (Not Found)
   ```
   → 파일이 없거나 경로가 잘못되었습니다 (문제 2 참조)

   **JSON Parse Error**:
   ```
   Unexpected token } in JSON at position 123
   ```
   → JSON 문법 오류입니다 (`python3 -m json.tool`로 검증)

   **TypeError**:
   ```
   Cannot read property 'textContent' of null
   ```
   → HTML 요소가 누락되었습니다 (문제 3 참조)

---

## 📞 추가 도움말

### 파일 체크리스트

```bash
new_blog/
├── index.html                 ✅ 있어야 함
├── diagnostic.html            ✅ 있어야 함 (새로 생성됨)
├── css/
│   └── style.css             ✅ 있어야 함
├── js/
│   └── main.js               ✅ 있어야 함
└── data/
    ├── profile.json          ✅ 있어야 함
    ├── publications.json     ✅ 있어야 함
    ├── news.json             ✅ 있어야 함
    ├── projects.json         ✅ 있어야 함
    ├── posts.json            ✅ 있어야 함
    ├── authors.json          ✅ 있어야 함
    └── themes.json           ✅ 있어야 함
```

### 빠른 테스트 명령어

```bash
# 현재 위치 확인
pwd

# 프로젝트 구조 확인
ls -R

# JSON 파일 모두 검증
cd data && for f in *.json; do echo "Testing $f..." && python3 -m json.tool "$f" > /dev/null && echo "✅ $f" || echo "❌ $f"; done

# 웹 서버 시작 (다른 포트)
python3 -m http.server 8080
```

---

## 🎯 요약

**가장 흔한 원인**: `file://` 프로토콜 사용

**가장 빠른 해결책**:
```bash
cd /경로/to/new_blog
python3 -m http.server 8000
# 브라우저: http://localhost:8000
```

**진단 도구**: `http://localhost:8000/diagnostic.html`

**추가 가이드**:
- `TROUBLESHOOTING.md` - 상세한 문제 해결
- `해결_방법.md` - 간단한 해결 가이드
- `README.md` - 전체 사용법

---

**최종 업데이트**: 2026년 2월 4일
