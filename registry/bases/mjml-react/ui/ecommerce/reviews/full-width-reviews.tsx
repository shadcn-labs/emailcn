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
    <MjmlSection padding={`${theme.spacingXl ?? "24px"} 0`}>
      {reviews.map((review) => (
        <MjmlColumn
          key={review.name}
          backgroundColor={theme.colorBackgroundMuted}
          border={`1px solid ${theme.colorBorder ?? "#e5e7eb"}`}
          borderRadius={theme.borderRadius}
          padding={theme.spacingLg ?? "24px"}
        >
          <StarRating rating={review.rating} theme={theme} />
          <MjmlText
            align={alignText}
            color={theme.colorText}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeBase ?? "14px"}
            lineHeight={theme.lineHeightBase}
          >
            &ldquo;{review.text}&rdquo;
          </MjmlText>
        </MjmlColumn>
      ))}
    </MjmlSection>
  );
};

export const FullWidthReviews = ({
  theme = defaultTheme,
  reviews = [{ name: "Alice", rating: 5, text: "Amazing!" }],
  variant = "default",
}: FullWidthReviewsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>full-reviews</MjmlPreview>
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
        <FullWidthReviewsSection
          reviews={reviews}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
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
