import { describe, expect, it } from "vitest";

import {
  createBlock,
  createStarterBlocks,
  getNextSelectedId,
  insertBlock,
  moveBlock,
  removeBlockById,
  updateBlockById,
} from "@/lib/studio/blocks";
import type { StudioCatalogItem } from "@/types/studio";

const createCatalogItem = (slug: string, title = slug): StudioCatalogItem => ({
  category: "Marketing",
  description: `${title} description`,
  family: "Content",
  previewHeight: 260,
  slug,
  title,
});

describe("studio block operations", () => {
  it("creates a block with stable defaults and a supplied id", () => {
    const item = createCatalogItem("content", "Content");

    expect(createBlock(item, "content-1")).toStrictEqual({
      ...item,
      alignment: "center",
      background: "#ffffff",
      borderColor: "#e5e5e5",
      borderWidth: 0,
      flipX: false,
      flipY: false,
      hidden: false,
      id: "content-1",
      label: "Content",
      opacity: 100,
      padding: 0,
      radius: 0,
      rotation: 0,
      shadow: false,
    });
  });

  it("builds deterministic starter blocks in starter order", () => {
    const catalog = [
      createCatalogItem("navigation-footer"),
      createCatalogItem("content"),
      createCatalogItem("split-hero"),
      createCatalogItem("header-with-logo-and-menu"),
      createCatalogItem("call-to-action"),
    ];

    const result = createStarterBlocks(catalog);

    expect(result.map((block) => block.slug)).toStrictEqual([
      "header-with-logo-and-menu",
      "split-hero",
      "content",
      "call-to-action",
      "navigation-footer",
    ]);
    expect(result.map((block) => block.id)).toStrictEqual(
      result.map((block) => `${block.slug}-starter`)
    );
  });

  it("inserts, updates, moves, and removes without mutating input arrays", () => {
    const first = createBlock(createCatalogItem("first"), "first-1");
    const second = createBlock(createCatalogItem("second"), "second-1");
    const original = [first, second];

    const inserted = insertBlock(
      original,
      createCatalogItem("middle"),
      1,
      "middle-1"
    );
    const updated = updateBlockById(inserted.blocks, "middle-1", {
      padding: 24,
    });
    const moved = moveBlock(updated, 1, 0);
    const removed = removeBlockById(moved, "first-1");

    expect(original.map((block) => block.id)).toStrictEqual([
      "first-1",
      "second-1",
    ]);
    expect(inserted.blocks.map((block) => block.id)).toStrictEqual([
      "first-1",
      "middle-1",
      "second-1",
    ]);
    expect(updated[1]?.padding).toBe(24);
    expect(moved.map((block) => block.id)).toStrictEqual([
      "middle-1",
      "first-1",
      "second-1",
    ]);
    expect(removed.map((block) => block.id)).toStrictEqual([
      "middle-1",
      "second-1",
    ]);
    expect(getNextSelectedId(removed, 1)).toBe("second-1");
  });

  it("returns the original array when a move is invalid or unnecessary", () => {
    const blocks = [createBlock(createCatalogItem("first"), "first-1")];

    expect(moveBlock(blocks, 0, 0)).toBe(blocks);
    expect(moveBlock(blocks, -1, 0)).toBe(blocks);
    expect(moveBlock(blocks, 0, 2)).toBe(blocks);
  });
});
