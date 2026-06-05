---
layout: page
title: "CEBO-Based Stair-Climbing Wheel Design"
description: Bayesian optimization for T-pedal wheel design using a CoppeliaSim evaluation loop.
img: assets/img/projects/cebo_stair_climbing_robot_design.jpg
importance: 4
category: work
permalink: /projects/cebo-stair-climbing-wheel/
---

{% include figure.liquid path="assets/img/projects/cebo_stair_climbing_robot_design.jpg" title="CoppeliaSim stair-climbing wheel-design evaluation for CEBO" class="img-fluid rounded z-depth-1" %}

This project formulated a six-variable T-pedal wheel design problem for stair-climbing performance and body-pitch stability. I automated the CoppeliaSim evaluation loop and applied clustering-enhanced Bayesian optimization after benchmark-function tests.

- **Role:** T-pedal wheel search-space design, CEBO optimization experiments, CoppeliaSim evaluation-loop automation
- **Tools:** Bayesian optimization, CoppeliaSim, Python, CAD
- **Result:** nominal traversal time decreased by 23.31% from 9.405 s to 7.213 s, and body-pitch stability median decreased by 37.84% from 1.102 deg to 0.685 deg under the nominal friction condition.
- **Paper:** _Clustering-enhanced Bayesian optimization (CEBO): A case study on T-pedal wheel design of a stair-climbing robot_. _Advanced Engineering Informatics_, revised manuscript resubmitted after minor revision.
- **Code:** [kelvin926/T-Pedal-with-CEBO](https://github.com/kelvin926/T-Pedal-with-CEBO)
