---
layout: page
title: projects
permalink: /projects/
description: robotics research, system integration, and feasibility projects
nav: true
nav_order: 3
horizontal: false
---

<style>
  .projects > h2 {
    margin-top: 2rem;
    margin-bottom: 0.9rem;
    font-size: 1.35rem;
    line-height: 1.25;
  }

  .projects .project-card-title {
    margin-bottom: 0.65rem;
    font-size: 1.08rem;
    line-height: 1.28;
  }

  .projects .project-card-media {
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 16 / 10;
    padding: 0.55rem;
    overflow: hidden;
    border-bottom: 1px solid rgba(128, 128, 128, 0.18);
    background: #fff;
  }

  .projects .project-card-media figure,
  .projects .project-card-media picture {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 0;
  }

  .projects .project-card-media img,
  .projects .project-card-image {
    width: auto !important;
    max-width: 100%;
    height: auto !important;
    max-height: 100%;
    padding: 0;
    object-fit: contain;
  }

  .projects .card-text {
    font-size: 0.92rem;
    line-height: 1.45;
  }
</style>

<div class="projects">

{% assign main_projects = site.projects | where: "group", "main" | sort: "importance" %}
{% assign system_projects = site.projects | where: "group", "system" | sort: "importance" %}
{% assign other_projects = site.projects | where: "group", "other" | sort: "importance" %}

<h2>main projects</h2>
<p class="project-group-note">Current research closest to my PhD contact profile.</p>

<div class="row row-cols-1 row-cols-md-3">
  {% for project in main_projects %}
    {% include projects.liquid %}
  {% endfor %}
</div>

<h2>system integration</h2>
<p class="project-group-note">AMR software, perception, and navigation work connected to indoor delivery systems.</p>

<div class="row row-cols-1 row-cols-md-3">
  {% for project in system_projects %}
    {% include projects.liquid %}
  {% endfor %}
</div>

<h2>other projects</h2>
<p class="project-group-note">Commissioned simulation, feasibility, and platform-building work.</p>

<div class="row row-cols-1 row-cols-md-3">
  {% for project in other_projects %}
    {% include projects.liquid %}
  {% endfor %}
</div>

</div>
