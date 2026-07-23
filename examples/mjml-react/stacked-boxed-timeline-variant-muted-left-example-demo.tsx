import { StackedTimeline } from "@/registry/bases/mjml-react/ui/marketing/timelines/stacked-timeline";

export default function StackedBoxedTimelineVariantMutedLeftExampleDemo() {
  return (
    <StackedTimeline
      {...StackedTimeline.PreviewProps}
      layout="boxed"
      variant="muted-left"
    />
  );
}
