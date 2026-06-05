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
  {% include figure.liquid path="assets/img/projects/amr_integration_ranger_mini.png" title="Ranger Mini v2 AMR platform for indoor delivery robot integration" class="img-fluid rounded z-depth-1" %}
</div>

<figure class="project-media project-media--wide project-media--compact">
  <img src="{{ '/assets/img/projects/amr_lidar_tracking_panels.jpg' | relative_url }}" alt="LiDAR-based detection and tracking panels for indoor AMR operation" class="img-fluid rounded z-depth-1">
  <figcaption>Hardware, LiDAR detection, and tracking panels.</figcaption>
</figure>

<figure class="project-media project-media--portrait">
  <img src="{{ '/assets/img/projects/amr_project_semester_drive.gif' | relative_url }}" alt="Outdoor campus driving clip for the Ranger Mini v2-based AMR" class="img-fluid rounded z-depth-1">
  <figcaption>Outdoor campus driving test.</figcaption>
</figure>

This page covers the Ranger Mini v2 AMR integration work: CAN interface, ROS/Autoware, LiDAR-only SLAM, DBSCAN human detection, Kalman-filter tracking, and YOLO-based avoidance logic.

- **Role:** hardware/software integration, perception, navigation, detection/tracking modules
- **Tools:** ROS2, ROS, Autoware, CAN, LiDAR SLAM, DBSCAN, Kalman Filter, YOLO
- **Result:** related to the indoor delivery path-planning paper in _Electronics_ (2025) and the human-shared collision-detection paper in _Sensors_ (2025).
- **Related papers:** _Efficient Graph-Based Multi-Story Path Planning with Optimized Elevator Selection for Indoor Delivery Robots_; _Time-Interval-Based Collision Detection for 4WIS Mobile Robots in Human-Shared Indoor Environments_.
