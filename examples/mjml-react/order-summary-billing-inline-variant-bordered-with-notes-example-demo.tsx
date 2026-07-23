import { OrderSummaryBillingInline } from "@/registry/bases/mjml-react/ui/ecommerce/order-summary/order-summary-with-billing-details-and-payment-method-inline";

export default function OrderSummaryBillingInlineVariantBorderedWithNotesExampleDemo() {
  return (
    <OrderSummaryBillingInline
      {...OrderSummaryBillingInline.PreviewProps}
      variant="bordered-with-notes"
    />
  );
}
