import { BackgroundCallToAction } from "@/registry/bases/react-email/components/marketing/cta/background-call-to-action";
import { defaultTheme } from "@/registry/themes/default";

export default function BackgroundCallToActionDemo() {
  return (
    <BackgroundCallToAction
      width="flush"
      appearance="light"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
