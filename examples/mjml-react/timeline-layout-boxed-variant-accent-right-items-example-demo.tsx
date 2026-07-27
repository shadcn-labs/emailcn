import { Timeline } from "@/registry/bases/mjml-react/components/marketing/timelines/timeline";

export default function TimelineLayoutBoxedVariantAccentRightItemsExampleDemo() {
  return (
    <Timeline
      layout="boxed"
      variant="accent-right"
      items={[{ title: "Initial release", version: "v1.0" }]}
    />
  );
}
