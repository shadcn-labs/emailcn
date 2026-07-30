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
      <div className="flex w-64 items-center gap-2.5 rounded-lg border border-black/[.08] bg-white/90 p-1.5 shadow-[0_12px_32px_rgba(0,0,0,.14)] backdrop-blur-xl">
        <SectionThumbnail item={activeDrag.item} />
        <span className="text-[12px] font-medium">{activeDrag.item.title}</span>
      </div>
    ) : null}
    {activeDrag?.type === "canvas" && activeDrag.block ? (
      <div className="w-72 overflow-hidden rounded-lg bg-white shadow-[0_12px_32px_rgba(0,0,0,.16)] ring-1 ring-black/[.08]">
        <BlockVisual block={activeDrag.block} />
      </div>
    ) : null}
  </DndDragOverlay>
);
