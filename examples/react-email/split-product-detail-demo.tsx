import { SplitProductDetail } from "@/registry/bases/react-email/ui/ecommerce/product-detail/split-product-detail";
import type { SplitProductDetailProps } from "@/registry/bases/react-email/ui/ecommerce/product-detail/split-product-detail";

export default function SplitProductDetailDemo({
  variant,
}: Pick<SplitProductDetailProps, "variant">) {
  return (
    <SplitProductDetail
      {...SplitProductDetail.PreviewProps}
      variant={variant ?? SplitProductDetail.PreviewProps.variant}
    />
  );
}
