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
      <TwoColumnsReviewsSection reviews={reviews} theme={theme} />
    </MjmlBody>
  </Mjml>
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
