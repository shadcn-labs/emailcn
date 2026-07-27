import { MasonryProductDetail } from "@/registry/bases/react-email/components/ecommerce/product-detail/masonry-product-detail";
import { defaultTheme } from "@/registry/themes/default";

export default function MasonryProductDetailDemo() {
  return (
    <MasonryProductDetail
      ratingPosition="bottom"
      headerPosition="default"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
