# Testing Static GitHub Pages Site

## Overview
This is a static HTML/CSS/JS personal website hosted on GitHub Pages. No build tools, frameworks, or dependencies are used.

## Local Testing

### Start Local Server
```bash
cd /home/ubuntu/repos/DanielLCintra.github.io
python3 -m http.server 8080 &
```
Then open http://localhost:8080 in the browser.

### What to Verify
The site is a single-page layout (`index.html`) with anchor navigation. Key sections:
- **Banner** (`#banner`): Photo, name, current role/title, certifications summary
- **Sobre mim** (`#one`): About section with professional bio
- **Skills** (`#two`): Technical skills list
- **Currículo & Certificações** (`#three`): CV link (should point to LinkedIn) and certifications list
- **DevFast** (`#four`): YouTube channel section with CTA button
- **Curso Web Dev** (`#five`): Web development course section with CTA button
- **Footer** (`#footer`): Contact info and social links (LinkedIn, GitHub, YouTube, Facebook)

### Menu Navigation
Click "MENU" button (top-right) to open the navigation overlay. Verify all menu items are present and link to the correct anchors.

### External Links
Verify that CTA buttons open in new tabs:
- DevFast button → https://www.youtube.com/@DevFastOficial
- Curso button → https://www.curso-webdev.com/?page=principal
- CV link → LinkedIn profile
- Footer social links → correct URLs

## Notes
- No CI/CD pipeline beyond Devin Review
- No authentication or credentials needed for testing
- The site uses the "Solid State" template from HTML5 UP
- CSS/JS assets are in the `assets/` directory — do not modify unless explicitly asked
- Content updates should only touch `index.html`
- The site language is Portuguese (Brazilian)

## Content Source
Professional content comes from the owner's LinkedIn profile. When updating, use an exported LinkedIn PDF for accuracy rather than scraping the public profile URL (which may have limited access).
