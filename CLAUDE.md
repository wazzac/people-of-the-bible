# CLAUDE.md

The project's instructions for all AI agents live in `AGENTS.md`, imported below. This file holds only what is specific to Claude Code.

@AGENTS.md

## Claude Code specifics

- **Skills.** `.claude/skills/bible-data-entry` and `.claude/skills/bible-data-qa` are registered as Claude Code skills. Invoke `bible-data-entry` before adding or editing data, or mapping a book, and `bible-data-qa` after any data edit.
- **Permissions.** `.claude/settings.json` allows the Claude in Chrome extension on the local test-server ports (`localhost:8765`, `8766`, `8791`). Serve the site with `npx http-server -p 8765 -c-1 -s .` (or `dist/` on another port) and check it in the browser there. Stop any server you start before finishing, or Windows will refuse to delete `dist/` on the next build.
- **Scratch work.** Keep downloaded NIV text, extraction scripts and splice scripts in the session scratchpad, not in the repo.
- **Memory.** Durable preferences from the maintainer belong in `AGENTS.md` when they apply to every agent. Use Claude's own memory only for session progress and context.
