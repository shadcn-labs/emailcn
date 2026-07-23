// Subject: You're invited to join {teamName}

import { InviteBlock } from "@/registry/bases/mjml-react/blocks/block-shared";
import { vercelTheme } from "@/registry/bases/mjml-react/themes/vercel";

interface Props {
  inviterName?: string;
  inviterAvatarUrl?: string;
  teamName?: string;
  ctaHref?: string;
  expiresInHours?: number;
}

export const InviteVercel = ({
  inviterName = "Someone",
  inviterAvatarUrl,
  teamName = "Vercel",
  ctaHref = "#",
  expiresInHours = 72,
}: Props) => (
  <InviteBlock
    ctaHref={ctaHref}
    expiresInHours={expiresInHours}
    inviterAvatarUrl={inviterAvatarUrl}
    inviterName={inviterName}
    teamName={teamName}
    theme={vercelTheme}
  />
);

InviteVercel.PreviewProps = {
  ctaHref: "https://vercel.com/invite/abc123",
  expiresInHours: 72,
  inviterAvatarUrl:
    "https://api.dicebear.com/9.x/lorelei/png?seed=preview-avatar-1&size=128",
  inviterName: "Sarah",
  teamName: "Vercel",
} satisfies Props;
