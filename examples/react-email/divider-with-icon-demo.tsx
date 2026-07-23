import type { DividerVariant } from "@/registry/bases/react-email/ui/ui-elements/spacing/divider-shared";
import { DividerWithIcon } from "@/registry/bases/react-email/ui/ui-elements/spacing/divider-with-icon";

export default function DividerWithIconDemo({
  variant = "center",
}: {
  variant?: DividerVariant;
}) {
  return (
    <DividerWithIcon {...DividerWithIcon.PreviewProps} variant={variant} />
  );
}
