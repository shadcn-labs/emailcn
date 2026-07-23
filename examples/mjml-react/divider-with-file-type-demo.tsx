import type { DividerVariant } from "@/registry/bases/mjml-react/ui/ui-elements/spacing/divider-shared";
import { DividerWithFileType } from "@/registry/bases/mjml-react/ui/ui-elements/spacing/divider-with-file-type";

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
