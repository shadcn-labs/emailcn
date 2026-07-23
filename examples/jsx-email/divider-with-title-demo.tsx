import type { DividerVariant } from "@/registry/bases/jsx-email/ui/ui-elements/spacing/divider-shared";
import { DividerWithTitle } from "@/registry/bases/jsx-email/ui/ui-elements/spacing/divider-with-title";

export default function DividerWithTitleDemo({
  variant = "center",
}: {
  variant?: DividerVariant;
}) {
  return (
    <DividerWithTitle {...DividerWithTitle.PreviewProps} variant={variant} />
  );
}
