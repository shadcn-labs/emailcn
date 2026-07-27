import { Divider } from "@/registry/bases/mjml-react/components/ui-elements/spacing/divider";

export default function DividerAlignCenterContentTypeIconExampleDemo() {
  return (
    <Divider
      align="center"
      content={{
        src: "https://emailcn.vercel.app/api/email-assets/logos/logo-stripe.png",
        type: "icon",
      }}
    />
  );
}
