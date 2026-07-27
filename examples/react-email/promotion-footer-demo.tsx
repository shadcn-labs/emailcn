import { PromotionFooter } from "@/registry/bases/react-email/components/marketing/footers/promotion-footer";
import { defaultTheme } from "@/registry/themes/default";

export default function PromotionFooterDemo() {
  return (
    <PromotionFooter
      placement="inline"
      alignment="center"
      menuColumns={0}
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
