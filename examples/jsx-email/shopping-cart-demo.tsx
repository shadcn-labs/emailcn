import { ShoppingCart } from "@/registry/bases/jsx-email/components/ecommerce/shopping-cart/shopping-cart";
import { defaultTheme } from "@/registry/themes/default";

export default function ShoppingCartDemo() {
  return (
    <ShoppingCart
      variant="basic"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
