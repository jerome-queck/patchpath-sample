# PatchPath sample

This is the controlled public repository used by
[PatchPath](https://github.com/Jerome-Group/patchpath) to demonstrate an evidence-linked route for
a first contribution. Its intentionally small tree keeps every source fact inspectable.

The sample exports two empty-state messages. The open candidate issue asks a contributor to improve
the documentation that helps first-time contributors understand those states.

## Setup

Requirements:

- Git
- Node.js 24
- npm 11 or later

Clone and verify the repository:

```sh
git clone https://github.com/jerome-queck/patchpath-sample.git
cd patchpath-sample
npm ci
npm run typecheck
npm test
```

`npm run typecheck` checks the TypeScript source without producing files. `npm test` builds the
source and runs the behavior checks in `test/empty-state.test.js`.

## Evidence map

| Evidence | Location |
| --- | --- |
| Empty-state behavior | `src/empty-state.ts` |
| Expected messages | `test/empty-state.test.js` |
| Contribution process | `CONTRIBUTING.md` |
| Reproducible commands | `package.json` and this setup section |
| Automated verification | `.github/workflows/ci.yml` |
| License | `LICENSE` |

PatchPath's controlled judge profile declares Git, TypeScript basics, and documentation skills; a
documentation-first preference; and no work involving secrets, paid services, or maintainer-only
access. Its initial availability is 120 minutes. The conflict-recovery demonstration changes only
that availability to 60 minutes: the shorter route can prioritize the issue, contribution guide,
targeted documentation edit, and existing checks, while the longer route can include deeper source
and test reading before the same checks. The issue and repository facts do not change.

## Scope

This repository contains only public demonstration material. Do not add credentials, private data,
paid-service dependencies, generated build output, or maintainer-only instructions.

The project is available under the [MIT License](LICENSE).
