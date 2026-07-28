import { HeaderWithUserDetails } from "@/registry/bases/react-email/components/marketing/headers/header-with-user-details";
import { defaultTheme } from "@/registry/themes/default";

export default function HeaderWithUserDetailsDemo() {
  return (
    <HeaderWithUserDetails
      alignment="right"
      avatar="initials"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
