import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { LayoutGrid } from "lucide-react";

import { SortableBlock } from "@/components/studio/sortable-block";
import { STUDIO_CANVAS_ID } from "@/constants/studio";
import { cn } from "@/lib/utils";
import type { CanvasBlock } from "@/types/studio";

interface CanvasProps {
  blocks: CanvasBlock[];
  canvasWidth: number;
  onSelect: (id: string) => void;
  selectedId: string | null;
}

export const Canvas = ({
  blocks,
  canvasWidth,
  onSelect,
  selectedId,
}: CanvasProps) => {
  const { isOver, setNodeRef } = useDroppable({ id: STUDIO_CANVAS_ID });
  const visibleBlocks = blocks.filter((block) => !block.hidden);

  return (
    <div
      className={cn(
        "relative min-h-[680px] overflow-visible bg-white shadow-sm ring-1 ring-black/[.08] transition-[box-shadow,ring-color] duration-150",
        isOver && "shadow-[0_0_0_2px_rgba(12,140,233,.35)] ring-sky-500/40"
      )}
      data-testid="studio-canvas"
      ref={setNodeRef}
      style={{ width: canvasWidth }}
    >
      <SortableContext
        items={visibleBlocks.map((block) => block.id)}
        strategy={verticalListSortingStrategy}
      >
        {visibleBlocks.map((block) => (
          <SortableBlock
            block={block}
            isSelected={selectedId === block.id}
            key={block.id}
            onSelect={onSelect}
          />
        ))}
      </SortableContext>
      {visibleBlocks.length === 0 ? (
        <div className="flex min-h-[680px] flex-col items-center justify-center text-center">
          <span className="flex size-12 items-center justify-center rounded-full bg-neutral-100">
            <LayoutGrid className="size-5 text-neutral-500" />
          </span>
          <p className="mt-4 text-sm font-medium text-neutral-900">
            Drop a section here
          </p>
          <p className="mt-1 max-w-[220px] text-xs leading-5 text-neutral-500">
            Open the Library and drag any EmailCN component onto the canvas.
          </p>
        </div>
      ) : null}
    </div>
  );
};
