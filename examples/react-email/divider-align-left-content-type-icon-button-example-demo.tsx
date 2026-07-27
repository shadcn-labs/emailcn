import { Divider } from "@/registry/bases/react-email/components/ui-elements/spacing/divider";

export default function DividerAlignLeftContentTypeIconButtonExampleDemo() {
  return (
    <Divider
      align="left"
      content={{
        action: { href: "https://example.com", label: "Continue" },
        iconSrc:
          "https://emailcn.vercel.app/api/email-assets/logos/logo-stripe.png",
        type: "icon-button",
      }}
    />
  );
}
