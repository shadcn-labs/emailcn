import { SingleImageProductDetail } from "@/registry/bases/mjml-react/ui/ecommerce/product-detail/single-image-product-detail-with-details";
import type { SingleImageProductDetailProps } from "@/registry/bases/mjml-react/ui/ecommerce/product-detail/single-image-product-detail-with-details";

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
