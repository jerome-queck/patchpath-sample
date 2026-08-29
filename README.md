# PatchPath route preview

This is the controlled public repository used by
[PatchPath](https://github.com/Jerome-Group/patchpath) to demonstrate an evidence-linked route for
a first contribution. It is also a runnable miniature: a contributor can try the two honest empty
states PatchPath needs before opening the larger application.

The preview starts without a selected repository. Loading the controlled sample moves it to a
no-route outcome with useful repository links; choosing another repository returns to the initial
state. It runs entirely in the browser and has no account, network service, persistence, remote
runtime resource, or maintainer-only setup.

## Run it locally

Requirements:

- Git
- Node.js 22.13 or later
- npm 10.9.2 or later

From a clean checkout:

```sh
git clone https://github.com/jerome-queck/patchpath-sample.git
cd patchpath-sample
npm ci
npm run dev
```

Open the local URL printed by Vite. The development server supports live reload and stops with
<kbd>Control</kbd>+<kbd>C</kbd>.

## Verify it

```sh
npm run build
npm run typecheck
npm test
npm run verify
```

`npm run build` creates the static production site in ignored `dist/`. `npm run typecheck` checks
the product and tests without emitting files. `npm test` exercises the rendered DOM and interaction
states deterministically. `npm run verify` is the complete CI-equivalent format, lint, typecheck,
test, and build gate.

## Why it stays static

The sample is intentionally static so a contributor can run and inspect it without credentials,
network reliability, or maintainer access. Local product code, styling, and deterministic DOM tests
keep every fact PatchPath consumes public and reviewable.

## Evidence map

| Evidence | Location |
| --- | --- |
| Product purpose, setup, architecture, and scope | `README.md` |
| Browser entry point and semantic page structure | `index.html` and `src/main.ts` |
| Empty-state behavior and interaction | `src/route-preview.ts` |
| Responsive local styling | `src/styles.css` |
| Rendered behavior checks | `test/route-preview.test.ts` |
| Reproducible commands and versions | `package.json` and `package-lock.json` |
| Contribution process | `CONTRIBUTING.md` |
| Automated verification | `.github/workflows/ci.yml` |

PatchPath's controlled judge profile declares Git, TypeScript basics, and documentation skills; a
documentation-first preference; and no work involving secrets, paid services, or maintainer-only
access. Its initial availability is 120 minutes. The conflict-recovery demonstration changes only
that availability to 60 minutes: the shorter route can prioritize the issue, contribution guide,
targeted documentation edit, and existing checks, while the longer route can include deeper source,
style, and test reading before the same checks. The issue and repository facts do not change.

## Controlled-sample boundary

This miniature is evidence for PatchPath, not PatchPath itself. It deliberately has one open
documentation candidate and a bounded, inspectable tree. Do not add credentials, private data,
authentication, persistence, paid dependencies, generated build output, remote runtime resources,
or maintainer-only instructions.

The project is available under the [MIT License](LICENSE).
