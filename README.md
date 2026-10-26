# Mehdi Heydari — Portfolio

A responsive, static portfolio for GitHub Pages. No build step or JavaScript framework is required.

## Local preview

Serve this directory with a local HTTP server, then open it in your browser. For example:

```sh
python3 -m http.server 8766 --bind 127.0.0.1
```

## Content

- `index.html`: professional experience, selected work, and expandable technical cases.
- `styles.css`: shared styles and responsive layouts; retains the original dark, lime, and pixel-heading design.
- `assets/artikelsense-icon.png`: actual ArtikelSense app icon.
- `Mehdi-Heydari-Resume.pdf`: the current full-stack résumé, linked from the hero and contact section.

ArtikelSense is described as being in Google Play closed testing. Its repository is private. No user counts, revenue, or public launch are claimed. Professional experience and recent Java/React product work are distinguished in the toolkit.

## Deploy

The `Deploy portfolio to GitHub Pages` workflow publishes the repository root when a commit is pushed to `main`. Set **Pages → Build and deployment → Source** to **GitHub Actions** in repository settings if needed.

Keep the résumé filename unchanged when replacing the PDF so existing download links continue to work. Updating files locally does not publish them; deployment is triggered by a push to `main` or a manual workflow run.
