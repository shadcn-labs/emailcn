import { FooterWith3ColMenu } from "@/registry/bases/react-email/ui/marketing/footers/footer-with-3-col-menu";
import type { FooterWith3ColMenuVariant } from "@/registry/bases/react-email/ui/marketing/footers/footer-with-3-col-menu";

export default function FooterWith3ColMenuDemo({
  variant,
}: {
  variant?: FooterWith3ColMenuVariant;
}) {
  return (
    <FooterWith3ColMenu
      {...FooterWith3ColMenu.PreviewProps}
      variant={variant ?? FooterWith3ColMenu.PreviewProps.variant}
    />
  );
}
