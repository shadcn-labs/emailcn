import { Body, Head, Html, Preview } from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";
import { OrderSummaryTableSection } from "@/registry/bases/jsx-email/ui/ecommerce/order-summary/order-summary-shared";
import type {
  BorderedCardOrderSummaryVariant,
  OrderSummaryAlignment,
} from "@/registry/bases/jsx-email/ui/ecommerce/order-summary/order-summary-shared";

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
  theme: _theme = defaultTheme,
  ...props
}: BorderedOrderSummaryCardDetailsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Order summary</Preview>
    <Body style={{ margin: 0 }}>
      <BorderedOrderSummaryCardDetailsSection {...props} />
    </Body>
  </Html>
);

BorderedOrderSummaryCardDetails.PreviewProps = {
  theme: defaultTheme,
  variant: "bottom-left",
} satisfies BorderedOrderSummaryCardDetailsProps;
