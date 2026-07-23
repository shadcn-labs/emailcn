import type { DividerVariant } from "@/registry/bases/mjml-react/ui/ui-elements/spacing/divider-shared";
import { DividerWithButton } from "@/registry/bases/mjml-react/ui/ui-elements/spacing/divider-with-button";

export default function DividerWithButtonDemo({
  variant = "center",
}: {
  variant?: DividerVariant;
}) {
  return (
    <DividerWithButton {...DividerWithButton.PreviewProps} variant={variant} />
  );
}
