# 로컬 포트폴리오 편집기

이 편집기는 로컬 소스 수정용입니다. Jekyll 빌드에서 제외되어 GitHub Pages에는 배포되지 않습니다.

## 실행

```powershell
npm run editor
```

브라우저에서 열기:

```text
http://127.0.0.1:5177/
```

일반 Jekyll 미리보기 서버는 별도로 아래 주소에서 실행되어야 합니다.

```text
http://127.0.0.1:8080/
```

## 수정 대상

- `_pages/about.md`
- `_projects/*.md`
- `_pages/publications.md`의 selected conference presentations

저장한 뒤 편집기에서 **Jekyll 빌드**를 누르거나 아래 명령을 실행합니다.

```powershell
docker compose exec -T jekyll bundle exec jekyll build
```
