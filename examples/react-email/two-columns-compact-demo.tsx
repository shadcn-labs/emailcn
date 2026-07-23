import { TwoColumnsCompact } from "@/registry/bases/react-email/ui/marketing/team/2-columns-compact";
import type { TwoColumnsCompactVariant } from "@/registry/bases/react-email/ui/marketing/team/2-columns-compact";

export default function TwoColumnsCompactDemo({
  variant,
}: {
  variant?: TwoColumnsCompactVariant;
}) {
  return (
    <TwoColumnsCompact
      {...TwoColumnsCompact.PreviewProps}
      variant={variant ?? TwoColumnsCompact.PreviewProps.variant}
    />
  );
}
