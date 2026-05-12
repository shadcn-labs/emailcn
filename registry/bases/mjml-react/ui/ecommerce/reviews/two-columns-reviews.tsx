/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

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
    <MjmlText
      color={theme.colorPrimary}
      fontFamily={theme.fontFamily}
      fontSize={theme.fontSizeLg ?? "16px"}
      paddingBottom={theme.spacingBase ?? "16px"}
    >
      {stars}
      {empty ? (
        <span style={{ color: theme.colorBorder ?? "#e5e7eb" }}>{empty}</span>
      ) : null}
    </MjmlText>
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
    <MjmlSection padding={`${theme.spacingXl ?? "24px"} 0`}>
      {rows.map((row, ri) => (
        <MjmlSection key={ri} padding={`0 0 ${theme.spacingLg ?? "24px"}`}>
          {row.map((review) => (
            <MjmlColumn
              key={review.name}
              width="50%"
              paddingRight={theme.spacingBase ?? "16px"}
              verticalAlign="top"
            >
              <MjmlWrapper
                backgroundColor={theme.colorBackgroundMuted}
                border={`1px solid ${theme.colorBorder ?? "#e5e7eb"}`}
                borderRadius={theme.borderRadius}
                padding={theme.spacingLg ?? "24px"}
              >
                <StarRating rating={review.rating} theme={theme} />
                <MjmlText
                  color={theme.colorText}
                  fontFamily={theme.fontFamily}
                  fontSize={theme.fontSizeBase ?? "14px"}
                  lineHeight={theme.lineHeightBase}
                  paddingBottom={theme.spacingBase ?? "16px"}
                >
                  &ldquo;{review.text}&rdquo;
                </MjmlText>
                <MjmlSection padding="0">
                  <MjmlColumn
                    width="40px"
                    paddingRight={theme.spacingBase ?? "16px"}
                  >
                    {review.avatarUrl ? (
                      <MjmlImage
                        alt={review.name}
                        borderRadius="999px"
                        height={36}
                        padding="0"
                        src={review.avatarUrl}
                        width={36}
                      />
                    ) : null}
                  </MjmlColumn>
                  <MjmlColumn>
                    <MjmlText
                      color={theme.colorText}
                      fontFamily={theme.fontFamily}
                      fontSize={theme.fontSizeBase ?? "14px"}
                      fontWeight={theme.fontWeightMedium ?? "500"}
                    >
                      {review.name}
                    </MjmlText>
                    {review.date ? (
                      <MjmlText
                        color={theme.colorTextMuted}
                        fontFamily={theme.fontFamily}
                        fontSize={theme.fontSizeSm ?? "12px"}
                      >
                        {review.date}
                      </MjmlText>
                    ) : null}
                  </MjmlColumn>
                </MjmlSection>
              </MjmlWrapper>
            </MjmlColumn>
          ))}
        </MjmlSection>
      ))}
    </MjmlSection>
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
  <Mjml>
    <MjmlHead>
      <MjmlPreview>two-col-reviews</MjmlPreview>
      <MjmlAttributes>
        <MjmlAll color={theme.colorTextMuted} fontFamily={theme.fontFamily} />
        <MjmlText
          fontSize={theme.fontSizeBase}
          lineHeight={theme.lineHeightBase}
        />
      </MjmlAttributes>
    </MjmlHead>
    <MjmlBody
      backgroundColor={theme.colorBackground}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <TwoColumnsReviewsSection reviews={reviews} theme={theme} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

TwoColumnsReviews.PreviewProps = {
  reviews: [
    {
      avatarUrl: "https://example.com/av1.jpg",
      date: "March 2026",
      name: "Alex Johnson",
      rating: 5,
      text: "Absolutely love this product!",
    },
    {
      avatarUrl: "https://example.com/av2.jpg",
      date: "Feb 2026",
      name: "Maria Garcia",
      rating: 4,
      text: "Great value for the price.",
    },
    {
      avatarUrl: "https://example.com/av3.jpg",
      date: "Jan 2026",
      name: "David Kim",
      rating: 5,
      text: "Best purchase this year!",
    },
    {
      avatarUrl: "https://example.com/av4.jpg",
      date: "Dec 2025",
      name: "Sarah Chen",
      rating: 4,
      text: "Solid product with excellent support.",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies TwoColumnsReviewsProps;
