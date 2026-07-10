# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project intends to follow [Semantic Versioning](https://semver.org/)
once tagged releases begin.

## [Unreleased]

### Added
- `LICENSE` (MIT), `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, `SECURITY.md`,
  and this `CHANGELOG.md`, in preparation for accepting outside contributions.
- `npm run build` script (`scripts/build.mjs`, esbuild) that minifies
  `main.css`/`main.js` into a `dist/` folder for deployment.

### Changed
- Split the previously monolithic `index.html` into `index.html` (markup),
  `main.css` (styles), and `main.js` (data + logic), so contributors can work
  in each concern separately. Local development still needs no build step —
  `index.html` loads the unminified files directly.
- Cloudflare Pages build settings now use `npm run build` with output
  directory `dist` (previously no build command, output directory `/`).
- `scripts/validate-data.mjs` now reads the dataset from `main.js` instead of
  `index.html`.

## [0.1.0] - 2026-07-09

### Added
- Initial release: an interactive D3.js force-directed relationship map of
  biblical figures, with separate Old Testament and New Testament datasets.
- Network view (force graph clustered by role/category) and timeline view
  (lifespan bars by estimated dates).
- Search, category filters, and a "name lens" clash comparison panel for
  disambiguating figures who share a name (multiple Marys, Jameses, Simons,
  Johns, and kings).
- Detail panel per person with description, dates, scripture references, and
  "not to be confused with" notes.
- Hyperlinks from every verse reference in the detail panel to the relevant
  chapter/verse on Bible.com (NIV).
- Mobile view support.
- `CLAUDE.md` documenting the data schema and sourcing rules (Bible.com NIV
  for scripture, general historical consensus for extra-biblical history,
  explicit "traditional" labelling for church tradition).
- `scripts/validate-data.mjs`, a referential-integrity checker for the
  hand-curated dataset.
