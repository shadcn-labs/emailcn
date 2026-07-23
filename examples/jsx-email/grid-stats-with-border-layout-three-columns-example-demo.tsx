import { GridStats } from "@/registry/bases/jsx-email/ui/marketing/stats/grid-stats";

export default function GridStatsWithBorderLayoutThreeColumnsExampleDemo() {
  return (
    <GridStats
      {...GridStats.PreviewProps}
      layout="three-columns"
      variant="bordered"
    />
  );
}
