// Subject: Welcome to {_productName} — let's get you started

import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "react-email";

import { ContentSection as ContentGridSection } from "@/registry/bases/react-email/components/marketing/content/content";
import { CallToActionSection as CTABannerSection } from "@/registry/bases/react-email/components/marketing/cta/call-to-action";
import { NavigationFooterSection as FooterSection } from "@/registry/bases/react-email/components/marketing/footers/navigation-footer";
import { HeaderWithLogoAndMenuSection as LogoHeaderSection } from "@/registry/bases/react-email/components/marketing/headers/header-with-logo-and-menu";
import { SplitHeroSection as HeroSection } from "@/registry/bases/react-email/components/marketing/hero/split-hero";
import { createEmailTailwindConfig } from "@/registry/bases/react-email/themes/email-theme";
import { linearTheme } from "@/registry/themes/definitions/linear";

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
  _senderTitle,
  _senderAvatarUrl,
}: Props) => {
  void _senderAvatarUrl;
  void _senderTitle;

  const t = linearTheme;

  return (
    <Html>
      <Head />
      <Preview>
        Welcome to {_productName}, {_firstName}
      </Preview>
      <Tailwind config={createEmailTailwindConfig(t)}>
        <Body className="bg-background font-sans">
          <Container className="mx-auto max-w-container p-8">
            <LogoHeaderSection logoAlt={_productName} />

            <HeroSection
              heading={`Welcome, ${_firstName}`}
              subheading={`Track issues, manage sprints, and ship faster.`}
              ctaLabel="Open Linear"
              ctaHref={ctaHref}
            />

            <ContentGridSection type="title" title="Issue Tracking" />

            <CTABannerSection
              heading="Start tracking"
              subtext="Your workspace is ready."
              ctaLabel="Open Workspace"
              ctaHref={ctaHref}
            />

            <Section className="py-4">
              <Text className="text-sm text-foreground-muted">
                Sent by {_senderName}
              </Text>
            </Section>

            <FooterSection text={_productName} />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

OnboardingLinear.PreviewProps = {
  _firstName: "Aniket",
  _productName: "Linear",
  _senderAvatarUrl:
    "https://api.dicebear.com/9.x/lorelei/png?seed=preview-avatar-1&size=128",
  _senderName: "Linear Team",
  _senderTitle: "Team",
  ctaHref: "https://linear.app",
} satisfies Props;
