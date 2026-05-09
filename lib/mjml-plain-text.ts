// oxlint-disable no-use-before-define func-style

/**
 * Convert rendered HTML to a plain text email body.
 * Used for the text/plain MIME part.
 */
export function toPlainText(html: string): string {
  let text = html;

  // Strip HTML comments (MJML adds many of these)
  text = text.replaceAll(/<!--[\s\S]*?-->/g, "");

  // Strip style tags and their contents
  text = text.replaceAll(/<style[^>]*>[\s\S]*?<\/style>/gi, "");

  // Strip conditional comments for Outlook
  text = text.replaceAll(/<!--\[if[\s\S]*?\]>[\s\S]*?<!\[endif\]-->/gi, "");

  // Strip meta and title tags
  text = text.replaceAll(/<\/?(meta|title)[^>]*>/gi, "");

  // Strip MJML-specific attributes and comments
  text = text.replaceAll(/<(mj-[\w-]+)(?:\s+[^>]*)?\/?>/gi, "<div>");
  text = text.replaceAll(/<\/(mj-[\w-]+)>/gi, "</div>");
  text = text.replaceAll(/<!--(?!\[)[\s\S]*?-->/g, "");

  // Strip data attributes and most HTML attributes (keep href, alt, src)
  text = text.replaceAll(/<([a-z][a-z0-9]*)(?:\s+[^>]*)?>/gi, (match, tag) => {
    if (tag === "img") {
      return match;
    }
    return `<${tag}>`;
  });

  // Convert buttons and links
  text = text.replaceAll(
    /<a\s+[^>]*href="([^"]*)"[^>]*>([^<]*)<\/a>/gi,
    (_, url, label) => {
      const trimmedLabel = label.trim();
      const trimmedUrl = url.trim();
      if (trimmedLabel === trimmedUrl) {
        return trimmedUrl;
      }
      if (
        trimmedUrl.startsWith("http") &&
        trimmedLabel.length < trimmedUrl.length
      ) {
        return `${trimmedLabel} ${trimmedUrl}`;
      }
      if (url.startsWith("mailto:") && trimmedLabel === trimmedUrl.slice(7)) {
        return trimmedLabel;
      }
      return `${trimmedLabel} (${trimmedUrl})`;
    }
  );

  // Convert headings to UPPERCASE (preserving template token case)
  text = text.replaceAll(
    /<h[1-6][^>]*>(.*?)<\/h[1-6]>/gi,
    (_, content) => `\n${toUpperCasePreserveTokens(stripTags(content))}\n`
  );

  // Convert images to [Image: alt]
  text = text.replaceAll(/<img\s+[^>]*alt="([^"]*)"[^>]*>/gi, "[Image: $1]");
  text = text.replaceAll(/<img\s+[^>]*>/gi, "");

  // Convert definition lists: <dl><dt>term</dt><dd>definition</dd></dl>
  text = text.replaceAll(/<dl>([\s\S]*?)<\/dl>/gi, (_outer, inner) => {
    let result = inner;
    result = result.replaceAll(
      /<dt[^>]*>([\s\S]*?)<\/dt>/gi,
      (_: string, term: string) => `\n${stripTags(term).trim()}\n`
    );
    result = result.replaceAll(
      /<dd[^>]*>([\s\S]*?)<\/dd>/gi,
      (_: string, def: string) => `  ${stripTags(def).trim()}\n`
    );
    return result;
  });

  // Convert lists (handles nesting, mixed types, indentation)
  text = convertLists(text);

  // Convert <br> and <hr>
  text = text.replaceAll(/<br\s*\/?>/gi, "\n");
  text = text.replaceAll(/<hr\s*\/?>/gi, "\n---\n");

  // Convert blockquotes (inside-out to handle nesting)
  while (/<blockquote/i.test(text)) {
    text = text.replaceAll(
      /<blockquote[^>]*>((?:(?!<blockquote)[\s\S])*?)<\/blockquote>/gi,
      (_, content) => {
        const lines = stripTags(content).trim().split("\n");
        return `${lines.map((l: string) => `> ${l.trim()}`).join("\n")}
`;
      }
    );
  }

  // Convert code blocks: <pre><code>...</code></pre> → indented content
  text = text.replaceAll(
    /<pre><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi,
    (_, content) => {
      const lines = content.split("\n");
      if (lines.length > 0 && lines.at(-1).trim() === "") {
        lines.pop();
      }
      return `\n${lines.map((l: string) => `    ${l}`).join("\n")}\n`;
    }
  );

  // Convert inline code: <code>text</code> → `text`
  text = text.replaceAll(
    /<code[^>]*>(.*?)<\/code>/gi,
    (_, content) => `\`${content}\``
  );

  // Convert tables to aligned text
  text = convertTables(text);

  // Convert paragraphs to double newlines
  text = text.replaceAll(/<\/p>/gi, "\n\n");
  text = text.replaceAll(/<p[^>]*>/gi, "");

  // Strip all remaining HTML tags
  text = stripTags(text);

  // Convert task list checkboxes to text markers
  text = text.replaceAll("☐", "[ ]");
  text = text.replaceAll("☑", "[x]");

  // Decode common HTML entities
  text = text.replaceAll("&amp;", "&");
  text = text.replaceAll("&lt;", "<");
  text = text.replaceAll("&gt;", ">");
  text = text.replaceAll("&quot;", '"');
  text = text.replaceAll("&#39;", "'");
  text = text.replaceAll("&nbsp;", " ");

  // Clean up whitespace: collapse multiple blank lines, trim
  text = text.replaceAll(/\n{3,}/g, "\n\n");
  text = text.trim();

  return text;
}

function convertLists(html: string): string {
  return processListsInText(html, 0);
}

function processListsInText(text: string, depth: number): string {
  const listOpenRe = /<(ul|ol)[^>]*>/i;
  let result = "";
  let remaining = text;

  while (remaining.length > 0) {
    const match = listOpenRe.exec(remaining);
    if (!match) {
      result += remaining;
      break;
    }

    result += remaining.slice(0, match.index);
    const tagName = match[1].toLowerCase();
    const afterOpen = remaining.slice(match.index + match[0].length);
    const closeIndex = findMatchingClose(afterOpen, tagName);

    if (closeIndex === -1) {
      result += remaining.slice(match.index);
      break;
    }

    const listContent = afterOpen.slice(0, closeIndex);
    remaining = afterOpen.slice(closeIndex + `</${tagName}>`.length);
    result += processListItems(listContent, tagName, depth);
  }

  return result;
}

function findMatchingClose(html: string, tagName: string): number {
  const openRe = new RegExp(`<${tagName}[^>]*>`, "gi");
  const closeRe = new RegExp(`</${tagName}>`, "gi");
  let nesting = 1;
  let searchFrom = 0;

  while (nesting > 0) {
    openRe.lastIndex = searchFrom;
    closeRe.lastIndex = searchFrom;
    const openMatch = openRe.exec(html);
    const closeMatch = closeRe.exec(html);

    if (!closeMatch) {
      return -1;
    }

    if (openMatch && openMatch.index < closeMatch.index) {
      nesting += 1;
      searchFrom = openMatch.index + openMatch[0].length;
    } else {
      nesting -= 1;
      if (nesting === 0) {
        return closeMatch.index;
      }
      searchFrom = closeMatch.index + closeMatch[0].length;
    }
  }
  return -1;
}

function processListItems(
  html: string,
  listType: string,
  depth: number
): string {
  const indent = "  ".repeat(depth);
  let result = "";
  let counter = 0;

  const liOpenRe = /<li[^>]*>/gi;
  let liMatch: RegExpExecArray | null;

  while ((liMatch = liOpenRe.exec(html)) !== null) {
    const start = liMatch.index + liMatch[0].length;
    const afterLiOpen = html.slice(start);
    const closeLiIndex = findMatchingClose(afterLiOpen, "li");
    if (closeLiIndex === -1) {
      continue;
    }

    const liContent = afterLiOpen.slice(0, closeLiIndex);
    counter += 1;

    const marker = listType === "ol" ? `${counter}.` : "-";

    // Separate text content from nested sublists
    const nestedListRe = /<(ul|ol)[^>]*>/i;
    const nestedMatch = nestedListRe.exec(liContent);

    if (nestedMatch) {
      const textPart = liContent.slice(0, nestedMatch.index);
      const cleanText = stripTags(textPart).trim();
      if (cleanText) {
        result += `${indent}${marker} ${cleanText}\n`;
      }
      const nestedPart = liContent.slice(nestedMatch.index);
      result += processListsInText(nestedPart, depth + 1);
    } else {
      const cleanText = stripTags(liContent).trim();
      if (cleanText) {
        result += `${indent}${marker} ${cleanText}\n`;
      }
    }

    liOpenRe.lastIndex = start + closeLiIndex + "</li>".length;
  }

  return result;
}

function convertTables(html: string): string {
  const tableRe = /<table>[\s\S]*?<\/table>/gi;
  return html.replace(tableRe, (tableHtml) => {
    const rows: string[][] = [];
    const rowRe = /<tr>([\s\S]*?)<\/tr>/gi;
    let rowMatch: RegExpExecArray | null;

    while ((rowMatch = rowRe.exec(tableHtml)) !== null) {
      const cells: string[] = [];
      const cellRe = /<(?:th|td)[^>]*>([\s\S]*?)<\/(?:th|td)>/gi;
      let cellMatch: RegExpExecArray | null;
      while ((cellMatch = cellRe.exec(rowMatch[1])) !== null) {
        cells.push(stripTags(cellMatch[1]).trim());
      }
      if (cells.length > 0) {
        rows.push(cells);
      }
    }

    if (rows.length === 0) {
      return "";
    }

    // Calculate column widths
    const colCount = Math.max(...rows.map((r) => r.length));
    const colWidths: number[] = [];
    for (let c = 0; c < colCount; c += 1) {
      colWidths[c] = Math.max(...rows.map((r) => (r[c] || "").length));
    }

    // Format rows with padding
    const lines = rows.map((row) => {
      const cells = row.map((cell, c) => cell.padEnd(colWidths[c]));
      return cells.join("   ");
    });

    // Insert separator after header row
    if (lines.length > 1) {
      const separator = colWidths.map((w) => "-".repeat(w)).join("   ");
      lines.splice(1, 0, separator);
    }

    return `\n${lines.join("\n")}\n`;
  });
}

function stripTags(html: string): string {
  return html.replaceAll(/<[^>]*>/g, "");
}

/** Matches common template token delimiters: {{...}}, {%...%}, <%...%>, ${...}, %%...%% */
const TEMPLATE_TOKEN_RE =
  /(\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}|&lt;%[\s\S]*?%&gt;|<%[\s\S]*?%>|\$\{[\s\S]*?\}|%%[\s\S]*?%%)/g;

function toUpperCasePreserveTokens(str: string): string {
  const parts = str.split(TEMPLATE_TOKEN_RE);
  for (let i = 0; i < parts.length; i += 1) {
    if (i % 2 === 0) {
      parts[i] = parts[i].toUpperCase();
    }
  }
  return parts.join("");
}
