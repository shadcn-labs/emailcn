// Subject: {_action} — {_targetName}

import { NotificationBlock } from "@/registry/bases/mjml-react/blocks/block-shared";
import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";

interface Props {
  _logoUrl?: string;
  actorName?: string;
  _actorAvatarUrl?: string;
  _action?: string;
  _targetName?: string;
  ctaLabel?: string;
  ctaHref?: string;
  _productName?: string;
}

export const NotificationDefault = ({
  _actorAvatarUrl,
  actorName = "Someone",
  _action = "notified you",
  _targetName = "your update",
  ctaLabel = "View",
  ctaHref = "#",
}: Props) => (
  <NotificationBlock
    action={_action}
    actorAvatarUrl={_actorAvatarUrl}
    actorName={actorName}
    ctaHref={ctaHref}
    ctaLabel={ctaLabel}
    heading={_targetName}
    theme={defaultTheme}
  />
);

NotificationDefault.PreviewProps = {
  _action: "commented on your post",
  _actorAvatarUrl:
    "https://api.dicebear.com/9.x/lorelei/png?seed=preview-avatar-1&size=128",
  _logoUrl: "https://static.photos/business/320x80/3",
  _productName: "Acme",
  _targetName: "New comment on your project",
  actorName: "Sarah",
  ctaHref: "https://example.com/notification",
  ctaLabel: "View Comment",
} satisfies Props;
