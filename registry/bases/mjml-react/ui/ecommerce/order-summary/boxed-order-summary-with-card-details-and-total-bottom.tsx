import {
  Mjml,
  MjmlBody,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlRaw,
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
  BoxedOrderSummaryVariant,
  OrderSummaryAlignment,
} from "@/registry/bases/mjml-react/ui/ecommerce/order-summary/order-summary-shared";

export interface BoxedOrderSummaryCardDetailsTotalBottomProps {
  theme?: EmailThemeTokens;
  variant?: BoxedOrderSummaryVariant;
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

export const BoxedOrderSummaryCardDetailsTotalBottomSection = ({
  variant = "left-aligned",
}: Omit<BoxedOrderSummaryCardDetailsTotalBottomProps, "theme">) => (
  <OrderSummaryTableSection
    alignment={getAlignment(variant)}
    cardDetails={true}
    filled={variant.endsWith("filled")}
    surface="boxed"
    totalPosition={"bottom"}
  />
);

export const BoxedOrderSummaryCardDetailsTotalBottom = ({
  theme = defaultTheme,
  ...props
}: BoxedOrderSummaryCardDetailsTotalBottomProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Order summary</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{orderSummaryResponsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <MjmlRaw>
          <div style={{ textAlign: "left" }}>
            <BoxedOrderSummaryCardDetailsTotalBottomSection {...props} />
          </div>
        </MjmlRaw>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

BoxedOrderSummaryCardDetailsTotalBottom.PreviewProps = {
  theme: defaultTheme,
  variant: "left-aligned",
} satisfies BoxedOrderSummaryCardDetailsTotalBottomProps;
