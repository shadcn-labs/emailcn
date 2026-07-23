import { HeaderWithLogoAndMenu } from "@/registry/bases/mjml-react/ui/marketing/headers/header-with-logo-and-menu";
import type { HeaderWithLogoAndMenuVariant } from "@/registry/bases/mjml-react/ui/marketing/headers/header-with-logo-and-menu";

export default function HeaderWithLogoAndMenuDemo({
  variant,
}: {
  variant?: HeaderWithLogoAndMenuVariant;
}) {
  return (
    <HeaderWithLogoAndMenu
      {...HeaderWithLogoAndMenu.PreviewProps}
      variant={variant ?? HeaderWithLogoAndMenu.PreviewProps.variant}
    />
  );
}
