import { AvatarCallToAction } from "@/registry/bases/react-email/components/marketing/cta/avatar-call-to-action";

export default function AvatarCallToActionPlacementInlineAvatarsExampleDemo() {
  return (
    <AvatarCallToAction
      placement="inline"
      avatars={[
        {
          alt: "Team member",
          src: "https://emailcn.vercel.app/api/email-assets/avatars/avatar-1.jpg",
        },
      ]}
    />
  );
}
