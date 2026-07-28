import { Timeline } from "@/registry/bases/mjml-react/components/marketing/timelines/timeline";
import { defaultTheme } from "@/registry/themes/default";

export default function TimelineDemo() {
  return (
    <Timeline
      layout="line"
      alignment="left"
      appearance="basic"
      theme={defaultTheme}
    />
  );
}
