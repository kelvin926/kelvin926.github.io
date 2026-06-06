const fs = require("node:fs/promises");
const http = require("node:http");
const path = require("node:path");
const { exec } = require("node:child_process");

const ROOT = path.resolve(__dirname, "..");
const PORT = Number(process.env.PORT || 5177);

const HOME_FILE = path.join(ROOT, "_pages", "about.md");
const PUBLICATIONS_FILE = path.join(ROOT, "_pages", "publications.md");
const PROJECTS_DIR = path.join(ROOT, "_projects");
const PROJECT_IMAGES_DIR = path.join(ROOT, "assets", "img", "projects");

const ownNameVariants = ["HyunSeo Jang", "Hyunseo Jang", "Hyun Seo Jang", "Hyun-Seo Jang", "Jang Hyun Seo"];

function escapeHtml(value = "") {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function unescapeHtml(value = "") {
  return String(value).replaceAll("&quot;", '"').replaceAll("&gt;", ">").replaceAll("&lt;", "<").replaceAll("&amp;", "&");
}

function stripTags(value = "") {
  return unescapeHtml(String(value).replace(/<[^>]*>/g, ""));
}

function normalizeNewlines(value = "") {
  return String(value).replace(/\r\n/g, "\n");
}

function yamlValue(value, key) {
  if (key === "importance" && value !== "") return String(Number(value) || 0);
  const text = String(value ?? "");
  if (/^[A-Za-z0-9_./ -]+$/.test(text) && text.trim() === text && !text.includes(":")) {
    return text;
  }
  return JSON.stringify(text);
}

function parseFrontMatter(content) {
  const normalized = normalizeNewlines(content);
  if (!normalized.startsWith("---\n")) {
    return { frontMatter: "", data: {}, body: normalized };
  }
  const end = normalized.indexOf("\n---\n", 4);
  if (end === -1) return { frontMatter: "", data: {}, body: normalized };
  const frontMatter = normalized.slice(4, end);
  const body = normalized.slice(end + 5);
  const data = {};
  for (const line of frontMatter.split("\n")) {
    const match = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!match) continue;
    let value = match[2].trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    data[match[1]] = value;
  }
  return { frontMatter, data, body };
}

function setFrontMatterValue(frontMatter, key, value) {
  const lines = frontMatter.split("\n");
  const replacement = `${key}: ${yamlValue(value, key)}`;
  const index = lines.findIndex((line) => line.match(new RegExp(`^${key}:`)));
  if (index >= 0) {
    lines[index] = replacement;
  } else {
    lines.push(replacement);
  }
  return lines.join("\n");
}

function combineFrontMatter(frontMatter, body) {
  return `---\n${frontMatter.trimEnd()}\n---\n${body.startsWith("\n") ? body : `\n${body}`}`;
}

function getBlock(content, startPattern, endPattern) {
  const start = content.search(startPattern);
  if (start < 0) return "";
  const tail = content.slice(start);
  const end = tail.search(endPattern);
  return end < 0 ? tail : tail.slice(0, end);
}

function extractAll(content, regex, mapper) {
  const output = [];
  for (const match of content.matchAll(regex)) output.push(mapper(match));
  return output;
}

function parseHome(content) {
  const intro = getBlock(content, /<div class="home-intro">/, /\n\n<div class="home-focus-row"/);
  const focus = getBlock(content, /<div class="home-focus-row"/, /\n\n## news/);
  const news = getBlock(content, /<div class="home-news">/, /\n\n## selected publications/);
  const publications = getBlock(content, /<div class="home-pub-list">/, /\n\n## featured projects/);
  const projects = getBlock(content, /<div class="home-project-grid">/, /\n\n<p class="home-more-links"/);

  return {
    ledes: extractAll(intro, /<p class="home-lede">\s*([\s\S]*?)\s*<\/p>/g, (match) => stripTags(match[1].trim())),
    links: extractAll(intro, /<a href="([^"]+)">([\s\S]*?)<\/a>/g, (match) => ({ href: match[1], label: stripTags(match[2]) })),
    focus: extractAll(focus, /<div class="home-focus-item">\s*<strong>([\s\S]*?)<\/strong>\s*<span>([\s\S]*?)<\/span>\s*<\/div>/g, (match) => ({
      title: stripTags(match[1]),
      text: stripTags(match[2]),
    })),
    news: extractAll(
      news,
      /<div class="home-news-item">\s*<div class="home-news-date">([\s\S]*?)<\/div>\s*<div class="home-news-text">([\s\S]*?)<\/div>\s*<\/div>/g,
      (match) => ({ date: stripTags(match[1]), text: match[2].trim() })
    ),
    publications: extractAll(
      publications,
      /<div class="home-pub-item">\s*<div class="home-pub-title">([\s\S]*?)<\/div>\s*<div class="home-pub-meta">([\s\S]*?)<\/div>\s*<\/div>/g,
      (match) => ({ title: stripTags(match[1]), meta: match[2].trim() })
    ),
    projects: extractAll(
      projects,
      /<a class="home-project-card" href="([^"]+)">\s*<strong>([\s\S]*?)<\/strong>\s*<span>([\s\S]*?)<\/span>\s*<\/a>/g,
      (match) => ({ href: match[1], title: stripTags(match[2]), text: stripTags(match[3]) })
    ),
  };
}

function renderHomeIntro(home) {
  const ledes = (home.ledes || [])
    .filter((text) => text.trim())
    .map((text) => `  <p class="home-lede">\n    ${escapeHtml(text.trim())}\n  </p>`)
    .join("\n");
  const links = (home.links || [])
    .filter((link) => link.label && link.href)
    .map((link) => `    <a href="${escapeHtml(link.href)}">${escapeHtml(link.label)}</a>`)
    .join("\n");
  return `<div class="home-intro">\n${ledes}\n  <div class="home-linkbar" aria-label="Profile links">\n${links}\n  </div>\n</div>`;
}

function renderFocus(home) {
  const items = (home.focus || [])
    .filter((item) => item.title || item.text)
    .map(
      (item) => `  <div class="home-focus-item">\n    <strong>${escapeHtml(item.title)}</strong>\n    <span>${escapeHtml(item.text)}</span>\n  </div>`
    )
    .join("\n");
  return `<div class="home-focus-row" aria-label="Research focus">\n${items}\n</div>`;
}

function renderNews(home) {
  const items = (home.news || [])
    .filter((item) => item.date || item.text)
    .map(
      (item) =>
        `  <div class="home-news-item">\n    <div class="home-news-date">${escapeHtml(item.date)}</div>\n    <div class="home-news-text">${item.text}</div>\n  </div>`
    )
    .join("\n");
  return `<div class="home-news">\n${items}\n</div>`;
}

function renderHomePublications(home) {
  const items = (home.publications || [])
    .filter((item) => item.title || item.meta)
    .map(
      (item) =>
        `  <div class="home-pub-item">\n    <div class="home-pub-title">${escapeHtml(item.title)}</div>\n    <div class="home-pub-meta">${item.meta}</div>\n  </div>`
    )
    .join("\n");
  return `<div class="home-pub-list">\n${items}\n</div>`;
}

function renderHomeProjects(home) {
  const items = (home.projects || [])
    .filter((item) => item.href || item.title || item.text)
    .map(
      (item) =>
        `  <a class="home-project-card" href="${escapeHtml(item.href)}">\n    <strong>${escapeHtml(item.title)}</strong>\n    <span>${escapeHtml(item.text)}</span>\n  </a>`
    )
    .join("\n");
  return `<div class="home-project-grid">\n${items}\n</div>`;
}

function replaceBetween(content, startPattern, endPattern, replacement) {
  const start = content.search(startPattern);
  if (start < 0) return content;
  const tail = content.slice(start);
  const end = tail.search(endPattern);
  if (end < 0) return content.slice(0, start) + replacement;
  return content.slice(0, start) + replacement + content.slice(start + end);
}

function saveHomeContent(content, home) {
  let next = content;
  next = replaceBetween(next, /<div class="home-intro">/, /\n\n<div class="home-focus-row"/, renderHomeIntro(home));
  next = replaceBetween(next, /<div class="home-focus-row"/, /\n\n## news/, renderFocus(home));
  next = replaceBetween(next, /<div class="home-news">/, /\n\n## selected publications/, renderNews(home));
  next = replaceBetween(next, /<div class="home-pub-list">/, /\n\n## featured projects/, renderHomePublications(home));
  next = replaceBetween(next, /<div class="home-project-grid">/, /\n\n<p class="home-more-links"/, renderHomeProjects(home));
  return next;
}

function extractBullet(body, label) {
  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = body.match(new RegExp(`^- \\*\\*${escaped}:\\*\\*\\s*(.*)$`, "m"));
  return match ? match[1].trim() : "";
}

function setBullet(body, label, value) {
  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`^- \\*\\*${escaped}:\\*\\*\\s*.*$`, "m");
  const line = `- **${label}:** ${String(value || "").trim()}`;
  if (regex.test(body)) return body.replace(regex, line);
  if (!value) return body;
  return `${body.trimEnd()}\n${line}\n`;
}

function extractSummary(body) {
  const match = body.match(/\n\n([^<{\n-][\s\S]*?)\n\n- \*\*Role:\*\*/m);
  return match ? match[1].trim() : "";
}

function setSummary(body, value) {
  const regex = /\n\n([^<{\n-][\s\S]*?)\n\n- \*\*Role:\*\*/m;
  const text = String(value || "").trim();
  if (!regex.test(body) || !text) return body;
  return body.replace(regex, `\n\n${text}\n\n- **Role:**`);
}

async function parseProjects() {
  const files = (await fs.readdir(PROJECTS_DIR)).filter((file) => file.endsWith(".md")).sort();
  const projects = [];
  for (const file of files) {
    const fullPath = path.join(PROJECTS_DIR, file);
    const content = await fs.readFile(fullPath, "utf8");
    const parsed = parseFrontMatter(content);
    projects.push({
      slug: file.replace(/\.md$/, ""),
      file,
      data: parsed.data,
      body: parsed.body,
      summary: extractSummary(parsed.body),
      role: extractBullet(parsed.body, "Role"),
      tools: extractBullet(parsed.body, "Tools"),
      result: extractBullet(parsed.body, "Result"),
      paper: extractBullet(parsed.body, "Paper") || extractBullet(parsed.body, "Related papers"),
      code: extractBullet(parsed.body, "Code"),
    });
  }
  return projects.sort((a, b) => {
    const ai = Number(a.data.importance || 999);
    const bi = Number(b.data.importance || 999);
    return ai - bi || a.data.title.localeCompare(b.data.title);
  });
}

async function saveProject(slug, payload) {
  const file = `${slug}.md`;
  const fullPath = path.join(PROJECTS_DIR, file);
  const content = await fs.readFile(fullPath, "utf8");
  const parsed = parseFrontMatter(content);
  let frontMatter = parsed.frontMatter;
  for (const key of ["title", "description", "img", "img_alt", "importance", "group"]) {
    if (Object.prototype.hasOwnProperty.call(payload.data || {}, key)) {
      frontMatter = setFrontMatterValue(frontMatter, key, payload.data[key]);
    }
  }
  let body = payload.body || parsed.body;
  body = setSummary(body, payload.summary);
  body = setBullet(body, "Role", payload.role);
  body = setBullet(body, "Tools", payload.tools);
  body = setBullet(body, "Result", payload.result);
  if (extractBullet(body, "Paper")) {
    body = setBullet(body, "Paper", payload.paper);
  } else if (extractBullet(body, "Related papers")) {
    body = setBullet(body, "Related papers", payload.paper);
  }
  if (extractBullet(body, "Code") || payload.code) {
    body = setBullet(body, "Code", payload.code);
  }
  await fs.writeFile(fullPath, combineFrontMatter(frontMatter, body), "utf8");
}

function highlightOwnName(text) {
  let output = escapeHtml(text);
  for (const name of ownNameVariants) {
    const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    output = output.replace(new RegExp(escapedName, "g"), `<span class="author-me">${escapeHtml(name)}</span>`);
  }
  return output;
}

function parsePresentations(content) {
  const block = getBlock(content, /<div class="conference-presentations">/, /$/);
  return extractAll(
    block,
    /<div class="conference-entry">\s*<p class="conference-title"><strong>([\s\S]*?)<\/strong><\/p>\s*<p>([\s\S]*?)<\/p>\s*<p class="conference-meta">([\s\S]*?)<\/p>\s*<p class="conference-note">([\s\S]*?)<\/p>\s*<\/div>/g,
    (match) => ({
      title: stripTags(match[1]),
      authors: stripTags(match[2]),
      meta: match[3].trim(),
      note: stripTags(match[4]),
    })
  );
}

function renderPresentations(items) {
  const entries = (items || [])
    .filter((item) => item.title || item.authors || item.meta || item.note)
    .map(
      (item) =>
        `<div class="conference-entry">\n  <p class="conference-title"><strong>${escapeHtml(item.title)}</strong></p>\n  <p>${highlightOwnName(item.authors)}</p>\n  <p class="conference-meta">${item.meta}</p>\n  <p class="conference-note">${escapeHtml(item.note)}</p>\n</div>`
    )
    .join("\n\n");
  return `<div class="conference-presentations">\n\n<h2>selected conference presentations</h2>\n\n${entries}\n\n</div>\n`;
}

function savePresentationsContent(content, items) {
  return replaceBetween(content, /<div class="conference-presentations">/, /$/, renderPresentations(items));
}

async function listProjectImages() {
  const files = await fs.readdir(PROJECT_IMAGES_DIR);
  return files
    .filter((file) => /\.(png|jpe?g|gif|webp)$/i.test(file))
    .sort()
    .map((file) => `assets/img/projects/${file}`);
}

async function getContent() {
  const [homeContent, publicationsContent, projects, images] = await Promise.all([
    fs.readFile(HOME_FILE, "utf8"),
    fs.readFile(PUBLICATIONS_FILE, "utf8"),
    parseProjects(),
    listProjectImages(),
  ]);
  return {
    home: parseHome(homeContent),
    presentations: parsePresentations(publicationsContent),
    projects,
    images,
    previewUrl: "http://127.0.0.1:8080/",
  };
}

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(payload, null, 2));
}

async function readJson(request) {
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  return JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}");
}

async function serveStatic(response, requestPath) {
  const normalizedPath = requestPath === "/" ? "/index.html" : requestPath;
  const filePath = path.resolve(__dirname, `.${normalizedPath}`);
  if (!filePath.startsWith(__dirname)) {
    sendJson(response, 403, { error: "Forbidden" });
    return;
  }
  const ext = path.extname(filePath).toLowerCase();
  const types = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
  };
  try {
    const content = await fs.readFile(filePath);
    response.writeHead(200, { "Content-Type": types[ext] || "application/octet-stream" });
    response.end(content);
  } catch {
    sendJson(response, 404, { error: "Not found" });
  }
}

async function serveRepoAsset(response, requestPath) {
  const relative = decodeURIComponent(requestPath.replace(/^\/repo\//, ""));
  const fullPath = path.resolve(ROOT, relative);
  if (!fullPath.startsWith(ROOT)) {
    sendJson(response, 403, { error: "Forbidden" });
    return;
  }
  try {
    const content = await fs.readFile(fullPath);
    response.writeHead(200, { "Content-Type": "application/octet-stream" });
    response.end(content);
  } catch {
    sendJson(response, 404, { error: "Asset not found" });
  }
}

function runBuild() {
  return new Promise((resolve) => {
    exec(
      "docker compose exec -T jekyll bundle exec jekyll build",
      { cwd: ROOT, timeout: 120000, maxBuffer: 1024 * 1024 * 8 },
      (error, stdout, stderr) => {
        resolve({
          ok: !error,
          stdout,
          stderr,
          code: error && typeof error.code !== "undefined" ? error.code : 0,
        });
      }
    );
  });
}

async function handleApi(request, response, pathname) {
  try {
    if (request.method === "GET" && pathname === "/api/content") {
      sendJson(response, 200, await getContent());
      return;
    }
    if (request.method === "POST" && pathname === "/api/home") {
      const payload = await readJson(request);
      const content = await fs.readFile(HOME_FILE, "utf8");
      await fs.writeFile(HOME_FILE, saveHomeContent(content, payload.home || {}), "utf8");
      sendJson(response, 200, { ok: true });
      return;
    }
    if (request.method === "POST" && pathname === "/api/presentations") {
      const payload = await readJson(request);
      const content = await fs.readFile(PUBLICATIONS_FILE, "utf8");
      await fs.writeFile(PUBLICATIONS_FILE, savePresentationsContent(content, payload.presentations || []), "utf8");
      sendJson(response, 200, { ok: true });
      return;
    }
    if (request.method === "POST" && pathname.startsWith("/api/projects/")) {
      const slug = pathname.replace("/api/projects/", "");
      const payload = await readJson(request);
      await saveProject(slug, payload);
      sendJson(response, 200, { ok: true });
      return;
    }
    if (request.method === "POST" && pathname === "/api/build") {
      sendJson(response, 200, await runBuild());
      return;
    }
    sendJson(response, 404, { error: "Unknown API route" });
  } catch (error) {
    sendJson(response, 500, { error: error.message });
  }
}

const server = http.createServer(async (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);
  if (url.pathname.startsWith("/api/")) {
    await handleApi(request, response, url.pathname);
    return;
  }
  if (url.pathname.startsWith("/repo/")) {
    await serveRepoAsset(response, url.pathname);
    return;
  }
  await serveStatic(response, url.pathname);
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`포트폴리오 편집기: http://127.0.0.1:${PORT}`);
});
