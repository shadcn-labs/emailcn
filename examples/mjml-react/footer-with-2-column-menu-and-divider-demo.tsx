import { FooterWith2ColumnMenuAndDivider } from "@/registry/bases/mjml-react/ui/marketing/footers/footer-with-2-column-menu-and-divider";
import type { FooterWith2ColumnMenuAndDividerVariant } from "@/registry/bases/mjml-react/ui/marketing/footers/footer-with-2-column-menu-and-divider";

export default function FooterWith2ColumnMenuAndDividerDemo({
  variant = "left-logo",
}: {
  variant?: FooterWith2ColumnMenuAndDividerVariant;
}) {
  return (
    <FooterWith2ColumnMenuAndDivider
      {...FooterWith2ColumnMenuAndDivider.PreviewProps}
      variant={variant}
    />
  );
}
