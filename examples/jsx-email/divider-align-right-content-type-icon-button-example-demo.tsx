import { Divider } from "@/registry/bases/jsx-email/components/ui-elements/spacing/divider";
import { emailAsset } from "@/registry/email-assets";

export default function DividerAlignRightContentTypeIconButtonExampleDemo() {
  return (
    <Divider
      align="right"
      content={{
        action: { href: "https://example.com", label: "Continue" },
        iconSrc: emailAsset("logos/logo-stripe.png"),
        type: "icon-button",
      }}
    />
  );
}
