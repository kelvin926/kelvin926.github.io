---
layout: page
title: "Inventory-Inspection Robot Adaptive Suspension"
description: Suspension stabilization for full-lift driving of a 10 m-class inventory-inspection robot.
img: assets/img/projects/inventory_adaptive_suspension_demo.gif
img_alt: Inventory-inspection robot adaptive suspension stabilization comparison
importance: 4
group: selected
category: work
permalink: /projects/inventory-inspection-adaptive-suspension/
---

{% include project-media-style.html %}

<div class="project-page-hero">
  <figure>
    <img src="{{ '/assets/img/projects/inventory_adaptive_suspension_demo.gif' | relative_url }}" alt="Inventory-inspection robot adaptive suspension stabilization comparison" class="img-fluid rounded z-depth-1">
    <figcaption>Terrain-adaptive suspension stabilization comparison during full-lift driving.</figcaption>
  </figure>
</div>

<div class="project-media-grid">
  <div>
    <figure class="project-media project-media--wide project-media--compact">
      <img src="{{ '/assets/img/projects/inventory_isaac_stabilized_drive.gif' | relative_url }}" alt="Isaac Lab stabilized full-lift driving clip for the inventory-inspection robot" class="img-fluid rounded z-depth-1">
      <figcaption>Stabilized full-lift driving evaluation in Isaac Lab.</figcaption>
    </figure>
  </div>
  <div>
    <figure class="project-media project-media--wide project-media--compact">
      <img src="{{ '/assets/img/projects/adaptive_suspension_inventory_robot.png' | relative_url }}" alt="Inventory-inspection robot adaptive suspension validation scene" class="img-fluid rounded z-depth-1">
      <figcaption>Inventory-inspection robot validation setup.</figcaption>
    </figure>
  </div>
</div>

<figure class="project-media project-media--wide project-media--compact">
  <img src="{{ '/assets/img/projects/inventory_baseline_full_lift_drive.jpg' | relative_url }}" alt="Baseline full-lift driving frame for the inventory-inspection robot before suspension stabilization" class="img-fluid rounded z-depth-1">
  <figcaption>Baseline full-lift driving frame before stabilization.</figcaption>
</figure>

I built a chassis-leveling and stability evaluation setup for a 10 m-class inventory-inspection robot during full-lift driving. The work included fixed-lift runtime assets, suspension task setup, and evaluation scripts.

- **Role:** chassis-leveling logic, fixed-lift runtime asset creation, suspension task setup, evaluation scripts
- **Tools:** Isaac Lab, RSL-RL, PyTorch
- **Result:** fixed-lift chassis-leveling setup and evaluation scripts.
- **Code:** [kelvin926/Frbot_Lift](https://github.com/kelvin926/Frbot_Lift)
