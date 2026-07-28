import { CallToAction } from "@/registry/bases/mjml-react/components/marketing/cta/call-to-action";
import { defaultTheme } from "@/registry/themes/default";

export default function CallToActionDemo() {
  return (
    <CallToAction
      description="A focused launch message paired with one clear next step."
      heading="Turn product updates into momentum"
      theme={defaultTheme}
    />
  );
}
