---
title: Clinical Applications
date: 2026-07-28
type: landing
---

We bring the methods above to bear on specific disease areas - Alzheimer's disease, brain tumors, and psychiatric disorders - with the goal of personalized diagnostics and improved disease understanding.

- **Alzheimer's Disease & Aging** - amyloid/tau staging and biomarker modeling ([Tom Earnest](/author/tom-earnest/)), AD heterogeneity subtyping in clinical ([Gordon An](/author/gordon-an/)) and research ([Sayantan Kumar](/author/sayantan-kumar/)) cohorts, amyloid PET classification ([Shawn Fan](/author/shawn-fan/), [AmyloidPETNet](https://github.com/sotiraslab/AmyloidPETNet)), and preclinical AD prediction from multimodal amyloid PET and MRI ([yang_preclinical_AD_prediction](https://github.com/sotiraslab/yang_preclinical_AD_prediction), **Jin Yang**/[Braden Yang](/author/braden-yang/)† - *Neurobiology of Aging*, 2026).
- **Neuro-Oncology** - molecular subtype prediction for gliomas ([Satrajit Chakrabarty](/author/satrajit-chakrabarty/)) and organ/tumor segmentation frameworks ([Jin Yang](/author/jin-yang/), [Peijie Qiu](/author/peijie-qiu/)).
- **Psychiatric Disorders** - risk factors for psychopathology across development ([Robert J. Jirsaraie](/author/robertjirsaraie/)).
- **Brain Development** - white matter maturation in neonates (Nazeri et al., external collaboration).
- **Clinical Imaging Informatics** - automated extraction of follow-up recommendations from radiology reports (Pan et al., external collaboration) and segmentation quality control deployed at scale ([Peijie Qiu](/author/peijie-qiu/)).

## Related GitHub Projects

<div class="research-feed">

<article class="card-simple">
	<div class="article-metadata">
		<span class="article-date">2024</span>
		<span class="middot-divider"></span>
		<span class="article-reading-time">Python / R</span>
		<span class="middot-divider"></span>
		<span class="article-categories"><i class="fas fa-folder mr-1"></i>projects</span>
	</div>
	<a class="summary-link" href="https://github.com/sotiraslab/AmyloidPETNet">
		<div class="article-style research-card-content" style="display:flex; align-items:center; justify-content:center; gap:20px;">
			<img src="/research/amyloidPETNet.png" alt="AmyloidPETNet project overview" loading="lazy" style="width:380px; max-width:48%; height:auto; object-fit:contain; flex-shrink:0;">
			<div class="research-card-text" style="flex:1; min-width:0; text-align:left;">
				<div class="section-subheading article-title mb-1 mt-3" style="margin-top:0 !important;">
					<a href="https://github.com/sotiraslab/AmyloidPETNet">AmyloidPETNet</a>
				</div>
				<p>AmyloidPETNet is an end-to-end deep learning pipeline for classifying amyloid positivity directly from minimally processed brain PET scans, without requiring companion structural MRI.</p>
				<p>The repository includes pretrained weights for inference, a training pipeline for adapting the model to new datasets, and preprocessing utilities for NIfTI PET frames and optional visualization outputs.</p>
			</div>
		</div>
	</a>
</article>

<article class="card-simple">
	<div class="article-metadata">
		<span class="article-date">2026</span>
		<span class="middot-divider"></span>
		<span class="article-reading-time">Python</span>
		<span class="middot-divider"></span>
		<span class="article-categories"><i class="fas fa-folder mr-1"></i>projects</span>
	</div>
	<a class="summary-link" href="https://github.com/sotiraslab/yang_preclinical_AD_prediction">
		<div class="article-style research-card-content" style="display:flex; align-items:center; justify-content:center; gap:20px;">
			<img src="https://opengraph.githubassets.com/1/sotiraslab/yang_preclinical_AD_prediction" alt="preclinical AD prediction project overview" loading="lazy" style="width:380px; max-width:48%; height:auto; object-fit:contain; flex-shrink:0;">
			<div class="research-card-text" style="flex:1; min-width:0; text-align:left;">
				<div class="section-subheading article-title mb-1 mt-3" style="margin-top:0 !important;">
					<a href="https://github.com/sotiraslab/yang_preclinical_AD_prediction">yang_preclinical_AD_prediction</a>
				</div>
				<p>This repository supports preclinical Alzheimer's disease prediction from multimodal amyloid PET and MRI.</p>
				<p>The work combines imaging biomarkers and machine learning models for risk stratification in the preclinical AD setting.</p>
			</div>
		</div>
	</a>
</article>

<article class="card-simple">
	<div class="article-metadata">
		<span class="article-date">2025</span>
		<span class="middot-divider"></span>
		<span class="article-reading-time">Python</span>
		<span class="middot-divider"></span>
		<span class="article-categories"><i class="fas fa-folder mr-1"></i>projects</span>
	</div>
	<a class="summary-link" href="https://github.com/sotiraslab/Follow-up-recommendations">
		<div class="article-style research-card-content" style="display:flex; align-items:center; justify-content:center; gap:20px;">
			<img src="https://raw.githubusercontent.com/sotiraslab/Follow-up-recommendations/main/figures/Figure_1.jpg" alt="Follow-up recommendations project overview" loading="lazy" style="width:380px; max-width:48%; height:auto; object-fit:contain; flex-shrink:0;">
			<div class="research-card-text" style="flex:1; min-width:0; text-align:left;">
				<div class="section-subheading article-title mb-1 mt-3" style="margin-top:0 !important;">
					<a href="https://github.com/sotiraslab/Follow-up-recommendations">Follow-up-recommendations</a>
				</div>
				<p>This repository provides code for large-scale machine learning evaluation of follow-up recommendation identification in radiology reports.</p>
				<p>It includes dataset handling, model training, and benchmarking workflows supporting the report-level recommendation extraction studies referenced on this page.</p>
			</div>
		</div>
	</a>
</article>

<article class="card-simple">
	<div class="article-metadata">
		<span class="article-date">2023</span>
		<span class="middot-divider"></span>
		<span class="article-reading-time">Python</span>
		<span class="middot-divider"></span>
		<span class="article-categories"><i class="fas fa-folder mr-1"></i>projects</span>
	</div>
	<a class="summary-link" href="https://github.com/sotiraslab/QCResUNet">
		<div class="article-style research-card-content" style="display:flex; align-items:center; justify-content:center; gap:20px;">
			<img src="https://raw.githubusercontent.com/sotiraslab/QCResUNet/main/images/network.jpg" alt="QCResUNet project overview" loading="lazy" style="width:380px; max-width:48%; height:auto; object-fit:contain; flex-shrink:0;">
			<div class="research-card-text" style="flex:1; min-width:0; text-align:left;">
				<div class="section-subheading article-title mb-1 mt-3" style="margin-top:0 !important;">
					<a href="https://github.com/sotiraslab/QCResUNet">QCResUNet</a>
				</div>
				<p>QCResUNet is a deep learning framework for joint subject-level and voxel-level segmentation quality prediction in medical imaging.</p>
				<p>The repository includes model architectures, training scripts, and quality control workflows to support robust segmentation assessment at scale.</p>
			</div>
		</div>
	</a>
</article>

</div>

[Back to Research](/research/)
