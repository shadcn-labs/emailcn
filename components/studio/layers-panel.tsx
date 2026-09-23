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
  <div className="min-h-0 flex-1 overflow-y-auto border-t border-black/[.06] p-1">
    <div className="mb-0.5 flex h-8 items-center px-2 text-[11px] font-medium text-neutral-500">
      <ChevronDown className="mr-1.5 size-3.5" />
      <span className="truncate">{name}</span>
      <span className="ml-auto tabular-nums text-neutral-400">
        {blocks.length}
      </span>
    </div>
    <div className="flex flex-col gap-0.5">
      {blocks.map((block) => (
        <div
          className={cn(
            "group flex h-8 items-center rounded-lg border border-transparent pl-[7px] pr-1.5 transition-colors",
            selectedId === block.id
              ? "border-sky-500/25 bg-sky-500/10"
              : "hover:bg-black/[.05]"
          )}
          key={block.id}
        >
          <button
            className="flex min-w-0 flex-1 items-center text-left"
            onClick={() => onSelect(block.id)}
            type="button"
          >
            <GripVertical className="mr-0.5 size-3.5 shrink-0 text-neutral-300 opacity-0 transition-opacity group-hover:opacity-100" />
            <LayerIcon block={block} />
            <span
              className={cn(
                "truncate text-[12px] font-medium text-neutral-700",
                block.hidden && "text-neutral-400 line-through"
              )}
            >
              {block.label}
            </span>
          </button>
          <button
            aria-label={block.hidden ? "Show layer" : "Hide layer"}
            className={cn(
              "flex size-6 items-center justify-center rounded-md text-neutral-400 transition-[background-color,opacity] hover:bg-white/80 hover:text-neutral-700",
              block.hidden
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
            )}
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
    {blocks.length === 0 ? (
      <p className="px-2 py-3 text-[12px] text-neutral-500">No layers</p>
    ) : null}
  </div>
);
