import { TwoColumnsCompact } from "@/registry/bases/jsx-email/ui/marketing/team/2-columns-compact";
import type { TwoColumnsCompactVariant } from "@/registry/bases/jsx-email/ui/marketing/team/2-columns-compact";

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
