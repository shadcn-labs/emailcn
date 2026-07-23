import { FooterWithContentAndCta } from "@/registry/bases/jsx-email/ui/marketing/footers/footer-with-content-and-cta";
import type { FooterWithContentAndCtaVariant } from "@/registry/bases/jsx-email/ui/marketing/footers/footer-with-content-and-cta";

export default function FooterWithContentAndCtaDemo({
  variant,
}: {
  variant?: FooterWithContentAndCtaVariant;
}) {
  return (
    <FooterWithContentAndCta
      {...FooterWithContentAndCta.PreviewProps}
      variant={variant ?? FooterWithContentAndCta.PreviewProps.variant}
    />
  );
}
