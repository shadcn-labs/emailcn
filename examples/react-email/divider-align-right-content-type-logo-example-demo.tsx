import { Divider } from "@/registry/bases/react-email/components/ui-elements/spacing/divider";

export default function DividerAlignRightContentTypeLogoExampleDemo() {
  return (
    <Divider
      align="right"
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
