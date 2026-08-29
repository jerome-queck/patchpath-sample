import assert from "node:assert/strict";
import test from "node:test";

import { emptyStateGuidance } from "../dist/empty-state.js";

test("first-time contributor sees how to begin without a repository", () => {
	assert.equal(
		emptyStateGuidance(false),
		"Add a public GitHub repository to begin.",
	);
});

test("contributor sees an honest outcome when no route is available", () => {
	assert.equal(
		emptyStateGuidance(true),
		"No contribution routes are available for this repository yet.",
	);
});
