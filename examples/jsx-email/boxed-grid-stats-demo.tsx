import { GridStats } from "@/registry/bases/jsx-email/ui/marketing/stats/grid-stats";
import type { GridStatsLayout } from "@/registry/bases/jsx-email/ui/marketing/stats/grid-stats";

export default function BoxedGridStatsDemo({
  layout,
}: {
  layout?: GridStatsLayout;
}) {
  return (
    <GridStats
      {...GridStats.PreviewProps}
      layout={layout ?? GridStats.PreviewProps.layout}
      variant="boxed"
    />
  );
}
