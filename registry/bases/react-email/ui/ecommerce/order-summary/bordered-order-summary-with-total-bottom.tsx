import { Body, Head, Html, Preview, Tailwind } from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";
import { OrderSummaryTableSection } from "@/registry/bases/react-email/ui/ecommerce/order-summary/order-summary-shared";
import type {
  BorderedOrderSummaryVariant,
  OrderSummaryAlignment,
} from "@/registry/bases/react-email/ui/ecommerce/order-summary/order-summary-shared";

export interface BorderedOrderSummaryTotalBottomProps {
  theme?: TailwindConfig;
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
  theme = defaultTheme,
  ...props
}: BorderedOrderSummaryTotalBottomProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Order summary</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <BorderedOrderSummaryTotalBottomSection {...props} />
      </Body>
    </Tailwind>
  </Html>
);

BorderedOrderSummaryTotalBottom.PreviewProps = {
  theme: defaultTheme,
  variant: "left-aligned",
} satisfies BorderedOrderSummaryTotalBottomProps;
