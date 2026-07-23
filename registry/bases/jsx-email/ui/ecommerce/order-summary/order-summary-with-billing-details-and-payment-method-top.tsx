import { Body, Head, Html, Preview } from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";
import { BillingDetailsSection } from "@/registry/bases/jsx-email/ui/ecommerce/order-summary/order-summary-shared";
import type { BillingTopVariant } from "@/registry/bases/jsx-email/ui/ecommerce/order-summary/order-summary-shared";

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
  theme: _theme = defaultTheme,
  ...props
}: OrderSummaryBillingTopProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Order details</Preview>
    <Body style={{ margin: 0 }}>
      <OrderSummaryBillingTopSection {...props} />
    </Body>
  </Html>
);

OrderSummaryBillingTop.PreviewProps = {
  theme: defaultTheme,
  variant: "basic-with-payment",
} satisfies OrderSummaryBillingTopProps;
