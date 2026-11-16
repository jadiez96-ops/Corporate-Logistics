import { renderToString } from "react-dom/server";
import App from "./App";

// Used only at build time to prerender the home page into static HTML,
// so search engines and AI crawlers can read the content without running JS.
export function render(url: string) {
  return renderToString(<App ssrPath={url} />);
}
