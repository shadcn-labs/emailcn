// Subject: You're invited to join {teamName}

import { InviteBlock } from "@/registry/bases/mjml-react/blocks/block-shared";
import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";

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
  inviterAvatarUrl:
    "https://api.dicebear.com/9.x/lorelei/png?seed=preview-avatar-1&size=128",
  inviterName: "Sarah",
  teamName: "Acme Team",
} satisfies Props;
