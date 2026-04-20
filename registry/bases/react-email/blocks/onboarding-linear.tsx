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
      <Tailwind config={t}>
        <Body className="bg-background font-sans">
          <Container className="mx-auto max-w-container p-8">
            <LogoHeader theme={t} logoAlt={_productName} />

            <Hero
              theme={t}
              heading={`Welcome, ${_firstName}`}
              subheading={`Track issues, manage sprints, and ship faster.`}
              ctaLabel="Open Linear"
              ctaHref={ctaHref}
              align="left"
            />

            <ContentGrid
              theme={t}
              columnCount={3}
              columns={[
                {
                  description: "Beautiful issue management.",
                  title: "Issue Tracking",
                },
                {
                  description: "Plan and track work in cycles.",
                  title: "Sprints",
                },
                {
                  description: "Automate your team processes.",
                  title: "Workflows",
                },
              ]}
            />

            <CTABanner
              theme={t}
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

            <Footer theme={t} companyName={_productName} />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

OnboardingLinear.PreviewProps = {
  _firstName: "Aniket",
  _productName: "Linear",
  _senderAvatarUrl: "https://example.com/avatar.jpg",
  _senderName: "Linear Team",
  _senderTitle: "Team",
  ctaHref: "https://linear.app",
} satisfies Props;
