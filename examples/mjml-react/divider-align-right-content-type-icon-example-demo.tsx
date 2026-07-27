import { Divider } from "@/registry/bases/mjml-react/components/ui-elements/spacing/divider";
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
