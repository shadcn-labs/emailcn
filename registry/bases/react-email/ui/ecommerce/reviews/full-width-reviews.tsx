/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export interface FullWidthReviewsProps {
  theme?: TailwindConfig;
  reviews?: {
    avatarUrl?: string;
    name: string;
    rating: number;
    text: string;
    date?: string;
  }[];
  variant?: "default" | "slanted-left" | "slanted-right";
}

const StarRating = ({ rating }: { rating: number }) => {
  const stars = Array.from({ length: 5 }, (_, i) =>
    i < rating ? "\u2605" : "\u2606"
  );
  return <Text className="m-0 text-base text-primary">{stars.join("")}</Text>;
};

export const FullWidthReviewsSection = ({
  reviews = [
    { name: "Customer", rating: 5, text: "Great product!" },
    { name: "Customer", rating: 4, text: "Very satisfied." },
  ],
  variant = "default",
}: Omit<FullWidthReviewsProps, "theme">) => {
  const alignClass =
    variant === "slanted-left"
      ? "text-left"
      : variant === "slanted-right"
        ? "text-right"
        : "text-left";

  return (
    <Section className="py-12">
      {reviews.map((review, index) => (
        <Section
          key={`${review.name}-${index}`}
          className="mb-4 rounded-md border border-border p-6"
        >
          <StarRating rating={review.rating} />
          <Text
            className={`mt-3 mb-4 text-base leading-snug text-foreground ${alignClass}`}
          >
            &ldquo;{review.text}&rdquo;
          </Text>
          <Row>
            <Column className="w-[40px] align-middle">
              {review.avatarUrl ? (
                <Img
                  src={review.avatarUrl}
                  alt={review.name}
                  height={40}
                  width={40}
                  className="rounded-full object-cover"
                />
              ) : null}
            </Column>
            <Column className="pl-3 align-middle">
              <Text className="m-0 text-sm font-medium text-foreground">
                {review.name}
              </Text>
              {review.date ? (
                <Text className="m-0 text-xs text-foreground-muted">
                  {review.date}
                </Text>
              ) : null}
            </Column>
          </Row>
        </Section>
      ))}
    </Section>
  );
};

export const FullWidthReviews = ({
  theme = defaultTheme,
  reviews = [
    { name: "Customer", rating: 5, text: "Great product!" },
    { name: "Customer", rating: 4, text: "Very satisfied." },
  ],
  variant = "default",
}: FullWidthReviewsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Customer Reviews</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <FullWidthReviewsSection reviews={reviews} variant={variant} />
      </Body>
    </Tailwind>
  </Html>
);

FullWidthReviews.PreviewProps = {
  reviews: [
    {
      avatarUrl: "https://example.com/avatar1.jpg",
      date: "March 2026",
      name: "Alex Johnson",
      rating: 5,
      text: "Absolutely love this product! The quality exceeded my expectations.",
    },
    {
      avatarUrl: "https://example.com/avatar2.jpg",
      date: "February 2026",
      name: "Maria Garcia",
      rating: 4,
      text: "Great value for the price. Would recommend to anyone.",
    },
    {
      avatarUrl: "https://example.com/avatar3.jpg",
      date: "January 2026",
      name: "David Kim",
      rating: 5,
      text: "Best purchase I've made this year.",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies FullWidthReviewsProps;
