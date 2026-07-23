// Subject: Your receipt from {_productName}

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
  Tailwind,
  Text,
  Link,
} from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";

interface ProductCardProps {
  imageUrl?: string;
  name?: string;
  price?: string;
  quantity?: number;
  ctaLabel?: string;
  ctaHref?: string;
}

const ProductCardSection = ({
  imageUrl,
  name = "Product Name",
  price = "$99.00",
  quantity = 1,
  ctaLabel = "View Details",
  ctaHref = "#",
}: Omit<ProductCardProps, "theme">) => (
  <Section
    style={{
      backgroundColor: defaultTheme.colorBackground,
      border: `1px solid ${defaultTheme.colorBorder}`,
      borderRadius: "8px",
      padding: "24px",
    }}
  >
    <Row>
      <Column style={{ verticalAlign: "top", width: "100px" }}>
        {imageUrl ? (
          <Img
            src={imageUrl}
            alt={name}
            width={100}
            style={{
              borderRadius: "8px",
              height: "auto",
              maxWidth: "100%",
              objectFit: "cover",
            }}
          />
        ) : null}
      </Column>
      <Column style={{ paddingLeft: "24px", verticalAlign: "top" }}>
        <Text
          style={{
            color: defaultTheme.colorText,
            fontSize: defaultTheme.fontSizeBase,
            fontWeight: defaultTheme.fontWeightMedium,
            marginBottom: "8px",
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            color: defaultTheme.colorText,
            fontSize: defaultTheme.fontSizeLg,
            fontWeight: defaultTheme.fontWeightBold,
          }}
        >
          {price}
          {quantity > 1 ? (
            <span
              style={{
                color: defaultTheme.colorTextMuted,
                fontSize: defaultTheme.fontSizeSm,
                marginLeft: "8px",
              }}
            >
              {" "}
              x {quantity}
            </span>
          ) : null}
        </Text>
        {ctaLabel ? (
          <Text style={{ marginTop: "8px" }}>
            <Link
              href={ctaHref}
              style={{
                color: defaultTheme.colorPrimary,
                display: "inline-block",
                fontSize: defaultTheme.fontSizeSm,
                textDecoration: "none",
              }}
            >
              {ctaLabel}
            </Link>
          </Text>
        ) : null}
      </Column>
    </Row>
  </Section>
);

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
  void _productName;

  const t = defaultTheme;

  return (
    <Html>
      <Head>
        <DefaultFonts />
      </Head>
      <Preview>Your receipt</Preview>
      <Tailwind>
        <Body
          style={{
            backgroundColor: t.colorBackground,
            fontFamily: t.fontFamily,
            margin: 0,
          }}
        >
          <Container style={{ maxWidth: t.containerWidth, padding: "32px" }}>
            <Section style={{ paddingTop: t.spacingXl }}>
              <Text
                style={{
                  color: t.colorText,
                  fontSize: "28px",
                  fontWeight: t.fontWeightBold,
                  letterSpacing: "-0.025em",
                  marginBottom: "4px",
                }}
              >
                Receipt
              </Text>
              <Text
                style={{
                  color: t.colorTextMuted,
                  fontSize: t.fontSizeBase,
                  marginBottom: "32px",
                }}
              >
                Order {orderNumber} • {customerName}
              </Text>
            </Section>

            <Section>
              {items.map((item, index) => (
                <ProductCardSection
                  key={index}
                  imageUrl={item.imageUrl}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                />
              ))}
            </Section>

            <Section style={{ marginTop: "16px" }}>
              <Row>
                <Column>
                  <Text
                    style={{
                      color: t.colorTextMuted,
                      fontSize: t.fontSizeBase,
                    }}
                  >
                    Subtotal
                  </Text>
                </Column>
                <Column style={{ textAlign: "right" }}>
                  <Text
                    style={{
                      color: t.colorText,
                      fontSize: t.fontSizeBase,
                      fontWeight: t.fontWeightMedium,
                      textAlign: "right",
                    }}
                  >
                    {subtotal}
                  </Text>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Text
                    style={{
                      color: t.colorTextMuted,
                      fontSize: t.fontSizeBase,
                    }}
                  >
                    Tax
                  </Text>
                </Column>
                <Column style={{ textAlign: "right" }}>
                  <Text
                    style={{
                      color: t.colorText,
                      fontSize: t.fontSizeBase,
                      fontWeight: t.fontWeightMedium,
                      textAlign: "right",
                    }}
                  >
                    {tax}
                  </Text>
                </Column>
              </Row>
              <Hr
                style={{
                  borderColor: t.colorBorder,
                  marginBottom: "16px",
                  marginTop: "16px",
                }}
              />
              <Row>
                <Column>
                  <Text
                    style={{
                      color: t.colorText,
                      fontSize: t.fontSizeLg,
                      fontWeight: t.fontWeightBold,
                    }}
                  >
                    Total
                  </Text>
                </Column>
                <Column style={{ textAlign: "right" }}>
                  <Text
                    style={{
                      color: t.colorText,
                      fontSize: t.fontSizeLg,
                      fontWeight: t.fontWeightBold,
                      textAlign: "right",
                    }}
                  >
                    {total}
                  </Text>
                </Column>
              </Row>
            </Section>

            <Text
              style={{
                color: t.colorTextMuted,
                fontSize: t.fontSizeSm,
                marginTop: "32px",
              }}
            >
              Need help?{" "}
              <Link
                href={supportHref}
                style={{ color: t.colorText, textDecoration: "underline" }}
              >
                Contact support
              </Link>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

ReceiptDefault.PreviewProps = {
  _productName: "Acme",
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
  subtotal: "$199.00",
  supportHref: "https://example.com/support",
  tax: "$15.92",
  total: "$214.92",
} satisfies Props;
