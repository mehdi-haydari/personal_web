# Mehdi Heydari — Portfolio

A responsive React portfolio built with Vite and published as static pages on GitHub Pages.

## Local preview

With Node.js 22.12 or later on the 22.x line, or Node.js 24 or later, run:

```sh
npm ci
npm run dev
```

## Content

- `src/HomePage.jsx`: professional experience, selected work, and expandable technical cases.
- `src/SiteHeader.jsx`: navigation shared by the homepage and the case study.
- `styles.css`: shared styles and responsive layouts; retains the original dark, lime, and pixel-heading design.
- `voice-assistant.css`: project-card and case-study styles.
- `src/VoiceAgentPage.jsx`: the local AI prototype case study, decisions, technology rationale, evaluation and current restrictions.
- `index.html` and `projects/real-estate-voice-assistant/index.html`: separate Vite entry pages, keeping both public URLs directly accessible.
- `public/`: images, diagrams and the general software-engineering résumé. These files keep their public URLs.

ArtikelSense is described as released on Google Play, based on the confirmed project status. Its repository is private. No user counts or revenue are claimed. Professional experience and recent Java/React product work are distinguished in the toolkit.

## Deploy

Run `npm run build` to generate `dist/`. The build renders both React pages to HTML so their content and section links work on first load. Run `npm run preview` to check that output locally.

The `Deploy portfolio to GitHub Pages` workflow builds and packages `dist/` for pull requests to `main`. A push to `main` also deploys the built artifact to the live site. Set **Pages → Build and deployment → Source** to **GitHub Actions** in repository settings if needed.

Keep the résumé filename unchanged when replacing the PDF so existing download links continue to work. Updating files locally does not publish them; deployment is triggered by a push to `main` or a manual workflow run.

The voice assistant is presented as a browser prototype with fictional listings and a public source repository. Phone-line integration, real notifications, RAG and a validated clean-machine installation are not claimed. The case study links to source and evaluation evidence rather than a public live microphone demo.
