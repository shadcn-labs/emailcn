import { FooterWithBackgroundImage } from "@/registry/bases/mjml-react/ui/marketing/footers/footer-with-background-image";
import type { FooterWithBackgroundImageVariant } from "@/registry/bases/mjml-react/ui/marketing/footers/footer-with-background-image";

export default function FooterWithBackgroundImageVariantTopImage3ColumnMenuRightLogoExampleDemo() {
  const logoPosition = (
    "top-image-3-column-menu-right-logo" as string
  ).endsWith("-right-logo")
    ? "right"
    : "left";
  const componentVariant = (
    "top-image-3-column-menu-right-logo" as string
  ).replace(/-(left|right)-logo$/, "") as FooterWithBackgroundImageVariant;
  return (
    <FooterWithBackgroundImage
      {...FooterWithBackgroundImage.PreviewProps}
      logoPosition={logoPosition}
      variant={componentVariant}
    />
  );
}

FooterWithBackgroundImageVariantTopImage3ColumnMenuRightLogoExampleDemo.PreviewHeight = 900;
