---
layout: page
title: "On-Campus Autonomous Mobile Robot Systems"
description: Ranger Mini v2 AMR and 1/5-scale autonomous-vehicle experiments with ROS/Autoware, LiDAR, and camera perception.
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

<div class="project-media-grid">
  <div>
    <figure class="project-media project-media--portrait">
      <img src="{{ '/assets/img/projects/amr_project_semester_drive.gif' | relative_url }}" alt="Outdoor campus driving clip for the Ranger Mini v2-based AMR" class="img-fluid rounded z-depth-1">
      <figcaption>Ranger Mini v2 outdoor campus driving test.</figcaption>
    </figure>
  </div>
  <div>
    <figure class="project-media project-media--wide project-media--compact">
      <img src="{{ '/assets/img/projects/one_fifth_autonomous_vehicle_platform.jpg' | relative_url }}" alt="1/5-scale autonomous vehicle platform with LiDAR and ROS visualization" class="img-fluid rounded z-depth-1">
      <figcaption>1/5-scale autonomous-vehicle platform for ROS, LiDAR, and camera-perception practice.</figcaption>
    </figure>
  </div>
</div>

I grouped two on-campus mobile-robot platforms here. For the Ranger Mini v2 delivery robot, I integrated CAN, ROS/Autoware, LiDAR-only SLAM, and perception modules for indoor navigation. For the 1/5-scale autonomous-vehicle platform, I worked on ROS-based driving experiments, LiDAR obstacle detection, and camera lane recognition.

- **Role:** hardware/software integration, perception, navigation, detection/tracking modules, small-vehicle platform setup
- **Tools:** ROS2, ROS, Autoware, CAN, LiDAR SLAM, DBSCAN, Kalman Filter, YOLO, camera vision
- **Result:** Grand Prize, 2023 Korea University Project Semester; this work also supported the _Electronics_ (2025) indoor delivery path-planning paper and the _Sensors_ (2025) human-shared collision-detection paper.
- **Related papers:** _Efficient Graph-Based Multi-Story Path Planning with Optimized Elevator Selection for Indoor Delivery Robots_; _Time-Interval-Based Collision Detection for 4WIS Mobile Robots in Human-Shared Indoor Environments_.
