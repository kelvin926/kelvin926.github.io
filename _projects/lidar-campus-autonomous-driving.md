---
layout: page
title: "LiDAR-Based Campus Autonomous Driving"
description: RTK-surveyed HD map, Autoware waypoint driving, and pedestrian tests.
img: assets/img/projects/lidar_campus_sonata_drive.webp
img_alt: In-vehicle campus autonomous-driving test on a Hyundai Sonata platform
importance: 7
group: selected
category: work
permalink: /projects/lidar-campus-autonomous-driving/
---

{% include project-media-style.html %}

<div class="project-page-hero">
  <figure>
    <img src="{{ '/assets/img/projects/lidar_campus_sonata_drive.webp' | relative_url }}" alt="In-vehicle campus autonomous-driving test on a Hyundai Sonata platform" class="img-fluid rounded z-depth-1">
    <figcaption>In-vehicle campus driving test on the Hyundai Sonata platform.</figcaption>
  </figure>
</div>

<div class="project-media-grid project-media-grid--driving">
  <div>
    <figure class="project-media project-media--wide">
      <img src="{{ '/assets/img/projects/lidar_campus_sonata_roundabout.webp' | relative_url }}" alt="In-vehicle roundabout driving segment on the Hyundai Sonata campus test vehicle" class="img-fluid rounded z-depth-1">
      <figcaption>Campus roundabout driving segment from the Sonata test vehicle.</figcaption>
    </figure>
  </div>
  <div>
    <figure class="project-media project-media--wide">
      <img src="{{ '/assets/img/projects/lidar_campus_road_sweeper_drive.webp' | relative_url }}" alt="Autonomous road-sweeping vehicle moving during a campus driving test" class="img-fluid rounded z-depth-1">
      <figcaption>Autonomous road-sweeping vehicle test using the same software base.</figcaption>
    </figure>
  </div>
</div>

<div class="project-media-grid project-media-grid--supporting">
  <div>
    <figure class="project-media project-media--portrait">
      <img src="{{ '/assets/img/projects/lidar_campus_sonata_front.jpg' | relative_url }}" alt="Hyundai Sonata autonomous-driving test vehicle with roof-mounted LiDAR" class="img-fluid rounded z-depth-1">
      <figcaption>Hyundai Sonata test vehicle with roof-mounted LiDAR.</figcaption>
    </figure>
  </div>
  <div>
    <figure class="project-media project-media--wide">
      <img src="{{ '/assets/img/projects/lidar_campus_hd_map_overview.jpg' | relative_url }}" alt="Campus HD map with lane centerlines, waypoints, and road boundaries" class="img-fluid rounded z-depth-1">
      <figcaption>Campus HD map built from RTK survey and map editing.</figcaption>
    </figure>
  </div>
  <div>
    <figure class="project-media project-media--wide">
      <img src="{{ '/assets/img/projects/lidar_campus_vehicle_compute_wiring.jpg' | relative_url }}" alt="Vehicle trunk computing and wiring setup for the autonomous-driving test platform" class="img-fluid rounded z-depth-1">
      <figcaption>Vehicle computing and wiring setup in the trunk.</figcaption>
    </figure>
  </div>
</div>

I built an RTK-surveyed campus HD map, set up in-vehicle computing, and implemented Autoware waypoint driving on a Hyundai Sonata test vehicle. I also tested LiDAR-based pedestrian detection/avoidance during campus driving experiments.

- **Role:** RTK-surveyed HD mapping, Autoware waypoint driving, in-vehicle setup, LiDAR pedestrian-detection testing
- **Tools:** Autoware, LiDAR mapping, RTK surveying, waypoint driving, pedestrian detection
- **Result:** the same software base was later used in autonomous road-sweeping vehicle development.
