import { FooterWithOverlappedCta } from "@/registry/bases/react-email/ui/marketing/footers/footer-with-overlapped-cta";
import type { FooterWithOverlappedCtaVariant } from "@/registry/bases/react-email/ui/marketing/footers/footer-with-overlapped-cta";

export default function FooterWithOverlappedCtaVariantContentRightLogoExampleDemo() {
  const logoPosition = ("content-right-logo" as string).endsWith("-right-logo")
    ? "right"
    : "left";
  const componentVariant = ("content-right-logo" as string).replace(
    /-(left|right)-logo$/,
    ""
  ) as FooterWithOverlappedCtaVariant;
  return (
    <FooterWithOverlappedCta
      {...FooterWithOverlappedCta.PreviewProps}
      logoPosition={logoPosition}
      variant={componentVariant}
    />
  );
}

FooterWithOverlappedCtaVariantContentRightLogoExampleDemo.PreviewHeight = 980;
