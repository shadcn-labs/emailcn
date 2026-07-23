import { Body, Head, Html, Preview, Tailwind } from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";
import { OrderSummaryTableSection } from "@/registry/bases/react-email/ui/ecommerce/order-summary/order-summary-shared";
import type {
  BorderedOrderSummaryVariant,
  OrderSummaryAlignment,
} from "@/registry/bases/react-email/ui/ecommerce/order-summary/order-summary-shared";

export interface BorderedOrderSummaryTotalTopProps {
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
  theme = defaultTheme,
  ...props
}: BorderedOrderSummaryTotalTopProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Order summary</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <BorderedOrderSummaryTotalTopSection {...props} />
      </Body>
    </Tailwind>
  </Html>
);

BorderedOrderSummaryTotalTop.PreviewProps = {
  theme: defaultTheme,
  variant: "left-aligned",
} satisfies BorderedOrderSummaryTotalTopProps;
