# Hyunseo Jang Academic Homepage

Source for [home.hyunseo.kr](https://home.hyunseo.kr/), built with [Jekyll](https://jekyllrb.com/) and [al-folio](https://github.com/alshedivat/al-folio).

The site presents current research, publications, selected robotics projects, and a CV. The GitHub profile introduction is maintained separately in [kelvin926/kelvin926](https://github.com/kelvin926/kelvin926).

## Local preview

Docker is the preferred local setup on Windows. Install Docker with Compose, then run from the repository root:

```powershell
docker compose up
```

Open [localhost:8080](http://localhost:8080). Stop the preview with `Ctrl+C`; remove the stopped container with `docker compose down`.

For a native setup, the deployment workflow uses Ubuntu 24.04, Ruby 3.3.5, Node.js 20, Python 3.13, ImageMagick, and the dependencies locked in `Gemfile.lock` and `package-lock.json`:

```bash
bundle install
python3 -m pip install -r requirements.txt
npm ci
bundle exec jekyll serve --host 127.0.0.1 --port 8080
```

## Content map

| Content                                          | Source                                   |
| ------------------------------------------------ | ---------------------------------------- |
| Main-page structure                              | `_layouts/one-page.liquid`               |
| Introduction, appointments, news                 | `_pages/about.md`                        |
| Publication metadata and abstracts               | `_bibliography/papers.bib`               |
| Publication section and conference presentations | `_includes/sections/publications.liquid` |
| CV and background                                | `_includes/sections/cv.md`               |
| Project pages, order, and card summaries         | `_projects/`                             |
| Project section                                  | `_includes/sections/projects.liquid`     |
| Scholar ID, ORCID, and social links              | `_data/socials.yml`                      |
| Site metadata and Jekyll settings                | `_config.yml`                            |
| Site-specific styles                             | `assets/css/site-polish.css`             |
| Homepage research gallery                        | `_data/research_highlights.yml`          |
| Added-media credits and checksums                | `_data/media_sources.json`               |

Each project has a stable `permalink`, a `group` (`selected` or `other`), and an `importance` value controlling its order. Use `card_description` for the short homepage summary. Add descriptive alternative text to images and lazy-load secondary project images.

Use static project thumbnails on the homepage and keep animated demos on the detail pages. Keep photos, software screenshots, generated imagery, and simulation results distinct in captions. Preserve complete images with `object-fit: contain`, record the original dimensions, and link detailed figures to their full-size files. When adding a gallery item, verify its image, project URL, caption, and dimensions against the source material. The media-source manifest records provenance without exposing local machine paths or private repository links.

The optional [local content editor](editor/README.md) runs with `npm run editor`. It edits local sources; the Jekyll preview runs separately.

## Validate changes

From the repository root:

```bash
npm ci
npm test
npm run lint:prettier
JEKYLL_ENV=production bundle exec jekyll build
```

`npm test` checks project assets, secondary-image loading, and publication metadata. The production build checks Liquid, Markdown, BibTeX, and generated pages. The full formatting command covers the repository; for a small edit, Prettier can also check just the changed supported files.

Before publishing content:

- Match publication titles, authors, venues, dates, and DOI links to publisher records. Use [Google Scholar](https://scholar.google.com/citations?user=4UTN6xYAAAAJ) as an additional discovery and citation reference.
- Distinguish `Accepted` from `Published`; do not infer publication from the conference date alone.
- Keep research questions separate from established results. State simulation conditions, baselines, and trial counts with quantitative claims.
- Verify that code links are publicly accessible, and identify prototypes or related workspaces accurately.
- Synchronize appointment dates, research focus, and publication status with the [profile README](https://github.com/kelvin926/kelvin926/blob/main/README.md).
- Review the homepage and changed project pages at desktop and mobile widths, including links, dark mode, and keyboard focus.

## Deployment

[Build and deploy site](.github/workflows/deploy.yml) validates and builds qualifying pull requests without publishing them. Qualifying changes pushed or merged into `main` run the production build, purge unused CSS, and publish `_site` to the `gh-pages` branch. A manual workflow run is also available.

Keep `CNAME` and the `_config.yml` site URL aligned with `home.hyunseo.kr`. Build output and local dependency/cache directories are ignored by Git.
