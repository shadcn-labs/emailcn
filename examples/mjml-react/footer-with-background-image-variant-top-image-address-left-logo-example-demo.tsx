import { FooterWithBackgroundImage } from "@/registry/bases/mjml-react/ui/marketing/footers/footer-with-background-image";
import type { FooterWithBackgroundImageVariant } from "@/registry/bases/mjml-react/ui/marketing/footers/footer-with-background-image";

export default function FooterWithBackgroundImageVariantTopImageAddressLeftLogoExampleDemo() {
  const logoPosition = ("top-image-address-left-logo" as string).endsWith(
    "-right-logo"
  )
    ? "right"
    : "left";
  const componentVariant = ("top-image-address-left-logo" as string).replace(
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

FooterWithBackgroundImageVariantTopImageAddressLeftLogoExampleDemo.PreviewHeight = 900;
