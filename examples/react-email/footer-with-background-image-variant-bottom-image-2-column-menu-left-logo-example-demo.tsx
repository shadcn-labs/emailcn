import { FooterWithBackgroundImage } from "@/registry/bases/react-email/ui/marketing/footers/footer-with-background-image";
import type { FooterWithBackgroundImageVariant } from "@/registry/bases/react-email/ui/marketing/footers/footer-with-background-image";

export default function FooterWithBackgroundImageVariantBottomImage2ColumnMenuLeftLogoExampleDemo() {
  const logoPosition = (
    "bottom-image-2-column-menu-left-logo" as string
  ).endsWith("-right-logo")
    ? "right"
    : "left";
  const componentVariant = (
    "bottom-image-2-column-menu-left-logo" as string
  ).replace(/-(left|right)-logo$/, "") as FooterWithBackgroundImageVariant;
  return (
    <FooterWithBackgroundImage
      {...FooterWithBackgroundImage.PreviewProps}
      logoPosition={logoPosition}
      variant={componentVariant}
    />
  );
}

FooterWithBackgroundImageVariantBottomImage2ColumnMenuLeftLogoExampleDemo.PreviewHeight = 760;
