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

export type HeroVariant = "default" | "slanted-left" | "slanted-right";

export interface HeroProps {
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  align?: "left" | "center";
  variant?: HeroVariant;
}

export const HeroSection = ({
  align = "center",
  ctaHref = "#",
  ctaLabel = "Get Started",
  heading = "Welcome",
  subheading = "Get started with your account",
  variant = "default",
}: Omit<HeroProps, "theme">) => {
  void variant;
  const alignStyle =
    align === "center"
      ? { textAlign: "center" as const }
      : { textAlign: "left" as const };

  return (
    <Section
      style={{
        backgroundColor: defaultTheme.colorBackground,
        padding: "48px 0",
      }}
    >
      <Container
        style={{ maxWidth: defaultTheme.containerWidth, ...alignStyle }}
      >
        <Text
          style={{
            color: defaultTheme.colorText,
            fontSize: defaultTheme.fontSizeHeading,
            fontWeight: defaultTheme.fontWeightBold,
            lineHeight: 1.3,
            margin: 0,
            ...alignStyle,
          }}
        >
          {heading}
        </Text>
        <Text
          style={{
            color: defaultTheme.colorTextMuted,
            fontSize: defaultTheme.fontSizeLg,
            lineHeight: 1.5,
            marginBottom: "32px",
            marginTop: "24px",
            ...alignStyle,
          }}
        >
          {subheading}
        </Text>
        {ctaLabel && ctaHref ? (
          <div style={alignStyle}>
            <Button
              href={ctaHref}
              width={160}
              height={40}
              style={{
                backgroundColor: defaultTheme.button.primary.backgroundColor,
                borderRadius: defaultTheme.button.primary.borderRadius,
                color: defaultTheme.button.primary.color,
                display: "inline-block",
                fontSize: defaultTheme.button.primary.fontSize,
                fontWeight: defaultTheme.button.primary.fontWeight,
                height: "auto",
                paddingBottom: defaultTheme.button.primary.paddingY,
                paddingLeft: defaultTheme.button.primary.paddingX,
                paddingRight: defaultTheme.button.primary.paddingX,
                paddingTop: defaultTheme.button.primary.paddingY,
                textDecoration: "none",
                width: "auto",
              }}
            >
              {ctaLabel}
            </Button>
          </div>
        ) : null}
      </Container>
    </Section>
  );
};

export const Hero = ({
  heading = "Welcome",
  subheading = "Get started with your account",
  ctaLabel = "Get Started",
  ctaHref = "#",
  align = "center",
  variant = "default",
}: HeroProps) => (
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
        <HeroSection
          align={align}
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          heading={heading}
          subheading={subheading}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

Hero.PreviewProps = {
  align: "center",
  ctaHref: "https://example.com",
  ctaLabel: "Get Started",
  heading: "Welcome to Acme",
  subheading: "Build faster with the tools you love.",
  variant: "default",
} satisfies HeroProps;
