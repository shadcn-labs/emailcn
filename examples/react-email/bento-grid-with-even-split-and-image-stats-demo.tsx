import type { ComponentProps } from "react";

import { BentoGridWithEvenSplitAndImageStats } from "@/registry/bases/react-email/ui/marketing/bento-grids/bento-grid-with-even-split-and-image-stats";

export default function BentoGridWithEvenSplitAndImageStatsDemo({
  variant,
}: {
  variant?: ComponentProps<
    typeof BentoGridWithEvenSplitAndImageStats
  >["variant"];
}) {
  return (
    <BentoGridWithEvenSplitAndImageStats
      {...BentoGridWithEvenSplitAndImageStats.PreviewProps}
      variant={variant}
    />
  );
}
