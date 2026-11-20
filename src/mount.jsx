import { createRoot, hydrateRoot } from "react-dom/client";

export function mount(Page) {
  const root = document.getElementById("root");

  if (root.hasChildNodes()) {
    hydrateRoot(root, <Page />);
    return;
  }

  createRoot(root).render(<Page />);
}
