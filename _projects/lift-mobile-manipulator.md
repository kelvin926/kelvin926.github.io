---
layout: page
title: "Lift-Equipped Mobile Manipulator"
description: Shelf-transfer mobile manipulation in multi-level rack environments.
img: assets/img/projects/lift_shelf_transfer_rack.png
img_alt: Lift-equipped mobile manipulator platform for shelf-transfer experiments
importance: 3
group: main
category: work
permalink: /projects/lift-mobile-manipulator/
---

{% include project-media-style.html %}

<div class="project-page-hero">
  {% include figure.liquid path="assets/img/projects/lift_shelf_transfer_rack.png" title="Lift-equipped mobile manipulator platform for shelf-transfer experiments" class="img-fluid rounded z-depth-1" %}
</div>

<div class="project-media-grid">
  <div>
    <figure class="project-media project-media--portrait">
      <img src="{{ '/assets/img/projects/lift_integrated_platform_photo.jpg' | relative_url }}" alt="Integrated 10 m-class lift-equipped mobile manipulator platform" class="img-fluid rounded z-depth-1">
      <figcaption>Integrated lift-equipped platform.</figcaption>
    </figure>
  </div>
  <div>
    <figure class="project-media project-media--portrait">
      <img src="{{ '/assets/img/projects/lift_shelf_transfer_sequence.gif' | relative_url }}" alt="Shelf-transfer sequence for the lift-equipped mobile manipulator in Isaac Lab" class="img-fluid rounded z-depth-1">
      <figcaption>Shelf-transfer sequence under source-object randomization.</figcaption>
    </figure>
  </div>
</div>

The platform combines a lift-equipped AMR body with an OpenArm manipulator for shelf transfer in multi-level racks. The Isaac Lab environment uses a 9-D action and 41-D observation setup.

- **Role:** platform design, 9-D action / 41-D observation Isaac Lab PPO environment, shelf-transfer experiment analysis
- **Tools:** Isaac Lab, PPO, PyTorch, mobile manipulation
- **Result:** 41/50 successful rollout trials under +/-3 cm source-object randomization; failures consisted of 3 grasp failures and 6 object-drop failures.
- **Paper:** _A Lift-Equipped Mobile Manipulator Platform for Shelf Transfer in Multi-Level Rack Environments_. IEEE/ASME AIM 2026, accepted.
- **Code:** GitHub link planned with paper release.
