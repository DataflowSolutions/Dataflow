// lib/renderMarkdown.ts
import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";

// Configure marked for better rendering
marked.setOptions({
  breaks: true, // Convert line breaks to <br> tags
  gfm: true, // Enable GitHub Flavored Markdown
});

/**
 * Strippar en inledande H1 från content om den duplicerar post.title.
 */
export function stripLeadingH1(md: string, title?: string) {
  const lines = md.trimStart().split("\n");
  if (!lines.length) return md;
  const h1Match = lines[0].match(/^#\s+(.*)$/);
  if (h1Match) {
    const h1Text = h1Match[1].trim();
    if (!title || h1Text.toLowerCase() === title.toLowerCase()) {
      return lines.slice(1).join("\n").trimStart();
    }
  }
  return md;
}

export function renderMarkdown(md: string, title?: string) {
  const cleaned = stripLeadingH1(md, title);
  const html = marked.parse(cleaned) as string;
  return DOMPurify.sanitize(html, {
    USE_PROFILES: { html: true },
    ALLOWED_TAGS: [
      'p', 'br', 'strong', 'em', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'ul', 'ol', 'li', 'blockquote', 'code', 'pre', 'a', 'hr', 'img'
    ],
    ALLOWED_ATTR: ['href', 'target', 'rel', 'alt', 'src', 'id']
  });
}
