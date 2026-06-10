/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export interface OrderSummaryBillingTopProps {
  theme?: EmailThemeTokens;
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

const OrderSummaryBillingTopSection = ({
  items,
  subtotal,
  shipping,
  tax,
  total,
  billingName,
  billingAddress,
  paymentMethod,
  cardNumber,
  theme,
}: {
  items: NonNullable<OrderSummaryBillingTopProps["items"]>;
  subtotal?: string;
  shipping?: string;
  tax?: string;
  total?: string;
  billingName?: string;
  billingAddress?: string;
  paymentMethod?: string;
  cardNumber?: string;
  theme: EmailThemeTokens;
}) => (
  <Section style={{ padding: "0" }}>
    <Section style={{ padding: `0 0 ${theme.spacingXl ?? "24px"}` }}>
      <Row>
        <Column
          style={{
            paddingRight: theme.spacingBase ?? "16px",
            verticalAlign: "top",
            width: "50%",
          }}
        >
          <Text
            style={{
              color: theme.colorTextMuted,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeSm ?? "12px",
              fontWeight: theme.fontWeightMedium ?? "500",
              margin: 0,
            }}
          >
            Billing Address
          </Text>
          <Text
            style={{
              color: theme.colorText,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeBase ?? "14px",
              margin: 0,
              paddingTop: theme.spacingBase ?? "16px",
            }}
          >
            {billingName}
          </Text>
          <Text
            style={{
              color: theme.colorTextMuted,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeSm ?? "12px",
              margin: 0,
            }}
          >
            {billingAddress}
          </Text>
        </Column>
        <Column
          style={{
            paddingLeft: theme.spacingBase ?? "16px",
            verticalAlign: "top",
            width: "50%",
          }}
        >
          <Text
            style={{
              color: theme.colorTextMuted,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeSm ?? "12px",
              fontWeight: theme.fontWeightMedium ?? "500",
              margin: 0,
            }}
          >
            Payment Method
          </Text>
          <Text
            style={{
              color: theme.colorText,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeBase ?? "14px",
              margin: 0,
              paddingTop: theme.spacingBase ?? "16px",
            }}
          >
            {paymentMethod}
          </Text>
          <Text
            style={{
              color: theme.colorTextMuted,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeSm ?? "12px",
              margin: 0,
            }}
          >
            {cardNumber}
          </Text>
        </Column>
      </Row>
    </Section>
    <Hr
      style={{
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopColor: theme.colorBorder,
        borderTopStyle: "solid",
        width: "100%",
      }}
    />
    <Section style={{ padding: `${theme.spacingXl ?? "24px"} 0 12px` }}>
      <Row>
        <Column>
          <Text
            style={{
              color: theme.colorTextMuted,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeSm ?? "12px",
              fontWeight: theme.fontWeightMedium ?? "500",
              margin: 0,
            }}
          >
            Item
          </Text>
        </Column>
        <Column style={{ width: "100px" }}>
          <Text
            style={{
              color: theme.colorTextMuted,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeSm ?? "12px",
              fontWeight: theme.fontWeightMedium ?? "500",
              margin: 0,
              textAlign: "right",
            }}
          >
            Price
          </Text>
        </Column>
      </Row>
    </Section>
    {items.map((item, i) => (
      <Section key={i} style={{ padding: "16px 0" }}>
        <Row>
          <Column>
            <Text
              style={{
                color: theme.colorText,
                fontFamily: theme.fontFamily,
                fontSize: theme.fontSizeBase ?? "14px",
                margin: 0,
              }}
            >
              {item.name}
              <br />
              <span
                style={{
                  color: theme.colorTextMuted,
                  fontSize: theme.fontSizeSm ?? "12px",
                }}
              >
                Qty: {item.quantity}
              </span>
            </Text>
          </Column>
          <Column style={{ width: "100px" }}>
            <Text
              style={{
                color: theme.colorText,
                fontFamily: theme.fontFamily,
                fontSize: theme.fontSizeBase ?? "14px",
                margin: 0,
                textAlign: "right",
              }}
            >
              {item.price}
            </Text>
          </Column>
        </Row>
      </Section>
    ))}
    <Hr
      style={{
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopColor: theme.colorBorder,
        borderTopStyle: "solid",
        width: "100%",
      }}
    />
    <Section style={{ padding: "16px 0 0" }}>
      <Row>
        <Column>
          <Text
            style={{
              color: theme.colorTextMuted,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeBase ?? "14px",
              margin: 0,
            }}
          >
            Subtotal
          </Text>
        </Column>
        <Column style={{ width: "100px" }}>
          <Text
            style={{
              color: theme.colorText,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeBase ?? "14px",
              margin: 0,
              textAlign: "right",
            }}
          >
            {subtotal}
          </Text>
        </Column>
      </Row>
    </Section>
    <Section style={{ padding: "8px 0 0" }}>
      <Row>
        <Column>
          <Text
            style={{
              color: theme.colorTextMuted,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeBase ?? "14px",
              margin: 0,
            }}
          >
            Shipping
          </Text>
        </Column>
        <Column style={{ width: "100px" }}>
          <Text
            style={{
              color: theme.colorText,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeBase ?? "14px",
              margin: 0,
              textAlign: "right",
            }}
          >
            {shipping}
          </Text>
        </Column>
      </Row>
    </Section>
    <Section style={{ padding: "8px 0 0" }}>
      <Row>
        <Column>
          <Text
            style={{
              color: theme.colorTextMuted,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeBase ?? "14px",
              margin: 0,
            }}
          >
            Tax
          </Text>
        </Column>
        <Column style={{ width: "100px" }}>
          <Text
            style={{
              color: theme.colorText,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeBase ?? "14px",
              margin: 0,
              textAlign: "right",
            }}
          >
            {tax}
          </Text>
        </Column>
      </Row>
    </Section>
    <Hr
      style={{
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopColor: theme.colorBorder,
        borderTopStyle: "solid",
        width: "100%",
      }}
    />
    <Section style={{ padding: "16px 0 0" }}>
      <Row>
        <Column>
          <Text
            style={{
              color: theme.colorText,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeLg ?? "16px",
              fontWeight: theme.fontWeightBold ?? "700",
              margin: 0,
            }}
          >
            Total
          </Text>
        </Column>
        <Column style={{ width: "100px" }}>
          <Text
            style={{
              color: theme.colorText,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeLg ?? "16px",
              fontWeight: theme.fontWeightBold ?? "700",
              margin: 0,
              textAlign: "right",
            }}
          >
            {total}
          </Text>
        </Column>
      </Row>
    </Section>
  </Section>
);

export const OrderSummaryBillingTop = ({
  theme = defaultTheme,
  items = [{ name: "Item", price: "$29.00", quantity: 1 }],
  subtotal = "$29.00",
  shipping = "$0.00",
  tax = "$0.00",
  total = "$29.00",
  billingName = "John Doe",
  billingAddress = "123 Main St",
  paymentMethod = "Visa",
  cardNumber = "**** 4242",
  variant = "default",
}: OrderSummaryBillingTopProps) => (
  <Html>
    <Head />
    <Preview>order-summary</Preview>
    <Body
      style={{
        backgroundColor: theme.colorBackground,
        color: theme.colorTextMuted,
        fontFamily: theme.fontFamily,
        fontSize: theme.fontSizeBase,
        lineHeight: theme.lineHeightBase,
        margin: 0,
      }}
    >
      <Container style={{ maxWidth: theme.containerWidth }}>
        <Section style={{ padding: "0" }}>
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
            theme={theme}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

OrderSummaryBillingTop.PreviewProps = {
  billingAddress: "456 Oak Ave, SF, CA 94102",
  billingName: "Jane Smith",
  cardNumber: "**** 9876",
  items: [{ name: "Office Chair", price: "$349.00", quantity: 1 }],
  paymentMethod: "Mastercard",
  shipping: "$0.00",
  subtotal: "$349.00",
  tax: "$27.92",
  theme: defaultTheme,
  total: "$376.92",
  variant: "default",
} satisfies OrderSummaryBillingTopProps;
