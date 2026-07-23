import { GridStats } from "@/registry/bases/mjml-react/ui/marketing/stats/grid-stats";

export default function GridStatsWithAccentColumnLayoutBentoReversedExampleDemo() {
  return (
    <GridStats
      {...GridStats.PreviewProps}
      layout="bento-reversed"
      variant="accent-column"
    />
  );
}
