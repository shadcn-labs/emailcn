import { StackedStats } from "@/registry/bases/jsx-email/ui/marketing/stats/stacked-stats";
import type { StackedStatsVariant } from "@/registry/bases/jsx-email/ui/marketing/stats/stacked-stats";

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
