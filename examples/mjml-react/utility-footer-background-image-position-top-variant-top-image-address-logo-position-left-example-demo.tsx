import { UtilityFooter } from "@/registry/bases/mjml-react/components/marketing/footers/utility-footer";
import { emailAsset } from "@/registry/email-assets";

export default function UtilityFooterBackgroundImagePositionTopVariantTopImageAddressLogoPositionLeftExampleDemo() {
  return (
    <UtilityFooter
      backgroundImage={{
        position: "top",
        src: emailAsset("images/image-landscape-1.jpg"),
      }}
      variant="top-image-address"
      logoPosition="left"
    />
  );
}
