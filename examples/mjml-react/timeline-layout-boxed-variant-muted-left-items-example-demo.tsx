import { Timeline } from "@/registry/bases/mjml-react/components/marketing/timelines/timeline";

export default function TimelineLayoutBoxedVariantMutedLeftItemsExampleDemo() {
  return (
    <Timeline
      layout="boxed"
      variant="muted-left"
      items={[{ title: "Initial release", version: "v1.0" }]}
    />
  );
}
