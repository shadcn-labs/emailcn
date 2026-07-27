import { Timeline } from "@/registry/bases/react-email/components/marketing/timelines/timeline";

export default function TimelineLayoutBoxedVariantMutedRightItemsExampleDemo() {
  return (
    <Timeline
      layout="boxed"
      variant="muted-right"
      items={[{ title: "Initial release", version: "v1.0" }]}
    />
  );
}
