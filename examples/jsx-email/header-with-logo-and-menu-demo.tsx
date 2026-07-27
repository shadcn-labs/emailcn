import { HeaderWithLogoAndMenu } from "@/registry/bases/jsx-email/components/marketing/headers/header-with-logo-and-menu";
import { defaultTheme } from "@/registry/themes/default";

export default function HeaderWithLogoAndMenuDemo() {
  return (
    <HeaderWithLogoAndMenu
      variant="menu-right"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
