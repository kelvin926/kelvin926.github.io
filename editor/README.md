# Local portfolio editor

This editor is for local source edits only. It is excluded from the Jekyll build and is not deployed to GitHub Pages.

## Start

```powershell
npm run editor
```

Open:

```text
http://127.0.0.1:5177/
```

The normal Jekyll preview should run separately on:

```text
http://127.0.0.1:8080/
```

## What it edits

- `_pages/about.md`
- `_projects/*.md`
- `_pages/publications.md` selected conference presentations

After saving, run **Build Jekyll** in the editor or run:

```powershell
docker compose exec -T jekyll bundle exec jekyll build
```
