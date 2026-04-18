// Subject: Your receipt from Apple

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
} from "react-email";

import { ProductCard } from "../components/product-card";
import type { EmailTheme } from "../themes/default";
import { theme as defaultTheme } from "../themes/default";

interface ReceiptItem {
  name: string;
  imageUrl?: string;
  price: string;
  quantity?: number;
}

interface Props {
  orderNumber?: string;
  customerName?: string;
  items?: ReceiptItem[];
  subtotal?: string;
  tax?: string;
  total?: string;
  supportHref?: string;
  _productName?: string;
}

const getAppleTheme = (t: EmailTheme): EmailTheme => ({
  ...t,
  colorBackgroundMuted: "#f5f5f7",
});

export const ReceiptApple = ({
  orderNumber = "ORD-123",
  customerName = "John",
  items = [{ name: "iPhone 15 Pro", price: "$999.00", quantity: 1 }],
  subtotal = "$999.00",
  tax = "$79.92",
  total = "$1078.92",
  supportHref = "#",
  _productName = "Apple",
}: Props) => {
  const baseTheme = defaultTheme;
  const t = getAppleTheme(baseTheme);

  const style = {
    heading: {
      color: t.colorText,
      fontSize: t.fontSizeHeading,
      fontWeight: t.fontWeightBold,
      marginBottom: "4px",
    },
    section: { padding: `${t.spacingXl} 0` },
    subheading: {
      color: t.colorTextMuted,
      fontSize: t.fontSizeBase,
      marginBottom: t.spacingLg,
    },
    summaryLabel: {
      color: t.colorTextMuted,
      fontSize: t.fontSizeBase,
    },
    summaryRow: {
      borderBottom: `1px solid ${t.colorBorderSubtle}`,
      padding: "8px 0",
    },
    summaryValue: {
      color: t.colorText,
      fontSize: t.fontSizeBase,
      fontWeight: t.fontWeightMedium,
      textAlign: "right" as const,
    },
    support: {
      color: t.colorTextMuted,
      fontSize: t.fontSizeSm,
      marginTop: t.spacingLg,
    },
    totalLabel: {
      color: t.colorText,
      fontSize: t.fontSizeLg,
      fontWeight: t.fontWeightBold,
    },
    totalRow: {
      borderBottom: `2px solid ${t.colorText}`,
      padding: "16px 0",
    },
    totalValue: {
      color: t.colorText,
      fontSize: t.fontSizeLg,
      fontWeight: t.fontWeightBold,
      textAlign: "right" as const,
    },
  };

  return (
    <Html>
      <Head />
      <Preview>Your receipt</Preview>
      <Body
        style={{ backgroundColor: t.colorBackground, fontFamily: t.fontFamily }}
      >
        <Container
          style={{
            margin: "0 auto",
            maxWidth: t.containerWidth,
            padding: t.spacingLg,
          }}
        >
          <Section style={style.section}>
            <Text style={style.heading}>Receipt</Text>
            <Text style={style.subheading}>
              Order {orderNumber} • {customerName}
            </Text>
          </Section>

          <Section>
            {items.map((item, index) => (
              <ProductCard
                key={index}
                theme={t}
                imageUrl={item.imageUrl}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
              />
            ))}
          </Section>

          <Section>
            <Row>
              <Column>
                <Text style={style.summaryLabel}>Subtotal</Text>
              </Column>
              <Column align="right">
                <Text style={style.summaryValue}>{subtotal}</Text>
              </Column>
            </Row>
            <Row>
              <Column>
                <Text style={style.summaryLabel}>Tax</Text>
              </Column>
              <Column align="right">
                <Text style={style.summaryValue}>{tax}</Text>
              </Column>
            </Row>
            <Hr style={{ borderColor: t.colorBorder, margin: "16px 0" }} />
            <Row>
              <Column>
                <Text style={style.totalLabel}>Total</Text>
              </Column>
              <Column align="right">
                <Text style={style.totalValue}>{total}</Text>
              </Column>
            </Row>
          </Section>

          <Text style={style.support}>
            Need help? <a href={supportHref}>Contact Apple Support</a>
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

ReceiptApple.PreviewProps = {
  _productName: "Apple",
  customerName: "John Doe",
  items: [
    {
      imageUrl: "https://example.com/iphone.jpg",
      name: "iPhone 15 Pro",
      price: "$999.00",
      quantity: 1,
    },
  ],
  orderNumber: "ORD-12345",
  subtotal: "$999.00",
  supportHref: "https://example.com/support",
  tax: "$79.92",
  total: "$1078.92",
} satisfies Props;

export default ReceiptApple;
