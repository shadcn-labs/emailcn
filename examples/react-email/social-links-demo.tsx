import { SocialLinks } from "@/registry/bases/react-email/components/marketing/social/social-links";
import { defaultTheme } from "@/registry/themes/default";

export default function SocialLinksDemo() {
  return (
    <SocialLinks
      presentation="icons"
      container="none"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
