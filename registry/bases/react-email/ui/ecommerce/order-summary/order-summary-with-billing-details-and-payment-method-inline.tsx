import { Body, Head, Html, Preview, Tailwind } from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";
import { BillingDetailsSection } from "@/registry/bases/react-email/ui/ecommerce/order-summary/order-summary-shared";
import type { BillingInlineVariant } from "@/registry/bases/react-email/ui/ecommerce/order-summary/order-summary-shared";

export interface OrderSummaryBillingInlineProps {
  theme?: TailwindConfig;
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
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Order details</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <OrderSummaryBillingInlineSection {...props} />
      </Body>
    </Tailwind>
  </Html>
);

OrderSummaryBillingInline.PreviewProps = {
  theme: defaultTheme,
  variant: "basic",
} satisfies OrderSummaryBillingInlineProps;
