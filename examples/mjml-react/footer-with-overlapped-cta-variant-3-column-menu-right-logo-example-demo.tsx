import { FooterWithOverlappedCta } from "@/registry/bases/mjml-react/ui/marketing/footers/footer-with-overlapped-cta";
import type { FooterWithOverlappedCtaVariant } from "@/registry/bases/mjml-react/ui/marketing/footers/footer-with-overlapped-cta";

export default function FooterWithOverlappedCtaVariant3ColumnMenuRightLogoExampleDemo() {
  const logoPosition = ("3-column-menu-right-logo" as string).endsWith(
    "-right-logo"
  )
    ? "right"
    : "left";
  const componentVariant = ("3-column-menu-right-logo" as string).replace(
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

FooterWithOverlappedCtaVariant3ColumnMenuRightLogoExampleDemo.PreviewHeight = 980;
