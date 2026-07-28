import { BentoImageGrid } from "@/registry/bases/mjml-react/components/marketing/bento-grids/bento-image-grid";
import { defaultTheme } from "@/registry/themes/default";

export default function BentoImageGridDemo() {
  return (
    <BentoImageGrid
      variant="alternating"
      style="captions"
      placement="captions-top"
      theme={defaultTheme}
    />
  );
}
