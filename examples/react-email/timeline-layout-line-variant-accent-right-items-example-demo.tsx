import { Timeline } from "@/registry/bases/react-email/components/marketing/timelines/timeline";

export default function TimelineLayoutLineVariantAccentRightItemsExampleDemo() {
  return (
    <Timeline
      layout="line"
      variant="accent-right"
      items={[{ title: "Initial release", version: "v1.0" }]}
    />
  );
}
