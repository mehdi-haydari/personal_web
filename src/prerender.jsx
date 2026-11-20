import { readFile, writeFile } from "node:fs/promises";
import { renderToString } from "react-dom/server";
import HomePage from "./HomePage.jsx";
import VoiceAgentPage from "./VoiceAgentPage.jsx";

const pages = [
  ["dist/index.html", <HomePage />],
  ["dist/projects/real-estate-voice-assistant/index.html", <VoiceAgentPage />],
];
const entry = '<div id="root"></div>';

for (const [filename, page] of pages) {
  const template = await readFile(filename, "utf8");
  if (!template.includes(entry)) {
    throw new Error(`Missing React root in ${filename}`);
  }

  const html = template.replace(entry, () => `<div id="root">${renderToString(page)}</div>`);
  await writeFile(filename, html, "utf8");
}
