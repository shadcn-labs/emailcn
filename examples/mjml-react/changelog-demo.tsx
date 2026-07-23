import { Changelog } from "@/registry/bases/mjml-react/ui/marketing/timelines/changelog";
import type { ChangelogVariant } from "@/registry/bases/mjml-react/ui/marketing/timelines/changelog";

export default function ChangelogDemo({
  variant,
}: {
  variant?: ChangelogVariant;
}) {
  return (
    <Changelog
      {...Changelog.PreviewProps}
      variant={variant ?? Changelog.PreviewProps.variant}
    />
  );
}
