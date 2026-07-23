import { FooterWithBackgroundImage } from "@/registry/bases/mjml-react/ui/marketing/footers/footer-with-background-image";
import type { FooterWithBackgroundImageVariant } from "@/registry/bases/mjml-react/ui/marketing/footers/footer-with-background-image";

export default function FooterWithBackgroundImageVariantBottomImage2ColumnMenuRightLogoExampleDemo() {
  const logoPosition = (
    "bottom-image-2-column-menu-right-logo" as string
  ).endsWith("-right-logo")
    ? "right"
    : "left";
  const componentVariant = (
    "bottom-image-2-column-menu-right-logo" as string
  ).replace(/-(left|right)-logo$/, "") as FooterWithBackgroundImageVariant;
  return (
    <FooterWithBackgroundImage
      {...FooterWithBackgroundImage.PreviewProps}
      logoPosition={logoPosition}
      variant={componentVariant}
    />
  );
}

FooterWithBackgroundImageVariantBottomImage2ColumnMenuRightLogoExampleDemo.PreviewHeight = 760;
