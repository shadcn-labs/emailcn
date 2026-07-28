import { Timeline } from "@/registry/bases/jsx-email/components/marketing/timelines/timeline";

export default function TimelineLayoutBoxedVariantBasicLeftItemsExampleDemo() {
  return (
    <Timeline
      layout="boxed"
      variant="basic-left"
      items={[{ title: "Initial release", version: "v1.0" }]}
    />
  );
}
