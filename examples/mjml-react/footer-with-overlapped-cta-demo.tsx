import { FooterWithOverlappedCta } from "@/registry/bases/mjml-react/ui/marketing/footers/footer-with-overlapped-cta";
import type { FooterWithOverlappedCtaVariant } from "@/registry/bases/mjml-react/ui/marketing/footers/footer-with-overlapped-cta";

export default function FooterWithOverlappedCtaDemo({
  variant = "content",
}: {
  variant?: string;
}) {
  const logoPosition = variant.endsWith("-right-logo") ? "right" : "left";
  const componentVariant = variant.replace(
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
