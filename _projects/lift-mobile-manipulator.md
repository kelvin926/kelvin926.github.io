---
layout: page
title: "Lift-Equipped Mobile Manipulator"
description: Shelf-transfer mobile manipulation in multi-level rack environments.
img: assets/img/projects/lift_mobile_manipulator_platform.gif
img_alt: Lift-equipped mobile manipulator platform moving in a rack environment
importance: 4
group: selected
category: work
permalink: /projects/lift-mobile-manipulator/
---

{% include project-media-style.html %}

<div class="project-page-hero">
  <figure>
    <img src="{{ '/assets/img/projects/lift_mobile_manipulator_platform.gif' | relative_url }}" alt="Lift-equipped mobile manipulator platform moving in a rack environment" class="img-fluid rounded z-depth-1">
    <figcaption>10 m-class lift-equipped mobile manipulator platform in a rack-transfer setting.</figcaption>
  </figure>
</div>

<div class="project-media-grid">
  <div>
    <figure class="project-media project-media--wide project-media--compact">
      <img src="{{ '/assets/img/projects/lift_shelf_transfer_rack.png' | relative_url }}" alt="Lift-equipped mobile manipulator platform for shelf-transfer experiments" class="img-fluid rounded z-depth-1">
      <figcaption>Shelf-transfer rack setup.</figcaption>
    </figure>
  </div>
  <div>
    <figure class="project-media project-media--wide project-media--compact">
      <img src="{{ '/assets/img/projects/lift_shelf_transfer_sequence.gif' | relative_url }}" alt="Shelf-transfer sequence for the lift-equipped mobile manipulator in Isaac Lab" class="img-fluid rounded z-depth-1">
      <figcaption>Shelf-transfer sequence under source-object randomization.</figcaption>
    </figure>
  </div>
</div>

I designed a lift-equipped mobile manipulator platform for shelf transfer in multi-level rack environments. I also built the Isaac Lab PPO environment with a 9-D action and 41-D observation space.

- **Role:** platform design, 9-D action / 41-D observation Isaac Lab PPO environment, shelf-transfer experiment analysis
- **Tools:** Isaac Lab, PPO, PyTorch, mobile manipulation
- **Result:** 41/50 successful trials (82%) under +/-3 cm source-object randomization; failures consisted of 3 grasp failures and 6 object-drop failures.
- **Paper:** _A Lift-Equipped Mobile Manipulator Platform for Shelf Transfer in Multi-Level Rack Environments_. IEEE/ASME AIM 2026, accepted.
- **Code:** GitHub link planned with paper release.
