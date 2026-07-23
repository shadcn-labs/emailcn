import { FooterWithOverlappedCta } from "@/registry/bases/react-email/ui/marketing/footers/footer-with-overlapped-cta";
import type { FooterWithOverlappedCtaVariant } from "@/registry/bases/react-email/ui/marketing/footers/footer-with-overlapped-cta";

export default function FooterWithOverlappedCtaVariant2ColumnMenuLeftLogoExampleDemo() {
  const logoPosition = ("2-column-menu-left-logo" as string).endsWith(
    "-right-logo"
  )
    ? "right"
    : "left";
  const componentVariant = ("2-column-menu-left-logo" as string).replace(
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

FooterWithOverlappedCtaVariant2ColumnMenuLeftLogoExampleDemo.PreviewHeight = 980;
