import { FooterWithOverlappedCta } from "@/registry/bases/jsx-email/ui/marketing/footers/footer-with-overlapped-cta";
import type { FooterWithOverlappedCtaVariant } from "@/registry/bases/jsx-email/ui/marketing/footers/footer-with-overlapped-cta";

export default function FooterWithOverlappedCtaVariantCenteredMenuExampleDemo() {
  const logoPosition = ("centered-menu" as string).endsWith("-right-logo")
    ? "right"
    : "left";
  const componentVariant = ("centered-menu" as string).replace(
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

FooterWithOverlappedCtaVariantCenteredMenuExampleDemo.PreviewHeight = 980;
