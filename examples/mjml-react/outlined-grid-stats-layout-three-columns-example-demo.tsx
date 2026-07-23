import { GridStats } from "@/registry/bases/mjml-react/ui/marketing/stats/grid-stats";

export default function OutlinedGridStatsLayoutThreeColumnsExampleDemo() {
  return (
    <GridStats
      {...GridStats.PreviewProps}
      layout="three-columns"
      variant="outlined"
    />
  );
}
