import { SplitProductDetail } from "@/registry/bases/react-email/components/ecommerce/product-detail/split-product-detail";
import { defaultTheme } from "@/registry/themes/default";

export default function SplitProductDetailDemo() {
  return (
    <SplitProductDetail
      treatment="stacked"
      placement="left"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
