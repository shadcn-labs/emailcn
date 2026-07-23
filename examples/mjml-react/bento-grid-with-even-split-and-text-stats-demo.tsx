import type { ComponentProps } from "react";

import { BentoGridWithEvenSplitAndTextStats } from "@/registry/bases/mjml-react/ui/marketing/bento-grids/bento-grid-with-even-split-and-text-stats";

export default function BentoGridWithEvenSplitAndTextStatsDemo({
  variant,
}: {
  variant?: ComponentProps<
    typeof BentoGridWithEvenSplitAndTextStats
  >["variant"];
}) {
  return (
    <BentoGridWithEvenSplitAndTextStats
      {...BentoGridWithEvenSplitAndTextStats.PreviewProps}
      variant={variant}
    />
  );
}
