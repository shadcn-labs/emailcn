import { BentoProductGrid } from "@/registry/bases/react-email/components/marketing/bento-grids/bento-product-grid";
import { defaultTheme } from "@/registry/themes/default";

export default function BentoProductGridDemo() {
  return (
    <BentoProductGrid
      variant="two-row-three-column"
      style="sides"
      placement="normal"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
