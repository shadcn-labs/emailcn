// Subject: Your receipt from Nike

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

import { nikeTheme } from "@/registry/bases/react-email/themes/nike";
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

export const ReceiptNike = ({
  orderNumber = "ORD-123",
  customerName = "John",
  items = [
    {
      imageUrl: "https://example.com/nike.jpg",
      name: "Air Max 90",
      price: "$149.00",
      quantity: 1,
    },
  ],
  subtotal = "$149.00",
  tax = "$11.92",
  total = "$160.92",
  supportHref = "#",
  _productName = "Nike",
}: Props) => {
  void _productName;

  const t = nikeTheme;

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
              {items.map((item, _index) => (
                <ProductCardSection
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
                Contact Nike Support
              </a>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

ReceiptNike.PreviewProps = {
  _productName: "Nike",
  customerName: "John Doe",
  items: [
    {
      imageUrl: "https://example.com/nike.jpg",
      name: "Air Max 90",
      price: "$149.00",
      quantity: 1,
    },
  ],
  orderNumber: "ORD-12345",
  subtotal: "$149.00",
  supportHref: "https://example.com/support",
  tax: "$11.92",
  total: "$160.92",
} satisfies Props;
