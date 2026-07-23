import type { DividerVariant } from "@/registry/bases/jsx-email/ui/ui-elements/spacing/divider-shared";
import { DividerWithIconButton } from "@/registry/bases/jsx-email/ui/ui-elements/spacing/divider-with-icon-and-button";

export default function DividerWithIconButtonDemo({
  variant = "center",
}: {
  variant?: DividerVariant;
}) {
  return (
    <DividerWithIconButton
      {...DividerWithIconButton.PreviewProps}
      variant={variant}
    />
  );
}
