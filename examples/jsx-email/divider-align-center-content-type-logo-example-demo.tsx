import { Divider } from "@/registry/bases/jsx-email/components/ui-elements/spacing/divider";

export default function DividerAlignCenterContentTypeLogoExampleDemo() {
  return (
    <Divider
      align="center"
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
