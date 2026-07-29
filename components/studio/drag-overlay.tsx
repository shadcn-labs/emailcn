import { DragOverlay as DndDragOverlay } from "@dnd-kit/core";

import { BlockVisual } from "@/components/studio/block-visual";
import { SectionThumbnail } from "@/components/studio/section-thumbnail";
import type { ActiveDrag } from "@/types/studio";

export const DragOverlay = ({
  activeDrag,
}: {
  activeDrag: ActiveDrag | null;
}) => (
  <DndDragOverlay dropAnimation={null}>
    {activeDrag?.type === "library" && activeDrag.item ? (
      <div className="flex w-64 items-center gap-3 rounded-xl border border-neutral-200 bg-white p-2 shadow-xl">
        <SectionThumbnail item={activeDrag.item} />
        <span className="text-[12px] font-medium">{activeDrag.item.title}</span>
      </div>
    ) : null}
    {activeDrag?.type === "canvas" && activeDrag.block ? (
      <div className="w-72 overflow-hidden rounded-lg bg-white shadow-2xl">
        <BlockVisual block={activeDrag.block} />
      </div>
    ) : null}
  </DndDragOverlay>
);
