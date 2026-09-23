import {
  Check,
  ImageIcon,
  Monitor,
  PanelLeft,
  PanelRight,
  Redo2,
  Smartphone,
  Type,
  Undo2,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

import { IconButton } from "@/components/studio/icon-button";
import { PanelSurface } from "@/components/studio/panel";
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
  isLeftPanelOpen: boolean;
  isRightPanelOpen: boolean;
  onOpenLibrary: (query: string) => void;
  onRedo: () => void;
  onToggleLeftPanel: () => void;
  onToggleRightPanel: () => void;
  onUndo: () => void;
  onViewportChange: (viewport: StudioViewport) => void;
  onZoomChange: (zoom: number) => void;
  viewport: StudioViewport;
  zoom: number;
}

const getAdjacentZoom = (zoom: number, direction: -1 | 1) => {
  const levels = [...STUDIO_ZOOM_LEVELS];
  const index =
    direction === 1
      ? levels.findIndex((level) => level > zoom)
      : levels.findLastIndex((level) => level < zoom);

  if (index < 0) {
    return direction === 1 ? (levels.at(-1) ?? zoom) : (levels[0] ?? zoom);
  }

  return levels[index] ?? zoom;
};

const ToolbarDivider = () => (
  <span
    aria-hidden="true"
    className="block h-5 w-px shrink-0 rounded-full bg-black/[.06]"
  />
);

export const Toolbar = ({
  canRedo,
  canUndo,
  isLeftPanelOpen,
  isRightPanelOpen,
  onOpenLibrary,
  onRedo,
  onToggleLeftPanel,
  onToggleRightPanel,
  onUndo,
  onViewportChange,
  onZoomChange,
  viewport,
  zoom,
}: ToolbarProps) => (
  <div className="pointer-events-none absolute bottom-2.5 left-1/2 z-[70] -translate-x-1/2">
    <PanelSurface className="pointer-events-auto flex w-auto items-center justify-start gap-1.5 rounded-lg p-1">
      <IconButton
        className="-mr-px"
        disabled={!canUndo}
        label="Undo"
        onClick={onUndo}
      >
        <Undo2 className="size-4" />
      </IconButton>
      <IconButton
        className="-mr-px"
        disabled={!canRedo}
        label="Redo"
        onClick={onRedo}
      >
        <Redo2 className="size-4" />
      </IconButton>
      <ToolbarDivider />
      <IconButton
        label="Zoom out"
        onClick={() => onZoomChange(getAdjacentZoom(zoom, -1))}
      >
        <ZoomOut className="size-4" />
      </IconButton>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className="inline-flex h-7 w-[5ch] shrink-0 items-center justify-center rounded-md font-mono text-[12px] tabular-nums text-neutral-700 transition-colors hover:bg-black/[.04]"
            onDoubleClick={() => onZoomChange(54)}
            title="Choose zoom · double-click to reset"
            type="button"
          >
            {zoom}%
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="center"
          className="min-w-28 rounded-lg p-1"
          side="top"
        >
          {STUDIO_ZOOM_LEVELS.map((value) => (
            <DropdownMenuItem
              className="rounded-md"
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
      <IconButton
        label="Zoom in"
        onClick={() => onZoomChange(getAdjacentZoom(zoom, 1))}
      >
        <ZoomIn className="size-4" />
      </IconButton>
      <ToolbarDivider />
      <IconButton
        active={viewport === "desktop"}
        label="Desktop artboard"
        onClick={() => onViewportChange("desktop")}
      >
        <Monitor className="size-4" />
      </IconButton>
      <IconButton
        active={viewport === "mobile"}
        label="Mobile artboard"
        onClick={() => onViewportChange("mobile")}
      >
        <Smartphone className="size-4" />
      </IconButton>
      <div className="hidden items-center gap-1.5 xl:flex">
        <ToolbarDivider />
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
      </div>
      <ToolbarDivider />
      <IconButton
        active={isLeftPanelOpen}
        label="Toggle component panel"
        onClick={onToggleLeftPanel}
      >
        <PanelLeft className="size-4" />
      </IconButton>
      <IconButton
        active={isRightPanelOpen}
        label="Toggle inspector"
        onClick={onToggleRightPanel}
      >
        <PanelRight className="size-4" />
      </IconButton>
    </PanelSurface>
  </div>
);
