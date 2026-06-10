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

export interface MasonryGridReviewsProps {
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

export const MasonryGridReviewsSection = ({
  reviews = [
    { name: "Customer", rating: 5, text: "Great product!" },
    { name: "Customer", rating: 4, text: "Very satisfied." },
    { name: "Customer", rating: 5, text: "Highly recommend!" },
  ],
  variant = "default",
}: Omit<MasonryGridReviewsProps, "theme">) => {
  const mid = Math.ceil(reviews.length / 2);
  const leftCol = reviews.slice(0, mid);
  const rightCol = reviews.slice(mid);

  return (
    <Section className="py-12">
      <Row>
        <Column className="w-1/2 pr-2 align-top">
          {leftCol.map((review, index) => (
            <Section
              key={`left-${review.name}-${index}`}
              className="mb-4 rounded-md border border-border p-6"
            >
              <StarRating rating={review.rating} />
              <Text className="mt-3 mb-4 text-base leading-snug text-foreground">
                &ldquo;{review.text}&rdquo;
              </Text>
              <Row>
                <Column className="w-[32px] align-middle">
                  {review.avatarUrl ? (
                    <Img
                      src={review.avatarUrl}
                      alt={review.name}
                      height={32}
                      width={32}
                      className="rounded-full object-cover"
                    />
                  ) : null}
                </Column>
                <Column className="pl-2 align-middle">
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
        </Column>
        <Column className="w-1/2 pl-2 align-top">
          {rightCol.map((review, index) => (
            <Section
              key={`right-${review.name}-${index}`}
              className="mb-4 rounded-md border border-border p-6"
            >
              <StarRating rating={review.rating} />
              <Text className="mt-3 mb-4 text-base leading-snug text-foreground">
                &ldquo;{review.text}&rdquo;
              </Text>
              <Row>
                <Column className="w-[32px] align-middle">
                  {review.avatarUrl ? (
                    <Img
                      src={review.avatarUrl}
                      alt={review.name}
                      height={32}
                      width={32}
                      className="rounded-full object-cover"
                    />
                  ) : null}
                </Column>
                <Column className="pl-2 align-middle">
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
        </Column>
      </Row>
    </Section>
  );
};

export const MasonryGridReviews = ({
  theme = defaultTheme,
  reviews = [
    { name: "Customer", rating: 5, text: "Great product!" },
    { name: "Customer", rating: 4, text: "Very satisfied." },
    { name: "Customer", rating: 5, text: "Highly recommend!" },
  ],
  variant = "default",
}: MasonryGridReviewsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Customer Reviews</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <MasonryGridReviewsSection reviews={reviews} variant={variant} />
      </Body>
    </Tailwind>
  </Html>
);

MasonryGridReviews.PreviewProps = {
  reviews: [
    {
      avatarUrl:
        "https://api.dicebear.com/9.x/lorelei/png?seed=preview-avatar-1&size=128",
      date: "March 2026",
      name: "Alex Johnson",
      rating: 5,
      text: "Absolutely love this product! Exceeded expectations.",
    },
    {
      avatarUrl:
        "https://api.dicebear.com/9.x/lorelei/png?seed=preview-avatar-2&size=128",
      date: "February 2026",
      name: "Maria Garcia",
      rating: 4,
      text: "Great value for the price.",
    },
    {
      avatarUrl:
        "https://api.dicebear.com/9.x/lorelei/png?seed=preview-avatar-3&size=128",
      date: "January 2026",
      name: "David Kim",
      rating: 5,
      text: "Best purchase this year. The quality is outstanding.",
    },
    {
      avatarUrl:
        "https://api.dicebear.com/9.x/lorelei/png?seed=preview-avatar-4&size=128",
      date: "December 2025",
      name: "Sarah Chen",
      rating: 4,
      text: "Solid product with excellent support.",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies MasonryGridReviewsProps;
