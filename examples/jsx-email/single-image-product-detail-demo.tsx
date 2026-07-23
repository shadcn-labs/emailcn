import { SingleImageProductDetail } from "@/registry/bases/jsx-email/ui/ecommerce/product-detail/single-image-product-detail-with-details";
import type { SingleImageProductDetailProps } from "@/registry/bases/jsx-email/ui/ecommerce/product-detail/single-image-product-detail-with-details";

export default function SingleImageProductDetailDemo({
  variant,
}: Pick<SingleImageProductDetailProps, "variant">) {
  return (
    <SingleImageProductDetail
      {...SingleImageProductDetail.PreviewProps}
      variant={variant ?? SingleImageProductDetail.PreviewProps.variant}
    />
  );
}
