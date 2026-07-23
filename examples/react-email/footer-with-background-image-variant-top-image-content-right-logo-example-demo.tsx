import { FooterWithBackgroundImage } from "@/registry/bases/react-email/ui/marketing/footers/footer-with-background-image";
import type { FooterWithBackgroundImageVariant } from "@/registry/bases/react-email/ui/marketing/footers/footer-with-background-image";

export default function FooterWithBackgroundImageVariantTopImageContentRightLogoExampleDemo() {
  const logoPosition = ("top-image-content-right-logo" as string).endsWith(
    "-right-logo"
  )
    ? "right"
    : "left";
  const componentVariant = ("top-image-content-right-logo" as string).replace(
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

FooterWithBackgroundImageVariantTopImageContentRightLogoExampleDemo.PreviewHeight = 900;
