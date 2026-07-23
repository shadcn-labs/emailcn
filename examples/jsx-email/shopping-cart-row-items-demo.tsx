import type { ShoppingCartVariant } from "@/registry/bases/jsx-email/ui/ecommerce/shopping-cart/shopping-cart-shared";
import { ShoppingCartRowItems } from "@/registry/bases/jsx-email/ui/ecommerce/shopping-cart/shopping-cart-with-row-items";

export default function ShoppingCartRowItemsDemo({
  variant = "basic",
}: {
  variant?: ShoppingCartVariant;
}) {
  return (
    <ShoppingCartRowItems
      {...ShoppingCartRowItems.PreviewProps}
      variant={variant}
    />
  );
}
