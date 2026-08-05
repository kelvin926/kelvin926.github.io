import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const projectDir = path.join(root, "_projects");
const errors = [];

const projectFiles = fs
  .readdirSync(projectDir)
  .filter((name) => name.endsWith(".md"))
  .sort();

for (const name of projectFiles) {
  const filePath = path.join(projectDir, name);
  const content = fs.readFileSync(filePath, "utf8");

  for (const match of content.matchAll(/^(?:img|thumb):\s*(\S+)/gm)) {
    const assetPath = path.join(root, match[1]);
    if (!fs.existsSync(assetPath)) {
      errors.push(`${name}: missing asset ${match[1]}`);
    }
  }

  const images = [...content.matchAll(/<img\b[^>]*>/g)].map((match) => match[0]);
  images.slice(1).forEach((image, index) => {
    if (!image.includes('loading="lazy"')) {
      errors.push(`${name}: image ${index + 2} must use lazy loading`);
    }
  });
}

const publicationSources = [
  "_pages/about.md",
  "_pages/publications.md",
  "_bibliography/papers.bib",
  "_includes/hook/bib.liquid",
  "_projects/cebo-stair-climbing-wheel.md",
];

const stalePublicationPhrases = ["revised manuscript resubmitted", "accepted; in production", "accepted and in production"];

for (const relativePath of publicationSources) {
  const content = fs.readFileSync(path.join(root, relativePath), "utf8").toLowerCase();
  for (const phrase of stalePublicationPhrases) {
    if (content.includes(phrase)) {
      errors.push(`${relativePath}: stale publication status \"${phrase}\"`);
    }
  }
}

const bibliography = fs.readFileSync(path.join(root, "_bibliography/papers.bib"), "utf8");
if (!bibliography.includes("10.1016/j.aei.2026.105096")) {
  errors.push("_bibliography/papers.bib: CEBO DOI is missing");
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated ${projectFiles.length} project files and publication metadata.`);
