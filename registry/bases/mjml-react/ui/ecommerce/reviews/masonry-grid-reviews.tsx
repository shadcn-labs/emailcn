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
    <MjmlSection padding="0">
      <MjmlColumn
        width="50%"
        paddingRight={theme.spacingBase ?? "16px"}
        verticalAlign="top"
      >
        {leftCol.map((review) => (
          <MjmlColumn
            key={review.name}
            backgroundColor={theme.colorBackgroundMuted}
            border={`1px solid ${theme.colorBorder ?? "#e5e7eb"}`}
            borderRadius={theme.borderRadius}
            padding={theme.spacingBase ?? "16px"}
          >
            <MjmlText
              color={theme.colorText}
              fontFamily={theme.fontFamily}
              fontSize={theme.fontSizeSm ?? "12px"}
              fontWeight={theme.fontWeightMedium ?? "500"}
              paddingBottom={theme.spacingBase ?? "16px"}
            >
              {review.name}
            </MjmlText>
            <StarRating rating={review.rating} theme={theme} />
            <MjmlText
              color={theme.colorText}
              fontFamily={theme.fontFamily}
              fontSize={theme.fontSizeBase ?? "14px"}
              lineHeight={theme.lineHeightBase}
            >
              &ldquo;{review.text}&rdquo;
            </MjmlText>
            {review.date ? (
              <MjmlText
                color={theme.colorTextMuted}
                fontFamily={theme.fontFamily}
                fontSize={theme.fontSizeSm ?? "12px"}
                paddingTop={theme.spacingBase ?? "16px"}
              >
                {review.date}
              </MjmlText>
            ) : null}
          </MjmlColumn>
        ))}
      </MjmlColumn>
      <MjmlColumn
        width="50%"
        paddingLeft={theme.spacingBase ?? "16px"}
        verticalAlign="top"
      >
        {rightCol.map((review) => (
          <MjmlColumn
            key={review.name}
            backgroundColor={theme.colorBackgroundMuted}
            border={`1px solid ${theme.colorBorder ?? "#e5e7eb"}`}
            borderRadius={theme.borderRadius}
            padding={theme.spacingBase ?? "16px"}
          >
            <MjmlText
              color={theme.colorText}
              fontFamily={theme.fontFamily}
              fontSize={theme.fontSizeSm ?? "12px"}
              fontWeight={theme.fontWeightMedium ?? "500"}
              paddingBottom={theme.spacingBase ?? "16px"}
            >
              {review.name}
            </MjmlText>
            <StarRating rating={review.rating} theme={theme} />
            <MjmlText
              color={theme.colorText}
              fontFamily={theme.fontFamily}
              fontSize={theme.fontSizeBase ?? "14px"}
              lineHeight={theme.lineHeightBase}
            >
              &ldquo;{review.text}&rdquo;
            </MjmlText>
            {review.date ? (
              <MjmlText
                color={theme.colorTextMuted}
                fontFamily={theme.fontFamily}
                fontSize={theme.fontSizeSm ?? "12px"}
                paddingTop={theme.spacingBase ?? "16px"}
              >
                {review.date}
              </MjmlText>
            ) : null}
          </MjmlColumn>
        ))}
      </MjmlColumn>
    </MjmlSection>
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
  <Mjml>
    <MjmlHead>
      <MjmlPreview>masonry-reviews</MjmlPreview>
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
        <MasonryGridReviewsSection reviews={reviews} theme={theme} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
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
