import { OverlayStats } from "@/registry/bases/mjml-react/ui/marketing/stats/overlay-stats";
import type { OverlayStatsVariant } from "@/registry/bases/mjml-react/ui/marketing/stats/overlay-stats";

export default function OverlayStatsDemo({
  variant,
}: {
  variant?: OverlayStatsVariant;
}) {
  return (
    <OverlayStats
      {...OverlayStats.PreviewProps}
      variant={variant ?? OverlayStats.PreviewProps.variant}
    />
  );
}
