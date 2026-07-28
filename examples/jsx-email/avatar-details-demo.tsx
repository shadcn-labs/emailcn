import { AvatarDetails } from "@/registry/bases/jsx-email/components/ui-elements/avatars/avatar-details";
import { defaultTheme } from "@/registry/themes/default";

export default function AvatarDetailsDemo() {
  return (
    <AvatarDetails
      align="left"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
