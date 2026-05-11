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
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import { ContentGridSection } from "@/registry/bases/jsx-email/ui/content-grid";
import { CTABannerSection } from "@/registry/bases/jsx-email/ui/cta-banner";
import { FooterSection } from "@/registry/bases/jsx-email/ui/footer";
import { HeroSection } from "@/registry/bases/jsx-email/ui/hero";

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
            backgroundColor: defaultTheme.colorBackground,
            fontFamily: defaultTheme.fontFamily,
            margin: 0,
          }}
        >
          <Container
            style={{ maxWidth: defaultTheme.containerWidth, padding: "32px" }}
          >
            <Section
              style={{
                paddingBottom: defaultTheme.spacingBase,
                paddingTop: defaultTheme.spacingBase,
              }}
            >
              <Text
                style={{
                  color: defaultTheme.colorText,
                  fontSize: defaultTheme.fontSizeLg,
                  fontWeight: defaultTheme.fontWeightBold,
                }}
              >
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

            <ContentGridSection
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

            <CTABannerSection
              heading="Ready to dive in?"
              subtext="Start building with our intuitive dashboard."
              ctaLabel="Get Started"
              ctaHref={ctaHref}
            />

            <Section
              style={{
                paddingBottom: defaultTheme.spacingBase,
                paddingTop: defaultTheme.spacingBase,
              }}
            >
              <Text
                style={{
                  color: defaultTheme.colorTextMuted,
                  fontSize: defaultTheme.fontSizeSm,
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

OnboardingDefault.PreviewProps = {
  _firstName: "Aniket",
  _productName: "Acme",
  _senderAvatarUrl: "https://example.com/avatar.jpg",
  _senderName: "The team",
  _senderTitle: "Team",
  ctaHref: "https://example.com/dashboard",
} satisfies Props;
