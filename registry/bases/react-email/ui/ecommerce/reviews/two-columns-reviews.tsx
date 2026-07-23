import { Body, Head, Html, Preview, Tailwind } from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";
import { ReviewsSection } from "@/registry/bases/react-email/ui/ecommerce/reviews/reviews-shared";
import type {
  ReviewItem,
  ReviewsVariant,
} from "@/registry/bases/react-email/ui/ecommerce/reviews/reviews-shared";

export interface TwoColumnsReviewsProps {
  reviews?: ReviewItem[];
  theme?: TailwindConfig;
  variant?: ReviewsVariant;
}

export const TwoColumnsReviewsSection = ({
  reviews,
  variant = "with-divider",
}: Omit<TwoColumnsReviewsProps, "theme">) => (
  <ReviewsSection layout="two-columns" reviews={reviews} variant={variant} />
);

export const TwoColumnsReviews = ({
  theme = defaultTheme,
  ...props
}: TwoColumnsReviewsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Customer reviews</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <TwoColumnsReviewsSection {...props} />
      </Body>
    </Tailwind>
  </Html>
);

TwoColumnsReviews.PreviewProps = {
  theme: defaultTheme,
  variant: "with-divider",
} satisfies TwoColumnsReviewsProps;
