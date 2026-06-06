let state = null;
let activeProject = null;

const statusEl = document.querySelector("#status");
const homeEditor = document.querySelector("#homeEditor");
const projectEditor = document.querySelector("#projectEditor");
const projectSelect = document.querySelector("#projectSelect");
const presentationsEditor = document.querySelector("#presentationsEditor");

function setStatus(message, kind = "info") {
  statusEl.textContent = message;
  statusEl.dataset.kind = kind;
}

async function api(path, options = {}) {
  const response = await fetch(path, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  const payload = await response.json();
  if (!response.ok) throw new Error(payload.error || `Request failed: ${response.status}`);
  return payload;
}

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    if (key === "class") node.className = value;
    else if (key === "for") node.htmlFor = value;
    else if (key.startsWith("on")) node.addEventListener(key.slice(2), value);
    else node.setAttribute(key, value);
  }
  for (const child of Array.isArray(children) ? children : [children]) {
    if (child === null || typeof child === "undefined") continue;
    node.append(child instanceof Node ? child : document.createTextNode(String(child)));
  }
  return node;
}

function field(label, value, options = {}) {
  const input =
    options.type === "textarea"
      ? el("textarea", { class: options.short ? "short" : options.code ? "code" : "" })
      : el("input", { type: options.type || "text" });
  input.value = value || "";
  if (options.placeholder) input.placeholder = options.placeholder;
  return el("label", { class: "field" }, [el("span", {}, label), input]);
}

function getFieldValue(container, index) {
  return container.querySelectorAll("input, textarea, select")[index].value;
}

function repeatEditor(title, items, renderItem, onAdd) {
  const wrapper = el("div", { class: "card" });
  wrapper.append(el("h3", {}, title));
  const list = el("div", { class: "stack" });
  items.forEach((item, index) => list.append(renderItem(item, index)));
  wrapper.append(list);
  if (onAdd) {
    wrapper.append(
      el("div", { class: "row-actions" }, [el("button", { type: "button", class: "secondary", onclick: () => onAdd(list) }, "행 추가")])
    );
  }
  return wrapper;
}

function renderHome() {
  homeEditor.innerHTML = "";
  const home = state.home;

  homeEditor.append(
    repeatEditor("소개 문단", home.ledes, (text) =>
      el("div", { class: "card", "data-kind": "lede" }, [field("문단", text, { type: "textarea", short: true })])
    )
  );

  homeEditor.append(
    repeatEditor("프로필 링크", home.links, (link) =>
      el("div", { class: "grid", "data-kind": "link" }, [field("라벨", link.label), field("URL", link.href)])
    )
  );

  homeEditor.append(
    repeatEditor("연구 분야", home.focus, (item) =>
      el("div", { class: "grid", "data-kind": "focus" }, [field("제목", item.title), field("내용", item.text, { type: "textarea", short: true })])
    )
  );

  homeEditor.append(
    repeatEditor("소식", home.news, (item) =>
      el("div", { class: "grid", "data-kind": "news" }, [
        field("날짜", item.date),
        field("내용 (HTML 가능)", item.text, { type: "textarea", short: true }),
      ])
    )
  );

  homeEditor.append(
    repeatEditor("선택 논문", home.publications, (item) =>
      el("div", { class: "grid", "data-kind": "publication" }, [
        field("제목", item.title, { type: "textarea", short: true }),
        field("게재/상태 (HTML 가능)", item.meta, { type: "textarea", short: true }),
      ])
    )
  );

  homeEditor.append(
    repeatEditor("상단 프로젝트 링크", home.projects, (item) =>
      el("div", { class: "grid", "data-kind": "home-project" }, [
        field("제목", item.title),
        field("URL", item.href),
        field("내용", item.text, { type: "textarea", short: true }),
      ])
    )
  );
}

function collectHome() {
  const query = (kind) => [...homeEditor.querySelectorAll(`[data-kind="${kind}"]`)];
  return {
    ledes: query("lede").map((row) => getFieldValue(row, 0)),
    links: query("link").map((row) => ({ label: getFieldValue(row, 0), href: getFieldValue(row, 1) })),
    focus: query("focus").map((row) => ({ title: getFieldValue(row, 0), text: getFieldValue(row, 1) })),
    news: query("news").map((row) => ({ date: getFieldValue(row, 0), text: getFieldValue(row, 1) })),
    publications: query("publication").map((row) => ({
      title: getFieldValue(row, 0),
      meta: getFieldValue(row, 1),
    })),
    projects: query("home-project").map((row) => ({
      title: getFieldValue(row, 0),
      href: getFieldValue(row, 1),
      text: getFieldValue(row, 2),
    })),
  };
}

function imageUrl(src) {
  return `/repo/${src}`;
}

function renderImageSelect(value) {
  const select = el("select");
  for (const image of state.images) {
    const option = el("option", { value: image }, image.replace("assets/img/projects/", ""));
    if (image === value) option.selected = true;
    select.append(option);
  }
  const img = el("img", { src: imageUrl(value || state.images[0] || ""), alt: "" });
  select.addEventListener("change", () => {
    img.src = imageUrl(select.value);
  });
  return el("div", { class: "image-preview" }, [img, el("label", { class: "field" }, [el("span", {}, "프로젝트 이미지"), select])]);
}

function renderProjectSelect() {
  projectSelect.innerHTML = "";
  for (const project of state.projects) {
    const option = el("option", { value: project.slug }, project.data.title || project.slug);
    projectSelect.append(option);
  }
  activeProject = activeProject || state.projects[0]?.slug;
  projectSelect.value = activeProject;
}

function currentProject() {
  return state.projects.find((project) => project.slug === activeProject);
}

function renderProject() {
  const project = currentProject();
  if (!project) return;
  projectEditor.innerHTML = "";
  const data = project.data;
  const fields = el("div", { class: "card stack" }, [
    el("div", { class: "grid" }, [
      field("제목", data.title),
      field("설명", data.description, { type: "textarea", short: true }),
      field("정렬 순서", data.importance),
      field("그룹", data.group),
    ]),
    renderImageSelect(data.img),
    field("이미지 대체 텍스트", data.img_alt, { type: "textarea", short: true }),
  ]);

  const bodyFields = el("div", { class: "card stack" }, [
    field("요약", project.summary, { type: "textarea", short: true }),
    field("Role", project.role, { type: "textarea", short: true }),
    field("Tools", project.tools, { type: "textarea", short: true }),
    field("Result", project.result, { type: "textarea", short: true }),
    field("Paper / related papers", project.paper, { type: "textarea", short: true }),
    field("Code link", project.code, { type: "textarea", short: true }),
    el("details", {}, [el("summary", {}, "고급: 프로젝트 본문 원문"), field("Markdown / HTML 본문", project.body, { type: "textarea", code: true })]),
  ]);

  projectEditor.append(fields, bodyFields);
}

function collectProject() {
  const project = currentProject();
  const controls = [...projectEditor.querySelectorAll("input, textarea, select")];
  return {
    data: {
      title: controls[0].value,
      description: controls[1].value,
      importance: controls[2].value,
      group: controls[3].value,
      img: controls[4].value,
      img_alt: controls[5].value,
    },
    summary: controls[6].value,
    role: controls[7].value,
    tools: controls[8].value,
    result: controls[9].value,
    paper: controls[10].value,
    code: controls[11].value,
    body: controls[12].value || project.body,
  };
}

function renderPresentationItem(item = {}) {
  return el("div", { class: "card stack", "data-kind": "presentation" }, [
    field("제목", item.title || "", { type: "textarea", short: true }),
    field("저자", item.authors || "", { type: "textarea", short: true }),
    field("학회/메타 (HTML 가능)", item.meta || "", { type: "textarea", short: true }),
    field("메모", item.note || "", { type: "textarea", short: true }),
  ]);
}

function renderPresentations() {
  presentationsEditor.innerHTML = "";
  state.presentations.forEach((item) => presentationsEditor.append(renderPresentationItem(item)));
}

function collectPresentations() {
  return [...presentationsEditor.querySelectorAll('[data-kind="presentation"]')].map((row) => ({
    title: getFieldValue(row, 0),
    authors: getFieldValue(row, 1),
    meta: getFieldValue(row, 2),
    note: getFieldValue(row, 3),
  }));
}

function renderAll() {
  renderHome();
  renderProjectSelect();
  renderProject();
  renderPresentations();
}

async function loadContent() {
  setStatus("소스 파일을 불러오는 중...");
  state = await api("/api/content");
  renderAll();
  setStatus("불러왔습니다. 섹션을 저장한 뒤 Jekyll 빌드를 실행하고 미리보기를 확인하세요.");
}

document.querySelectorAll(".tab").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((tab) => tab.classList.remove("active"));
    document.querySelectorAll(".panel").forEach((panel) => panel.classList.remove("active"));
    button.classList.add("active");
    document.querySelector(`[data-panel="${button.dataset.tab}"]`).classList.add("active");
  });
});

projectSelect.addEventListener("change", () => {
  activeProject = projectSelect.value;
  renderProject();
});

document.querySelector("#reloadButton").addEventListener("click", () => loadContent().catch((error) => setStatus(error.message)));

document.querySelector("#saveHomeButton").addEventListener("click", async () => {
  await api("/api/home", { method: "POST", body: JSON.stringify({ home: collectHome() }) });
  setStatus("홈페이지 소스를 저장했습니다.");
  await loadContent();
});

document.querySelector("#saveProjectButton").addEventListener("click", async () => {
  await api(`/api/projects/${activeProject}`, {
    method: "POST",
    body: JSON.stringify(collectProject()),
  });
  setStatus(`${currentProject().data.title} 프로젝트를 저장했습니다.`);
  await loadContent();
});

document.querySelector("#savePresentationsButton").addEventListener("click", async () => {
  await api("/api/presentations", {
    method: "POST",
    body: JSON.stringify({ presentations: collectPresentations() }),
  });
  setStatus("학술대회 발표 목록을 저장했습니다.");
  await loadContent();
});

document.querySelector("#addPresentationButton").addEventListener("click", () => {
  presentationsEditor.append(renderPresentationItem());
});

document.querySelector("#buildButton").addEventListener("click", async () => {
  setStatus("Jekyll 빌드 실행 중...");
  const result = await api("/api/build", { method: "POST", body: "{}" });
  setStatus(result.ok ? "Jekyll 빌드가 완료되었습니다." : `Jekyll 빌드 실패: ${result.stderr || result.stdout}`);
});

loadContent().catch((error) => setStatus(error.message));
