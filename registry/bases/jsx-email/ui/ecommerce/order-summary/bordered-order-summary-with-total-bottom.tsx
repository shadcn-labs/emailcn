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

export interface BorderedOrderSummaryTotalBottomProps {
  theme?: EmailThemeTokens;
  items?: { name: string; price: string; quantity: number }[];
  subtotal?: string;
  shipping?: string;
  tax?: string;
  total?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

const BorderedOrderSummaryTotalBottomSection = ({
  items,
  subtotal,
  shipping,
  tax,
  total,
  theme,
}: {
  items: NonNullable<BorderedOrderSummaryTotalBottomProps["items"]>;
  subtotal?: string;
  shipping?: string;
  tax?: string;
  total?: string;
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

export const BorderedOrderSummaryTotalBottom = ({
  theme = defaultTheme,
  items = [{ name: "Item", price: "$29.00", quantity: 1 }],
  subtotal = "$29.00",
  shipping = "$0.00",
  tax = "$0.00",
  total = "$29.00",
  variant = "default",
}: BorderedOrderSummaryTotalBottomProps) => (
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
          <BorderedOrderSummaryTotalBottomSection
            items={items}
            subtotal={subtotal}
            shipping={shipping}
            tax={tax}
            total={total}
            theme={theme}
          />
        </Section>
      </Container>
    </Body>
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
