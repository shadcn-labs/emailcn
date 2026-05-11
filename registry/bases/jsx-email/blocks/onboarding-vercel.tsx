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
import { vercelTheme } from "@/registry/bases/jsx-email/themes/vercel";
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
            backgroundColor: vercelTheme.colorBackground,
            fontFamily: vercelTheme.fontFamily,
            margin: 0,
          }}
        >
          <Container
            style={{ maxWidth: vercelTheme.containerWidth, padding: "32px" }}
          >
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

            <Section
              style={{
                paddingBottom: vercelTheme.spacingBase,
                paddingTop: vercelTheme.spacingBase,
              }}
            >
              <Text
                style={{
                  color: vercelTheme.colorTextMuted,
                  fontSize: vercelTheme.fontSizeSm,
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

OnboardingVercel.PreviewProps = {
  _firstName: "Aniket",
  _productName: "Vercel",
  _senderAvatarUrl: "https://example.com/avatar.jpg",
  _senderName: "Vercel Team",
  _senderTitle: "Team",
  ctaHref: "https://vercel.com/dashboard",
} satisfies Props;
