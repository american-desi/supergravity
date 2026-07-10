// Markdown renderer: marked for parsing, DOMPurify for sanitization.
// All model- and teacher-authored content passes through here — nothing is
// ever injected as raw HTML.

import { createMemo, type Component } from "solid-js";
import { marked } from "marked";
import DOMPurify from "dompurify";

marked.setOptions({ gfm: true, breaks: false });

// Inline $math$ is styled, not typeset, in v1 (KaTeX is a planned upgrade).
function styleMath(html: string): string {
  return html.replace(/\$([^$\n]+)\$/g, (_m, expr: string) => `<span class="math">${expr}</span>`);
}

export const Markdown: Component<{ text: string; class?: string }> = (props) => {
  const html = createMemo(() => {
    const raw = marked.parse(props.text, { async: false });
    return styleMath(
      DOMPurify.sanitize(raw, {
        ALLOWED_TAGS: [
          "p", "br", "strong", "em", "code", "pre", "blockquote",
          "h1", "h2", "h3", "h4", "ul", "ol", "li", "table", "thead",
          "tbody", "tr", "th", "td", "hr", "span", "sub", "sup",
        ],
        ALLOWED_ATTR: ["class"],
      }),
    );
  });
  // eslint-disable-next-line solid/no-innerhtml -- sanitized above
  return <div class={`md ${props.class ?? ""}`} innerHTML={html()} />;
};
