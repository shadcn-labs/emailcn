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

import { ProductCard } from "@/registry/bases/react-email/ui/product-card";
import { stripeTheme } from "@/registry/themes/stripe";

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

export const ReceiptStripe = ({
  orderNumber = "INV-123",
  customerName = "John",
  items = [{ name: "Product 1", price: "$99.00", quantity: 1 }],
  subtotal = "$99.00",
  tax = "$7.92",
  total = "$106.92",
  supportHref = "#",
  _productName = "Stripe",
}: Props) => {
  void _productName;

  const t = stripeTheme;

  return (
    <Html>
      <Head />
      <Preview>Your receipt</Preview>
      <Tailwind config={t}>
        <Body className="bg-background font-sans">
          <Container className="mx-auto max-w-container p-8">
            <Section className="py-12">
              <Text className="mb-1 text-3xl font-bold tracking-tight text-foreground">
                Invoice
              </Text>
              <Text className="mb-8 text-base text-foreground-muted">
                {orderNumber} • {customerName}
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

ReceiptStripe.PreviewProps = {
  _productName: "Stripe",
  customerName: "John Doe",
  items: [{ name: "Subscription", price: "$99.00", quantity: 1 }],
  orderNumber: "INV-12345",
  subtotal: "$99.00",
  supportHref: "https://example.com/support",
  tax: "$7.92",
  total: "$106.92",
} satisfies Props;
