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

export type FeatureIconRowVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FeatureIconRowProps {
  theme?: EmailThemeTokens;
  iconUrl?: string;
  iconAlt?: string;
  heading?: string;
  body?: string;
  features?: { iconUrl?: string; heading: string; body: string }[];
  variant?: FeatureIconRowVariant;
}

const FeatureIconRowSection = ({
  features,
  theme,
  variant,
}: {
  features: FeatureIconRowProps["features"];
  theme: EmailThemeTokens;
  variant: FeatureIconRowVariant;
}) => {
  const items = features ?? [];

  return (
    <Section
      style={{
        backgroundColor: theme.colorBackground,
        padding: `${theme.spacingXl ?? "48px"} 0`,
      }}
    >
      <Row>
        {items.slice(0, 3).map((f, i) => (
          <Column
            key={f.heading + i}
            style={{
              padding: theme.spacingBase ?? "24px",
              verticalAlign: "top",
              width: `${100 / Math.min(items.length, 3)}%`,
            }}
          >
            {f.iconUrl ? (
              <Img
                alt={f.heading}
                src={f.iconUrl}
                width={48}
                style={{
                  display: "block",
                  margin: "0 auto",
                  maxWidth: "100%",
                  paddingBottom: theme.spacingBase ?? "24px",
                }}
              />
            ) : null}
            <Text
              style={{
                color: theme.colorText,
                fontFamily: theme.fontFamily,
                fontSize: theme.fontSizeLg ?? "16px",
                fontWeight: theme.fontWeightMedium,
                margin: 0,
                paddingBottom: theme.spacingBase ?? "16px",
                textAlign: "center",
              }}
            >
              {f.heading}
            </Text>
            <Text
              style={{
                color: theme.colorTextMuted,
                fontFamily: theme.fontFamily,
                fontSize: theme.fontSizeBase ?? "14px",
                lineHeight: theme.lineHeightBase,
                margin: 0,
                textAlign: "center",
              }}
            >
              {f.body}
            </Text>
          </Column>
        ))}
      </Row>
    </Section>
  );
};

export const FeatureWithFullTitleAndTallBackgroundImages = ({
  theme = defaultTheme,
  features = [
    { body: "Lightning fast performance.", heading: "Fast" },
    { body: "99.9% uptime guaranteed.", heading: "Reliable" },
    { body: "Enterprise-grade security.", heading: "Secure" },
  ],
  variant = "default",
}: FeatureIconRowProps) => (
  <Html>
    <Head />
    <Preview>feature icon row</Preview>
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
          <FeatureIconRowSection
            features={features}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

FeatureWithFullTitleAndTallBackgroundImages.PreviewProps = {
  features: [
    { body: "Lightning fast email rendering.", heading: "Fast" },
    { body: "Works across all major email clients.", heading: "Reliable" },
    { body: "Your data is always protected.", heading: "Secure" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies FeatureIconRowProps;
