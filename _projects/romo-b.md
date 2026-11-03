---
layout: page
title: "ROMO-B: Robot Navigation and Integration"
description: ROS 2 platform software for LiDAR mapping, localization, waypoint navigation, and robot operation.
card_description: Integrating a mobile-robot platform with ROS 2, Livox LiDAR, Nav2/Autoware navigation, and operator tools.
img: assets/img/projects/romo_b_platform.jpg
thumb: assets/img/projects/romo_b_platform.jpg
img_alt: Photograph of the blue ROMO-B mobile platform with two manipulator arms
importance: 1
group: selected
category: work
permalink: /projects/romo-b/
---

**Status:** Public platform-software workspace.

ROMO-B brings together vehicle communication, LiDAR mapping and localization, waypoint navigation, and operator tools in a ROS 2 Humble workspace. It provides a concrete platform-integration counterpart to my work on multimodal robot perception.

<div class="project-media-grid project-media-grid--platform">
<figure class="project-media project-media--portrait">
  <a href="{{ '/assets/img/projects/romo_b_platform.jpg' | relative_url }}">
    <img src="{{ '/assets/img/projects/romo_b_platform.jpg' | relative_url }}" alt="Physical blue ROMO-B mobile robot with two manipulator arms mounted on a mast" width="818" height="1360" class="img-fluid rounded z-depth-1" decoding="async">
  </a>
  <figcaption>ROMO-B bimanual mobile platform.</figcaption>
</figure>
<figure class="project-media project-media--wide">
  <a href="{{ '/assets/img/projects/romo_b_rviz.png' | relative_url }}">
    <img src="{{ '/assets/img/projects/romo_b_rviz.png' | relative_url }}" alt="ROMO-B RViz development screenshot with a LiDAR corridor map, route layers, and the Autoware control panel" width="2490" height="1536" class="img-fluid rounded z-depth-1" loading="lazy" decoding="async">
  </a>
  <figcaption>RViz development screenshot from the public ROMO-B workspace. It documents the mapping and navigation interface, not a new real-world performance result. Open full-size screenshot.</figcaption>
</figure>

</div>

<details class="project-media-more">
<summary>Operator console screenshot</summary>
<figure class="project-media project-media--tall">
  <a href="{{ '/assets/img/projects/romo_b_operator_console.png' | relative_url }}">
    <img src="{{ '/assets/img/projects/romo_b_operator_console.png' | relative_url }}" alt="ROMO-B operator-console QA screenshot showing vehicle command controls, platform feedback, and Auto-entry readiness checks" width="1218" height="1451" class="img-fluid rounded z-depth-1" loading="lazy" decoding="async">
  </a>
  <figcaption>Operator-console QA screenshot from the repository. Displayed values illustrate the UI state and are not current live telemetry. Open full-size screenshot.</figcaption>
</figure>

</details>

## Software scope

- **Platform communication:** USB-to-RS232 bridge and robot feedback/command handling.
- **Perception and localization:** Livox Mid-360 integration, mapping, map conversion, and localization workflows.
- **Navigation:** Nav2 waypoint execution and an Autoware Universe 1.8.0 research runtime for route planning and local obstacle avoidance.
- **Operation:** browser-based diagnostics and operator controls, plus separately tracked OpenArm-v1 low-level CAN integration.

## Validation and use

The repository documents software-only simulation and replay checks, along with a separate hardware-acceptance workflow. Supported software paths should be assessed against those checks; the workspace is research platform software and is not safety-rated.

- [Source and setup](https://github.com/kelvin926/ROMO-B)
- [Architecture](https://github.com/kelvin926/ROMO-B/blob/main/docs/architecture.md)
- [Current validation status](https://github.com/kelvin926/ROMO-B/blob/main/docs/status.md)
- [Hardware acceptance](https://github.com/kelvin926/ROMO-B/blob/main/docs/hardware_acceptance.md)

[Related research: ROMO-S]({{ '/projects/romo-s/' | relative_url }})
