import { AvatarDetails } from "@/registry/bases/mjml-react/components/ui-elements/avatars/avatar-details";
import { defaultTheme } from "@/registry/themes/default";

export default function AvatarDetailsDemo() {
  return (
    <AvatarDetails
      align="left"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
