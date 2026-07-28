import { Divider } from "@/registry/bases/react-email/components/ui-elements/spacing/divider";
import { emailAsset } from "@/registry/email-assets";

export default function DividerAlignRightContentTypeIconExampleDemo() {
  return (
    <Divider
      align="right"
      content={{
        src: emailAsset("logos/logo-stripe.png"),
        type: "icon",
      }}
    />
  );
}
