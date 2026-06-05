---
layout: page
title: "Inventory-Inspection Robot Adaptive Suspension"
description: Suspension stabilization for full-lift driving of a 10 m-class inventory-inspection robot.
img: assets/img/projects/adaptive_suspension_inventory_robot.png
img_alt: Inventory-inspection robot adaptive suspension validation
importance: 6
group: other
category: work
permalink: /projects/inventory-inspection-adaptive-suspension/
---

{% include project-media-style.html %}

<div class="project-page-hero">
  {% include figure.liquid path="assets/img/projects/adaptive_suspension_inventory_robot.png" title="Inventory-inspection robot adaptive suspension validation" class="img-fluid rounded z-depth-1" %}
</div>

<figure class="project-media project-media--wide project-media--compact">
  <img src="{{ '/assets/img/projects/inventory_adaptive_suspension_demo.gif' | relative_url }}" alt="Inventory-inspection robot suspension stabilization simulation clip" class="img-fluid rounded z-depth-1">
  <figcaption>Full-lift driving simulation comparison.</figcaption>
</figure>

I worked on chassis leveling for full-lift driving of a 10 m-class inventory-inspection robot. The Isaac Lab setup handled fixed-lift runtime assets, suspension tasks, and evaluation scripts.

- **Role:** chassis-leveling logic, fixed-lift runtime asset creation, suspension task setup, evaluation scripts
- **Tools:** Isaac Lab, RSL-RL, PyTorch
- **Result:** chassis-leveling workflow for fixed-lift driving.
- **Code:** [kelvin926/Frbot_Lift](https://github.com/kelvin926/Frbot_Lift)
