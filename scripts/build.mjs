// Production build: minifies main.css/main.js and emits a dist/ folder
// ready to serve statically. Run via `npm run build`.
import { build } from "esbuild";
import { mkdirSync, rmSync, readFileSync, writeFileSync, cpSync, existsSync } from "node:fs";

const root = new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const dist = `${root}/dist`;

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

await build({
  entryPoints: [`${root}/main.js`],
  outfile: `${dist}/main.min.js`,
  minify: true,
  bundle: false,
  target: "es2019",
  logLevel: "info",
});

await build({
  entryPoints: [`${root}/main.css`],
  outfile: `${dist}/main.min.css`,
  minify: true,
  bundle: false,
  logLevel: "info",
});

let html = readFileSync(`${root}/index.html`, "utf8");
html = html
  .replace('href="main.css"', 'href="main.min.css"')
  .replace('src="main.js"', 'src="main.min.js"');
writeFileSync(`${dist}/index.html`, html, "utf8");

if (existsSync(`${root}/favicon.svg`)) {
  cpSync(`${root}/favicon.svg`, `${dist}/favicon.svg`);
}

console.log("Built to dist/");
