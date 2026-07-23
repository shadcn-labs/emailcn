import { HeaderWithLogoAndBadge } from "@/registry/bases/mjml-react/ui/marketing/headers/header-with-logo-and-badge";
import type { HeaderWithLogoAndBadgeAlignment } from "@/registry/bases/mjml-react/ui/marketing/headers/header-with-logo-and-badge";

export default function HeaderWithLogoAndBadgeDemo({
  variant,
}: {
  variant?: HeaderWithLogoAndBadgeAlignment;
}) {
  return (
    <HeaderWithLogoAndBadge
      {...HeaderWithLogoAndBadge.PreviewProps}
      alignment={variant ?? HeaderWithLogoAndBadge.PreviewProps.alignment}
    />
  );
}
