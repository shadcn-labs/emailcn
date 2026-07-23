import { GridStats } from "@/registry/bases/mjml-react/ui/marketing/stats/grid-stats";

export default function BoxedGridStatsLayoutThreeColumnsExampleDemo() {
  return (
    <GridStats
      {...GridStats.PreviewProps}
      layout="three-columns"
      variant="boxed"
    />
  );
}
