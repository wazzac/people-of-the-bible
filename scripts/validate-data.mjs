#!/usr/bin/env node
/**
 * Referential-integrity check for the Bible dataset embedded in main.js.
 *
 * The dataset is plain JS (NT_CAT, NT_PEOPLE, NT_LINKS, NT_EVENTS, NT_LIVES, NT_META
 * and the OT_ equivalents) living at the top of main.js — there's no separate data
 * file to validate against a schema library, so this extracts that block of source
 * and evaluates it in an isolated VM context, then checks the resulting arrays.
 *
 * Usage: node scripts/validate-data.mjs
 * Exits non-zero (and prints each problem) if anything is inconsistent.
 */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const mainJsPath = path.join(__dirname, "..", "main.js");
const js = fs.readFileSync(mainJsPath, "utf8");

const startMarker = "const NT_CAT = {";
const endMarker = "let TESTAMENT=";
const start = js.indexOf(startMarker);
const end = js.indexOf(endMarker, start);

if (start === -1 || end === -1) {
  console.error(
    "Could not locate the data block in main.js (looked for markers " +
      JSON.stringify(startMarker) + " ... " + JSON.stringify(endMarker) + "). " +
      "If the data section was restructured, update these markers in validate-data.mjs."
  );
  process.exit(2);
}

// vm contexts only expose top-level var/function declarations as properties
// of the sandbox object -- const/let bindings stay purely lexical and would
// otherwise be invisible to the code below, so normalize to var first.
const code = js
  .slice(start, end)
  .replace(/\bconst\s/g, "var ")
  .replace(/\blet\s/g, "var ");
const sandbox = {};
vm.createContext(sandbox);

try {
  vm.runInContext(code, sandbox, { filename: "main.js (data block)" });
} catch (err) {
  console.error("Failed to evaluate the data block extracted from main.js:");
  console.error(err.message);
  process.exit(2);
}

const datasets = {
  nt: {
    CAT: sandbox.NT_CAT, PEOPLE: sandbox.NT_PEOPLE, LINKS: sandbox.NT_LINKS,
    EVENTS: sandbox.NT_EVENTS, LIVES: sandbox.NT_LIVES, META: sandbox.NT_META,
  },
  ot: {
    CAT: sandbox.OT_CAT, PEOPLE: sandbox.OT_PEOPLE, LINKS: sandbox.OT_LINKS,
    EVENTS: sandbox.OT_EVENTS, LIVES: sandbox.OT_LIVES, META: sandbox.OT_META,
  },
};

const errors = [];
const warnings = [];

for (const [key, ds] of Object.entries(datasets)) {
  if (!ds.PEOPLE) {
    errors.push(`[${key}] dataset did not evaluate -- check NT_/OT_ variable names still match`);
    continue;
  }

  const ids = new Set();
  for (const p of ds.PEOPLE) {
    if (!p.id) { errors.push(`[${key}] a person is missing an "id" field: ${JSON.stringify(p).slice(0, 80)}`); continue; }
    if (ids.has(p.id)) errors.push(`[${key}] duplicate person id: "${p.id}"`);
    ids.add(p.id);

    if (!p.name) errors.push(`[${key}] person "${p.id}" is missing "name"`);
    if (!p.short) errors.push(`[${key}] person "${p.id}" is missing "short"`);
    if (!p.cat || !ds.CAT[p.cat]) errors.push(`[${key}] person "${p.id}" has unknown category "${p.cat}"`);
    if (typeof p.w !== "number") warnings.push(`[${key}] person "${p.id}" has no numeric "w" (node weight)`);
    if (!p.refs || !p.refs.length) warnings.push(`[${key}] person "${p.id}" has no "refs" -- confirm this is intentional (e.g. not named in the text)`);

    // clash without clashtag (or vice versa) usually indicates a copy-paste slip
    if (p.clash && !p.clashtag) warnings.push(`[${key}] person "${p.id}" has "clash" but no "clashtag"`);
    if (p.clashtag && !p.clash) warnings.push(`[${key}] person "${p.id}" has "clashtag" but no "clash"`);
  }

  for (const l of ds.LINKS) {
    if (!ids.has(l.source)) errors.push(`[${key}] link references unknown source id "${l.source}"`);
    if (!ids.has(l.target)) errors.push(`[${key}] link references unknown target id "${l.target}"`);
  }

  for (const life of ds.LIVES) {
    if (!ids.has(life.id)) errors.push(`[${key}] LIVES entry references unknown person id "${life.id}"`);
  }

  // clashNames in META should correspond to at least one person using that clash value
  if (ds.META && ds.META.clashNames) {
    const clashValues = new Set(ds.PEOPLE.map((p) => p.clash).filter(Boolean));
    for (const name of ds.META.clashNames) {
      if (!clashValues.has(name)) {
        warnings.push(`[${key}] META.clashNames includes "${name}" but no person has clash:"${name}"`);
      }
    }
  }
}

console.log(`Checked ${Object.keys(datasets).length} dataset(s).`);

if (warnings.length) {
  console.log(`\n${warnings.length} warning(s):`);
  for (const w of warnings) console.log(" - " + w);
}

if (errors.length) {
  console.log(`\n${errors.length} error(s):`);
  for (const e of errors) console.log(" - " + e);
  console.log("\nFAILED");
  process.exit(1);
}

console.log("\nOK -- all ids, links, and lives are internally consistent.");
