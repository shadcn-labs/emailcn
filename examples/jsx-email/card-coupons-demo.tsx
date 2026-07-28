import { CardCoupons } from "@/registry/bases/jsx-email/components/marketing/coupons/card-coupons";
import { defaultTheme } from "@/registry/themes/default";

export default function CardCouponsDemo() {
  return (
    <CardCoupons
      variant="with-name"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
