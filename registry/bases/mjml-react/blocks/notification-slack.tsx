// Subject: You're now part of the {teamName} workspace

import { NotificationBlock } from "@/registry/bases/mjml-react/blocks/block-shared";
import { emailAsset } from "@/registry/email-assets";
import { slackTheme } from "@/registry/themes/slack";

interface Props {
  _logoUrl?: string;
  actorName?: string;
  _actorAvatarUrl?: string;
  _action?: string;
  _targetName?: string;
  teamName?: string;
  ctaLabel?: string;
  ctaHref?: string;
  _productName?: string;
}

export const NotificationSlack = ({
  actorName = "Someone",
  teamName = "Acme",
  ctaLabel = "Join Workspace",
  ctaHref = "#",
  _productName = "Slack",
}: Props) => (
  <NotificationBlock
    body="Connect with your team and start collaborating."
    ctaHref={ctaHref}
    ctaLabel={ctaLabel}
    heading="You’re in!"
    preview={`Join ${teamName}`}
    targetName={`${actorName} invited you to join the ${teamName} workspace on ${_productName}.`}
    theme={slackTheme}
  />
);

NotificationSlack.PreviewProps = {
  _action: "invited you",
  _actorAvatarUrl: emailAsset("avatars/avatar-1.jpg"),
  _logoUrl: emailAsset("logos/logo-company.png"),
  _productName: "Slack",
  _targetName: "workspace",
  actorName: "Sarah",
  ctaHref: "https://slack.com",
  ctaLabel: "Join Workspace",
  teamName: "Acme",
} satisfies Props;
