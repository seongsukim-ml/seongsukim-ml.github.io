---
layout: page
permalink: /publications/
years: [2025,2024]
title: publications
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>

<!-- ## Preprints and submissions -->
<!-- 
**\[C\]**: Conference, **\[W\]**: Workshop

1. **\[W\] MOFFlow: Flow Matching for Structure Prediction of Metal-Organic Frameworks**\\
Nayoung Kim, **Seongsu Kim** , Minsu Kim, Jinkyu Park, and Sungsoo Ahn\\
*Neural Information Processing Systems (NeurIPS) AIDrugX Workshop, **2024*** [[arxiv]](https://arxiv.org/abs/2410.17270) [[PDF]](https://arxiv.org/pdf/2410.17270.pdf) [[Code]](https://anonymous.4open.science/r/MOFFlow-3547)

1. **\[C\] Gaussian Plane-Wave Neural Operator for Electron Density Estimation**\\
**Seongsu Kim**, and Sungsoo Ahn\\
*International Conference on Machine Learning (ICML), **2024*** [[arxiv]](https://arxiv.org/abs/2402.04278) [[PDF]](https://arxiv.org/pdf/2402.04278.pdf) [[Code]](https://github.com/seongsukim-ml/GPWNO?tab=readme-ov-file) -->

