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
import { theme as vercelTheme } from "../themes/vercel";

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
  _senderTitle = "Team",
  _senderAvatarUrl,
}: Props) => {
  const t = vercelTheme;

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

OnboardingVercel.PreviewProps = {
  _firstName: "Aniket",
  _productName: "Vercel",
  _senderAvatarUrl: "https://example.com/avatar.jpg",
  _senderName: "Vercel Team",
  _senderTitle: "Team",
  ctaHref: "https://vercel.com/dashboard",
} satisfies Props;

export default OnboardingVercel;
