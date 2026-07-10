# Contributing to People of the Bible

Thanks for considering a contribution. This is a small, hand-curated dataset
project — the biggest thing that keeps it trustworthy is that every fact is
sourced. Please read the sourcing rules below before opening a PR that touches
data.

## The one rule that matters most

**Nothing is made up.** Every person, relationship, date, and description
must trace back to one of these, per [`CLAUDE.md`](./CLAUDE.md):

- **Scripture text and verse references** — [Bible.com](https://www.bible.com),
  **NIV translation only**. Verify any quote or reference against the NIV
  before adding it (e.g. `https://www.bible.com/bible/111/GEN.INTRO1.NIV` —
  bible ID `111` is NIV). Don't mix in KJV, ESV, or other translations.
- **Extra-biblical history** (Roman emperors, governors, Josephus-recorded
  events, etc.) — general historical consensus, cited inline (e.g. "recorded
  by Josephus").
- **Church tradition** beyond the biblical text (e.g. Mary's parents Joachim
  and Anne, traditional authorship, traditional martyrdoms) — must be
  explicitly labelled "traditional" in the data. Never presented as Scripture.
- **Thematic/historical framing** — [BibleProject](https://bibleproject.com)
  is acceptable for sanity-checking how a figure or book is commonly
  understood, but not as a source for verse text itself.
- **Dates** are scholarly estimates and often disputed. Hedge with "c." and
  note disputes rather than asserting false precision.

If a fact, date, or reference doesn't clearly fall into one of the above,
**open an issue and ask** rather than guessing or inferring. PRs that
introduce unsourced claims, or that quote a translation other than NIV, will
be asked to revise before merge.

## What you can contribute

- New people, relationships, timeline events, or lifespans (Old Testament or
  New Testament dataset).
- Corrections to existing entries — wrong references, missing
  disambiguation, imprecise dates.
- Bug fixes and UI/UX improvements to the graph, timeline, search, or filters.
- Documentation improvements.

If you're adding a new relationship-kind category, a new UI feature, or
anything that changes the project's architecture (see the **Non-goals**
section of `CLAUDE.md`), please open an issue to discuss first — some things
(build step, framework choice, translation) are deliberately fixed.

## Project structure

This is a static site — no framework, no bundler. The only build step is a
minify pass used for deployment. See the **Architecture** section of
[`CLAUDE.md`](./CLAUDE.md) for the full breakdown:

- `index.html` — markup only.
- `main.css` — all styles.
- `main.js` — all data (`NT_PEOPLE`, `OT_PEOPLE`, etc.) and all logic.
- `scripts/validate-data.mjs` — referential-integrity check for the dataset.
- `scripts/build.mjs` — minifies `main.css`/`main.js` into `dist/` (this is
  what Cloudflare Pages runs on deploy; you don't need to run it yourself
  unless you want to sanity-check the production build).

## Adding or editing a person, relationship, event, or lifespan

Follow the data schema and conventions in [`CLAUDE.md`](./CLAUDE.md). If
you're using Claude Code, the repo includes two skills that walk through this
step by step:

- `.claude/skills/bible-data-entry/SKILL.md` — adding a new person or
  relationship.
- `.claude/skills/bible-data-qa/SKILL.md` — the QA pass after any data edit.

The short version:

1. Confirm the person/relationship is named or clearly identifiable in
   Scripture, or is well-established extra-biblical history/tradition.
2. Look up references on Bible.com, NIV translation.
3. Follow the existing object shape in `main.js` (see `CLAUDE.md` → *Data
   schema*) — `id`, `name`, `short`, `cat`, `w`, `dates`, `desc`, `refs`, and
   `notconfused`/`clash`/`clashtag` wherever a name is shared with an
   existing entry.
4. Run the validator:
   ```
   node scripts/validate-data.mjs
   ```
5. Open `index.html` in a browser and spot-check the new/changed node,
   its detail panel, and any new links.

## Local development

No install required to view or edit the site:

```
npx serve .
```

or just open `index.html` directly in a browser.

To check the minified production build:

```
npm install
npm run build
npx serve dist
```

## Submitting a pull request

1. Fork the repo and create a branch for your change.
2. Make your change, following the conventions above.
3. Run `node scripts/validate-data.mjs` if you touched data, and confirm
   `npm run build` still succeeds if you touched `main.css`/`main.js`.
4. Open a PR describing **what** changed and **why**, and note the source
   for any new fact, date, or reference (a Bible.com NIV link, a named
   historical source, or "traditional" with the tradition named).
5. Be responsive to review — sourcing questions are the most common reason
   a PR needs another pass.

By contributing, you agree your contributions will be licensed under this
project's [MIT license](./LICENSE).

## Code of Conduct

This project follows the [Contributor Covenant](./CODE_OF_CONDUCT.md).
Please read it before participating.
