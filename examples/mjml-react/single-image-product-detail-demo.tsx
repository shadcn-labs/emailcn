import { SingleImageProductDetail } from "@/registry/bases/mjml-react/components/ecommerce/product-detail/single-image-product-detail";
import { defaultTheme } from "@/registry/themes/default";

export default function SingleImageProductDetailDemo() {
  return (
    <SingleImageProductDetail
      ratingPosition="bottom"
      headerPosition="default"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
