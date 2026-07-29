import { ChevronDown, Eye, EyeOff, GripVertical } from "lucide-react";

import { LayerIcon } from "@/components/studio/layer-icon";
import { cn } from "@/lib/utils";
import type { CanvasBlock } from "@/types/studio";

interface LayersPanelProps {
  blocks: CanvasBlock[];
  name: string;
  onSelect: (id: string) => void;
  onUpdate: (id: string, patch: Partial<CanvasBlock>) => void;
  selectedId: string | null;
}

export const LayersPanel = ({
  blocks,
  name,
  onSelect,
  onUpdate,
  selectedId,
}: LayersPanelProps) => (
  <div className="min-h-0 flex-1 overflow-y-auto px-3 pb-5">
    <div className="mb-1 flex h-9 items-center px-2 text-[11px] font-medium text-neutral-400">
      <ChevronDown className="mr-1.5 size-3.5" />
      {name}
      <span className="ml-auto tabular-nums">{blocks.length}</span>
    </div>
    {blocks.map((block) => (
      <div
        className={cn(
          "group flex h-10 items-center rounded-xl px-2 transition-colors hover:bg-neutral-50",
          selectedId === block.id && "bg-neutral-100"
        )}
        key={block.id}
      >
        <button
          className="flex min-w-0 flex-1 items-center text-left"
          onClick={() => onSelect(block.id)}
          type="button"
        >
          <GripVertical className="mr-1 size-3.5 shrink-0 text-neutral-300 opacity-0 group-hover:opacity-100" />
          <LayerIcon block={block} />
          <span className="truncate text-[12px] font-medium text-neutral-800">
            {block.label}
          </span>
        </button>
        <button
          aria-label={block.hidden ? "Show layer" : "Hide layer"}
          className="flex size-7 items-center justify-center rounded-lg text-neutral-400 opacity-0 transition-opacity hover:bg-white group-hover:opacity-100"
          onClick={() => onUpdate(block.id, { hidden: !block.hidden })}
          type="button"
        >
          {block.hidden ? (
            <EyeOff className="size-3.5" />
          ) : (
            <Eye className="size-3.5" />
          )}
        </button>
      </div>
    ))}
  </div>
);
