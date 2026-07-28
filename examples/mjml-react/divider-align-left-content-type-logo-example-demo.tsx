import { Divider } from "@/registry/bases/mjml-react/components/ui-elements/spacing/divider";
import { emailAsset } from "@/registry/email-assets";

export default function DividerAlignLeftContentTypeLogoExampleDemo() {
  return (
    <Divider
      align="left"
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
