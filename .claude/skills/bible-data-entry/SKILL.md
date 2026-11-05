---
name: bible-data-entry
description: Use when adding, editing, or removing a person, relationship, timeline event, or lifespan in this project's Bible dataset (the NT_PEOPLE/OT_PEOPLE etc. arrays in data-nt.js and data-ot.js), or when mapping the people of a whole Bible book. Covers reading the NIV on bible.com, the "nothing is made up" rule, following the existing schema, marking estimates and uncertain ties, and keeping the "name clash" and "not to be confused with" disambiguation features consistent.
---

# Bible data entry

This project's entire dataset lives in two plain JS files:
- `data-nt.js`: `NT_CAT`, `NT_PEOPLE`, `NT_LINKS`, `NT_EVENTS`, `NT_LIVES`, `NT_META` for the New Testament, plus the shared link vocabulary (`LG`, `UNSURE_RE`, `lk()`);
- `data-ot.js`: the `OT_*` equivalents for the Old Testament.

`main.js` holds only the app code; don't put data there.

There is no database and no separate data file. Read `CLAUDE.md` at the repo root first for the full schema and the *Source of truth* rules. This skill is the step-by-step workflow for using them.

## The rule

**Nothing is made up. The Bible, in the NIV on bible.com, is the source of truth.**

- Every person, relationship, description and quotation must come from NIV text you have actually read in this session.
- Quote the NIV's exact wording; never paraphrase from memory or another translation.
- Where the text is silent or ambiguous, say so in the entry instead of filling the gap. For example:
  - Genesis 24's servant is never named;
  - Hosea 1 does not say that Lo-Ruhamah and Lo-Ammi were Hosea's children.
- Anything not stated in the text is allowed only as one of the labelled exceptions in `CLAUDE.md`, and must be marked where it appears with its reason:
  - an uncertain tie;
  - an estimated date;
  - extra-biblical history;
  - church tradition.
- If a fact doesn't fit any of those categories, ask the user.
- When you correct an existing entry that turns out not to match the NIV, tell the user what changed.

## Reading the NIV on bible.com

Chapter pages are `https://www.bible.com/bible/111/{BOOK}.{CH}.NIV` (bible ID `111` is NIV). For example `GEN.1`, `1SA.17` or `JHN.3`. A book introduction is `{BOOK}.INTRO1`, but it is introductory material, not Scripture.

The pages fetch fine with plain `fetch`/curl and a browser User-Agent, so no browser is needed. To extract verse-numbered text:
- **Match class names by suffix.** They carry a hashed prefix (e.g. `xyz_verse`).
- **Chapter root:** `<div class="…_chapter" data-usfm="GEN.1">`. Start parsing at the `<` before it.
- **Verses:** `<span class="…_verse" data-usfm="GEN.1.5">` containing `…_content` spans. One verse can be split across several spans or paragraphs, so merge them by verse number.
- **Skip** `…_note` (footnotes) and `…_label` (verse numbers). `…_heading` spans are section headings.
- **Check completeness.** Compare each chapter's last verse number with the book's known verse counts before relying on the text.
- **Footnotes** (e.g. "Or *ancestor*", "Also called Jehoahaz") can be read separately and used as attributed caveats.

Write any helper scripts to the session scratchpad, not the repo, and don't leave log files in the repo.

## Mapping a whole book

1. Fetch and read **every chapter** first, then dump a combined `ch:v` text file and read it in full.
2. List the people:
   - Read all narrative, genealogies and titles (Psalm titles name people too).
   - Then sweep for capitalised words never used in lowercase, so no name is missed.
   - Leave out angels and spiritual beings unless the user decides otherwise.
3. For each person, check whether they already exist, perhaps from an earlier book (grep the id and the name).
   - **If they exist**, extend their `desc`, `refs`, `aliases` and `notconfused` rather than duplicating them.
   - **If not**, add them.
4. Size by importance. Main characters get a large `w` (about 12–16; `halo` for only the most central few). Secondary figures get a small one (about 3–6). Names known only from family lists go in a genealogy group, or are listed in a parent's `desc`.
5. If the book cites a verse in another book, fetch that passage and check it too.

## Before adding a person

1. Confirm the person is named, or clearly identifiable, in the NIV text you read. A well-established extra-biblical figure is allowed only if relevant to the story and labelled as such, for example:
   - a Roman emperor;
   - an event recorded by Josephus;
   - a tradition such as Joachim and Anne.

   If unsure whether someone belongs, ask the user.
2. Decide which testament dataset (`NT_*` or `OT_*`) and which category (`cat`) the person belongs to. Check `NT_CAT` in `data-nt.js` or `OT_CAT` in `data-ot.js`. New groups and colors are acceptable to the user, but a new category also needs:
   - a CSS color variable in `main.css`;
   - a `CAT` entry;
   - a `META.centroids` entry;
   - a decision on whether it belongs in `META.defaultCats` (primary groups only).

   Mention it in your report.
3. Check whether the person's name is already used by someone else, e.g. another Mary, James, Joash or Zechariah. Disambiguation is a core feature of this project.

## Adding the person

Append an object to the appropriate `PEOPLE` array (see `CLAUDE.md` for full field docs):

```js
{id:"newid", name:"Full Name", short:"Short Name", cat:"king", w:5,
 aliases:"optional · alt names",
 clash:"SharedName", clashtag:"one-line disambiguator",
 dates:"reigned 16 years, c. 735 – 715 BC (Judah) — dates disputed",
 desc:`Two to four sentences, encyclopedic tone, template-literal so apostrophes are safe. Quotes in the NIV's exact words.`,
 notconfused:`Who this could be mistaken for, and why it isn't them.`,
 refs:["2 Kings 16","Isaiah 7:1-12"]},
```

Rules:
- `id` must be unique within that testament's `PEOPLE` array. Grep the file first.
- `w` follows the sizing rule above (main 12–16, secondary 3–6).
- **`dates`:**
  - Give Scripture's own figures where it has them, e.g. "lived 175 years (Genesis 25:7)" or "reigned 29 years".
  - Hedge calendar years with "c.".
  - Mark an uncertain year as an estimate: "c. 2166 – 1991 BC* (estimate)".
  - Name disputes rather than picking a side silently.
  - Undated people say so, e.g. "undated — the book gives no date".
- If this person shares a name with someone already in the dataset, add matching `clash`/`clashtag` fields to *all* of them. Add the shared name, with a one-line `clashSub` entry, to that testament's `META.clashNames`/`META.clashSub` if it isn't there already.
- Add `notconfused` whenever a reasonable reader could mix this person up with another entry.
- Every fact in `desc` must trace to one of:
  - Scripture (cited in `refs`);
  - a named historical source ("recorded by Josephus", "historical record");
  - clearly flagged tradition ("by tradition…", "(traditional)").

## Adding relationships

Use the `lk()` helper in the matching `LINKS` array:

```js
lk("source_id", "target_id", "kind", "relationship label", "note"),
```

- `kind` must be one of the `LG` keys:
  - `fam`: bloodline or marriage;
  - `disc`: discipleship or mentorship;
  - `min`: ministry, fellowship or alliance;
  - `conf`: conflict or betrayal;
  - `spec`: calling, succession or anointing; renders dashed;
  - `rule`: ruling authority;
  - `dev`: the devil's dealings with a person; renders dash-dot. Use it only for Satan's ties.
- Both endpoints must already exist in that testament's `PEOPLE` array, so add the person first.
- The label says only what the text states. Write "named", not "father of", when the text doesn't say whose child it is.
- The note usually carries the verse reference. If the tie is implied but not stated, include "possibly", "disputed" or "traditional" in the note, with the reason, e.g. "possibly King Hezekiah; the text does not say". That wording matches `UNSURE_RE` and draws the link dotted. If there is no textual basis at all, leave the link out.

### Angels and the devil

Both testaments have an `angels` group and a `devil` group (`ring:"angel"` / `ring:"devil"` in `CAT`). The user's rules for them:
- Draw a line from an angel to a person **only where the angel appeared to or dealt with that person**, and quote the NIV verse in the entry or note.
- A named angel gets its own circle: Gabriel, Michael, Abaddon/Apollyon. Don't add angels named only outside the 66 books (e.g. Raphael, from Tobit).
- Unnamed angels are grouped by what Scripture calls them: "Angel of the Lord (unnamed)" in the NT; "The angel of the LORD" and "Angels of God (unnamed)" in the OT. An unnamed angel the text singles out by role (e.g. Revelation's angel with the little scroll) may get its own circle. Each grouped circle must say the text doesn't tell whether these are the same angel.
- Satan's ties use kind `dev`, and only where Scripture shows him dealing with a person. A tie the text only implies (e.g. the serpent and Eve) is drawn dotted, with the reason in the note.

## Adding timeline entries (optional)

- **`EVENTS`:** `{y:<year, negative = BC>, label:"...", note:"verse or caveat", est:true}`.
  - Use `est:true` when the year is an estimate; it renders an asterisk.
  - Put the anchoring verse in `note` where Scripture gives one, e.g. "Josiah's 18th year (2 Kings 22:3)".
- **`LIVES`:** `{id:"existing_person_id", s:<start year>, e:<end year>, tenure:true, lab:"reigned"/"active"/etc, uS:true, uE:true, est:true, note:"caveat"}`.
  - `uS`/`uE` draw the uncertain end dashed.
  - `est:true` adds an asterisk.
  - `note` is the hover caveat, e.g. "his own years are not given".
  - Only add a bar if the person's dates are worth showing (rulers, prophets, central figures).
- **Calendar years:**
  - Work from Scripture's own figures (ages, reign lengths, anchors such as 1 Kings 6:1 and Exodus 12:40).
  - Place them with the standard chronologies named in `CLAUDE.md`: early-date reckoning for the patriarchs and the Exodus, Thiele for the kings, and Bible Hub's timeline.
  - Keep a person's `dates` text consistent with their bar.

## After editing

1. Run the QA validator: `node scripts/validate-data.mjs` (see the `bible-data-qa` skill). Fix any reported issues before proceeding.
2. Open `index.html` in a browser (no build step needed) and spot-check:
   - the new node appears in the right group cluster;
   - its detail panel renders correctly;
   - any new links and clash groupings show up;
   - new `LIVES`/`EVENTS` look right in the Timeline view.
3. Report back to the user:
   - what was added or changed;
   - which NIV passages it came from;
   - anything marked as an estimate, a possible tie or tradition, and why;
   - any existing entries corrected.
4. Don't commit unless the user asks.
