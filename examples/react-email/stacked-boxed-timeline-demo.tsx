import { StackedTimeline } from "@/registry/bases/react-email/ui/marketing/timelines/stacked-timeline";
import type { StackedTimelineVariant } from "@/registry/bases/react-email/ui/marketing/timelines/stacked-timeline";

export default function StackedBoxedTimelineDemo({
  variant,
}: {
  variant?: StackedTimelineVariant;
}) {
  return (
    <StackedTimeline
      {...StackedTimeline.PreviewProps}
      layout="boxed"
      variant={variant ?? "muted-left"}
    />
  );
}
