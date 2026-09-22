---
layout: about
title: about
permalink: /
subtitle: >
  M.S. Student, Department of Mobility Science and Engineering<br>
  Prospective Ph.D. Student, AVE Lab, KAIST

profile:
  align: right
  image: hyunseo_jang.jpg
  image_circular: false
  more_info: >
    <div class="profile-contact">
      <span>Field Robot Lab, Korea University</span>
      <a href="mailto:kelvin926@korea.ac.kr">kelvin926@korea.ac.kr</a>
    </div>

selected_papers: false
social: true

announcements:
  enabled: false

latest_posts:
  enabled: false
---

<div class="home-intro">
  <p class="home-lede">
    I am an M.S. student in Mobility Science and Engineering at Korea University. My current research explores camera-LiDAR scene understanding and vision-language models for mobile robots. In <a href="/projects/romo-s/">ROMO-S</a>, I investigate whether generated surround views can support spatial understanding beyond a forward-facing camera. This work builds on my experience in autonomous driving, reinforcement learning, and real-world robot integration.
  </p>
  <div class="home-linkbar" aria-label="Profile links">
    <a href="mailto:kelvin926@korea.ac.kr">Email</a>
    <a href="https://github.com/kelvin926">GitHub</a>
    <a href="https://scholar.google.com/citations?user=4UTN6xYAAAAJ">Google Scholar</a>
    <a href="https://orcid.org/0009-0007-1284-4330">ORCID</a>
  </div>
</div>

<div class="home-focus-row" aria-label="Research focus">
  <div class="home-focus-item">
    <strong>Multimodal robot perception</strong>
    <span>Camera-LiDAR scene representations, surround-view generation, and vision-language spatial understanding.</span>
  </div>
  <div class="home-focus-item">
    <strong>Learning-based robotics</strong>
    <span>Mobile manipulation, reinforcement learning, reward design, and policy evaluation.</span>
  </div>
  <div class="home-focus-item">
    <strong>System integration and validation</strong>
    <span>ROS2/Autoware integration, simulation validation, and field testing.</span>
  </div>
</div>

## news

<div class="home-news">
  <div class="home-news-item">
    <div class="home-news-date">2026.09</div>
    <div class="home-news-text">Ongoing work on <a href="/projects/romo-s/">ROMO-S</a>: evaluating generated surround views for vision-language spatial understanding with front-camera and LiDAR inputs.</div>
  </div>
  <div class="home-news-item">
    <div class="home-news-date">2026</div>
    <div class="home-news-text">The <a href="https://doi.org/10.1016/j.aei.2026.105096">CEBO paper</a> is available online in <em>Advanced Engineering Informatics</em>, Vol. 76, Part C, Article 105096.</div>
  </div>
  <div class="home-news-item">
    <div class="home-news-date">2026.07</div>
    <div class="home-news-text"><a href="https://doi.org/10.1109/AIM65483.2026.11658017">KALO</a> was published in IEEE/ASME AIM 2026, pp. 1-6. The paper is available on <a href="https://ieeexplore.ieee.org/document/11658017">IEEE Xplore</a>.</div>
  </div>
  <div class="home-news-item">
    <div class="home-news-date">2026</div>
    <div class="home-news-text">The <a href="/projects/lift-mobile-manipulator/">lift-equipped mobile manipulator paper</a> was published at IEEE/ASME AIM 2026.</div>
  </div>
  <div class="home-news-item">
    <div class="home-news-date">2026</div>
    <div class="home-news-text">The <a href="/projects/local-delivery-rl-experiments/">local delivery robot system paper</a> was accepted to IEEE CASE 2026.</div>
  </div>
  <div class="home-news-item">
    <div class="home-news-date">2025</div>
    <div class="home-news-text">
      <div>Selected for the NRF Master's Student Research Grant (한국연구재단 이공분야 학술연구지원사업 석사과정생 연구장려금) as an individual research project.</div>
      <div class="home-news-note">CEBO-Based Stair-Climbing Wheel Design</div>
    </div>
  </div>
</div>

## selected publications

<div class="home-pub-list">
  <div class="home-pub-item">
    <div class="home-pub-title"><a href="https://doi.org/10.1016/j.aei.2026.105096">Clustering-enhanced Bayesian optimization (CEBO): A case study on T-pedal wheel design of a stair-climbing robot</a></div>
    <div class="home-pub-meta"><em>Advanced Engineering Informatics</em>, Vol. 76, Part C, Article 105096, 2026.</div>
  </div>
  <div class="home-pub-item">
    <div class="home-pub-title"><a href="https://doi.org/10.1109/AIM65483.2026.11658017">KALO: Kangaroo-LocoManipulation for Early Launch Acceleration in a Wheel-Legged Robot</a></div>
    <div class="home-pub-meta">IEEE/ASME AIM 2026, pp. 1-6. <a href="/projects/kalo/">Project</a></div>
  </div>
  <div class="home-pub-item">
    <div class="home-pub-title"><a href="/projects/lift-mobile-manipulator/">A Lift-Equipped Mobile Manipulator Platform for Shelf Transfer in Multi-Level Rack Environments</a></div>
    <div class="home-pub-meta">IEEE/ASME AIM 2026, published.</div>
  </div>
  <div class="home-pub-item">
    <div class="home-pub-title"><a href="/publications/">Design and Implementation of a Local Delivery Robot System: A Reinforcement Learning Approach</a></div>
    <div class="home-pub-meta">IEEE CASE 2026, accepted.</div>
  </div>
</div>

## featured projects

<div class="home-project-grid">
  <a class="home-project-card" href="/projects/kalo/">
    <img class="home-project-thumb" src="{{ '/assets/img/projects/thumb_kalo.webp' | relative_url }}" alt="" loading="eager" decoding="async">
    <span class="home-project-copy">
      <strong>KALO</strong>
      <span>Arm-motion-assisted launch control for improving acceleration and stability in a mobile manipulator.</span>
    </span>
  </a>
  <a class="home-project-card" href="/projects/lift-mobile-manipulator/">
    <img class="home-project-thumb" src="{{ '/assets/img/projects/thumb_lift_mobile_manipulator.webp' | relative_url }}" alt="" loading="lazy" decoding="async">
    <span class="home-project-copy">
      <strong>Lift-equipped mobile manipulator</strong>
      <span>Reinforcement learning for shelf transfer across multi-level rack environments.</span>
    </span>
  </a>
  <a class="home-project-card" href="/projects/cebo-stair-climbing-wheel/">
    <img class="home-project-thumb" src="{{ '/assets/img/projects/thumb_cebo.webp' | relative_url }}" alt="" loading="lazy" decoding="async">
    <span class="home-project-copy">
      <strong>CEBO stair-climbing wheel</strong>
      <span>Bayesian optimization and automated simulation evaluation for stair-climbing wheel design.</span>
    </span>
  </a>
  <a class="home-project-card" href="/projects/lidar-campus-autonomous-driving/">
    <img class="home-project-thumb" src="{{ '/assets/img/projects/thumb_lidar_campus.webp' | relative_url }}" alt="" loading="lazy" decoding="async">
    <span class="home-project-copy">
      <strong>LiDAR-based campus driving</strong>
      <span>RTK-surveyed HD map, Autoware waypoint driving, and pedestrian tests.</span>
    </span>
  </a>
</div>

<p class="home-more-links">Full lists are on <a href="/publications/">publications</a>, <a href="/projects/">projects</a>, and <a href="/cv/">cv</a>.</p>
