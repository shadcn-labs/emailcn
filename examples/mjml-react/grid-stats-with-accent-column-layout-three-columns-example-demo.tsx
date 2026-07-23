import { GridStats } from "@/registry/bases/mjml-react/ui/marketing/stats/grid-stats";

export default function GridStatsWithAccentColumnLayoutThreeColumnsExampleDemo() {
  return (
    <GridStats
      {...GridStats.PreviewProps}
      layout="three-columns"
      variant="accent-column"
    />
  );
}
