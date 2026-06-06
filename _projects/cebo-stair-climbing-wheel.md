---
layout: page
title: "CEBO-Based Stair-Climbing Wheel Design"
description: T-pedal stair-climbing wheel design with CEBO and CoppeliaSim.
img: assets/img/projects/cebo_stair_climbing_demo.gif
img_alt: CoppeliaSim stair-climbing wheel-design evaluation loop for CEBO
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

<div class="project-media-grid project-media-grid--three">
  <div>
    <figure class="project-media project-media--wide project-media--compact">
      <img src="{{ '/assets/img/projects/cebo_physical_robot_front_stair.jpg' | relative_url }}" alt="Front view of the physical T-pedal wheel robot during stair-climbing testing" class="img-fluid rounded z-depth-1">
      <figcaption>Physical robot test before stair ascent.</figcaption>
    </figure>
  </div>
  <div>
    <figure class="project-media project-media--wide project-media--compact">
      <img src="{{ '/assets/img/projects/cebo_physical_robot_side_stair.jpg' | relative_url }}" alt="Side view of the T-pedal wheel robot on stairs during physical testing" class="img-fluid rounded z-depth-1">
      <figcaption>Side view during stair-climbing test.</figcaption>
    </figure>
  </div>
  <div>
    <figure class="project-media project-media--wide project-media--compact">
      <img src="{{ '/assets/img/projects/cebo_coppeliasim_wheel_evaluation_frame.jpg' | relative_url }}" alt="CoppeliaSim wheel-design evaluation frame for CEBO T-pedal wheel optimization" class="img-fluid rounded z-depth-1">
      <figcaption>CoppeliaSim wheel-design evaluation frame.</figcaption>
    </figure>
  </div>
</div>

I defined a six-variable T-pedal wheel design problem for stair-climbing time and body-pitch stability. After validating CEBO on 2D-12D benchmark functions, I automated the optimization loop with CoppeliaSim evaluations.

- **Role:** T-pedal wheel search-space design, CEBO optimization experiments, CoppeliaSim evaluation-loop automation
- **Tools:** Bayesian optimization, CoppeliaSim, Python, CAD
- **Result:** nominal traversal time decreased by 23.31% from 9.405 s to 7.213 s, and body-pitch stability median decreased by 37.84% from 1.102 deg to 0.685 deg under the nominal friction condition.
- **Paper:** _Clustering-enhanced Bayesian optimization (CEBO): A case study on T-pedal wheel design of a stair-climbing robot_. _Advanced Engineering Informatics_, revised manuscript resubmitted after minor revision.
- **Code:** [kelvin926/T-Pedal-with-CEBO](https://github.com/kelvin926/T-Pedal-with-CEBO)
