import type { DividerVariant } from "@/registry/bases/jsx-email/ui/ui-elements/spacing/divider-shared";
import { DividerWithFileType } from "@/registry/bases/jsx-email/ui/ui-elements/spacing/divider-with-file-type";

export default function DividerWithFileTypeDemo({
  variant = "center",
}: {
  variant?: DividerVariant;
}) {
  return (
    <DividerWithFileType
      {...DividerWithFileType.PreviewProps}
      variant={variant}
    />
  );
}
