import type { ComponentProps } from "react";

import { FullWidthProgressBar } from "@/registry/bases/jsx-email/ui/ui-elements/progress-bars/full-width-progress-bar";

export default function FullWidthProgressBarDemo({
  variant,
}: {
  variant?: ComponentProps<typeof FullWidthProgressBar>["variant"];
}) {
  return (
    <FullWidthProgressBar
      {...FullWidthProgressBar.PreviewProps}
      variant={variant}
    />
  );
}
