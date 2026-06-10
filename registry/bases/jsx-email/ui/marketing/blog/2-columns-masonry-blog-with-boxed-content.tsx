/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Button,
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

export type BlogCtaBannerVariant = "default" | "slanted-left" | "slanted-right";
export interface BlogCtaBannerProps {
  theme?: EmailThemeTokens;
  heading?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: BlogCtaBannerVariant;
}
const BlogCtaBannerSection = ({
  ctaHref,
  ctaLabel,
  description,
  heading,
  theme,
  variant,
}: {
  ctaHref: string;
  ctaLabel: string;
  description: string;
  heading: string;
  theme: EmailThemeTokens;
  variant: BlogCtaBannerVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorBackgroundMuted,
      borderRadius: theme.borderRadius,
      padding: theme.spacingXl ?? "24px",
    }}
  >
    <Row>
      <Column>
        <Text
          style={{
            color: theme.colorPrimary,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeSm,
            fontWeight: theme.fontWeightBold,
            margin: 0,
            paddingBottom: theme.spacingBase ?? "8px",
            textAlign: "center",
          }}
        >
          {heading}
        </Text>
        <Text
          style={{
            color: theme.colorText,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeLg,
            fontWeight: theme.fontWeightMedium,
            margin: 0,
            paddingBottom: theme.spacingBase ?? "8px",
            textAlign: "center",
          }}
        >
          {description}
        </Text>
        {ctaLabel && ctaHref ? (
          <Button
            href={ctaHref}
            align="center"
            width={160}
            height={40}
            style={{
              backgroundColor: theme.colorPrimary,
              borderRadius: theme.borderRadius,
              color: theme.colorPrimaryForeground,
              display: "inline-block",
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeSm,
              fontWeight: theme.fontWeightMedium,
              height: "auto",
              padding: `${theme.button.primary.paddingY} ${theme.button.primary.paddingX}`,
              textDecoration: "none",
              width: "auto",
            }}
          >
            {ctaLabel}
          </Button>
        ) : null}
      </Column>
    </Row>
  </Section>
);
export const TwoColumnsMasonryBlogWithBoxedContent = ({
  theme = defaultTheme,
  heading = "Subscribe",
  description = "Get the latest posts delivered to your inbox.",
  ctaLabel = "Subscribe Now",
  ctaHref = "#",
  variant = "default",
}: BlogCtaBannerProps) => (
  <Html>
    <Head />
    <Preview>blog cta banner</Preview>
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
          <BlogCtaBannerSection
            ctaHref={ctaHref}
            ctaLabel={ctaLabel}
            description={description}
            heading={heading}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);
TwoColumnsMasonryBlogWithBoxedContent.PreviewProps = {
  ctaHref: "https://example.com/subscribe",
  ctaLabel: "Subscribe Now",
  description: "Get the latest posts delivered to your inbox every week.",
  heading: "NEWSLETTER",
  theme: defaultTheme,
  variant: "default",
} satisfies BlogCtaBannerProps;
