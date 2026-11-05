# Sefas Cleaning, LLC

A simple, professional, mobile-friendly static website for **Sefas Cleaning, LLC** — a family-owned cleaning company serving Pender County, New Hanover County, Brunswick County, and Wilmington, NC for over 26 years.

> **26 Years of Trust, Cleanliness, and Care.**

---

## Tech

- HTML5, CSS3, vanilla JavaScript
- No frameworks, no build step
- Google Fonts (Playfair Display + Inter)
- Coastal Wilmington, NC color palette tuned to the brand logo
- Mobile-first responsive design
- Schema.org `LocalBusiness` JSON-LD on the home page
- Hosted on **GitHub Pages**

## Site map

```
/
├── index.html    → Home (Hero + About + Services accordion)
└── contact.html  → Contact + free-quote form
```

The **home page is a single-page experience**. Home / About / Services are anchor links that scroll within the page; only **Contact** is a separate page (the action moment). As you scroll, the navbar highlights the active section.

The Services section uses an **accordion**: click any service to expand its description and photo. Opening one service automatically collapses the previously open one.

## Project structure

```
Sefas_Cleaning/
├── index.html          ← main page
├── contact.html        ← contact + free-quote form
├── styles.css          ← coastal theme + responsive layout
├── script.js           ← nav, scroll-spy, accordion, mailto fallback
├── CLAUDE.md           ← project rules for AI-assisted editing
├── assets/
│   ├── sefas-logo.png
│   ├── coastal-home.jpg
│   ├── team-roberto.jpg
│   ├── work-residential-vacuum.jpg
│   ├── work-deck-halfclean.jpg
│   ├── service-deep.png
│   ├── service-move-in-out.png
│   ├── service-post-construction.png
│   ├── service-commercial.png
│   ├── service-window.png
│   ├── service-gutter.png
│   ├── service-driveway.png
│   ├── service-yard.png
│   └── service-painting.png
├── .gitignore
└── README.md
```

## Local preview

```bash
cd ~/Documents/GitHub/Sefas_Cleaning
python3 -m http.server 8000
# then visit http://localhost:8000
```

Press `Ctrl + C` to stop the server. Hard-refresh (`Cmd + Shift + R`) after each change.

## Editing content

- **Home page (hero, about, owners card, services accordion)**: `index.html`
- **Service copy + bullet lists**: the `<article class="accordion-item">` blocks inside `index.html`
- **Contact info & form**: `contact.html`
- **Visual changes (colors, spacing, fonts)**: CSS variables at the top of `styles.css`

### Brand color system (in `:root` of `styles.css`)

| Variable                | Value     | Use                                |
|-------------------------|-----------|------------------------------------|
| `--color-primary`       | `#4a90c8` | Sefas wordmark blue                |
| `--color-primary-light` | `#a8d0e8` | Carolina sky blue                  |
| `--color-primary-dark`  | `#2c5f8d` | Deep coastal / hover blue          |
| `--color-slate`         | `#2d4a6a` | "Cleaning, LLC" navy text          |
| `--color-slate-deep`    | `#1e3552` | Footer / deepest navy              |
| `--color-sky`           | `#eaf4fb` | Soft section background            |
| `--color-white`         | `#ffffff` | Page background                    |
| `--color-muted`         | `#5e6a7a` | Secondary body text                |

## Contact form

The form on `contact.html` uses a `mailto:` fallback by default so it works on a static GitHub Pages site with no backend.

To upgrade to a real form backend (e.g. **Formspree**):

1. Create a free form at <https://formspree.io>.
2. In `contact.html`, replace `action="mailto:info@sefascleaning.com"` with `action="https://formspree.io/f/YOUR_FORM_ID"`.
3. Remove `enctype="text/plain"` from the `<form>` tag.
4. In `script.js`, remove the `quoteForm` submit listener.

## Deployment (GitHub Pages)

1. Push the latest changes to `main`.
2. On github.com, go to **Settings → Pages**.
3. Set **Source** to **Deploy from a branch**, **Branch** = `main`, folder = `/ (root)`.
4. Save. Within 1–2 minutes the site is live at `https://<your-username>.github.io/Sefas_Cleaning/`.

Every future push to `main` redeploys automatically.

## License

© 2026 Sefas Cleaning, LLC. All Rights Reserved.
