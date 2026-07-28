---
title: AI Foundations & Translational Imaging Science
date: 2026-07-28
type: landing
---

This pillar spans representation learning, AI algorithms for image analysis, and AI-enabled platforms that support translational imaging research - from foundational methods through to tools deployed on real clinical data.

**Representation learning**

- [Abdalla Bani](/author/abdalla-bani/) - [Scalable Orthonormal Projective NMF via Diversified Stochastic Optimization](/publication/bani-scalable-2023/) (*Information Processing in Medical Imaging (IPMI)*, 2023); code released as [dsopNMF](https://github.com/sotiraslab/dsopNMF).
- [Pan Xiao](/author/pan-xiao/) (alum) - [A generative-discriminative deep learning approach to classify radiology reports based on the presence of follow up recommendations](/publication/xiao-generative-discriminative-2023/) (*Medical Imaging 2023: Imaging Informatics for Healthcare, Research, and Applications*); implementation released as [SC-VAE](https://github.com/sotiraslab/SC-VAE).
- [Peijie Qiu](/author/peijie-qiu/) - VAE framework based on Wasserstein barycenters (*AAAI Conference on Artificial Intelligence*, 2025, oral).

**Image analysis algorithms**

- [Satrajit Chakrabarty](/author/satrajit-chakrabarty/) (alum) - [MRI-based classification of IDH mutation and 1p/19q codeletion status of gliomas using a 2.5 D hybrid multi-task convolutional neural network](/publication/chakrabarty-mri-based-2023/) (*Neuro-Oncology Advances*, 2023).
- [Satrajit Chakrabarty](/author/satrajit-chakrabarty/) (alum) - [Non-invasive classification of IDH mutation status of gliomas from multi-modal MRI using a 3D convolutional neural network](/publication/chakrabarty-non-invasive-2023/) (*Medical Imaging 2023: Computer-Aided Diagnosis*).
- [Jin Yang](/author/jin-yang/) (alum) - [Abdominal CT pancreas segmentation using multi-scale convolution with aggregated transformations](/publication/yang-abdominal-2023/) (*Medical Imaging 2023: Computer-Aided Diagnosis*), and volumetric segmentation via Dynamic Large Kernel / Dynamic Feature Fusion, with [Peijie Qiu](/author/peijie-qiu/); released as [DLK](https://github.com/sotiraslab/DLK) (D-Net).
- [Peijie Qiu](/author/peijie-qiu/) - [QCResUNet: Joint Subject-Level and Voxel-Level Prediction of Segmentation Quality](/publication/qiu-qcresunet-2023/) (*Medical Image Computing and Computer-Assisted Intervention*, 2023); released as [QCResUNet](https://github.com/sotiraslab/QCResUNet).

**Translational platforms**

- [Shawn Fan](/author/shawn-fan/) (alum) - AI tool to interpret amyloid PET scans (*Radiology*, 2024); released as [AmyloidPETNet](https://github.com/sotiraslab/AmyloidPETNet), an end-to-end pipeline classifying amyloid positivity directly from minimally processed PET scans without a companion structural MRI.
- [Pan Xiao](/author/pan-xiao/) and collaborators - AI tool to analyze radiology reports for follow-up recommendations (preliminary version: *Medical Imaging 2023: Imaging Informatics for Healthcare, Research, and Applications*; journal extension: *Radiology*, 2025); released as [Follow-up-recommendations](https://github.com/sotiraslab/Follow-up-recommendations). (External collaborator, not a current lab member.)
- [Satrajit Chakrabarty](/author/satrajit-chakrabarty/) (alum) - modular, AI-driven pipelines for large-scale, reproducible imaging research, contributed as part of the NIH-funded I3CR center (*JCO Clinical Cancer Informatics*, 2023).

## Related GitHub Projects

<div class="research-feed">

<article class="card-simple">
	<div class="article-metadata">
		<span class="article-date">2023</span>
		<span class="middot-divider"></span>
		<span class="article-reading-time">Python</span>
		<span class="middot-divider"></span>
		<span class="article-categories"><i class="fas fa-folder mr-1"></i>projects</span>
	</div>
	<a class="summary-link" href="https://github.com/sotiraslab/dsopNMF">
		<div class="article-style research-card-content" style="display:flex; align-items:center; justify-content:center; gap:20px;">
			<img src="https://github.com/user-attachments/assets/87487488-482a-4605-baf6-54e1629578a7" alt="dsopNMF project overview" loading="lazy" style="width:380px; max-width:48%; height:auto; object-fit:contain; flex-shrink:0;">
			<div class="research-card-text" style="flex:1; min-width:0; text-align:left;">
				<div class="section-subheading article-title mb-1 mt-3" style="margin-top:0 !important;">
					<a href="https://github.com/sotiraslab/dsopNMF">dsopNMF</a>
				</div>
				<p>This repository accompanies the IPMI 2023 work on scalable orthonormal projective NMF via diversified stochastic optimization.</p>
				<p>It provides opNMF/sopNMF implementations with stochastic and DPP-based sampling strategies to improve scalability for large neuroimaging datasets.</p>
			</div>
		</div>
	</a>
</article>

<article class="card-simple">
	<div class="article-metadata">
		<span class="article-date">2024</span>
		<span class="middot-divider"></span>
		<span class="article-reading-time">Python</span>
		<span class="middot-divider"></span>
		<span class="article-categories"><i class="fas fa-folder mr-1"></i>projects</span>
	</div>
	<a class="summary-link" href="https://github.com/sotiraslab/SC-VAE">
		<div class="article-style research-card-content" style="display:flex; align-items:center; justify-content:center; gap:20px;">
			<img src="https://opengraph.githubassets.com/1/sotiraslab/SC-VAE" alt="SC-VAE project overview" loading="lazy" style="width:380px; max-width:48%; height:auto; object-fit:contain; flex-shrink:0;">
			<div class="research-card-text" style="flex:1; min-width:0; text-align:left;">
				<div class="section-subheading article-title mb-1 mt-3" style="margin-top:0 !important;">
					<a href="https://github.com/sotiraslab/SC-VAE">SC-VAE</a>
				</div>
				<p>SC-VAE is the official implementation of Sparse Coding-based Variational Autoencoder with learned ISTA for representation learning.</p>
				<p>The repository contains model training code, configuration-based experiments, and associated resources for reproducing results from the published work.</p>
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
				<p>The repository includes model architectures, training scripts, and quality control workflows to support robust segmentation assessment.</p>
			</div>
		</div>
	</a>
</article>

<article class="card-simple">
	<div class="article-metadata">
		<span class="article-date">2024</span>
		<span class="middot-divider"></span>
		<span class="article-reading-time">Python</span>
		<span class="middot-divider"></span>
		<span class="article-categories"><i class="fas fa-folder mr-1"></i>projects</span>
	</div>
	<a class="summary-link" href="https://github.com/sotiraslab/DLK">
		<div class="article-style research-card-content" style="display:flex; align-items:center; justify-content:center; gap:20px;">
			<img src="https://raw.githubusercontent.com/sotiraslab/DLK/main/Figures/DNet.png" alt="DLK D-Net project overview" loading="lazy" style="width:380px; max-width:48%; height:auto; object-fit:contain; flex-shrink:0;">
			<div class="research-card-text" style="flex:1; min-width:0; text-align:left;">
				<div class="section-subheading article-title mb-1 mt-3" style="margin-top:0 !important;">
					<a href="https://github.com/sotiraslab/DLK">DLK (D-Net)</a>
				</div>
				<p>This repository provides the official implementation of D-Net, introducing Dynamic Large Kernel (DLK) and Dynamic Feature Fusion (DFF) modules for volumetric medical image segmentation.</p>
				<p>The framework combines hierarchical transformer representations with adaptive multi-scale convolutional components to improve segmentation performance while keeping computational complexity practical.</p>
			</div>
		</div>
	</a>
</article>

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
					<a href="https://github.com/sotiraslab/Follow-up-recommendations">Follow-up recommendations</a>
				</div>
				<p>This repository provides code for large-scale machine learning evaluation of follow-up recommendation identification in radiology reports.</p>
				<p>It includes dataset handling, model training, and benchmarking workflows supporting the Radiology 2025 study on report-level recommendation extraction.</p>
			</div>
		</div>
	</a>
</article>

</div>

[Back to Research](/research/)
