// Subject: Welcome to {_productName} — let's get you started

import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
} from "react-email";

import { ContentGrid } from "../components/content-grid";
import { CTABanner } from "../components/cta-banner";
import { Footer } from "../components/footer";
import { Hero } from "../components/hero";
import { LogoHeader } from "../components/logo-header";
import { theme as linearTheme } from "../themes/linear";

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
  _senderTitle = "Team",
  _senderAvatarUrl,
}: Props) => {
  const t = linearTheme;

  return (
    <Html>
      <Head />
      <Preview>
        Welcome to {_productName}, {_firstName}
      </Preview>
      <Body
        style={{ backgroundColor: t.colorBackground, fontFamily: t.fontFamily }}
      >
        <Container
          style={{
            margin: "0 auto",
            maxWidth: t.containerWidth,
            padding: t.spacingLg,
          }}
        >
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

          <Section style={{ padding: `${t.spacingBase} 0` }}>
            <Text style={{ color: t.colorTextMuted, fontSize: t.fontSizeSm }}>
              Sent by {_senderName}
            </Text>
          </Section>

          <Footer theme={t} companyName={_productName} />
        </Container>
      </Body>
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

export default OnboardingLinear;
