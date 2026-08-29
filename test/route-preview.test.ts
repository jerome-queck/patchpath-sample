// @vitest-environment jsdom

import { afterEach, describe, expect, it } from "vitest";

import { createRoutePreview } from "../src/route-preview";

afterEach(() => {
	document.body.replaceChildren();
});

function renderRoutePreview(): HTMLElement {
	const preview = document.createElement("main");
	document.body.append(preview);
	createRoutePreview(preview);
	return preview;
}

describe("route preview", () => {
	it("guides a first-time contributor who has not selected a repository", () => {
		const preview = renderRoutePreview();

		expect(preview.querySelector("h2")?.textContent).toBe(
			"No repository selected",
		);
		expect(preview.textContent).toContain(
			"Choose the controlled sample to see how PatchPath handles an empty route.",
		);
		expect(
			preview.querySelector<HTMLButtonElement>("button")?.textContent,
		).toContain("Load sample repository");
	});

	it("shows an honest no-route state after the sample repository is selected", () => {
		const preview = renderRoutePreview();

		preview.querySelector<HTMLButtonElement>("button")?.click();

		expect(preview.querySelector("h2")?.textContent).toBe(
			"No contribution routes yet",
		);
		expect(preview.textContent).toContain("jerome-queck/patchpath-sample");
		expect(preview.textContent).toContain(
			"Read the candidate issue and contribution guide while the route is prepared.",
		);
		expect(
			[...preview.querySelectorAll("a")].map((link) => link.textContent),
		).toEqual(["Candidate issue", "Contribution guide"]);
	});

	it("lets the contributor return to the initial empty state", () => {
		const preview = renderRoutePreview();

		preview.querySelector<HTMLButtonElement>("button")?.click();
		preview.querySelector<HTMLButtonElement>("button")?.click();

		expect(preview.querySelector("h2")?.textContent).toBe(
			"No repository selected",
		);
	});
});
