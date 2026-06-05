---
layout: page
title: "KALO: Kangaroo-LocoManipulation"
description: Early-launch assistance for a Go2W-OpenArm wheeled-legged platform.
img: assets/img/projects/kalo_launch_single.jpg
img_alt: KALO launch evaluation for a Go2W-OpenArm wheeled-legged robot platform
importance: 1
group: main
category: work
permalink: /projects/kalo/
---

{% include project-media-style.html %}

<div class="project-page-hero">
  <img src="{{ '/assets/img/projects/kalo_launch_single.jpg' | relative_url }}" alt="KALO launch evaluation for a Go2W-OpenArm wheeled-legged robot platform" class="img-fluid rounded z-depth-1">
</div>

<div class="project-media-grid">
  <div>
    <figure class="project-media project-media--wide project-media--compact">
      <img src="{{ '/assets/img/projects/kalo_launch_sequence.gif' | relative_url }}" alt="Side-view KALO launch sequence for a Go2W-OpenArm wheeled-legged robot" class="img-fluid rounded z-depth-1">
      <figcaption>Side-view launch sequence.</figcaption>
    </figure>
  </div>
  <div>
    <figure class="project-media project-media--portrait">
      <img src="{{ '/assets/img/projects/kalo_launch_metrics.jpg' | relative_url }}" alt="KALO launch-onset acceleration and front-load ratio traces" class="img-fluid rounded z-depth-1">
      <figcaption>Launch-onset acceleration and front-load ratio traces.</figcaption>
    </figure>
  </div>
</div>

I proposed KALO as an early-launch assist controller for a Go2W-OpenArm wheeled-legged platform. I set up the Isaac Lab/RSL-RL experiments and compared Base, Fixed carrying-pose, and KALO controllers.

- **Role:** launch-assist concept, Go2W-OpenArm setup, evaluation metrics, Isaac Lab/RSL-RL experiments
- **Tools:** Isaac Lab, RSL-RL, PyTorch, PPO, Go2W-OpenArm
- **Result:** normalized forward-velocity AUC(0-1.5 s) increased by 15.1% over Fixed; t90 decreased from 1.703 s to 1.067 s; 90%-target-speed trials within 1.5 s increased from 29/128 to 69/128.
- **Paper:** _KALO: Kangaroo-LocoManipulation for Early Launch Acceleration in a Wheel-Legged Robot_. IEEE/ASME AIM 2026, accepted.
- **Code:** [kelvin926/KALO](https://github.com/kelvin926/KALO)
