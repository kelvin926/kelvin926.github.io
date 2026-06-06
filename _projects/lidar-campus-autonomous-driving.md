---
layout: page
title: "LiDAR-Based Campus Autonomous Driving"
description: RTK-surveyed HD map and Autoware-based campus driving on a Hyundai Sonata test vehicle.
img: assets/img/projects/lidar_campus_autoware_view.png
img_alt: Autoware campus driving visualization with LiDAR point cloud and vehicle lane overlay
importance: 3
group: selected
category: work
permalink: /projects/lidar-campus-autonomous-driving/
---

{% include project-media-style.html %}

<div class="project-page-hero">
  <img src="{{ '/assets/img/projects/lidar_campus_autoware_view.png' | relative_url }}" alt="Autoware campus driving visualization with LiDAR point cloud and vehicle lane overlay" class="img-fluid rounded z-depth-1">
</div>

<figure class="project-media project-media--wide project-media--compact">
  <img src="{{ '/assets/img/projects/lidar_campus_lidar_detection.png' | relative_url }}" alt="LiDAR point-cloud human detection view for campus autonomous-driving experiments" class="img-fluid rounded z-depth-1">
  <figcaption>LiDAR perception view from campus driving experiments.</figcaption>
</figure>

I built an RTK-surveyed campus HD map and implemented waypoint-based autonomous driving on a Hyundai Sonata test vehicle using Autoware. I also tested LiDAR-based pedestrian avoidance during campus driving experiments.

- **Role:** RTK-surveyed HD mapping, Autoware waypoint driving, LiDAR pedestrian-avoidance testing
- **Tools:** Autoware, ROS, LiDAR, RTK surveying, HD map
- **Result:** the software base was later reused in autonomous road-sweeping vehicle development.
