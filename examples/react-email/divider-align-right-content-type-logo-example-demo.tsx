import { Divider } from "@/registry/bases/react-email/components/ui-elements/spacing/divider";
import { emailAsset } from "@/registry/email-assets";

export default function DividerAlignRightContentTypeLogoExampleDemo() {
  return (
    <Divider
      align="right"
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
