import { StackedTimeline } from "@/registry/bases/jsx-email/ui/marketing/timelines/stacked-timeline";

export default function StackedBoxedTimelineVariantBasicLeftExampleDemo() {
  return (
    <StackedTimeline
      {...StackedTimeline.PreviewProps}
      layout="boxed"
      variant="basic-left"
    />
  );
}
