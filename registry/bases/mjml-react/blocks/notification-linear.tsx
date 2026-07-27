// Subject: [{issueNumber}] {_action} — {_targetName}

import { NotificationBlock } from "@/registry/bases/mjml-react/blocks/block-shared";
import { emailAsset } from "@/registry/email-assets";
import { linearTheme } from "@/registry/themes/linear";

interface Props {
  _logoUrl?: string;
  actorName?: string;
  _actorAvatarUrl?: string;
  _action?: string;
  _targetName?: string;
  issueNumber?: string;
  ctaLabel?: string;
  ctaHref?: string;
  _productName?: string;
}

export const NotificationLinear = ({
  actorName = "Someone",
  _actorAvatarUrl,
  _action = "commented",
  _targetName = "your issue",
  issueNumber = "123",
  ctaLabel = "View Issue",
  ctaHref = "#",
}: Props) => (
  <NotificationBlock
    action={_action}
    actorAvatarUrl={_actorAvatarUrl}
    actorName={actorName}
    ctaHref={ctaHref}
    ctaLabel={ctaLabel}
    heading={_targetName}
    issueNumber={issueNumber}
    theme={linearTheme}
  />
);

NotificationLinear.PreviewProps = {
  _action: "commented on",
  _actorAvatarUrl: emailAsset("avatars/avatar-1.jpg"),
  _logoUrl: emailAsset("logos/logo-company.png"),
  _productName: "Linear",
  _targetName: "Bug in login flow",
  actorName: "Sarah",
  ctaHref: "https://linear.app/issue/42",
  ctaLabel: "View Issue",
  issueNumber: "42",
} satisfies Props;
