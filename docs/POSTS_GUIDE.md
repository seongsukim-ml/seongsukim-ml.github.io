# 📝 Posts Writing Guide

이 가이드는 Markdown을 사용해 블로그 포스트를 쉽게 작성하는 방법을 설명합니다.

## Quick Start

### 방법 1: Markdown으로 작성하기 (권장)

1. `posts/` 폴더에 `.md` 파일을 생성합니다
2. Front matter와 내용을 작성합니다
3. `convert_posts.py` 스크립트를 실행합니다
4. 자동으로 `posts.json`이 생성/업데이트됩니다

### 방법 2: JSON으로 직접 작성하기

`data/posts.json` 파일을 직접 편집할 수도 있습니다.

---

## Markdown Post 형식

### Front Matter

Markdown 파일의 맨 위에 YAML front matter를 작성합니다:

```markdown
---
title: "Your Post Title Here"
date: "2026-01-15"
category: "Research"
tags:
  - Machine Learning
  - AI
  - Research
excerpt: "A brief summary of your post that will be displayed on the main page."
link: "posts/your-post.html"
---

# Your Post Content

Write your post content here using Markdown...
```

### 필수 필드

- `title`: 포스트 제목
- `date`: 발행일 (YYYY-MM-DD 형식)
- `category`: 카테고리 (예: Research, Tutorial, News)
- `excerpt`: 요약문 (메인 페이지에 표시됨)

### 선택 필드

- `tags`: 태그 리스트
- `link`: 전체 포스트 링크 (HTML 파일 경로)

---

## 예시 Post

### 파일: `posts/my-first-post.md`

```markdown
---
title: "Understanding Quantum Machine Learning"
date: "2026-02-03"
category: "Research"
tags:
  - Quantum Computing
  - Machine Learning
  - AI
excerpt: "An introduction to the fascinating intersection of quantum computing and machine learning, exploring how quantum algorithms can enhance ML models."
link: "posts/quantum-ml.html"
---

# Understanding Quantum Machine Learning

Quantum machine learning (QML) represents an exciting frontier...

## Why Quantum Computing?

Traditional computers process information in bits...

## Applications

1. **Drug Discovery**: Quantum computers can simulate molecular interactions
2. **Optimization Problems**: Finding optimal solutions faster
3. **Pattern Recognition**: Enhanced feature detection

## Conclusion

The future of QML is bright...
```

---

## Markdown 변환 스크립트 사용법

### 1. 스크립트 설치

```bash
# Python 3 필요
pip install pyyaml markdown
```

### 2. Post 작성

`posts/` 폴더에 `.md` 파일을 작성합니다.

### 3. 변환 실행

```bash
python convert_posts.py
```

스크립트는:
- `posts/` 폴더의 모든 `.md` 파일을 읽습니다
- Front matter를 파싱합니다
- `data/posts.json`을 업데이트합니다

### 4. 결과 확인

브라우저에서 `index.html`을 열어 새 포스트를 확인합니다.

---

## 지원되는 Markdown 문법

- **헤딩**: `#`, `##`, `###`
- **강조**: `**bold**`, `*italic*`
- **링크**: `[text](url)`
- **리스트**: `- item` 또는 `1. item`
- **코드**: `` `inline` `` 또는 ``` code block ```
- **인용**: `> quote`

---

## 카테고리 가이드

추천 카테고리:

- **Research**: 연구 관련 포스트
- **Tutorial**: 튜토리얼 및 하우투
- **News**: 뉴스 및 공지사항
- **Review**: 논문 리뷰 및 서평
- **Opinion**: 의견 및 에세이
- **Technical**: 기술 문서

---

## 태그 가이드

효과적인 태그 사용:

✅ **좋은 예시**:
- Machine Learning
- Neural Networks
- Python
- Computer Vision

❌ **피해야 할 예시**:
- ml (너무 짧음)
- This is a very long tag name (너무 김)
- General (너무 광범위)

---

## HTML Post 작성 (고급)

더 복잡한 레이아웃이 필요하면 `posts/` 폴더에 HTML 파일을 직접 작성할 수 있습니다.

### 예시 템플릿

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Post Title</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <nav>
        <a href="../index.html">← Back to Home</a>
    </nav>

    <article>
        <h1>Your Post Title</h1>
        <p class="post-meta">February 3, 2026</p>

        <p>Your post content here...</p>
    </article>

    <script src="../js/main.js"></script>
</body>
</html>
```

---

## 자동화 팁

### Git Hook 설정

`.git/hooks/pre-commit`에 다음을 추가하면 커밋 전에 자동으로 posts를 변환합니다:

```bash
#!/bin/bash
python convert_posts.py
git add data/posts.json
```

### VS Code 설정

`.vscode/tasks.json`:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Convert Posts",
      "type": "shell",
      "command": "python convert_posts.py",
      "problemMatcher": []
    }
  ]
}
```

---

## 문제 해결

### Q: 변환 스크립트가 작동하지 않아요

A: Python 3과 필요한 패키지가 설치되어 있는지 확인하세요:
```bash
python --version  # Python 3.6 이상
pip install pyyaml markdown
```

### Q: 한글이 깨져요

A: Markdown 파일을 UTF-8로 저장했는지 확인하세요.

### Q: Front matter 파싱 오류

A: YAML 문법이 정확한지 확인하세요. 들여쓰기와 콜론 사용에 주의하세요.

---

## 더 알아보기

- [Markdown Guide](https://www.markdownguide.org/)
- [YAML Syntax](https://yaml.org/spec/1.2/spec.html)
- [Front Matter Guide](https://jekyllrb.com/docs/front-matter/)
