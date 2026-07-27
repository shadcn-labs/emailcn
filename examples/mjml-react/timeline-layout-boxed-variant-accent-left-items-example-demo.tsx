import { Timeline } from "@/registry/bases/mjml-react/components/marketing/timelines/timeline";

export default function TimelineLayoutBoxedVariantAccentLeftItemsExampleDemo() {
  return (
    <Timeline
      layout="boxed"
      variant="accent-left"
      items={[{ title: "Initial release", version: "v1.0" }]}
    />
  );
}
