import { SimpleFooterWithSocialIcons } from "@/registry/bases/mjml-react/ui/marketing/footers/simple-footer-with-social-icons";
import type { SimpleFooterWithSocialIconsVariant } from "@/registry/bases/mjml-react/ui/marketing/footers/simple-footer-with-social-icons";

export default function SimpleFooterWithSocialIconsDemo({
  variant,
}: {
  variant?: SimpleFooterWithSocialIconsVariant;
}) {
  return (
    <SimpleFooterWithSocialIcons
      {...SimpleFooterWithSocialIcons.PreviewProps}
      variant={variant ?? SimpleFooterWithSocialIcons.PreviewProps.variant}
    />
  );
}
