// Subject: Share your experience at {_targetName}

import { NotificationBlock } from "@/registry/bases/mjml-react/blocks/block-shared";
import { emailAsset } from "@/registry/email-assets";
import { airbnbTheme } from "@/registry/themes/airbnb";

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

export const NotificationAirbnb = ({
  actorName = "Host",
  _targetName = "your place",
  ctaLabel = "Leave a Review",
  ctaHref = "#",
}: Props) => (
  <NotificationBlock
    actorName={actorName}
    body="Your review helps other travelers and supports your host."
    ctaHref={ctaHref}
    ctaLabel={ctaLabel}
    heading="How was your trip?"
    preview="Share your experience"
    targetName={`${actorName} recently stayed at ${_targetName}, and we’d love to hear about their experience.`}
    theme={airbnbTheme}
  />
);

NotificationAirbnb.PreviewProps = {
  _action: "completed their stay",
  _actorAvatarUrl: emailAsset("avatars/avatar-1.jpg"),
  _logoUrl: emailAsset("logos/logo-company.png"),
  _productName: "Airbnb",
  _targetName: "your place",
  actorName: "John",
  ctaHref: "https://airbnb.com/reviews",
  ctaLabel: "Leave a Review",
} satisfies Props;
