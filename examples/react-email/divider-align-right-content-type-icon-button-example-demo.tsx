import { Divider } from "@/registry/bases/react-email/components/ui-elements/spacing/divider";

export default function DividerAlignRightContentTypeIconButtonExampleDemo() {
  return (
    <Divider
      align="right"
      content={{
        action: { href: "https://example.com", label: "Continue" },
        iconSrc:
          "https://emailcn.vercel.app/api/email-assets/logos/logo-stripe.png",
        type: "icon-button",
      }}
    />
  );
}
