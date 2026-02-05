# PDF 파일 관리 가이드

`assets/pdf` 폴더에 PDF 파일을 저장하고 링크로 접근하는 방법을 설명합니다.

## 📁 폴더 구조

```
new_blog/
├── assets/
│   ├── pdf/                          # PDF 파일 저장 폴더
│   │   ├── 251031_QHFlow_NVIDIA_BioNemo_Final.pdf
│   │   ├── GPWNO_ICML_VIDEO_FINAL_240718.pdf
│   │   ├── paper1_slides.pdf
│   │   └── paper2_poster.pdf
│   ├── profile.jpg
│   └── Seongsu_Kim_CV.pdf
├── data/
└── ...
```

## 🎯 용도

`assets/pdf` 폴더는 다음과 같은 파일들을 저장합니다:

- 📊 **발표 슬라이드** (Presentation slides)
- 📄 **논문 PDF** (Paper PDFs)
- 🖼️ **포스터** (Posters)
- 📑 **보충 자료** (Supplementary materials)
- 📋 **기타 학술 문서**

## ✅ PDF 파일 추가하기

### 1. PDF 파일 준비

파일명은 영문, 숫자, 언더스코어(_), 하이픈(-)만 사용하세요:

```bash
✅ 좋은 예:
- 241031_QHFlow_Slides.pdf
- ICML2024_Poster.pdf
- supplementary_material.pdf

❌ 나쁜 예:
- 슬라이드.pdf (한글)
- my slides.pdf (공백)
- presentation (final).pdf (괄호, 공백)
```

### 2. 파일을 assets/pdf에 복사

```bash
# 로컬에서
cp /path/to/your/file.pdf assets/pdf/

# 또는 파일 탐색기로 드래그 앤 드롭
```

### 3. publications.json 또는 news.json에 링크 추가

#### Publications에 추가:

```json
{
  "id": "kim2025high",
  "title": "논문 제목",
  "links": {
    "pdf": "https://arxiv.org/abs/...",
    "code": "https://github.com/...",
    "slides": "assets/pdf/241031_QHFlow_Slides.pdf"
  }
}
```

**지원되는 링크 타입**:
- `pdf`: 논문 PDF (보통 ArXiv)
- `code`: GitHub 코드 저장소
- `slides`: 발표 슬라이드
- `poster`: 포스터
- `supp`: 보충 자료
- `video`: 비디오 링크
- `demo`: 데모 사이트

#### News에 추가:

```json
{
  "id": "talk2025",
  "date": "2025-10-31",
  "content": "📕 Presented at Conference. [Slides](assets/pdf/talk_slides.pdf)"
}
```

## 📊 현재 PDF 파일

현재 `assets/pdf`에 저장된 파일들:

| 파일명 | 용도 | 사용 위치 |
|--------|------|-----------|
| `251031_QHFlow_NVIDIA_BioNemo_Final.pdf` | QHFlow 발표 슬라이드 | kim2025high (Publications) |
| `GPWNO_ICML_VIDEO_FINAL_240718.pdf` | GPWNO ICML 슬라이드 | kim2024Gaussian (Publications) |

## 🔗 링크 경로 규칙

### 상대 경로 (Relative Path)

**형식**: `assets/pdf/filename.pdf`

**사용 예**:
```json
"slides": "assets/pdf/my_presentation.pdf"
```

**장점**:
- ✅ 로컬에서 테스트 가능
- ✅ GitHub Pages, Netlify 등 어디서나 작동
- ✅ 도메인 변경 시에도 작동

**결과 URL**:
- GitHub Pages: `https://username.github.io/assets/pdf/file.pdf`
- Netlify: `https://site-name.netlify.app/assets/pdf/file.pdf`
- 로컬: `file:///path/to/new_blog/assets/pdf/file.pdf`

### 절대 경로 (Absolute Path) - 권장하지 않음

```json
"slides": "https://yourdomain.com/assets/pdf/file.pdf"
```

**단점**:
- ❌ 도메인이 변경되면 모든 링크 수정 필요
- ❌ 로컬에서 테스트 불가능

**권장**: 항상 상대 경로 사용!

## 📝 파일명 네이밍 규칙 (권장)

### 슬라이드:
```
YYMMDD_Project_Conference_Final.pdf
241031_QHFlow_NeurIPS_Final.pdf
```

### 포스터:
```
Conference_Year_Poster.pdf
ICML_2024_Poster.pdf
```

### 보충 자료:
```
ProjectName_Supplementary.pdf
QHFlow_Supplementary.pdf
```

## 🚀 배포 시 주의사항

### GitHub Pages

파일이 `assets/pdf/` 폴더에 있으면 자동으로 배포됩니다:

```bash
git add assets/pdf/new_file.pdf
git commit -m "Add presentation slides"
git push
```

**접근 URL**: `https://username.github.io/assets/pdf/new_file.pdf`

### Netlify / Vercel

동일하게 작동합니다. git push만 하면 자동 배포됩니다.

## 💡 사용 예시

### 예시 1: 발표 슬라이드 추가

1. **PDF 준비**: `241115_ICML_Talk.pdf`

2. **파일 복사**:
   ```bash
   cp ~/Downloads/241115_ICML_Talk.pdf assets/pdf/
   ```

3. **publications.json 업데이트**:
   ```json
   {
     "id": "paper2024",
     "title": "My Amazing Paper",
     "links": {
       "pdf": "https://arxiv.org/abs/...",
       "slides": "assets/pdf/241115_ICML_Talk.pdf"
     }
   }
   ```

4. **Git 커밋**:
   ```bash
   git add assets/pdf/241115_ICML_Talk.pdf
   git add data/publications.json
   git commit -m "Add ICML talk slides"
   git push
   ```

5. **결과**: SLIDES 버튼이 publication에 나타남!

### 예시 2: News에 슬라이드 링크 추가

```json
{
  "id": "talk2025",
  "date": "2025-11-15",
  "content": "📕 Gave a talk at **ICML 2025**. [Slides available here](assets/pdf/241115_ICML_Talk.pdf)!"
}
```

## 🔍 파일 크기 최적화

PDF 파일 크기가 너무 크면 로딩이 느릴 수 있습니다.

### 권장 크기:
- 슬라이드: **< 10MB** (이상적: 2-5MB)
- 포스터: **< 5MB**
- 논문: **< 5MB**

### PDF 압축 방법:

**온라인 도구**:
- [iLovePDF](https://www.ilovepdf.com/compress_pdf)
- [Smallpdf](https://smallpdf.com/compress-pdf)

**명령줄** (macOS/Linux):
```bash
# Ghostscript 사용
gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook \
   -dNOPAUSE -dQUIET -dBATCH \
   -sOutputFile=output.pdf input.pdf
```

**Adobe Acrobat**:
- File → Save As Other → Reduced Size PDF

## 📋 체크리스트

새 PDF 파일 추가 시:

- [ ] 파일명이 영문/숫자/언더스코어만 포함하는가?
- [ ] 파일 크기가 10MB 이하인가?
- [ ] `assets/pdf/` 폴더에 파일을 복사했는가?
- [ ] `publications.json` 또는 `news.json`에 링크를 추가했는가?
- [ ] 상대 경로(`assets/pdf/...`)를 사용했는가?
- [ ] Git에 커밋했는가?

## 🐛 문제 해결

### Q1: PDF 링크가 작동하지 않아요

**확인사항**:
1. 파일이 정말 `assets/pdf/` 폴더에 있는지 확인
2. 파일명 대소문자가 정확한지 확인 (Linux는 대소문자 구분)
3. 경로가 `assets/pdf/...`로 시작하는지 확인

### Q2: 배포 후에도 PDF가 안 보여요

**해결**:
```bash
# 파일이 Git에 추가되었는지 확인
git status

# 추가되지 않았다면
git add assets/pdf/your-file.pdf
git commit -m "Add PDF file"
git push
```

### Q3: 파일 크기가 너무 커요

**해결**:
- PDF 압축 도구 사용 (위 섹션 참조)
- 또는 외부 호스팅 사용 (Google Drive, Dropbox)

### Q4: 파일명에 공백이 있어요

**해결**:
```bash
# 파일명 변경
mv "my slides.pdf" "my_slides.pdf"
```

## 🎯 Best Practices

1. **일관된 네이밍**:
   - 날짜 포함: `YYMMDD_Project_Event.pdf`
   - 소문자와 언더스코어 사용

2. **파일 정리**:
   - 오래된 파일 정기적으로 정리
   - 사용하지 않는 파일 삭제

3. **버전 관리**:
   - 파일 이름에 버전 표시: `slides_v2.pdf`
   - 또는 날짜로 구분: `241031_slides.pdf`

4. **백업**:
   - 원본 파일은 별도 백업
   - Git에는 최종 버전만 커밋

---

이제 `assets/pdf`에 파일을 추가하고 쉽게 링크할 수 있습니다! 🎉
