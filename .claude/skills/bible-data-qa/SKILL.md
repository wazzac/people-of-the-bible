---
name: bible-data-qa
description: Use after any edit to the Bible dataset in data-nt.js / data-ot.js (adding/removing a person, link, event, or lifespan), or when asked to check the data for consistency or sourcing. Runs the referential-integrity validator, explains how to interpret and fix its output, and lists the manual "nothing is made up" checks the script can't do.
---

# Bible data QA

The dataset in `data-nt.js` and `data-ot.js` is hand-edited, so it gets two kinds of check:
- **Structure:** the validator below. CI (`.github/workflows/ci.yml`) also runs it, together with `npm run build`, on every push and PR to `main`.
- **Sourcing:** the manual checks further down. The script can't do those.

## Run the validator

```
node scripts/validate-data.mjs
```

It evaluates `data-nt.js` and then `data-ot.js` (the same order `index.html` loads them) in an isolated context.

**Errors** (these must be fixed):
- duplicate person `id`s;
- people missing `name` or `short`;
- unknown `cat` (not in that testament's `CAT` object);
- unknown link `kind` (not a key of `LG` in `data-nt.js`);
- `LINKS` entries whose `source`/`target` doesn't exist in that testament;
- `LIVES` entries whose `id` doesn't exist.

**Warnings** (review each one):
- missing numeric `w`;
- missing `refs` (fine only when the person genuinely isn't named in the text);
- `clash` without `clashtag`, or the reverse;
- `META.clashNames` entries that no person uses.

## When it fails

Each reported line names the testament (`nt`/`ot`), the offending id and the problem. Fix the data in `data-nt.js` or `data-ot.js` directly, then re-run.

If the script itself errors with "Failed to evaluate", a data file has a syntax error, or one was renamed or split. Fix the file, or update `DATA_FILES` near the top of `scripts/validate-data.mjs`, rather than ignoring the failure. If it reports "dataset did not evaluate", the `NT_`/`OT_` variable names no longer match.

Also run `node --check data-nt.js` (or `data-ot.js`) after large scripted edits; it catches a broken template literal or bracket quickly.

## Manual checks the script can't do

The validator checks structure, not truth. Before reporting a data change as done, confirm:

1. **Nothing is made up.** Every new or changed fact, name and relationship appears in NIV text actually read on bible.com. Quotes match the NIV's exact wording, and nothing comes from memory or another translation.
2. **Silence is stated.** Where the text doesn't say something, the entry says so rather than filling the gap. Relationship labels claim no more than the text does.
3. **Uncertain ties are marked.** Any implied-but-unstated link has a note containing "possibly", "disputed" or "traditional", with the reason, so it renders dotted.
4. **Dates are honest.**
   - Scripture's own figures are given where it has them.
   - Calendar years are hedged with "c.".
   - Estimates carry `*` / "(estimate)" in `dates` and `est:true` (plus a `note` with the reason) on `LIVES`/`EVENTS`.
   - Disputes are named.
   - A person's `dates` text agrees with their timeline bar.
5. **Non-Scripture is labelled.** Tradition is marked "traditional". Extra-biblical history names its source ("recorded by Josephus", "historical record").
6. **`refs` are right.** The references point to the chapters or verses the facts came from. Each "Where to read" link opens the right NIV passage on bible.com.
7. **Disambiguation holds up.** Shared names have `clash`/`clashtag` on every bearer, and `notconfused` wherever a mix-up is plausible.
8. **Sizes fit the rule.** Main characters are large (`w` about 12–16) and secondary figures small (about 3–6).
9. **It looks right.** Open `index.html` in a browser (no build step needed) and check:
   - the affected nodes, their detail panels, links and clash panel;
   - the Timeline view, if `LIVES`/`EVENTS` changed;
   - that the console shows no errors.

If you touched `main.css`, `main.js` or `index.html`, also confirm `npm run build` still succeeds.

## Workflow

1. Make the data edit (see the `bible-data-entry` skill).
2. Run `node scripts/validate-data.mjs`. Fix any errors and review the warnings.
3. Run through the manual checks above.
4. Visually spot-check in a browser.
5. Report what changed and its NIV sources to the user. Commit only when the user asks.
