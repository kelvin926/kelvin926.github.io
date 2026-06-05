---
layout: page
title: "KETI 20-DOF Wheeled-Legged AMR"
description: Isaac Lab training setup for rough-terrain velocity tracking on a 20-DOF wheeled-legged AMR.
img: assets/img/projects/keti_amr_single.jpg
img_alt: KETI 20-DOF wheeled-legged AMR simulation model
importance: 5
group: other
category: work
permalink: /projects/keti-amr/
---

{% include project-media-style.html %}

<div class="project-page-hero">
  {% include figure.liquid path="assets/img/projects/keti_amr_single.jpg" title="KETI 20-DOF wheeled-legged AMR simulation model" class="img-fluid rounded z-depth-1" %}
</div>

<figure class="project-media project-media--wide project-media--compact">
  <img src="{{ '/assets/img/projects/keti_velocity_tracking_scene.jpg' | relative_url }}" alt="Isaac Lab rough-terrain velocity-tracking scene for a 20-DOF wheeled-legged AMR" class="img-fluid rounded z-depth-1">
  <figcaption>Isaac Lab velocity-tracking scene used while setting up PPO training for the wheeled-legged AMR.</figcaption>
</figure>

This project built an Isaac Lab training setup for rough-terrain velocity tracking on a KETI-commissioned 20-DOF wheeled-legged AMR. The work focused on robot configuration, MDP/reward design, terrain curriculum, and PPO training.

- **Role:** robot configuration, MDP/reward design, terrain curriculum, PPO training setup
- **Tools:** Isaac Lab, RSL-RL, PyTorch, PPO
- **Result:** learning-based rough-terrain velocity-tracking setup for a wheeled-legged AMR.
- **Code:** [kelvin926/isaac_wheel](https://github.com/kelvin926/isaac_wheel)
