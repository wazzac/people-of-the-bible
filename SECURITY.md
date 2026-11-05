# Security Policy

## Scope

This project is a static, client-side site: plain HTML/CSS/JS with no backend,
no database and no user accounts. Nothing a visitor does is sent to a server.

The only thing the site stores is in the visitor's own browser (`localStorage`):
which map layout they chose and where they dragged figures. It holds no
personal data and never leaves the browser.

The realistic security surface is small, but these are worth reporting:

- Cross-site scripting (XSS) or other injection issues in how the dataset
  (`data-nt.js`, `data-ot.js`) is rendered into the DOM.
- Third-party resources the page loads at runtime:
  - D3.js from cdnjs.cloudflare.com;
  - fonts from Google Fonts;
  - BibleProject poster images, hotlinked from BibleProject's CDN.

  A compromised or substituted resource would affect the site.
- Vulnerabilities in build-time dependencies (`esbuild`, or anything else in
  `package.json`) that could affect the built output.
- Anything that could let a malicious pull request inject executable content
  into the deployed site via the dataset or build script.

This project does **not** handle authentication, payments, personal data or
any server-side logic, so most typical web-app vulnerability classes don't
apply.

## Supported Versions

There's a single rolling version: whatever is deployed at
https://bible-people.wazzac.dev from the `main` branch. Fixes are applied there
directly. Released versions are listed in [`CHANGELOG.md`](./CHANGELOG.md), but
older versions are not maintained.

## Reporting a Vulnerability

Please **do not** open a public GitHub issue for a security concern.

Instead, email **warren.coetzee@gmail.com** with:

- A description of the issue and its potential impact.
- Steps to reproduce, or a proof-of-concept if applicable.

You should receive an acknowledgement within a few days. This is a
volunteer-maintained hobby project, so response and fix timelines aren't
guaranteed. Genuine reports will be taken seriously and, if you'd like,
credited once resolved.

## Dependencies

The project intentionally has almost no dependencies.

- **Build time:** the only package is `esbuild`, a dev dependency used for the
  minify step. Run `npm audit` against `package.json` before merging dependency
  updates.
- **CI:** every push and pull request to `main` runs the dataset validator and
  the production build (`.github/workflows/ci.yml`). This catches a broken
  dataset or build before it is deployed.
- **Runtime:** there are no npm packages at runtime. D3.js and the fonts are
  loaded from their CDNs, as listed under *Scope*.
