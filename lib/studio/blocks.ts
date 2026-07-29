import { STUDIO_STARTER_SLUGS } from "@/constants/studio";
import type { CanvasBlock, StudioCatalogItem } from "@/types/studio";

export const createBlock = (
  item: StudioCatalogItem,
  id = `${item.slug}-${crypto.randomUUID()}`
): CanvasBlock => ({
  ...item,
  alignment: "center",
  background: "#ffffff",
  borderColor: "#e5e5e5",
  borderWidth: 0,
  flipX: false,
  flipY: false,
  hidden: false,
  id,
  label: item.title,
  opacity: 100,
  padding: 0,
  radius: 0,
  rotation: 0,
  shadow: false,
});

export const createStarterBlocks = (
  catalog: StudioCatalogItem[]
): CanvasBlock[] =>
  STUDIO_STARTER_SLUGS.flatMap((slug) => {
    const item = catalog.find((candidate) => candidate.slug === slug);
    return item ? [createBlock(item, `${item.slug}-starter`)] : [];
  });

export const insertBlock = (
  blocks: CanvasBlock[],
  item: StudioCatalogItem,
  index = blocks.length,
  id?: string
): { block: CanvasBlock; blocks: CanvasBlock[] } => {
  const block = createBlock(item, id);
  const nextBlocks = [...blocks];
  nextBlocks.splice(index, 0, block);
  return { block, blocks: nextBlocks };
};

export const updateBlockById = (
  blocks: CanvasBlock[],
  id: string,
  patch: Partial<CanvasBlock>
): CanvasBlock[] =>
  blocks.map((block) => (block.id === id ? { ...block, ...patch } : block));

export const removeBlockById = (
  blocks: CanvasBlock[],
  id: string
): CanvasBlock[] => blocks.filter((block) => block.id !== id);

export const moveBlock = (
  blocks: CanvasBlock[],
  fromIndex: number,
  toIndex: number
): CanvasBlock[] => {
  if (
    fromIndex === toIndex ||
    fromIndex < 0 ||
    toIndex < 0 ||
    fromIndex >= blocks.length ||
    toIndex >= blocks.length
  ) {
    return blocks;
  }
  const nextBlocks = [...blocks];
  const [moved] = nextBlocks.splice(fromIndex, 1);
  if (!moved) {
    return blocks;
  }
  nextBlocks.splice(toIndex, 0, moved);
  return nextBlocks;
};

export const getCanvasInsertIndex = (
  blocks: CanvasBlock[],
  overId: string | number,
  canvasId: string
): number => {
  if (overId === canvasId) {
    return blocks.length;
  }
  const index = blocks.findIndex((block) => block.id === overId);
  return index === -1 ? blocks.length : index;
};

export const getNextSelectedId = (
  blocks: CanvasBlock[],
  removedIndex: number
): string | null =>
  blocks[Math.min(removedIndex, blocks.length - 1)]?.id ?? null;
