import { Body, Head, Html, Preview, Tailwind } from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";
import { ReviewsSection } from "@/registry/bases/react-email/ui/ecommerce/reviews/reviews-shared";
import type {
  ReviewItem,
  ReviewsVariant,
} from "@/registry/bases/react-email/ui/ecommerce/reviews/reviews-shared";

export interface MasonryGridReviewsProps {
  reviews?: ReviewItem[];
  theme?: TailwindConfig;
  variant?: ReviewsVariant;
}

export const MasonryGridReviewsSection = ({
  reviews,
  variant = "with-divider",
}: Omit<MasonryGridReviewsProps, "theme">) => (
  <ReviewsSection layout="masonry-grid" reviews={reviews} variant={variant} />
);

export const MasonryGridReviews = ({
  theme = defaultTheme,
  ...props
}: MasonryGridReviewsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Customer reviews</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <MasonryGridReviewsSection {...props} />
      </Body>
    </Tailwind>
  </Html>
);

MasonryGridReviews.PreviewProps = {
  theme: defaultTheme,
  variant: "with-divider",
} satisfies MasonryGridReviewsProps;
