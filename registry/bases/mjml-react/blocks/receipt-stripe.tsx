// Subject: Your receipt from {_productName}

import { ReceiptBlock } from "@/registry/bases/mjml-react/blocks/block-shared";
import { stripeTheme } from "@/registry/bases/mjml-react/themes/stripe";

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
}: Props) => (
  <ReceiptBlock
    customerName={customerName}
    items={items}
    label="Invoice"
    orderNumber={orderNumber}
    subtotal={subtotal}
    supportHref={supportHref}
    tax={tax}
    theme={stripeTheme}
    total={total}
  />
);

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
