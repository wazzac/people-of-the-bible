# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project intends to follow [Semantic Versioning](https://semver.org/)
once tagged releases begin.

## [1.2.2-beta] - 2026-11-06

**The site is now public and open to search engines.**

### Added
- **Search engine support**, ready for Google Search Console and Bing
  Webmaster Tools:
  - the `noindex` robots tags are replaced with `index, follow`;
  - a meta description, canonical URL, Open Graph/Twitter tags and a
    schema.org `WebApplication` block;
  - `robots.txt` and `sitemap.xml`, which the build now copies into `dist/`;
  - a short `<noscript>` description for crawlers that don't run JavaScript.
- **Developer credit.** The credits line under the hint now ends with
  "built by Warren Coetzee", linking to https://wazzac.dev.

## [1.2.1-beta] - 2026-11-05

**`AGENTS.md` added as the shared AI agent guide.**

### Changed
- **`AGENTS.md` is now the main instruction file for AI coding agents**, so
  Codex, Cursor, Copilot and others get the same project guide as Claude. It
  holds everything that was in `CLAUDE.md`, plus the maintainer's working rules:
  - committing only when asked, with "main: …" titles;
  - releases tagged by the maintainer;
  - the rules for angels, the devil and identity links;
  - the book-by-book mapping workflow.

  `CLAUDE.md` now imports `AGENTS.md` and keeps only Claude Code specifics:
  skills, browser permissions and memory. README, CONTRIBUTING, the code of
  conduct, the GitHub templates and the data-entry skill now point to
  `AGENTS.md`. The repository link now uses the repo's new name,
  `wazzac/people-of-the-bible`.

## [1.2.0-beta] - 2026-11-05

**The New Testament rebuilt from the Gospels, Acts, Paul's letters and
Revelation, with Jesus at the centre, and new Angels and The devil groups in
both testaments.**

### Added
- **New Testament rebuilt from the full text.** Matthew, Mark, Luke, John,
  Acts and Revelation were read chapter by chapter in the NIV on Bible.com, and
  their people were mapped.
  - People grew from 71 to 330, and relationships from 110 to 449.
  - Jesus has his own group, "Jesus Christ", and the largest circle on the map.
    His entry quotes the NIV on who he is (John 1:1, 14; Matthew 16:16;
    John 20:28; Matthew 28:19; Revelation 22:16).
- **New New Testament groups**: Jesus Christ, Gospel encounters (the people
  Jesus healed or met), From the Old Testament, and Genealogy of Jesus
  (Matthew 1 and Luke 3). Where the two genealogies differ, both are shown and
  the difference is stated, not explained.
- **Angels group in both testaments**, with its own colour and a dashed outer
  ring.
  - Named angels: Gabriel and Michael in both testaments, and Abaddon/Apollyon
    in Revelation.
  - Angels the text does not name are grouped by what Scripture calls them:
    "Angel of the Lord (unnamed)" in the New Testament; "The angel of the LORD"
    and "Angels of God (unnamed)" in the Old Testament. Revelation's angel who
    showed John the visions and its mighty angel with the little scroll have
    their own circles.
  - An angel is linked to a person only where it appeared to or dealt with that
    person, with the verse quoted.
- **"The devil" group in both testaments**: Satan as a near-black circle with
  its own dash-dot ring. His ties use a new kind, "The devil's dealings", drawn
  as an ash-grey dash-dot line. They appear only where Scripture shows him
  dealing with a person, and each quotes the NIV: Jesus' temptation, Judas,
  Peter, Ananias, the crippled woman, Michael, Job, David's census and Joshua
  the high priest.
  - The tie to Eve is dotted as possible: Genesis 3 says only "the serpent",
    and Revelation 12:9 calls the devil "that ancient serpent".
  - His entry notes that Scripture speaks of "his angels" but does not call him
    an angel in so many words.
- **Revelation people**: John (Revelation), linked to John son of Zebedee only
  as a traditional identification; Antipas; "Jezebel" at Thyatira; Balaam and
  Balak (Revelation 2:14).
- **Paul's thirteen letters (Romans – Philemon)** read in full in the NIV and
  mapped. People grew from 330 to 399, and relationships from 449 to 540.
  - About 65 new people, mostly from the greetings and closings. They include
    Epaphras, Epaphroditus, Demas, Onesiphorus, Tertius (who wrote out
    Romans), and everyone greeted in Romans 16. The Old Testament figures Paul
    writes about (Sarah, Hagar, Rebekah, Esau, Eve) are added too, along with
    Jannes and Jambres, who are named only in 2 Timothy 3:8.
  - Paul's own account is added: tribe of Benjamin, Arabia, the basket at
    Damascus, the thorn in the flesh, and opposing Cephas at Antioch. Timothy,
    Titus, Philemon, Onesimus, Peter, James and others gain what the letters
    say of them. Jesus' entry quotes Philippians 2:6–8 and Colossians 1:15;
    2:9.
  - Where the letters don't say a person is the same as someone in Acts or the
    Gospels, they are kept apart and joined by a dotted "the same man?" tie:
    Sosthenes, Rufus, and the two Alexanders of 1 and 2 Timothy. Where a name
    may cover more than one person, such as Gaius or Erastus, the entry says
    the text doesn't settle it.
  - New name lenses: Sosthenes, Rufus, Lucius and Jason.
- **More New Testament name lenses**, now 28, including Joseph, Herod, Philip,
  Lazarus, Ananias and Saul.
- **New Testament timeline rebuilt** on Scripture's own anchors (Luke 3:1, 23;
  Gallio's proconsulship; Acts 24:27; 28:30). Estimated dates are marked with an
  asterisk and a reason, and events sit in lanes as on the Old Testament
  timeline.

### Changed
- Old New Testament entries that said more than the text are now marked or
  removed. Herodias's daughter is no longer called "Salome" except as a name from
  Josephus. Unstated identifications are drawn dotted with a reason: the beloved
  disciple as John, Nathanael as Bartholomew, Salome as the mother of Zebedee's
  sons, James son of Alphaeus as "James the younger", and Luke as the author.
  Quotations from the letters now match the NIV.
- Domitian's traditional link now goes to John (Revelation) rather than to the
  apostle.
- **The data now lives in its own files.** `main.js` was split into three plain
  scripts, loaded in order by `index.html`:
  - `data-nt.js`: New Testament data, plus the shared link helpers;
  - `data-ot.js`: Old Testament data;
  - `main.js`: the app code only.

  There is still no bundler or module system, and the site still opens
  straight from `index.html`. The build minifies each file on its own.
  `scripts/validate-data.mjs` now reads both data files, and also rejects any
  tie kind that isn't defined. The docs and the two data skills describe the
  new layout.

## [1.1.0-beta] - 2026-11-05

**Adding more Old Testament Bible characters and an updated timeline.**

### Added
- **Old Testament rebuilt from the full text.** Every book from Genesis to
  Malachi (Christian order) was read chapter by chapter in the NIV on
  Bible.com, and its people were mapped.
  - People grew from 101 to 669, and relationships from 125 to 1,021.
  - Main figures are drawn as large circles. Secondary figures, and names known
    only from family lists, are drawn small.
- **Seven new Old Testament groups**, each with its own colour: Creation &
  Flood, Genealogies, House of Jacob, Wider Family & Kin, Priests & Levites,
  Tribal Leaders, and Wisdom & Poetry. The old "Primeval & Patriarchs" group
  was split into Creation & Flood and Patriarchs & Matriarchs.
- **More Old Testament name lenses**, up from 6 to 82. These cover the many
  shared names among kings, priests, prophets and family-list figures, such as
  Joash, Ahaziah, Jeroboam, Zechariah and Joshua.
- **Default and Structured layout buttons** under Network / Timeline.
  - Structured arranges the visible people left to right, earliest to latest.
    In the New Testament it starts with Jesus.
  - Both buttons reset any moved figures. Dragging still pins a figure in
    either layout.
  - The chosen layout is remembered separately for each testament.
- **Main / All / None buttons** for groups. The page now opens with only the
  primary groups on.
  - Opening a person in a hidden group, from a link, search or the timeline,
    switches that group on.
- **Distinct colours for kinds of tie**, separate from the group colours.
  "Calling & succession" ties are dashed. Ties marked possible, disputed or
  traditional are dotted, and each one's note gives the reason.

### Changed
- **Old Testament timeline rebuilt**, now running from Adam to Nehemiah.
  - Bars went from 42 to 109 and events from 18 to 32. The new bars cover every
    king of Judah and Israel, the judges, the later prophets and the foreign
    rulers.
  - Dates use Scripture's own figures: ages, lengths of reigns, and anchors
    such as 1 Kings 6:1 and Exodus 12:40. They are placed on the calendar using
    standard chronologies.
  - Before Abraham, years are a straight count of Genesis 5 and 11.
  - Every estimate is marked with an asterisk (*), and hovering a bar shows its
    caveat. The caption states the assumptions (no gaps in the genealogies;
    Terah 130 at Abram's birth) and the alternatives (Exodus c. 1446 or c. 1250
    BC).
  - Bars share rows wherever they fit, and event labels sit in their own lanes
    so they no longer overlap. The chart uses three scales: compressed before
    Abraham and widened from Saul on, with each change marked.
- **Patriarch dates corrected** to fit the 1446 BC Exodus the site uses
  (Abraham c. 2166–1991 BC). The earlier figures (Abraham c. 2000 BC) did not
  fit it. People's dates in the detail panel now match the timeline.
- **Removed an unscriptural claim.** The timeline event "Malachi · the
  prophets fall silent" is not stated in Scripture. It now reads "Malachi
  prophesies (undated in the book)".
- `README.md` now has a "Scripture first" statement, a sources table, and a
  section explaining how anything beyond the biblical text is marked.
- `LICENSE` keeps the MIT terms and adds a content and third-party notice. It
  covers the NIV copyright notice (Biblica), the BibleProject posters, D3.js
  and the fonts.
- `CLAUDE.md` and `CONTRIBUTING.md` now state the "Nothing is made up" rule up
  front: the NIV text on Bible.com is the source of truth, and anything beyond
  it must be marked with its reason. `CLAUDE.md` also documents the new
  timeline and layout fields.
- `SECURITY.md` now covers the runtime CDN resources and the browser-only
  storage, and gives the CI checks.
- `CLAUDE.md` and `SECURITY.md` now give the correct live-site address
  (bible-people.wazzac.dev).
- The pull request template now asks contributors to confirm that nothing is
  made up and that anything not in the text is marked.
- Claude Code skills (`.claude/skills/`) updated to match.
  - `bible-data-entry` now opens with the "Nothing is made up" rule. It
    documents how to read the NIV on Bible.com and the method for mapping a
    whole book, chapter by chapter.
  - `bible-data-entry` also follows the sizing rule (main characters large,
    secondary figures small) and explains how to mark estimates and uncertain
    ties.
  - `bible-data-qa` now gives the validator's errors and warnings accurately and
    mentions CI. Its manual checklist covers the sourcing rules: exact NIV
    wording, silence stated, uncertain ties marked, honest dates, and labelled
    tradition and history.
  - Both skills now say to commit only when asked.

### Removed
- Stray `*.log` files that had been committed by accident. `*.log` is now in
  `.gitignore`.

### Fixed
- The "Kind of tie" legend no longer shows over the timeline view.

## [1.0.0-beta] - 2026-07-13

### Added
- `LICENSE` (MIT), `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, `SECURITY.md`,
  and this `CHANGELOG.md`, in preparation for accepting outside contributions.
- `npm run build` script (`scripts/build.mjs`, esbuild) that minifies
  `main.css`/`main.js` into a `dist/` folder for deployment.
- `.github/workflows/ci.yml` — runs `npm run validate` (dataset referential
  integrity) and `npm run build` on every push/PR to `main`, so a broken data
  edit or build can't merge silently now that the repo is public.
- `.github/pull_request_template.md` and `.github/ISSUE_TEMPLATE/` (data
  correction and bug report templates) to guide outside contributors.

### Changed
- Split the previously monolithic `index.html` into `index.html` (markup),
  `main.css` (styles), and `main.js` (data + logic), so contributors can work
  in each concern separately. Local development still needs no build step —
  `index.html` loads the unminified files directly.
- Cloudflare Pages build settings now use `npm run build` with output
  directory `dist` (previously no build command, output directory `/`).
- `scripts/validate-data.mjs` now reads the dataset from `main.js` instead of
  `index.html`.

## [0.1.0] - 2026-07-09

### Added
- Initial release: an interactive D3.js force-directed relationship map of
  biblical figures, with separate Old Testament and New Testament datasets.
- Network view (force graph clustered by role/category) and timeline view
  (lifespan bars by estimated dates).
- Search, category filters, and a "name lens" clash comparison panel for
  disambiguating figures who share a name (multiple Marys, Jameses, Simons,
  Johns, and kings).
- Detail panel per person with description, dates, scripture references, and
  "not to be confused with" notes.
- Hyperlinks from every verse reference in the detail panel to the relevant
  chapter/verse on Bible.com (NIV).
- Mobile view support.
- `CLAUDE.md` documenting the data schema and sourcing rules (Bible.com NIV
  for scripture, general historical consensus for extra-biblical history,
  explicit "traditional" labelling for church tradition).
- `scripts/validate-data.mjs`, a referential-integrity checker for the
  hand-curated dataset.
