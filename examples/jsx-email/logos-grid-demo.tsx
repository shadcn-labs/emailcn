import { LogosGrid } from "@/registry/bases/jsx-email/ui/marketing/logos/logos-grid";
import type { LogosGridTone } from "@/registry/bases/jsx-email/ui/marketing/logos/logos-grid";

export default function LogosGridDemo({
  variant,
}: {
  variant?: LogosGridTone;
}) {
  return (
    <LogosGrid
      {...LogosGrid.PreviewProps}
      tone={variant ?? LogosGrid.PreviewProps.tone}
    />
  );
}
