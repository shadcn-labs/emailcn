import { describe, expect, it } from "vitest";

import { createBlock } from "@/lib/studio/blocks";
import {
  createHistoryState,
  historyReducer,
  parseSavedStudio,
} from "@/lib/studio/history";
import type { CanvasBlock, StudioCatalogItem } from "@/types/studio";

const catalogItem: StudioCatalogItem = {
  category: "Marketing",
  description: "Content description",
  family: "Content",
  previewHeight: 260,
  slug: "content",
  title: "Content",
};

const block = (id: string): CanvasBlock => createBlock(catalogItem, id);

describe("studio history", () => {
  it("supports commit, undo, redo, and load", () => {
    const initial = createHistoryState([block("initial")]);
    const committed = historyReducer(initial, {
      blocks: [block("next")],
      type: "commit",
    });
    const undone = historyReducer(committed, { type: "undo" });
    const redone = historyReducer(undone, { type: "redo" });
    const loaded = historyReducer(redone, {
      blocks: [block("loaded")],
      type: "load",
    });

    expect(committed.past).toHaveLength(1);
    expect(undone.present[0]?.id).toBe("initial");
    expect(redone.present[0]?.id).toBe("next");
    expect(loaded).toStrictEqual({
      future: [],
      past: [],
      present: [expect.objectContaining({ id: "loaded" })],
    });
  });

  it("keeps at most fifty prior snapshots", () => {
    let state = createHistoryState([block("initial")]);
    for (let index = 0; index < 55; index += 1) {
      state = historyReducer(state, {
        blocks: [block(`block-${index}`)],
        type: "commit",
      });
    }

    expect(state.past).toHaveLength(50);
    expect(state.present[0]?.id).toBe("block-54");
  });
});

describe("saved studio parsing", () => {
  it("restores valid state and fills missing block properties with defaults", () => {
    const restored = parseSavedStudio(
      JSON.stringify({
        blocks: [
          {
            background: "#123456",
            id: "saved-1",
            padding: 18,
            slug: "content",
          },
        ],
        framework: "jsx-email",
        name: "Saved email",
        version: 2,
      }),
      [catalogItem]
    );

    expect(restored).toStrictEqual({
      blocks: [
        expect.objectContaining({
          alignment: "center",
          background: "#123456",
          id: "saved-1",
          padding: 18,
          slug: "content",
        }),
      ],
      framework: "jsx-email",
      name: "Saved email",
    });
  });

  it("filters malformed and unknown blocks while preserving an explicit empty state", () => {
    const restored = parseSavedStudio(
      JSON.stringify({
        blocks: [
          { id: "unknown-1", slug: "unknown" },
          { id: 123, slug: "content" },
        ],
        framework: "unknown",
        name: " ",
        version: 2,
      }),
      [catalogItem]
    );

    expect(restored).toStrictEqual({
      blocks: [],
      framework: null,
      name: null,
    });
  });

  it("rejects incompatible versions and throws for invalid JSON", () => {
    expect(
      parseSavedStudio(
        JSON.stringify({ blocks: [], framework: "react-email", version: 1 }),
        [catalogItem]
      )
    ).toBeNull();
    expect(() => parseSavedStudio("{", [catalogItem])).toThrow(SyntaxError);
  });
});
