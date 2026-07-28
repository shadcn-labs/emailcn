import { Timeline } from "@/registry/bases/react-email/components/marketing/timelines/timeline";

export default function TimelineLayoutLineVariantMutedLeftItemsExampleDemo() {
  return (
    <Timeline
      layout="line"
      variant="muted-left"
      items={[{ title: "Initial release", version: "v1.0" }]}
    />
  );
}
