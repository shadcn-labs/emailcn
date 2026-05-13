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

export interface TwoColumnsReviewsProps {
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

export const TwoColumnsReviewsSection = ({
  reviews = [
    { name: "Customer", rating: 5, text: "Great product!" },
    { name: "Customer", rating: 4, text: "Very satisfied." },
  ],
  variant = "default",
}: Omit<TwoColumnsReviewsProps, "theme">) => {
  const rows: (typeof reviews)[] = [];
  for (let i = 0; i < reviews.length; i += 2) {
    rows.push(reviews.slice(i, i + 2));
  }

  return (
    <Section className="py-12">
      {rows.map((row, rowIndex) => (
        <Row key={`row-${rowIndex}`} className="mb-4">
          {row.map((review, colIndex) => (
            <Column
              key={`${review.name}-${colIndex}`}
              className="w-1/2 align-top pr-4"
            >
              <Section className="rounded-md border border-border p-6">
                <StarRating rating={review.rating} />
                <Text className="mt-3 mb-4 text-base leading-snug text-foreground">
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
            </Column>
          ))}
        </Row>
      ))}
    </Section>
  );
};

export const TwoColumnsReviews = ({
  theme = defaultTheme,
  reviews = [
    { name: "Customer", rating: 5, text: "Great product!" },
    { name: "Customer", rating: 4, text: "Very satisfied." },
  ],
  variant = "default",
}: TwoColumnsReviewsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Customer Reviews</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <TwoColumnsReviewsSection reviews={reviews} variant={variant} />
      </Body>
    </Tailwind>
  </Html>
);

TwoColumnsReviews.PreviewProps = {
  reviews: [
    {
      avatarUrl:
        "https://api.dicebear.com/9.x/lorelei/png?seed=preview-avatar-1&size=128",
      date: "March 2026",
      name: "Alex Johnson",
      rating: 5,
      text: "Absolutely love this product! The quality exceeded my expectations and the shipping was incredibly fast.",
    },
    {
      avatarUrl:
        "https://api.dicebear.com/9.x/lorelei/png?seed=preview-avatar-2&size=128",
      date: "February 2026",
      name: "Maria Garcia",
      rating: 4,
      text: "Great value for the price. Would recommend to anyone looking for a reliable solution.",
    },
    {
      avatarUrl:
        "https://api.dicebear.com/9.x/lorelei/png?seed=preview-avatar-3&size=128",
      date: "January 2026",
      name: "David Kim",
      rating: 5,
      text: "Best purchase I've made this year. The attention to detail is remarkable.",
    },
    {
      avatarUrl:
        "https://api.dicebear.com/9.x/lorelei/png?seed=preview-avatar-4&size=128",
      date: "December 2025",
      name: "Sarah Chen",
      rating: 4,
      text: "Solid product with excellent customer support. A few minor improvements would make it perfect.",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies TwoColumnsReviewsProps;
