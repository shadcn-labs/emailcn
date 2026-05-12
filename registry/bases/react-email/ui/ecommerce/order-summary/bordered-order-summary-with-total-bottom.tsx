/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
  Head,
  Html,
  Hr,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export interface BorderedOrderSummaryTotalBottomProps {
  theme?: TailwindConfig;
  items?: { name: string; price: string; quantity: number }[];
  subtotal?: string;
  shipping?: string;
  tax?: string;
  total?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

export const BorderedOrderSummaryTotalBottomSection = ({
  items = [{ name: "Item 1", price: "$29.00", quantity: 1 }],
  subtotal = "$29.00",
  shipping = "$0.00",
  tax = "$0.00",
  total = "$29.00",
  variant = "default",
}: Omit<BorderedOrderSummaryTotalBottomProps, "theme">) => (
  <Section className="py-12">
    <Section className="border border-border rounded-md p-6">
      <Row className="pb-3 border-b border-border">
        <Column>
          <Text className="m-0 text-sm font-medium text-foreground-muted">
            Item
          </Text>
        </Column>
        <Column className="text-right">
          <Text className="m-0 text-sm font-medium text-foreground-muted">
            Price
          </Text>
        </Column>
      </Row>
      {items.map((item, i) => (
        <Row key={i} className="py-3 border-b border-border">
          <Column>
            <Text className="m-0 text-base text-foreground">{item.name}</Text>
            <Text className="m-0 text-sm text-foreground-muted">
              Qty: {item.quantity}
            </Text>
          </Column>
          <Column className="text-right align-middle">
            <Text className="m-0 text-base text-foreground">{item.price}</Text>
          </Column>
        </Row>
      ))}
      <Row className="pt-3">
        <Column>
          <Text className="m-0 text-base text-foreground-muted">Subtotal</Text>
        </Column>
        <Column className="text-right">
          <Text className="m-0 text-base text-foreground">{subtotal}</Text>
        </Column>
      </Row>
      <Row className="mt-2">
        <Column>
          <Text className="m-0 text-base text-foreground-muted">Shipping</Text>
        </Column>
        <Column className="text-right">
          <Text className="m-0 text-base text-foreground">{shipping}</Text>
        </Column>
      </Row>
      <Row className="mt-2">
        <Column>
          <Text className="m-0 text-base text-foreground-muted">Tax</Text>
        </Column>
        <Column className="text-right">
          <Text className="m-0 text-base text-foreground">{tax}</Text>
        </Column>
      </Row>
      <Hr className="border-border" />
      <Row className="mt-2">
        <Column>
          <Text className="m-0 text-lg font-bold text-foreground">Total</Text>
        </Column>
        <Column className="text-right">
          <Text className="m-0 text-lg font-bold text-foreground">{total}</Text>
        </Column>
      </Row>
    </Section>
  </Section>
);

export const BorderedOrderSummaryTotalBottom = ({
  theme = defaultTheme,
  items = [{ name: "Item 1", price: "$29.00", quantity: 1 }],
  subtotal = "$29.00",
  shipping = "$0.00",
  tax = "$0.00",
  total = "$29.00",
  variant = "default",
}: BorderedOrderSummaryTotalBottomProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Order Summary</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <BorderedOrderSummaryTotalBottomSection
          items={items}
          subtotal={subtotal}
          shipping={shipping}
          tax={tax}
          total={total}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

BorderedOrderSummaryTotalBottom.PreviewProps = {
  items: [
    { name: "Desk Lamp", price: "$59.00", quantity: 2 },
    { name: "Notebook Set", price: "$24.00", quantity: 1 },
  ],
  shipping: "$8.00",
  subtotal: "$142.00",
  tax: "$11.36",
  theme: defaultTheme,
  total: "$161.36",
  variant: "default",
} satisfies BorderedOrderSummaryTotalBottomProps;
