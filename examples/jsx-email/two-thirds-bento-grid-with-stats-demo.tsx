import type { ComponentProps } from "react";

import { TwoThirdsBentoGridWithStats } from "@/registry/bases/jsx-email/ui/marketing/bento-grids/two-thirds-bento-grid-with-stats";

export default function TwoThirdsBentoGridWithStatsDemo({
  variant,
}: {
  variant?: ComponentProps<typeof TwoThirdsBentoGridWithStats>["variant"];
}) {
  return (
    <TwoThirdsBentoGridWithStats
      {...TwoThirdsBentoGridWithStats.PreviewProps}
      variant={variant}
    />
  );
}
