# Sandxwich Portfolio Website

This repository contains a modern personal CV website built to showcase software and hardware projects for school teams and future employers.

## Files

- `index.html` — main website layout and content.
- `style.css` — modern responsive styling and theme support.
- `script.js` — theme toggle, mobile nav, and simple reveal animations.

## Quick Setup

1. Open `index.html` in a browser.
2. If you want the website online, host it with GitHub Pages:
   - Go to your repository settings.
   - In the `Pages` section, select the `main` branch and `/ (root)` folder.
   - Save and wait for the site URL to appear.

## Customize Your Site

### Update your name and headline
- Edit the title and hero section in `index.html`:
  - Replace `Hi, I'm Jonas.` with your name.
  - Change the hero description to match your personal story.

### Add or edit projects
- In `index.html`, update the cards in the `#projects` section.
- Add more `<article class="project-card">` blocks as needed.

### Change contact details
- Replace the email and Discord values in the `#contact` section.
- The contact form currently uses Formspree as an example. Update `action` to your own form endpoint if needed.

### Make it your own
- Add a `resume.pdf` to the root and link it from the hero or contact section.
- Replace project copy with your actual hardware and software achievements.
- Add logos, images, or screenshots by inserting `<img>` elements inside the project cards.

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
