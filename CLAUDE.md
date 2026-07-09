# CLAUDE.md

Guidance for Claude (or any AI agent) working in this repository. Read this before making changes.

## What this project is

"People of the Bible" — a single-page relationship map of biblical figures, rendered as an interactive D3.js force graph with a secondary timeline view. Two datasets: Old Testament and New Testament, toggled in the UI.

Live site: https://bible.wazzac.dev (Cloudflare Pages)
Repo: github.com/wazzac/bible

## Source of truth

- **Scripture text/quotes and verse references**: bible.com, NIV translation. When citing or quoting a verse, verify against the NIV on bible.com (e.g. `https://www.bible.com/bible/111/GEN.INTRO1.NIV` — bible ID `111` is NIV; swap the book/chapter code for others). Do not introduce quotes or references from other translations.
- **Extra-biblical history/dates** (Roman emperors, governors, Josephus-derived events like James the Just's martyrdom, the fall of Jerusalem in AD 70): general historical consensus. Cite the source inline in `desc` when it's not Scripture (e.g. "recorded by Josephus").
- **Church tradition beyond the biblical text** (Joachim and Anne as Mary's parents, Luke/Mark's authorship, Peter and Paul's martyrdoms in Rome, John's exile date per Irenaeus): explicitly labelled "traditional" in the data (`dates`, `desc`, or `notconfused` fields). Never present tradition as if it were Scripture — the existing data is careful about this and new entries must be too.
- **Dates in general** are scholarly estimates and frequently disputed (the Exodus, the crucifixion year, several lifespans). Say so rather than asserting false precision.

If a new fact, date, or reference is added and its source doesn't fall into one of the above, ask the user rather than guessing.

## Architecture

Everything lives in one file: `index.html`. No build step, no framework, no package.json. D3.js and two Google Fonts are pulled from CDN via `<script>`/`<link>` tags.

Structure inside `index.html`:
1. `<style>` — all CSS, using custom properties in `:root` for the color palette (one CSS var per relationship category, e.g. `--fam`, `--twelve`, `--patri`).
2. `<body>` — header (testament toggle, network/timeline view toggle), controls bar (search, category filter chips, "name lens" clash filter), the SVG stage, detail panel (`<aside>`), clash-comparison panel, timeline SVG.
3. `<script>` — all data and all logic, in this order:
   - `NT_CAT` / `OT_CAT` — category definitions (`label`, `color` referencing a CSS var).
   - `NT_PEOPLE` / `OT_PEOPLE` — array of person objects (the nodes). Schema below.
   - `NT_LINKS` / `OT_LINKS` — array of relationship edges via the `lk()` helper.
   - `NT_EVENTS` / `OT_EVENTS` — timeline milestone markers.
   - `NT_LIVES` / `OT_LIVES` — lifespan bars for the timeline view.
   - `NT_META` / `OT_META` — UI metadata: titles, force-layout centroids per category, "name clash" groupings, timeline domain/ticks.
   - `DATASETS` — registry mapping `nt`/`ot` to the above five pieces; `TESTAMENT` selects the active one.
   - D3 force simulation, rendering, search, filters, timeline drawing, pan/zoom, tooltip and detail-panel logic.

There is no separate data file — the dataset **is** JavaScript source inside `index.html`. Edit it directly; don't invent a JSON/YAML layer without discussing it with the user first, since that would be a real architecture change.

## Data schema

### Person object (`PEOPLE` array)
```js
{
  id:          "shortlowercaseid",   // unique per testament; used as the graph node key and in LINKS/LIVES
  name:        "Full Name",          // canonical display name
  short:       "Short Name",         // compact label used on the graph node
  cat:         "twelve",             // must be a key in the matching CAT object
  w:           12,                    // node "weight" (visual size); roughly rank by narrative importance, 7-24 typical
  halo:        1,                     // optional — draws a gold ring (used sparingly for the most central figures)
  aliases:     "Other names · used elsewhere",   // optional, "·"-separated
  clash:       "James",               // optional — groups this person under a shared-name lens (see NT_META.clashNames)
  clashtag:    "One-line disambiguator shown in the clash comparison panel",
  dates:       "c. AD 1 – c. AD 62",  // always hedge with "c." for estimates; note disputes inline
  desc:        `Prose description, 2-4 sentences...`,   // template literal so it can safely contain apostrophes
  notconfused: `Who not to confuse this person with, and why.`,  // optional but strongly encouraged wherever a name is shared
  refs:        ["Matthew 1-2","Luke 2"]  // NIV/standard book-chapter references, no verse-level detail required
}
```

### Link object (`LINKS` array, built via `lk(source, target, kind, type, note)`)
- `source` / `target` — must match a `PEOPLE` id in the same testament.
- `kind` — one of the keys in `LG` (`fam`, `disc`, `min`, `conf`, `spec`, `rule`) — controls the link's color.
- `type` — short relationship label, e.g. `"married"`, `"father of"`, `"betrayed"`.
- `note` — optional context string, `""` if none.

### Event object (`EVENTS` array)
`{ y: <year, negative = BC>, label: "...", note: "optional caveat" }` — shown on the timeline axis.

### Life object (`LIVES` array)
`{ id, s: <start year>, e: <end year>, tenure: true, lab: "reigned"/"active"/etc, uS: true, uE: true }` — draws a bar on the timeline. `uS`/`uE` mark uncertain start/end (rendered dashed). `id` must exist in `PEOPLE`.

## Conventions when adding or editing content

1. Every new person needs a unique `id`, a `cat` that exists in the matching `CAT` object, and at least one `refs` entry (or an explicit "Not named in the NT/OT" note if extra-biblical).
2. If a name is shared by multiple figures already in the dataset (or the new person introduces a clash), add `clash`/`clashtag` on all of them and consider adding the name to `META.clashNames` + `META.clashSub`.
3. Add `notconfused` whenever a reasonable reader could mix this person up with another entry — this is a core feature of the project (disambiguating the many Johns, Marys, Jameses, Simons, kings, etc.), not an afterthought.
4. Every `LINKS` entry needs both endpoints already present in `PEOPLE`. Every `LIVES` entry needs its `id` present in `PEOPLE`.
5. Keep the tone consistent with existing entries: measured, encyclopedic, NIV-sourced, explicit about tradition vs. Scripture vs. secular history.
6. Categories have a fixed color and a centroid position in `META.centroids` (as `[x, y]` fractions of the stage). Don't add a new category without also adding its CSS color variable, a `CAT` entry, a centroid, and a legend row.
7. Run the QA validator (see below) after any data edit, before committing.

## Verification

No build step — open `index.html` directly in a browser (or serve the folder) to check changes visually. There's also a referential-integrity validator:

```
node scripts/validate-data.mjs
```

It checks for duplicate ids, dangling link references, `LIVES` entries with no matching person, and unknown categories. Run it after editing data and before committing.

See `.claude/skills/bible-data-entry/SKILL.md` for the step-by-step workflow for adding a new person or relationship, and `.claude/skills/bible-data-qa/SKILL.md` for the QA pass.

## Deployment

Cloudflare Pages, framework preset `None`, no build command, output directory `/`. Pushing to the connected branch on `github.com/wazzac/bible` deploys automatically — there is nothing to run locally to "build" the site.

## Non-goals / things not to do without asking

- Don't introduce a JS framework, bundler, or build step — the project is deliberately a zero-dependency static file.
- Don't switch translations away from NIV for quotes/references.
- Don't assert disputed dates or traditions as settled fact.
