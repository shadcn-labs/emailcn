import { Body, Head, Html, Preview, Tailwind } from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";
import { OrderSummaryTableSection } from "@/registry/bases/react-email/ui/ecommerce/order-summary/order-summary-shared";
import type {
  BoxedOrderSummaryVariant,
  OrderSummaryAlignment,
} from "@/registry/bases/react-email/ui/ecommerce/order-summary/order-summary-shared";

export interface BoxedOrderSummaryCardDetailsTotalBottomProps {
  theme?: TailwindConfig;
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
  theme = defaultTheme,
  ...props
}: BoxedOrderSummaryCardDetailsTotalBottomProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Order summary</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <BoxedOrderSummaryCardDetailsTotalBottomSection {...props} />
      </Body>
    </Tailwind>
  </Html>
);

BoxedOrderSummaryCardDetailsTotalBottom.PreviewProps = {
  theme: defaultTheme,
  variant: "left-aligned",
} satisfies BoxedOrderSummaryCardDetailsTotalBottomProps;
