---
layout: page
title: "Rough-Terrain Wheeled-Legged AMR"
description: Reinforcement learning for rough-terrain velocity tracking and chassis leveling.
img: assets/img/projects/keti_velocity_tracking_training.webp
thumb: assets/img/projects/thumb_keti_amr.webp
img_alt: Isaac Lab velocity-tracking training scene for the KETI 20-DOF wheeled-legged AMR
importance: 3
group: selected
category: work
permalink: /projects/keti-amr/
---

{% include project-media-style.html %}

<div class="project-page-hero">
  <figure>
    <img src="{{ '/assets/img/projects/keti_velocity_tracking_training.webp' | relative_url }}" alt="Isaac Lab velocity-tracking training scene for the KETI 20-DOF wheeled-legged AMR" class="img-fluid rounded z-depth-1">
    <figcaption>Isaac Lab velocity-tracking setup for the KETI 20-DOF wheeled-legged AMR.</figcaption>
  </figure>
</div>

<div class="project-media-grid">
  <div>
    <figure class="project-media project-media--wide project-media--compact">
      <img src="{{ '/assets/img/projects/keti_amr_training_overview.webp' | relative_url }}" alt="KETI 20-DOF wheeled-legged AMR training overview in Isaac Lab" class="img-fluid rounded z-depth-1" loading="lazy" decoding="async">
      <figcaption>Training overview used while tuning the velocity-tracking task.</figcaption>
    </figure>
  </div>
  <div>
    <figure class="project-media project-media--wide project-media--compact">
      <img src="{{ '/assets/img/projects/keti_amr_single.jpg' | relative_url }}" alt="KETI 20-DOF wheeled-legged AMR simulation model" class="img-fluid rounded z-depth-1" loading="lazy" decoding="async">
      <figcaption>20-DOF wheeled-legged AMR simulation model.</figcaption>
    </figure>
  </div>
</div>

<figure class="project-media project-media--wide project-media--compact">
  <img src="{{ '/assets/img/projects/keti_amr_training_monitor_frame.jpg' | relative_url }}" alt="Isaac Lab training monitor view for the KETI 20-DOF wheeled-legged AMR" class="img-fluid rounded z-depth-1" loading="lazy" decoding="async">
  <figcaption>Training monitor view while tuning the task.</figcaption>
</figure>

I set up Isaac Lab training for a 20-DOF wheeled-legged AMR project associated with Korea Electronics Technology Institute (KETI). The work covered robot configuration, MDP/reward design, terrain curriculum, PPO velocity-tracking training, and a chassis-leveling objective for payload-carrying operation.

- **Role:** robot configuration, MDP/reward design, terrain curriculum, PPO training setup
- **Tools:** Isaac Lab, RSL-RL, PyTorch, PPO
- **Result:** rough-terrain velocity-tracking setup with a chassis-leveling objective for payload-carrying operation, checked in simulation before fabrication.
- **Code:** [kelvin926/isaac_wheel](https://github.com/kelvin926/isaac_wheel)
