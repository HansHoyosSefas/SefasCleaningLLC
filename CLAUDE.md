# Sefas Cleaning — Project Rules

## What this is
A simple static website hosted on GitHub Pages for Sefas Cleaning, a family-owned cleaning business in Wilmington, NC.

## Tech stack
- HTML5, CSS3, vanilla JavaScript only
- No frameworks, no build tools, no npm

## File structure
- `index.html` — main page (Home, About, and Services are all sections here)
- `contact.html` — the only separate page
- `assets/` — all images live here; use relative paths like `assets/example.png`
- `styles.css` — site-wide styles
- `script.js` — site-wide scripts

## Navigation rules
- Home, About, Services → scroll within `index.html`
- Contact → links to `contact.html`
- Services section is an accordion on `index.html`, not separate pages

## Image rules
- Only use image files that actually exist in `assets/`
- Never invent filenames
- Never use absolute local paths (`/Users/...`) in website code
- Do NOT use the Bill Clark / Legacy Homes contact list image (contains personal info)
- Do NOT embed the large MP4 directly on GitHub Pages

## Before editing
1. Read the file you plan to change
2. Check that any referenced assets actually exist
3. Make small, safe changes — don't rebuild from scratch unless necessary

## After editing
- Say which file(s) changed and what specifically changed
- Preserve SEO tags, Open Graph tags, and the LocalBusiness Schema.org JSON-LD in `index.html`
