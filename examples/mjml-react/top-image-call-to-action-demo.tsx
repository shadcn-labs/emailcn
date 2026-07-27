import { TopImageCallToAction } from "@/registry/bases/mjml-react/components/marketing/cta/top-image-call-to-action";
import { defaultTheme } from "@/registry/themes/default";

export default function TopImageCallToActionDemo() {
  return (
    <TopImageCallToAction
      description="See the latest improvements, workflows, and resources in one place."
      heading="Everything new this month"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
