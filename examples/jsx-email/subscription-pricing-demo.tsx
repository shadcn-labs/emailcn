import { SubscriptionPricing } from "@/registry/bases/jsx-email/components/marketing/pricing/subscription-pricing";
import { defaultTheme } from "@/registry/themes/default";

export default function SubscriptionPricingDemo() {
  return (
    <SubscriptionPricing
      columns={2}
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
