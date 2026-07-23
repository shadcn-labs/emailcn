import { FooterWithOverlappedCta } from "@/registry/bases/mjml-react/ui/marketing/footers/footer-with-overlapped-cta";
import type { FooterWithOverlappedCtaVariant } from "@/registry/bases/mjml-react/ui/marketing/footers/footer-with-overlapped-cta";

export default function FooterWithOverlappedCtaVariant3ColumnMenuLeftLogoExampleDemo() {
  const logoPosition = ("3-column-menu-left-logo" as string).endsWith(
    "-right-logo"
  )
    ? "right"
    : "left";
  const componentVariant = ("3-column-menu-left-logo" as string).replace(
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

FooterWithOverlappedCtaVariant3ColumnMenuLeftLogoExampleDemo.PreviewHeight = 980;
