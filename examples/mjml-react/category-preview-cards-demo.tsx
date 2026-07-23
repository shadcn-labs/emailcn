import { CategoryPreviewCards } from "@/registry/bases/mjml-react/ui/ecommerce/category-previews/category-preview-with-cards";
import type { CategoryPreviewCardsVariant } from "@/registry/bases/mjml-react/ui/ecommerce/category-previews/category-preview-with-cards";

export default function CategoryPreviewCardsDemo({
  variant,
}: {
  variant?: CategoryPreviewCardsVariant;
}) {
  return (
    <CategoryPreviewCards
      {...CategoryPreviewCards.PreviewProps}
      variant={variant ?? CategoryPreviewCards.PreviewProps.variant}
    />
  );
}
