import { StackedTimeline } from "@/registry/bases/react-email/ui/marketing/timelines/stacked-timeline";
import type { StackedTimelineVariant } from "@/registry/bases/react-email/ui/marketing/timelines/stacked-timeline";

export default function StackedTimelineDemo({
  variant,
}: {
  variant?: StackedTimelineVariant;
}) {
  return (
    <StackedTimeline
      {...StackedTimeline.PreviewProps}
      variant={variant ?? StackedTimeline.PreviewProps.variant}
    />
  );
}
