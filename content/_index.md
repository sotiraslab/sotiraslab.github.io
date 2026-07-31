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
          .hero-carousel {
            position: relative;
            width: 100%;
          }
          .hero-carousel-viewport {
            overflow: hidden;
            border-radius: 1.1rem;
            box-shadow: none;
            background: transparent;
          }
          .hero-carousel-track {
            display: flex;
            width: 100%;
            transition: transform 320ms ease;
            will-change: transform;
          }
          .hero-carousel-slide {
            flex: 0 0 100%;
            min-width: 100%;
            position: relative;
            display: grid;
            place-items: center;
            min-height: 700px;
            padding: 1rem;
          }
          .hero-carousel-slide model-viewer,
          .hero-carousel-slide img {
            width: 100%;
            height: 700px;
            background: transparent;
            object-fit: contain;
          }
          .hero-carousel-slide img {
            width: auto;
            max-width: 100%;
          }
          .hero-carousel-controls {
            position: absolute;
            inset: 50% 0 auto 0;
            display: flex;
            justify-content: space-between;
            transform: translateY(-50%);
            padding: 0 0.5rem;
            pointer-events: none;
          }
          .hero-carousel-button {
            pointer-events: auto;
            width: 2rem;
            height: 2rem;
            border: 0;
            border-radius: 0;
            background: transparent;
            color: rgba(30, 43, 64, 0.72);
            font-size: 1.75rem;
            line-height: 1;
            display: grid;
            place-items: center;
            cursor: pointer;
          }
          .hero-carousel-button:hover,
          .hero-carousel-button:focus {
            background: transparent;
            color: #00205d;
            outline: none;
          }
          .hero-carousel-dots {
            display: flex;
            justify-content: center;
            gap: 0.55rem;
            padding-top: 0.85rem;
          }
          .hero-carousel-dot {
            width: 0.72rem;
            height: 0.72rem;
            border-radius: 999px;
            border: 0;
            background: rgba(0, 32, 93, 0.22);
            cursor: pointer;
          }
          .hero-carousel-dot.is-active {
            background: #00205d;
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
            .hero-carousel-slide {
              height: 500px;
              min-height: 500px;
            }
            .hero-carousel-slide model-viewer,
            .hero-carousel-slide img {
              height: 500px;
            }
            .hero-carousel-controls {
              padding: 0 0.35rem;
            }
            .hero-carousel-button {
              width: 1.9rem;
              height: 1.9rem;
              font-size: 1.45rem;
            }
          }
        </style>

        <script>
          document.addEventListener('DOMContentLoaded', function () {
            const carousel = document.querySelector('.hero-carousel');
            if (!carousel) {
              return;
            }

            const track = carousel.querySelector('.hero-carousel-track');
            const slides = Array.from(carousel.querySelectorAll('.hero-carousel-slide'));
            const dots = Array.from(carousel.querySelectorAll('.hero-carousel-dot'));
            const prevButton = carousel.querySelector('[data-carousel-prev]');
            const nextButton = carousel.querySelector('[data-carousel-next]');
            let currentIndex = 0;

            const updateCarousel = function (index) {
              currentIndex = (index + slides.length) % slides.length;
              track.style.transform = 'translateX(' + (-100 * currentIndex) + '%)';
              dots.forEach(function (dot, dotIndex) {
                dot.classList.toggle('is-active', dotIndex === currentIndex);
                dot.setAttribute('aria-selected', dotIndex === currentIndex ? 'true' : 'false');
              });
            };

            prevButton.addEventListener('click', function () {
              updateCarousel(currentIndex - 1);
            });

            nextButton.addEventListener('click', function () {
              updateCarousel(currentIndex + 1);
            });

            dots.forEach(function (dot, index) {
              dot.addEventListener('click', function () {
                updateCarousel(index);
              });
            });

            updateCarousel(0);
          });
        </script>

        <div class="hero-split">
          <div class="hero-split-text">
            The Sotiras Lab, also known as the Medical Imaging & Data Science (MINDS) Lab, is focused on developing novel computational methods to extract information from imaging data and delineate patterns in large heterogeneous data sets. Our goal is to improve patient-specific diagnosis and advance our understanding of brain structure and function in health and disease.
            <p class="hero-split-cta"><a href="./people/" class="btn btn-primary px-3 py-3">Meet the team →</a></p>
          </div>
          <div class="hero-split-model">
            <div class="hero-carousel" aria-label="Hero media carousel">
              <div class="hero-carousel-viewport">
                <div class="hero-carousel-track">
                  <section class="hero-carousel-slide" aria-label="3D brain anatomy model slide">
                    <model-viewer src="/uploads/brain_anat.glb" alt="3D brain anatomy model" camera-controls auto-rotate ar></model-viewer>
                  </section>
                  <section class="hero-carousel-slide" aria-label="Brain processing illustration slide">
                    <img src="/uploads/puzz_temp_clean.png" alt="Brain processing illustration" />
                  </section>
                </div>
              </div>
              <div class="hero-carousel-controls" aria-hidden="false">
                <button type="button" class="hero-carousel-button" data-carousel-prev aria-label="Previous slide">‹</button>
                <button type="button" class="hero-carousel-button" data-carousel-next aria-label="Next slide">›</button>
              </div>
              <div class="hero-carousel-dots" role="tablist" aria-label="Hero carousel slides">
                <button type="button" class="hero-carousel-dot is-active" aria-label="Show 3D brain model" aria-selected="true"></button>
                <button type="button" class="hero-carousel-dot" aria-label="Show image slide" aria-selected="false"></button>
              </div>
            </div>
          </div>
        </div>
  
  
  
  - block: markdown
    content:
      title: Latest News
      subtitle:
      text: |
        
        * **August 6, 2026**: [**Tom Earnest**](/author/tom-earnest/) Thesis Defense: "Data-driven staging of neurodegenerative pathology related to Alzheimer's Disease" - Thursday
        * **July 13, 2026**: New Staff! [**Sania Latif**](/author/sania-latif/) and [**Joe Deluisi**](/author/joe-deluisi/) joined the lab
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