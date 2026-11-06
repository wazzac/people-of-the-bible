// Production build: minifies main.css and the three scripts (data-nt.js,
// data-ot.js, main.js) and emits a dist/ folder
// ready to serve statically. Run via `npm run build`.
import { build } from "esbuild";
import { mkdirSync, rmSync, readFileSync, writeFileSync, cpSync, existsSync } from "node:fs";

const root = new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const dist = `${root}/dist`;

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

// each script is minified on its own (no bundling); index.html loads them in order
const SCRIPTS = ["data-nt", "data-ot", "main"];
for (const name of SCRIPTS) {
  await build({
    entryPoints: [`${root}/${name}.js`],
    outfile: `${dist}/${name}.min.js`,
    minify: true,
    bundle: false,
    target: "es2019",
    logLevel: "info",
  });
}

await build({
  entryPoints: [`${root}/main.css`],
  outfile: `${dist}/main.min.css`,
  minify: true,
  bundle: false,
  logLevel: "info",
});

let html = readFileSync(`${root}/index.html`, "utf8");
html = html.replace('href="main.css"', 'href="main.min.css"');
for (const name of SCRIPTS) {
  const tag = `src="${name}.js"`;
  if (!html.includes(tag)) throw new Error(`index.html has no <script ${tag}>`);
  html = html.replace(tag, `src="${name}.min.js"`);
}
writeFileSync(`${dist}/index.html`, html, "utf8");

// static files copied as-is (robots.txt and sitemap.xml are for search engines)
for (const file of ["favicon.svg", "robots.txt", "sitemap.xml"]) {
  if (existsSync(`${root}/${file}`)) cpSync(`${root}/${file}`, `${dist}/${file}`);
}

console.log("Built to dist/");
