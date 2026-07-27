import { UtilityFooter } from "@/registry/bases/mjml-react/components/marketing/footers/utility-footer";
import { emailAsset } from "@/registry/email-assets";

export default function UtilityFooterBackgroundImagePositionBottomVariantBottomImage2ColumnMenuLogoPositionLeftExampleDemo() {
  return (
    <UtilityFooter
      backgroundImage={{
        position: "bottom",
        src: emailAsset("images/image-landscape-1.jpg"),
      }}
      variant="bottom-image-2-column-menu"
      logoPosition="left"
    />
  );
}
