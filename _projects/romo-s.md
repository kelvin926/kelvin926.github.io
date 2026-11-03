---
layout: page
title: "ROMO-S: Multimodal Spatial Understanding"
description: Studying generated surround views for vision-language spatial understanding from a front camera and 360-degree LiDAR.
card_description: Investigating generated surround views for spatial understanding from a front camera and 360-degree LiDAR.
importance: 0
group: selected
category: work
permalink: /projects/romo-s/
---

**Status:** Ongoing research — model development and comparative evaluation.

I am investigating whether generated surround views can help a vision-language model interpret the environment around a mobile robot. ROMO-S combines an observed front-camera image with 360-degree LiDAR geometry to infer visual context outside the camera's field of view.

The central question is whether these generated views add useful spatial information compared with bird's-eye-view (BEV) representations when both approaches receive the same sensor inputs.

## Study design

<figure class="research-overview">
  <ol class="research-flow">
    <li><strong>Shared sensor inputs</strong><span>Observed front-camera image and 360-degree LiDAR geometry.</span></li>
    <li><strong>Representation comparison</strong><span>BEV-based representations and generated-view-assisted representations under matched sensor inputs.</span></li>
    <li><strong>Spatial understanding</strong><span>Vision-language evaluation of object presence and relative location around the robot.</span></li>
  </ol>
  <figcaption>Study overview. Both representation paths use the same sensor inputs and evaluation conditions.</figcaption>
</figure>

## Evaluation scope

- **Research focus:** camera-LiDAR fusion, surround-view generation, and vision-language spatial understanding.
- **Approach:** compare BEV-based and generated-view-assisted representations under matched sensor inputs and evaluation conditions.
- **Evaluation focus:** object presence and relative location around the robot, including missing objects and unsupported descriptions.
- **Current scope:** model development and comparative evaluation. Improvements in navigation or planning remain to be established.

Generated visual context outside the observed camera view may omit objects or introduce unsupported details. These errors are part of the evaluation; generated images are not treated as direct observations.

[Related platform software: ROMO-B]({{ '/projects/romo-b/' | relative_url }}) · [Research profile]({{ '/' | relative_url }}#about)
