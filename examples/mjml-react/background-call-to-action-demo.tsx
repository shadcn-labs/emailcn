import { BackgroundCallToAction } from "@/registry/bases/mjml-react/components/marketing/cta/background-call-to-action";
import { defaultTheme } from "@/registry/themes/default";

export default function BackgroundCallToActionDemo() {
  return (
    <BackgroundCallToAction
      width="flush"
      appearance="light"
      theme={defaultTheme}
    />
  );
}
