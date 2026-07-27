import { BillingOrderSummary } from "@/registry/bases/react-email/components/ecommerce/order-summary/billing-order-summary";

export default function BillingOrderSummaryBillingPositionTopAppearancePlainPaymentNotesExampleDemo() {
  return (
    <BillingOrderSummary
      billingPosition="top"
      appearance="plain"
      payment
      notes
    />
  );
}
