import type { ComponentProps } from "react";

import { ProgressBarGroup } from "@/registry/bases/jsx-email/ui/ui-elements/progress-bars/progress-bar-group";

export default function ProgressBarGroupDemo({
  variant,
}: {
  variant?: ComponentProps<typeof ProgressBarGroup>["variant"];
}) {
  return (
    <ProgressBarGroup {...ProgressBarGroup.PreviewProps} variant={variant} />
  );
}
