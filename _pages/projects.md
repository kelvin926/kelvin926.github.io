---
layout: page
title: projects
permalink: /projects/
description: selected robotics projects and additional feasibility work
nav: true
nav_order: 3
horizontal: false
---

<div class="projects">

{% assign selected_projects = site.projects | where: "group", "selected" | sort: "importance" %}
{% assign other_projects = site.projects | where: "group", "other" | sort: "importance" %}

<h2>selected research projects</h2>
<p class="project-group-note">Mobile-manipulation, robot-learning, stability-evaluation, and AMR integration work.</p>

<div class="row row-cols-1 row-cols-md-3">
  {% for project in selected_projects %}
    {% include projects.liquid %}
  {% endfor %}
</div>

<h2>other projects</h2>
<p class="project-group-note">Supporting platform, feasibility, and documentation work.</p>

<div class="row row-cols-1 row-cols-md-3">
  {% for project in other_projects %}
    {% include projects.liquid %}
  {% endfor %}
</div>

</div>
