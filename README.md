# Nicolas Sun — Personal Portfolio

A responsive personal portfolio showcasing my software projects, background, and contact information. Built with React and Vite, with a focus on accessibility, performance, and straightforward content management.

## Run locally

```bash
npm install
npm run dev
```

Open the local address printed by Vite, usually `http://localhost:5173`.

## Build

```bash
npm run build
```

The production site is generated in `dist/`.

## Updating projects

Project titles, descriptions, media paths, captions, and GitHub links are managed in `src/data/projects.js`. Static images and videos belong in `public/images/` and `public/videos/`.

## Deployment

The included GitHub Actions workflow builds and deploys the site to GitHub Pages whenever changes are pushed to `main`. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.
