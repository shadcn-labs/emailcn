import { ROUTES } from "@/constants/routes";

import type { PageTreeFolder } from "./page-tree";
import { formatLabelFromSlug } from "./utils";

export const DOCS_DIR = `content${ROUTES.DOCS}`;

export const EXCLUDED_SECTIONS = new Set([
  "installation",
  "changelog",
  "(root)",
  "blocks",
  "fonts",
]);

export const isComponentsFolder = (folder: PageTreeFolder) =>
  folder.$id === "components" || folder.name === "Components";

export const isBlocksFolder = (folder: PageTreeFolder) =>
  folder.$id === "blocks" || folder.name === "Blocks";

export const isThemesFolder = (folder: PageTreeFolder) =>
  folder.$id === "themes" || folder.name === "Themes";

export const isFontsFolder = (folder: PageTreeFolder) =>
  folder.$id === "fonts" || folder.name === "Fonts";

export const homeContentRoute = `${ROUTES.LLMS_MDX}/content.md`;
export const docsContentRoute = `${ROUTES.LLMS_MDX}${ROUTES.DOCS}`;
export const docsImageRoute = `${ROUTES.OG}${ROUTES.DOCS}`;

const TITLE_OVERRIDES: Record<string, string> = {};

export const formatTitleFromSlug = (slug: string): string =>
  TITLE_OVERRIDES[slug] ?? formatLabelFromSlug(slug);
