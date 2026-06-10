/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type TestimonialGridVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";
export interface TestimonialGridProps {
  theme?: EmailThemeTokens;
  testimonials?: {
    avatarUrl?: string;
    name: string;
    role: string;
    quote: string;
  }[];
  variant?: TestimonialGridVariant;
}
const TestimonialGridSection = ({
  testimonials,
  theme,
  variant,
}: {
  testimonials: TestimonialGridProps["testimonials"];
  theme: EmailThemeTokens;
  variant: TestimonialGridVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorBackground,
      padding: `${theme.spacingXl ?? "48px"} 0`,
    }}
  >
    <Row>
      {(testimonials ?? []).slice(0, 3).map((t, i) => (
        <Column
          key={t.name + i}
          style={{
            padding: theme.spacingBase ?? "16px",
            verticalAlign: "top",
            width: "33.33%",
          }}
        >
          <Section
            style={{
              backgroundColor: theme.colorBackgroundMuted,
              border: `1px solid ${theme.colorBorder}`,
              borderRadius: theme.borderRadius,
              padding: theme.spacingBase ?? "16px",
            }}
          >
            <Row>
              <Text
                style={{
                  color: theme.colorText,
                  fontFamily: theme.fontFamily,
                  fontSize: theme.fontSizeSm,
                  fontStyle: "italic",
                  lineHeight: theme.lineHeightBase,
                  margin: 0,
                  paddingBottom: theme.spacingBase ?? "12px",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </Text>
              <Text
                style={{
                  color: theme.colorText,
                  fontFamily: theme.fontFamily,
                  fontSize: theme.fontSizeSm,
                  fontWeight: theme.fontWeightMedium,
                  margin: 0,
                }}
              >
                {t.name}
              </Text>
              <Text
                style={{
                  color: theme.colorTextMuted,
                  fontFamily: theme.fontFamily,
                  fontSize: "11px",
                  margin: 0,
                }}
              >
                {t.role}
              </Text>
            </Row>
          </Section>
        </Column>
      ))}
    </Row>
  </Section>
);
export const SplitTestimonialWithCta = ({
  theme = defaultTheme,
  testimonials = [{ name: "John", quote: "Great product!", role: "CEO" }],
  variant = "default",
}: TestimonialGridProps) => (
  <Html>
    <Head />
    <Preview>testimonial grid</Preview>
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
          <TestimonialGridSection
            testimonials={testimonials}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);
SplitTestimonialWithCta.PreviewProps = {
  testimonials: [
    {
      name: "Sarah Smith",
      quote: "Incredible tool for our workflow.",
      role: "PM, TechCorp",
    },
    {
      name: "Alex Johnson",
      quote: "Saved us countless hours.",
      role: "CEO, StartupCo",
    },
    {
      name: "Maria Garcia",
      quote: "The best email solution we've found.",
      role: "CTO, DevInc",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies TestimonialGridProps;
