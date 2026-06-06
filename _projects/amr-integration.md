---
layout: page
title: "On-Campus Autonomous Mobile Robot"
description: Ranger Mini v2 indoor delivery robot with ROS/Autoware, LiDAR-only SLAM, and perception modules.
img: assets/img/projects/amr_integration_ranger_mini.png
img_alt: Ranger Mini v2 AMR platform for indoor delivery robot integration
importance: 2
group: selected
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

I integrated a Ranger Mini v2-based delivery robot with CAN, ROS/Autoware, LiDAR-only SLAM, and perception modules for indoor navigation. I implemented DBSCAN-based human detection, Kalman-filter tracking, and YOLO-based avoidance logic.

- **Role:** hardware/software integration, perception, navigation, detection/tracking modules
- **Tools:** ROS2, ROS, Autoware, CAN, LiDAR SLAM, DBSCAN, Kalman Filter, YOLO
- **Result:** Grand Prize, 2023 Korea University Project Semester; this work also supported the _Electronics_ (2025) indoor delivery path-planning paper and the _Sensors_ (2025) human-shared collision-detection paper.
- **Related papers:** _Efficient Graph-Based Multi-Story Path Planning with Optimized Elevator Selection for Indoor Delivery Robots_; _Time-Interval-Based Collision Detection for 4WIS Mobile Robots in Human-Shared Indoor Environments_.
