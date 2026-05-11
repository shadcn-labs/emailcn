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
} from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { linearTheme } from "@/registry/bases/jsx-email/themes/linear";
import { ContentGridSection } from "@/registry/bases/jsx-email/ui/content-grid";
import { CTABannerSection } from "@/registry/bases/jsx-email/ui/cta-banner";
import { FooterSection } from "@/registry/bases/jsx-email/ui/footer";
import { HeroSection } from "@/registry/bases/jsx-email/ui/hero";
import { LogoHeaderSection } from "@/registry/bases/jsx-email/ui/logo-header";

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

  return (
    <Html>
      <Head>
        <DefaultFonts />
      </Head>
      <Preview>
        Welcome to {_productName}, {_firstName}
      </Preview>
      <Tailwind>
        <Body
          style={{
            backgroundColor: linearTheme.colorBackground,
            fontFamily: linearTheme.fontFamily,
            margin: 0,
          }}
        >
          <Container
            style={{ maxWidth: linearTheme.containerWidth, padding: "32px" }}
          >
            <LogoHeaderSection logoAlt={_productName} />

            <HeroSection
              heading={`Welcome, ${_firstName}`}
              subheading={`Track issues, manage sprints, and ship faster.`}
              ctaLabel="Open Linear"
              ctaHref={ctaHref}
              align="left"
            />

            <ContentGridSection
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

            <CTABannerSection
              heading="Start tracking"
              subtext="Your workspace is ready."
              ctaLabel="Open Workspace"
              ctaHref={ctaHref}
            />

            <Section
              style={{
                paddingBottom: linearTheme.spacingBase,
                paddingTop: linearTheme.spacingBase,
              }}
            >
              <Text
                style={{
                  color: linearTheme.colorTextMuted,
                  fontSize: linearTheme.fontSizeSm,
                }}
              >
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

OnboardingLinear.PreviewProps = {
  _firstName: "Aniket",
  _productName: "Linear",
  _senderAvatarUrl: "https://example.com/avatar.jpg",
  _senderName: "Linear Team",
  _senderTitle: "Team",
  ctaHref: "https://linear.app",
} satisfies Props;
