import { Body, Head, Html, Preview } from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";
import { OrderSummaryTableSection } from "@/registry/bases/jsx-email/ui/ecommerce/order-summary/order-summary-shared";
import type {
  BoxedOrderSummaryVariant,
  OrderSummaryAlignment,
} from "@/registry/bases/jsx-email/ui/ecommerce/order-summary/order-summary-shared";

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
  theme: _theme = defaultTheme,
  ...props
}: BoxedOrderSummaryCardDetailsTotalBottomProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Order summary</Preview>
    <Body style={{ margin: 0 }}>
      <BoxedOrderSummaryCardDetailsTotalBottomSection {...props} />
    </Body>
  </Html>
);

BoxedOrderSummaryCardDetailsTotalBottom.PreviewProps = {
  theme: defaultTheme,
  variant: "left-aligned",
} satisfies BoxedOrderSummaryCardDetailsTotalBottomProps;
