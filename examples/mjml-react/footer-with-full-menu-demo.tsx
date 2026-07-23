import { FooterWithFullMenu } from "@/registry/bases/mjml-react/ui/marketing/footers/footer-with-full-menu";
import type { FooterWithFullMenuVariant } from "@/registry/bases/mjml-react/ui/marketing/footers/footer-with-full-menu";

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
