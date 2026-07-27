import { Divider } from "@/registry/bases/jsx-email/components/ui-elements/spacing/divider";

export default function DividerAlignRightContentTypeIconExampleDemo() {
  return (
    <Divider
      align="right"
      content={{
        src: "https://emailcn.vercel.app/api/email-assets/logos/logo-stripe.png",
        type: "icon",
      }}
    />
  );
}
