import { ChangelogBoxed } from "@/registry/bases/react-email/ui/marketing/timelines/changelog-boxed";
import type { ChangelogBoxedVariant } from "@/registry/bases/react-email/ui/marketing/timelines/changelog-boxed";

export default function ChangelogBoxedDemo({
  variant,
}: {
  variant?: ChangelogBoxedVariant;
}) {
  return (
    <ChangelogBoxed
      {...ChangelogBoxed.PreviewProps}
      variant={variant ?? ChangelogBoxed.PreviewProps.variant}
    />
  );
}
