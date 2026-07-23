import type { DividerVariant } from "@/registry/bases/jsx-email/ui/ui-elements/spacing/divider-shared";
import { DividerWithSocialIcons } from "@/registry/bases/jsx-email/ui/ui-elements/spacing/divider-with-social-icons";

export default function DividerWithSocialIconsDemo({
  variant = "center",
}: {
  variant?: DividerVariant;
}) {
  return (
    <DividerWithSocialIcons
      {...DividerWithSocialIcons.PreviewProps}
      variant={variant}
    />
  );
}
