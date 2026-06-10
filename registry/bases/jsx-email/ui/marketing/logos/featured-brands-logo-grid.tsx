/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type LogosCenteredVariant = "default" | "slanted-left" | "slanted-right";

export interface LogosCenteredProps {
  theme?: EmailThemeTokens;
  heading?: string;
  logos?: { src: string; alt: string; width?: number }[];
  variant?: LogosCenteredVariant;
}

const LogosCenteredSection = ({
  heading,
  logos,
  theme,
  variant,
}: {
  heading: string;
  logos: LogosCenteredProps["logos"];
  theme: EmailThemeTokens;
  variant: LogosCenteredVariant;
}) => {
  const items = logos ?? [];

  return (
    <Section
      style={{
        backgroundColor: theme.colorBackground,
        padding: `${theme.spacingXl ?? "48px"} 0`,
      }}
    >
      <Row>
        <Column>
          {heading ? (
            <Text
              style={{
                color: theme.colorTextMuted,
                fontFamily: theme.fontFamily,
                fontSize: theme.fontSizeSm ?? "12px",
                fontWeight: theme.fontWeightMedium,
                margin: 0,
                paddingBottom: theme.spacingLg ?? "32px",
                textAlign: "center",
              }}
            >
              {heading}
            </Text>
          ) : null}
        </Column>
        {items.slice(0, 4).map((logo, i) => (
          <Column
            key={logo.alt + i}
            style={{
              padding: theme.spacingBase ?? "24px",
              verticalAlign: "middle",
              width: `${100 / Math.min(items.length, 4)}%`,
            }}
          >
            <Img
              alt={logo.alt}
              src={logo.src}
              width={logo.width ?? 120}
              style={{ display: "block", margin: "0 auto", maxWidth: "100%" }}
            />
          </Column>
        ))}
      </Row>
    </Section>
  );
};

export const FeaturedBrandsLogoGrid = ({
  theme = defaultTheme,
  heading = "Trusted by leading companies",
  logos = [
    { alt: "Company 1", src: "https://static.photos/business/120x40/2" },
    { alt: "Company 2", src: "https://static.photos/business/120x40/3" },
    { alt: "Company 3", src: "https://static.photos/business/120x40/4" },
  ],
  variant = "default",
}: LogosCenteredProps) => (
  <Html>
    <Head />
    <Preview>logos centered</Preview>
    <Body
      style={{
        backgroundColor: theme.colorBackground,
        color: theme.colorTextMuted,
        fontFamily: theme.fontFamily,
        fontSize: theme.fontSizeBase,
        lineHeight: theme.lineHeightBase,
        margin: 0,
      }}
    >
      <Container style={{ maxWidth: theme.containerWidth }}>
        <Section style={{ padding: "0" }}>
          <LogosCenteredSection
            heading={heading}
            logos={logos}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

FeaturedBrandsLogoGrid.PreviewProps = {
  heading: "Trusted by leading companies",
  logos: [
    { alt: "Acme", src: "https://static.photos/business/120x40/5", width: 120 },
    {
      alt: "TechCo",
      src: "https://static.photos/business/120x40/6",
      width: 120,
    },
    {
      alt: "Global",
      src: "https://static.photos/business/120x40/7",
      width: 120,
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies LogosCenteredProps;
