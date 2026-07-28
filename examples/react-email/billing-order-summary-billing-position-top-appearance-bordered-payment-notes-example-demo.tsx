import { BillingOrderSummary } from "@/registry/bases/react-email/components/ecommerce/order-summary/billing-order-summary";

export default function BillingOrderSummaryBillingPositionTopAppearanceBorderedPaymentNotesExampleDemo() {
  return (
    <BillingOrderSummary
      billingPosition="top"
      appearance="bordered"
      payment
      notes
    />
  );
}
