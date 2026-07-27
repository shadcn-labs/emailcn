import { HeaderWithLogo } from "@/registry/bases/mjml-react/components/marketing/headers/header-with-logo";
import { defaultTheme } from "@/registry/themes/default";

export default function HeaderWithLogoDemo() {
  return (
    <HeaderWithLogo
      alignment="left"
      variant="minimal"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
