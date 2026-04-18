// Subject: Your receipt from {productName}

import { Body, Column, Container, Head, Hr, Html, Preview, Row, Section, Text } from "react-email";
import { ProductCard } from "../components/product-card";
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
  productName?: string;
}

export const ReceiptDefault = ({
  orderNumber = "ORD-123",
  customerName = "John",
  items = [
    { name: "Product 1", price: "$99.00", quantity: 1 },
    { name: "Product 2", price: "$49.00", quantity: 2 },
  ],
  subtotal = "$197.00",
  tax = "$15.76",
  total = "$212.76",
  supportHref = "#",
  _productName = "Acme",
}: Props) => {
  const t = defaultTheme;

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
      <Body style={{ backgroundColor: t.colorBackground, fontFamily: t.fontFamily }}>
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
            Need help? <a href={supportHref}>Contact support</a>
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

ReceiptDefault.PreviewProps = {
  customerName: "John Doe",
  items: [
    {
      imageUrl: "https://example.com/product1.jpg",
      name: "Premium Sneakers",
      price: "$149.00",
      quantity: 1,
    },
    {
      imageUrl: "https://example.com/product2.jpg",
      name: "Running Socks",
      price: "$25.00",
      quantity: 2,
    },
  ],
  orderNumber: "ORD-12345",
  productName: "Acme",
  subtotal: "$199.00",
  supportHref: "https://example.com/support",
  tax: "$15.92",
  total: "$214.92",
} satisfies Props;

export default ReceiptDefault;
