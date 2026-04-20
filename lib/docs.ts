import { ROUTES } from "@/constants/routes";

import type { PageTreeFolder } from "./page-tree";
import { formatLabelFromSlug } from "./utils";

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  label?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface DocsConfig {
  sidebarNav: NavItemWithChildren[];
}

export const docsConfig: DocsConfig = {
  sidebarNav: [
    {
      items: [
        {
          href: "/docs",
          items: [],
          title: "Introduction",
        },
        {
          href: "/docs/installation",
          items: [],
          title: "Installation",
        },
      ],
      title: "Getting Started",
    },
    {
      items: [
        {
          href: "/docs/examples/basic",
          items: [],
          title: "Basic Usage",
        },
      ],
      title: "Examples",
    },
  ],
};

export const EXCLUDED_SECTIONS = new Set([
  "installation",
  "changelog",
  "(root)",
]);

export const isComponentsFolder = (folder: PageTreeFolder) =>
  folder.$id === "components" || folder.name === "Components";

export const isBlocksFolder = (folder: PageTreeFolder) =>
  folder.$id === "blocks" || folder.name === "Blocks";

export const docsContentRoute = `${ROUTES.LLMS_MDX}${ROUTES.DOCS}`;
export const docsImageRoute = `${ROUTES.OG}${ROUTES.DOCS}`;

const TITLE_OVERRIDES: Record<string, string> = {};

export const formatTitleFromSlug = (slug: string): string =>
  TITLE_OVERRIDES[slug] ?? formatLabelFromSlug(slug);
