# People of the Bible — a relationship map

A single-page, interactive map of the people of the Bible and how they connect to
one another — family, disciples, rivals, rulers, and the early church. Pick Old
Testament or New Testament, then explore the network: click anyone for their
story, hover to trace their ties, drag figures around, or switch to a timeline
view to see who overlapped with whom.

Live site: **https://bible-people.wazzac.dev**

## What's inside

- **Network view** — a force-directed graph (D3.js) clustering people by role
  (family, the Twelve, prophets, kings, rulers, and so on). Click a figure to
  open a detail panel with their story, scripture references, and how they
  connect to everyone else on the map.
- **Timeline view** — the same people laid out by estimated lifespan, so you can
  see who was alive at the same time.
- **"Name lens"** — many biblical figures share a name (multiple Marys, Jameses,
  Simons, Johns...). This lens highlights everyone with a given name side by
  side so they're easy to tell apart.
- **Search and filters** — find a person by name, or filter the graph down to
  specific groups.
- **Book posters** — a "Posters" button opens a gallery of BibleProject's
  book-overview poster images for the active testament, and each person's
  detail panel links to the poster(s) for the book(s) they're referenced in.

It's a static site — plain HTML, CSS, and JavaScript (`index.html`, `main.css`,
`main.js`), with D3.js pulled in from a CDN. No framework. The only build step
is an optional minify pass (esbuild) used for deployment; nothing to install
just to view or edit the site locally.

## Sources

- **Scripture text and verse references** are drawn from the NIV translation via
  [Bible.com](https://www.bible.com) (YouVersion). Every "Where to read" citation
  in the detail panel links straight to the relevant chapter/verse on Bible.com.
- **Historical and thematic framing** — background used to sanity-check how a
  person, book, or event is commonly understood — draws on
  [BibleProject](https://bibleproject.com).
- **Book-overview poster images** are hotlinked directly from BibleProject's
  own CDN under their Posters permission (non-commercial digital display,
  no modification) — see [`CLAUDE.md`](./CLAUDE.md) for the full terms this
  relies on and how to remove the feature if that permission is ever
  withdrawn.
- Extra-biblical history (Roman emperors, governors, dates recorded by
  historians like Josephus) follows general historical consensus, and is noted
  as such in the data.
- Details that come from church tradition rather than the biblical text itself
  (for example, Mary's parents Joachim and Anne, or the traditional authorship
  of some books) are explicitly labelled "traditional" rather than presented as
  Scripture.

Both sources are also credited directly on the site, in the small line under
the on-screen controls hint.

## Local development

There's nothing to install or build to view or edit the site — just open
`index.html` in a browser (it loads `main.css` and `main.js` as plain
siblings), or serve the folder with any static file server, e.g.:

```
npx serve .
```

A small Node script checks the underlying data for consistency (duplicate IDs,
dangling relationship links, etc.):

```
node scripts/validate-data.mjs
```

### Production build (minification)

Deployment runs a minify-only build step so the site ships smaller CSS/JS. To
run it locally:

```
npm install
npm run build
```

This produces a `dist/` folder containing a minified `main.min.css`,
`main.min.js`, and an `index.html` rewritten to reference them. `dist/` must
be served as its own web root (its `index.html` references the minified files
as siblings), e.g. `npx serve dist`.

## Deployment

Hosted on Cloudflare Pages, deploying automatically on push to the connected
branch.

**Cloudflare Pages build settings:**
- Framework preset: `None`
- Build command: `npm run build`
- Build output directory: `dist`

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for how to propose changes, and
[`CLAUDE.md`](./CLAUDE.md) for the data schema, sourcing rules, and
conventions to follow when adding or editing people and relationships.
