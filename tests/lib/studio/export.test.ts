import { describe, expect, it } from "vitest";

import { createBlock } from "@/lib/studio/blocks";
import {
  createDesignManifest,
  createInstallCommands,
  createStudioFilename,
} from "@/lib/studio/export";
import type { StudioCatalogItem } from "@/types/studio";

const item: StudioCatalogItem = {
  category: "Marketing",
  description: "Content description",
  family: "Content",
  previewHeight: 260,
  slug: "content",
  title: "Content",
};

describe("studio export generation", () => {
  it("creates the versioned manifest with component registry and style data", () => {
    const block = {
      ...createBlock(item, "content-1"),
      background: "#f4f4f4",
      borderWidth: 2,
      hidden: true,
      opacity: 80,
      padding: 16,
      radius: 8,
    };

    expect(
      JSON.parse(createDesignManifest([block], "react-email", "Campaign"))
    ).toStrictEqual({
      components: [
        {
          hidden: true,
          registry: "https://emailcn.run/r/react-email/content.json",
          styles: {
            background: "#f4f4f4",
            borderWidth: 2,
            opacity: 80,
            padding: 16,
            radius: 8,
          },
          type: "content",
        },
      ],
      emailcn: "2.0",
      framework: "react-email",
      name: "Campaign",
    });
  });

  it("deduplicates install commands while retaining first-use order", () => {
    const content = createBlock(item, "content-1");
    const duplicate = createBlock(item, "content-2");
    const footer = createBlock(
      { ...item, slug: "footer", title: "Footer" },
      "footer-1"
    );

    expect(
      createInstallCommands([content, duplicate, footer], "jsx-email")
    ).toBe(
      [
        "pnpm dlx shadcn@latest add https://emailcn.run/r/jsx-email/content.json",
        "pnpm dlx shadcn@latest add https://emailcn.run/r/jsx-email/footer.json",
      ].join("\n")
    );
  });

  it("creates a normalized studio filename with an empty-name fallback", () => {
    expect(createStudioFilename("Field Notes: July 2026")).toBe(
      "field-notes-july-2026.emailcn.json"
    );
    expect(createStudioFilename("")).toBe("email.emailcn.json");
  });
});
