---
layout: page
permalink: /publications/
title: publications
description: conference papers, journal manuscript, and peer-reviewed journal articles
nav: true
nav_order: 2
---

<style>
  .conference-presentations {
    margin-top: 2.5rem;
  }

  .conference-presentations h2 {
    margin-bottom: 0.85rem;
    font-size: 1.35rem;
  }

  .conference-entry {
    padding: 0.95rem 0;
    border-top: 1px solid var(--global-divider-color);
  }

  .conference-entry p {
    margin-bottom: 0.22rem;
  }

  .conference-title {
    font-size: 1.02rem;
    line-height: 1.35;
  }

  .conference-meta,
  .conference-note {
    color: var(--global-text-color-light);
  }
</style>

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>

<div class="conference-presentations">

<h2>selected conference presentations</h2>

<div class="conference-entry">
  <p class="conference-title"><strong>Human Trajectory Prediction Algorithm</strong></p>
  <p>SeungMin Kim; <strong>HyunSeo Jang</strong>; YoungEun Song.</p>
  <p class="conference-meta"><em>IEEE International Conference on Consumer Electronics-Asia (ICCE-Asia)</em>, 2024. DOI: <a href="https://doi.org/10.1109/ICCE-ASIA63397.2024.10773909">10.1109/ICCE-ASIA63397.2024.10773909</a>.</p>
  <p class="conference-note">LiDAR detection, Kalman-filter tracking, and human-robot avoidance.</p>
</div>

<div class="conference-entry">
  <p class="conference-title"><strong>A Study on the Optimal Loading Algorithm of the Local Logistics Center Based on Reinforcement Learning systems</strong></p>
  <p>Kim Seung Min; Ha Yeong Ho; <strong>Jang Hyun Seo</strong>; Song Young Eun.</p>
  <p class="conference-meta"><em>KICS Summer Conference</em>, 2024.</p>
  <p class="conference-note">DQN-based loading policy for fulfillment and last-mile logistics.</p>
</div>

<div class="conference-entry">
  <p class="conference-title"><strong>Research on fail-safety of self-driving cleaning vehicles</strong></p>
  <p>Yeong-Ho Ha; Seung-Min Kim; <strong>Hyun-Seo Jang</strong>; Young-Eun Song.</p>
  <p class="conference-meta"><em>IEMEK Spring Conference</em>, 2024.</p>
  <p class="conference-note">Fail-safety considerations for autonomous road-sweeping operation.</p>
</div>

<div class="conference-entry">
  <p class="conference-title"><strong>A Study on PointCloud-based Object Detection Method for Safe Autonomous Driving of Robots in Narrow Indoor Environments</strong></p>
  <p><strong>Hyun Seo Jang</strong>; Yeong Ho Ha; Seung Min Kim; Dae Kug Lee; Young Eun Song.</p>
  <p class="conference-meta"><em>KSII Spring Conference</em>, 2024.</p>
  <p class="conference-note">Point-cloud object detection for safe autonomous robot navigation in confined indoor environments.</p>
</div>

<div class="conference-entry">
  <p class="conference-title"><strong>A Study on the Lightweighting of LiDAR Recognition Module for Durability and Power Efficiency in Embedded Systems</strong></p>
  <p><strong>Hyun Seo Jang</strong>; Yeong Ho Ha; Seung Min Kim; Dae Kug Lee; Young Eun Song.</p>
  <p class="conference-meta"><em>KICS Fall Conference</em>, 2023.</p>
  <p class="conference-note">LiDAR RPM, reliability, durability, and power-efficiency trade-off analysis.</p>
</div>

<div class="conference-entry">
  <p class="conference-title"><strong>Optimal Logistics Distribution Algorithm for Autonomous Delivery for Local Logistics Hub System</strong></p>
  <p>Yeong-Ho Ha; Seong-Min Kim; <strong>Hyun-Seo Jang</strong>; Young-Eun Song.</p>
  <p class="conference-meta"><em>ISIPS / MASR</em>, 2023.</p>
  <p class="conference-note">Local logistics hub routing and distribution algorithm for autonomous delivery operation.</p>
</div>

</div>
