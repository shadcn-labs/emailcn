import { Divider } from "@/registry/bases/react-email/components/ui-elements/spacing/divider";

export default function DividerAlignLeftContentTypeIconExampleDemo() {
  return (
    <Divider
      align="left"
      content={{
        src: "https://emailcn.vercel.app/api/email-assets/logos/logo-stripe.png",
        type: "icon",
      }}
    />
  );
}
