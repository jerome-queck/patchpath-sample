import "./styles.css";
import { createRoutePreview } from "./route-preview";

const routePreview = document.querySelector<HTMLElement>("#route-preview");

if (!routePreview) {
	throw new Error("Route preview root is missing");
}

createRoutePreview(routePreview);
