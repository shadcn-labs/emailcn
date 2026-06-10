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

export type TestimonialDarkVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";
export interface TestimonialDarkProps {
  theme?: EmailThemeTokens;
  name?: string;
  role?: string;
  quote?: string;
  variant?: TestimonialDarkVariant;
}
const TestimonialDarkSection = ({
  name,
  quote,
  role,
  theme,
  variant,
}: {
  name: string;
  quote: string;
  role: string;
  theme: EmailThemeTokens;
  variant: TestimonialDarkVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorText,
      borderRadius: theme.borderRadius,
      padding: theme.spacingXl ?? "24px",
    }}
  >
    <Row>
      <Column>
        <Text
          style={{
            color: theme.colorBackground,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeLg,
            fontStyle: "italic",
            lineHeight: theme.lineHeightBase,
            margin: 0,
            paddingBottom: theme.spacingBase ?? "16px",
            textAlign: "center",
          }}
        >
          &ldquo;{quote}&rdquo;
        </Text>
        <Text
          style={{
            color: theme.colorBackground,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeBase,
            fontWeight: theme.fontWeightMedium,
            margin: 0,
            paddingBottom: theme.spacingBase ?? "4px",
            textAlign: "center",
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            color: theme.colorTextMuted,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeSm,
            margin: 0,
            textAlign: "center",
          }}
        >
          {role}
        </Text>
      </Column>
    </Row>
  </Section>
);
export const FullWidthTestimonial = ({
  theme = defaultTheme,
  name = "John Doe",
  role = "CEO, Acme",
  quote = "This product has transformed how we work.",
  variant = "default",
}: TestimonialDarkProps) => (
  <Html>
    <Head />
    <Preview>testimonial dark</Preview>
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
          <TestimonialDarkSection
            name={name}
            quote={quote}
            role={role}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);
FullWidthTestimonial.PreviewProps = {
  name: "Sarah Smith",
  quote: "This tool has been a game-changer for our team productivity.",
  role: "Product Manager, TechCorp",
  theme: defaultTheme,
  variant: "default",
} satisfies TestimonialDarkProps;
