import { ProductList } from "@/registry/bases/mjml-react/components/ecommerce/product-lists/product-list";
import { defaultTheme } from "@/registry/themes/default";

export default function ProductListDemo() {
  return <ProductList variant="basic" theme={defaultTheme} />;
}
