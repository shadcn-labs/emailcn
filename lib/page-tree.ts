import type { Node as PageTreeNode } from "fumadocs-core/page-tree";

import { DEFAULT_BASE } from "@/registry/bases";

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
  (typeof folder.name === "string" &&
    folder.name.split(" ").join("-").toLowerCase() === base);

const findBaseFolder = (
  folder: PageTreeFolder,
  base: string
): PageTreeFolder | undefined => {
  for (const child of folder.children) {
    if (child.type !== "folder") {
      continue;
    }
    if (matchesBase(child, base)) {
      return child;
    }
  }
};

export type FolderItem =
  | { type: "page"; page: PageTreePage }
  | {
      type: "group";
      $id?: string;
      name: PageTreeFolder["name"];
      index?: PageTreePage;
      pages: PageTreePage[];
    };

/**
 * Direct items of a folder, preserving one level of nesting: standalone
 * pages stay pages, while child folders (component families) become groups
 * carrying their index page and variant pages. Unlike getAllPagesFromFolder
 * this does not flatten families into an undifferentiated page list.
 */
export const getFolderItems = (folder: PageTreeFolder): FolderItem[] => {
  const items: FolderItem[] = [];

  for (const child of folder.children) {
    if (child.type === "page") {
      items.push({ page: child, type: "page" });
    } else if (child.type === "folder") {
      items.push({
        $id: child.$id,
        index: child.index,
        name: child.name,
        pages: getAllPagesFromFolder(child),
        type: "group",
      });
    }
  }

  return items;
};

/**
 * Direct entries of a folder: its own pages plus, for each child folder
 * (e.g. a component family), that folder's index page. Unlike
 * getAllPagesFromFolder this does not flatten nested folders, so a family
 * shows up once under its family name instead of once per variant.
 */
export const getFolderEntries = (folder: PageTreeFolder): PageTreePage[] => {
  const entries: PageTreePage[] = [];

  for (const item of getFolderItems(folder)) {
    if (item.type === "page") {
      entries.push(item.page);
    } else if (item.index) {
      entries.push(item.index);
    }
  }

  return entries;
};

export const getCategoryFolders = (
  folder: PageTreeFolder,
  base: string
): PageTreeFolder[] => {
  const baseFolder = findBaseFolder(folder, base);
  if (!baseFolder) {
    return [];
  }

  return baseFolder.children.filter(
    (c): c is PageTreeFolder => c.type === "folder"
  );
};

export const getFolderPages = (
  folder: PageTreeFolder,
  base?: string
): PageTreePage[] => {
  if (base) {
    const baseFolder = findBaseFolder(folder, base);
    if (!baseFolder) {
      return [];
    }

    return getAllPagesFromFolder(baseFolder);
  }

  return getAllPagesFromFolder(folder);
};

export const getCurrentBase = (pathname: string): string => {
  const match = pathname.match(/\/docs\/components\/([^/]+)\//);
  return match ? match[1] : DEFAULT_BASE;
};
