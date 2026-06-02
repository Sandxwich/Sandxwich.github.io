# Sandxwich Portfolio Website

A static, CLI-themed personal portfolio that showcases embedded hardware, firmware, and PCB projects.

## Structure

- `index.html` — landing page with about, projects, skills, and contact sections.
- `style.css` — terminal/CLI theme, responsive layout, reduced-motion support.
- `script.js` — mobile navigation toggle.
- `animations/` — ASCII frame animation rendered on the landing page.
  - `ascii-frames.txt` — frames separated by `---FRAME---`.
  - `ascii.js` — frame loader and animation loop.
- `projects/<slug>/index.html` — one page per project. Existing slugs:
  - `FM-radio`, `iot-gateway`, `medical-thermostat`, `valentine-pcb`.

## Run Locally

The site is plain static HTML/CSS/JS. Either:

- Open `index.html` directly in a browser, or
- Serve it (recommended, so `fetch()` for ASCII frames works):
  - `python -m http.server 8000` then open `http://127.0.0.1:8000`, or
  - Use the VS Code "Live Server" extension.

## Customize

### Personal copy
Edit `index.html` — the `#about`, `#skills`, and `#contact` sections.

### Add a project
1. Create `projects/<slug>/index.html`. Copy an existing project page as a template; keep relative paths as `../../style.css` and `../../script.js`.
2. Add a card in `index.html` inside `.project-grid` linking to the new page.

### Contact details
Update the email and Discord values in the `#contact` section of `index.html`.

### Make it your own
- Add a `resume.pdf` to the root and link it from contact.
- Replace project copy with your actual hardware and software achievements.
- Add logos, images, screenshots, or 3D PCB renders inside project pages with `<img class="project-image" ...>`.
- Introduce each project with the problem, your contribution, the tools used, and the result.

### Update the ASCII animation
Edit `animations/ascii-frames.txt`. Separate frames with a line containing exactly `---FRAME---`. The animation respects `prefers-reduced-motion`.

## Deployment Automation

This repository includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.
It automatically deploys your static site to GitHub Pages whenever you push to the `main` branch.

### How it works

- The workflow runs on every push to `main`.
- It copies your site files to a build folder.
- It uploads the folder as a Pages artifact.
- It deploys the artifact to GitHub Pages.

### First-time setup

1. Push the site to GitHub.
2. Go to your repository `Settings > Pages`.
3. Choose `GitHub Actions` as the source if prompted.
4. Save changes and wait for the first workflow run to finish.

### Notes

- If you want updates to deploy instantly, just push changes to `main`.
- The site source is static HTML/CSS/JS, so no build step is required.

## Deployment Ideas

- GitHub Pages: ideal for static personal portfolios.
- Netlify / Vercel: for fast hosting with automatic deploys.

## Recommended Improvements

- Add a `resume.pdf` download button.
- Add real project links or GitHub repositories.
- Add an `about` image or hardware photo.
- Add extra sections for education, awards, or certifications.

## Notes

This site is intentionally simple and easy to customize, with a design suited for both school team presentations and future employer portfolios.
