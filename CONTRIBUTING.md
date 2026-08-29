# Contributing

Thank you for helping improve this controlled sample. Keep each contribution small, public, and
verifiable from a clean checkout.

## Before editing

1. Read the candidate issue and confirm its requested files and acceptance criteria.
2. Create a branch from `main`.
3. Run `npm ci` followed by `npm test` to establish a green baseline.

## Make and verify the change

Documentation changes should preserve the exact messages established by
`test/empty-state.test.js` unless an issue explicitly requests behavior changes. Keep guidance close
to the relevant section in `README.md`, use plain language, and link repository files with relative
paths.

Before opening a pull request, run:

```sh
npm run typecheck
npm test
```

In the pull request, explain the first-time contributor question that the change answers and list
the commands you ran. Never include credentials, private data, paid-service dependencies, or steps
that require maintainer-only access.
