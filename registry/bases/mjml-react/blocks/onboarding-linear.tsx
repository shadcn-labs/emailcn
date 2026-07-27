// Subject: Welcome to {_productName} — let's get you started

import { OnboardingBlock } from "@/registry/bases/mjml-react/blocks/block-shared";
import { emailAsset } from "@/registry/email-assets";
import { linearTheme } from "@/registry/themes/linear";

interface Props {
  _firstName?: string;
  _productName?: string;
  ctaHref?: string;
  _senderName?: string;
  _senderTitle?: string;
  _senderAvatarUrl?: string;
}

export const OnboardingLinear = ({
  _firstName = "there",
  _productName = "Linear",
  ctaHref = "https://linear.app",
  _senderName = "Linear Team",
}: Props) => (
  <OnboardingBlock
    ctaHref={ctaHref}
    firstName={_firstName}
    productName={_productName}
    senderName={_senderName}
    theme={linearTheme}
  />
);

OnboardingLinear.PreviewProps = {
  _firstName: "Aniket",
  _productName: "Linear",
  _senderAvatarUrl: emailAsset("avatars/avatar-1.jpg"),
  _senderName: "Linear Team",
  _senderTitle: "Team",
  ctaHref: "https://linear.app",
} satisfies Props;
