import { Timeline } from "@/registry/bases/mjml-react/components/marketing/timelines/timeline";

export default function TimelineLayoutLineVariantBasicLeftItemsExampleDemo() {
  return (
    <Timeline
      layout="line"
      variant="basic-left"
      items={[{ title: "Initial release", version: "v1.0" }]}
    />
  );
}
