import { ProductListWithRows } from "@/registry/bases/react-email/ui/ecommerce/product-lists/product-list-with-rows";
import type { ProductListWithRowsProps } from "@/registry/bases/react-email/ui/ecommerce/product-lists/product-list-with-rows";

export default function ProductListWithRowsDemo({
  variant,
}: Pick<ProductListWithRowsProps, "variant">) {
  return (
    <ProductListWithRows
      {...ProductListWithRows.PreviewProps}
      variant={variant ?? ProductListWithRows.PreviewProps.variant}
    />
  );
}
