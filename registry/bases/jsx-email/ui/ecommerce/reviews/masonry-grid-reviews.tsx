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

export interface MasonryGridReviewsProps {
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

const MasonryGridReviewsSection = ({
  reviews,
  theme,
}: {
  reviews: NonNullable<MasonryGridReviewsProps["reviews"]>;
  theme: EmailThemeTokens;
}) => {
  const mid = Math.ceil(reviews.length / 2);
  const leftCol = reviews.slice(0, mid);
  const rightCol = reviews.slice(mid);

  return (
    <Section style={{ padding: "0" }}>
      <Row>
        <Column
          style={{
            paddingRight: theme.spacingBase ?? "16px",
            verticalAlign: "top",
            width: "50%",
          }}
        >
          {leftCol.map((review) => (
            <Column
              key={review.name}
              style={{
                backgroundColor: theme.colorBackgroundMuted,
                border: `1px solid ${theme.colorBorder ?? "#e5e7eb"}`,
                borderRadius: theme.borderRadius,
                padding: theme.spacingBase ?? "16px",
              }}
            >
              <Text
                style={{
                  color: theme.colorText,
                  fontFamily: theme.fontFamily,
                  fontSize: theme.fontSizeSm ?? "12px",
                  fontWeight: theme.fontWeightMedium ?? "500",
                  margin: 0,
                  paddingBottom: theme.spacingBase ?? "16px",
                }}
              >
                {review.name}
              </Text>
              <StarRating rating={review.rating} theme={theme} />
              <Text
                style={{
                  color: theme.colorText,
                  fontFamily: theme.fontFamily,
                  fontSize: theme.fontSizeBase ?? "14px",
                  lineHeight: theme.lineHeightBase,
                  margin: 0,
                }}
              >
                &ldquo;{review.text}&rdquo;
              </Text>
              {review.date ? (
                <Text
                  style={{
                    color: theme.colorTextMuted,
                    fontFamily: theme.fontFamily,
                    fontSize: theme.fontSizeSm ?? "12px",
                    margin: 0,
                    paddingTop: theme.spacingBase ?? "16px",
                  }}
                >
                  {review.date}
                </Text>
              ) : null}
            </Column>
          ))}
        </Column>
        <Column
          style={{
            paddingLeft: theme.spacingBase ?? "16px",
            verticalAlign: "top",
            width: "50%",
          }}
        >
          {rightCol.map((review) => (
            <Column
              key={review.name}
              style={{
                backgroundColor: theme.colorBackgroundMuted,
                border: `1px solid ${theme.colorBorder ?? "#e5e7eb"}`,
                borderRadius: theme.borderRadius,
                padding: theme.spacingBase ?? "16px",
              }}
            >
              <Text
                style={{
                  color: theme.colorText,
                  fontFamily: theme.fontFamily,
                  fontSize: theme.fontSizeSm ?? "12px",
                  fontWeight: theme.fontWeightMedium ?? "500",
                  margin: 0,
                  paddingBottom: theme.spacingBase ?? "16px",
                }}
              >
                {review.name}
              </Text>
              <StarRating rating={review.rating} theme={theme} />
              <Text
                style={{
                  color: theme.colorText,
                  fontFamily: theme.fontFamily,
                  fontSize: theme.fontSizeBase ?? "14px",
                  lineHeight: theme.lineHeightBase,
                  margin: 0,
                }}
              >
                &ldquo;{review.text}&rdquo;
              </Text>
              {review.date ? (
                <Text
                  style={{
                    color: theme.colorTextMuted,
                    fontFamily: theme.fontFamily,
                    fontSize: theme.fontSizeSm ?? "12px",
                    margin: 0,
                    paddingTop: theme.spacingBase ?? "16px",
                  }}
                >
                  {review.date}
                </Text>
              ) : null}
            </Column>
          ))}
        </Column>
      </Row>
    </Section>
  );
};

export const MasonryGridReviews = ({
  theme = defaultTheme,
  reviews = [
    { name: "A", rating: 5, text: "Great!" },
    { name: "B", rating: 4, text: "Nice!" },
    { name: "C", rating: 5, text: "Love it!" },
  ],
  variant = "default",
}: MasonryGridReviewsProps) => (
  <Html>
    <Head />
    <Preview>masonry-reviews</Preview>
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
          <MasonryGridReviewsSection reviews={reviews} theme={theme} />
        </Section>
      </Container>
    </Body>
  </Html>
);

MasonryGridReviews.PreviewProps = {
  reviews: [
    {
      avatarUrl:
        "https://api.dicebear.com/9.x/lorelei/png?seed=mjml-review-1&size=128",
      date: "March 2026",
      name: "Alex",
      rating: 5,
      text: "Excellent!",
    },
    {
      avatarUrl:
        "https://api.dicebear.com/9.x/lorelei/png?seed=mjml-review-2&size=128",
      date: "Feb 2026",
      name: "Jordan",
      rating: 4,
      text: "Really good product!",
    },
    {
      avatarUrl:
        "https://api.dicebear.com/9.x/lorelei/png?seed=mjml-review-3&size=128",
      date: "Jan 2026",
      name: "Sam",
      rating: 5,
      text: "Love it!",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies MasonryGridReviewsProps;
