---
layout: page
title: "KALO: Kangaroo-LocoManipulation"
description: Early-launch assistance for a Go2W-OpenArm wheeled-legged platform.
img: assets/img/projects/kalo_arm_swing_proposed.gif
img_alt: KALO launch evaluation for a Go2W-OpenArm wheeled-legged robot platform
importance: 1
group: selected
category: work
permalink: /projects/kalo/
---

{% include project-media-style.html %}

<div class="project-page-hero">
  <figure>
    <img src="{{ '/assets/img/projects/kalo_arm_swing_proposed.gif' | relative_url }}" alt="KALO arm-swing launch assistance on a Go2W-OpenArm wheeled-legged robot platform" class="img-fluid rounded z-depth-1">
    <figcaption>Arm-swing launch-assist motion on a Go2W-OpenArm wheeled-legged platform.</figcaption>
  </figure>
</div>

<figure class="project-media project-media--wide project-media--compact">
  <img src="{{ '/assets/img/projects/kalo_motion_snapshots_grid_4shot.png' | relative_url }}" alt="Four side-view KALO launch snapshots after launch onset" class="img-fluid rounded z-depth-1">
  <figcaption>Side-view launch snapshots from the AIM 2026 paper.</figcaption>
</figure>

<figure class="project-media project-media--wide">
  <img src="{{ '/assets/img/projects/kalo_normalized_vx_ready_launch.png' | relative_url }}" alt="Normalized forward velocity comparison for Base, Fixed carrying pose, and KALO controllers" class="img-fluid rounded z-depth-1">
  <figcaption>Normalized forward velocity over the first 1.5 s after launch onset.</figcaption>
</figure>

I implemented early-launch assistance on a Go2W-OpenArm wheeled-legged platform, using the manipulator as a constrained inertial appendage during acceleration. I set up the Isaac Lab/RSL-RL experiments and compared Base, Fixed carrying-pose, and KALO controllers using normalized forward velocity, t50/t90, and directional consistency.

- **Role:** launch-assist concept, Go2W-OpenArm setup, evaluation metrics, Isaac Lab/RSL-RL experiments
- **Tools:** Isaac Lab, RSL-RL, PyTorch, PPO, Go2W-OpenArm
- **Result:** normalized forward-velocity AUC(0-1.5 s) increased by 15.1% over Fixed (0.726 -> 0.835); t90 decreased from 1.703 s to 1.067 s; 90%-target-speed trials within 1.5 s increased from 29/128 to 69/128.
- **Paper:** _KALO: Kangaroo-LocoManipulation for Early Launch Acceleration in a Wheel-Legged Robot_. IEEE/ASME AIM 2026, accepted.
- **Code:** [kelvin926/KALO](https://github.com/kelvin926/KALO)
