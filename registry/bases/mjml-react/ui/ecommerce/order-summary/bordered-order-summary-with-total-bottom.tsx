import {
  Mjml,
  MjmlBody,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlStyle,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  orderSummaryResponsiveStyles,
  OrderSummaryTableSection,
} from "@/registry/bases/mjml-react/ui/ecommerce/order-summary/order-summary-shared";
import type {
  BorderedOrderSummaryVariant,
  OrderSummaryAlignment,
} from "@/registry/bases/mjml-react/ui/ecommerce/order-summary/order-summary-shared";

export interface BorderedOrderSummaryTotalBottomProps {
  theme?: EmailThemeTokens;
  variant?: BorderedOrderSummaryVariant;
}

const getAlignment = (variant: string): OrderSummaryAlignment => {
  if (variant.includes("right")) {
    return "right";
  }
  if (variant.includes("centered")) {
    return "centered";
  }
  if (variant.includes("justified")) {
    return "justified";
  }
  return "left";
};

export const BorderedOrderSummaryTotalBottomSection = ({
  variant = "left-aligned",
}: Omit<BorderedOrderSummaryTotalBottomProps, "theme">) => (
  <OrderSummaryTableSection
    alignment={getAlignment(variant)}
    cardDetails={false}
    filled={variant.endsWith("filled")}
    surface="bordered"
    totalPosition={"bottom"}
  />
);

export const BorderedOrderSummaryTotalBottom = ({
  theme = defaultTheme,
  ...props
}: BorderedOrderSummaryTotalBottomProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Order summary</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{orderSummaryResponsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <BorderedOrderSummaryTotalBottomSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

BorderedOrderSummaryTotalBottom.PreviewProps = {
  theme: defaultTheme,
  variant: "left-aligned",
} satisfies BorderedOrderSummaryTotalBottomProps;
