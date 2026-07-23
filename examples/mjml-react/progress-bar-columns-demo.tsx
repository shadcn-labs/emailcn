import type { ComponentProps } from "react";

import { ProgressBarColumns } from "@/registry/bases/mjml-react/ui/ui-elements/progress-bars/progress-bar-columns";

export default function ProgressBarColumnsDemo({
  variant,
}: {
  variant?: ComponentProps<typeof ProgressBarColumns>["variant"];
}) {
  return (
    <ProgressBarColumns
      {...ProgressBarColumns.PreviewProps}
      variant={variant}
    />
  );
}
