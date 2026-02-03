# News Markdown 사용 가이드

News 섹션에서 Markdown 형식을 사용하여 텍스트를 더 풍부하게 표현할 수 있습니다.

## 📋 지원되는 Markdown 문법

### 1. **굵은 글씨 (Bold)**

```markdown
**굵은 텍스트**
__굵은 텍스트__
```

**예시**:
```json
{
  "content": "Our paper was accepted to **NeurIPS 2025**!"
}
```

**결과**: Our paper was accepted to **NeurIPS 2025**!

---

### 2. *기울임 글씨 (Italic)*

```markdown
*기울임 텍스트*
_기울임 텍스트_
```

**예시**:
```json
{
  "content": "Published in *Nature Machine Intelligence*"
}
```

**결과**: Published in *Nature Machine Intelligence*

---

### 3. 링크 (Links)

```markdown
[표시될 텍스트](URL)
```

**예시**:
```json
{
  "content": "Read our [preprint](https://arxiv.org/abs/2505.18817)"
}
```

**결과**: Read our [preprint](https://arxiv.org/abs/2505.18817)

---

### 4. 조합 사용

여러 Markdown 요소를 함께 사용할 수 있습니다:

**예시**:
```json
{
  "content": "🎉 **Spotlight** at [NeurIPS 2025](https://neurips.cc)!"
}
```

**결과**: 🎉 **Spotlight** at [NeurIPS 2025](https://neurips.cc)!

---

## 📝 실전 예시

### 예시 1: 논문 발표 뉴스
```json
{
  "id": "neurips2025",
  "date": "2025-09-18",
  "title": "NeurIPS 2025 Acceptance",
  "content": "📋 **Two papers** accepted to NeurIPS 2025: one **Spotlight** (first author) and one **Poster** (second author).",
  "inline": true
}
```

### 예시 2: 발표 뉴스 (링크 포함)
```json
{
  "id": "talk2025",
  "date": "2025-10-31",
  "title": "Conference Talk",
  "content": "📕 Presented our work on [QHFlow](https://arxiv.org/abs/2505.18817) at **NVIDIA BioNeMo Reading Group**. [Slides available here](https://example.com/slides.pdf)",
  "inline": true
}
```

### 예시 3: 저널 게재 뉴스
```json
{
  "id": "nature2025",
  "date": "2025-08-10",
  "title": "Nature Publication",
  "content": "🚀 Our paper *\"Machine Learning for Drug Discovery\"* has been accepted to **Nature Machine Intelligence**!",
  "inline": true
}
```

### 예시 4: 수상 뉴스
```json
{
  "id": "award2025",
  "date": "2025-07-15",
  "title": "Best Paper Award",
  "content": "🏆 Received **Best Paper Award** at [ICML 2025](https://icml.cc) for our work on molecular generation!",
  "inline": true
}
```

---

## ⚠️ 주의사항

### 1. JSON 이스케이프
JSON 문자열 안에서는 큰따옴표(`"`)를 사용할 수 없습니다. 링크나 텍스트에 큰따옴표가 필요한 경우 이스케이프해야 합니다:

```json
// ❌ 잘못됨
"content": "Paper titled "AI for Science""

// ✅ 올바름
"content": "Paper titled \"AI for Science\""
```

### 2. 줄바꿈
News content는 한 줄로 작성됩니다. 여러 줄로 보이게 하려면 별도의 news 항목으로 분리하세요.

### 3. 이모지 사용
Markdown과 함께 이모지를 자유롭게 사용할 수 있습니다:
- 📄 논문
- 🎉 축하
- 🚀 출시
- 📕 발표
- 🏆 수상
- 💡 아이디어

---

## 🎨 스타일 가이드

### 권장 형식

**논문 발표**:
```
📄 [Paper Title](link) accepted to **Conference Name Year**
```

**발표/토크**:
```
📕 Presented *topic* at **Event Name**. [Slides](link)
```

**수상**:
```
🏆 Received **Award Name** at [Conference](link)
```

**출시/릴리즈**:
```
🚀 Released **Project Name**: [description]
```

### 일관성 유지

같은 타입의 뉴스는 비슷한 형식을 사용하면 더 깔끔합니다:

```json
{
  "news": [
    {
      "content": "📄 Paper A accepted to **ICML 2025**"
    },
    {
      "content": "📄 Paper B accepted to **NeurIPS 2025**"
    },
    {
      "content": "📄 Paper C accepted to **ICLR 2026**"
    }
  ]
}
```

---

## 🔧 현재 news.json 예시

```json
{
  "news": [
    {
      "id": "nvidia_talk",
      "date": "2025-10-31",
      "title": "NVIDIA BioNeMo Talk",
      "content": "📕 Honored to present our work on [\"QHFlow: ML-accelerated DFT\"](https://arxiv.org/abs/2505.18817) at NVIDIA BioNeMo Reading Group! [Slides](https://example.com/slides.pdf)",
      "inline": true
    },
    {
      "id": "nips2025_accept",
      "date": "2025-09-18",
      "title": "NeurIPS 2025 Acceptance",
      "content": "📋 **Two papers** were accepted to NeurIPS 2025: one **Spotlight** (first author) and one **Poster** (second author).",
      "inline": true
    },
    {
      "id": "icml2024_accept",
      "date": "2024-05-16",
      "title": "ICML 2024 Acceptance",
      "content": "🚀 [\"Gaussian Plane-Wave Neural Operator For Electron Density Estimation\"](https://arxiv.org/abs/2402.04278) accepted to *ICML 2024*.",
      "inline": true
    }
  ]
}
```

---

## 🚀 빠른 템플릿

복사해서 사용하세요:

**논문 발표**:
```json
{
  "id": "unique_id",
  "date": "2025-XX-XX",
  "title": "Conference Acceptance",
  "content": "📄 [\"Paper Title\"](paper_url) accepted to **Conference Year**!",
  "inline": true
}
```

**발표**:
```json
{
  "id": "unique_id",
  "date": "2025-XX-XX",
  "title": "Talk Title",
  "content": "📕 Presented at **Event Name**. [Slides](slides_url)",
  "inline": true
}
```

**수상**:
```json
{
  "id": "unique_id",
  "date": "2025-XX-XX",
  "title": "Award",
  "content": "🏆 Received **Award Name** at [Conference](url)",
  "inline": true
}
```

**프로젝트 출시**:
```json
{
  "id": "unique_id",
  "date": "2025-XX-XX",
  "title": "Project Launch",
  "content": "🚀 Released **Project Name**: [Description]. [Check it out](project_url)",
  "inline": true
}
```

---

## 💡 팁

1. **간결하게**: 너무 긴 텍스트는 피하고 핵심만 전달
2. **링크 활용**: 자세한 내용은 링크로 연결
3. **이모지 적절히**: 한두 개 정도만 사용
4. **일관성**: 비슷한 뉴스는 비슷한 형식 사용
5. **테스트**: 변경 후 브라우저에서 확인

---

이제 News를 더 풍부하게 표현할 수 있습니다! 🎉
