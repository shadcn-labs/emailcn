import { Timeline } from "@/registry/bases/jsx-email/components/marketing/timelines/timeline";

export default function TimelineLayoutBoxedVariantBasicRightItemsExampleDemo() {
  return (
    <Timeline
      layout="boxed"
      variant="basic-right"
      items={[{ title: "Initial release", version: "v1.0" }]}
    />
  );
}
