import { BillingOrderSummary } from "@/registry/bases/mjml-react/components/ecommerce/order-summary/billing-order-summary";
import { defaultTheme } from "@/registry/themes/default";

export default function BillingOrderSummaryDemo() {
  return (
    <BillingOrderSummary
      billingPosition="top"
      appearance="plain"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
