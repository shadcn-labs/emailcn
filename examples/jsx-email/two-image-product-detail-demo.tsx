import { TwoImageProductDetail } from "@/registry/bases/jsx-email/components/ecommerce/product-detail/two-image-product-detail";
import { defaultTheme } from "@/registry/themes/default";

export default function TwoImageProductDetailDemo() {
  return (
    <TwoImageProductDetail
      ratingPosition="bottom"
      headerPosition="default"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
