import { Timeline } from "@/registry/bases/mjml-react/components/marketing/timelines/timeline";

export default function TimelineLayoutBoxedVariantBasicRightItemsExampleDemo() {
  return (
    <Timeline
      layout="boxed"
      variant="basic-right"
      items={[{ title: "Initial release", version: "v1.0" }]}
    />
  );
}
