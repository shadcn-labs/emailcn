import { Body, Head, Html, Preview } from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";
import { BillingDetailsSection } from "@/registry/bases/jsx-email/ui/ecommerce/order-summary/order-summary-shared";
import type { BillingInlineVariant } from "@/registry/bases/jsx-email/ui/ecommerce/order-summary/order-summary-shared";

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
  theme: _theme = defaultTheme,
  ...props
}: OrderSummaryBillingInlineProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Order details</Preview>
    <Body style={{ margin: 0 }}>
      <OrderSummaryBillingInlineSection {...props} />
    </Body>
  </Html>
);

OrderSummaryBillingInline.PreviewProps = {
  theme: defaultTheme,
  variant: "basic",
} satisfies OrderSummaryBillingInlineProps;
