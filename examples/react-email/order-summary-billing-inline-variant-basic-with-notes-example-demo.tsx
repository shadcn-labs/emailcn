import { OrderSummaryBillingInline } from "@/registry/bases/react-email/ui/ecommerce/order-summary/order-summary-with-billing-details-and-payment-method-inline";

export default function OrderSummaryBillingInlineVariantBasicWithNotesExampleDemo() {
  return (
    <OrderSummaryBillingInline
      {...OrderSummaryBillingInline.PreviewProps}
      variant="basic-with-notes"
    />
  );
}
