---
layout: page
title: "ROMO-S: Surround-View Terrain Perception"
description: Generated panoramas and camera-LiDAR fusion for terrain-aware mobile robotics.
card_description: Inferring surrounding terrain from one front camera and 360-degree LiDAR, with generated panorama features and simulation-based adaptation.
img: assets/img/projects/romo_s_sensor_observations.jpg
thumb: assets/img/projects/romo_s_sensor_observations.jpg
img_alt: Front-camera image, LiDAR field of view, and five-camera reference panorama from ShanghaiTech Mapping Robot data
importance: 0
group: selected
category: work
permalink: /projects/romo-s/
---

**Status:** Master's thesis research. Perception experiments use recorded data; terrain-aware driving is evaluated in simulation.

I investigate whether a generated panorama can improve terrain perception outside a robot's forward-facing camera. ROMO-S uses one observed front image and the current 360-degree LiDAR scan to infer surrounding visual context, then combines image-space segmentation with measured LiDAR geometry to classify terrain around the robot.

<figure class="project-media project-media--wide">
  <a href="{{ '/assets/img/projects/romo_s_sensor_observations.jpg' | relative_url }}">
    <img src="{{ '/assets/img/projects/romo_s_sensor_observations.jpg' | relative_url }}" alt="ShanghaiTech example showing the observed front image, current LiDAR scan with the camera field of view, and a five-camera reference panorama" width="1211" height="974" class="img-fluid rounded z-depth-1" decoding="async">
  </a>
  <figcaption>Recorded ShanghaiTech Mapping Robot observations. The five-camera panorama is a training/evaluation reference; only the front camera and current LiDAR are inference inputs. Open full-size image.</figcaption>
</figure>

## Method

<figure class="project-media project-media--wide">
  <a href="{{ '/assets/img/projects/romo_s_terrain_framework.png' | relative_url }}">
    <img src="{{ '/assets/img/projects/romo_s_terrain_framework.png' | relative_url }}" alt="ROMO-S framework connecting panorama generation, terrain segmentation and fusion at measured LiDAR points, terrain sensitivity analysis, and simulated terrain-aware adaptation" width="1211" height="1009" class="img-fluid rounded z-depth-1" loading="lazy" decoding="async">
  </a>
  <figcaption>Thesis method overview. Generated appearance supports terrain classification at measured locations; adaptation is studied with platform-specific simulation costs. Open full-size diagram.</figcaption>
</figure>

1. **Panorama generation:** retain the observed front image and infer surrounding appearance conditioned on LiDAR geometry.
2. **Terrain perception:** segment the generated panorama and pool features only at points measured by the current LiDAR. Fuse them with LiDAR, BEV, and front-image features in a matched classifier.
3. **Terrain sensitivity:** study how surface friction affects different robot platforms in simulation.
4. **Terrain-aware adaptation:** use terrain probabilities and simulation-derived costs to study operating-area decisions, speed limits, and driving settings.

## Qualitative examples

<figure class="project-media project-media--tall">
  <a href="{{ '/assets/img/projects/romo_s_terrain_examples.jpg' | relative_url }}">
    <img src="{{ '/assets/img/projects/romo_s_terrain_examples.jpg' | relative_url }}" alt="Two ShanghaiTech scenes comparing reference panoramas, automatic pseudo-labels, generated panoramas, baseline predictions, and proposed terrain predictions for pavement, road, grass, and dirt" width="1211" height="1449" class="img-fluid rounded z-depth-1" loading="lazy" decoding="async">
  </a>
  <figcaption>Thesis illustrations on ShanghaiTech Mapping Robot data. GT panoramas are reference imagery, pseudo-labels are automatic references, and generated panoramas are inferred images. These examples are not a claim of real-world driving validation. Open full-size comparison.</figcaption>
</figure>

## Evaluation scope and limits

- Compare the baseline and panorama-assisted classifier under matched sensor inputs, learners, and evaluation conditions.
- Distinguish observed images, generated images, automatic reference labels, and human-reviewed labels.
- Generated appearance may omit or invent details. A terrain prediction does not establish safe traversability.
- Closed-loop navigation experiments use simulation with an initial perception map held fixed; they do not establish online real-robot navigation performance.

## Platform context

<figure class="project-media project-media--portrait">
  <a href="{{ '/assets/img/projects/romo_b_platform.jpg' | relative_url }}">
    <img src="{{ '/assets/img/projects/romo_b_platform.jpg' | relative_url }}" alt="Photograph of a bimanual mobile-manipulator research platform with two arms on a wheeled base" width="818" height="1360" class="img-fluid rounded z-depth-1" loading="lazy" decoding="async">
  </a>
  <figcaption>ROMO-B bimanual mobile-manipulator platform discussed in the thesis. This photograph supplies hardware context; the perception examples above use recorded ShanghaiTech data.</figcaption>
</figure>

The figures are selected from my thesis materials. Scene imagery is from the [ShanghaiTech Mapping Robot dataset (Xu et al., 2024)](https://arxiv.org/abs/2406.16713). The study remains distinct from the public platform-software workspace described in [ROMO-B]({{ '/projects/romo-b/' | relative_url }}).
