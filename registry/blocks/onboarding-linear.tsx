// Subject: Welcome to {productName} — let's get you started

import { Body, Container, Head, Html, Preview, Section, Text } from "react-email";
import { ContentGrid } from "../components/content-grid";
import { CTABanner } from "../components/cta-banner";
import { Footer } from "../components/footer";
import { Hero } from "../components/hero";
import { LogoHeader } from "../components/logo-header";
import { theme as linearTheme } from "../themes/linear";

interface Props {
  firstName?: string;
  productName?: string;
  ctaHref?: string;
  senderName?: string;
  senderTitle?: string;
  senderAvatarUrl?: string;
}

export const OnboardingLinear = ({
  firstName = "there",
  _productName = "Linear",
  ctaHref = "https://linear.app",
  senderName = "Linear Team",
  _senderTitle = "Team",
  _senderAvatarUrl,
}: Props) => {
  const t = linearTheme;

  return (
    <Html>
      <Head />
      <Preview>
        Welcome to {productName}, {firstName}
      </Preview>
      <Body style={{ backgroundColor: t.colorBackground, fontFamily: t.fontFamily }}>
        <Container
          style={{
            margin: "0 auto",
            maxWidth: t.containerWidth,
            padding: t.spacingLg,
          }}
        >
          <LogoHeader theme={t} logoAlt={productName} />

          <Hero
            theme={t}
            heading={`Welcome, ${firstName}`}
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

          <Section style={{ padding: `${t.spacingBase} 0` }}>
            <Text style={{ color: t.colorTextMuted, fontSize: t.fontSizeSm }}>
              Sent by {senderName}
            </Text>
          </Section>

          <Footer theme={t} companyName={productName} />
        </Container>
      </Body>
    </Html>
  );
};

OnboardingLinear.PreviewProps = {
  ctaHref: "https://linear.app",
  firstName: "Aniket",
  productName: "Linear",
  senderAvatarUrl: "https://example.com/avatar.jpg",
  senderName: "Linear Team",
  senderTitle: "Team",
} satisfies Props;

export default OnboardingLinear;
