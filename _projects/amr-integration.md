---
layout: page
title: "Autonomous Mobile Robot System Integration"
description: Ranger Mini v2 indoor delivery robot with ROS/Autoware and LiDAR perception.
img: assets/img/projects/amr_integration_ranger_mini.png
img_alt: Ranger Mini v2 AMR platform for indoor delivery robot integration
importance: 2
group: system
category: work
permalink: /projects/amr-integration/
---

{% include project-media-style.html %}

<div class="project-page-hero">
  <img src="{{ '/assets/img/projects/amr_integration_ranger_mini.png' | relative_url }}" alt="Ranger Mini v2 AMR platform for indoor delivery robot integration" class="img-fluid rounded z-depth-1">
</div>

<figure class="project-media project-media--portrait">
  <img src="{{ '/assets/img/projects/amr_project_semester_drive.gif' | relative_url }}" alt="Outdoor campus driving clip for the Ranger Mini v2-based AMR" class="img-fluid rounded z-depth-1">
  <figcaption>Outdoor campus driving test.</figcaption>
</figure>

I integrated a Ranger Mini v2-based indoor delivery robot. I handled CAN, ROS/Autoware, LiDAR-only SLAM, DBSCAN human detection, Kalman-filter tracking, and YOLO-based avoidance logic.

- **Role:** hardware/software integration, perception, navigation, detection/tracking modules
- **Tools:** ROS2, ROS, Autoware, CAN, LiDAR SLAM, DBSCAN, Kalman Filter, YOLO
- **Result:** connected to the _Electronics_ (2025) indoor delivery path-planning paper and the _Sensors_ (2025) human-shared collision-detection paper.
- **Related papers:** _Efficient Graph-Based Multi-Story Path Planning with Optimized Elevator Selection for Indoor Delivery Robots_; _Time-Interval-Based Collision Detection for 4WIS Mobile Robots in Human-Shared Indoor Environments_.
