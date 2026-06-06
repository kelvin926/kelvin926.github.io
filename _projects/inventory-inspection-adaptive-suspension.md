---
layout: page
title: "Inventory-Inspection Robot Adaptive Suspension"
description: Suspension stabilization for full-lift driving of a 10 m-class inventory-inspection robot.
img: assets/img/projects/adaptive_suspension_inventory_robot.png
img_alt: Inventory-inspection robot adaptive suspension validation
importance: 7
group: selected
category: work
permalink: /projects/inventory-inspection-adaptive-suspension/
---

{% include project-media-style.html %}

<div class="project-page-hero">
  <img src="{{ '/assets/img/projects/adaptive_suspension_inventory_robot.png' | relative_url }}" alt="Inventory-inspection robot adaptive suspension validation" class="img-fluid rounded z-depth-1">
</div>

<figure class="project-media project-media--wide project-media--compact">
  <img src="{{ '/assets/img/projects/inventory_adaptive_suspension_demo.gif' | relative_url }}" alt="Inventory-inspection robot suspension stabilization simulation clip" class="img-fluid rounded z-depth-1">
  <figcaption>Full-lift driving simulation comparison.</figcaption>
</figure>

I built a suspension-stabilization algorithm and Isaac Lab evaluation environment for chassis leveling during full-lift driving of a 10 m-class inventory-inspection robot. I also prepared the fixed-lift runtime assets, suspension task setup, and evaluation scripts.

- **Role:** chassis-leveling logic, fixed-lift runtime asset creation, suspension task setup, evaluation scripts
- **Tools:** Isaac Lab, RSL-RL, PyTorch
- **Result:** chassis-leveling stabilization workflow for fixed-lift driving.
- **Code:** [kelvin926/Frbot_Lift](https://github.com/kelvin926/Frbot_Lift)
