---
name: bible-data-entry
description: Use when adding, editing, or removing a person, relationship, timeline event, or lifespan in this project's Bible dataset (the NT_PEOPLE/OT_PEOPLE etc. arrays embedded in main.js). Covers sourcing from bible.com NIV, following the existing schema, and keeping the "name clash" and "not to be confused with" disambiguation features consistent.
---

# Bible data entry

This project's entire dataset lives inside `main.js` as plain JS arrays (`NT_PEOPLE`, `NT_LINKS`, `NT_EVENTS`, `NT_LIVES`, `NT_META` for the New Testament; `OT_*` for the Old Testament). There is no database and no separate data file. Read `CLAUDE.md` at the repo root first for the full schema reference — this skill is the step-by-step workflow for using it.

## Before adding a person

1. Confirm the person is named (or clearly identifiable) in Scripture, or is a well-established piece of extra-biblical history/tradition relevant to the story (e.g. a Roman emperor, Josephus-recorded event, or a figure from the Protoevangelium of James). If unsure whether someone belongs, ask the user.
2. Look up the relevant passages on bible.com using the **NIV** translation (bible ID `111`, e.g. `https://www.bible.com/bible/111/GEN.INTRO1.NIV`). Use NIV wording/references only — don't mix in KJV, ESV, etc.
3. Decide which testament dataset (`NT_*` or `OT_*`) and which category (`cat`) the person belongs to. Categories are fixed per testament — check `NT_CAT`/`OT_CAT` in main.js rather than inventing a new one. If a genuinely new category is needed, that also requires a new CSS color variable (in `main.css`), a `META.centroids` entry, and a legend row — flag this to the user rather than doing it silently.
4. Check whether the person's name is already used by someone else in the dataset (e.g. another Mary, James, Simon, Joram). This project treats disambiguation as a core feature, not a footnote.

## Adding the person

Append an object to the appropriate `PEOPLE` array, following this shape (see `CLAUDE.md` for full field docs):

```js
{id:"newid", name:"Full Name", short:"Short Name", cat:"twelve", w:9,
 aliases:"optional · alt names",
 clash:"SharedName", clashtag:"one-line disambiguator",
 dates:"c. AD 1 – c. AD 62",
 desc:`Two to four sentences, encyclopedic tone, template-literal so apostrophes are safe.`,
 notconfused:`Who this could be mistaken for, and why it isn't them.`,
 refs:["Book Chapter","Book Chapter:Verse-Verse"]},
```

Rules:
- `id` must be unique within that testament's `PEOPLE` array — grep the file first.
- `w` (visual weight) should roughly match how central the figure is to the narrative — compare to similar existing entries (7-9 for minor figures, 10-14 for significant ones, 15+ reserved for the most central handful).
- If this person shares a name with someone already in the dataset, add matching `clash`/`clashtag` fields to *all* of them, and add the shared name (plus a one-line `clashSub` entry) to that testament's `META.clashNames`/`META.clashSub` if it isn't already there.
- Add `notconfused` any time a reasonable reader could mix this person up with another entry in the dataset.
- Every fact in `desc` should be traceable to either Scripture (cite via `refs`), a named historical source ("recorded by Josephus"), or clearly flagged as tradition ("by tradition...", "(traditional)").

## Adding relationships

Use the `lk()` helper in the matching `LINKS` array:

```js
lk("source_id", "target_id", "kind", "relationship label", "optional note"),
```

`kind` must be one of the `LG` keys: `fam` (bloodline/marriage), `disc` (discipleship/mentorship), `min` (ministry/fellowship/alliance), `conf` (conflict/betrayal), `spec` (calling/succession/anointing), `rule` (ruling authority). Both `source_id` and `target_id` must already exist in that testament's `PEOPLE` array — add the person first.

## Adding timeline entries (optional)

- `EVENTS`: `{y: <year, negative = BC>, label:"...", note:"caveat if disputed"}`.
- `LIVES`: `{id:"existing_person_id", s:<start year>, e:<end year>, tenure:true, lab:"reigned"/"active"/etc, uS:true, uE:true}`. Only add this if the person's dates are worth showing on the timeline bar chart (rulers, prophets, central figures) — not every person needs a `LIVES` entry.

## After editing

1. Run the QA validator: `node scripts/validate-data.mjs` (see the `bible-data-qa` skill). Fix any reported issues before proceeding.
2. Open `index.html` in a browser (it loads `main.css`/`main.js` alongside it — no build step needed for local viewing) and spot-check: the new node appears in the right category cluster, its detail panel renders correctly, and any new links/clash grouping show up as expected.
3. Summarize what was added/changed and which sources were used (bible.com NIV references, and any historical/traditional sources) when reporting back to the user.
