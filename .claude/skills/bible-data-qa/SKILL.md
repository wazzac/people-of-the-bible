---
name: bible-data-qa
description: Use after any edit to the Bible dataset in index.html (adding/removing a person, link, event, or lifespan), or when asked to check the data for consistency. Runs the referential-integrity validator and explains how to interpret and fix its output.
---

# Bible data QA

This project has no automated test suite (it's a zero-build static file), but it does have a small integrity check for the hand-edited dataset embedded in `index.html`.

## Run the validator

```
node scripts/validate-data.mjs
```

It extracts the `NT_*`/`OT_*` data block from `index.html`, evaluates it in an isolated context, and checks:

- Every person has a unique `id`, a `name`, a `short` label, and a `cat` that exists in that testament's category object.
- Every `LINKS` entry's `source`/`target` refers to a person that actually exists in that testament.
- Every `LIVES` entry's `id` refers to a person that actually exists.
- `clash`/`clashtag` are present together, not just one of the pair.
- `META.clashNames` entries actually correspond to at least one person tagged with that `clash` value.

It also warns (non-fatal) on people missing a `w` (node weight) or `refs`.

## When it fails

Read each reported line — it names the testament (`nt`/`ot`), the offending id, and the specific problem (duplicate id, unknown category, dangling link reference, etc.). Fix the data in `index.html` directly, then re-run.

If the script itself errors with "Could not locate the data block" or "Failed to evaluate," the data section of `index.html` was likely restructured (renamed variables, moved markers) — update the `startMarker`/`endMarker` constants near the top of `scripts/validate-data.mjs` to match, rather than ignoring the failure.

## Manual checks the script can't do

The validator only checks structure, not content accuracy. Before committing a data change, also:

1. Confirm any new/changed `refs` are correct NIV references (bible.com, translation NIV — see `CLAUDE.md`).
2. Confirm `dates` are hedged appropriately ("c.", disputes noted) rather than stated as bare fact.
3. Confirm anything sourced from tradition (not Scripture) is labelled as such in `desc`/`dates`/`notconfused`.
4. Open `index.html` in a browser and click through the affected node(s) to confirm the detail panel, links, and (if applicable) clash comparison panel render as expected.

## Workflow

1. Make the data edit (see the `bible-data-entry` skill for the add-a-person workflow).
2. `node scripts/validate-data.mjs` — fix any errors, review warnings.
3. Visual spot-check in a browser.
4. Commit.
