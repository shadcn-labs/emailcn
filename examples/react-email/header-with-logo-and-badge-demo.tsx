import { HeaderWithLogoAndBadge } from "@/registry/bases/react-email/components/marketing/headers/header-with-logo-and-badge";
import { defaultTheme } from "@/registry/themes/default";

export default function HeaderWithLogoAndBadgeDemo() {
  return (
    <HeaderWithLogoAndBadge
      alignment="left"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
