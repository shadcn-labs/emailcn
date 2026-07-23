import { Body, Head, Html, Preview } from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";
import { OrderSummaryTableSection } from "@/registry/bases/jsx-email/ui/ecommerce/order-summary/order-summary-shared";
import type {
  BoxedOrderSummaryVariant,
  OrderSummaryAlignment,
} from "@/registry/bases/jsx-email/ui/ecommerce/order-summary/order-summary-shared";

export interface BoxedOrderSummaryTotalTopProps {
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

export const BoxedOrderSummaryTotalTopSection = ({
  variant = "left-aligned",
}: Omit<BoxedOrderSummaryTotalTopProps, "theme">) => (
  <OrderSummaryTableSection
    alignment={getAlignment(variant)}
    cardDetails={false}
    filled={variant.endsWith("filled")}
    surface="boxed"
    totalPosition={"top"}
  />
);

export const BoxedOrderSummaryTotalTop = ({
  theme: _theme = defaultTheme,
  ...props
}: BoxedOrderSummaryTotalTopProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Order summary</Preview>
    <Body style={{ margin: 0 }}>
      <BoxedOrderSummaryTotalTopSection {...props} />
    </Body>
  </Html>
);

BoxedOrderSummaryTotalTop.PreviewProps = {
  theme: defaultTheme,
  variant: "left-aligned",
} satisfies BoxedOrderSummaryTotalTopProps;
