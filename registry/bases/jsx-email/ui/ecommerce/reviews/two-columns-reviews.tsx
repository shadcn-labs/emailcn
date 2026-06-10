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

export interface TwoColumnsReviewsProps {
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

const TwoColumnsReviewsSection = ({
  reviews,
  theme,
}: {
  reviews: NonNullable<TwoColumnsReviewsProps["reviews"]>;
  theme: EmailThemeTokens;
}) => {
  const rows: (typeof reviews)[] = [];
  for (let i = 0; i < reviews.length; i += 2) {
    rows.push(reviews.slice(i, i + 2));
  }

  return (
    <Section style={{ padding: `${theme.spacingXl ?? "24px"} 0` }}>
      <Row>
        {rows.map((row, ri) => (
          <Section
            key={ri}
            style={{ padding: `0 0 ${theme.spacingLg ?? "24px"}` }}
          >
            <Row>
              {row.map((review) => (
                <Column
                  key={review.name}
                  style={{
                    backgroundColor: theme.colorBackgroundMuted,
                    border: `1px solid ${theme.colorBorder ?? "#e5e7eb"}`,
                    borderRadius: theme.borderRadius,
                    padding: theme.spacingLg ?? "24px",
                    paddingRight: theme.spacingBase ?? "16px",
                    verticalAlign: "top",
                    width: "50%",
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
                      paddingBottom: theme.spacingBase ?? "16px",
                    }}
                  >
                    &ldquo;{review.text}&rdquo;
                  </Text>
                  <Text
                    style={{
                      color: theme.colorText,
                      fontFamily: theme.fontFamily,
                      fontSize: theme.fontSizeBase ?? "14px",
                      fontWeight: theme.fontWeightMedium ?? "500",
                      margin: 0,
                    }}
                  >
                    {review.name}
                  </Text>
                  {review.date ? (
                    <Text
                      style={{
                        color: theme.colorTextMuted,
                        fontFamily: theme.fontFamily,
                        fontSize: theme.fontSizeSm ?? "12px",
                        margin: 0,
                      }}
                    >
                      {review.date}
                    </Text>
                  ) : null}
                </Column>
              ))}
            </Row>
          </Section>
        ))}
      </Row>
    </Section>
  );
};

export const TwoColumnsReviews = ({
  theme = defaultTheme,
  reviews = [
    { name: "A", rating: 5, text: "Great!" },
    { name: "B", rating: 4, text: "Nice!" },
  ],
  variant = "default",
}: TwoColumnsReviewsProps) => (
  <Html>
    <Head />
    <Preview>two-col-reviews</Preview>
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
        <TwoColumnsReviewsSection reviews={reviews} theme={theme} />
      </Container>
    </Body>
  </Html>
);

TwoColumnsReviews.PreviewProps = {
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
    {
      avatarUrl:
        "https://api.dicebear.com/9.x/lorelei/png?seed=ex-avatar-3&size=128",
      date: "Jan 2026",
      name: "David Kim",
      rating: 5,
      text: "Best purchase this year!",
    },
    {
      avatarUrl:
        "https://api.dicebear.com/9.x/lorelei/png?seed=ex-avatar-4&size=128",
      date: "Dec 2025",
      name: "Sarah Chen",
      rating: 4,
      text: "Solid product with excellent support.",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies TwoColumnsReviewsProps;
