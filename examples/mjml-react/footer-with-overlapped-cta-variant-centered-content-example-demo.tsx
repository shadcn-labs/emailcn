import { FooterWithOverlappedCta } from "@/registry/bases/mjml-react/ui/marketing/footers/footer-with-overlapped-cta";
import type { FooterWithOverlappedCtaVariant } from "@/registry/bases/mjml-react/ui/marketing/footers/footer-with-overlapped-cta";

export default function FooterWithOverlappedCtaVariantCenteredContentExampleDemo() {
  const logoPosition = ("centered-content" as string).endsWith("-right-logo")
    ? "right"
    : "left";
  const componentVariant = ("centered-content" as string).replace(
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

FooterWithOverlappedCtaVariantCenteredContentExampleDemo.PreviewHeight = 980;
