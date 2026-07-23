import { Body, Head, Html, Preview } from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";
import { OrderSummaryTableSection } from "@/registry/bases/jsx-email/ui/ecommerce/order-summary/order-summary-shared";
import type {
  BorderedOrderSummaryVariant,
  OrderSummaryAlignment,
} from "@/registry/bases/jsx-email/ui/ecommerce/order-summary/order-summary-shared";

export interface BorderedOrderSummaryTotalBottomProps {
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

export const BorderedOrderSummaryTotalBottomSection = ({
  variant = "left-aligned",
}: Omit<BorderedOrderSummaryTotalBottomProps, "theme">) => (
  <OrderSummaryTableSection
    alignment={getAlignment(variant)}
    cardDetails={false}
    filled={variant.endsWith("filled")}
    surface="bordered"
    totalPosition={"bottom"}
  />
);

export const BorderedOrderSummaryTotalBottom = ({
  theme: _theme = defaultTheme,
  ...props
}: BorderedOrderSummaryTotalBottomProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Order summary</Preview>
    <Body style={{ margin: 0 }}>
      <BorderedOrderSummaryTotalBottomSection {...props} />
    </Body>
  </Html>
);

BorderedOrderSummaryTotalBottom.PreviewProps = {
  theme: defaultTheme,
  variant: "left-aligned",
} satisfies BorderedOrderSummaryTotalBottomProps;
