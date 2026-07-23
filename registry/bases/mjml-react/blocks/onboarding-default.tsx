// Subject: Welcome to {_productName} — let's get you started

import { OnboardingBlock } from "@/registry/bases/mjml-react/blocks/block-shared";
import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";

interface Props {
  _firstName?: string;
  _productName?: string;
  ctaHref?: string;
  _senderName?: string;
  _senderTitle?: string;
  _senderAvatarUrl?: string;
}

export const OnboardingDefault = ({
  _firstName = "there",
  _productName = "Acme",
  ctaHref = "https://example.com",
  _senderName = "Team",
}: Props) => (
  <OnboardingBlock
    ctaHref={ctaHref}
    firstName={_firstName}
    productName={_productName}
    senderName={_senderName}
    theme={defaultTheme}
  />
);

OnboardingDefault.PreviewProps = {
  _firstName: "Aniket",
  _productName: "Acme",
  _senderAvatarUrl:
    "https://api.dicebear.com/9.x/lorelei/png?seed=preview-avatar-1&size=128",
  _senderName: "The team",
  _senderTitle: "Team",
  ctaHref: "https://example.com/dashboard",
} satisfies Props;
