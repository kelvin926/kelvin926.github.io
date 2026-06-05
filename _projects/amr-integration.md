---
layout: page
title: "Autonomous Mobile Robot System Integration"
description: Ranger Mini v2-based indoor delivery robot system with ROS/Autoware and LiDAR perception.
img: assets/img/projects/amr_integration_ranger_mini.png
img_alt: Ranger Mini v2 AMR platform for indoor delivery robot integration
importance: 2
group: system
category: work
permalink: /projects/amr-integration/
---

{% include figure.liquid path="assets/img/projects/amr_integration_ranger_mini.png" title="Ranger Mini v2 AMR platform for indoor delivery robot integration" class="img-fluid rounded z-depth-1" %}

This project integrated a Ranger Mini v2-based indoor delivery robot with CAN, ROS/Autoware, LiDAR-only SLAM, and perception modules for indoor navigation. The work included DBSCAN-based human detection, Kalman-filter tracking, and YOLO-based avoidance logic.

- **Role:** hardware/software integration, perception, navigation, detection/tracking modules
- **Tools:** ROS2, ROS, Autoware, CAN, LiDAR SLAM, DBSCAN, Kalman Filter, YOLO
- **Result:** supported the indoor delivery path-planning paper in _Electronics_ (2025) and the human-shared collision-detection paper in _Sensors_ (2025).
- **Related papers:** _Efficient Graph-Based Multi-Story Path Planning with Optimized Elevator Selection for Indoor Delivery Robots_; _Time-Interval-Based Collision Detection for 4WIS Mobile Robots in Human-Shared Indoor Environments_.
