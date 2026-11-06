# Contributing to People of the Bible

Thanks for considering a contribution. This is a small, hand-curated dataset
project — the biggest thing that keeps it trustworthy is that every fact is
sourced. Please read the sourcing rules below before opening a PR that touches
data.

## The one rule that matters most

**Nothing is made up. The Bible, in the NIV on [Bible.com](https://www.bible.com), is the source of truth.**

Every person, relationship, description and quotation must come from the NIV
text itself. Read the passage before adding anything from it, and quote the
NIV's exact wording. For example, `https://www.bible.com/bible/111/GEN.1.NIV`
(bible ID `111` is NIV). Don't mix in KJV, ESV or other translations. If the
Bible is silent or unclear on something, the entry says so. It is never filled
with a guess.

A small amount of information can't come straight from the text. It is allowed
only in the categories below, and it **must be marked where it appears, with the
reason for it**. See [`AGENTS.md`](./AGENTS.md) → *Source of truth* for the full
rules.

- **Ties the text implies but doesn't state.** Leave them out, or add them with a
  note giving the reason. For example: "possibly King Hezekiah; the text does
  not say". Notes containing "possibly", "disputed" or "traditional" are drawn
  as dotted links.
- **Dates.** Scripture gives ages and lengths of reigns, not BC/AD years.
  - Use Scripture's own figures first, then place them with standard
    chronologies: the early-date reckoning for the patriarchs and the Exodus,
    Thiele for the kings, and [Bible Hub's timeline](https://biblehub.com/timeline/).
  - Mark every uncertain date as an **estimate**: an asterisk on the timeline
    (`est:true`), and "c. … BC* (estimate)" in a person's `dates`.
  - State the assumption or dispute rather than asserting false precision.
- **Extra-biblical history.** Roman, Persian, Babylonian and Assyrian rulers,
  and Josephus-recorded events, follow general historical consensus. Cite them
  inline, e.g. "recorded by Josephus" or "historical record".
- **Church tradition** beyond the biblical text must be labelled "traditional".
  Examples: Mary's parents Joachim and Anne, traditional authorship,
  traditional martyrdoms. It is never presented as Scripture.
- **[BibleProject](https://bibleproject.com)** may be used to sanity-check how a
  figure or book is commonly understood. It is never the source of a fact, date
  or quote.

If a fact, date or reference doesn't clearly fall into one of the above,
**open an issue and ask** rather than guessing or inferring. PRs that introduce
unsourced or unmarked claims, or that quote a translation other than the NIV,
will be asked to revise before merge.

Keep NIV quotations to short phrases. They are covered by Biblica's NIV
copyright (see [`NOTICE.md`](./NOTICE.md)), not by this project's MIT license.

## What you can contribute

- New people, relationships, timeline events, or lifespans (Old Testament or
  New Testament dataset).
- Corrections to existing entries — wrong references, missing
  disambiguation, imprecise dates.
- Bug fixes and UI/UX improvements to the graph, timeline, search, or filters.
- Documentation improvements.

If you're adding a new relationship-kind category, a new UI feature, or
anything that changes the project's architecture (see the **Non-goals**
section of `AGENTS.md`), please open an issue to discuss first — some things
(build step, framework choice, translation) are deliberately fixed.

## Project structure

This is a static site — no framework, no bundler. The only build step is a
minify pass used for deployment. See the **Architecture** section of
[`AGENTS.md`](./AGENTS.md) for the full breakdown:

- `index.html` — markup only.
- `main.css` — all styles.
- `data-nt.js` — the New Testament data (`NT_PEOPLE`, `NT_LINKS`, etc.), plus
  the link helpers both datasets use (`lk()`, `LG`, `UNSURE_RE`).
- `data-ot.js` — the Old Testament data (`OT_PEOPLE`, `OT_LINKS`, etc.).
- `main.js` — all app logic (rendering, layouts, timeline, search, posters).
- `scripts/validate-data.mjs` — referential-integrity check for the dataset.
- `scripts/build.mjs` — minifies `main.css` and the three scripts into `dist/` (this is
  what Cloudflare Pages runs on deploy; you don't need to run it yourself
  unless you want to sanity-check the production build).

## Adding or editing a person, relationship, event, or lifespan

Follow the data schema and conventions in [`AGENTS.md`](./AGENTS.md). If
you're using Claude Code, the repo includes two skills that walk through this
step by step:

- `.claude/skills/bible-data-entry/SKILL.md` — adding a new person or
  relationship.
- `.claude/skills/bible-data-qa/SKILL.md` — the QA pass after any data edit.

The short version:

1. Read the passage in the NIV on Bible.com. Confirm the person or
   relationship is named or clearly stated there. If it is extra-biblical
   history or tradition, label it as such.
2. Use the NIV's exact wording for any quote, and keep `refs` to the chapters
   or verses you actually read.
3. Follow the existing object shape in `data-nt.js` / `data-ot.js` (see `AGENTS.md` → *Data
   schema*) — `id`, `name`, `short`, `cat`, `w`, `dates`, `desc`, `refs`, and
   `notconfused`/`clash`/`clashtag` wherever a name is shared with an
   existing entry. Main characters get a large `w` (about 12–16) and
   secondary figures a small one (about 3–6).
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
   `npm run build` still succeeds if you touched `main.css`, `main.js` or
   `index.html`.
4. Open a PR describing **what** changed and **why**, and note the source
   for any new fact, date or reference. That is a Bible.com NIV link by
   default; otherwise a named historical source, "traditional" with the
   tradition named, or an estimate with its reason.
5. Be responsive to review — sourcing questions are the most common reason
   a PR needs another pass.

By contributing, you agree your contributions will be licensed under this
project's [MIT license](./LICENSE).

## Code of Conduct

This project follows the [Contributor Covenant](./CODE_OF_CONDUCT.md).
Please read it before participating.
