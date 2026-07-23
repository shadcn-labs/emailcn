import { FooterWithBackgroundImage } from "@/registry/bases/jsx-email/ui/marketing/footers/footer-with-background-image";
import type { FooterWithBackgroundImageVariant } from "@/registry/bases/jsx-email/ui/marketing/footers/footer-with-background-image";

export default function FooterWithBackgroundImageVariantBottomImage3ColumnMenuLeftLogoExampleDemo() {
  const logoPosition = (
    "bottom-image-3-column-menu-left-logo" as string
  ).endsWith("-right-logo")
    ? "right"
    : "left";
  const componentVariant = (
    "bottom-image-3-column-menu-left-logo" as string
  ).replace(/-(left|right)-logo$/, "") as FooterWithBackgroundImageVariant;
  return (
    <FooterWithBackgroundImage
      {...FooterWithBackgroundImage.PreviewProps}
      logoPosition={logoPosition}
      variant={componentVariant}
    />
  );
}

FooterWithBackgroundImageVariantBottomImage3ColumnMenuLeftLogoExampleDemo.PreviewHeight = 760;
