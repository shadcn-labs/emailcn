import { CategoryPreview } from "@/registry/bases/mjml-react/ui/ecommerce/category-previews/category-preview";

export default function CategoryPreviewCardsWithPricesDemo() {
  return (
    <CategoryPreview
      layout="cards"
      detailLevel="price"
      header={{ heading: "Featured categories" }}
    />
  );
}
