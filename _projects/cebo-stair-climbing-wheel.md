---
layout: page
title: "CEBO-Based Stair-Climbing Wheel Design"
description: Bayesian optimization for T-pedal wheel design using a CoppeliaSim evaluation loop.
img: assets/img/projects/cebo_stair_climbing_robot_design.jpg
img_alt: CoppeliaSim stair-climbing wheel-design evaluation for CEBO
importance: 4
group: main
category: work
permalink: /projects/cebo-stair-climbing-wheel/
---

{% include figure.liquid path="assets/img/projects/cebo_stair_climbing_robot_design.jpg" title="CoppeliaSim stair-climbing wheel-design evaluation for CEBO" class="img-fluid rounded z-depth-1" %}

<figure class="mt-3">
  <img src="{{ '/assets/img/projects/cebo_stair_climbing_demo.gif' | relative_url }}" alt="CoppeliaSim stair-climbing wheel evaluation clip for CEBO" class="img-fluid rounded z-depth-1">
  <figcaption>CoppeliaSim evaluation clip for the T-pedal stair-climbing wheel design.</figcaption>
</figure>

<div class="row mt-3">
  <div class="col-md-6">
    <figure>
      <img src="{{ '/assets/img/projects/cebo_physical_stair_guided.gif' | relative_url }}" alt="Physical stair-climbing test clip for the T-pedal wheel robot with manual guidance" class="img-fluid rounded z-depth-1">
      <figcaption>Physical stair-climbing test clip with manual guidance.</figcaption>
    </figure>
  </div>
  <div class="col-md-6">
    <figure>
      <img src="{{ '/assets/img/projects/cebo_physical_stair_test.gif' | relative_url }}" alt="Physical stair-climbing test clip for the T-pedal wheel robot" class="img-fluid rounded z-depth-1">
      <figcaption>Physical stair-climbing test clip for the T-pedal wheel robot.</figcaption>
    </figure>
  </div>
</div>

This project formulated a six-variable T-pedal wheel design problem for stair-climbing performance and body-pitch stability. I automated the CoppeliaSim evaluation loop and applied clustering-enhanced Bayesian optimization after benchmark-function tests.

- **Role:** T-pedal wheel search-space design, CEBO optimization experiments, CoppeliaSim evaluation-loop automation
- **Tools:** Bayesian optimization, CoppeliaSim, Python, CAD
- **Result:** nominal traversal time decreased by 23.31% from 9.405 s to 7.213 s, and body-pitch stability median decreased by 37.84% from 1.102 deg to 0.685 deg under the nominal friction condition.
- **Paper:** _Clustering-enhanced Bayesian optimization (CEBO): A case study on T-pedal wheel design of a stair-climbing robot_. _Advanced Engineering Informatics_, revised manuscript resubmitted after minor revision.
- **Code:** [kelvin926/T-Pedal-with-CEBO](https://github.com/kelvin926/T-Pedal-with-CEBO)
