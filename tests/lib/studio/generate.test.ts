import { describe, expect, it } from "vitest";

import {
  createGeneratedBlocks,
  getGeneratedTemplateSlugs,
} from "@/lib/studio/generate";
import type { StudioCatalogItem } from "@/types/studio";

const createCatalogItem = (slug: string): StudioCatalogItem => ({
  category: "Marketing",
  description: `${slug} description`,
  family: "Content",
  previewHeight: 260,
  slug,
  title: slug,
});

describe("studio template selection", () => {
  it("selects commerce components for shop and product prompts", () => {
    expect(getGeneratedTemplateSlugs("Launch a PRODUCT shop")).toStrictEqual([
      "header-with-logo",
      "product-list",
      "call-to-action",
      "utility-footer",
    ]);
  });

  it("selects editorial components for newsletter and blog prompts", () => {
    expect(getGeneratedTemplateSlugs("A weekly newsletter")).toStrictEqual([
      "header-with-logo-and-menu",
      "featured-blog-post",
      "blog-grid",
      "call-to-action",
      "navigation-footer",
    ]);
  });

  it("uses the starter composition for other prompts", () => {
    expect(
      getGeneratedTemplateSlugs("A product update for members")
    ).toStrictEqual([
      "header-with-logo",
      "product-list",
      "call-to-action",
      "utility-footer",
    ]);
    expect(getGeneratedTemplateSlugs("A welcome email")).toStrictEqual([
      "header-with-logo-and-menu",
      "split-hero",
      "content",
      "call-to-action",
      "navigation-footer",
    ]);
  });

  it("builds blocks only for matching catalog entries", () => {
    const catalog = [
      createCatalogItem("header-with-logo-and-menu"),
      createCatalogItem("content"),
      createCatalogItem("navigation-footer"),
    ];

    const blocks = createGeneratedBlocks("A welcome email", catalog);

    expect(blocks.map((block) => block.slug)).toStrictEqual([
      "header-with-logo-and-menu",
      "content",
      "navigation-footer",
    ]);
    expect(
      blocks.every((block) => block.id.startsWith(block.slug))
    ).toBeTruthy();
  });
});
