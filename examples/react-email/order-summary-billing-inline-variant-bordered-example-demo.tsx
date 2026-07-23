import { OrderSummaryBillingInline } from "@/registry/bases/react-email/ui/ecommerce/order-summary/order-summary-with-billing-details-and-payment-method-inline";

export default function OrderSummaryBillingInlineVariantBorderedExampleDemo() {
  return (
    <OrderSummaryBillingInline
      {...OrderSummaryBillingInline.PreviewProps}
      variant="bordered"
    />
  );
}
