import { Body, Head, Html, Preview, Tailwind } from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";
import { BillingDetailsSection } from "@/registry/bases/react-email/ui/ecommerce/order-summary/order-summary-shared";
import type { BillingTopVariant } from "@/registry/bases/react-email/ui/ecommerce/order-summary/order-summary-shared";

export interface OrderSummaryBillingTopProps {
  theme?: TailwindConfig;
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
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Order details</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <OrderSummaryBillingTopSection {...props} />
      </Body>
    </Tailwind>
  </Html>
);

OrderSummaryBillingTop.PreviewProps = {
  theme: defaultTheme,
  variant: "basic-with-payment",
} satisfies OrderSummaryBillingTopProps;
