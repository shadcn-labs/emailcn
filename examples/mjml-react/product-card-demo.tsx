import { MjmlEmailDocument } from "@/registry/bases/mjml-react/lib/document";
import ProductCard from "@/registry/bases/mjml-react/ui/product-card";
import { theme as defaultTheme } from "@/registry/themes/default";

export default function ProductCardDemo() {
  return (
    <MjmlEmailDocument preview="product-card" theme={defaultTheme}>
      <ProductCard {...ProductCard.PreviewProps} />
    </MjmlEmailDocument>
  );
}
