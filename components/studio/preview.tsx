import { X } from "lucide-react";

import { BlockVisual } from "@/components/studio/block-visual";
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
    className="fixed inset-0 z-[100] flex flex-col bg-neutral-950/95"
    role="dialog"
  >
    <header className="flex h-16 shrink-0 items-center border-b border-white/10 px-5 text-white">
      <button
        className="flex size-9 items-center justify-center rounded-xl text-white/60 hover:bg-white/10 hover:text-white"
        onClick={onClose}
        type="button"
      >
        <X className="size-4" />
        <span className="sr-only">Close preview</span>
      </button>
      <div className="ml-3">
        <p className="text-sm font-medium">{name}</p>
        <p className="text-[10px] text-white/45">Email preview</p>
      </div>
    </header>
    <div className="min-h-0 flex-1 overflow-auto p-12">
      <div
        className="mx-auto bg-white"
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
