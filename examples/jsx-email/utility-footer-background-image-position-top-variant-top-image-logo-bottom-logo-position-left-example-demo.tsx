import { UtilityFooter } from "@/registry/bases/jsx-email/components/marketing/footers/utility-footer";

export default function UtilityFooterBackgroundImagePositionTopVariantTopImageLogoBottomLogoPositionLeftExampleDemo() {
  return (
    <UtilityFooter
      backgroundImage={{
        position: "top",
        src: "https://emailcn.vercel.app/api/email-assets/images/image-landscape-1.jpg",
      }}
      variant="top-image-logo-bottom"
      logoPosition="left"
    />
  );
}
