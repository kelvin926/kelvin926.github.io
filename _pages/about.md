---
layout: about
title: about
permalink: /
subtitle: >
  M.S. Student, Department of Mobility Science and Engineering<br>
  Field Robot Lab, Korea University<br>
  Advisor: Prof. Youngeun Song

profile:
  align: right
  image: hyunseo_jang.jpg
  image_circular: false
  more_info: >
    <div class="profile-contact">
      <span>Field Robot Lab</span>
      <span>Korea University</span>
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
    I am an M.S. student in the Field Robot Lab at Korea University. My research focuses on simulation-based robot learning and control for mobile robotic systems, with an emphasis on mobile manipulation, wheeled-legged loco-manipulation, and stability-aware evaluation.
    Recent projects include Isaac Lab/RSL-RL policy training for KALO and shelf-transfer mobile manipulation, ROS/Autoware-based AMR integration, and CEBO-based simulation evaluation-loop automation.
  </p>
  <div class="home-linkbar" aria-label="Profile links">
    <a href="mailto:kelvin926@korea.ac.kr">Email</a>
    <a href="https://github.com/kelvin926">GitHub</a>
    <a href="https://scholar.google.com/citations?user=dEmD_rQAAAAJ">Google Scholar</a>
    <a href="https://orcid.org/0009-0007-1284-4330">ORCID</a>
  </div>
</div>

<div class="home-focus-row" aria-label="Research focus">
  <div class="home-focus-item">
    <strong>Mobile manipulation and dynamic carrying control</strong>
    <span>Object-conditioned carrying, shelf-transfer tasks, and bimanual/mobile manipulation.</span>
  </div>
  <div class="home-focus-item">
    <strong>Robot learning and simulation</strong>
    <span>Isaac Lab, RSL-RL, PPO, MDP/reward design, curriculum design, and policy evaluation.</span>
  </div>
  <div class="home-focus-item">
    <strong>Stability-aware evaluation</strong>
    <span>Object tilt, grasp stability, base slip, chassis leveling, and safety metrics.</span>
  </div>
  <div class="home-focus-item">
    <strong>AMR perception and navigation</strong>
    <span>ROS/Autoware, LiDAR mapping, detection/tracking, and campus-scale validation.</span>
  </div>
</div>

## current research direction

<div class="home-research-direction">
  <p>
    I am interested in object-conditioned robot learning and control for mobile manipulation. In particular, I aim to study how mobile manipulators can adjust arm motion, base acceleration, and safety margins depending on object properties such as mass, shape, grasp stability, and fragility.
  </p>
  <p>
    This direction grew from my KALO, shelf-transfer mobile-manipulation, and AMR integration projects, where I worked on policy training, task formulation, and stability-oriented evaluation.
  </p>
</div>

## news

<div class="home-news">
  <div class="home-news-item">
    <div class="home-news-date">2026</div>
    <div class="home-news-text">KALO was accepted to IEEE/ASME AIM 2026.</div>
  </div>
  <div class="home-news-item">
    <div class="home-news-date">2026</div>
    <div class="home-news-text">The lift-equipped mobile manipulator paper was accepted to IEEE/ASME AIM 2026.</div>
  </div>
  <div class="home-news-item">
    <div class="home-news-date">2026</div>
    <div class="home-news-text">The local delivery robot system paper was accepted to IEEE CASE 2026.</div>
  </div>
  <div class="home-news-item">
    <div class="home-news-date">2026</div>
    <div class="home-news-text">The CEBO manuscript was revised and resubmitted to <em>Advanced Engineering Informatics</em> after minor revision.</div>
  </div>
  <div class="home-news-item">
    <div class="home-news-date">2025</div>
    <div class="home-news-text">Selected for the NRF Master's Student Research Grant as an individual research project.</div>
  </div>
</div>

## selected publications

<div class="home-pub-list">
  <div class="home-pub-item">
    <div class="home-pub-title">KALO: Kangaroo-LocoManipulation for Early Launch Acceleration in a Wheel-Legged Robot</div>
    <div class="home-pub-meta">IEEE/ASME AIM 2026, accepted.</div>
  </div>
  <div class="home-pub-item">
    <div class="home-pub-title">A Lift-Equipped Mobile Manipulator Platform for Shelf Transfer in Multi-Level Rack Environments</div>
    <div class="home-pub-meta">IEEE/ASME AIM 2026, accepted.</div>
  </div>
  <div class="home-pub-item">
    <div class="home-pub-title">Design and Implementation of a Local Delivery Robot System: A Reinforcement Learning Approach</div>
    <div class="home-pub-meta">IEEE CASE 2026, accepted.</div>
  </div>
  <div class="home-pub-item">
    <div class="home-pub-title">Clustering-enhanced Bayesian optimization (CEBO): A case study on T-pedal wheel design of a stair-climbing robot</div>
    <div class="home-pub-meta"><em>Advanced Engineering Informatics</em>, revised manuscript resubmitted after minor revision.</div>
  </div>
</div>

## featured projects

<div class="home-project-grid">
  <a class="home-project-card" href="/projects/kalo/">
    <img class="home-project-thumb" src="{{ '/assets/img/projects/thumb_kalo.gif' | relative_url }}" alt="" loading="eager">
    <span class="home-project-copy">
      <strong>KALO</strong>
      <span>Constrained arm motion for early-launch behavior on a Go2W-OpenArm platform.</span>
    </span>
  </a>
  <a class="home-project-card" href="/projects/lift-mobile-manipulator/">
    <img class="home-project-thumb" src="{{ '/assets/img/projects/thumb_lift_mobile_manipulator.gif' | relative_url }}" alt="" loading="eager">
    <span class="home-project-copy">
      <strong>Lift-equipped mobile manipulator</strong>
      <span>Isaac Lab shelf-transfer task with PPO training and success/failure analysis.</span>
    </span>
  </a>
  <a class="home-project-card" href="/projects/keti-amr/">
    <img class="home-project-thumb" src="{{ '/assets/img/projects/thumb_keti_amr.gif' | relative_url }}" alt="" loading="eager">
    <span class="home-project-copy">
      <strong>KETI 20-DOF AMR</strong>
      <span>Rough-terrain velocity tracking and chassis-leveling objective in Isaac Lab.</span>
    </span>
  </a>
  <a class="home-project-card" href="/projects/inventory-inspection-adaptive-suspension/">
    <img class="home-project-thumb" src="{{ '/assets/img/projects/thumb_inventory_suspension.gif' | relative_url }}" alt="" loading="eager">
    <span class="home-project-copy">
      <strong>Inventory-inspection robot</strong>
      <span>Suspension stabilization for full-lift driving of a 10 m-class platform.</span>
    </span>
  </a>
  <a class="home-project-card" href="/projects/cebo-stair-climbing-wheel/">
    <img class="home-project-thumb" src="{{ '/assets/img/projects/thumb_cebo.gif' | relative_url }}" alt="" loading="eager">
    <span class="home-project-copy">
      <strong>CEBO stair-climbing wheel</strong>
      <span>CoppeliaSim evaluation-loop automation for T-pedal wheel design.</span>
    </span>
  </a>
  <a class="home-project-card" href="/projects/amr-integration/">
    <img class="home-project-thumb" src="{{ '/assets/img/projects/thumb_amr_integration.gif' | relative_url }}" alt="" loading="eager">
    <span class="home-project-copy">
      <strong>On-campus mobile robot systems</strong>
      <span>ROS/Autoware integration, LiDAR mapping, detection/tracking, and validation.</span>
    </span>
  </a>
  <a class="home-project-card" href="/projects/lidar-campus-autonomous-driving/">
    <img class="home-project-thumb" src="{{ '/assets/img/projects/thumb_lidar_campus.gif' | relative_url }}" alt="" loading="eager">
    <span class="home-project-copy">
      <strong>LiDAR-based campus driving</strong>
      <span>RTK-surveyed HD map, Autoware waypoint driving, and pedestrian tests.</span>
    </span>
  </a>
</div>

<p class="home-more-links">Full lists are on <a href="/publications/">publications</a>, <a href="/projects/">projects</a>, and <a href="/cv/">cv</a>.</p>
