import { BentoProductGrid } from "@/registry/bases/mjml-react/components/marketing/bento-grids/bento-product-grid";

export default function BentoProductGridReversedSplitDemo() {
  return (
    <BentoProductGrid
      variant="even-split-two-thirds"
      style="sides"
      placement="reverse"
    />
  );
}
