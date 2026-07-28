import { Divider } from "@/registry/bases/mjml-react/components/ui-elements/spacing/divider";
import { emailAsset } from "@/registry/email-assets";

export default function DividerAlignLeftContentTypeIconButtonExampleDemo() {
  return (
    <Divider
      align="left"
      content={{
        action: { href: "https://example.com", label: "Continue" },
        iconSrc: emailAsset("logos/logo-stripe.png"),
        type: "icon-button",
      }}
    />
  );
}
