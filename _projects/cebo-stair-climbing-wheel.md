---
layout: page
title: "CEBO-Based Stair-Climbing Wheel Design"
description: CoppeliaSim evaluation-loop automation for T-pedal wheel design.
img: assets/img/projects/cebo_physical_stair_guided.gif
img_alt: Physical stair-climbing test clip for the T-pedal wheel robot with manual guidance
importance: 5
group: selected
category: work
permalink: /projects/cebo-stair-climbing-wheel/
---

{% include project-media-style.html %}

<div class="project-page-hero">
  <figure>
    <img src="{{ '/assets/img/projects/cebo_stair_climbing_demo.gif' | relative_url }}" alt="CoppeliaSim stair-climbing wheel-design evaluation loop for CEBO" class="img-fluid rounded z-depth-1">
    <figcaption>CoppeliaSim evaluation loop used for T-pedal wheel design optimization.</figcaption>
  </figure>
</div>

<figure class="project-media project-media--wide project-media--compact">
  <img src="{{ '/assets/img/projects/cebo_stair_climbing_robot_design.jpg' | relative_url }}" alt="CoppeliaSim stair-climbing wheel-design result for CEBO" class="img-fluid rounded z-depth-1">
  <figcaption>T-pedal wheel design result used in the stair-climbing evaluation.</figcaption>
</figure>

<div class="project-media-grid project-media-grid--driving">
  <div>
    <figure class="project-media project-media--wide project-media--compact">
      <img src="{{ '/assets/img/projects/cebo_physical_stair_guided.gif' | relative_url }}" alt="Physical stair-climbing test clip for the T-pedal wheel robot with manual guidance" class="img-fluid rounded z-depth-1">
      <figcaption>Physical stair test with manual guidance.</figcaption>
    </figure>
  </div>
  <div>
    <figure class="project-media project-media--wide project-media--compact">
      <img src="{{ '/assets/img/projects/cebo_physical_stair_test.gif' | relative_url }}" alt="Physical stair-climbing test clip for the T-pedal wheel robot" class="img-fluid rounded z-depth-1">
      <figcaption>Physical stair test.</figcaption>
    </figure>
  </div>
</div>

I formulated a six-variable T-pedal wheel design problem for stair-climbing performance and pitch stability. I automated the CoppeliaSim evaluation loop and analyzed stair-climbing performance and pitch-stability metrics under different wheel design and control parameters.

- **Role:** T-pedal wheel search-space design, CEBO optimization experiments, CoppeliaSim evaluation-loop automation
- **Tools:** Bayesian optimization, CoppeliaSim, Python
- **Result:** nominal traversal time decreased by 23.31% (9.405 s -> 7.213 s), and body-pitch stability median decreased by 37.84% (1.102 deg -> 0.685 deg) under the nominal friction condition.
- **Paper:** _Clustering-enhanced Bayesian optimization (CEBO): A case study on T-pedal wheel design of a stair-climbing robot_. _Advanced Engineering Informatics_, revised manuscript resubmitted after minor revision.
- **Code:** [kelvin926/T-Pedal-with-CEBO](https://github.com/kelvin926/T-Pedal-with-CEBO)
