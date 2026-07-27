import { UtilityFooter } from "@/registry/bases/react-email/components/marketing/footers/utility-footer";
import { emailAsset } from "@/registry/email-assets";

export default function UtilityFooterBackgroundImagePositionBottomVariantBottomImageContentLogoPositionLeftExampleDemo() {
  return (
    <UtilityFooter
      backgroundImage={{
        position: "bottom",
        src: emailAsset("images/image-landscape-1.jpg"),
      }}
      variant="bottom-image-content"
      logoPosition="left"
    />
  );
}
