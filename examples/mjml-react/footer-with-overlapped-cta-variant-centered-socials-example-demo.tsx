import { FooterWithOverlappedCta } from "@/registry/bases/mjml-react/ui/marketing/footers/footer-with-overlapped-cta";
import type { FooterWithOverlappedCtaVariant } from "@/registry/bases/mjml-react/ui/marketing/footers/footer-with-overlapped-cta";

export default function FooterWithOverlappedCtaVariantCenteredSocialsExampleDemo() {
  const logoPosition = ("centered-socials" as string).endsWith("-right-logo")
    ? "right"
    : "left";
  const componentVariant = ("centered-socials" as string).replace(
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

FooterWithOverlappedCtaVariantCenteredSocialsExampleDemo.PreviewHeight = 980;
