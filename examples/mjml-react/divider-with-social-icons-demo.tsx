import type { DividerVariant } from "@/registry/bases/mjml-react/ui/ui-elements/spacing/divider-shared";
import { DividerWithSocialIcons } from "@/registry/bases/mjml-react/ui/ui-elements/spacing/divider-with-social-icons";

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
