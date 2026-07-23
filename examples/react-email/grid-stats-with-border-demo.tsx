import { GridStats } from "@/registry/bases/react-email/ui/marketing/stats/grid-stats";
import type { GridStatsLayout } from "@/registry/bases/react-email/ui/marketing/stats/grid-stats";

export default function GridStatsWithBorderDemo({
  layout,
}: {
  layout?: GridStatsLayout;
}) {
  return (
    <GridStats
      {...GridStats.PreviewProps}
      layout={layout ?? GridStats.PreviewProps.layout}
      variant="bordered"
    />
  );
}
