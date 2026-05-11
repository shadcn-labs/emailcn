import {
  Body,
  Button,
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

export interface CTABannerProps {
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: "filled" | "outline";
}

export const CTABannerSection = ({
  heading = "Get Started",
  subtext = "Join thousands of happy users.",
  ctaLabel = "Get Started",
  ctaHref = "#",
  variant = "filled",
}: Omit<CTABannerProps, "theme">) => {
  const isFilled = variant === "filled";

  return (
    <Section
      style={{
        backgroundColor: isFilled ? defaultTheme.colorPrimary : "transparent",
        border: isFilled ? "none" : `1px solid ${defaultTheme.colorBorder}`,
        borderRadius: defaultTheme.borderRadius,
        padding: "32px",
      }}
    >
      <Container style={{ textAlign: "center" }}>
        <Text
          style={{
            color: isFilled
              ? defaultTheme.colorPrimaryForeground
              : defaultTheme.colorText,
            fontSize: defaultTheme.fontSizeXl,
            fontWeight: defaultTheme.fontWeightMedium,
            marginBottom: "8px",
            textAlign: "center",
          }}
        >
          {heading}
        </Text>
        <Text
          style={{
            color: isFilled
              ? defaultTheme.colorPrimaryForeground
              : defaultTheme.colorTextMuted,
            fontSize: defaultTheme.fontSizeBase,
            marginBottom: "24px",
            opacity: isFilled ? 0.9 : 1,
            textAlign: "center",
          }}
        >
          {subtext}
        </Text>
        {ctaLabel && ctaHref ? (
          <Button
            href={ctaHref}
            width={160}
            height={40}
            style={{
              backgroundColor: isFilled
                ? defaultTheme.colorPrimaryForeground
                : defaultTheme.colorPrimary,
              borderRadius: defaultTheme.button.primary.borderRadius,
              color: isFilled
                ? defaultTheme.colorPrimary
                : defaultTheme.colorPrimaryForeground,
              display: "block",
              fontSize: defaultTheme.button.primary.fontSize,
              fontWeight: defaultTheme.button.primary.fontWeight,
              height: "auto",
              paddingBottom: defaultTheme.button.primary.paddingY,
              paddingLeft: defaultTheme.button.primary.paddingX,
              paddingRight: defaultTheme.button.primary.paddingX,
              paddingTop: defaultTheme.button.primary.paddingY,
              textAlign: "center",
              textDecoration: "none",
              width: "auto",
            }}
          >
            {ctaLabel}
          </Button>
        ) : null}
      </Container>
    </Section>
  );
};

export const CTABanner = ({
  heading = "Get Started",
  subtext = "Join thousands of happy users.",
  ctaLabel = "Get Started",
  ctaHref = "#",
  variant = "filled",
}: CTABannerProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind>
      <Body
        style={{
          backgroundColor: defaultTheme.colorBackground,
          fontFamily: defaultTheme.fontFamily,
          margin: 0,
        }}
      >
        <CTABannerSection
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          heading={heading}
          subtext={subtext}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

CTABanner.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Start Building Free",
  heading: "Ready to get started?",
  subtext: "Join 10,000+ developers building with our tools.",
  variant: "filled",
} satisfies CTABannerProps;
