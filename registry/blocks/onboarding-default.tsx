// Subject: Welcome to {productName} — let's get you started

import { Body, Container, Head, Html, Preview, Section, Text } from "react-email";
import { ContentGrid } from "../components/content-grid";
import { CTABanner } from "../components/cta-banner";
import { Footer } from "../components/footer";
import { Hero } from "../components/hero";
import { theme as defaultTheme } from "../themes/default";

interface Props {
  firstName?: string;
  productName?: string;
  ctaHref?: string;
  senderName?: string;
  senderTitle?: string;
  senderAvatarUrl?: string;
}

export const OnboardingDefault = ({
  firstName = "there",
  _productName = "Acme",
  ctaHref = "https://example.com",
  senderName = "Team",
  _senderTitle = "Team",
  _senderAvatarUrl,
}: Props) => {
  const t = defaultTheme;

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
          <Section style={{ padding: `${t.spacingBase} 0` }}>
            <Text
              style={{
                color: t.colorText,
                fontSize: t.fontSizeLg,
                fontWeight: t.fontWeightBold,
              }}
            >
              {productName}
            </Text>
          </Section>

          <Hero
            theme={t}
            heading={`Welcome, ${firstName}`}
            subheading={`We're excited to have you on board at ${productName}. Let's get you set up for success.`}
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
              Sent by {senderName}
            </Text>
          </Section>

          <Footer theme={t} companyName={productName} />
        </Container>
      </Body>
    </Html>
  );
};

OnboardingDefault.PreviewProps = {
  ctaHref: "https://example.com/dashboard",
  firstName: "Aniket",
  productName: "Acme",
  senderAvatarUrl: "https://example.com/avatar.jpg",
  senderName: "The team",
  senderTitle: "Team",
} satisfies Props;

export default OnboardingDefault;
