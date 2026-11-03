---
layout: page
title: "ROMO-B: Robot Navigation and Integration"
description: ROS 2 platform software for LiDAR mapping, localization, waypoint navigation, and robot operation.
card_description: Integrating a mobile-robot platform with ROS 2, Livox LiDAR, Nav2/Autoware navigation, and operator tools.
importance: 1
group: selected
category: work
permalink: /projects/romo-b/
---

**Status:** Public platform-software workspace.

ROMO-B brings together vehicle communication, LiDAR mapping and localization, waypoint navigation, and operator tools in a ROS 2 Humble workspace. It provides a concrete platform-integration counterpart to my work on multimodal robot perception.

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
