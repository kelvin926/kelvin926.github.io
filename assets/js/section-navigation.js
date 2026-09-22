document.addEventListener("DOMContentLoaded", () => {
  const links = [...document.querySelectorAll("[data-section-link]")];
  const sections = links.map((link) => document.getElementById(link.dataset.sectionLink)).filter(Boolean);
  const toggle = document.querySelector('[data-nav-toggle="navbarNav"]');
  const navbar = document.getElementById("navbar");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      if (toggle?.getAttribute("aria-expanded") === "true") toggle.click();
    });
  });

  if (!sections.length) return;

  let scheduled = false;
  function updateCurrentSection() {
    const offset = (navbar?.offsetHeight || 56) + 96;
    let current = sections[0].id;
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= offset) current = section.id;
    }
    for (const link of links) {
      const active = link.dataset.sectionLink === current;
      link.parentElement.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    }
    scheduled = false;
  }

  function scheduleUpdate() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(updateCurrentSection);
  }

  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
  window.addEventListener("load", scheduleUpdate);
  updateCurrentSection();
});
