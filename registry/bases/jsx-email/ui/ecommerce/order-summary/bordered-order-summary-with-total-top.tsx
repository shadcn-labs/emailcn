import { Body, Head, Html, Preview } from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";
import { OrderSummaryTableSection } from "@/registry/bases/jsx-email/ui/ecommerce/order-summary/order-summary-shared";
import type {
  BorderedOrderSummaryVariant,
  OrderSummaryAlignment,
} from "@/registry/bases/jsx-email/ui/ecommerce/order-summary/order-summary-shared";

export interface BorderedOrderSummaryTotalTopProps {
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

export const BorderedOrderSummaryTotalTopSection = ({
  variant = "left-aligned",
}: Omit<BorderedOrderSummaryTotalTopProps, "theme">) => (
  <OrderSummaryTableSection
    alignment={getAlignment(variant)}
    cardDetails={false}
    filled={variant.endsWith("filled")}
    surface="bordered"
    totalPosition={"top"}
  />
);

export const BorderedOrderSummaryTotalTop = ({
  theme: _theme = defaultTheme,
  ...props
}: BorderedOrderSummaryTotalTopProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Order summary</Preview>
    <Body style={{ margin: 0 }}>
      <BorderedOrderSummaryTotalTopSection {...props} />
    </Body>
  </Html>
);

BorderedOrderSummaryTotalTop.PreviewProps = {
  theme: defaultTheme,
  variant: "left-aligned",
} satisfies BorderedOrderSummaryTotalTopProps;
