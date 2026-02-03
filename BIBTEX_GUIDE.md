# BibTeX Citation Management Guide

이 문서는 블로그에서 BibTeX citation을 관리하는 방법을 설명합니다.

## 📋 목차
1. [개요](#개요)
2. [BibTeX 추가 방법](#bibtex-추가-방법)
3. [BibTeX 생성 방법](#bibtex-생성-방법)
4. [관리 권장사항](#관리-권장사항)
5. [문제 해결](#문제-해결)

---

## 개요

각 Publication에 BibTeX citation 복사 버튼이 추가되었습니다. 사용자가 버튼을 클릭하면 BibTeX가 자동으로 클립보드에 복사됩니다.

**기능**:
- ✅ BibTeX 버튼 클릭 → 자동 복사
- ✅ 복사 성공 시 "✓ COPIED" 표시 (2초)
- ✅ 복사 실패 시 "✗ FAILED" 표시 (2초)
- ✅ 버튼은 PDF, Code 등 다른 링크와 함께 표시

---

## BibTeX 추가 방법

### 방법 1: .bib 파일 사용 (추천) ⭐

**가장 쉽고 권장하는 방법**입니다. 줄바꿈 처리 필요 없이 그대로 복사-붙여넣기하면 됩니다!

**단계**:

1. `data/bibtex/` 폴더에 `.bib` 파일 생성
   ```bash
   # 파일명은 publication id와 같게 하는 것을 권장
   data/bibtex/kim2025high.bib
   ```

2. Google Scholar나 학회 사이트에서 BibTeX를 **그대로 복사**하여 파일에 붙여넣기
   ```bibtex
   @inproceedings{kim2025high,
     title={High-order Equivariant Flow Matching for DFT},
     author={Kim, Seongsu and Kim, Nayoung and ...},
     booktitle={Advances in Neural Information Processing Systems},
     year={2025}
   }
   ```

3. `publications.json`에 파일 경로 추가
   ```json
   {
     "id": "kim2025high",
     "title": "...",
     "bibtex_file": "data/bibtex/kim2025high.bib"
   }
   ```

**장점**:
- ✅ 줄바꿈 변환 필요 없음
- ✅ 복사-붙여넣기만 하면 됨
- ✅ 파일 편집기로 쉽게 수정 가능
- ✅ Git diff가 더 명확
- ✅ 여러 논문 관리 용이

---

### 방법 2: Inline BibTeX (이전 방식)

JSON 파일 안에 직접 저장하는 방식입니다. **줄바꿈을 `\n`으로 변환해야 합니다.**

```json
{
  "id": "kim2025high",
  "title": "...",
  "bibtex": "@inproceedings{kim2025high,\n  title={...},\n  author={...},\n  year={2025}\n}"
}
```

⚠️ **단점**: 줄바꿈을 일일이 `\n`으로 변환해야 하므로 번거롭습니다. 방법 1을 사용하세요!

---

## BibTeX 생성 방법

### 방법 1: Google Scholar에서 가져오기 (추천)

1. [Google Scholar](https://scholar.google.com)에서 논문 검색
2. 인용 버튼 (") 클릭
3. 하단 "BibTeX" 클릭
4. 텍스트 복사
5. 줄바꿈을 `\n`으로 변경하여 publications.json에 추가

### 방법 2: 학회 사이트에서 다운로드

대부분의 학회 사이트 (NeurIPS, ICML, ICLR 등)는 각 논문 페이지에서 BibTeX를 제공합니다:

- **NeurIPS**: 논문 페이지 → "Cite" 버튼
- **ICML**: 논문 페이지 → "Export citation"
- **ICLR**: OpenReview 페이지 → "Cite" 버튼
- **ArXiv**: 논문 페이지 → 우측 "Export" → "BibTeX"

### 방법 3: 직접 작성

표준 BibTeX 형식을 따라 직접 작성할 수도 있습니다:

**Conference Paper**:
```bibtex
@inproceedings{authorYEARkeyword,
  title={Paper Title},
  author={Last1, First1 and Last2, First2},
  booktitle={Conference Full Name},
  year={2025},
  url={https://...}
}
```

**Journal Paper**:
```bibtex
@article{authorYEARkeyword,
  title={Paper Title},
  author={Last1, First1 and Last2, First2},
  journal={Journal Name},
  volume={10},
  number={2},
  pages={123--145},
  year={2025}
}
```

**Preprint**:
```bibtex
@misc{authorYEARkeyword,
  title={Paper Title},
  author={Last1, First1 and Last2, First2},
  year={2025},
  eprint={2505.12345},
  archivePrefix={arXiv},
  primaryClass={cs.LG}
}
```

---

## 관리 권장사항

### 1. BibTeX Key 명명 규칙

일관된 명명 규칙을 사용하면 관리가 쉽습니다:

**추천 형식**: `firstauthorYEARkeyword`

예시:
- `kim2025high` - Kim (2025) "High-order..."
- `kim2024gaussian` - Kim (2024) "Gaussian..."
- `smith2026flow` - Smith (2026) "Flow..."

### 2. 모든 논문에 BibTeX 추가

- ✅ **Published papers** (Conference, Journal): 반드시 추가
- ✅ **Preprints**: 가능하면 추가 (ArXiv citation 사용)
- ⚠️ **In Submission**: 선택 사항 (아직 공개되지 않은 경우)

### 3. BibTeX 정보 업데이트

논문 상태가 변경되면 BibTeX도 업데이트하세요:

**Preprint → Published**:
```json
// Before (preprint)
"bibtex": "@misc{kim2025,\n  title={...},\n  year={2025},\n  archivePrefix={arXiv}\n}"

// After (published)
"bibtex": "@inproceedings{kim2025,\n  title={...},\n  booktitle={NeurIPS},\n  year={2025}\n}"
```

### 4. 저장소에 BibTeX 파일 보관 (선택사항)

복잡한 프로젝트의 경우, 별도의 `.bib` 파일로 관리하는 것도 좋습니다:

```
new_blog/
├── data/
│   ├── publications.json
│   └── citations/
│       ├── kim2025high.bib
│       ├── kim2024gaussian.bib
│       └── ...
```

**장점**:
- 개별 파일로 관리하여 편집 용이
- Git diff가 더 명확
- 버전 관리 추적 쉬움

**단점**:
- 파일 수 증가
- publications.json과 동기화 필요

현재는 `publications.json`에 직접 저장하는 방식을 사용하므로, 이 방법은 선택사항입니다.

---

## 문제 해결

### Q1: BibTeX 버튼이 표시되지 않아요

**확인사항**:
1. `publications.json`에서 `bibtex` 필드가 있는지 확인
2. `bibtex` 값이 빈 문자열이 아닌지 확인
3. JSON 형식이 올바른지 확인 (쉼표, 따옴표 등)

```json
// ✅ 올바름
"bibtex": "@inproceedings{...}"

// ❌ 잘못됨 (빈 문자열)
"bibtex": ""

// ❌ 잘못됨 (필드 없음)
```

### Q2: 복사 버튼을 눌러도 작동하지 않아요

**확인사항**:
1. 브라우저가 최신 버전인지 확인 (Clipboard API 지원 필요)
2. HTTPS 또는 localhost에서 실행 중인지 확인
3. 브라우저 콘솔에서 에러 확인 (F12 → Console)

**해결방법**:
- Chrome, Firefox, Safari 최신 버전 사용
- HTTP가 아닌 HTTPS 또는 localhost에서 테스트

### Q3: JSON 형식 오류가 발생해요

**흔한 실수**:

1. **줄바꿈 처리 안 함**:
```json
// ❌ 잘못됨
"bibtex": "@inproceedings{
  title={...}
}"

// ✅ 올바름
"bibtex": "@inproceedings{\n  title={...}\n}"
```

2. **이스케이프 문자 누락**:
```json
// ❌ 잘못됨
"bibtex": "@inproceedings{author="Kim"}"

// ✅ 올바름
"bibtex": "@inproceedings{author=\"Kim\"}"
```

3. **마지막 항목 후 쉼표**:
```json
// ❌ 잘못됨
{
  "title": "...",
  "bibtex": "...",  // 마지막 항목 후 쉼표 제거
}

// ✅ 올바름
{
  "title": "...",
  "bibtex": "..."
}
```

### Q4: 복사된 BibTeX 형식이 이상해요

복사된 BibTeX가 한 줄로 나오는 경우, `\n`이 제대로 처리되지 않았을 수 있습니다.

**확인**:
```javascript
// Browser Console에서 테스트
console.log(document.querySelector('.bibtex-btn').getAttribute('data-bibtex'));
```

줄바꿈이 실제 줄바꿈으로 변환되어야 합니다.

---

## 예시 모음

### 완전한 Publication 예시

```json
{
  "id": "kim2025high",
  "title": "High-order Equivariant Flow Matching for Density Functional Theory Hamiltonian Prediction",
  "authors": ["Seongsu Kim", "Nayoung Kim", "Dongwoo Kim", "Sungsoo Ahn"],
  "author_ids": ["seongsu-kim", "nayoung-kim", "dongwoo-kim", "sungsoo-ahn"],
  "venue": "Neural Information Processing Systems (NeurIPS)",
  "year": 2025,
  "type": "conference",
  "award": "Spotlight",
  "selected": true,
  "keywords": ["Equivariance", "Flow Matching", "DFT"],
  "links": {
    "pdf": "https://arxiv.org/abs/2505.18817",
    "code": "https://github.com/seongsukim-ml/QHFlow"
  },
  "bibtex": "@inproceedings{kim2025high,\n  title={High-order Equivariant Flow Matching for Density Functional Theory Hamiltonian Prediction},\n  author={Kim, Seongsu and Kim, Nayoung and Kim, Dongwoo and Ahn, Sungsoo},\n  booktitle={Advances in Neural Information Processing Systems},\n  year={2025}\n}"
}
```

### Python으로 자동 변환

BibTeX를 JSON 형식으로 변환하는 Python 스크립트:

```python
def bibtex_to_json_string(bibtex_text):
    """
    BibTeX 텍스트를 JSON 문자열로 변환
    """
    # 줄바꿈을 \n으로 변환
    json_string = bibtex_text.replace('\n', '\\n')
    # 큰따옴표 이스케이프
    json_string = json_string.replace('"', '\\"')
    return json_string

# 사용 예시
bibtex = """@inproceedings{kim2025high,
  title={High-order Equivariant Flow Matching},
  author={Kim, Seongsu},
  year={2025}
}"""

json_bibtex = bibtex_to_json_string(bibtex)
print(f'"bibtex": "{json_bibtex}"')
```

---

## 요약

### 빠른 체크리스트

- [ ] Google Scholar 또는 학회 사이트에서 BibTeX 가져오기
- [ ] 줄바꿈을 `\n`으로 변환
- [ ] `publications.json`의 해당 논문에 `bibtex` 필드 추가
- [ ] JSON 형식이 올바른지 확인 (쉼표, 따옴표)
- [ ] 브라우저에서 테스트 (버튼 표시 및 복사 기능)
- [ ] Git commit 및 push

---

**참고**: BibTeX는 선택 사항입니다. 버튼은 `bibtex` 필드가 있는 논문에만 표시됩니다.
