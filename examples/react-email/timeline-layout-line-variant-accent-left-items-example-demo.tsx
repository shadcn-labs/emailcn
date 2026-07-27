import { Timeline } from "@/registry/bases/react-email/components/marketing/timelines/timeline";

export default function TimelineLayoutLineVariantAccentLeftItemsExampleDemo() {
  return (
    <Timeline
      layout="line"
      variant="accent-left"
      items={[{ title: "Initial release", version: "v1.0" }]}
    />
  );
}
