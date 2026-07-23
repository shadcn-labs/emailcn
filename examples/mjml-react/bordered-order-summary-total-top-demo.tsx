import { BorderedOrderSummaryTotalTop } from "@/registry/bases/mjml-react/ui/ecommerce/order-summary/bordered-order-summary-with-total-top";
import type { BorderedOrderSummaryTotalTopProps } from "@/registry/bases/mjml-react/ui/ecommerce/order-summary/bordered-order-summary-with-total-top";

export default function BorderedOrderSummaryTotalTopDemo({
  variant,
}: Pick<BorderedOrderSummaryTotalTopProps, "variant">) {
  return (
    <BorderedOrderSummaryTotalTop
      {...BorderedOrderSummaryTotalTop.PreviewProps}
      variant={variant ?? BorderedOrderSummaryTotalTop.PreviewProps.variant}
    />
  );
}
