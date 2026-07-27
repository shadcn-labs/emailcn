import { AvatarCallToAction } from "@/registry/bases/jsx-email/components/marketing/cta/avatar-call-to-action";
import { defaultTheme } from "@/registry/themes/default";

export default function AvatarCallToActionDemo() {
  return (
    <AvatarCallToAction
      placement="inline"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
