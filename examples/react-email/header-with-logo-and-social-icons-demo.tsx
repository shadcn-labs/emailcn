import { HeaderWithLogoAndSocialIcons } from "@/registry/bases/react-email/components/marketing/headers/header-with-logo-and-social-icons";
import { defaultTheme } from "@/registry/themes/default";

export default function HeaderWithLogoAndSocialIconsDemo() {
  return (
    <HeaderWithLogoAndSocialIcons
      alignment="left"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
