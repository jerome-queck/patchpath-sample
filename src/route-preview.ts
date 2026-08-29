type PreviewState = "awaiting-repository" | "no-routes";

const sampleRepository = "jerome-queck/patchpath-sample";

// Static canonical links preserve useful next steps without adding a runtime network dependency.
function createButton(label: string, action: () => void): HTMLButtonElement {
	const button = document.createElement("button");
	button.type = "button";
	button.textContent = label;
	button.addEventListener("click", action);
	return button;
}

function createRepositoryLink(label: string, path: string): HTMLAnchorElement {
	const link = document.createElement("a");
	link.href = `https://github.com/${sampleRepository}/${path}`;
	link.textContent = label;
	return link;
}

function renderAwaitingRepository(
	container: HTMLElement,
	selectRepository: () => void,
): void {
	const heading = document.createElement("h2");
	heading.textContent = "No repository selected";

	const guidance = document.createElement("p");
	guidance.textContent =
		"Choose the controlled sample to see how PatchPath handles an empty route.";

	container.replaceChildren(
		heading,
		guidance,
		createButton("Load sample repository", selectRepository),
	);
}

function renderNoRoutes(
	container: HTMLElement,
	clearRepository: () => void,
): void {
	const eyebrow = document.createElement("p");
	eyebrow.className = "eyebrow";
	eyebrow.textContent = sampleRepository;

	const heading = document.createElement("h2");
	heading.textContent = "No contribution routes yet";

	const guidance = document.createElement("p");
	guidance.textContent =
		"Read the candidate issue and contribution guide while the route is prepared.";

	const links = document.createElement("nav");
	links.ariaLabel = "Repository resources";
	links.append(
		createRepositoryLink("Candidate issue", "issues/1"),
		createRepositoryLink("Contribution guide", "blob/main/CONTRIBUTING.md"),
	);

	container.replaceChildren(
		eyebrow,
		heading,
		guidance,
		links,
		createButton("Choose another repository", clearRepository),
	);
}

export function createRoutePreview(container: HTMLElement): void {
	let state: PreviewState = "awaiting-repository";

	const render = (): void => {
		if (state === "awaiting-repository") {
			renderAwaitingRepository(container, () => {
				state = "no-routes";
				render();
			});
			return;
		}

		renderNoRoutes(container, () => {
			state = "awaiting-repository";
			render();
		});
	};

	container.setAttribute("aria-live", "polite");
	render();
}
