import type { ComponentProps } from "react";

import { BentoGridWith3ColumnsAndEvenSplitImageStats } from "@/registry/bases/react-email/ui/marketing/bento-grids/bento-grid-with-3-columns-and-even-split-image-stats";

export default function BentoGridWith3ColumnsAndEvenSplitImageStatsDemo({
  variant,
}: {
  variant?: ComponentProps<
    typeof BentoGridWith3ColumnsAndEvenSplitImageStats
  >["variant"];
}) {
  return (
    <BentoGridWith3ColumnsAndEvenSplitImageStats
      {...BentoGridWith3ColumnsAndEvenSplitImageStats.PreviewProps}
      variant={variant}
    />
  );
}
