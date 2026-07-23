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
  BillingDetailsSection,
} from "@/registry/bases/mjml-react/ui/ecommerce/order-summary/order-summary-shared";
import type { BillingTopVariant } from "@/registry/bases/mjml-react/ui/ecommerce/order-summary/order-summary-shared";

export interface OrderSummaryBillingTopProps {
  theme?: EmailThemeTokens;
  variant?: BillingTopVariant;
}

export const OrderSummaryBillingTopSection = ({
  variant = "basic-with-payment",
}: Omit<OrderSummaryBillingTopProps, "theme">) => (
  <BillingDetailsSection layout="top" variant={variant} />
);

export const OrderSummaryBillingTop = ({
  theme = defaultTheme,
  ...props
}: OrderSummaryBillingTopProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Order details</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{orderSummaryResponsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <MjmlRaw>
          <div style={{ textAlign: "left" }}>
            <OrderSummaryBillingTopSection {...props} />
          </div>
        </MjmlRaw>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

OrderSummaryBillingTop.PreviewProps = {
  theme: defaultTheme,
  variant: "basic-with-payment",
} satisfies OrderSummaryBillingTopProps;
