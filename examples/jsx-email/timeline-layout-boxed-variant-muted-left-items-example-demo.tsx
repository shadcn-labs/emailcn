import { Timeline } from "@/registry/bases/jsx-email/components/marketing/timelines/timeline";

export default function TimelineLayoutBoxedVariantMutedLeftItemsExampleDemo() {
  return (
    <Timeline
      layout="boxed"
      variant="muted-left"
      items={[{ title: "Initial release", version: "v1.0" }]}
    />
  );
}
