import type { Node as PageTreeNode } from "fumadocs-core/page-tree";

export type PageTreeFolder = Extract<PageTreeNode, { type: "folder" }>;
export type PageTreePage = Extract<PageTreeNode, { type: "page" }>;

export const DEFAULT_DOCS_BASE = "react-email";

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

const matchesBase = (folder: PageTreeFolder, base: string): boolean => {
  const id = String(folder.$id ?? "");

  return (
    id === base ||
    id.endsWith(`/${base}`) ||
    (typeof folder.name === "string" && folder.name.toLowerCase() === base)
  );
};

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
  const folders: PageTreeFolder[] = [];

  for (const child of docsSectionFolder.children) {
    if (child.type !== "folder") {
      continue;
    }
    if (currentBase && !matchesBase(child, currentBase)) {
      continue;
    }

    const nestedFolders = child.children.filter(
      (c): c is PageTreeFolder => c.type === "folder"
    );

    if (nestedFolders.length > 0) {
      folders.push(...nestedFolders);
      continue;
    }

    const hasDirectPages = child.children.some((c) => c.type === "page");
    if (hasDirectPages) {
      folders.push(child);
    }
  }

  return folders;
};

const isBaseIndexPage = (page: PageTreePage) =>
  /^\/docs\/(?:components|blocks)\/[^/]+$/.test(page.url);

export const getPagesFromFolder = (
  folder: PageTreeFolder,
  {
    includeIndex = true,
    filter,
  }: { includeIndex?: boolean; filter?: (page: PageTreePage) => boolean } = {}
): PageTreePage[] =>
  folder.children.filter(
    (child): child is PageTreePage =>
      child.type === "page" &&
      (includeIndex || !isBaseIndexPage(child)) &&
      (!filter || filter(child))
  );

export const getDefaultBasePagesForSection = (
  docsSectionFolder: PageTreeFolder
): PageTreePage[] =>
  getCategoryFoldersForBase(docsSectionFolder, DEFAULT_DOCS_BASE).flatMap(
    (category) => getPagesFromFolder(category, { includeIndex: false })
  );

/** Active registry base (`react-email` | `mjml-react`) from components or blocks doc URLs. */
export const getCurrentBase = (pathname: string): string => {
  const match = pathname.match(
    /\/docs\/(?:components|blocks)\/([^/]+)(?:\/|$)/
  );
  return match ? match[1] : DEFAULT_DOCS_BASE;
};
