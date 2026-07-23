import { FooterWithBackgroundImage } from "@/registry/bases/react-email/ui/marketing/footers/footer-with-background-image";
import type { FooterWithBackgroundImageVariant } from "@/registry/bases/react-email/ui/marketing/footers/footer-with-background-image";

export default function FooterWithBackgroundImageVariantTopImageAddressRightLogoExampleDemo() {
  const logoPosition = ("top-image-address-right-logo" as string).endsWith(
    "-right-logo"
  )
    ? "right"
    : "left";
  const componentVariant = ("top-image-address-right-logo" as string).replace(
    /-(left|right)-logo$/,
    ""
  ) as FooterWithBackgroundImageVariant;
  return (
    <FooterWithBackgroundImage
      {...FooterWithBackgroundImage.PreviewProps}
      logoPosition={logoPosition}
      variant={componentVariant}
    />
  );
}

FooterWithBackgroundImageVariantTopImageAddressRightLogoExampleDemo.PreviewHeight = 900;
