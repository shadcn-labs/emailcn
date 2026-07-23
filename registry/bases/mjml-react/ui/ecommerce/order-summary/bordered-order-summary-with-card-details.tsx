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
  BorderedCardOrderSummaryVariant,
  OrderSummaryAlignment,
} from "@/registry/bases/mjml-react/ui/ecommerce/order-summary/order-summary-shared";

export interface BorderedOrderSummaryCardDetailsProps {
  theme?: EmailThemeTokens;
  variant?: BorderedCardOrderSummaryVariant;
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

export const BorderedOrderSummaryCardDetailsSection = ({
  variant = "bottom-left",
}: Omit<BorderedOrderSummaryCardDetailsProps, "theme">) => (
  <OrderSummaryTableSection
    alignment={getAlignment(variant)}
    cardDetails={true}
    filled={variant.endsWith("filled")}
    surface="bordered"
    totalPosition={variant.startsWith("top") ? "top" : "bottom"}
  />
);

export const BorderedOrderSummaryCardDetails = ({
  theme = defaultTheme,
  ...props
}: BorderedOrderSummaryCardDetailsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Order summary</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{orderSummaryResponsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <BorderedOrderSummaryCardDetailsSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

BorderedOrderSummaryCardDetails.PreviewProps = {
  theme: defaultTheme,
  variant: "bottom-left",
} satisfies BorderedOrderSummaryCardDetailsProps;
