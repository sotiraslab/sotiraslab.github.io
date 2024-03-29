---
title: Normative Modeling using Multimodal Variational Autoencoders to Identify Abnormal
  Brain Structural Patterns in Alzheimer Disease

authors:
- Sayantan Kumar
- Philip Payne
- admin

date: '2021-01-01'

publishDate: '2024-02-20T02:07:01.008196Z'

publication_types:
- paper-conference

publication: '*Medical Imaging 2023: Computer-Aided Diagnosis.*'

abstract: Normative modelling is a method for understanding the underlying heterogeneity within brain disorders like Alzheimer Disease (AD), by quantifying how each patient deviates from the expected normative pattern that has been learned from a healthy control distribution. Existing deep learning based normative models have been applied on only single modality Magnetic Resonance Imaging (MRI) neuroimaging data. However, these do not take into account the complementary information offered by multimodal MRI, which is essential for understanding a multifactorial disease like AD. To address this limitation, we propose a multi-modal variational autoencoder (mmVAE) based normative modelling framework that can capture the joint distribution between different modalities to identify abnormal brain volume deviations due to AD. Our multi-modal framework takes as input Freesurfer processed brain region volumes from T1-weighted (cortical and subcortical) and T2-weighed (hippocampal) scans of cognitively normal participants to learn the morphological characteristics of the healthy brain. The estimated normative model is then applied on AD patients to quantify the deviation in brain volumes and identify abnormal brain pattern deviations due to the progressive stages of AD. We compared our proposed mmVAE with a baseline unimodal VAE having a single encoder and decoder and the two modalities concatenated as unimodal input. Our experimental results show that deviation maps generated by mmVAE are more sensitive to disease staging within AD, have a better correlation with patient cognition and result in higher number of brain regions with statistically significant deviations compared to the unimodal baseline model.

# Summary. An optional shortened abstract.
#summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.

tags: []

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://www.spiedigitallibrary.org/conference-proceedings-of-spie/12465/1246503/Normative-modeling-using-multimodal-variational-autoencoders-to-identify-abnormal-brain/10.1117/12.2654369.short#_=_'
#url_code: 
#url_dataset: 
url_poster: 'https://drive.google.com/file/d/12cgINdFOA10o4wuDUIt5_CmFxA1L_aun/view'
#url_project: ''
url_slides: 'https://docs.google.com/presentation/d/13uWGCq-Co8ZOtEEuAgeXzQxv_0F9JK_B/edit#slide=id.p1'
#url_source: 'https://github.com/HugoBlox/hugo-blox-builder'
#url_video: 'https://youtube.com'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 
  focal_point: ''
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.

# projects:
#   - example

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.

#slides: example
---


---
