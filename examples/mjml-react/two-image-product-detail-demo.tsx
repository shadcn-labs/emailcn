import { TwoImageProductDetail } from "@/registry/bases/mjml-react/components/ecommerce/product-detail/two-image-product-detail";
import { defaultTheme } from "@/registry/themes/default";

export default function TwoImageProductDetailDemo() {
  return (
    <TwoImageProductDetail
      ratingPosition="bottom"
      headerPosition="default"
      theme={defaultTheme}
    />
  );
}
