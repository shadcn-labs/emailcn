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

export interface FullWidthReviewsProps {
  theme?: EmailThemeTokens;
  reviews?: {
    avatarUrl?: string;
    name: string;
    rating: number;
    text: string;
    date?: string;
  }[];
  variant?: "default" | "slanted-left" | "slanted-right";
}

const StarRating = ({
  rating,
  theme,
}: {
  rating: number;
  theme: EmailThemeTokens;
}) => {
  const stars = "\u2605".repeat(Math.min(rating, 5));
  const empty = "\u2606".repeat(Math.max(0, 5 - Math.min(rating, 5)));
  return (
    <Text
      style={{
        color: theme.colorPrimary,
        fontFamily: theme.fontFamily,
        fontSize: theme.fontSizeLg ?? "16px",
        margin: 0,
        paddingBottom: theme.spacingBase ?? "16px",
      }}
    >
      {stars}
      {empty ? (
        <span style={{ color: theme.colorBorder ?? "#e5e7eb" }}>{empty}</span>
      ) : null}
    </Text>
  );
};

const FullWidthReviewsSection = ({
  reviews,
  theme,
  variant,
}: {
  reviews: NonNullable<FullWidthReviewsProps["reviews"]>;
  theme: EmailThemeTokens;
  variant: NonNullable<FullWidthReviewsProps["variant"]>;
}) => {
  const alignText =
    variant === "slanted-left"
      ? "left"
      : variant === "slanted-right"
        ? "right"
        : "left";

  return (
    <Section style={{ padding: `${theme.spacingXl ?? "24px"} 0` }}>
      <Row>
        {reviews.map((review) => (
          <Column
            key={review.name}
            style={{
              backgroundColor: theme.colorBackgroundMuted,
              border: `1px solid ${theme.colorBorder ?? "#e5e7eb"}`,
              borderRadius: theme.borderRadius,
              padding: theme.spacingLg ?? "24px",
            }}
          >
            <StarRating rating={review.rating} theme={theme} />
            <Text
              style={{
                color: theme.colorText,
                fontFamily: theme.fontFamily,
                fontSize: theme.fontSizeBase ?? "14px",
                lineHeight: theme.lineHeightBase,
                margin: 0,
                textAlign: alignText,
              }}
            >
              &ldquo;{review.text}&rdquo;
            </Text>
          </Column>
        ))}
      </Row>
    </Section>
  );
};

export const FullWidthReviews = ({
  theme = defaultTheme,
  reviews = [{ name: "Alice", rating: 5, text: "Amazing!" }],
  variant = "default",
}: FullWidthReviewsProps) => (
  <Html>
    <Head />
    <Preview>full-reviews</Preview>
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
          <FullWidthReviewsSection
            reviews={reviews}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

FullWidthReviews.PreviewProps = {
  reviews: [
    {
      avatarUrl:
        "https://api.dicebear.com/9.x/lorelei/png?seed=ex-avatar-1&size=128",
      date: "March 2026",
      name: "Alex Johnson",
      rating: 5,
      text: "Absolutely love this product!",
    },
    {
      avatarUrl:
        "https://api.dicebear.com/9.x/lorelei/png?seed=ex-avatar-2&size=128",
      date: "Feb 2026",
      name: "Maria Garcia",
      rating: 4,
      text: "Great value for the price.",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies FullWidthReviewsProps;
