import { RollingStats } from "@/registry/bases/jsx-email/ui/marketing/stats/rolling-stats";
import type { RollingStatsVariant } from "@/registry/bases/jsx-email/ui/marketing/stats/rolling-stats";

export default function RollingStatsDemo({
  variant,
}: {
  variant?: RollingStatsVariant;
}) {
  return (
    <RollingStats
      {...RollingStats.PreviewProps}
      variant={variant ?? RollingStats.PreviewProps.variant}
    />
  );
}
