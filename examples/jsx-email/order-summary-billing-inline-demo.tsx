import { OrderSummaryBillingInline } from "@/registry/bases/jsx-email/ui/ecommerce/order-summary/order-summary-with-billing-details-and-payment-method-inline";

export default function OrderSummaryBillingInlineDemo() {
  return (
    <OrderSummaryBillingInline {...OrderSummaryBillingInline.PreviewProps} />
  );
}
