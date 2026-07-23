import type { ComponentProps } from "react";

import { BentoGridWith3ColumnsAndEvenSplitTextStats } from "@/registry/bases/react-email/ui/marketing/bento-grids/bento-grid-with-3-columns-and-even-split-text-stats";

export default function BentoGridWith3ColumnsAndEvenSplitTextStatsDemo({
  variant,
}: {
  variant?: ComponentProps<
    typeof BentoGridWith3ColumnsAndEvenSplitTextStats
  >["variant"];
}) {
  return (
    <BentoGridWith3ColumnsAndEvenSplitTextStats
      {...BentoGridWith3ColumnsAndEvenSplitTextStats.PreviewProps}
      variant={variant}
    />
  );
}
