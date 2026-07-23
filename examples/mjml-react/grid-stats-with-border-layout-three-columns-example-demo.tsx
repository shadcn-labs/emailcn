import { GridStats } from "@/registry/bases/mjml-react/ui/marketing/stats/grid-stats";

export default function GridStatsWithBorderLayoutThreeColumnsExampleDemo() {
  return (
    <GridStats
      {...GridStats.PreviewProps}
      layout="three-columns"
      variant="bordered"
    />
  );
}
