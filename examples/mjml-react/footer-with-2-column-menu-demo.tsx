import { FooterWith2ColumnMenu } from "@/registry/bases/mjml-react/ui/marketing/footers/footer-with-2-column-menu";
import type { FooterWith2ColumnMenuVariant } from "@/registry/bases/mjml-react/ui/marketing/footers/footer-with-2-column-menu";

export default function FooterWith2ColumnMenuDemo({
  variant,
}: {
  variant?: FooterWith2ColumnMenuVariant;
}) {
  return (
    <FooterWith2ColumnMenu
      {...FooterWith2ColumnMenu.PreviewProps}
      variant={variant ?? FooterWith2ColumnMenu.PreviewProps.variant}
    />
  );
}
