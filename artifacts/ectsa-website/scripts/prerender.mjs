// Injects the server-rendered home page into dist/public/index.html.
import { readFileSync, writeFileSync, rmSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = path.resolve(import.meta.dirname, "..");
const htmlPath = path.join(root, "dist/public/index.html");
const serverEntry = path.join(root, "dist/server/entry-server.js");

const { render } = await import(pathToFileURL(serverEntry).href);
const appHtml = render("/");

const template = readFileSync(htmlPath, "utf8");
if (!template.includes("<!--app-html-->")) {
  throw new Error("Placeholder <!--app-html--> not found in index.html");
}
writeFileSync(htmlPath, template.replace("<!--app-html-->", appHtml));
rmSync(path.join(root, "dist/server"), { recursive: true, force: true });
console.log(`Prerendered / (${appHtml.length} chars of HTML)`);
