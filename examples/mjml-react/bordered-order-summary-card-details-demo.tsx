import { BorderedOrderSummaryCardDetails } from "@/registry/bases/mjml-react/ui/ecommerce/order-summary/bordered-order-summary-with-card-details";
import type { BorderedOrderSummaryCardDetailsProps } from "@/registry/bases/mjml-react/ui/ecommerce/order-summary/bordered-order-summary-with-card-details";

export default function BorderedOrderSummaryCardDetailsDemo({
  variant,
}: Pick<BorderedOrderSummaryCardDetailsProps, "variant">) {
  return (
    <BorderedOrderSummaryCardDetails
      {...BorderedOrderSummaryCardDetails.PreviewProps}
      variant={variant ?? BorderedOrderSummaryCardDetails.PreviewProps.variant}
    />
  );
}
