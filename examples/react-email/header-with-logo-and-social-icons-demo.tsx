import { HeaderWithLogoAndSocialIcons } from "@/registry/bases/react-email/ui/marketing/headers/header-with-logo-and-social-icons";
import type { HeaderWithLogoAndSocialIconsAlignment } from "@/registry/bases/react-email/ui/marketing/headers/header-with-logo-and-social-icons";

export default function HeaderWithLogoAndSocialIconsDemo({
  variant,
}: {
  variant?: HeaderWithLogoAndSocialIconsAlignment;
}) {
  return (
    <HeaderWithLogoAndSocialIcons
      {...HeaderWithLogoAndSocialIcons.PreviewProps}
      alignment={variant ?? HeaderWithLogoAndSocialIcons.PreviewProps.alignment}
    />
  );
}
