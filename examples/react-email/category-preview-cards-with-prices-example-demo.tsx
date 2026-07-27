import { CategoryPreview } from "@/registry/bases/react-email/components/ecommerce/category-previews/category-preview";

export default function CategoryPreviewCardsWithPricesDemo() {
  return (
    <CategoryPreview
      layout="cards"
      detailLevel="price"
      header={{ heading: "Featured categories" }}
    />
  );
}
