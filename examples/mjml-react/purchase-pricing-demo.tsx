import { PurchasePricing } from "@/registry/bases/mjml-react/components/marketing/pricing/purchase-pricing";
import { defaultTheme } from "@/registry/themes/default";

export default function PurchasePricingDemo() {
  return (
    <PurchasePricing
      plans={[
        {
          action: { href: "https://example.com", label: "Get lifetime access" },
          name: "Lifetime access",
          purchasePrice: "$149",
        },
      ]}
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
