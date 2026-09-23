import type { CanvasBlock, StudioFramework } from "@/types/studio";

export const createDesignManifest = (
  blocks: CanvasBlock[],
  framework: StudioFramework,
  name: string
): string =>
  JSON.stringify(
    {
      components: blocks.map((block) => ({
        hidden: block.hidden,
        registry: `https://emailcn.run/r/${framework}/${block.slug}.json`,
        styles: {
          background: block.background,
          borderWidth: block.borderWidth,
          opacity: block.opacity,
          padding: block.padding,
          radius: block.radius,
        },
        type: block.slug,
      })),
      emailcn: "2.0",
      framework,
      name,
    },
    null,
    2
  );

export const createInstallCommands = (
  blocks: CanvasBlock[],
  framework: StudioFramework
): string =>
  [...new Set(blocks.map((block) => block.slug))]
    .map(
      (slug) =>
        `pnpm dlx shadcn@latest add https://emailcn.run/r/${framework}/${slug}.json`
    )
    .join("\n");

export const createStudioFilename = (name: string): string =>
  `${name.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-") || "email"}.emailcn.json`;
