/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export interface ShoppingCartRowItemsProps {
  theme?: EmailThemeTokens;
  items?: {
    imageUrl?: string;
    name: string;
    price: string;
    quantity: number;
  }[];
  subtotal?: string;
  total?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

const ShoppingCartRowItemsSection = ({
  items,
  subtotal,
  theme,
  total,
  variant,
}: {
  items: NonNullable<ShoppingCartRowItemsProps["items"]>;
  subtotal?: string;
  theme: EmailThemeTokens;
  total?: string;
  variant: NonNullable<ShoppingCartRowItemsProps["variant"]>;
}) => {
  const alignText =
    variant === "slanted-left"
      ? "left"
      : variant === "slanted-right"
        ? "right"
        : "left";

  return (
    <Section
      style={{
        border: `1px solid ${theme.colorBorder ?? "#e5e7eb"}`,
        borderRadius: theme.borderRadius,
        padding: theme.spacingBase ?? "16px",
      }}
    >
      {items.map((item) => (
        <Section
          key={item.name}
          style={{ padding: `${theme.spacingBase ?? "16px"} 0` }}
        >
          <Row>
            <Column style={{ width: "80px" }}>
              {item.imageUrl ? (
                <Img
                  alt={item.name}
                  src={item.imageUrl}
                  width={64}
                  style={{
                    borderRadius: theme.borderRadius,
                    display: "block",
                    margin: "0 auto",
                    maxWidth: "100%",
                  }}
                />
              ) : null}
            </Column>
            <Column>
              <Text
                style={{
                  color: theme.colorText,
                  fontFamily: theme.fontFamily,
                  fontSize: theme.fontSizeBase ?? "14px",
                  fontWeight: theme.fontWeightMedium ?? "500",
                  margin: 0,
                  paddingBottom: theme.spacingBase ?? "16px",
                  textAlign: alignText,
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  color: theme.colorTextMuted,
                  fontFamily: theme.fontFamily,
                  fontSize: theme.fontSizeSm ?? "12px",
                  margin: 0,
                  textAlign: alignText,
                }}
              >
                Qty: {item.quantity}
              </Text>
            </Column>
            <Column style={{ width: "100px" }}>
              <Text
                style={{
                  color: theme.colorText,
                  fontFamily: theme.fontFamily,
                  fontSize: theme.fontSizeBase ?? "14px",
                  fontWeight: theme.fontWeightBold ?? "700",
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
      <Section style={{ padding: "0" }}>
        <Row>
          <Column>
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
          </Column>
        </Row>
      </Section>
      {subtotal ? (
        <Section style={{ padding: `${theme.spacingBase ?? "16px"} 0 0` }}>
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
                  color: theme.colorTextMuted,
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
      ) : null}
      {total ? (
        <Section style={{ padding: `${theme.spacingBase ?? "16px"} 0 0` }}>
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
      ) : null}
    </Section>
  );
};

export const ShoppingCartRowItems = ({
  theme = defaultTheme,
  items = [{ name: "Product 1", price: "$29.00", quantity: 2 }],
  subtotal = "$58.00",
  total = "$58.00",
  variant = "default",
}: ShoppingCartRowItemsProps) => (
  <Html>
    <Head />
    <Preview>cart-rows</Preview>
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
        <ShoppingCartRowItemsSection
          items={items}
          subtotal={subtotal}
          theme={theme}
          total={total}
          variant={variant}
        />
      </Container>
    </Body>
  </Html>
);

ShoppingCartRowItems.PreviewProps = {
  items: [
    {
      imageUrl: "https://static.photos/technology/800x600/2",
      name: "Wireless Headphones",
      price: "$129.00",
      quantity: 1,
    },
    {
      imageUrl: "https://static.photos/technology/800x600/3",
      name: "Phone Case",
      price: "$19.00",
      quantity: 2,
    },
  ],
  subtotal: "$167.00",
  theme: defaultTheme,
  total: "$167.00",
  variant: "default",
} satisfies ShoppingCartRowItemsProps;
