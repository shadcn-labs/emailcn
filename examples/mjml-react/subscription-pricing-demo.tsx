import { SubscriptionPricing } from "@/registry/bases/mjml-react/components/marketing/pricing/subscription-pricing";
import { defaultTheme } from "@/registry/themes/default";

export default function SubscriptionPricingDemo() {
  return <SubscriptionPricing columns={2} theme={defaultTheme} />;
}
