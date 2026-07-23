import { StackedStats } from "@/registry/bases/mjml-react/ui/marketing/stats/stacked-stats";
import type { StackedStatsVariant } from "@/registry/bases/mjml-react/ui/marketing/stats/stacked-stats";

export default function StackedStatsDemo({
  variant,
}: {
  variant?: StackedStatsVariant;
}) {
  return (
    <StackedStats
      {...StackedStats.PreviewProps}
      variant={variant ?? StackedStats.PreviewProps.variant}
    />
  );
}
