import { Divider } from "@/registry/bases/jsx-email/components/ui-elements/spacing/divider";
import { emailAsset } from "@/registry/email-assets";

export default function DividerAlignCenterContentTypeIconExampleDemo() {
  return (
    <Divider
      align="center"
      content={{
        src: emailAsset("logos/logo-stripe.png"),
        type: "icon",
      }}
    />
  );
}
