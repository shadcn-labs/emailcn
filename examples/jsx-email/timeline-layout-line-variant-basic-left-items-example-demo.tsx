import { Timeline } from "@/registry/bases/jsx-email/components/marketing/timelines/timeline";

export default function TimelineLayoutLineVariantBasicLeftItemsExampleDemo() {
  return (
    <Timeline
      layout="line"
      variant="basic-left"
      items={[{ title: "Initial release", version: "v1.0" }]}
    />
  );
}
