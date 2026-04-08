---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Hi! I am an AI/ML Research Manager at [S-Lab, Nanyang Technological University](https://www.ntu.edu.sg/s-lab), supervised by [Prof. Ziwei Liu](https://liuziwei7.github.io/). I received my B.Eng. in Computer Science from NTU in 2024 with **First Class Honours (Highest Distinction)**.

My research focuses on **Agent Systems** (Agent Memory, Agentic RL, RAG) and **Foundation Models** (Multimodal LLMs, Benchmarking and Evaluation). I have published papers at top venues including CVPR and NAACL, with total <a href='https://scholar.google.com.sg/citations?user=_oHHACwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a> on Google Scholar.

My work has been widely adopted across the AI community, including by **OpenAI**, **Google DeepMind**, **Alibaba**, **ByteDance**, and many other leading AI labs.


# News
- *2026.02*: &nbsp; One paper accepted to **CVPR 2026** (OpenMMReasoner).
- *2025.06*: &nbsp; One paper accepted to **Findings of NAACL 2025** (LMMs-Eval).
- *2025.01*: &nbsp; Released **Video-MMMU** benchmark -- the only video benchmark featured in OpenAI GPT-5 and Google Gemini 3.0 official releases.
- *2024.08*: &nbsp; Joined **NTU S-Lab** as AI/ML Research Manager.
- *2024.06*: &nbsp; Graduated from NTU with **First Class Honours (Highest Distinction)**, GPA: 4.83/5.

# Selected Publications

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2026</div><img src='images/openmmreasoner.png' alt="OpenMMReasoner" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[OpenMMReasoner: Pushing the Frontiers for Multimodal Reasoning with an Open and General Recipe](https://arxiv.org/abs/2503.21631)

Kaichen Zhang, ..., **Kairui Hu**, et al.

[**[arXiv]**](https://arxiv.org/abs/2503.21631) [**[GitHub]**](https://github.com/EvolvingLMMs-Lab/OpenMMReasoner)

**TL;DR:** An open and general recipe for pushing the frontiers of multimodal reasoning, achieving strong performance across comprehensive multimodal reasoning benchmarks.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv 2025</div><img src='images/videommmu.png' alt="Video-MMMU" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Video-MMMU: Evaluating Knowledge Acquisition from Multi-Discipline Professional Videos](https://arxiv.org/abs/2501.13826)

**Kairui Hu**, et al.

[**[arXiv]**](https://arxiv.org/abs/2501.13826) [**[Project]**](https://videommmu.github.io/) [**[GitHub]**](https://github.com/EvolvingLMMs-Lab/VideoMMMU)

**TL;DR:** The first video reasoning benchmark for LMMs, evaluating knowledge acquisition from multi-discipline professional videos. Adopted by Google DeepMind (Gemini), OpenAI (GPT-5), Alibaba (Qwen), ByteDance (Seed), and many others. The **only video benchmark** in the official releases of OpenAI GPT-5 and Google Gemini 3.0.
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NAACL 2025</div><img src='images/lmms_eval.png' alt="LMMs-Eval" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[LMMs-Eval: Reality Check on the Evaluation of Large Multimodal Models](https://arxiv.org/abs/2407.12772)

Kaichen Zhang, ..., **Kairui Hu**, et al.

[**[arXiv]**](https://arxiv.org/abs/2407.12772) [**[GitHub]**](https://github.com/EvolvingLMMs-Lab/lmms-eval)

**TL;DR:** A unified evaluation framework supporting 100+ tasks across text, image, video, and audio for 30+ multimodal models. 3.8k+ GitHub stars. Widely adopted across the GenAI community for model development and benchmarking.
</div>
</div>


# Honors and Awards
- *2024*: NTU Information Technology Management Association (ITMA) **Gold Medal** cum Book Prize
- *2022, 2023*: NTU **President Research Scholar** (with Merit), URECA Undergraduate Research Programme
- *2020-2022*: **Dean's List** (Top 5%), College of Computing and Data Science, NTU
- *2019-2024*: NTU Science and Engineering Undergraduate **Scholarship** (SM2), Ministry of Education Singapore

# Education
- *2020.08 - 2024.06*, B.Eng. in Computer Science, **Nanyang Technological University**, Singapore. GPA: 4.83/5 (First Class Honours, Highest Distinction).
