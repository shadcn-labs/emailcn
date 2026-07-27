import { UtilityFooter } from "@/registry/bases/jsx-email/components/marketing/footers/utility-footer";
import { emailAsset } from "@/registry/email-assets";

export default function UtilityFooterBackgroundImagePositionTopVariantTopImageAddressLogoPositionRightExampleDemo() {
  return (
    <UtilityFooter
      backgroundImage={{
        position: "top",
        src: emailAsset("images/image-landscape-1.jpg"),
      }}
      variant="top-image-address"
      logoPosition="right"
    />
  );
}
