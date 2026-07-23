import { ProductListWithRows } from "@/registry/bases/jsx-email/ui/ecommerce/product-lists/product-list-with-rows";

export default function ProductListWithRowsVariantWithDescriptionExampleDemo() {
  return (
    <ProductListWithRows
      {...ProductListWithRows.PreviewProps}
      variant="with-description"
    />
  );
}
