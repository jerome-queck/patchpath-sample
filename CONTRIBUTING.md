# Contributing

Thank you for helping improve this controlled sample. Keep each contribution small, public, and
verifiable from a clean checkout.

## Before editing

1. Read the candidate issue and confirm its requested files and acceptance criteria.
2. Read `README.md` for the controlled-sample boundary and `MAP.md` for the repository shape.
3. Create a branch from `main`.
4. Run `npm ci` followed by `npm run verify` to establish a green baseline.

## Make the change

The open candidate is documentation-focused. Keep its guidance close to the evidence map in
`README.md`, use plain language, and link repository files with relative paths. The browser behavior
in `src/route-preview.ts` and its rendered-state contract in `test/route-preview.test.ts` are context
for that edit, not part of the candidate's requested change.

Source changes should keep semantic markup, visible keyboard focus, responsive styling, and the
no-service runtime boundary. A behavior change starts with one failing test at the public
`createRoutePreview` seam. Do not test private helpers, CSS class names, or implementation details.

## Verify and propose

Before opening a pull request, run:

```sh
npm run verify
```

In the pull request, explain the first-time contributor question the change answers and list the
commands you ran. Never include credentials, private data, paid-service dependencies, generated
`dist/` files, or steps that require maintainer-only access.
