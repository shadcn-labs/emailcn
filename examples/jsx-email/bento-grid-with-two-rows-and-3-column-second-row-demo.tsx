import type { ComponentProps } from "react";

import { BentoGridWithTwoRowsAnd3ColumnSecondRow } from "@/registry/bases/jsx-email/ui/marketing/bento-grids/bento-grid-with-two-rows-and-3-column-second-row";

export default function BentoGridWithTwoRowsAnd3ColumnSecondRowDemo({
  variant,
}: {
  variant?: ComponentProps<
    typeof BentoGridWithTwoRowsAnd3ColumnSecondRow
  >["variant"];
}) {
  return (
    <BentoGridWithTwoRowsAnd3ColumnSecondRow
      {...BentoGridWithTwoRowsAnd3ColumnSecondRow.PreviewProps}
      variant={variant}
    />
  );
}
