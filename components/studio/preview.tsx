import { X } from "lucide-react";

import { BlockVisual } from "@/components/studio/block-visual";
import { IconButton } from "@/components/studio/icon-button";
import { PanelSurface } from "@/components/studio/panel";
import { STUDIO_ARTBOARD_WIDTH } from "@/constants/studio";
import type { CanvasBlock } from "@/types/studio";

interface PreviewProps {
  blocks: CanvasBlock[];
  name: string;
  onClose: () => void;
}

export const Preview = ({ blocks, name, onClose }: PreviewProps) => (
  <div
    aria-label={`${name} preview`}
    aria-modal="true"
    className="fixed inset-0 z-[100] bg-[#f4f4f3]"
    role="dialog"
  >
    <header className="pointer-events-none absolute left-1/2 top-2.5 z-20 -translate-x-1/2">
      <PanelSurface className="pointer-events-auto flex h-9 items-center gap-2 rounded-lg p-1 pl-3">
        <div className="min-w-0">
          <p className="max-w-48 truncate text-[11px] font-medium text-neutral-900">
            {name}
          </p>
          <p className="text-[9px] text-neutral-400">Email preview</p>
        </div>
        <span className="h-5 w-px bg-black/[.06]" />
        <IconButton className="size-7" label="Close preview" onClick={onClose}>
          <X className="size-3.5" />
        </IconButton>
      </PanelSurface>
    </header>
    <div className="h-full overflow-auto px-12 pb-16 pt-20">
      <div
        className="mx-auto bg-white shadow-sm ring-1 ring-black/[.08]"
        style={{ width: STUDIO_ARTBOARD_WIDTH }}
      >
        {blocks
          .filter((block) => !block.hidden)
          .map((block) => (
            <div
              key={block.id}
              style={{
                backgroundColor: block.background,
                opacity: block.opacity / 100,
                padding: block.padding,
              }}
            >
              <BlockVisual block={block} />
            </div>
          ))}
      </div>
    </div>
  </div>
);
