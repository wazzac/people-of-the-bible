# People of the Bible — a relationship map

A single-page, interactive map of the people of the Bible and how they connect to
one another: family, disciples, rivals, rulers, prophets and the early church.
Pick Old Testament or New Testament, then explore the network. Click anyone for
their story, hover to trace their ties, drag figures around, or switch to the
timeline view to see who overlapped with whom.

Live site: **https://bible-people.wazzac.dev**

## Scripture first

The governing rule of this project: **everything on the map is taken from
Scripture itself, read in the NIV on [Bible.com](https://www.bible.com).**
Nothing is invented to fill a gap. Where the Bible is silent or ambiguous, the
map says so rather than guessing.

A small amount of information does not come straight from the biblical text.
Every piece of it is labelled where it appears, with the reason it is there.
See [How anything beyond the text is marked](#how-anything-beyond-the-text-is-marked).

**Status:** the Old Testament dataset has been built book by book, from
Genesis to Malachi, by reading every chapter in the NIV. The New Testament
dataset is an earlier, smaller set (71 people). It has not yet been through the
same chapter-by-chapter review.

## What's inside

- **Network view.** A force-directed graph (D3.js) that groups people by role:
  patriarchs, judges, kings, prophets, the Twelve, the early church and so on.
  Click a figure to open a detail panel with:
  - their story;
  - "Where to read" references, each linking to the passage on Bible.com (NIV);
  - who they are *not* to be confused with;
  - every relationship they have on the map.
- **Layouts.** **Default** gives the clustered view. **Structured** lays people
  out left to right, earliest to latest. Dragging a figure pins it in place in
  either layout, and double-clicking releases it.
- **Groups.** Filter the map by group. The page opens with the main groups on.
  The *Main*, *All* and *None* buttons switch groups in bulk.
- **Name lens.** Many biblical figures share a name: several Marys, Jameses,
  Johns, Zechariahs, Joashes and more. The lens shows everyone with a given name
  side by side, so they are easy to tell apart.
- **Timeline view.**
  - People are laid out by estimated lifespan or time in office, alongside key
    events such as the Exodus and the fall of Jerusalem.
  - An asterisk (*) marks an estimated date. Hover a bar to see its caveat.
- **Book posters.** The *Posters* button opens BibleProject's book-overview
  posters for the active testament. Each person's detail panel also links to
  the posters for the books they appear in.

It's a static site: plain HTML, CSS and JavaScript (`index.html`, `main.css`,
the data files `data-nt.js` and `data-ot.js`, and `main.js` for the app
itself), with D3.js loaded from a CDN. There is no framework. The only build
step is a minify pass (esbuild) used for deployment; you don't need to install
anything to view or edit the site locally.

## Sources

| What | Source |
|---|---|
| People, relationships, descriptions, quotations and verse references | **The Bible, NIV**, read on [Bible.com](https://www.bible.com) (YouVersion). Quotations are the NIV's wording. |
| Book-overview poster images | [BibleProject](https://bibleproject.com). Hotlinked from BibleProject's own servers under their Posters permission: non-commercial digital display, no modification, and the permission can be withdrawn. Every displayed poster carries a "Poster © BibleProject" credit. See [`AGENTS.md`](./AGENTS.md) for the terms and how to remove the feature. |
| Orientation only | [BibleProject](https://bibleproject.com) may be used to check how a book or figure is commonly understood. It is never the source of a fact, date or quotation on the map. |
| Placing events on a BC/AD calendar | Scripture's own figures where it gives them (ages, years of reigns, "in the 480th year…"). These are anchored by standard scholarly chronologies: the early-date reckoning for the patriarchs and the Exodus, Thiele's reckoning for the kings, and [Bible Hub's timeline](https://biblehub.com/timeline/). Persian, Babylonian and Assyrian reign dates follow the historical record. All of these are marked as estimates where they are uncertain (see below). |

Bible.com and BibleProject are also credited on the site itself, in the small
line under the on-screen hint.

## How anything beyond the text is marked

The default is the plain biblical text. Where the map goes beyond it, it says
so where the information appears.

- **Estimates (*).** Dates are not given in the Bible in BC/AD terms, so every
  calendar date is an estimate. Uncertain ones carry an asterisk and the word
  "estimate".
  - **Before Abraham**, years are a straight count of the ages in Genesis 5
    and 11. This assumes two things, both stated on the timeline:
    - the lists have no gaps;
    - Terah was 130 at Abram's birth. This comes from Genesis 11:32 and 12:4
      read with Acts 7:4. Genesis 11:26 would also allow 70.
  - **The Exodus** is placed c. 1446 BC by 1 Kings 6:1. Many scholars place it
    c. 1250 BC instead, and the map says so.
  - **The judges' dates** are especially disputed.
- **Dashed timeline bars** mark a start or end that is less certain still.
- **"Possibly" / "disputed" / "traditional"** links are drawn as dotted lines.
  They are used where the text allows an identification but does not state it.
  Each carries a note giving the reason. For example, Zephaniah's ancestor
  "Hezekiah" may be King Hezekiah, but Zephaniah 1:1 does not say so.
- **"Traditional"** marks two kinds of label:
  - date ranges that are conventional estimates rather than figures from the
    text;
  - details that come from church tradition rather than the Bible, such as
    Mary's parents Joachim and Anne in the New Testament data, or the
    traditional authorship of some books.

  Neither kind is presented as Scripture.
- **Historical record.** Facts from outside the Bible are labelled with their
  source, for example "recorded by Josephus" or "historical record". Examples
  are the reign dates of Persian kings and the fall of Thebes recalled in
  Nahum 3:8.
- **Silence is stated, not filled.** Where the Bible does not say something,
  the entry says so. For example, Hosea 1 does not say that Lo-Ruhamah and
  Lo-Ammi were Hosea's own children, so they are linked as "named", not
  "father of".

If you find anything on the map that is not supported by the NIV text and is
not marked as one of the above, please open an issue. It will be corrected.

## Local development

You don't need to install or build anything to view or edit the site. Just
open `index.html` in a browser; it loads `main.css`, `data-nt.js`,
`data-ot.js` and `main.js` as plain siblings. You can also serve the folder
with any static file server, e.g.:

```
npx serve .
```

A small Node script checks the data for consistency, such as duplicate IDs and
dangling relationship links:

```
node scripts/validate-data.mjs
```

### Production build (minification)

Deployment runs a minify-only build step so the site ships smaller CSS and JS.
To run it locally:

```
npm install
npm run build
```

This produces a `dist/` folder containing:
- a minified `main.min.css`, `data-nt.min.js`, `data-ot.min.js` and
  `main.min.js`;
- an `index.html` rewritten to reference them.

`dist/` must be served as its own web root, because its `index.html`
references the minified files as siblings. For example: `npx serve dist`.

## Deployment

Hosted on Cloudflare Pages, deploying automatically on push to the connected
branch.

**Cloudflare Pages build settings:**
- Framework preset: `None`
- Build command: `npm run build`
- Build output directory: `dist`

## Contributing

- [`CONTRIBUTING.md`](./CONTRIBUTING.md) explains how to propose changes.
- [`AGENTS.md`](./AGENTS.md) covers the data schema, the sourcing rules and the
  conventions for adding or editing people and relationships. It is written for
  AI coding agents but reads fine for people too; [`CLAUDE.md`](./CLAUDE.md)
  adds only what is specific to Claude Code.

The same rule applies to every contribution: take it from the NIV text, and
label anything that isn't.

## Licence and copyright

- **Code and the project's own writing** are released under the
  [MIT License](./LICENSE).
- **Scripture quotations** are taken from The Holy Bible, New International
  Version® NIV®. Copyright © 1973, 1978, 1984, 2011 by Biblica, Inc.™ Used by
  permission. All rights reserved worldwide. The NIV text is **not** covered by
  the MIT License.
- **BibleProject posters** remain © BibleProject. They are displayed (not
  redistributed) under BibleProject's own permission and are not covered by the
  MIT License.
- **D3.js** (ISC License) and **Google Fonts** (SIL Open Font License) are
  loaded from their CDNs under their own licences.
