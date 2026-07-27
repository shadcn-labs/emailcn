import { Timeline } from "@/registry/bases/jsx-email/components/marketing/timelines/timeline";

export default function TimelineLayoutLineVariantMutedRightItemsExampleDemo() {
  return (
    <Timeline
      layout="line"
      variant="muted-right"
      items={[{ title: "Initial release", version: "v1.0" }]}
    />
  );
}
