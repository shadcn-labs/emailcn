import { Button, Container, Section, Text } from "react-email";
import type { EmailTheme } from "../themes/default";
import { theme as defaultTheme } from "../themes/default";

export interface CTABannerProps {
  theme?: EmailTheme;
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: "filled" | "outline";
}

export const CTABanner = ({
  theme = defaultTheme,
  heading = "Get Started",
  subtext = "Join thousands of happy users.",
  ctaLabel = "Get Started",
  ctaHref = "#",
  variant = "filled",
}: CTABannerProps) => {
  const isFilled = variant === "filled";
  const style = {
    cta: {
      backgroundColor: isFilled
        ? theme.colorPrimaryForeground
        : theme.button.primary.backgroundColor,
      borderRadius: theme.button.primary.borderRadius,
      color: isFilled ? theme.colorPrimary : theme.button.primary.color,
      display: "block",
      fontSize: theme.button.primary.fontSize,
      fontWeight: theme.button.primary.fontWeight,
      paddingX: theme.button.primary.paddingX,
      paddingY: theme.button.primary.paddingY,
      textAlign: "center" as const,
      textDecoration: "none",
    } as const,
    heading: {
      color: isFilled ? theme.colorPrimaryForeground : theme.colorText,
      fontSize: theme.fontSizeXl,
      fontWeight: theme.fontWeightMedium,
      marginBottom: "8px",
      textAlign: "center" as const,
    },
    section: {
      backgroundColor: isFilled ? theme.colorPrimary : "transparent",
      border: isFilled ? "none" : `1px solid ${theme.colorBorder}`,
      borderRadius: theme.borderRadius,
      padding: theme.spacingLg,
    },
    subtext: {
      color: isFilled ? theme.colorPrimaryForeground : theme.colorTextMuted,
      fontSize: theme.fontSizeBase,
      marginBottom: theme.spacingBase,
      opacity: 0.9,
      textAlign: "center" as const,
    },
  };

  return (
    <Section style={style.section}>
      <Container align="center">
        <Text style={style.heading}>{heading}</Text>
        <Text style={style.subtext}>{subtext}</Text>
        {ctaLabel && ctaHref && (
          <Button href={ctaHref} style={style.cta}>
            {ctaLabel}
          </Button>
        )}
      </Container>
    </Section>
  );
};

CTABanner.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Start Building Free",
  heading: "Ready to get started?",
  subtext: "Join 10,000+ developers building with our tools.",
  theme: defaultTheme,
  variant: "filled",
} satisfies CTABannerProps;

export default CTABanner;
