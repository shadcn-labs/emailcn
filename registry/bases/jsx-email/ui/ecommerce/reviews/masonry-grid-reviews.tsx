import { Body, Head, Html, Preview } from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";
import { ReviewsSection } from "@/registry/bases/jsx-email/ui/ecommerce/reviews/reviews-shared";
import type {
  ReviewItem,
  ReviewsVariant,
} from "@/registry/bases/jsx-email/ui/ecommerce/reviews/reviews-shared";

export interface MasonryGridReviewsProps {
  reviews?: ReviewItem[];
  theme?: EmailThemeTokens;
  variant?: ReviewsVariant;
}

export const MasonryGridReviewsSection = ({
  reviews,
  variant = "with-divider",
}: Omit<MasonryGridReviewsProps, "theme">) => (
  <ReviewsSection layout="masonry-grid" reviews={reviews} variant={variant} />
);

export const MasonryGridReviews = ({
  theme: _theme = defaultTheme,
  ...props
}: MasonryGridReviewsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Customer reviews</Preview>
    <Body style={{ margin: 0 }}>
      <MasonryGridReviewsSection {...props} />
    </Body>
  </Html>
);

MasonryGridReviews.PreviewProps = {
  theme: defaultTheme,
  variant: "with-divider",
} satisfies MasonryGridReviewsProps;
