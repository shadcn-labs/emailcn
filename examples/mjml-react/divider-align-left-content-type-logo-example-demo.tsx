import { Divider } from "@/registry/bases/mjml-react/components/ui-elements/spacing/divider";

export default function DividerAlignLeftContentTypeLogoExampleDemo() {
  return (
    <Divider
      align="left"
      content={{
        image: {
          alt: "Logo",
          src: "https://emailcn.vercel.app/api/email-assets/logos/logo-stripe.png",
        },
        type: "logo",
      }}
    />
  );
}
