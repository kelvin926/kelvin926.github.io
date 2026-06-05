---
layout: page
title: projects
permalink: /projects/
description: robotics research, system integration, and feasibility projects
nav: true
nav_order: 3
horizontal: false
---

<div class="projects">

{% assign main_projects = site.projects | where: "group", "main" | sort: "importance" %}
{% assign system_projects = site.projects | where: "group", "system" | sort: "importance" %}
{% assign other_projects = site.projects | where: "group", "other" | sort: "importance" %}

<h2>main projects</h2>

<div class="row row-cols-1 row-cols-md-3">
  {% for project in main_projects %}
    {% include projects.liquid %}
  {% endfor %}
</div>

<h2>system integration</h2>

<div class="row row-cols-1 row-cols-md-3">
  {% for project in system_projects %}
    {% include projects.liquid %}
  {% endfor %}
</div>

<h2>other projects</h2>

<div class="row row-cols-1 row-cols-md-3">
  {% for project in other_projects %}
    {% include projects.liquid %}
  {% endfor %}
</div>

</div>
