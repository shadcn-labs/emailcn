import { FooterWithOverlappedCta } from "@/registry/bases/react-email/ui/marketing/footers/footer-with-overlapped-cta";
import type { FooterWithOverlappedCtaVariant } from "@/registry/bases/react-email/ui/marketing/footers/footer-with-overlapped-cta";

export default function FooterWithOverlappedCtaVariantAddressLeftLogoExampleDemo() {
  const logoPosition = ("address-left-logo" as string).endsWith("-right-logo")
    ? "right"
    : "left";
  const componentVariant = ("address-left-logo" as string).replace(
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

FooterWithOverlappedCtaVariantAddressLeftLogoExampleDemo.PreviewHeight = 980;
