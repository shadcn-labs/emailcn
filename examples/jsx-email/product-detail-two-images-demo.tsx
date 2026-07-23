import { ProductDetailTwoImages } from "@/registry/bases/jsx-email/ui/ecommerce/product-detail/product-detail-with-two-images-and-details";
import type { ProductDetailTwoImagesProps } from "@/registry/bases/jsx-email/ui/ecommerce/product-detail/product-detail-with-two-images-and-details";

export default function ProductDetailTwoImagesDemo({
  variant,
}: Pick<ProductDetailTwoImagesProps, "variant">) {
  return (
    <ProductDetailTwoImages
      {...ProductDetailTwoImages.PreviewProps}
      variant={variant ?? ProductDetailTwoImages.PreviewProps.variant}
    />
  );
}
