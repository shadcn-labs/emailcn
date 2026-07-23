import { FooterWithFullMenu } from "@/registry/bases/react-email/ui/marketing/footers/footer-with-full-menu";
import type { FooterWithFullMenuVariant } from "@/registry/bases/react-email/ui/marketing/footers/footer-with-full-menu";

export default function FooterWithFullMenuDemo({
  variant,
}: {
  variant?: FooterWithFullMenuVariant;
}) {
  return (
    <FooterWithFullMenu
      {...FooterWithFullMenu.PreviewProps}
      variant={variant ?? FooterWithFullMenu.PreviewProps.variant}
    />
  );
}
