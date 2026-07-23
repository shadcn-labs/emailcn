import { BorderedOrderSummaryTotalBottom } from "@/registry/bases/mjml-react/ui/ecommerce/order-summary/bordered-order-summary-with-total-bottom";
import type { BorderedOrderSummaryTotalBottomProps } from "@/registry/bases/mjml-react/ui/ecommerce/order-summary/bordered-order-summary-with-total-bottom";

export default function BorderedOrderSummaryTotalBottomDemo({
  variant,
}: Pick<BorderedOrderSummaryTotalBottomProps, "variant">) {
  return (
    <BorderedOrderSummaryTotalBottom
      {...BorderedOrderSummaryTotalBottom.PreviewProps}
      variant={variant ?? BorderedOrderSummaryTotalBottom.PreviewProps.variant}
    />
  );
}
