import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Box,
  FlipHorizontal2,
  FlipVertical2,
  LayoutGrid,
  RotateCcw,
  RotateCw,
  Trash2,
} from "lucide-react";

import { IconButton } from "@/components/studio/icon-button";
import {
  InspectorRow,
  InspectorSection,
  ValueBox,
} from "@/components/studio/inspector-controls";
import { STUDIO_ARTBOARD_WIDTH } from "@/constants/studio";
import { cn } from "@/lib/utils";
import type { CanvasBlock } from "@/types/studio";

interface InspectorProps {
  block: CanvasBlock | null;
  index: number;
  onDelete: () => void;
  onUpdate: (patch: Partial<CanvasBlock>) => void;
}

export const Inspector = ({
  block,
  index,
  onDelete,
  onUpdate,
}: InspectorProps) => {
  if (!block) {
    return (
      <div className="flex min-h-60 flex-1 flex-col items-center justify-center px-8 text-center">
        <span className="flex size-9 items-center justify-center rounded-full bg-black/[.04]">
          <Box className="size-4 text-neutral-400" />
        </span>
        <p className="mt-3 text-[12px] font-medium text-neutral-900">
          Select a layer
        </p>
        <p className="mt-1 max-w-48 text-[11px] leading-4 text-neutral-500">
          Choose any section on the canvas to edit its layout and style.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-0 flex-1 overflow-y-auto">
      <InspectorSection title="Layout">
        <div className="space-y-2.5">
          <InspectorRow label="Padding">
            <div className="flex gap-1.5">
              <ValueBox
                min="0"
                onChange={(event) =>
                  onUpdate({ padding: Number(event.target.value) })
                }
                type="number"
                value={block.padding}
              />
              <IconButton className="size-7" label="Uniform padding">
                <LayoutGrid className="size-3.5" />
              </IconButton>
            </div>
          </InspectorRow>
          <InspectorRow label="Align">
            <div className="grid grid-cols-3 rounded-md bg-black/[.04] p-0.5">
              {(
                [
                  ["left", AlignLeft],
                  ["center", AlignCenter],
                  ["right", AlignRight],
                ] as const
              ).map(([value, Icon]) => (
                <IconButton
                  active={block.alignment === value}
                  className="h-6 w-full"
                  key={value}
                  label={`Align ${value}`}
                  onClick={() => onUpdate({ alignment: value })}
                >
                  <Icon className="size-3.5" />
                </IconButton>
              ))}
            </div>
          </InspectorRow>
        </div>
      </InspectorSection>

      <InspectorSection title="Layer">
        <div className="space-y-2.5">
          <InspectorRow label="Position">
            <div className="grid grid-cols-2 gap-1.5">
              <ValueBox prefix="X" readOnly value="0" />
              <ValueBox prefix="Y" readOnly value={index * 100} />
            </div>
          </InspectorRow>
          <InspectorRow label="Size">
            <div className="grid grid-cols-2 gap-1.5">
              <ValueBox prefix="W" readOnly value={STUDIO_ARTBOARD_WIDTH} />
              <ValueBox prefix="H" readOnly value={block.previewHeight} />
            </div>
          </InspectorRow>
          <InspectorRow label="Opacity">
            <ValueBox
              max="100"
              min="20"
              onChange={(event) =>
                onUpdate({ opacity: Number(event.target.value) })
              }
              type="number"
              value={block.opacity}
            />
          </InspectorRow>
        </div>
      </InspectorSection>

      <InspectorSection title="Styles">
        <div className="space-y-2.5">
          <InspectorRow label="Radius">
            <ValueBox
              min="0"
              onChange={(event) =>
                onUpdate({ radius: Number(event.target.value) })
              }
              type="number"
              value={block.radius}
            />
          </InspectorRow>
          <InspectorRow label="Border">
            <div className="flex gap-1.5">
              <ValueBox
                min="0"
                onChange={(event) =>
                  onUpdate({ borderWidth: Number(event.target.value) })
                }
                type="number"
                value={block.borderWidth}
              />
              <label
                className="size-7 shrink-0 cursor-pointer rounded-md border border-black/[.08]"
                style={{ backgroundColor: block.borderColor }}
                title="Border color"
              >
                <span className="sr-only">Border color</span>
                <input
                  className="sr-only"
                  onChange={(event) =>
                    onUpdate({ borderColor: event.target.value })
                  }
                  type="color"
                  value={block.borderColor}
                />
              </label>
            </div>
          </InspectorRow>
          <InspectorRow label="Shadow">
            <button
              className={cn(
                "h-7 rounded-md bg-black/[.04] px-2 text-left text-[11px] text-neutral-500",
                block.shadow && "bg-neutral-900 text-white"
              )}
              onClick={() => onUpdate({ shadow: !block.shadow })}
              type="button"
            >
              {block.shadow ? "Enabled" : "Add…"}
            </button>
          </InspectorRow>
          <InspectorRow label="Fill">
            <div className="flex gap-1.5">
              <ValueBox
                className="uppercase"
                onChange={(event) =>
                  onUpdate({ background: event.target.value })
                }
                value={block.background}
              />
              <label
                className="size-7 shrink-0 cursor-pointer rounded-md border border-black/[.08]"
                style={{ backgroundColor: block.background }}
                title="Fill color"
              >
                <span className="sr-only">Fill color</span>
                <input
                  className="sr-only"
                  onChange={(event) =>
                    onUpdate({ background: event.target.value })
                  }
                  type="color"
                  value={block.background}
                />
              </label>
            </div>
          </InspectorRow>
        </div>
      </InspectorSection>

      <InspectorSection title="Transforms">
        <div className="space-y-2.5">
          <InspectorRow label="Rotate">
            <div className="flex gap-1.5">
              <ValueBox
                onChange={(event) =>
                  onUpdate({ rotation: Number(event.target.value) })
                }
                type="number"
                value={block.rotation}
              />
              <IconButton
                className="size-7"
                label="Rotate left"
                onClick={() => onUpdate({ rotation: block.rotation - 90 })}
              >
                <RotateCcw className="size-3.5" />
              </IconButton>
              <IconButton
                className="size-7"
                label="Rotate right"
                onClick={() => onUpdate({ rotation: block.rotation + 90 })}
              >
                <RotateCw className="size-3.5" />
              </IconButton>
            </div>
          </InspectorRow>
          <InspectorRow label="Flip">
            <div className="flex justify-end gap-1.5">
              <IconButton
                active={block.flipX}
                className="size-7"
                label="Flip horizontally"
                onClick={() => onUpdate({ flipX: !block.flipX })}
              >
                <FlipHorizontal2 className="size-3.5" />
              </IconButton>
              <IconButton
                active={block.flipY}
                className="size-7"
                label="Flip vertically"
                onClick={() => onUpdate({ flipY: !block.flipY })}
              >
                <FlipVertical2 className="size-3.5" />
              </IconButton>
            </div>
          </InspectorRow>
        </div>
      </InspectorSection>

      <div className="border-t border-black/[.06] p-3">
        <button
          className="flex h-8 w-full items-center justify-center gap-2 rounded-md border border-red-500/20 text-[11px] font-medium text-red-600 transition-colors hover:bg-red-500/[.06]"
          onClick={onDelete}
          type="button"
        >
          <Trash2 className="size-3.5" />
          Delete layer
        </button>
      </div>
    </div>
  );
};
