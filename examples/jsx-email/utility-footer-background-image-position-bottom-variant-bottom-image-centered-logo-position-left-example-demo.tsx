import { UtilityFooter } from "@/registry/bases/jsx-email/components/marketing/footers/utility-footer";

export default function UtilityFooterBackgroundImagePositionBottomVariantBottomImageCenteredLogoPositionLeftExampleDemo() {
  return (
    <UtilityFooter
      backgroundImage={{
        position: "bottom",
        src: "https://emailcn.vercel.app/api/email-assets/images/image-landscape-1.jpg",
      }}
      variant="bottom-image-centered"
      logoPosition="left"
    />
  );
}
