import { CouponsWithContentOverlayed } from "@/registry/bases/jsx-email/components/marketing/coupons/coupons-with-content-overlayed";
import { defaultTheme } from "@/registry/themes/default";

export default function CouponsWithContentOverlayedDemo() {
  return (
    <CouponsWithContentOverlayed
      variant="split"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
