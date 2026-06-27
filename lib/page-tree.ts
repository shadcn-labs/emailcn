import type { Node as PageTreeNode } from "fumadocs-core/page-tree";

import { DEFAULT_BASE } from "@/registry/bases";

export type PageTreeFolder = Extract<PageTreeNode, { type: "folder" }>;
export type PageTreePage = Extract<PageTreeNode, { type: "page" }>;

/** Direct child folders of a folder (bases, categories, subcategories, families). */
export const childFolders = (folder: PageTreeFolder): PageTreeFolder[] =>
  folder.children.filter((c): c is PageTreeFolder => c.type === "folder");

/** Every page under a folder, with nested folders flattened away. */
export const getAllPagesFromFolder = (folder: PageTreeFolder): PageTreePage[] =>
  folder.children.flatMap((child) => {
    if (child.type === "page") {
      return [child];
    }
    if (child.type === "folder") {
      return getAllPagesFromFolder(child);
    }
    return [];
  });

/** Match a folder by its id slug or display name, e.g. "bento-grids" / "Bento Grids". */
const matchesKey = (folder: PageTreeFolder, key: string): boolean =>
  folder.$id === key ||
  String(folder.$id ?? "").endsWith(`/${key}`) ||
  (typeof folder.name === "string" &&
    folder.name.split(" ").join("-").toLowerCase() === key.toLowerCase());

/**
 * Find a direct child folder by key. Bases, categories and subcategories are
 * all just folders, so the same lookup navigates each level of the tree.
 */
export const findChildFolder = (
  folder: PageTreeFolder,
  key: string
): PageTreeFolder | undefined =>
  childFolders(folder).find((child) => matchesKey(child, key));

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
export const getFolderItems = (folder: PageTreeFolder): FolderItem[] =>
  folder.children.flatMap<FolderItem>((child) => {
    if (child.type === "page") {
      return [{ page: child, type: "page" }];
    }
    if (child.type === "folder") {
      return [
        {
          $id: child.$id,
          index: child.index,
          name: child.name,
          pages: getAllPagesFromFolder(child),
          type: "group",
        },
      ];
    }
    return [];
  });

/**
 * Direct entries of a folder: its own pages plus, for each child folder
 * (e.g. a component family), that folder's index page. Unlike
 * getAllPagesFromFolder this does not flatten nested folders, so a family
 * shows up once under its family name instead of once per variant.
 */
export const getFolderEntries = (folder: PageTreeFolder): PageTreePage[] =>
  getFolderItems(folder).flatMap((item) => {
    if (item.type === "page") {
      return [item.page];
    }
    return item.index ? [item.index] : [];
  });

/** Categories of a base: the child folders of the base folder. */
export const getCategoryFolders = (
  folder: PageTreeFolder,
  base: string
): PageTreeFolder[] => {
  const baseFolder = findChildFolder(folder, base);
  return baseFolder ? childFolders(baseFolder) : [];
};

/** All pages of a folder, optionally scoped to one base folder. */
export const getFolderPages = (
  folder: PageTreeFolder,
  base?: string
): PageTreePage[] => {
  const target = base ? findChildFolder(folder, base) : folder;
  return target ? getAllPagesFromFolder(target) : [];
};

export const getCurrentBase = (pathname: string): string => {
  const match = pathname.match(/\/docs\/components\/([^/]+)\//);
  return match ? match[1] : DEFAULT_BASE;
};
