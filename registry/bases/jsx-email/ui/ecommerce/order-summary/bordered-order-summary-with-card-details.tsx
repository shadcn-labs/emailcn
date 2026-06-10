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

export interface BorderedOrderSummaryCardDetailsProps {
  theme?: EmailThemeTokens;
  items?: { name: string; price: string; quantity: number }[];
  subtotal?: string;
  shipping?: string;
  tax?: string;
  total?: string;
  cardLabel?: string;
  cardNumber?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

const BorderedOrderSummaryCardDetailsSection = ({
  items,
  subtotal,
  shipping,
  tax,
  total,
  cardLabel,
  cardNumber,
  theme,
}: {
  items: NonNullable<BorderedOrderSummaryCardDetailsProps["items"]>;
  subtotal?: string;
  shipping?: string;
  tax?: string;
  total?: string;
  cardLabel?: string;
  cardNumber?: string;
  theme: EmailThemeTokens;
}) => (
  <Section
    style={{
      border: `1px solid ${theme.colorBorder ?? "#e5e7eb"}`,
      borderRadius: theme.borderRadius,
      padding: theme.spacingBase ?? "16px",
    }}
  >
    <Section
      style={{
        borderBottom: `1px solid ${theme.colorBorder ?? "#e5e7eb"}`,
        padding: "0 0 12px",
      }}
    >
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
      <Section
        key={i}
        style={{
          borderBottom: `1px solid ${theme.colorBorder ?? "#e5e7eb"}`,
          padding: "16px 0",
        }}
      >
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
    {cardLabel ? (
      <Section style={{ padding: "16px 0 0" }}>
        <Row>
          <Column>
            <Text
              style={{
                color: theme.colorTextMuted,
                fontFamily: theme.fontFamily,
                fontSize: theme.fontSizeSm ?? "12px",
                margin: 0,
              }}
            >
              {cardLabel}
            </Text>
          </Column>
          <Column style={{ width: "100px" }}>
            <Text
              style={{
                color: theme.colorText,
                fontFamily: theme.fontFamily,
                fontSize: theme.fontSizeSm ?? "12px",
                margin: 0,
                textAlign: "right",
              }}
            >
              {cardNumber}
            </Text>
          </Column>
        </Row>
      </Section>
    ) : null}
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

export const BorderedOrderSummaryCardDetails = ({
  theme = defaultTheme,
  items = [{ name: "Item", price: "$29.00", quantity: 1 }],
  subtotal = "$29.00",
  shipping = "$0.00",
  tax = "$0.00",
  total = "$29.00",
  cardLabel = "Amex ending in",
  cardNumber = "**** 5555",
  variant = "default",
}: BorderedOrderSummaryCardDetailsProps) => (
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
          <BorderedOrderSummaryCardDetailsSection
            items={items}
            subtotal={subtotal}
            shipping={shipping}
            tax={tax}
            total={total}
            cardLabel={cardLabel}
            cardNumber={cardNumber}
            theme={theme}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

BorderedOrderSummaryCardDetails.PreviewProps = {
  cardLabel: "Amex ending in",
  cardNumber: "**** 5555",
  items: [
    { name: "Leather Backpack", price: "$89.00", quantity: 1 },
    { name: "Wallet", price: "$39.00", quantity: 1 },
  ],
  shipping: "$5.00",
  subtotal: "$128.00",
  tax: "$10.24",
  theme: defaultTheme,
  total: "$143.24",
  variant: "default",
} satisfies BorderedOrderSummaryCardDetailsProps;
