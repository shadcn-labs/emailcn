import { FooterWithBackgroundImage } from "@/registry/bases/mjml-react/ui/marketing/footers/footer-with-background-image";
import type { FooterWithBackgroundImageVariant } from "@/registry/bases/mjml-react/ui/marketing/footers/footer-with-background-image";

export default function FooterWithBackgroundImageVariantTopImageLogoBottomExampleDemo() {
  const logoPosition = ("top-image-logo-bottom" as string).endsWith(
    "-right-logo"
  )
    ? "right"
    : "left";
  const componentVariant = ("top-image-logo-bottom" as string).replace(
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

FooterWithBackgroundImageVariantTopImageLogoBottomExampleDemo.PreviewHeight = 900;
