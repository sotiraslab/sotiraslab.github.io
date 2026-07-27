---
# Leave the homepage title empty to use the site title
title: MINDS Lab
date: 2024-02-18
type: landing

sections:
  - block: hero
    content:
      title: Medical Imaging & Data Science Lab
      text: |
        <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
        <style>
          #section-hero .container {
            max-width: 1320px;
          }
          #section-hero .hero-lead {
            max-width: 1200px;
          }
          #section-hero .hero-title {
            padding-left: 1.5rem;
          }
          .hero-split {
            display: flex;
            gap: 2rem;
            align-items: center;
          }
          .hero-split-text {
            flex: 0 1 34%;
            min-width: 0;
            padding-left: 1.5rem;
            font-size: 0.9rem;
            line-height: 1.55;
          }
          .hero-split-model {
            flex: 1 1 66%;
            min-width: 520px;
            padding-right: 1.5rem;
          }
          .hero-split-model model-viewer {
            width: 100%;
            height: 700px;
            background: transparent;
          }
          .hero-split-cta {
            margin-top: 3.2rem;
            display: flex;
            justify-content: center;
          }
          .hero-split-cta .btn {
            background: linear-gradient(135deg, rgba(214, 221, 228, 0.92), rgba(182, 191, 201, 0.88));
            border: none;
            color: #24303c;
            font-weight: 700;
            letter-spacing: 0.01em;
            text-decoration: none !important;
            box-shadow: 0 12px 28px rgba(56, 66, 77, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.38);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
          }
          .hero-split-cta .btn:hover,
          .hero-split-cta .btn:focus {
            background: linear-gradient(135deg, rgba(199, 208, 218, 0.95), rgba(166, 176, 187, 0.92));
            border: none;
            color: #1e2a35;
            text-decoration: none !important;
          }
          @media (max-width: 900px) {
            #section-hero .hero-title {
              padding-left: 0;
            }
            .hero-split {
              flex-direction: column;
            }
            .hero-split-text {
              padding-left: 0;
              font-size: 0.95rem;
            }
            .hero-split-model {
              padding-right: 0;
              min-width: 0;
              width: 100%;
            }
            .hero-split-model model-viewer {
              height: 500px;
            }
          }
        </style>

        <div class="hero-split">
          <div class="hero-split-text">
            The Sotiras Lab, also known as the Medical Imaging & Data Science (MINDS) Lab, is focused on developing novel computational methods to extract information from imaging data and delineate patterns in large heterogeneous data sets. Our goal is to improve patient-specific diagnosis and advance our understanding of brain structure and function in health and disease.
            <p class="hero-split-cta"><a href="./people/" class="btn btn-primary px-3 py-3">Meet the team →</a></p>
          </div>
          <div class="hero-split-model">
            <model-viewer src="/uploads/brain_anat.glb" alt="3D brain anatomy model" camera-controls auto-rotate ar></model-viewer>
          </div>
        </div>
  
  
  
  - block: markdown
    content:
      title: Latest News
      subtitle:
      text: |
        
        * **August 6, 2026**: [**Tom Earnest**](/author/tom-earnest/) Thesis Defense: "Data-driven staging of neurodegenerative pathology related to Alzheimer's Disease" - Thursday
        * **July 2026**: New Staff! [**Sania**](/author/sania-latif/) and [**Joe**](/author/joe-deluisi/) joined the lab
        * **July 31, 2026**: [**Braden Yang**](/author/braden-yang/) Thesis Defense: "Physics-Informed Deep Learning for Computational Image Analysis and Personalized Medicine in Neuro-Oncology"
        * **July 31, 2026**: [**Soumyendu Ghosh**](/author/sam-ghosh/) Thesis Defense: "Physics-Informed Deep Learning for Computational Image Analysis and Personalized Medicine in Neuro-Oncology"
 
    
    design:
      columns: '1'


  # - block: collection
  #   content:
  #     title: Latest News
  #     subtitle:
  #     text:
  #     count: 5
  #     filters:
  #       author: ''
  #       category: ''
  #       exclude_featured: false
  #       publication_type: ''
  #       tag: ''
  #     offset: 0
  #     order: desc
  #     page_type: post
  #   design:
  #     view: card
  #     columns: '1'
  
  # - block: markdown
  #   content:
  #     title:
  #     subtitle: ''
  #     text:
  #   design:
  #     columns: '1'
  #     background:
  #       image: 
  #         filename: coders.jpg
  #         filters:
  #           brightness: 1
  #         parallax: false
  #         position: center
  #         size: cover
  #         text_color_light: true
  #     spacing:
  #       padding: ['20px', '0', '20px', '0']
  #     css_class: fullscreen
  
  # - block: markdown
  #   content:
  #     title:
  #     subtitle:
  #     text: |
  #       {{% cta cta_link="./people/" cta_text="Meet the team →" %}}
  #   design:
  #     columns: '1'
---