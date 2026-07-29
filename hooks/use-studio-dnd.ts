"use client";

import {
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import type { DragEndEvent, DragStartEvent } from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { useCallback, useState } from "react";

import { STUDIO_CANVAS_ID } from "@/constants/studio";
import { getCanvasInsertIndex, moveBlock } from "@/lib/studio/blocks";
import type {
  ActiveDrag,
  CanvasBlock,
  StudioCatalogItem,
} from "@/types/studio";

interface UseStudioDndOptions {
  addItem: (item: StudioCatalogItem, index?: number) => void;
  blocks: CanvasBlock[];
  commitBlocks: (blocks: CanvasBlock[]) => void;
}

export const useStudioDnd = ({
  addItem,
  blocks,
  commitBlocks,
}: UseStudioDndOptions) => {
  const [activeDrag, setActiveDrag] = useState<ActiveDrag | null>(null);
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = useCallback(
    ({ active }: DragStartEvent) => {
      const type = active.data.current?.type as ActiveDrag["type"] | undefined;
      if (type === "library") {
        setActiveDrag({
          item: active.data.current?.item as StudioCatalogItem,
          type,
        });
        return;
      }
      const block = blocks.find((candidate) => candidate.id === active.id);
      if (block) {
        setActiveDrag({ block, type: "canvas" });
      }
    },
    [blocks]
  );

  const handleDragEnd = useCallback(
    ({ active, over }: DragEndEvent) => {
      setActiveDrag(null);
      if (!over) {
        return;
      }
      const type = active.data.current?.type as ActiveDrag["type"] | undefined;
      if (type === "library") {
        const item = active.data.current?.item as StudioCatalogItem | undefined;
        if (item) {
          addItem(
            item,
            getCanvasInsertIndex(blocks, over.id, STUDIO_CANVAS_ID)
          );
        }
        return;
      }
      const oldIndex = blocks.findIndex((block) => block.id === active.id);
      const newIndex = blocks.findIndex((block) => block.id === over.id);
      const nextBlocks = moveBlock(blocks, oldIndex, newIndex);
      if (nextBlocks !== blocks) {
        commitBlocks(nextBlocks);
      }
    },
    [addItem, blocks, commitBlocks]
  );

  const handleDragCancel = useCallback(() => setActiveDrag(null), []);

  return {
    activeDrag,
    collisionDetection: closestCenter,
    handleDragCancel,
    handleDragEnd,
    handleDragStart,
    sensors,
  };
};
