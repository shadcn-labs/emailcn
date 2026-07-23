import { GridStats } from "@/registry/bases/jsx-email/ui/marketing/stats/grid-stats";

export default function GridStatsWithBorderLayoutBentoReversedExampleDemo() {
  return (
    <GridStats
      {...GridStats.PreviewProps}
      layout="bento-reversed"
      variant="bordered"
    />
  );
}
