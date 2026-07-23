import { ProductDetailMasonry } from "@/registry/bases/mjml-react/ui/ecommerce/product-detail/product-detail-with-masonry-image-grid-and-details";
import type { ProductDetailMasonryProps } from "@/registry/bases/mjml-react/ui/ecommerce/product-detail/product-detail-with-masonry-image-grid-and-details";

export default function ProductDetailMasonryDemo({
  variant,
}: Pick<ProductDetailMasonryProps, "variant">) {
  return (
    <ProductDetailMasonry
      {...ProductDetailMasonry.PreviewProps}
      variant={variant ?? ProductDetailMasonry.PreviewProps.variant}
    />
  );
}
