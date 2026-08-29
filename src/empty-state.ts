export function emptyStateGuidance(hasRepository: boolean): string {
  if (hasRepository) {
    return "No contribution routes are available for this repository yet.";
  }

  return "Add a public GitHub repository to begin.";
}
