// Subject: Your receipt from {_productName}

import { ReceiptBlock } from "@/registry/bases/mjml-react/blocks/block-shared";
import { emailAsset } from "@/registry/email-assets";
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
}: Props) => (
  <ReceiptBlock
    customerName={customerName}
    items={items}
    orderNumber={orderNumber}
    subtotal={subtotal}
    supportHref={supportHref}
    tax={tax}
    theme={defaultTheme}
    total={total}
  />
);

ReceiptDefault.PreviewProps = {
  _productName: "Acme",
  customerName: "John Doe",
  items: [
    {
      imageUrl: emailAsset("products/product-1.jpg"),
      name: "Premium Sneakers",
      price: "$149.00",
      quantity: 1,
    },
    {
      imageUrl: emailAsset("products/product-2.jpg"),
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
