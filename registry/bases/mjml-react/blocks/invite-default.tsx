// Subject: You're invited to join {teamName}

import { InviteBlock } from "@/registry/bases/mjml-react/blocks/block-shared";
import { emailAsset } from "@/registry/email-assets";
import { defaultTheme } from "@/registry/themes/default";

interface Props {
  inviterName?: string;
  inviterAvatarUrl?: string;
  teamName?: string;
  ctaHref?: string;
  expiresInHours?: number;
}

export const InviteDefault = ({
  inviterName = "Someone",
  inviterAvatarUrl,
  teamName = "Acme",
  ctaHref = "#",
  expiresInHours = 72,
}: Props) => (
  <InviteBlock
    ctaHref={ctaHref}
    expiresInHours={expiresInHours}
    inviterAvatarUrl={inviterAvatarUrl}
    inviterName={inviterName}
    teamName={teamName}
    theme={defaultTheme}
  />
);

InviteDefault.PreviewProps = {
  ctaHref: "https://example.com/invite/abc123",
  expiresInHours: 72,
  inviterAvatarUrl: emailAsset("avatars/avatar-1.jpg"),
  inviterName: "Sarah",
  teamName: "Acme Team",
} satisfies Props;
