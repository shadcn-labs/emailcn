import { Progress } from "@/registry/bases/jsx-email/components/ui-elements/progress-bars/progress";
import { defaultTheme } from "@/registry/themes/default";

export default function ProgressDemo() {
  return (
    <Progress
      layout="single"
      padding="none"
      content="minimal"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
