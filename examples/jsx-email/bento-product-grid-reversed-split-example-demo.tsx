import { BentoProductGrid } from "@/registry/bases/jsx-email/ui/marketing/bento-grids/bento-product-grid";

export default function BentoProductGridReversedSplitDemo() {
  return (
    <BentoProductGrid
      variant="even-split-two-thirds"
      style="sides"
      placement="reverse"
    />
  );
}
