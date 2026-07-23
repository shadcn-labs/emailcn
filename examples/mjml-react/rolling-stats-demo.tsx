import { RollingStats } from "@/registry/bases/mjml-react/ui/marketing/stats/rolling-stats";
import type { RollingStatsVariant } from "@/registry/bases/mjml-react/ui/marketing/stats/rolling-stats";

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
