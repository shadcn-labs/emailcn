import { GridStats } from "@/registry/bases/react-email/ui/marketing/stats/grid-stats";

export default function GridStatsWithAccentColumnLayoutBentoExampleDemo() {
  return (
    <GridStats
      {...GridStats.PreviewProps}
      layout="bento"
      variant="accent-column"
    />
  );
}
