// Subject: Your receipt from Apple

import { ReceiptBlock } from "@/registry/bases/mjml-react/blocks/block-shared";
import { appleTheme } from "@/registry/bases/mjml-react/themes/apple";

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
}: Props) => (
  <ReceiptBlock
    customerName={customerName}
    items={items}
    orderNumber={orderNumber}
    subtotal={subtotal}
    supportHref={supportHref}
    supportLabel="Contact Apple Support"
    tax={tax}
    theme={appleTheme}
    total={total}
  />
);

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
