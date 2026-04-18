import { Button, Container, Section, Text } from "react-email";
import type { EmailTheme } from "../themes/default";
import { theme as defaultTheme } from "../themes/default";

export interface HeroProps {
  theme?: EmailTheme;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  align?: "left" | "center";
}

export const Hero = ({
  theme = defaultTheme,
  heading = "Welcome",
  subheading = "Get started with your account",
  ctaLabel = "Get Started",
  ctaHref = "#",
  align = "center",
}: HeroProps) => {
  const style = {
    cta: {
      backgroundColor: theme.button.primary.backgroundColor,
      borderRadius: theme.button.primary.borderRadius,
      color: theme.button.primary.color,
      display: "inline-block",
      fontSize: theme.button.primary.fontSize,
      fontWeight: theme.button.primary.fontWeight,
      paddingX: theme.button.primary.paddingX,
      paddingY: theme.button.primary.paddingY,
      textDecoration: "none",
    } as const,
    heading: {
      color: theme.colorText,
      fontSize: theme.fontSizeHeading,
      fontWeight: theme.fontWeightBold,
      lineHeight: theme.lineHeightBase,
      margin: 0,
      textAlign: align as "left" | "center",
    } as const,
    section: {
      padding: `${theme.spacingXl} 0`,
    },
    subheading: {
      color: theme.colorTextMuted,
      fontSize: theme.fontSizeLg,
      lineHeight: theme.lineHeightBase,
      margin: `${theme.spacingBase} 0 ${theme.spacingLg}`,
      textAlign: align as "left" | "center",
    } as const,
  };

  return (
    <Section style={style.section}>
      <Container align={align}>
        <Text style={style.heading}>{heading}</Text>
        <Text style={style.subheading}>{subheading}</Text>
        {ctaLabel && ctaHref && (
          <Button href={ctaHref} style={style.cta}>
            {ctaLabel}
          </Button>
        )}
      </Container>
    </Section>
  );
};

Hero.PreviewProps = {
  align: "center",
  ctaHref: "https://example.com",
  ctaLabel: "Get Started",
  heading: "Welcome to Acme",
  subheading: "Build faster with the tools you love.",
  theme: defaultTheme,
} satisfies HeroProps;

export default Hero;
