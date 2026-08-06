import { STUDIO_STARTER_SLUGS } from "@/constants/studio";
import { createBlock } from "@/lib/studio/blocks";
import type { CanvasBlock, StudioCatalogItem } from "@/types/studio";

const COMMERCE_TEMPLATE_SLUGS = [
  "header-with-logo",
  "product-list",
  "call-to-action",
  "utility-footer",
] as const;

const NEWSLETTER_TEMPLATE_SLUGS = [
  "header-with-logo-and-menu",
  "featured-blog-post",
  "blog-grid",
  "call-to-action",
  "navigation-footer",
] as const;

export const getGeneratedTemplateSlugs = (
  prompt: string
): readonly string[] => {
  const normalizedPrompt = prompt.toLowerCase();
  if (
    normalizedPrompt.includes("shop") ||
    normalizedPrompt.includes("product")
  ) {
    return COMMERCE_TEMPLATE_SLUGS;
  }
  if (
    normalizedPrompt.includes("newsletter") ||
    normalizedPrompt.includes("blog")
  ) {
    return NEWSLETTER_TEMPLATE_SLUGS;
  }
  return STUDIO_STARTER_SLUGS;
};

export const createGeneratedBlocks = (
  prompt: string,
  catalog: StudioCatalogItem[]
): CanvasBlock[] =>
  getGeneratedTemplateSlugs(prompt).flatMap((slug) => {
    const item = catalog.find((candidate) => candidate.slug === slug);
    return item ? [createBlock(item)] : [];
  });
