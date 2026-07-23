import { SimpleStats } from "@/registry/bases/jsx-email/ui/marketing/stats/simple-stats";
import type { SimpleStatsVariant } from "@/registry/bases/jsx-email/ui/marketing/stats/simple-stats";

export default function SimpleStatsDemo({
  variant,
}: {
  variant?: SimpleStatsVariant;
}) {
  return (
    <SimpleStats
      {...SimpleStats.PreviewProps}
      variant={variant ?? SimpleStats.PreviewProps.variant}
    />
  );
}
