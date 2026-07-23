import { GridStats } from "@/registry/bases/mjml-react/ui/marketing/stats/grid-stats";

export default function GridStatsWithBorderLayoutBentoReversedExampleDemo() {
  return (
    <GridStats
      {...GridStats.PreviewProps}
      layout="bento-reversed"
      variant="bordered"
    />
  );
}
