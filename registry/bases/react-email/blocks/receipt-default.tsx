// Subject: Your receipt from {_productName}

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
  Tailwind,
  Text,
} from "react-email";

import { ProductCardSection } from "@/registry/bases/react-email/ui/product-card";
import { defaultTheme } from "@/registry/themes/default";

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
      <Head />
      <Preview>Your receipt</Preview>
      <Tailwind config={t}>
        <Body className="bg-background font-sans">
          <Container className="mx-auto max-w-container p-8">
            <Section className="py-12">
              <Text className="mb-1 text-3xl font-bold tracking-tight text-foreground">
                Receipt
              </Text>
              <Text className="mb-8 text-base text-foreground-muted">
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

            <Section className="mt-4">
              <Row>
                <Column>
                  <Text className="text-base text-foreground-muted">
                    Subtotal
                  </Text>
                </Column>
                <Column align="right">
                  <Text className="text-right text-base font-medium text-foreground">
                    {subtotal}
                  </Text>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Text className="text-base text-foreground-muted">Tax</Text>
                </Column>
                <Column align="right">
                  <Text className="text-right text-base font-medium text-foreground">
                    {tax}
                  </Text>
                </Column>
              </Row>
              <Hr className="my-4 border-border" />
              <Row>
                <Column>
                  <Text className="text-lg font-bold text-foreground">
                    Total
                  </Text>
                </Column>
                <Column align="right">
                  <Text className="text-right text-lg font-bold text-foreground">
                    {total}
                  </Text>
                </Column>
              </Row>
            </Section>

            <Text className="mt-8 text-sm text-foreground-muted">
              Need help?{" "}
              <a href={supportHref} className="text-foreground underline">
                Contact support
              </a>
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
