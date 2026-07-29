import {
  Check,
  ChevronDown,
  ImageIcon,
  LayoutGrid,
  PanelRight,
  Redo2,
  Type,
  Undo2,
} from "lucide-react";

import { IconButton } from "@/components/studio/icon-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { STUDIO_ZOOM_LEVELS } from "@/constants/studio";
import type { StudioViewport } from "@/types/studio";

interface ToolbarProps {
  canRedo: boolean;
  canUndo: boolean;
  onOpenInspector: () => void;
  onOpenLibrary: (query: string) => void;
  onRedo: () => void;
  onUndo: () => void;
  onViewportChange: (viewport: StudioViewport) => void;
  onZoomChange: (zoom: number) => void;
  viewport: StudioViewport;
  zoom: number;
}

export const Toolbar = ({
  canRedo,
  canUndo,
  onOpenInspector,
  onOpenLibrary,
  onRedo,
  onUndo,
  onViewportChange,
  onZoomChange,
  viewport,
  zoom,
}: ToolbarProps) => (
  <>
    <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 items-center rounded-2xl border border-black/[.04] bg-white p-1.5 shadow-[0_12px_30px_rgba(0,0,0,.12)]">
      <IconButton disabled={!canUndo} label="Undo" onClick={onUndo}>
        <Undo2 className="size-4" />
      </IconButton>
      <IconButton disabled={!canRedo} label="Redo" onClick={onRedo}>
        <Redo2 className="size-4" />
      </IconButton>
      <span className="mx-1 h-5 w-px bg-neutral-200" />
      <IconButton
        active={viewport === "desktop"}
        label="Desktop artboard"
        onClick={() => onViewportChange("desktop")}
      >
        <LayoutGrid className="size-4" />
      </IconButton>
      <IconButton
        label="Text components"
        onClick={() => onOpenLibrary("content")}
      >
        <Type className="size-4" />
      </IconButton>
      <IconButton
        label="Image components"
        onClick={() => onOpenLibrary("image")}
      >
        <ImageIcon className="size-4" />
      </IconButton>
      <span className="mx-1 h-5 w-px bg-neutral-200" />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className="flex h-9 min-w-16 items-center justify-center gap-1 rounded-xl bg-neutral-100 px-3 text-[12px] font-medium text-neutral-700 hover:bg-neutral-200/70"
            type="button"
          >
            {zoom}%
            <ChevronDown className="size-3" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="min-w-28 rounded-xl p-1.5"
          side="top"
        >
          {STUDIO_ZOOM_LEVELS.map((value) => (
            <DropdownMenuItem
              className="rounded-lg"
              key={value}
              onClick={() => onZoomChange(value)}
            >
              {zoom === value ? (
                <Check className="size-4" />
              ) : (
                <span className="size-4" />
              )}
              {value}%
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>

    <div className="absolute right-4 top-4 flex gap-1 rounded-xl bg-white/90 p-1 shadow-sm backdrop-blur lg:hidden">
      <IconButton label="Toggle inspector" onClick={onOpenInspector}>
        <PanelRight className="size-4" />
      </IconButton>
    </div>
  </>
);
