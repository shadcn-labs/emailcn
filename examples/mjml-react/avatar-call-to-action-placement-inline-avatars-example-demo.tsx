import { AvatarCallToAction } from "@/registry/bases/mjml-react/components/marketing/cta/avatar-call-to-action";
import { emailAsset } from "@/registry/email-assets";

export default function AvatarCallToActionPlacementInlineAvatarsExampleDemo() {
  return (
    <AvatarCallToAction
      placement="inline"
      avatars={[
        {
          alt: "Team member",
          src: emailAsset("avatars/avatar-1.jpg"),
        },
      ]}
    />
  );
}
