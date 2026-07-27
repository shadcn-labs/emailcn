import { BentoProductGrid } from "@/registry/bases/mjml-react/components/marketing/bento-grids/bento-product-grid";
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
