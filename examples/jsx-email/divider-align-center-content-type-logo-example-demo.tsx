import { Divider } from "@/registry/bases/jsx-email/components/ui-elements/spacing/divider";
import { emailAsset } from "@/registry/email-assets";

export default function DividerAlignCenterContentTypeLogoExampleDemo() {
  return (
    <Divider
      align="center"
      content={{
        image: {
          alt: "Logo",
          src: emailAsset("logos/logo-stripe.png"),
        },
        type: "logo",
      }}
    />
  );
}
