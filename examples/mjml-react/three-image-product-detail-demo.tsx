import { ThreeImageProductDetail } from "@/registry/bases/mjml-react/components/ecommerce/product-detail/three-image-product-detail";
import { defaultTheme } from "@/registry/themes/default";

export default function ThreeImageProductDetailDemo() {
  return (
    <ThreeImageProductDetail
      ratingPosition="bottom"
      headerPosition="default"
      theme={defaultTheme}
    />
  );
}
