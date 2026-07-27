import { PurchasePricing } from "@/registry/bases/react-email/ui/marketing/pricing/purchase-pricing";

export default function PurchasePricingCustomPlansDemo() {
  return (
    <PurchasePricing
      plans={[
        {
          action: { href: "#", label: "Buy now" },
          name: "Starter",
          purchasePrice: "$99",
        },
        {
          action: { href: "#", label: "Buy now" },
          name: "Pro",
          purchasePrice: "$199",
        },
      ]}
    />
  );
}
