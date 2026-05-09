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

import { vercelTheme } from "@/registry/bases/react-email/themes/vercel";
import { ContentGridSection } from "@/registry/bases/react-email/ui/content-grid";
import { CTABannerSection } from "@/registry/bases/react-email/ui/cta-banner";
import { FooterSection } from "@/registry/bases/react-email/ui/footer";
import { HeroSection } from "@/registry/bases/react-email/ui/hero";
import { LogoHeaderSection } from "@/registry/bases/react-email/ui/logo-header";

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
      <Tailwind config={t}>
        <Body className="bg-background font-sans">
          <Container className="mx-auto max-w-container p-8">
            <LogoHeaderSection logoAlt={_productName} />

            <HeroSection
              heading={`Welcome, ${_firstName}`}
              subheading={`You're now part of the fastest-growing platform for frontend developers.`}
              ctaLabel="Deploy your first project"
              ctaHref={ctaHref}
              align="left"
            />

            <ContentGridSection
              columnCount={3}
              columns={[
                {
                  description: "Deploy to the edge in seconds.",
                  title: "Global Edge",
                },
                {
                  description: "Every git push gets a unique URL.",
                  title: "Preview Deploys",
                },
                {
                  description: "Connect your own domain.",
                  title: "Custom Domains",
                },
              ]}
            />

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

            <FooterSection companyName={_productName} />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

OnboardingVercel.PreviewProps = {
  _firstName: "Aniket",
  _productName: "Vercel",
  _senderAvatarUrl: "https://example.com/avatar.jpg",
  _senderName: "Vercel Team",
  _senderTitle: "Team",
  ctaHref: "https://vercel.com/dashboard",
} satisfies Props;
