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
import { vercelTheme } from "@/registry/themes/definitions/vercel";

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
  _senderTitle,
  _senderAvatarUrl,
}: Props) => {
  void _senderAvatarUrl;
  void _senderTitle;

  const t = vercelTheme;

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
              subheading={`You're now part of the fastest-growing platform for frontend developers.`}
              ctaLabel="Deploy your first project"
              ctaHref={ctaHref}
            />

            <ContentGridSection type="title" title="Global Edge" />

            <CTABannerSection
              heading="Start deploying"
              subtext="Ready to ship to production?"
              ctaLabel="Create a Project"
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

OnboardingVercel.PreviewProps = {
  _firstName: "Aniket",
  _productName: "Vercel",
  _senderAvatarUrl:
    "https://api.dicebear.com/9.x/lorelei/png?seed=preview-avatar-1&size=128",
  _senderName: "Vercel Team",
  _senderTitle: "Team",
  ctaHref: "https://vercel.com/dashboard",
} satisfies Props;
