import { ProductList } from "@/registry/bases/react-email/components/ecommerce/product-lists/product-list";
import { defaultTheme } from "@/registry/themes/default";

export default function ProductListDemo() {
  return (
    <ProductList
      variant="basic"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
