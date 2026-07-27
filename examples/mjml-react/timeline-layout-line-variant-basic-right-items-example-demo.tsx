import { Timeline } from "@/registry/bases/mjml-react/components/marketing/timelines/timeline";

export default function TimelineLayoutLineVariantBasicRightItemsExampleDemo() {
  return (
    <Timeline
      layout="line"
      variant="basic-right"
      items={[{ title: "Initial release", version: "v1.0" }]}
    />
  );
}
