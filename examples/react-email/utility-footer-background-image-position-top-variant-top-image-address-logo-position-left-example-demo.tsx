import { UtilityFooter } from "@/registry/bases/react-email/components/marketing/footers/utility-footer";

export default function UtilityFooterBackgroundImagePositionTopVariantTopImageAddressLogoPositionLeftExampleDemo() {
  return (
    <UtilityFooter
      backgroundImage={{
        position: "top",
        src: "https://emailcn.vercel.app/api/email-assets/images/image-landscape-1.jpg",
      }}
      variant="top-image-address"
      logoPosition="left"
    />
  );
}
