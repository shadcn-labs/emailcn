import { BentoImageGrid } from "@/registry/bases/mjml-react/components/marketing/bento-grids/bento-image-grid";

export default function BentoImageGridReversedAlternatingDetailsDemo() {
  return (
    <BentoImageGrid
      variant="alternating"
      style="details"
      placement="captions-bottom-reverse"
    />
  );
}
