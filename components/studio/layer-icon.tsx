import { Box, ImageIcon, Type } from "lucide-react";

import type { CanvasBlock } from "@/types/studio";

export const LayerIcon = ({ block }: { block: CanvasBlock }) => {
  if (block.category === "Elements") {
    return <Type className="mr-2 size-4 shrink-0 text-neutral-500" />;
  }
  if (block.family === "Images") {
    return <ImageIcon className="mr-2 size-4 shrink-0 text-neutral-500" />;
  }
  return <Box className="mr-2 size-4 shrink-0 text-neutral-500" />;
};
