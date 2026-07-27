// Subject: Welcome to {_productName} — let's get you started

import { OnboardingBlock } from "@/registry/bases/mjml-react/blocks/block-shared";
import { emailAsset } from "@/registry/email-assets";
import { vercelTheme } from "@/registry/themes/vercel";

interface Props {
  _firstName?: string;
  _productName?: string;
  ctaHref?: string;
  _senderName?: string;
  _senderTitle?: string;
  _senderAvatarUrl?: string;
}

export const OnboardingVercel = ({
  _firstName = "there",
  _productName = "Vercel",
  ctaHref = "https://vercel.com",
  _senderName = "Vercel Team",
}: Props) => (
  <OnboardingBlock
    ctaHref={ctaHref}
    firstName={_firstName}
    productName={_productName}
    senderName={_senderName}
    theme={vercelTheme}
  />
);

OnboardingVercel.PreviewProps = {
  _firstName: "Aniket",
  _productName: "Vercel",
  _senderAvatarUrl: emailAsset("avatars/avatar-1.jpg"),
  _senderName: "Vercel Team",
  _senderTitle: "Team",
  ctaHref: "https://vercel.com/dashboard",
} satisfies Props;
