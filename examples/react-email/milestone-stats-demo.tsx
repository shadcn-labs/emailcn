import { MilestoneStats } from "@/registry/bases/react-email/ui/marketing/stats/milestone-stats";
import type { MilestoneStatsVariant } from "@/registry/bases/react-email/ui/marketing/stats/milestone-stats";

export default function MilestoneStatsDemo({
  variant,
}: {
  variant?: MilestoneStatsVariant;
}) {
  return (
    <MilestoneStats
      {...MilestoneStats.PreviewProps}
      variant={variant ?? MilestoneStats.PreviewProps.variant}
    />
  );
}
