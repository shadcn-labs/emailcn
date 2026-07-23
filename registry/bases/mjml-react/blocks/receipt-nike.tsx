// Subject: Your receipt from Nike

import { ReceiptBlock } from "@/registry/bases/mjml-react/blocks/block-shared";
import { nikeTheme } from "@/registry/bases/mjml-react/themes/nike";

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
      imageUrl: "https://static.photos/technology/640x640/2",
      name: "Air Max 90",
      price: "$149.00",
      quantity: 1,
    },
  ],
  subtotal = "$149.00",
  tax = "$11.92",
  total = "$160.92",
  supportHref = "#",
}: Props) => (
  <ReceiptBlock
    customerName={customerName}
    items={items}
    orderNumber={orderNumber}
    subtotal={subtotal}
    supportHref={supportHref}
    supportLabel="Contact Nike Support"
    tax={tax}
    theme={nikeTheme}
    total={total}
  />
);

ReceiptNike.PreviewProps = {
  _productName: "Nike",
  customerName: "John Doe",
  items: [
    {
      imageUrl: "https://static.photos/technology/640x640/3",
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
