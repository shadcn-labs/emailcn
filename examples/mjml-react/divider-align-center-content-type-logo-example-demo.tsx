import { Divider } from "@/registry/bases/mjml-react/components/ui-elements/spacing/divider";
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
