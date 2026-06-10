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

export type TestimonialCenteredVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface TestimonialCenteredProps {
  theme?: EmailThemeTokens;
  avatarUrl?: string;
  name?: string;
  role?: string;
  quote?: string;
  variant?: TestimonialCenteredVariant;
}

const TestimonialCenteredSection = ({
  avatarUrl,
  name,
  quote,
  role,
  theme,
  variant,
}: {
  avatarUrl?: string;
  name: string;
  quote: string;
  role: string;
  theme: EmailThemeTokens;
  variant: TestimonialCenteredVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorBackground,
      padding: `${theme.spacingXl ?? "48px"} 0`,
    }}
  >
    <Row>
      <Column>
        {avatarUrl ? (
          <Img
            alt={name}
            src={avatarUrl}
            width={72}
            height={72}
            style={{
              borderRadius: "50%",
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
            fontStyle: "italic",
            lineHeight: theme.lineHeightBase,
            margin: 0,
            paddingBottom: theme.spacingBase ?? "24px",
            textAlign: "center",
          }}
        >
          &ldquo;{quote}&rdquo;
        </Text>
        <Text
          style={{
            color: theme.colorText,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeBase ?? "14px",
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
            fontSize: theme.fontSizeSm ?? "12px",
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

export const CenteredTestimonialWithCta = ({
  theme = defaultTheme,
  avatarUrl,
  name = "John Doe",
  role = "CEO, Acme",
  quote = "This product has transformed how we work.",
  variant = "default",
}: TestimonialCenteredProps) => (
  <Html>
    <Head />
    <Preview>testimonial centered</Preview>
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
          <TestimonialCenteredSection
            avatarUrl={avatarUrl}
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

CenteredTestimonialWithCta.PreviewProps = {
  avatarUrl:
    "https://api.dicebear.com/9.x/lorelei/png?seed=preview-registry%2Fbases%2Fmjml-react%2Fui%2Fmarketing%2Ftestimonials%2Fcentered-testimonial-with-cta.tsx-72-1&size=72",
  name: "Sarah Smith",
  quote:
    "Working with this product has been an absolute game-changer for our team.",
  role: "Product Manager, TechCorp",
  theme: defaultTheme,
  variant: "default",
} satisfies TestimonialCenteredProps;
