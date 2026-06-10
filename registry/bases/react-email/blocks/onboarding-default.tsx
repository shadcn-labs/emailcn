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

import { defaultTheme } from "@/registry/bases/react-email/themes/default";
import { ContentSection as ContentGridSection } from "@/registry/bases/react-email/ui/marketing/content/content";
import { CTAWithTitleAndActionLeadSection as CTABannerSection } from "@/registry/bases/react-email/ui/marketing/cta/cta-with-title-and-action-lead";
import { FooterWithTextMenuAndSocialsSection as FooterSection } from "@/registry/bases/react-email/ui/marketing/footers/footer-with-text-menu-and-socials";
import { HeroWithOverlayedContentSection as HeroSection } from "@/registry/bases/react-email/ui/marketing/hero/hero-with-overlayed-content";

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
  _senderTitle,
  _senderAvatarUrl,
}: Props) => {
  void _senderAvatarUrl;
  void _senderTitle;

  const t = defaultTheme;

  return (
    <Html>
      <Head />
      <Preview>
        Welcome to {_productName}, {_firstName}
      </Preview>
      <Tailwind config={t}>
        <Body className="bg-background font-sans">
          <Container className="mx-auto max-w-container p-8">
            <Section className="py-4">
              <Text className="text-lg font-bold text-foreground">
                {_productName}
              </Text>
            </Section>

            <HeroSection
              heading={`Welcome, ${_firstName}`}
              subheading={`We're excited to have you on board at ${_productName}. Let's get you set up for success.`}
              ctaLabel="Get Started"
              ctaHref={ctaHref}
              align="left"
            />

            <ContentGridSection type="title" title="Quick Setup" />

            <CTABannerSection
              heading="Ready to dive in?"
              subtext="Start building with our intuitive dashboard."
              ctaLabel="Get Started"
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

OnboardingDefault.PreviewProps = {
  _firstName: "Aniket",
  _productName: "Acme",
  _senderAvatarUrl:
    "https://api.dicebear.com/9.x/lorelei/png?seed=preview-avatar-1&size=128",
  _senderName: "The team",
  _senderTitle: "Team",
  ctaHref: "https://example.com/dashboard",
} satisfies Props;
