import { CouponsWithCenteredText } from "@/registry/bases/jsx-email/components/marketing/coupons/coupons-with-centered-text";
import { defaultTheme } from "@/registry/themes/default";

export default function CouponsWithCenteredTextDemo() {
  return (
    <CouponsWithCenteredText
      variant="impact"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
