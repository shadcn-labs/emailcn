import { ProductDetailThreeImages } from "@/registry/bases/mjml-react/ui/ecommerce/product-detail/product-detail-with-three-images-and-details";
import type { ProductDetailThreeImagesProps } from "@/registry/bases/mjml-react/ui/ecommerce/product-detail/product-detail-with-three-images-and-details";

export default function ProductDetailThreeImagesDemo({
  variant,
}: Pick<ProductDetailThreeImagesProps, "variant">) {
  return (
    <ProductDetailThreeImages
      {...ProductDetailThreeImages.PreviewProps}
      variant={variant ?? ProductDetailThreeImages.PreviewProps.variant}
    />
  );
}
