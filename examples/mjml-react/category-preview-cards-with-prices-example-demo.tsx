import { CategoryPreview } from "@/registry/bases/mjml-react/components/ecommerce/category-previews/category-preview";

export default function CategoryPreviewCardsWithPricesDemo() {
  return (
    <CategoryPreview
      layout="cards"
      detailLevel="price"
      header={{ heading: "Featured categories" }}
    />
  );
}
