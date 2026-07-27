import { Timeline } from "@/registry/bases/mjml-react/components/marketing/timelines/timeline";

export default function TimelineLayoutBoxedVariantMutedRightItemsExampleDemo() {
  return (
    <Timeline
      layout="boxed"
      variant="muted-right"
      items={[{ title: "Initial release", version: "v1.0" }]}
    />
  );
}
