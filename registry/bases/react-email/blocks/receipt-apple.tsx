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
  Tailwind,
  Text,
} from "react-email";

import { appleTheme } from "@/registry/bases/react-email/themes/apple";
import { ProductListWithRowsSection as ProductCardSection } from "@/registry/bases/react-email/ui/ecommerce/product-lists/product-list-with-rows";

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
  void _productName;

  const t = appleTheme;

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
                  key={`${item.name}-${index}`}
                  products={[
                    {
                      imageUrl: item.imageUrl,
                      name: item.name,
                      price: item.price,
                      quantity: item.quantity,
                    },
                  ]}
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
                Contact Apple Support
              </a>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

ReceiptApple.PreviewProps = {
  _productName: "Apple",
  customerName: "John Doe",
  items: [
    {
      imageUrl: "https://static.photos/technology/640x640/2",
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
