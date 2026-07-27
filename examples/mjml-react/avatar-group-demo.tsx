import { AvatarGroup } from "@/registry/bases/mjml-react/components/ui-elements/avatars/avatar-group";
import { defaultTheme } from "@/registry/themes/default";

export default function AvatarGroupDemo() {
  return (
    <AvatarGroup
      size="md"
      align="left"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
