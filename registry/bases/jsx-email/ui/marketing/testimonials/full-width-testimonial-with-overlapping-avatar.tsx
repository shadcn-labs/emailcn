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

export type TestimonialCardVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface TestimonialCardProps {
  theme?: EmailThemeTokens;
  avatarUrl?: string;
  name?: string;
  role?: string;
  quote?: string;
  companyLogoUrl?: string;
  variant?: TestimonialCardVariant;
}

const TestimonialCardSection = ({
  avatarUrl,
  companyLogoUrl,
  name,
  quote,
  role,
  theme,
  variant,
}: {
  avatarUrl?: string;
  companyLogoUrl?: string;
  name: string;
  quote: string;
  role: string;
  theme: EmailThemeTokens;
  variant: TestimonialCardVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorBackgroundMuted,
      border: `1px solid ${theme.colorBorder ?? "#e5e7eb"}`,
      borderRadius: theme.borderRadius,
      padding: theme.spacingXl ?? "24px",
    }}
  >
    <Row>
      <Column>
        <Text
          style={{
            color: theme.colorText,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeLg ?? "16px",
            fontStyle: "italic",
            lineHeight: theme.lineHeightBase,
            margin: 0,
            paddingBottom: theme.spacingLg ?? "32px",
          }}
        >
          &ldquo;{quote}&rdquo;
        </Text>
        <Column
          style={{ padding: "0", verticalAlign: "middle", width: "auto" }}
        >
          {avatarUrl ? (
            <Img
              alt={name}
              src={avatarUrl}
              width={56}
              height={56}
              style={{
                borderRadius: "50%",
                display: "block",
                margin: "0 auto",
                maxWidth: "100%",
              }}
            />
          ) : null}
        </Column>
        <Column style={{ padding: "0 0 0 16px", verticalAlign: "middle" }}>
          <Text
            style={{
              color: theme.colorText,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeBase ?? "14px",
              fontWeight: theme.fontWeightMedium,
              margin: 0,
              paddingBottom: theme.spacingBase ?? "4px",
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
            }}
          >
            {role}
          </Text>
        </Column>
        {companyLogoUrl ? (
          <Column style={{ paddingTop: theme.spacingBase ?? "24px" }}>
            <Img
              alt="Company"
              src={companyLogoUrl}
              width={80}
              style={{ display: "block", margin: "0 auto", maxWidth: "100%" }}
            />
          </Column>
        ) : null}
      </Column>
    </Row>
  </Section>
);

export const FullWidthTestimonialWithOverlappingAvatar = ({
  theme = defaultTheme,
  avatarUrl,
  name = "John Doe",
  role = "CEO, Acme",
  quote = "This product has transformed how we work.",
  companyLogoUrl,
  variant = "default",
}: TestimonialCardProps) => (
  <Html>
    <Head />
    <Preview>testimonial card</Preview>
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
          <TestimonialCardSection
            avatarUrl={avatarUrl}
            companyLogoUrl={companyLogoUrl}
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

FullWidthTestimonialWithOverlappingAvatar.PreviewProps = {
  avatarUrl:
    "https://api.dicebear.com/9.x/lorelei/png?seed=preview-registry%2Fbases%2Fmjml-react%2Fui%2Fmarketing%2Ftestimonials%2Ffull-width-testimonial-with-overlapping-avatar.tsx-56-1&size=56",
  companyLogoUrl: "https://static.photos/business/80x20/3",
  name: "Sarah Smith",
  quote:
    "This tool has saved us countless hours and made our team more productive.",
  role: "Product Manager, TechCorp",
  theme: defaultTheme,
  variant: "default",
} satisfies TestimonialCardProps;
