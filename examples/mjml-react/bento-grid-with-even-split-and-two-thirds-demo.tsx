import type { ComponentProps } from "react";

import { BentoGridWithEvenSplitAndTwoThirds } from "@/registry/bases/mjml-react/ui/marketing/bento-grids/bento-grid-with-even-split-and-two-thirds";

export default function BentoGridWithEvenSplitAndTwoThirdsDemo({
  variant,
}: {
  variant?: ComponentProps<
    typeof BentoGridWithEvenSplitAndTwoThirds
  >["variant"];
}) {
  return (
    <BentoGridWithEvenSplitAndTwoThirds
      {...BentoGridWithEvenSplitAndTwoThirds.PreviewProps}
      variant={variant}
    />
  );
}
