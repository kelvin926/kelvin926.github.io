---
layout: page
title: "On-Campus Autonomous Mobile Robot Systems"
description: Ranger Mini v2 AMR and 1/5-scale autonomous-vehicle experiments with ROS/Autoware, LiDAR, and camera perception.
img: assets/img/projects/amr_robot_autonomous_navigation.gif
img_alt: Ranger Mini v2 autonomous indoor navigation test in a campus hallway
importance: 2
group: selected
category: work
permalink: /projects/amr-integration/
---

{% include project-media-style.html %}

<div class="project-page-hero">
  <figure>
    <img src="{{ '/assets/img/projects/amr_campus_lidar_mapping_drive.gif' | relative_url }}" alt="Wheelchair-based LiDAR mapping and on-campus autonomous mobile robot driving test" class="img-fluid rounded z-depth-1">
    <figcaption>Wheelchair-mounted LiDAR mapping run used to build the campus navigation map.</figcaption>
  </figure>
</div>

<div class="project-media-grid">
  <div>
    <figure class="project-media project-media--portrait">
      <img src="{{ '/assets/img/projects/amr_robot_autonomous_navigation.gif' | relative_url }}" alt="Ranger Mini v2 autonomous indoor navigation test in a campus hallway" class="img-fluid rounded z-depth-1">
      <figcaption>Ranger Mini v2 autonomous indoor navigation test.</figcaption>
    </figure>
  </div>
  <div>
    <figure class="project-media project-media--portrait">
      <img src="{{ '/assets/img/projects/amr_building_to_building_navigation.gif' | relative_url }}" alt="Outdoor building-to-building autonomous navigation test with the campus AMR platform" class="img-fluid rounded z-depth-1">
      <figcaption>Outdoor building-to-building autonomous navigation segment from the project presentation.</figcaption>
    </figure>
  </div>
</div>

<div class="project-media-grid project-media-grid--supporting">
  <div>
    <figure class="project-media project-media--portrait">
      <img src="{{ '/assets/img/projects/amr_ranger_mini_platform_closeup.jpg' | relative_url }}" alt="Ranger Mini v2 mobile robot platform with Velodyne LiDAR and onboard sensors" class="img-fluid rounded z-depth-1">
      <figcaption>Ranger Mini v2 platform with LiDAR and onboard sensing hardware.</figcaption>
    </figure>
  </div>
  <div>
    <figure class="project-media project-media--wide project-media--compact">
      <img src="{{ '/assets/img/projects/amr_lidar_map_builder.jpg' | relative_url }}" alt="LiDAR point-cloud map and waypoint editing for on-campus mobile robot navigation" class="img-fluid rounded z-depth-1">
      <figcaption>LiDAR-only mapping and waypoint editing for campus navigation tests.</figcaption>
    </figure>
  </div>
  <div>
    <figure class="project-media project-media--portrait">
      <img src="{{ '/assets/img/projects/amr_outdoor_lidar_platform.jpg' | relative_url }}" alt="LiDAR-equipped campus mobile robot platform during outdoor mapping and navigation testing" class="img-fluid rounded z-depth-1">
      <figcaption>LiDAR-equipped campus mobile robot platform used for outdoor mapping and navigation tests.</figcaption>
    </figure>
  </div>
</div>

This page groups two campus robot builds. On the Ranger Mini v2 platform, I worked on CAN bring-up, ROS/Autoware integration, LiDAR-only mapping, DBSCAN/Kalman-filter tracking, and YOLO-based avoidance tests. On the 1/5-scale autonomous-vehicle platform, I built ROS driving experiments for LiDAR obstacle detection and camera lane recognition.

- **Role:** platform bring-up, CAN/ROS/Autoware integration, LiDAR perception, navigation testing, 1/5-scale platform setup
- **Tools:** ROS2, ROS, Autoware, CAN, LiDAR SLAM, DBSCAN, Kalman Filter, YOLO, OpenCV
- **Result:** Grand Prize, 2023 Korea University Project Semester; this work also supported the _Electronics_ (2025) indoor delivery path-planning paper and the _Sensors_ (2025) human-shared collision-detection paper.
- **Related papers:** _Efficient Graph-Based Multi-Story Path Planning with Optimized Elevator Selection for Indoor Delivery Robots_; _Time-Interval-Based Collision Detection for 4WIS Mobile Robots in Human-Shared Indoor Environments_.
