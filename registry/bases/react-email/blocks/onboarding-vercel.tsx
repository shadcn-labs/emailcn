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

import { ContentGrid } from "@/registry/bases/react-email/ui/content-grid";
import { CTABanner } from "@/registry/bases/react-email/ui/cta-banner";
import { Footer } from "@/registry/bases/react-email/ui/footer";
import { Hero } from "@/registry/bases/react-email/ui/hero";
import { LogoHeader } from "@/registry/bases/react-email/ui/logo-header";
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
            <LogoHeader theme={t} logoAlt={_productName} />

            <Hero
              theme={t}
              heading={`Welcome, ${_firstName}`}
              subheading={`You're now part of the fastest-growing platform for frontend developers.`}
              ctaLabel="Deploy your first project"
              ctaHref={ctaHref}
              align="left"
            />

            <ContentGrid
              theme={t}
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

            <CTABanner
              theme={t}
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

            <Footer theme={t} companyName={_productName} />
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
