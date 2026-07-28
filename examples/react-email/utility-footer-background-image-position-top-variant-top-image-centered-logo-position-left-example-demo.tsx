import { UtilityFooter } from "@/registry/bases/react-email/components/marketing/footers/utility-footer";
import { emailAsset } from "@/registry/email-assets";

export default function UtilityFooterBackgroundImagePositionTopVariantTopImageCenteredLogoPositionLeftExampleDemo() {
  return (
    <UtilityFooter
      backgroundImage={{
        position: "top",
        src: emailAsset("images/image-landscape-1.jpg"),
      }}
      variant="top-image-centered"
      logoPosition="left"
    />
  );
}
