# Sefas Cleaning, LLC

A simple, professional, mobile-friendly static website for **Sefas Cleaning, LLC**, a family-owned cleaning company serving Pender County, New Hanover County, Brunswick County, and Wilmington, NC.

> **26 Years of Trust, Cleanliness, and Care.**

The production site is available at <https://www.sefascleaningllc.com/>.

## Technology

- HTML5, CSS3, and vanilla JavaScript
- No frameworks, package manager, or build step
- Responsive layout with Google Fonts (Playfair Display and Inter)
- Schema.org `LocalBusiness` structured data on the home page
- Static hosting on Azure Static Web Apps

## Site features

- `index.html` contains the Home, About, and Services sections.
- Navigation links scroll to sections on the home page; Contact opens `contact.html`.
- Services are shown in an accordion, with only one service expanded at a time.
- The contact form uses a `mailto:` fallback and does not require a server-side backend.

## Project structure

```text
.
├── index.html
├── contact.html
├── styles.css
├── script.js
├── README.md
├── CLAUDE.md
├── assets/
│   ├── README.md
│   └── site images
└── .github/
    └── workflows/
        └── azure-static-web-apps-green-mud-064e6ae0f.yml
```

`styles.css` contains site-wide styles, and `script.js` handles navigation, scroll behavior, the services accordion, and the contact form fallback. All website images are stored in `assets/` and referenced with relative paths.

## Local preview

From the repository root, start a local static file server:

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000/> in a browser. Stop the server with `Ctrl+C`.

## Deployment

The GitHub Actions workflow at `.github/workflows/azure-static-web-apps-green-mud-064e6ae0f.yml` deploys the site to Azure Static Web Apps:

- Pushes to `main` start a deployment. The workflow can also be started manually from the **Actions** tab.
- The site is served from the repository root (`app_location: /`).
- The site is plain HTML, CSS, and JavaScript, so the workflow skips the app build.
- The Azure deployment token is read from the GitHub Actions secret `AZURE_STATIC_WEB_APPS_API_TOKEN_GREEN_MUD_064E6AE0F`. Keep its value in GitHub Secrets; do not commit it to the repository.

## Contact form backend

The form currently uses a `mailto:` fallback. To submit form entries to a hosted form service such as Formspree:

1. Create a form and get its endpoint.
2. Replace the form's `mailto:` action in `contact.html` with the service endpoint.
3. Remove `enctype="text/plain"` from the form.
4. Update the `quoteForm` submit handler in `script.js` so it allows the form to submit to that endpoint.

## License

© 2026 Sefas Cleaning, LLC. All rights reserved.
