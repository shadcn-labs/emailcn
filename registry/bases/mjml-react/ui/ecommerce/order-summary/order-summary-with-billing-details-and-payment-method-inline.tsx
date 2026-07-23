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
  BillingDetailsSection,
} from "@/registry/bases/mjml-react/ui/ecommerce/order-summary/order-summary-shared";
import type { BillingInlineVariant } from "@/registry/bases/mjml-react/ui/ecommerce/order-summary/order-summary-shared";

export interface OrderSummaryBillingInlineProps {
  theme?: EmailThemeTokens;
  variant?: BillingInlineVariant;
}

export const OrderSummaryBillingInlineSection = ({
  variant = "basic",
}: Omit<OrderSummaryBillingInlineProps, "theme">) => (
  <BillingDetailsSection layout="inline" variant={variant} />
);

export const OrderSummaryBillingInline = ({
  theme = defaultTheme,
  ...props
}: OrderSummaryBillingInlineProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Order details</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{orderSummaryResponsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <OrderSummaryBillingInlineSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

OrderSummaryBillingInline.PreviewProps = {
  theme: defaultTheme,
  variant: "basic",
} satisfies OrderSummaryBillingInlineProps;
