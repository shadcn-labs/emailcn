import type { CatalogCategoryFilter, StudioFramework } from "@/types/studio";

export const STUDIO_FRAMEWORKS: {
  id: StudioFramework;
  label: string;
}[] = [
  { id: "react-email", label: "React Email" },
  { id: "mjml-react", label: "MJML React" },
  { id: "jsx-email", label: "JSX Email" },
];

export const STUDIO_STARTER_SLUGS = [
  "header-with-logo-and-menu",
  "split-hero",
  "content",
  "call-to-action",
  "navigation-footer",
] as const;

export const STUDIO_STORAGE_KEY = "emailcn-studio-v2";
export const STUDIO_CANVAS_ID = "email-studio-canvas";
export const STUDIO_DND_CONTEXT_ID = "email-studio-dnd";
export const STUDIO_ARTBOARD_WIDTH = 600;
export const STUDIO_MOBILE_ARTBOARD_WIDTH = 375;
export const STUDIO_STORAGE_VERSION = 2 as const;

export const STUDIO_CATEGORY_FILTERS: CatalogCategoryFilter[] = [
  "All",
  "Marketing",
  "Ecommerce",
  "Elements",
];

export const STUDIO_ZOOM_LEVELS = [33, 42, 54, 67, 80, 100] as const;

export const STUDIO_GENERATE_PROMPTS = [
  "A weekly design newsletter",
  "A minimal product launch",
  "An ecommerce collection email",
] as const;
