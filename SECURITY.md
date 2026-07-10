# Security Policy

## Scope

This project is a static, client-side site — plain HTML/CSS/JS, no backend,
no database, no user accounts, and no user-submitted data at runtime. The
realistic security surface is small, but still worth reporting if found:

- Cross-site scripting (XSS) or other injection issues in how the dataset
  (`main.js`) is rendered into the DOM.
- Vulnerabilities in build-time dependencies (`esbuild`, anything in
  `package.json`) that could affect the built output.
- Anything that could let a malicious pull request inject executable content
  into the deployed site via the dataset or build script.

This project does **not** handle authentication, payments, personal data, or
any server-side logic, so most typical web-app vulnerability classes don't
apply.

## Supported Versions

There's a single rolling version — whatever is deployed at
https://bible.wazzac.dev from the `main` branch. Fixes are applied there
directly; there are no maintained older versions.

## Reporting a Vulnerability

Please **do not** open a public GitHub issue for a security concern.

Instead, email **warren.coetzee@gmail.com** with:

- A description of the issue and its potential impact.
- Steps to reproduce, or a proof-of-concept if applicable.

You should receive an acknowledgement within a few days. This is a
volunteer-maintained hobby project, so response and fix timelines aren't
guaranteed, but genuine reports will be taken seriously and credited (if
you'd like) once resolved.

## Dependencies

The project intentionally has almost no dependencies. `npm audit` is run
against `package.json` (currently just `esbuild`, used only at build time)
before dependency updates are merged.
