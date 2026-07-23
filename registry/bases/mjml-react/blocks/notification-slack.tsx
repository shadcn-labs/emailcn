// Subject: You're now part of the {teamName} workspace

import { NotificationBlock } from "@/registry/bases/mjml-react/blocks/block-shared";
import { slackTheme } from "@/registry/bases/mjml-react/themes/slack";

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
  _actorAvatarUrl:
    "https://api.dicebear.com/9.x/lorelei/png?seed=preview-avatar-1&size=128",
  _logoUrl: "https://static.photos/business/320x80/3",
  _productName: "Slack",
  _targetName: "workspace",
  actorName: "Sarah",
  ctaHref: "https://slack.com",
  ctaLabel: "Join Workspace",
  teamName: "Acme",
} satisfies Props;
