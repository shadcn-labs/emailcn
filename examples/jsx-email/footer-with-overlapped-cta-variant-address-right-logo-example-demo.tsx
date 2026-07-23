import { FooterWithOverlappedCta } from "@/registry/bases/jsx-email/ui/marketing/footers/footer-with-overlapped-cta";
import type { FooterWithOverlappedCtaVariant } from "@/registry/bases/jsx-email/ui/marketing/footers/footer-with-overlapped-cta";

export default function FooterWithOverlappedCtaVariantAddressRightLogoExampleDemo() {
  const logoPosition = ("address-right-logo" as string).endsWith("-right-logo")
    ? "right"
    : "left";
  const componentVariant = ("address-right-logo" as string).replace(
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

FooterWithOverlappedCtaVariantAddressRightLogoExampleDemo.PreviewHeight = 980;
