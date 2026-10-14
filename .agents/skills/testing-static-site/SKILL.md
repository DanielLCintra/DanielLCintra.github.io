# Testing Static GitHub Pages Site

## Overview
This is a static HTML/CSS/JS personal website hosted on GitHub Pages. No build tools, frameworks, or dependencies are used.

## Local Testing

### Start Local Server
```bash
cd /Volumes/externo/Projetos/DanielLCintra.github.io
python3 -m http.server 8080 &
```
Then open http://localhost:8080 in the browser.

### What to Verify
Single-page storytelling layout (`index.html`) with a short primary nav:

**Primary nav (4):** Sobre · Livros · Ensino · Contato

**Sections / story arc:**
1. **Hero** (`#topo`) — brand, positioning, CTAs
2. **Sobre** (`#sobre`) — bio + Itaú / Alura / FIAP + skills strip
3. **Livros** (`#livros`) — Tech Lead na Prática (featured) + DevFast
4. **Ensino** (`#ensino`) — entrevista Alura + 4 cursos Alura + YouTube/apostila
5. **Credenciais** (`#credenciais`) — certifications (footer secondary link only)
6. **Contato** (`#contato`) — contact + secondary footer nav

### Images (local)
- `images/profile_image_daniel.png` — hero
- `images/tech-lead-na-pratica.jpg` — book cover
- `images/devfast-do-zero-ao-dev.jpg` — DevFast cover
- `images/entrevista-alura-tech-lead.jpg` — interview thumb

### External Links
- Tech Lead na Prática → https://www.amazon.com.br/dp/B0H7JX8TG8
- DevFast Kindle → https://www.amazon.com.br/dp/B0G5HJSZFK
- DevFast físico → https://loja.uiclap.com/titulo/ua138321/
- Entrevista → https://www.youtube.com/watch?v=m4qPmVHfemo&t=30s
- Alura courses (4) — links in `#ensino`
- YouTube / apostila / LinkedIn / GitHub

## Notes
- Styles: `assets/css/site.css` · Scripts: `assets/js/site.js`
- Language: Portuguese (Brazilian)
- Keep primary nav to ~4 items; put secondary anchors in the footer

## Content Source
Professional content comes from the owner's LinkedIn profile. When updating, prefer an exported LinkedIn PDF for accuracy.
