import type { DividerVariant } from "@/registry/bases/react-email/ui/ui-elements/spacing/divider-shared";
import { DividerWithLogo } from "@/registry/bases/react-email/ui/ui-elements/spacing/divider-with-logo";

export default function DividerWithLogoDemo({
  variant = "center",
}: {
  variant?: DividerVariant;
}) {
  return (
    <DividerWithLogo {...DividerWithLogo.PreviewProps} variant={variant} />
  );
}
