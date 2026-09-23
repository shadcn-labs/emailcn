import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { CSSProperties } from "react";

import { BlockVisual } from "@/components/studio/block-visual";
import { cn } from "@/lib/utils";
import type { ActiveDrag, CanvasBlock } from "@/types/studio";

interface SortableBlockProps {
  block: CanvasBlock;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export const SortableBlock = ({
  block,
  isSelected,
  onSelect,
}: SortableBlockProps) => {
  const {
    attributes,
    isDragging,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({
    data: { block, type: "canvas" satisfies ActiveDrag["type"] },
    id: block.id,
  });

  if (block.hidden) {
    return null;
  }

  const sortableStyle: CSSProperties = {
    position: "relative",
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 20 : undefined,
  };
  const visualStyle: CSSProperties = {
    backgroundColor: block.background,
    borderColor: block.borderColor,
    borderRadius: block.radius,
    borderStyle: "solid",
    borderWidth: block.borderWidth,
    boxShadow: block.shadow ? "0 18px 38px rgba(0, 0, 0, 0.12)" : undefined,
    opacity: block.opacity / 100,
    overflow: "hidden",
    padding: block.padding,
    textAlign: block.alignment,
    transform: `rotate(${block.rotation}deg) scaleX(${block.flipX ? -1 : 1}) scaleY(${block.flipY ? -1 : 1})`,
  };

  return (
    <div
      className={cn(
        "group outline outline-0 outline-sky-500 transition-[outline-width,opacity] duration-150 hover:outline-1 hover:outline-sky-500/40",
        isSelected && "z-10 outline-2 outline-sky-500",
        isDragging && "opacity-25"
      )}
      data-block-id={block.id}
      ref={setNodeRef}
      style={sortableStyle}
    >
      <button
        aria-label={`Select and drag ${block.label}`}
        className="absolute inset-0 z-10 cursor-grab focus-visible:outline-none active:cursor-grabbing"
        onClick={() => onSelect(block.id)}
        type="button"
        {...attributes}
        {...listeners}
      />
      {isSelected ? (
        <div className="pointer-events-none absolute left-0 top-0 z-20 -translate-y-full rounded-t-sm bg-sky-500 px-2 py-1 text-[9px] font-medium text-white shadow-sm">
          {block.label}
        </div>
      ) : null}
      <div style={visualStyle}>
        <BlockVisual block={block} />
      </div>
    </div>
  );
};
