import fs from "node:fs";
import path from "node:path";

import { DOCS_DIR } from "@/lib/docs";
import { source } from "@/lib/source";

export interface ChangelogPageData {
  title: string;
  description?: string;
}

export type ChangelogPage = ReturnType<typeof source.getPages>[number] & {
  date: Date | null;
};

const DOCS_ROOT = path.join(process.cwd(), DOCS_DIR);

const resolveSourceFile = (slugs: string[]): string | null => {
  const relativePath = `${path.join(...slugs)}.mdx`;
  const directPath = path.join(DOCS_ROOT, relativePath);

  if (fs.existsSync(directPath)) {
    return directPath;
  }

  for (const entry of fs.readdirSync(DOCS_ROOT, { withFileTypes: true })) {
    if (!entry.isDirectory() || !entry.name.startsWith("(")) {
      continue;
    }

    const groupedPath = path.join(DOCS_ROOT, entry.name, relativePath);
    if (fs.existsSync(groupedPath)) {
      return groupedPath;
    }
  }

  return null;
};

export const getDateFromFile = (slugs: string[]) => {
  const filePath = resolveSourceFile(slugs);
  if (!filePath) {
    return null;
  }

  try {
    const content = fs.readFileSync(filePath, "utf-8");
    const match = content.match(/^date:\s*(.+)$/m);
    if (match?.[1]) {
      return new Date(match[1].trim());
    }
  } catch {
    // File missing or invalid frontmatter.
  }

  return null;
};

export const getChangelogPages = () =>
  source
    .getPages()
    .filter((page) => page.slugs[0] === "changelog" && page.slugs.length > 1)
    .map((page) => ({
      ...page,
      date: getDateFromFile(page.slugs),
    }))
    .toSorted((a, b) => {
      const dateA = a.date?.getTime() ?? 0;
      const dateB = b.date?.getTime() ?? 0;
      return dateB - dateA;
    });
