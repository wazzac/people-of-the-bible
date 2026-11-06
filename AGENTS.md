# AGENTS.md

Instructions for any AI coding agent (Claude Code, Codex, Cursor, Copilot, …) working in this repository. Read this before making changes. Human contributors will find the same rules, in shorter form, in `CONTRIBUTING.md`.

## What this project is

"People of the Bible" — a single-page relationship map of biblical figures, rendered as an interactive D3.js force graph with a secondary timeline view. Two datasets: Old Testament and New Testament, toggled in the UI. In the New Testament, Jesus is the hub: the largest circle and the centre of the map.

Live site: https://bible-people.wazzac.dev (Cloudflare Pages)
Repo: https://github.com/wazzac/people-of-the-bible

## Source of truth

**The Bible, in the NIV on bible.com, is the source of truth. Nothing is made up.** Every person, relationship, description and quotation must come from the NIV text. Where the text is silent or ambiguous, say so in the entry — never fill the gap with a guess. Anything that does not come directly from the text is allowed only if it falls into one of the labelled categories below, and it must be marked where it appears **with the reason for it**.

- **Scripture text, quotes and verse references (the default for everything)**: bible.com, NIV translation. Read the passage before adding anything from it, and quote the NIV's exact wording (e.g. `https://www.bible.com/bible/111/GEN.1.NIV` — bible ID `111` is NIV; swap the book/chapter code for others, and use `{BOOK}.INTRO1` for a book's introduction). Never introduce quotes or references from other translations, and never quote from memory. NIV footnotes (e.g. "Or *ancestor*", "Also called Jehoahaz") may be used as caveats, attributed as footnotes.
  - Say what the text says and no more. If a relationship is implied but not stated, either leave it out or link it with a note that matches `UNSURE_RE` (`possibl|disput|traditio`) and gives the reason — for example "possibly King Hezekiah; the text does not say". Such links render dotted. Example: Hosea 1 does not say Lo-Ruhamah and Lo-Ammi were Hosea's children, so they are linked "named", not "father of".
  - Identity is a relationship too. When a later book names someone who *may* be a person already on the map (e.g. Sosthenes in 1 Corinthians and in Acts), keep two entries joined by a dotted "the same man?" link, unless the text ties them together through the same companions or places. When one entry covers several mentions the text doesn't connect, the entry says so.
- **Dates**: Scripture gives ages, lengths of reigns and relative anchors (e.g. 1 Kings 6:1, Exodus 12:40), not BC/AD years. Use Scripture's own figures first. Place them on the calendar with standard scholarly chronologies: the early-date reckoning for the patriarchs and the Exodus, Thiele for the kings, and [Bible Hub's timeline](https://biblehub.com/timeline/), which the maintainer has approved for this purpose. Any uncertain date is an **estimate** and must say so.
  - On the timeline, set `est:true` (renders an asterisk) and add a `note` giving the reason or assumption.
  - In a person's `dates` string, write "c. … BC* (estimate)".
  - State disputes rather than choosing silently (e.g. the Exodus c. 1446 vs c. 1250 BC).
  - Before Abraham, years are a straight count of Genesis 5 and 11. This assumes no gaps and that Terah was 130 at Abram's birth; both assumptions are stated in the timeline caption.
- **Extra-biblical history** (Roman emperors, governors, Persian/Babylonian/Assyrian reign dates, Josephus-derived events such as James the Just's martyrdom, the fall of Jerusalem in AD 70): general historical consensus, cited inline (e.g. "recorded by Josephus", "historical record").
- **Church tradition beyond the biblical text** (Joachim and Anne as Mary's parents, Luke/Mark's authorship, Peter and Paul's martyrdoms in Rome, John's exile date per Irenaeus): explicitly labelled "traditional" in the data (`dates`, `desc`, or `notconfused`). Never present tradition as if it were Scripture.
  - Many older OT `dates` strings also use "(traditional)" to mean a conventional date estimate; new entries should use "(estimate)" for that.
- **Thematic orientation**: [BibleProject](https://bibleproject.com) may be used to sanity-check how a figure or book is commonly understood. It is never the source of a fact, date or quote on the map.
- **Book-overview poster images** (the "Posters" feature — a header gallery button plus per-person "Poster: ..." buttons in the detail panel): BibleProject's downloadable book/testament-overview posters, **hotlinked directly from BibleProject's own CDN** (`d1bsmz3sdihplr.cloudfront.net`) — never downloaded, self-hosted, resized, recompressed, cropped, or reformatted, only CSS display-scaled. This is a separate sourced-content type from the thematic-framing bullet above: that one governs prose framing in `desc`/etc.; this one governs the `POSTERS`/`POSTER_BY_BOOK` table and `#posterModal` UI. Per BibleProject's Terms of Use (bibleproject.com/terms/), Posters have their own permission grant ("download, reproduce and display... digitally... unless and until we withdraw this permission") separate from their stricter Video/Audio rules — non-commercial use only, no modification of the image files, and the permission is **revocable at any time**. The feature is intentionally isolated to one data table (`POSTERS`/`POSTER_BY_BOOK` in `main.js`, defined right after `BOOK_CODES`/`bibleUrl()`) and one component (`#posterModal` in `index.html`, its CSS block in `main.css`) so it can be removed in a small diff if BibleProject ever withdraws permission. There is currently no poster for Hebrews in BibleProject's catalog — this is a known gap, not a bug.

If a new fact, date, or reference is added and its source doesn't fall into one of the above, ask the maintainer rather than guessing. `README.md` ("How anything beyond the text is marked") and `LICENSE` (content notice) state these same rules publicly; keep the three in step.

### Angels and the devil

Both testaments have an **Angels** group (`ring:"angel"`) and a **The devil** group (`ring:"devil"`, a near-black circle). The maintainer's rules:
- Link an angel to a person **only where the angel appeared to or dealt with that person**, quoting the NIV verse in the entry or the link note.
- A named angel gets its own circle (Gabriel, Michael, Abaddon/Apollyon). Angels named only outside the 66 books (e.g. Raphael, from Tobit) are not added.
- Unnamed angels are grouped by what Scripture calls them: "Angel of the Lord (unnamed)" in the NT; "The angel of the LORD" and "Angels of God (unnamed)" in the OT. An unnamed angel the text singles out by role (e.g. Revelation's angel with the little scroll) may get its own circle. Each grouped circle states that the text doesn't say whether these are the same angel.
- Satan's ties use the link kind `dev` and appear only where Scripture shows him dealing with a person. A tie the text only implies (e.g. the serpent and Eve) is drawn dotted with the reason in the note.
- God the Father and the Holy Spirit have no circles; they are described in Jesus' entry. Don't add them without asking — the maintainer will decide once the New Testament is complete.

## Attribution

The site credits both sources in the UI itself. A small line under the interaction hint (bottom-left of the graph, `.credits` in `index.html`) reads "Data drawn from Scripture and tradition · sources: Bible.com (give) · BibleProject.com (give)". It links to https://www.bible.com and https://bibleproject.com, and each "(give)" links to that organisation's giving page. It ends with "· built by Warren Coetzee", linking to the maintainer's site, https://wazzac.dev. Keep this in place; if the on-page wording changes, update it here too.

## Search engines

The site is public and open to crawlers. `index.html` carries the search metadata (`robots` index/follow, `description`, canonical URL `https://bible-people.wazzac.dev/`, Open Graph/Twitter tags and a schema.org `WebApplication` JSON-LD block); `robots.txt` and `sitemap.xml` sit at the repo root and `scripts/build.mjs` copies them into `dist/`. Keep the description and JSON-LD factual — they describe the map, not claims about Scripture. Update the sitemap's `<lastmod>` when a release changes the content.

NIV quotations fall under Biblica's NIV copyright. `README.md` and `LICENSE` carry Biblica's standard notice. Biblica's terms allow up to 500 verses to be quoted without separate permission, provided the notice is shown, so keep quotations short phrases rather than whole passages.

Poster images require their **own** per-display attribution beyond that footer line — BibleProject's terms require a notice "in close proximity to any digital displays" of a Poster. Every place a poster image is actually shown (`#posterView` inside `#posterModal`) renders a fixed "Poster © BibleProject" caption with a link, defined once in the `#posterView` markup in `index.html` so it can't be missed at a new call site. Gallery/detail-panel tiles that only show a text label (no image) don't need this caption, since no poster image is displayed there until opened.

## Architecture

No framework, no runtime dependencies — just plain files, plus a minify-only build step for deployment:
- `index.html` — markup only: header (testament, Network/Timeline and Default/Structured layout toggles), controls bar, SVG stage, detail panel, timeline SVG, poster modal. Links `main.css` and loads three plain `<script>` tags **in this order**: `data-nt.js`, `data-ot.js`, `main.js`. They share top-level `const`s through the normal global scope — no modules, no bundler. D3.js (cdnjs) and three Google Fonts (Cinzel, EB Garamond, JetBrains Mono) are pulled from CDN via `<script>`/`<link>` tags.
- `main.css` — all CSS, using custom properties in `:root` for the color palette: one CSS var per group (e.g. `--fam`, `--twelve`, `--patri`), plus a separate `--tie-*` palette for the kinds of tie (link colors are deliberately distinct from group colors).
- `data-nt.js` — the New Testament data, plus the link vocabulary both testaments use: `LG` (tie kinds → `--tie-*` colors), `UNSURE_RE` (the possible/disputed/traditional marker) and the `lk()` helper. That is why it must load before `data-ot.js`.
- `data-ot.js` — the Old Testament data (same shape, `OT_` prefix).
- `main.js` — the `DATASETS` registry and all logic (rendering, layouts, timeline, search, posters). No people data.

The data in each `data-*.js` file, in this order:
   - `NT_CAT` / `OT_CAT` — category definitions (`label`, `color` referencing a CSS var, optional `ring`). `ring:"angel"` / `ring:"devil"` draws an extra dashed outer ring styled by `.angel-ring` / `.devil-ring` in `main.css`.
   - `NT_PEOPLE` / `OT_PEOPLE` — array of person objects (the nodes). Schema below.
   - `NT_LINKS` / `OT_LINKS` — array of relationship edges via the `lk()` helper.
   - `NT_EVENTS` / `OT_EVENTS` — timeline milestone markers.
   - `NT_LIVES` / `OT_LIVES` — lifespan bars for the timeline view.
   - `NT_META` / `OT_META` — UI metadata:
     - titles and the tie `legend`;
     - force-layout centroids per category;
     - `hub`, the central figure (Jesus in the NT), who leads the Structured layout;
     - `defaultCats`, the groups switched on at page load (the rest are hidden until chosen from the Groups chips or the Main/All/None buttons);
     - "name clash" groupings (`clashNames`/`clashSub`);
     - timeline settings: `tlTitle`, `tlCaption`, `tlDomain`, `tlTicks`, `tlMinWidth`, `tlPack` (bars share rows, events in lanes) and the OT-only `tlStops`. With a multi-point `tlDomain`, `tlStops` draws each stretch at its own scale, and each scale change is marked on the chart.

And in `main.js`:
   - `DATASETS` — registry mapping `nt`/`ot` to the above six pieces; `TESTAMENT` selects the active one.
   - `linkDash()` — line style per tie: dashed for `spec`, dash-dot for `dev`, dotted when the note matches `UNSURE_RE`.
   - D3 force simulation, rendering, search, filters, timeline drawing, pan/zoom, tooltip and detail-panel logic.
   - Layouts: **Default** (clustered by group centroid) and **Structured** (left to right, earliest to latest; each person's time comes from `LIVES`, else their `dates` text, else inferred through family links). Dragging pins a node (`fx`/`fy`). Pins and the chosen layout are saved per testament in `localStorage` (`bible-people-map:{nt|ot}:pins:v1` and `:layout:v1`).
   - `POSTERS` / `POSTER_BY_BOOK` — BibleProject book-overview poster lookup table, defined near `BOOK_CODES`/`bibleUrl()` since both share the same book-name parsing (`refBookName()`). Testament-agnostic (one flat table, not `NT_`/`OT_` split) since book names are already globally unique.

The dataset **is** JavaScript source in `data-nt.js` and `data-ot.js` — edit those files directly. Don't invent a JSON/YAML layer, and don't split the data further, without discussing it with the maintainer first, since either would be a real architecture change.

`npm run build` (see `scripts/build.mjs`) uses esbuild to minify `main.css` and each of the three scripts on its own, and emits a `dist/` folder with a rewritten `index.html` pointing at `main.min.css`, `data-nt.min.js`, `data-ot.min.js` and `main.min.js`. This is a minifier only — no bundling, no transpilation, no framework. Minifying saves little here (the files are mostly prose); Cloudflare's compression does the real work. For local development, just open `index.html` directly; it loads the unminified files and needs no build step.

## Data schema

### Person object (`PEOPLE` array)
```js
{
  id:          "shortlowercaseid",   // unique per testament; used as the graph node key and in LINKS/LIVES
  name:        "Full Name",          // canonical display name
  short:       "Short Name",         // compact label used on the graph node
  cat:         "twelve",             // must be a key in the matching CAT object
  w:           12,                    // node "weight" (visual size): main characters large (12–16+), secondary figures small (3–6); Jesus is 30
  halo:        1,                     // optional — draws a gold ring (used sparingly for the most central figures)
  aliases:     "Other names · used elsewhere",   // optional, "·"-separated
  clash:       "James",               // optional — groups this person under a shared-name lens (see NT_META.clashNames)
  clashtag:    "One-line disambiguator shown in the clash comparison panel",
  dates:       "c. AD 1 – c. AD 62",  // hedge with "c."; mark estimates "*" + "(estimate)"; note disputes inline
  desc:        `Prose description, 2-4 sentences...`,   // template literal so it can safely contain apostrophes
  notconfused: `Who not to confuse this person with, and why.`,  // optional but strongly encouraged wherever a name is shared
  refs:        ["Matthew 1-2","Luke 2"]  // book-chapter (or verse) references to the NIV passages actually read
}
```

### Link object (`LINKS` array, built via `lk(source, target, kind, type, note)`)
- `source` / `target` — must match a `PEOPLE` id in the same testament.
- `kind` — one of the keys in `LG`:
  - `fam` — bloodline or marriage;
  - `disc` — discipleship or mentorship (also used for dotted "the same man?" identity links);
  - `min` — ministry, fellowship or alliance;
  - `conf` — conflict or betrayal;
  - `spec` — calling, prophecy, succession or anointing; renders dashed;
  - `rule` — ruling authority;
  - `dev` — "The devil's dealings"; renders dash-dot; Satan's ties only, each quoting the NIV verse.

  It controls the link's color from the `--tie-*` palette. The validator rejects any other kind.
- `type` — short relationship label, e.g. `"married"`, `"father of"`, `"betrayed"`. Use only what the text states.
- `note` — optional context string, `""` if none; usually the verse reference. If the note matches `UNSURE_RE` (`possibl|disput|traditio`), the link renders dotted. Such a note must say why the tie is uncertain.

### Event object (`EVENTS` array)
`{ y: <year, negative = BC>, label: "...", note: "optional caveat", est: true }` — shown on the timeline axis. `est:true` marks the year as an estimate (asterisk).

### Life object (`LIVES` array)
`{ id, s: <start year>, e: <end year>, tenure: true, lab: "reigned"/"active"/etc, uS: true, uE: true, est: true, note: "..." }` — draws a bar on the timeline.
- `uS`/`uE` mark an uncertain start/end (rendered dashed).
- `est:true` adds an asterisk.
- `note` is the caveat shown on hover (e.g. "his own years are not given").
- `id` must exist in `PEOPLE`.

## Conventions when adding or editing content

1. Every new person needs a unique `id`, a `cat` that exists in the matching `CAT` object, and at least one `refs` entry (or an explicit "Not named in the NT/OT" note if extra-biblical).
2. If a name is shared by multiple figures already in the dataset (or the new person introduces a clash), add `clash`/`clashtag` on all of them and consider adding the name to `META.clashNames` + `META.clashSub`.
3. Add `notconfused` whenever a reasonable reader could mix this person up with another entry — this is a core feature of the project (disambiguating the many Johns, Marys, Jameses, Simons, kings, etc.), not an afterthought.
4. Every `LINKS` entry needs both endpoints already present in `PEOPLE`. Every `LIVES` entry needs its `id` present in `PEOPLE`. Don't add a second link of the same kind between the same two people — extend the existing link's label or note instead.
5. Keep the tone consistent with existing entries: measured, encyclopedic, NIV-sourced, explicit about tradition vs. Scripture vs. secular history. Quotes are the NIV's exact words; anything not in the text is labelled with its reason (see *Source of truth*), and silence is stated rather than filled.
6. Categories have a fixed color and a centroid position in `META.centroids` (as `[x, y]` fractions of the stage). Don't add a new category without also adding its CSS color variable, a `CAT` entry, a centroid, and a legend row — and decide whether it belongs in `META.defaultCats` (primary groups only).
7. Run the validator (see below) after any data edit, before committing.

## Workflows

Two step-by-step workflows live as plain Markdown under `.claude/skills/`. Despite the folder name, they are ordinary instructions any agent can read and follow:
- `.claude/skills/bible-data-entry/SKILL.md` — adding or editing a person, relationship, event or lifespan, and mapping a whole Bible book.
- `.claude/skills/bible-data-qa/SKILL.md` — the QA pass after any data edit: the validator plus the manual "nothing is made up" checks it can't do.

### Mapping a whole book

The dataset is built one Bible book (or group of books) at a time. The Old Testament is complete; the New Testament has the Gospels, Acts, Paul's letters and Revelation, with Hebrews to Jude still to do. For each book:
1. Fetch the NIV introduction (`{BOOK}.INTRO1`) and every chapter from bible.com, and check every verse is present against the NIV's verse counts. Verses the NIV omits (and notes in a footnote, e.g. Romans 16:24) are expected gaps.
2. Read the text, sweep it for every personal name, and read each name's passages in full — not just the verse with the name in it.
3. Add new people and links; extend existing entries with what the new book says (append to `desc`, add `refs`), rather than duplicating them.
4. Run the validator, check for duplicate links, check the result in a browser, and update `CHANGELOG.md`.

## Verification

Open `index.html` directly in a browser (or serve the folder) to check changes visually — no build step needed for local viewing. There's also a referential-integrity validator:

```
node scripts/validate-data.mjs
```

It evaluates `data-nt.js` then `data-ot.js` (the same order as `index.html`). Run it after editing data and before committing (CI runs it too, with the build, on every push and PR to `main` — `.github/workflows/ci.yml`).
- **Errors:** duplicate ids; missing `name`/`short`; unknown categories; unknown tie kinds (not in `LG`); dangling link references; `LIVES` entries with no matching person.
- **Warnings:** missing `w` or `refs`; `clash` without `clashtag` (or the reverse); `clashNames` entries that nobody uses.

It cannot check sourcing — that is a read-the-NIV step. Also run `node --check data-nt.js` (or `data-ot.js`) after large scripted edits.

To sanity-check the production build locally: `npm install` (once), then `npm run build`, then serve the `dist/` folder as its own web root — `dist/index.html` references `main.min.css` and the three `*.min.js` files as siblings, so it must be served from `dist/`, not from the repo root.

## Deployment

Cloudflare Pages. Build command: `npm run build`. Build output directory: `dist`. Pushing to `main` on GitHub deploys automatically — Cloudflare runs the esbuild minify step itself; there is nothing to build or commit locally.

## Working with the maintainer

- **Don't commit or push unless asked.** When asked, commit to `main` with a title in the form `main: <summary>` and a body of no more than three sentences.
- **Don't create release tags** — the maintainer tags releases. When preparing a release, date the `CHANGELOG.md` section (`## [x.y.z-beta] - YYYY-MM-DD`) and set the same version in `package.json` and `package-lock.json`.
- Record notable changes in `CHANGELOG.md` (Keep a Changelog format) as you go.
- When a fact's source is unclear, or a choice would change the architecture, ask rather than guess.

## Non-goals / things not to do without asking

- Don't introduce a JS framework, bundler, transpiler, or any build step beyond the existing esbuild minify pass (`scripts/build.mjs`) — this project is deliberately dependency-light, and the minify step exists only to shrink `main.css` and the three scripts for production, not to compile or bundle anything.
- Don't switch translations away from NIV for quotes/references.
- Don't assert disputed dates or traditions as settled fact.
- Don't make anything up — no invented relationships, dates, motives or details to fill a gap in the text.
