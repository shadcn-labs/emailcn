import { CategoryPreviewRows } from "@/registry/bases/mjml-react/ui/ecommerce/category-previews/category-preview-with-rows";
import type { CategoryPreviewRowsVariant } from "@/registry/bases/mjml-react/ui/ecommerce/category-previews/category-preview-with-rows";

export default function CategoryPreviewRowsDemo({
  variant,
}: {
  variant?: CategoryPreviewRowsVariant;
}) {
  return (
    <CategoryPreviewRows
      {...CategoryPreviewRows.PreviewProps}
      variant={variant ?? CategoryPreviewRows.PreviewProps.variant}
    />
  );
}
