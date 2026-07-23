import { FooterWithBackgroundImage } from "@/registry/bases/jsx-email/ui/marketing/footers/footer-with-background-image";
import type { FooterWithBackgroundImageVariant } from "@/registry/bases/jsx-email/ui/marketing/footers/footer-with-background-image";

export default function FooterWithBackgroundImageVariantBottomImageCenteredExampleDemo() {
  const logoPosition = ("bottom-image-centered" as string).endsWith(
    "-right-logo"
  )
    ? "right"
    : "left";
  const componentVariant = ("bottom-image-centered" as string).replace(
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

FooterWithBackgroundImageVariantBottomImageCenteredExampleDemo.PreviewHeight = 760;
