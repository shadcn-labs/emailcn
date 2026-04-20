import type { Node as PageTreeNode } from "fumadocs-core/page-tree";

export type PageTreeFolder = Extract<PageTreeNode, { type: "folder" }>;
export type PageTreePage = Extract<PageTreeNode, { type: "page" }>;

export const getAllPagesFromFolder = (
  folder: PageTreeFolder
): PageTreePage[] => {
  const pages: PageTreePage[] = [];

  for (const child of folder.children) {
    if (child.type === "page") {
      pages.push(child);
    } else if (child.type === "folder") {
      pages.push(...getAllPagesFromFolder(child));
    }
  }

  return pages;
};

const matchesBase = (folder: PageTreeFolder, base: string): boolean =>
  folder.$id === base ||
  (typeof folder.name === "string" && folder.name.toLowerCase() === base);

/**
 * Folders to show under **Components** or **Blocks** for the active base (e.g. `react-email`).
 *
 * Supports two layouts:
 * 1. Nested categories: `.../<base>/<category>/page.mdx` → one sidebar group per category folder.
 * 2. Flat pages: `.../<base>/hero.mdx` → a single group using the base folder (all `.mdx` siblings).
 */
export const getCategoryFoldersForBase = (
  docsSectionFolder: PageTreeFolder,
  currentBase: string
): PageTreeFolder[] => {
  for (const child of docsSectionFolder.children) {
    if (child.type !== "folder") {
      continue;
    }
    if (!matchesBase(child, currentBase)) {
      continue;
    }

    const nestedFolders = child.children.filter(
      (c): c is PageTreeFolder => c.type === "folder"
    );

    if (nestedFolders.length > 0) {
      return nestedFolders;
    }

    const hasDirectPages = child.children.some((c) => c.type === "page");
    if (hasDirectPages) {
      return [child];
    }
  }

  return [];
};

export const getPagesFromFolder = (folder: PageTreeFolder): PageTreePage[] =>
  folder.children.filter(
    (child): child is PageTreePage => child.type === "page"
  );

/** Active registry base (`react-email` | `mjml-react`) from components or blocks doc URLs. */
export const getCurrentBase = (pathname: string): string => {
  const match = pathname.match(
    /\/docs\/(?:components|blocks)\/([^/]+)(?:\/|$)/
  );
  return match ? match[1] : "";
};
