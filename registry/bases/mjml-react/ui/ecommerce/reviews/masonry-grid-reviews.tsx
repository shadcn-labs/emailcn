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
    <MjmlSection padding={`${theme.spacingXl ?? "24px"} 0`}>
      <MjmlColumn
        width="50%"
        paddingRight={theme.spacingBase ?? "16px"}
        verticalAlign="top"
      >
        {leftCol.map((review) => (
          <MjmlWrapper
            key={review.name}
            backgroundColor={theme.colorBackgroundMuted}
            border={`1px solid ${theme.colorBorder ?? "#e5e7eb"}`}
            borderRadius={theme.borderRadius}
            padding={theme.spacingBase ?? "16px"}
          >
            <MjmlSection padding="0 0 12px">
              <MjmlColumn width="32px" paddingRight="8px">
                {review.avatarUrl ? (
                  <MjmlImage
                    alt={review.name}
                    borderRadius="999px"
                    height={28}
                    padding="0"
                    src={review.avatarUrl}
                    width={28}
                  />
                ) : null}
              </MjmlColumn>
              <MjmlColumn>
                <MjmlText
                  color={theme.colorText}
                  fontFamily={theme.fontFamily}
                  fontSize={theme.fontSizeSm ?? "12px"}
                  fontWeight={theme.fontWeightMedium ?? "500"}
                >
                  {review.name}
                </MjmlText>
              </MjmlColumn>
            </MjmlSection>
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
          </MjmlWrapper>
        ))}
      </MjmlColumn>
      <MjmlColumn
        width="50%"
        paddingLeft={theme.spacingBase ?? "16px"}
        verticalAlign="top"
      >
        {rightCol.map((review) => (
          <MjmlWrapper
            key={review.name}
            backgroundColor={theme.colorBackgroundMuted}
            border={`1px solid ${theme.colorBorder ?? "#e5e7eb"}`}
            borderRadius={theme.borderRadius}
            padding={theme.spacingBase ?? "16px"}
          >
            <MjmlSection padding="0 0 12px">
              <MjmlColumn width="32px" paddingRight="8px">
                {review.avatarUrl ? (
                  <MjmlImage
                    alt={review.name}
                    borderRadius="999px"
                    height={28}
                    padding="0"
                    src={review.avatarUrl}
                    width={28}
                  />
                ) : null}
              </MjmlColumn>
              <MjmlColumn>
                <MjmlText
                  color={theme.colorText}
                  fontFamily={theme.fontFamily}
                  fontSize={theme.fontSizeSm ?? "12px"}
                  fontWeight={theme.fontWeightMedium ?? "500"}
                >
                  {review.name}
                </MjmlText>
              </MjmlColumn>
            </MjmlSection>
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
          </MjmlWrapper>
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
      avatarUrl: "https://example.com/av1.jpg",
      date: "March 2026",
      name: "Alex",
      rating: 5,
      text: "Excellent!",
    },
    {
      avatarUrl: "https://example.com/av2.jpg",
      date: "Feb 2026",
      name: "Maria",
      rating: 4,
      text: "Great value",
    },
    {
      avatarUrl: "https://example.com/av3.jpg",
      date: "Jan 2026",
      name: "David",
      rating: 5,
      text: "Best purchase!",
    },
    {
      avatarUrl: "https://example.com/av4.jpg",
      date: "Dec 2025",
      name: "Sarah",
      rating: 4,
      text: "Solid product",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies MasonryGridReviewsProps;
