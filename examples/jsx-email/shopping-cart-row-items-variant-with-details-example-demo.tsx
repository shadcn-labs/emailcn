import { ShoppingCartRowItems } from "@/registry/bases/jsx-email/ui/ecommerce/shopping-cart/shopping-cart-with-row-items";

export default function ShoppingCartRowItemsVariantWithDetailsExampleDemo() {
  return (
    <ShoppingCartRowItems
      {...ShoppingCartRowItems.PreviewProps}
      variant="with-details"
    />
  );
}
