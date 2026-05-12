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

export interface OrderSummaryBillingTopProps {
  theme?: TailwindConfig;
  items?: { name: string; price: string; quantity: number }[];
  subtotal?: string;
  shipping?: string;
  tax?: string;
  total?: string;
  billingName?: string;
  billingAddress?: string;
  paymentMethod?: string;
  cardNumber?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

export const OrderSummaryBillingTopSection = ({
  items = [{ name: "Item 1", price: "$29.00", quantity: 1 }],
  subtotal = "$29.00",
  shipping = "$0.00",
  tax = "$0.00",
  total = "$29.00",
  billingName = "John Doe",
  billingAddress = "123 Main St, City, State 12345",
  paymentMethod = "Visa",
  cardNumber = "**** 4242",
  variant = "default",
}: Omit<OrderSummaryBillingTopProps, "theme">) => (
  <Section className="py-12">
    <Row className="mb-6">
      <Column className="w-1/2 align-top pr-4">
        <Text className="m-0 text-sm font-medium text-foreground-muted">
          Billing Address
        </Text>
        <Text className="mt-1 text-base text-foreground">{billingName}</Text>
        <Text className="m-0 text-sm text-foreground-muted">
          {billingAddress}
        </Text>
      </Column>
      <Column className="w-1/2 align-top pl-4">
        <Text className="m-0 text-sm font-medium text-foreground-muted">
          Payment Method
        </Text>
        <Text className="mt-1 text-base text-foreground">{paymentMethod}</Text>
        <Text className="m-0 text-sm text-foreground-muted">{cardNumber}</Text>
      </Column>
    </Row>
    <Hr className="border-border" />
    <Row className="pb-3 border-b border-border mt-3">
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
      <Row key={i} className="py-3">
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
    <Hr className="border-border" />
    <Row className="mt-3">
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
);

export const OrderSummaryBillingTop = ({
  theme = defaultTheme,
  items = [{ name: "Item 1", price: "$29.00", quantity: 1 }],
  subtotal = "$29.00",
  shipping = "$0.00",
  tax = "$0.00",
  total = "$29.00",
  billingName = "John Doe",
  billingAddress = "123 Main St, City, State 12345",
  paymentMethod = "Visa",
  cardNumber = "**** 4242",
  variant = "default",
}: OrderSummaryBillingTopProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Order Summary</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <OrderSummaryBillingTopSection
          items={items}
          subtotal={subtotal}
          shipping={shipping}
          tax={tax}
          total={total}
          billingName={billingName}
          billingAddress={billingAddress}
          paymentMethod={paymentMethod}
          cardNumber={cardNumber}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

OrderSummaryBillingTop.PreviewProps = {
  billingAddress: "456 Oak Ave, Suite 200, San Francisco, CA 94102",
  billingName: "Jane Smith",
  cardNumber: "**** 9876",
  items: [
    { name: "Office Chair", price: "$349.00", quantity: 1 },
    { name: "Desk Pad", price: "$29.00", quantity: 1 },
  ],
  paymentMethod: "Mastercard",
  shipping: "$0.00",
  subtotal: "$378.00",
  tax: "$30.24",
  theme: defaultTheme,
  total: "$408.24",
  variant: "default",
} satisfies OrderSummaryBillingTopProps;
