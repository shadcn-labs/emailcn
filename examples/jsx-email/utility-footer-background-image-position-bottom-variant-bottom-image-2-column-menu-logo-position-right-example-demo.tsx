import { UtilityFooter } from "@/registry/bases/jsx-email/components/marketing/footers/utility-footer";
import { emailAsset } from "@/registry/email-assets";

export default function UtilityFooterBackgroundImagePositionBottomVariantBottomImage2ColumnMenuLogoPositionRightExampleDemo() {
  return (
    <UtilityFooter
      backgroundImage={{
        position: "bottom",
        src: emailAsset("images/image-landscape-1.jpg"),
      }}
      variant="bottom-image-2-column-menu"
      logoPosition="right"
    />
  );
}
