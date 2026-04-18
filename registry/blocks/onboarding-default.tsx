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
import { theme as defaultTheme } from "../themes/default";

interface Props {
  _firstName?: string;
  _productName?: string;
  ctaHref?: string;
  _senderName?: string;
  _senderTitle?: string;
  senderAvatarUrl?: string;
}

export const OnboardingDefault = ({
  _firstName = "there",
  _productName = "Acme",
  ctaHref = "https://example.com",
  _senderName = "Team",
  _senderTitle = "Team",
  _senderAvatarUrl,
}: Props) => {
  const t = defaultTheme;

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
          <Section style={{ padding: `${t.spacingBase} 0` }}>
            <Text
              style={{
                color: t.colorText,
                fontSize: t.fontSizeLg,
                fontWeight: t.fontWeightBold,
              }}
            >
              {_productName}
            </Text>
          </Section>

          <Hero
            theme={t}
            heading={`Welcome, ${_firstName}`}
            subheading={`We're excited to have you on board at ${_productName}. Let's get you set up for success.`}
            ctaLabel="Get Started"
            ctaHref={ctaHref}
            align="left"
          />

          <ContentGrid
            theme={t}
            columnCount={3}
            columns={[
              {
                description: "Get up and running in just a few minutes.",
                title: "Quick Setup",
              },
              {
                description: "Access all the tools you need to succeed.",
                title: "Powerful Features",
              },
              {
                description: "Work together seamlessly with your team.",
                title: "Team Collaboration",
              },
            ]}
          />

          <CTABanner
            theme={t}
            heading="Ready to dive in?"
            subtext="Start building with our intuitive dashboard."
            ctaLabel="Get Started"
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

OnboardingDefault.PreviewProps = {
  _firstName: "Aniket",
  _productName: "Acme",
  _senderName: "The team",
  _senderTitle: "Team",
  ctaHref: "https://example.com/dashboard",
  senderAvatarUrl: "https://example.com/avatar.jpg",
} satisfies Props;

export default OnboardingDefault;
