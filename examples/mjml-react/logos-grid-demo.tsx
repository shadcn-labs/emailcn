import { LogosGrid } from "@/registry/bases/mjml-react/ui/marketing/logos/logos-grid";
import type { LogosGridTone } from "@/registry/bases/mjml-react/ui/marketing/logos/logos-grid";

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
